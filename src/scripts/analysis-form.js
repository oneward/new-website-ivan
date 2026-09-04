// 30-day analysis request form.
//
// The site is static, so submissions go to FORM_ENDPOINT (any service that
// accepts a JSON POST, e.g. Formspree or Basin). While it is empty, the form
// falls back to opening a pre-filled email to partners@getoneward.com so
// requests still arrive.
const FORM_ENDPOINT = '';
const FALLBACK_EMAIL = 'partners@getoneward.com';

const form = document.querySelector('[data-analysis-form]');
if (form) {
  const submit = form.querySelector('[type="submit"]');
  const done = document.querySelector('[data-analysis-done]');
  const error = form.querySelector('[data-analysis-error]');

  const labels = {
    name: 'Name',
    email: 'Email',
    company: 'Company',
    location: 'Location',
    website: 'Company website',
    hris: 'Current HRIS',
    tools: 'Other HR tools',
  };

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
