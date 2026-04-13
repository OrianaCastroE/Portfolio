/* ─── CURSOR ─────────────────────────────────────────── */
const dot  = document.getElementById('cur-dot');
const ring = document.getElementById('cur-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', function(e) {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px';
  dot.style.top  = my + 'px';
});

(function loop() {
  rx += (mx - rx) * 0.11;
  ry += (my - ry) * 0.11;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

document.querySelectorAll('a, button, .proj-card, .srv-card, .sk-chip, .c-link').forEach(function(el) {
  el.addEventListener('mouseenter', function() {
    dot.classList.add('active');
    ring.classList.add('active');
  });
  el.addEventListener('mouseleave', function() {
    dot.classList.remove('active');
    ring.classList.remove('active');
  });
});

/* ─── NAV SCROLL ─────────────────────────────────────── */
var nav = document.getElementById('nav');
var navToggle = document.getElementById('nav-toggle');
var navLinks = document.querySelectorAll('.nav-links a');

function closeMobileMenu() {
  if (!nav) return;
  nav.classList.remove('menu-open');
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', 'false');
  }
}

if (navToggle && nav) {
  navToggle.addEventListener('click', function() {
    var isOpen = nav.classList.toggle('menu-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

navLinks.forEach(function(link) {
  link.addEventListener('click', closeMobileMenu);
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    nav.classList.add('stuck');
  } else {
    nav.classList.remove('stuck');
  }
}, { passive: true });

window.addEventListener('resize', function() {
  if (window.innerWidth > 980) {
    closeMobileMenu();
  }
}, { passive: true });

/* ─── SCROLL REVEAL ──────────────────────────────────── */
var revealEls = document.querySelectorAll('.reveal');

function checkReveal() {
  var windowH = window.innerHeight;
  revealEls.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < windowH - 60) {
      el.classList.add('on');
    }
  });
}

window.addEventListener('scroll', checkReveal, { passive: true });
window.addEventListener('resize', checkReveal, { passive: true });
// Ejecutar inmediatamente para los elementos ya visibles
checkReveal();

/* ─── SMOOTH ANCHORS ─────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    var href = a.getAttribute('href');
    if (href === '#') return;
    var target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ─── I18N TOGGLE ───────────────────────────────────── */
var i18n = {
  es: {
    pageTitle: 'Oriana Castro',
    pageDescription: 'Desarrolladora de software freelance en Montevideo. Sitios web, automatizaciones y herramientas a medida. C#, JavaScript, HTML/CSS, MySQL.',
    navAbout: 'Sobre mi',
    navServices: 'Servicios',
    navProjects: 'Proyectos',
    navContact: 'Contacto',
    navCta: 'Hablemos',
    heroAvailability: 'Disponible para proyectos',
    heroTitle: 'Hola, soy <span class="name">Oriana Castro</span><span class="role">Desarrolladora de Software</span>',
    heroSubtitle: 'Estudio Ingenieria en Sistemas en ORT Uruguay y construyo software real para negocios reales: sitios web, automatizaciones y herramientas que ahorran tiempo y dinero.',
    heroPrimaryCta: 'Ver proyectos <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 2.5l5 5-5 5"/></svg>',
    heroSecondaryCta: 'Contactarme ->',
    heroStatProjects: 'Proyectos entregados',
    heroStatSemester: 'Semestre · ORT UY',
    heroStatYears: 'Años programando',
    scrollHint: 'Hace scroll <span class="scroll-arrow">↓</span>',
    scrollAria: 'Ir a la seccion Sobre mi',
    aboutEyebrow: '01 - Sobre mi',
    aboutTitle: 'Dev con vision de producto.',
    aboutSubtitle: 'Creo soluciones a problemas reales.',
    aboutP1: 'Soy <strong>Oriana Castro</strong>, 23 años, Montevideo. Estudio Ingeniería en Sistemas en <strong>ORT Uruguay</strong> (6to semestre) y trabajo en proyectos freelance desde que empecé la carrera.',
    aboutP2: 'Mi foco esta en <strong>desarrollo web y automatizaciones</strong>. Entrego codigo limpio, documentado y facil de mantener, sin vender mas de lo que puedo cumplir.',
    aboutP3: 'Ya tengo en produccion sitios para un <strong>grupo empresarial con 3 marcas</strong>, con dominio propio, subdominios y coherencia visual de punta a punta. Si tenes un proyecto, podemos hablarlo.',
    stackLabel: 'Stack tecnologico',
    servicesEyebrow: '02 - Servicios',
    servicesTitle: 'Tu negocio deberia ganar mas dinero.',
    servicesSubtitle: 'Un sitio lento, sin presencia digital o con procesos manuales te esta costando clientes hoy. Esto es lo que hago para que eso no pase.',
    srv1Title: 'Desarrollo web',
    srv1Desc: 'Un sitio web profesional convierte visitas en clientes. Si no tenes uno, o el tuyo da verguenza, estas regalando ventas a tu competencia.',
    srv1Roi: 'Resultado: mas consultas, mas ventas, mejor imagen.',
    srv2Title: 'Automatizaciones y bots',
    srv2Desc: 'Cada hora que tu equipo gasta en tareas repetitivas es plata tirada. Automatizo esos procesos para que las personas se enfoquen en lo que genera valor.',
    srv2Roi: 'Resultado: menos errores, menos horas perdidas, mas rentabilidad.',
    srv3Title: 'Dashboards y herramientas',
    srv3Desc: 'Si tomas decisiones sin datos o con datos desorganizados, te equivocas mas. Construyo paneles claros para que veas tu negocio de un vistazo.',
    srv3Roi: 'Resultado: decisiones mas rapidas, menos sorpresas.',
    projectsEyebrow: '03 - Proyectos',
    projectsTitle: 'Trabajo real, entregado.',
    projectsSubtitle: 'Clientes reales en Uruguay. No son demos, estan en produccion.',
    projectView: 'Ver ->',
    projectComingClient: 'En desarrollo',
    projectComingTitle: 'Mas proyectos en camino',
    projectComingDesc: 'Queres ser el proximo? Hablemos de tu proyecto.',
    projectTalk: 'Hablemos ->',
    contactEyebrow: '04 - Contacto',
    contactTitle: 'Arrancamos<br><span class="ghost">algo juntos?</span>',
    contactSubtitle: 'Estoy disponible para proyectos freelance en Uruguay y remoto.<br>Respondo en menos de 24 horas. Sin compromisos.',
    footerStatus: 'Disponible para proyectos',
    toggleLabel: 'EN',
    toggleAria: 'Switch page language to English'
  },
  en: {
    pageTitle: 'Oriana Castro',
    pageDescription: 'Freelance software developer in Montevideo. Websites, automations, and custom tools. C#, JavaScript, HTML/CSS, MySQL.',
    navAbout: 'About',
    navServices: 'Services',
    navProjects: 'Projects',
    navContact: 'Contact',
    navCta: 'Lets talk',
    heroAvailability: 'Available for projects',
    heroTitle: 'Hi, I am <span class="name">Oriana Castro</span><span class="role">Software Developer</span>',
    heroSubtitle: 'I study Systems Engineering at ORT Uruguay and build real software for real businesses: websites, automations, and tools that save time and money.',
    heroPrimaryCta: 'View projects <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 2.5l5 5-5 5"/></svg>',
    heroSecondaryCta: 'Contact me ->',
    heroStatProjects: 'Projects delivered',
    heroStatSemester: 'Semester · ORT UY',
    heroStatYears: 'Years coding',
    scrollHint: 'Scroll down <span class="scroll-arrow">↓</span>',
    scrollAria: 'Go to About section',
    aboutEyebrow: '01 - About',
    aboutTitle: 'Developer with product vision.',
    aboutSubtitle: 'I build solutions for real problems.',
    aboutP1: 'I am <strong>Oriana Castro</strong>, 23, from Montevideo. I study Systems Engineering at <strong>ORT Uruguay</strong> (6th semester) and I have worked on freelance projects since the start of my degree.',
    aboutP2: 'My focus is <strong>web development and automations</strong>. I deliver clean, documented, and maintainable code, without overpromising.',
    aboutP3: 'I already have live websites for a <strong>business group with 3 brands</strong>, with custom domains, subdomains, and consistent visual identity end to end. If you have a project, lets talk.',
    stackLabel: 'Tech stack',
    servicesEyebrow: '02 - Services',
    servicesTitle: 'Your business should make more money.',
    servicesSubtitle: 'A slow site, weak digital presence, or manual workflows are costing you clients today. This is what I do to fix that.',
    srv1Title: 'Web development',
    srv1Desc: 'A professional website turns visits into clients. If you do not have one, or yours looks outdated, you are giving sales to competitors.',
    srv1Roi: 'Result: more leads, more sales, stronger brand.',
    srv2Title: 'Automations and bots',
    srv2Desc: 'Every hour your team spends on repetitive tasks is money lost. I automate those processes so people can focus on what creates value.',
    srv2Roi: 'Result: fewer errors, fewer wasted hours, more profitability.',
    srv3Title: 'Dashboards and tools',
    srv3Desc: 'If you make decisions without clear data, mistakes grow. I build clear dashboards so you can understand your business at a glance.',
    srv3Roi: 'Result: faster decisions, fewer surprises.',
    projectsEyebrow: '03 - Projects',
    projectsTitle: 'Real work, shipped.',
    projectsSubtitle: 'Real clients in Uruguay. These are live projects, not demos.',
    projectView: 'View ->',
    projectComingClient: 'In progress',
    projectComingTitle: 'More projects coming soon',
    projectComingDesc: 'Want to be next? Lets talk about your project.',
    projectTalk: 'Lets talk ->',
    contactEyebrow: '04 - Contact',
    contactTitle: 'Shall we build<br><span class="ghost">something together?</span>',
    contactSubtitle: 'I am available for freelance projects in Uruguay and remotely.<br>I reply in less than 24 hours. No commitment.',
    footerStatus: 'Available for projects',
    toggleLabel: 'ES',
    toggleAria: 'Cambiar idioma a español'
  }
};

var langBtn = document.getElementById('lang-toggle');
var currentLang = localStorage.getItem('lang') || 'es';
var terminalRunId = 0;

function getTerminalLines(lang) {
  if (lang === 'en') {
    return [
      { k: 'cmd', t: 'whoami' },
      { k: 'out', t: '<span class="hi">Oriana Castro</span> - Freelance Developer' },
      { k: 'cmd', t: 'ls projects/' },
      { k: 'out', t: '<span class="hi">TransportesCastro/</span> <span class="hi2">Volcast/</span> <span class="hi3">Barometrica/</span> <span class="hi4">others/</span> ' },
      { k: 'cmd', t: 'echo $status' },
      { k: 'out', t: '<span class="hi">available for projects</span> ✓' }
    ];
  }

  return [
    { k: 'cmd', t: 'whoami' },
    { k: 'out', t: '<span class="hi">Oriana Castro</span> - Desarrolladora Freelance' },
    { k: 'cmd', t: 'ls proyectos/' },
    { k: 'out', t: '<span class="hi">TransportesCastro/</span> <span class="hi2">Volcast/</span> <span class="hi3">Barometrica/</span> <span class="hi4">otros/</span> ' },
    { k: 'cmd', t: 'echo $status' },
    { k: 'out', t: '<span class="hi">disponible para proyectos</span> ✓' }
  ];
}

function applyTranslations(lang) {
  var dict = i18n[lang] || i18n.es;

  document.documentElement.lang = lang;
  document.title = dict.pageTitle;

  var metaDesc = document.getElementById('meta-description');
  if (metaDesc) {
    metaDesc.setAttribute('content', dict.pageDescription);
  }

  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  var scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    scrollHint.setAttribute('aria-label', dict.scrollAria);
  }

  if (langBtn) {
    langBtn.textContent = dict.toggleLabel;
    langBtn.setAttribute('aria-label', dict.toggleAria);
  }

  localStorage.setItem('lang', lang);
  currentLang = lang;
}

