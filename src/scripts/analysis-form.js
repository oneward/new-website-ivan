// 30-day analysis request form (rendered twice on the page).
//
// The site is static, so submissions are delivered through PostHog (loaded in
// Base.astro): the visitor is identified by email and an `analysis_requested`
// event carries the form fields. If PostHog is blocked (ad blocker, strict
// privacy settings), the form falls back to opening a pre-filled email to
// partners@getoneward.com so requests still arrive.
const EVENT_NAME = 'analysis_requested';
const FALLBACK_EMAIL = 'partners@getoneward.com';

const labels = {
  name: 'Name',
  email: 'Email',
  company: 'Company',
  location: 'Location',
  website: 'Company website',
  hris: 'Current HRIS',
  tools: 'Other HR tools',
};

function initMultiSelect(root) {
  const trigger = root.querySelector('[data-ms-trigger]');
  const panel = root.querySelector('[data-ms-panel]');
  const value = root.querySelector('[data-ms-value]');
  const input = root.querySelector('[data-ms-input]');
  const boxes = [...panel.querySelectorAll('input[type="checkbox"]')];

  const setOpen = (open) => {
    if (open) {
      const below = window.innerHeight - trigger.getBoundingClientRect().bottom;
      panel.classList.toggle('is-up', below < 320);
    }
    panel.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  };
  const render = () => {
    const picked = boxes.filter((b) => b.checked).map((b) => b.value);
    input.value = picked.join(', ');
    if (!picked.length) {
      value.textContent = value.dataset.placeholder;
      value.classList.remove('is-set');
    } else {
      value.textContent = picked.length <= 2 ? picked.join(', ') : `${picked.slice(0, 2).join(', ')} +${picked.length - 2}`;
      value.classList.add('is-set');
    }
  };

  trigger.addEventListener('click', () => setOpen(panel.hidden));
  boxes.forEach((b) => b.addEventListener('change', render));
  document.addEventListener('click', (e) => {
    if (!root.contains(e.target)) setOpen(false);
  });
  root.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
      trigger.focus();
    }
  });
  render();
}

// Resolves with the PostHog client once its script has loaded, or with null
// if it has not loaded within `timeout` ms (blocked or offline).
function waitForPostHog(timeout = 2500) {
  return new Promise((resolve) => {
    const started = Date.now();
    const check = () => {
      const ph = window.posthog;
      if (ph && ph.__loaded) return resolve(ph);
      if (Date.now() - started > timeout) return resolve(null);
      setTimeout(check, 100);
    };
    check();
  });
}

function initForm(form) {
  const submit = form.querySelector('[type="submit"]');
  const done = form.parentElement.querySelector('[data-analysis-done]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());

    submit.disabled = true;
    const ph = await waitForPostHog();
    if (ph) {
      const props = {
        name: data.name,
        email: data.email,
        company: data.company || null,
        location: data.location || null,
        website: data.website || null,
        hris: data.hris || null,
        hr_tools: data.tools ? data.tools.split(', ') : [],
      };
      ph.identify(data.email, props);
      ph.capture(EVENT_NAME, { ...props, form_position: form.dataset.analysisForm || 'hero' }, { send_instantly: true });
    } else {
      const body = Object.entries(labels)
        .filter(([k]) => data[k])
        .map(([k, label]) => `${label}: ${data[k]}`)
        .join('\n');
      const subject = `30-day analysis request: ${data.company || data.name}`;
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    submit.disabled = false;
    form.hidden = true;
    done.hidden = false;
  });
}

document.querySelectorAll('[data-multiselect]').forEach(initMultiSelect);
document.querySelectorAll('[data-analysis-form]').forEach(initForm);
