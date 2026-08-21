/* =============================================================
   Ergotherapie Svenja Dörl & Heike Rummel – Interaktionen
   Vanilla JS · keine Abhängigkeiten
   ============================================================= */
(function () {
  "use strict";
  const doc = document;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const on = (el, ev, fn, o) => el && el.addEventListener(ev, fn, o);

  /* ---------- Jahr im Footer ---------- */
  const year = doc.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Sticky Header + Scroll-Fortschritt (ein gebündelter, rAF-gedrosselter Handler) ---------- */
  const header = doc.getElementById("siteHeader");
  const bar = doc.querySelector(".scroll-progress");
  let scrollTicking = false;
  const onScroll = () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      header && header.classList.toggle("is-stuck", window.scrollY > 24);
      const h = doc.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar) bar.style.transform = `scaleX(${Math.min(Math.max(p, 0), 1)})`;
      scrollTicking = false;
    });
  };
  onScroll();
  on(window, "scroll", onScroll, { passive: true });

  /* ---------- Mobiles Menü ---------- */
  const burger = doc.getElementById("burger");
  const closeMenu = () => {
    doc.body.classList.remove("menu-open");
    burger && burger.setAttribute("aria-expanded", "false");
  };
  on(burger, "click", () => {
    const open = doc.body.classList.toggle("menu-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  doc.querySelectorAll("#mobileMenu a").forEach((a) => on(a, "click", closeMenu));
  on(doc, "keydown", (e) => e.key === "Escape" && closeMenu());

  /* ---------- Smooth-Scroll für Anker (mit Header-Offset) ---------- */
  doc.querySelectorAll('a[href^="#"]').forEach((a) => {
    on(a, "click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const t = doc.querySelector(id);
      if (!t) return;
      e.preventDefault();
      const y = t.getBoundingClientRect().top + window.scrollY - 74;
      window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });
      history.pushState(null, "", id);
    });
  });

  /* ---------- Scroll-Reveal ---------- */
  const reveals = doc.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }
})();
