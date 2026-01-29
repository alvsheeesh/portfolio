// public/i18n.js
(function () {
  // Pega aquí TU diccionario EN/ES (claves planas)
  // Ejemplo mínimo. Sustituye por tu translations real:
  const translations = window.translations || {
    en: {},
    es: {}
  };

  function getSavedLang() {
    const saved = localStorage.getItem("lang");
    return saved === "es" ? "es" : "en";
  }

  function setLangOnRoot(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }

  function t(lang, key) {
    const value = translations?.[lang]?.[key];
    return value == null ? `[${key}]` : value;
  }

  function applyAttrI18n(root, lang) {
    root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr") || "";
      spec.split(";").map(s => s.trim()).filter(Boolean).forEach((pair) => {
        const idx = pair.indexOf(":");
        if (idx === -1) return;
        const attr = pair.slice(0, idx).trim();
        const key = pair.slice(idx + 1).trim();
        el.setAttribute(attr, t(lang, key));
      });
    });
  }

  function applyTextI18n(root, lang) {
    root.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(lang, key);
    });

    root.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(lang, key);
    });
  }

  function updateLangLabel(lang) {
    document.querySelectorAll("[data-lang-label]").forEach((el) => {
      el.textContent = lang.toUpperCase();
    });
  }

  function applyLanguage(lang) {
    lang = lang === "es" ? "es" : "en";
    localStorage.setItem("lang", lang);
    setLangOnRoot(lang);

    const root = document;
    applyTextI18n(root, lang);
    applyAttrI18n(root, lang);
    updateLangLabel(lang);
  }

  function initI18n() {
    // estado inicial
    applyLanguage(getSavedLang());

    // delegación: toggle EN/ES
    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang-toggle]");
      if (!btn) return;
      const current = document.documentElement.dataset.lang === "es" ? "es" : "en";
      applyLanguage(current === "en" ? "es" : "en");
    });
  }

  window.__i18n = { translations, applyLanguage, initI18n };
})();