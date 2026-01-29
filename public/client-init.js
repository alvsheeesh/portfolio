// public/client-init.js
(function () {
  // i18n
  if (window.__i18n && typeof window.__i18n.initI18n === "function") {
    window.__i18n.initI18n();
  }

  // tema: si tu theme.js ya se auto-inicializa, no hace falta nada más aquí
})();