// public/theme.js
(() => {
  const STORAGE_KEY = "theme";

  function getStoredTheme() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return v === "light" || v === "dark" ? v : null;
    } catch {
      return null;
    }
  }

  function setStoredTheme(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
  }

  function setFaviconForTheme(theme) {
    const isDark = theme === "dark";
    const lightSvg = document.querySelector('link[rel="icon"][data-favicon-light]');
    const darkSvg  = document.querySelector('link[rel="icon"][data-favicon-dark]');
    if (lightSvg && darkSvg) {
      if (isDark) {
        darkSvg.setAttribute("media", "all");
        lightSvg.setAttribute("media", "not all");
      } else {
        lightSvg.setAttribute("media", "all");
        darkSvg.setAttribute("media", "not all");
      }
    }
  }

  function setHeaderLogoForTheme(theme) {
    const isDark = theme === "dark";
    document.querySelectorAll("[data-theme-logo]").forEach((img) => {
      const nextSrc = isDark ? "/logo-dark.svg" : "/logo-light.svg";
      if (img.getAttribute("src") !== nextSrc) {
        img.setAttribute("src", nextSrc);
      }
    });
  }

  function setToggleIconsForTheme(theme) {
    const isDark = theme === "dark";
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      const sun  = btn.querySelector("[data-icon='sun']");
      const moon = btn.querySelector("[data-icon='moon']");
      if (sun && moon) {
        sun.style.display  = isDark ? "none" : "inline-block";
        moon.style.display = isDark ? "inline-block" : "none";
      }
    });
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    setStoredTheme(theme);
    setFaviconForTheme(theme);
    setHeaderLogoForTheme(theme);
    setToggleIconsForTheme(theme);
  }

  // Init
  const saved = getStoredTheme();
  const initial = saved ?? (document.documentElement.classList.contains("dark") ? "dark" : "light");
  applyTheme(initial);

  // Click delegation for the toggle button
  document.addEventListener("click", (e) => {
    const btn = e.target.closest?.("[data-theme-toggle]");
    if (!btn) return;
    const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
  });

  // Sync after DOM ready (in case <link rel="icon"> loaded later)
  const sync = () => {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setFaviconForTheme(current);
    setHeaderLogoForTheme(current);
    setToggleIconsForTheme(current);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", sync);
  } else {
    sync();
  }
})();