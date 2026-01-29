// public/client-init.js
(function () {
  function init() {
    if (window.__i18n && typeof window.__i18n.initI18n === "function") {
      window.__i18n.initI18n();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();