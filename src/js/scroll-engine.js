/**
 * scroll-engine.js — Intersection Observer based scroll orchestrator
 * No external dependencies. Handles:
 * - Element reveal on scroll
 * - Stagger children
 * - Nav show/hide
 * - Agitation gap line
 * - Showcase sticky gallery
 * - Solution terminal line reveal
 */

const ENGINE = {
  init() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('[data-reveal],[data-reveal-stagger]').forEach(el => {
        el.classList.add('is-visible');
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.querySelectorAll(':scope > *').forEach(c => {
          c.style.opacity = '1';
          c.style.transform = 'none';
        });
      });
      return;
    }

    this.initReveal();
    this.initNav();
    this.initHero();
    this.initAgitationGap();
    this.initSolutionTerminal();
    this.initShowcase();
    this.initAccordion();
    this.initCountUp();
  },

  initReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('[data-reveal],[data-reveal-stagger]').forEach(el => obs.observe(el));
  },

  initNav() {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > window.innerHeight * 0.8) {
        nav.classList.add('is-visible');
      } else {
        nav.classList.remove('is-visible');
      }
      lastY = y;
    }, { passive: true });
  },

  initHero() {
    const hero = document.querySelector('.scene-hero');
    if (!hero) return;
    requestAnimationFrame(() => {
      setTimeout(() => hero.classList.add('is-loaded'), 200);
    });
  },

  initAgitationGap() {
    const gap = document.querySelector('.scene-agitation__gap');
    const section = document.querySelector('.scene-agitation');
    if (!gap || !section) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const ratio = e.intersectionRatio;
          gap.style.width = `${Math.min(ratio * 2 * 100, 100)}%`;
        }
      });
    }, { threshold: Array.from({ length: 20 }, (_, i) => i / 20) });
    obs.observe(section);
  },

  initSolutionTerminal() {
    const lines = document.querySelectorAll('.scene-solution__terminal .line');
    if (!lines.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.5, rootMargin: '0px 0px -10% 0px' });

    lines.forEach(l => obs.observe(l));
  },

  initShowcase() {
    const items = document.querySelectorAll('.scene-showcase__item');
    const dots = document.querySelectorAll('.scene-showcase__dot');
    const triggers = document.querySelectorAll('.scene-showcase__trigger');
    if (!items.length || !triggers.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const idx = parseInt(e.target.dataset.idx, 10);
          items.forEach(it => it.classList.remove('is-active'));
          dots.forEach(d => d.classList.remove('is-active'));
          if (items[idx]) items[idx].classList.add('is-active');
          if (dots[idx]) dots[idx].classList.add('is-active');
        }
      });
    }, { threshold: 0.6 });

    triggers.forEach(t => obs.observe(t));
  },

  initAccordion() {
    document.querySelectorAll('.acc-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        trigger.closest('.acc-item').classList.toggle('open');
      });
    });
  },

  initCountUp() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = el.dataset.count;
          const suffix = el.dataset.suffix || '';
          const isNum = !isNaN(parseInt(target, 10));

          if (isNum) {
            const end = parseInt(target, 10);
            let start = 0;
            const dur = 800;
            const step = (ts) => {
              if (!start) start = ts;
              const p = Math.min((ts - start) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.floor(eased * end) + suffix;
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          } else {
            el.textContent = target;
          }
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => obs.observe(c));
  }
};

document.addEventListener('DOMContentLoaded', () => ENGINE.init());
