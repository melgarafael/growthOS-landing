/**
 * i18n.js — Polyglot engine
 * Detects user locale, applies translations, persists choice.
 *
 * Detection chain:
 *   1. URL param ?lang=xx
 *   2. localStorage "growthOS_lang"
 *   3. navigator.languages / navigator.language
 *   4. Fallback: "en"
 *
 * Contract: elements with [data-i18n="key"] get their textContent replaced.
 * Showcase triggers use [data-i18n-*] attributes for dynamic content.
 */

const I18N = {
  SUPPORTED: ["en", "es", "pt-br"],
  STORAGE_KEY: "growthOS_lang",
  current: null,
  dict: {},

  init() {
    this.dict = {
      "en":    typeof LANG_EN    !== "undefined" ? LANG_EN    : {},
      "es":    typeof LANG_ES    !== "undefined" ? LANG_ES    : {},
      "pt-br": typeof LANG_PT_BR !== "undefined" ? LANG_PT_BR : {},
    };

    const detected = this.detect();
    this.apply(detected);
    this.renderSwitcher();
  },

  detect() {
    const params = new URLSearchParams(window.location.search);
    const paramLang = params.get("lang");
    if (paramLang && this.SUPPORTED.includes(paramLang)) return paramLang;

    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored && this.SUPPORTED.includes(stored)) return stored;

    const browserLangs = navigator.languages || [navigator.language || "en"];
    for (const raw of browserLangs) {
      const mapped = this.mapLocale(raw);
      if (mapped) return mapped;
    }

    return "en";
  },

  mapLocale(raw) {
    const lower = raw.toLowerCase();
    if (lower.startsWith("pt")) return "pt-br";
    if (lower.startsWith("es")) return "es";
    if (lower.startsWith("en")) return "en";
    return null;
  },

  apply(langCode) {
    this.current = langCode;
    localStorage.setItem(this.STORAGE_KEY, langCode);
    document.documentElement.lang = langCode === "pt-br" ? "pt-BR" : langCode;

    const dict = this.dict[langCode] || this.dict["en"];

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll(".scene-showcase__trigger").forEach(trigger => {
      const idx = trigger.dataset.idx;
      const keys = {
        label:   "showcase_item" + (+idx + 1) + "_label",
        title:   "showcase_item" + (+idx + 1) + "_title",
        caption: "showcase_item" + (+idx + 1) + "_caption",
      };
      if (dict[keys.label])   trigger.dataset.label   = dict[keys.label];
      if (dict[keys.title])   trigger.dataset.title    = dict[keys.title];
      if (dict[keys.caption]) trigger.dataset.caption  = dict[keys.caption];
    });

    const firstActive = document.querySelector(".scene-showcase__trigger[data-idx='0']");
    if (firstActive) {
      const display = document.getElementById("showcase-display");
      const frameTitle = document.querySelector(".scene-showcase__frame-title");
      const caption = document.querySelector(".scene-showcase__caption");
      if (display)    display.textContent    = firstActive.dataset.label;
      if (frameTitle) frameTitle.textContent  = firstActive.dataset.title;
      if (caption)    caption.textContent     = firstActive.dataset.caption;
    }

    this.updateSwitcherState();
  },

  renderSwitcher() {
    const nav = document.querySelector(".nav__inner");
    if (!nav) return;

    const switcher = document.createElement("div");
    switcher.className = "lang-switcher";
    switcher.setAttribute("role", "radiogroup");
    switcher.setAttribute("aria-label", "Language");

    this.SUPPORTED.forEach(code => {
      const label = this.dict[code]?._meta?.label || code.toUpperCase();
      const btn = document.createElement("button");
      btn.className = "lang-btn";
      btn.dataset.lang = code;
      btn.textContent = label;
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", code === this.current ? "true" : "false");
      btn.addEventListener("click", () => this.apply(code));
      switcher.appendChild(btn);
    });

    const ctaBtn = nav.querySelector(".nav__cta");
    nav.insertBefore(switcher, ctaBtn);
    this.updateSwitcherState();
  },

  updateSwitcherState() {
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const isActive = btn.dataset.lang === this.current;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-checked", isActive ? "true" : "false");
    });
  },
};

document.addEventListener("DOMContentLoaded", () => I18N.init());
