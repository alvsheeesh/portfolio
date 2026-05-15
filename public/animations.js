// Reveal-on-scroll + scroll-aware header shadow.
// Respects prefers-reduced-motion via CSS (no-ops there visually).

(function () {
  const init = () => {
    // --- Reveal on scroll ---
    const targets = document.querySelectorAll(".reveal, .skill-bar-fill");

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      targets.forEach((el) => io.observe(el));
    }

    // --- Header scroll shadow ---
    const header = document.querySelector("header");
    if (header) {
      const onScroll = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 4);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
