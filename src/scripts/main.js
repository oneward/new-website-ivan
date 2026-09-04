// Client-side behavior for the homepage, ported from the original design logic:
// sticky nav, rotating hero headline, lifecycle stage animation, chat demo,
// use-case role filter, and the integration-diagram responsive scaling.

const TENANTS = ['your HR systems', 'any HCM', 'Workday', 'SuccessFactors', 'Oracle HCM'];

function initStickyNav() {
  const bar = document.querySelector('[data-sticky-nav]');
  const heroCard = document.querySelector('[data-hero-card], [data-sticky-trigger]');
  if (!bar || !heroCard) return;
  const onScroll = () => {
    const past = heroCard.getBoundingClientRect().bottom < 0;
    bar.classList.toggle('is-shown', past);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initTenantWord() {
  const host = document.querySelector('[data-tenant-word]');
  if (!host) return;
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % TENANTS.length;
    const span = document.createElement('span');
    span.style.cssText = 'display: inline-block; white-space: nowrap; animation: owWordIn 0.55s cubic-bezier(0.22, 1, 0.36, 1);';
    span.innerHTML = `<span style="color: #2BD4FF;"></span>.`;
    span.firstChild.textContent = TENANTS[idx];
    host.replaceChildren(span);
  }, 2600);
}

function initLifecycle() {
  const roots = document.querySelectorAll('[data-lifecycle]');
  if (!roots.length) return;
  const stageEls = [...roots].flatMap((root) => [...root.querySelectorAll('[data-stage-i]')]);
  let tick = 0;
  const apply = () => {
    const active = Math.floor(tick / 5);
    const step = tick % 5;
    stageEls.forEach((el) => {
      const i = Number(el.dataset.stageI);
      el.classList.toggle('is-active', i === active);
      el.querySelectorAll('[data-task-j]').forEach((task) => {
        const j = Number(task.dataset.taskJ);
        const done = (i === active && j < step) || i < active;
        const live = i === active && j === step && step < 4;
        task.classList.toggle('is-done', done);
        task.classList.toggle('is-live', live);
      });
    });
  };
  apply();
  setInterval(() => {
    tick = (tick + 1) % 25;
    apply();
  }, 1600);
}

function initChat() {
  const root = document.querySelector('[data-chat]');
  if (!root) return;
  const panels = root.querySelectorAll('[data-chat-panel]');
  const tabs = root.querySelectorAll('[data-channel-tab]');
  if (!panels.length) return;
  let channel = 0;
  let step = 0;
  const apply = () => {
    panels.forEach((panel) => {
      const c = Number(panel.dataset.chatPanel);
      panel.classList.toggle('is-current', c === channel);
      panel.querySelectorAll('[data-at]').forEach((msg) => {
        msg.classList.toggle('is-on', step >= Number(msg.dataset.at));
      });
      panel.querySelectorAll('[data-approved-at]').forEach((card) => {
        card.classList.toggle('is-approved', step >= Number(card.dataset.approvedAt));
      });
    });
    tabs.forEach((tab) => {
      tab.classList.toggle('is-current', Number(tab.dataset.channelTab) === channel);
    });
  };
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      channel = Number(tab.dataset.channelTab);
      step = 0;
      apply();
    });
  });
  apply();
  setInterval(() => {
    if (step >= 10) {
      step = 0;
      channel = (channel + 1) % panels.length;
    } else {
      step += 1;
    }
    apply();
  }, 1400);
}

function initUseCaseFilter() {
  const root = document.querySelector('[data-usecases]');
  if (!root) return;
  const filters = root.querySelectorAll('[data-uc-filter]');
  const cards = root.querySelectorAll('[data-uc-roles]');
  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.ucFilter;
      filters.forEach((b) => b.classList.toggle('is-current', b === btn));
      cards.forEach((card) => {
        const roles = card.dataset.ucRoles.split('|');
        card.classList.toggle('is-hidden', role !== 'All' && !roles.includes(role));
      });
    });
  });
}

function initUseCaseModal() {
  const dialog = document.querySelector('[data-uc-modal]');
  if (!dialog) return;
  const field = (name) => dialog.querySelector(`[data-uc-field="${name}"]`);
  const iconEl = dialog.querySelector('[style*="--placeholder"]');
  const cards = [...document.querySelectorAll('.uc-card[data-uc-slug]')];
  const open = (card) => {
    const d = card.dataset;
    field('title').textContent = d.ucTitle;
    field('cat').textContent = d.ucCat;
    field('users').textContent = d.ucUsers;
    field('legacy').textContent = d.ucLegacy;
    field('solution').textContent = d.ucSolution;
    if (iconEl) {
      const url = `url('/assets/ph-${d.ucIcon}.svg')`;
      iconEl.style.webkitMaskImage = url;
      iconEl.style.maskImage = url;
    }
    dialog.classList.toggle('is-foundation', d.ucFoundation === 'true');
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    history.replaceState(null, '', `#${d.ucSlug}`);
  };
  cards.forEach((card) => {
    card.addEventListener('click', () => open(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(card);
      }
    });
  });
  dialog.querySelector('[data-uc-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dialog.open) dialog.close();
  });
  dialog.addEventListener('close', () => {
    if (location.hash) history.replaceState(null, '', location.pathname);
  });
  const openFromHash = () => {
    const slug = decodeURIComponent(location.hash.slice(1));
    const match = slug && cards.find((c) => c.dataset.ucSlug === slug);
    if (match) {
      match.scrollIntoView({ block: 'center' });
      open(match);
    }
  };
  window.addEventListener('hashchange', openFromHash);
  openFromHash();
}

function initDemoModal() {
  const dialog = document.querySelector('[data-demo-modal]');
  if (!dialog) return;
  const frame = dialog.querySelector('iframe');
  const open = () => {
    if (!frame.src) frame.src = frame.dataset.src;
    if (!dialog.open) dialog.showModal();
  };
  document.querySelectorAll('a[data-demo]').forEach((a) => {
    a.addEventListener('click', (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
      e.preventDefault();
      open();
    });
  });
  dialog.querySelector('[data-demo-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && dialog.open) dialog.close();
  });
}

// About page: the request-flow panel steps through its stages, then shows
// the finished state with the audit line, and loops.
function initFlowDemo() {
  const root = document.querySelector('[data-flow]');
  if (!root) return;
  const steps = root.querySelectorAll('[data-flow-step]');
  const status = root.querySelector('.flow-status-text');
  const n = steps.length;
  let tick = 0;
  const apply = () => {
    const done = tick >= n;
    steps.forEach((el) => {
      const i = Number(el.dataset.flowStep);
      el.classList.toggle('is-on', i < tick);
      el.classList.toggle('is-live', i === tick);
    });
    root.classList.toggle('is-done', done);
    status.textContent = done ? 'DONE' : 'RUNNING';
  };
  apply();
  setInterval(() => {
    tick = (tick + 1) % (n + 3);
    apply();
  }, 1300);
}

function initDiagramScale() {
  document.querySelectorAll('[data-diagram-wrap]').forEach((wrap) => {
    const inner = wrap.querySelector('[data-diagram]');
    if (!inner) return;
    const measure = () => {
      const sc = Math.min(1, wrap.clientWidth / 1032);
      inner.style.transform = `scale(${sc.toFixed(4)})`;
      wrap.style.height = `${Math.round(552 * sc)}px`;
    };
    new ResizeObserver(measure).observe(wrap);
    measure();
  });
}

initStickyNav();
initTenantWord();
initLifecycle();
initChat();
initUseCaseFilter();
initUseCaseModal();
initDemoModal();
initFlowDemo();
initDiagramScale();