/* ─── TERMINAL TYPEWRITER ────────────────────────────── */
function startTerminalTyping(lang) {
  var tbody = document.getElementById('terminal-body');
  if (!tbody) return;

  terminalRunId += 1;
  var runId = terminalRunId;
  var lines = getTerminalLines(lang);
  var lineIndex = 0;

  tbody.innerHTML = '';

  function addCursorLine() {
    if (runId !== terminalRunId) return;
    var div = document.createElement('div');
    div.className = 't-line';
    div.innerHTML = '<span class="t-prompt">~/oriana $</span><span class="t-cursor"></span>';
    tbody.appendChild(div);
  }

  function nextLine() {
    if (runId !== terminalRunId) return;
    if (lineIndex >= lines.length) {
      addCursorLine();
      return;
    }

    var l = lines[lineIndex++];
    var div = document.createElement('div');
    div.className = 't-line';

    if (l.k === 'cmd') {
      div.innerHTML = '<span class="t-prompt">~/oriana $</span><span class="t-cmd"></span>';
      tbody.appendChild(div);
      var cmd = div.querySelector('.t-cmd');
      var charIdx = 0;

      function typeChar() {
        if (runId !== terminalRunId) return;
        if (charIdx <= l.t.length) {
          cmd.textContent = l.t.slice(0, charIdx++);
          setTimeout(typeChar, 45 + Math.random() * 25);
        } else {
          setTimeout(nextLine, 180);
        }
      }

      typeChar();
    } else {
      div.innerHTML = '<span class="t-out">' + l.t + '</span>';
      tbody.appendChild(div);
      setTimeout(nextLine, 90);
    }

    tbody.scrollTop = tbody.scrollHeight;
  }

  setTimeout(nextLine, 400);
}

if (!i18n[currentLang]) {
  currentLang = 'es';
}

applyTranslations(currentLang);
startTerminalTyping(currentLang);

if (langBtn) {
  langBtn.addEventListener('click', function() {
    var nextLang = currentLang === 'es' ? 'en' : 'es';
    applyTranslations(nextLang);
    startTerminalTyping(nextLang);
  });
}

/* ─── YEAR ───────────────────────────────────────────── */
var yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();