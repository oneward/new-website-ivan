// 30-day analysis request form (rendered twice on the page).
//
// The site is static and has no form backend yet: submitting opens a
// pre-filled email to partners@getoneward.com with the entered fields.
// SUBMIT_EMAIL is the only delivery path until a backend is chosen.
const SUBMIT_EMAIL = 'partners@getoneward.com';

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
  const done = form.parentElement.querySelector('[data-analysis-done]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());

    const body = Object.entries(labels)
      .filter(([k]) => data[k])
      .map(([k, label]) => `${label}: ${data[k]}`)
      .join('\n');
    const subject = `30-day analysis request: ${data.company || data.name}`;
    window.location.href = `mailto:${SUBMIT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    await showDone(form, done);
  });
}

// Swap the form for the thank-you state without the card changing size:
// freeze the card at its current height, fade the form out, then ease the
// message in, centered in the same space.
function showDone(form, done) {
  const card = form.closest('[data-analysis-card]');
  card.style.height = `${card.getBoundingClientRect().height}px`;
  form.classList.add('is-leaving');
  return new Promise((resolve) => {
    setTimeout(() => {
      form.hidden = true;
      done.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        done.classList.add('is-shown');
        resolve();
      }));
    }, 300);
  });
}

document.querySelectorAll('[data-multiselect]').forEach(initMultiSelect);
document.querySelectorAll('[data-analysis-form]').forEach(initForm);
