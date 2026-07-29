import "./analytics.js";

document.addEventListener(
  "error",
  (event) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    if (!event.target.matches("[data-vehicle-image]")) return;

    event.target.closest("[data-vehicle-media]")?.classList.add("is-image-missing");
  },
  true
);

const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (header) {
  const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 16);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (navToggle && nav) {
  const setMenuOpen = (isOpen) => {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    nav.dataset.open = String(isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  };

  navToggle.addEventListener("click", () => {
    setMenuOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setMenuOpen(false);
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      navToggle.focus();
    }
  });
}
