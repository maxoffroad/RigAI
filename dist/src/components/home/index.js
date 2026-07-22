import {
  appScreens,
  categories,
  faqs,
  guides,
  problemCards,
  recommendation,
  safetyItems,
  steps,
  transformationStages,
  trustItems,
  vehicles
} from "../../content/home.js";

function listItems(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function cardGrid(items, className, renderItem) {
  return `<div class="${className}">${items.map(renderItem).join("")}</div>`;
}

function hero() {
  return `<section class="home-hero" id="home-hero" data-figma-section="home-hero">
        <div class="home-hero-copy">
          <p class="hero-badge">AI Off-Road Setup Assistant</p>
          <h1>Build the right upgrade plan for your SUV</h1>
          <p class="hero-copy">
            RigAI turns your vehicle, driving style, budget, and experience level into a clear upgrade order:
            what to buy first, what to skip for now, and what to verify before purchasing.
          </p>
          <div class="hero-actions">
            <a class="button primary" href="#home-final-cta">Build My Setup</a>
            <a class="button secondary" href="#home-build-result">See example result</a>
          </div>
          <p class="home-cta-note">Coming soon on Google Play. Web configurator is not available yet.</p>
        </div>
        <aside class="home-hero-visual" aria-label="RigAI result preview">
          <div class="vehicle-stage" aria-hidden="true">
            <div class="vehicle-silhouette">
              <span class="wheel wheel-front"></span>
              <span class="wheel wheel-rear"></span>
            </div>
          </div>
          <div class="result-panel">
            <span class="status-label success">Prepared plan</span>
            <h2>Weekend trail SUV</h2>
            <div class="result-row"><span>Buy first</span><strong>All-terrain tires</strong></div>
            <div class="result-row"><span>Skip for now</span><strong>Large lift kit</strong></div>
            <div class="result-row"><span>Verify</span><strong>Fitment before purchase</strong></div>
          </div>
        </aside>
      </section>`;
}

function trustStrip() {
  return `<section class="home-trust-strip" id="home-trust-strip" data-figma-section="home-trust-strip" aria-label="RigAI product trust points">
        ${trustItems.map((item) => `<span>${item}</span>`).join("")}
      </section>`;
}

function problem() {
  return `<section class="home-section" id="home-problem" data-figma-section="home-problem">
        <div class="section-heading">
          <p class="eyebrow">The problem</p>
          <h2>Offroad upgrades are connected. Most advice treats them like separate parts.</h2>
        </div>
        ${cardGrid(problemCards, "ds-grid", (item) => `<article class="card"><h3>${item.title}</h3><p>${item.text}</p></article>`)}
      </section>`;
}

function howItWorks() {
  return `<section class="home-section" id="home-how-it-works" data-figma-section="home-how-it-works">
        <div class="section-heading">
          <p class="eyebrow">How RigAI works</p>
          <h2>From scattered ideas to a prioritized vehicle plan.</h2>
        </div>
        ${cardGrid(steps, "ds-grid", (step) => `<article class="card step-card"><span class="icon">${step.label}</span><h3>${step.title}</h3><p>${step.text}</p></article>`)}
      </section>`;
}

function buildResult() {
  return `<section class="home-section" id="home-build-result" data-figma-section="home-build-result">
        <div class="section-heading">
          <p class="eyebrow">Build transformation</p>
          <h2>The main result is not a part. It is the right order.</h2>
        </div>
        ${cardGrid(transformationStages, "transformation-grid", (stage) => `<article class="card"><h3>${stage.title}</h3><ul class="clean-list">${listItems(stage.items)}</ul></article>`)}
      </section>`;
}

function categoriesSection() {
  return `<section class="home-section" id="home-categories" data-figma-section="home-categories">
        <div class="section-heading">
          <p class="eyebrow">Upgrade coverage</p>
          <h2>RigAI can organize the full build, not just one part category.</h2>
        </div>
        <div class="category-grid">${categories.map((category) => `<span class="category-pill">${category}</span>`).join("")}</div>
      </section>`;
}

function recommendationExample() {
  return `<section class="home-section" id="home-recommendation" data-figma-section="home-recommendation">
        <div class="section-heading">
          <p class="eyebrow">Example recommendation</p>
          <h2>Plain guidance that keeps the next purchase in context.</h2>
        </div>
        <article class="result-card result-card-large">
          <div class="result-header">
            <span>Vehicle plan</span>
            <strong>${recommendation.vehicle}</strong>
          </div>
          <div class="result-grid">
            <section><span>Buy first</span><h3>${recommendation.buyFirst}</h3><p>${recommendation.why}</p></section>
            <section><span>Do not buy yet</span><h3>Delay expensive changes</h3><p>${recommendation.skip}</p></section>
            <section><span>Search for parts</span><h3>Amazon research ideas</h3><p>${recommendation.search.join(", ")}.</p></section>
            <section><span>Always verify</span><h3>Fitment before purchasing</h3><p>Check size, compatibility, seller details, installation needs, and local requirements.</p></section>
          </div>
        </article>
      </section>`;
}

function appPreview() {
  return `<section class="home-section" id="home-app-preview" data-figma-section="home-app-preview">
        <div class="section-heading">
          <p class="eyebrow">App preview</p>
          <h2>Designed around the decisions owners actually need to make.</h2>
        </div>
        <div class="app-screen-grid">
          ${appScreens.map((screen) => `<article class="phone-preview" aria-label="${screen.eyebrow}: ${screen.title}">
            <span>${screen.eyebrow}</span>
            <h3>${screen.title}</h3>
            ${screen.lines.map((line) => `<p>${line}</p>`).join("")}
          </article>`).join("")}
        </div>
      </section>`;
}

function supportedVehicles() {
  return `<section class="home-section" id="home-vehicles" data-figma-section="home-vehicles">
        <div class="section-heading">
          <p class="eyebrow">Supported vehicles</p>
          <h2>Built for popular SUV and offroad platforms, with more depth planned.</h2>
        </div>
        <div class="vehicle-grid">
          ${vehicles.map((vehicle) => `<article class="vehicle-card"><h3>${vehicle}</h3><p>Guide pages are planned. Use the app flow for vehicle-specific planning.</p><span class="status-label">Coming soon</span></article>`).join("")}
        </div>
      </section>`;
}

function guidesPreview() {
  return `<section class="home-section" id="home-guides" data-figma-section="home-guides">
        <div class="section-heading">
          <p class="eyebrow">Future guides</p>
          <h2>Homepage sections are ready to connect with future vehicle and upgrade guides.</h2>
        </div>
        ${cardGrid(guides, "ds-grid", (guide) => `<article class="card"><span class="status-label">Planned guide</span><h3>${guide.title}</h3><p>${guide.text}</p></article>`)}
      </section>`;
}

function trustSafety() {
  return `<section class="home-section" id="home-trust-safety" data-figma-section="home-trust-safety">
        <div class="trust-card">
          <p class="eyebrow">Trust and safety</p>
          <h2>Helpful planning, not a fitment guarantee.</h2>
          <ul class="trust-list">${listItems(safetyItems)}</ul>
        </div>
      </section>`;
}

function faq() {
  return `<section class="home-section" id="home-faq" data-figma-section="home-faq">
        <div class="section-heading">
          <p class="eyebrow">FAQ</p>
          <h2>Clear answers before users download.</h2>
        </div>
        <div class="faq-list">
          ${faqs.map((item) => `<details class="faq-item"><summary>${item.question}</summary><p>${item.answer}</p></details>`).join("")}
        </div>
      </section>`;
}

function finalCta() {
  return `<section class="home-final-cta" id="home-final-cta" data-figma-section="home-final-cta">
        <div class="card">
          <p class="eyebrow">Coming soon</p>
          <h2>Build My Setup starts in the RigAI mobile app.</h2>
          <p>Google Play availability is not published yet. For now, use the support page for questions and check back for launch updates.</p>
          <div class="hero-actions">
            <span class="button primary is-static" aria-disabled="true">Coming soon on Google Play</span>
            <a class="button secondary" href="/support">Contact support</a>
          </div>
        </div>
      </section>`;
}

export function renderHomePage() {
  return `<main id="main-content">
      ${hero()}
      ${trustStrip()}
      ${problem()}
      ${howItWorks()}
      ${buildResult()}
      ${categoriesSection()}
      ${recommendationExample()}
      ${appPreview()}
      ${supportedVehicles()}
      ${guidesPreview()}
      ${trustSafety()}
      ${faq()}
      ${finalCta()}
    </main>`;
}
