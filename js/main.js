/* ========================================================================
   Open University – Academic Study Portal
   Main JavaScript – Global Navigation, Animations & Summary Tabs
   ======================================================================== */

const PORTAL_COURSES = [
  {
    slug: 'logic',
    title: 'לוגיקה למדעי המחשב',
    shortTitle: 'לוגיקה',
    code: '20466',
    icon: '⊨',
    color: 'linear-gradient(135deg,#4f8ff7,#7c3aed)',
    image: 'assets/images/logic-course.svg',
    home: 'courses/logic/index.html',
    summaries: 'courses/logic/summaries.html',
    items: [
      { id: 's1', label: 'מפגש 1 – תחביר' },
      { id: 's2', label: 'מפגש 2 – אינדוקציה' },
      { id: 's3', label: 'מפגש 3 – סמנטיקה' },
      { id: 's4', label: 'מפגש 4 – תורת ההוכחה' },
      { id: 's5', label: 'מפגש 5 – שפת היחסים' },
      { id: 's6', label: 'מפגש 6 – אמיתות וצורה פרנקסית' },
      { id: 's7', label: 'מפגש 7 – הוכחות בשפת היחסים' }
    ]
  },
  {
    slug: 'manma',
    title: 'מבני נתונים ומבוא לאלגוריתמים',
    shortTitle: 'מנמ״א',
    code: '20407',
    icon: '📊',
    color: 'linear-gradient(135deg,#34d399,#22d3ee)',
    image: 'assets/images/algorithms-course.svg',
    home: 'courses/manma/index.html',
    summaries: 'courses/manma/summaries.html',
    items: [
      { id: 's1', label: 'שיעור 1 – מבוא והוכחת נכונות' },
      { id: 's2', label: 'שיעור 2 – סיבוכיות' },
      { id: 's3', label: 'שיעור 3 – נוסחאות נסיגה' },
      { id: 's4', label: 'שיעור 4 – ערימות' },
      { id: 's5a', label: 'שיעור 5א – מיון מהיר' },
      { id: 's5b', label: 'שיעור 5ב – בעיית הבחירה' },
      { id: 's6', label: 'שיעור 6 – חסמים ומיון לינארי' },
      { id: 's7', label: 'שיעור 7 – תוחלת ומבני נתונים' }
    ]
  },
  {
    slug: 'linear2',
    title: 'אלגברה לינארית 2',
    shortTitle: 'לינארית 2',
    code: '20229',
    icon: '𝝀',
    color: 'linear-gradient(135deg,#a78bfa,#f472b6)',
    image: 'assets/images/linear2-course.svg',
    home: 'courses/linear2/index.html',
    summaries: 'courses/linear2/summaries.html',
    items: [
      { id: 's0', label: 'רקע מלינארית 1' },
      { id: 's1', label: 'מפגש 1 – מכפלה פנימית' },
      { id: 's2', label: 'מפגש 2 – צמודה וריס' },
      { id: 's3', label: 'מפגש 3 – לכסון אוניטרי' },
      { id: 's4', label: 'מפגש 4 – המשפט הספקטרלי' },
      { id: 's45', label: 'מפגש 4.5 – תבניות' },
      { id: 's5', label: 'מפגש 5 – חפיפה ולכסון' },
      { id: 's6', label: 'מפגש 6 – צורה קנונית' },
      { id: 's7', label: 'מפגש 7 – תבניות ריבועיות ממשיות' }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initGlobalNav();
  initLenis();
  initNav();
  initGSAP();
  initSummaryTabs();
});

function getRootPrefix() {
  const path = window.location.pathname.replace(/\\/g, '/');
  return /\/courses\/[^/]+\//.test(path) ? '../../' : '';
}

function pagePathWithoutHash() {
  return window.location.pathname.replace(/\\/g, '/').replace(/\/index\.html$/, '/');
}

function resolvePath(path) {
  return getRootPrefix() + path;
}

function currentCourseSlug() {
  const match = pagePathWithoutHash().match(/\/courses\/([^/]+)\//);
  return match ? match[1] : null;
}

function initGlobalNav() {
  const oldNavs = document.querySelectorAll('.nav, .nav-overlay');
  oldNavs.forEach(el => el.remove());

  const activeSlug = currentCourseSlug();
  const isHome = !activeSlug;
  const root = getRootPrefix();

  const nav = document.createElement('nav');
  nav.className = 'global-nav';
  nav.setAttribute('aria-label', 'ניווט ראשי');
  nav.innerHTML = `
    <div class="global-nav__shell">
      <a class="global-nav__brand" href="${root}index.html" aria-label="דף הבית של פורטל הלימוד">
        <span class="global-nav__brand-icon">🎓</span>
        <span class="global-nav__brand-text">
          <strong>פורטל לימוד</strong>
          <small>סיכומי קורסים</small>
        </span>
      </a>

      <div class="global-nav__desktop" role="menubar">
        <a class="global-nav__link ${isHome ? 'active' : ''}" href="${root}index.html">ראשי</a>
        <div class="global-nav__dropdown" data-dropdown>
          <button class="global-nav__link global-nav__dropdown-button ${activeSlug ? 'active' : ''}" type="button" aria-expanded="false" aria-haspopup="true">
            קורסים
            <span class="global-nav__chevron">⌄</span>
          </button>
          <div class="mega-menu" role="menu">
            <div class="mega-menu__courses" aria-label="רשימת קורסים לגלילה אופקית">
              ${PORTAL_COURSES.map(course => courseCard(course, activeSlug, root)).join('')}
            </div>
          </div>
        </div>
      </div>

      <button class="global-nav__mobile-toggle" type="button" aria-label="פתיחת תפריט" aria-expanded="false" data-mobile-toggle>
        <span></span><span></span><span></span>
      </button>
    </div>

    <div class="mobile-nav" data-mobile-menu>
      <a class="mobile-nav__link ${isHome ? 'active' : ''}" href="${root}index.html">ראשי</a>
      <div class="mobile-nav__courses">
        ${PORTAL_COURSES.map(course => mobileCourseBlock(course, activeSlug, root)).join('')}
      </div>
    </div>
  `;

  const backdrop = document.createElement('div');
  backdrop.className = 'global-nav-backdrop';
  backdrop.setAttribute('data-global-nav-backdrop', '');

  document.body.prepend(backdrop);
  document.body.prepend(nav);
}

function courseCard(course, activeSlug, root) {
  return `
    <article class="mega-course ${activeSlug === course.slug ? 'active' : ''}">
      <div class="mega-course__image">
        <img src="${root}${course.image}" alt="איור עבור ${course.title}" loading="lazy">
      </div>
      <div class="mega-course__head">
        <span class="mega-course__icon" style="background:${course.color}">${course.icon}</span>
        <span>
          <strong>${course.shortTitle}</strong>
          <small>${course.code} · ${course.title}</small>
        </span>
      </div>
      <div class="mega-course__actions">
        <a href="${root}${course.home}">עמוד הקורס</a>
        <a href="${root}${course.summaries}">כל הסיכומים</a>
      </div>
      <div class="mega-course__summaries">
        ${course.items.map(item => `<a href="${root}${course.summaries}#${item.id}">${item.label}</a>`).join('')}
      </div>
    </article>
  `;
}

function mobileCourseBlock(course, activeSlug, root) {
  return `
    <details class="mobile-course" ${activeSlug === course.slug ? 'open' : ''}>
      <summary>
        <span class="mega-course__icon" style="background:${course.color}">${course.icon}</span>
        <span>${course.shortTitle} · ${course.code}</span>
      </summary>
      <div class="mobile-course__body">
        <a href="${root}${course.home}">עמוד הקורס</a>
        <a href="${root}${course.summaries}">כל הסיכומים</a>
        ${course.items.map(item => `<a href="${root}${course.summaries}#${item.id}">${item.label}</a>`).join('')}
      </div>
    </details>
  `;
}

/* --- Lenis Smooth Scroll --- */
function initLenis() {
  if (typeof Lenis === 'undefined') return;
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
}

/* --- Global Navigation Interactions --- */
function initNav() {
  const nav = document.querySelector('.global-nav');
  const dropdown = document.querySelector('[data-dropdown]');
  const dropdownButton = dropdown?.querySelector('.global-nav__dropdown-button');
  const mobileToggle = document.querySelector('[data-mobile-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  const backdrop = document.querySelector('[data-global-nav-backdrop]');

  const closeDropdown = () => {
    dropdown?.classList.remove('open');
    dropdownButton?.setAttribute('aria-expanded', 'false');
  };
  const closeMobile = () => {
    mobileToggle?.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileMenu?.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.classList.remove('nav-lock');
  };

  const onScroll = () => {
    if (window.scrollY > 28) nav?.classList.add('scrolled');
    else nav?.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  dropdownButton?.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = dropdown.classList.toggle('open');
    dropdownButton.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) closeMobile();
  });

  mobileToggle?.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    mobileToggle.classList.toggle('open', isOpen);
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    backdrop?.classList.toggle('open', isOpen);
    document.body.classList.toggle('nav-lock', isOpen);
    closeDropdown();
  });

  backdrop?.addEventListener('click', closeMobile);

  document.addEventListener('click', (event) => {
    if (dropdown && !dropdown.contains(event.target)) closeDropdown();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeDropdown();
      closeMobile();
    }
  });

  document.querySelectorAll('.global-nav a, .mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      closeDropdown();
      closeMobile();
    });
  });
}

