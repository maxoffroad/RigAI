import "./analytics.js";

function addVehiclePlanFallback(media) {
  if (!media.classList.contains("vehicle-hub-media")) return;
  if (media.querySelector(".article-hero-fallback")) return;

  const fallback = document.createElement("div");
  fallback.className = "article-hero-visual article-hero-fallback";
  fallback.setAttribute("aria-hidden", "true");

  const label = document.createElement("span");
  label.textContent = media.dataset.fallbackLabel || "Vehicle";

  const lines = document.createElement("div");
  lines.className = "system-lines";
  for (let index = 0; index < 4; index += 1) {
    lines.append(document.createElement("i"));
  }

  const title = document.createElement("strong");
  title.textContent = "Vehicle plan";
  fallback.append(label, lines, title);
  media.insertBefore(fallback, media.querySelector("figcaption"));
}

document.addEventListener(
  "error",
  (event) => {
    if (!(event.target instanceof HTMLImageElement)) return;
    if (!event.target.matches("[data-vehicle-image]")) return;

    const media = event.target.closest("[data-vehicle-media]");
    if (!media) return;
    media.classList.add("is-image-missing");
    addVehiclePlanFallback(media);
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
