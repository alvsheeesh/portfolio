// public/i18n.js
(function () {
  const translations = window.translations || { en: {}, es: {} };

  function t(lang, key) {
    const val = translations?.[lang]?.[key];
    return val == null ? `[${key}]` : val;
  }

  function applyAttrI18n(lang) {
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr") || "";
      spec
        .split(";")
        .map((s) => s.trim())
        .filter(Boolean)
        .forEach((pair) => {
          const idx = pair.indexOf(":");
          if (idx === -1) return;
          const attr = pair.slice(0, idx).trim();
          const key = pair.slice(idx + 1).trim();
          el.setAttribute(attr, t(lang, key));
        });
    });
  }

  function applyTextI18n(lang) {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = t(lang, key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (!key) return;
      el.innerHTML = t(lang, key);
    });
  }

  function setRootLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
  }

  function updateLangLabel(lang) {
    document.querySelectorAll("[data-lang-label]").forEach((el) => {
      el.textContent = lang.toUpperCase();
    });
  }

  function getSavedLang() {
    const saved = localStorage.getItem("lang");
    return saved === "es" ? "es" : "en";
  }

  function applyLanguage(lang) {
    lang = lang === "es" ? "es" : "en";
    localStorage.setItem("lang", lang);
    setRootLang(lang);
    applyTextI18n(lang);
    applyAttrI18n(lang);
    updateLangLabel(lang);
  }

  function initI18n() {
    applyLanguage(getSavedLang());

    document.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang-toggle]");
      if (!btn) return;
      const current = document.documentElement.dataset.lang === "es" ? "es" : "en";
      applyLanguage(current === "en" ? "es" : "en");
    });
  }

  window.__i18n = { translations, t, applyLanguage, initI18n };
})();