/* --- GSAP Animations --- */
function initGSAP() {
  if (typeof gsap === 'undefined') return;

  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.set('.reveal', { opacity: 0, y: 40 });

  const heroTl = gsap.timeline({ delay: 0.3 });
  if (document.querySelector('.hero__badge')) {
    heroTl
      .to('.hero__badge', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' })
      .to('.hero__title', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .to('.hero__subtitle', { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, '-=0.4')
      .to('.hero__actions', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3');
  }

  if (typeof ScrollTrigger === 'undefined') return;

  document.querySelectorAll('.reveal-group').forEach(group => {
    const children = group.querySelectorAll('.reveal-item');
    if (!children.length) return;
    gsap.set(children, { opacity: 0, y: 35 });
    ScrollTrigger.create({
      trigger: group,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1, y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out'
        });
      }
    });
  });

  document.querySelectorAll('.reveal').forEach(el => {
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' });
      }
    });
  });

  if (document.querySelector('.page-header')) {
    gsap.from('.page-header__title', { opacity: 0, y: 30, duration: 0.7, ease: 'power2.out', delay: 0.2 });
    gsap.from('.page-header__desc', { opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', delay: 0.4 });
  }

  document.querySelectorAll('.stat-card__number').forEach(el => {
    const target = parseInt(el.dataset.count) || parseInt(el.textContent);
    if (isNaN(target)) return;
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.from(el, {
          textContent: 0,
          duration: 1.5,
          ease: 'power1.out',
          snap: { textContent: 1 },
          onUpdate: function() {
            el.textContent = Math.ceil(parseFloat(el.textContent));
          }
        });
      }
    });
  });
}

