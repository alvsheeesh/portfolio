// src/i18n/i18n.js
import { translations } from "./translations.js";

const DEFAULT_LANG = "en";

function getStoredLanguage() {
  try {
    return localStorage.getItem("lang") || DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

export function applyLanguage(lang = DEFAULT_LANG) {
  const dict = translations[lang] || translations[DEFAULT_LANG];

  // Persistencia + <html lang="">
  try {
    localStorage.setItem("lang", lang);
  } catch {}
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // 1) Text nodes: data-i18n="key"
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict?.[key];
    // Fallback visible para detectar claves faltantes
    el.textContent = (typeof value === "string") ? value : `[${key}]`;
  });

  // 2) HTML nodes: data-i18n-html="key"
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    const value = dict?.[key];
    el.innerHTML = (typeof value === "string") ? value : `[${key}]`;
  });

  // 3) Attributes: data-i18n-attr="placeholder:key;aria-label:key2"
  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const raw = el.getAttribute("data-i18n-attr") || "";
    raw.split(";").map((s) => s.trim()).filter(Boolean).forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (!attr || !key) return;
      const value = dict?.[key];
      if (typeof value === "string") el.setAttribute(attr, value);
    });
  });

  // 4) Actualiza el label del botón de idioma
  document.querySelectorAll("[data-lang-label]").forEach((el) => {
    el.textContent = String(lang || DEFAULT_LANG).toUpperCase();
  });
}

export function initI18n() {
  // Aplicar el idioma al cargar
  const lang = getStoredLanguage();
  applyLanguage(lang);

  // Delegación de click para el botón 🌐
  document.addEventListener("click", (e) => {
    const btn = e.target.closest?.("[data-lang-toggle]");
    if (!btn) return;
    const current = document.documentElement.dataset.lang || getStoredLanguage();
    const next = current === "en" ? "es" : "en";
    applyLanguage(next);
    // Evento opcional para otros componentes
    window.dispatchEvent(new CustomEvent("languageChanged", { detail: { lang: next } }));
    console.log("[i18n] switched to:", next);
  });

  // API global para depuración manual desde consola
  window.__i18n = { applyLanguage, initI18n, translations, getStoredLanguage };
}

export function getCurrentLanguage() {
  try {
    return localStorage.getItem("lang") || "en";
  } catch {
    return "en";
  }
}
``