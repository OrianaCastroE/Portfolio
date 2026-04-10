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
window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    nav.classList.add('stuck');
  } else {
    nav.classList.remove('stuck');
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

/* ─── TERMINAL TYPEWRITER ────────────────────────────── */
var lines = [
  { k: 'cmd', t: 'whoami' },
  { k: 'out', t: '<span class="hi">Oriana Castro</span> — Desarrolladora Freelance' },
  { k: 'cmd', t: 'ls proyectos/' },
  { k: 'out', t: '<span class="hi">TransportesCastro/</span> <span class="hi2">Volcast/</span> <span class="hi3">Barometrica/</span> <span class="hi4">otros/</span> ' },
  { k: 'cmd', t: 'echo $status' },
  { k: 'out', t: '<span class="hi">disponible para proyectos</span> ✓' },
];

var tbody = document.getElementById('terminal-body');
if (tbody) {
  var lineIndex = 0;

  function addCursorLine() {
    var div = document.createElement('div');
    div.className = 't-line';
    div.innerHTML = '<span class="t-prompt">~/oriana $</span><span class="t-cursor"></span>';
    tbody.appendChild(div);
  }

  function nextLine() {
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

  setTimeout(nextLine, 800);
}

/* ─── YEAR ───────────────────────────────────────────── */
var yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();