/* --- Summary Tabs + Deep Links --- */
function initSummaryTabs() {
  const tabs = document.querySelectorAll('.summary-tab');
  const panels = document.querySelectorAll('.summary-panel');
  if (!tabs.length || !panels.length) return;

  const activatePanel = (targetId, { updateHash = false, scroll = false } = {}) => {
    const target = document.getElementById(targetId);
    const tab = Array.from(tabs).find(t => t.dataset.target === targetId);
    if (!target || !tab) return false;

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    panels.forEach(p => p.classList.remove('active'));
    target.classList.add('active');

    if (updateHash && window.location.hash !== `#${targetId}`) {
      history.replaceState(null, '', `#${targetId}`);
    }

    if (scroll) {
      setTimeout(() => {
        const navHeight = document.querySelector('.global-nav')?.offsetHeight || 86;
        const tabsTop = document.querySelector('.summaries-nav')?.getBoundingClientRect().top || target.getBoundingClientRect().top;
        window.scrollTo({ top: window.scrollY + tabsTop - navHeight - 18, behavior: 'smooth' });
      }, 30);
    }

    if (typeof gsap !== 'undefined') {
      gsap.fromTo(target,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
      );
    }
    renderMathInPanel(target);
    return true;
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      activatePanel(tab.dataset.target, { updateHash: true, scroll: false });
    });
  });

  const activateFromHash = (shouldScroll = false) => {
    const hash = decodeURIComponent(window.location.hash.replace('#', ''));
    if (hash) return activatePanel(hash, { scroll: shouldScroll });
    const activePanel = document.querySelector('.summary-panel.active') || panels[0];
    if (activePanel) return activatePanel(activePanel.id);
    return false;
  };

  activateFromHash(Boolean(window.location.hash));
  window.addEventListener('hashchange', () => activateFromHash(true));
}

function renderMathInPanel(panel) {
  if (!panel || typeof renderMathInElement === 'undefined') return;
  try {
    renderMathInElement(panel, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$', right: '$', display: false },
        { left: '\\(', right: '\\)', display: false },
        { left: '\\[', right: '\\]', display: true }
      ],
      throwOnError: false
    });
  } catch(e) { /* KaTeX not loaded */ }
}
