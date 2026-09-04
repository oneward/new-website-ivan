// 30-day analysis request form (rendered twice on the page).
//
// The site is static, so submissions go to FORM_ENDPOINT (any service that
// accepts a JSON POST, e.g. Formspree or Basin). While it is empty, the form
// falls back to opening a pre-filled email to partners@getoneward.com so
// requests still arrive.
const FORM_ENDPOINT = '';
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

function initForm(form) {
  const submit = form.querySelector('[type="submit"]');
  const done = form.parentElement.querySelector('[data-analysis-done]');
  const error = form.querySelector('[data-analysis-error]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    error.hidden = true;

    if (!FORM_ENDPOINT) {
      const body = Object.entries(labels)
        .filter(([k]) => data[k])
        .map(([k, label]) => `${label}: ${data[k]}`)
        .join('\n');
      const subject = `30-day analysis request: ${data.company || data.name}`;
      window.location.href = `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      form.hidden = true;
      done.hidden = false;
      return;
    }

    submit.disabled = true;
    submit.textContent = 'Sending…';
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.hidden = true;
      done.hidden = false;
    } catch (err) {
      error.hidden = false;
      submit.disabled = false;
      submit.textContent = 'Request my free analysis';
    }
  });
}

document.querySelectorAll('[data-multiselect]').forEach(initMultiSelect);
document.querySelectorAll('[data-analysis-form]').forEach(initForm);
