import {
  appScreens,
  buildOutcome,
  categories,
  faqs,
  guides,
  planProgress,
  problemCards,
  recommendation,
  steps,
  transparencyItems,
  vehicleContext,
  vehicles
} from "../../content/home.js";

function listItems(items, className = "clean-list") {
  return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function hero() {
  const planRows = [
    ["01", "All-terrain tires", "~$700-900"],
    ["02", "Recovery points", "~$150-250"],
    ["03", "Skid plate system", "~$350-500"],
    ["04", "Suspension lift", "~$800-1,200"],
    ["05", "Recovery equipment", "~$250-400"]
  ];

  return `<section class="home-hero" id="home-hero" data-figma-section="home-hero">
      <div class="home-hero-copy">
        <p class="hero-badge">Off-Road Build Planner</p>
        <h1>Your SUV.<br>Your terrain.<br><span>The right build.</span></h1>
        <p class="hero-copy">RigAI creates a personalized off-road upgrade plan based on your vehicle, driving goals, terrain and budget.</p>
        <div class="hero-actions">
          <a class="button primary" href="#download">Build My Setup</a>
          <a class="button secondary" href="#example-build">See an Example Build</a>
        </div>
      </div>
      <aside class="home-hero-visual" aria-label="Example RigAI plan preview">
        <figure class="media-frame media-frame--hero media-position--center">
          <img src="/src/assets/rigai-garage-bg.jpg" width="1200" height="800" alt="Modified off-road SUV on a forest trail" fetchpriority="high" />
        </figure>
        <article class="hero-plan-card">
          <div class="result-header-row">
            <div>
              <h2>Toyota 4Runner</h2>
              <p>Daily + Weekend Trails · ~$3,000</p>
            </div>
            <span class="status-label">Example plan</span>
          </div>
          <ol class="plan-list">
            ${planRows.map(([number, label, price]) => `<li><span>${number}</span><strong>${label}</strong><em>${price}</em></li>`).join("")}
          </ol>
          <p class="example-note">Example only - prices and recommendations vary by vehicle, where you shop and selected products.</p>
        </article>
      </aside>
    </section>`;
}

function trustStrip() {
  return `<section class="home-trust-strip" id="home-trust-strip" data-figma-section="home-trust-strip" aria-label="RigAI product trust points">
      <span>Prioritized upgrade order</span>
      <span>Plain beginner explanations</span>
      <span>Fitment reminders before purchase</span>
      <span>Amazon search only for now</span>
    </section>`;
}

function problem() {
  return `<section class="home-section problem-section" id="home-problem" data-figma-section="home-problem">
      <div class="section-heading section-heading--stacked">
        <p class="eyebrow">The problem</p>
        <h2>Off-road upgrades should work together</h2>
        <p>Most advice starts with individual parts. RigAI starts with your vehicle, how you drive and what you actually need.</p>
      </div>
      <div class="problem-grid">
        ${problemCards.map((item) => `<article class="problem-card">
          <div class="problem-card-top"><span class="problem-number">${item.number}</span><span class="mini-label">${item.label}</span></div>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>`).join("")}
      </div>
      <p class="section-callout"><strong>RigAI takes a different approach.</strong> Instead of listing products, it builds one connected plan that accounts for dependencies, budget constraints, and the upgrade sequence that actually makes sense for your vehicle and how you drive it.</p>
    </section>`;
}

function howItWorks() {
  return `<section class="home-section process-section" id="how-it-works" data-figma-section="home-how-it-works">
      <div class="section-heading section-heading--center">
        <p class="eyebrow">Process</p>
        <h2>From your SUV to a complete build plan</h2>
      </div>
      <div class="process-track" aria-hidden="true">${steps.map((step) => `<span>${step.number}</span>`).join("")}</div>
      <div class="process-grid">
        ${steps.map((step, index) => `<article class="process-card${index === steps.length - 1 ? " is-active" : ""}">
          <span class="step-icon" aria-hidden="true">${step.number}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
          ${index === steps.length - 1 ? `<div class="mini-plan"><span>01 AT tires · Priority</span><span>02 Recovery pts.</span><span>03 Skid plates</span><small>+ additional categories</small></div>` : ""}
        </article>`).join("")}
      </div>
    </section>`;
}

function buildResult() {
  return `<section class="home-section build-result-section" id="example-build" data-figma-section="home-build-result">
      <div class="build-result-layout">
        <div>
          <p class="eyebrow">Build result</p>
          <h2>See the build before you start buying</h2>
          <p class="section-lede">Toyota 4Runner 5th Gen - daily driver, family travel and weekend mountain trails. Moderate budget. No heavy rock crawling.</p>
          <div class="segmented-labels" aria-label="Example setup state">
            <span>Current Setup</span>
            <span>RigAI Plan</span>
            <span class="is-active">Target Setup</span>
          </div>
          <figure class="media-frame media-frame--build media-position--bottom">
            <img src="/src/assets/rigai-garage-bg.jpg" width="1200" height="800" alt="Modified off-road SUV on a forest trail" loading="lazy" />
            <figcaption>Target Setup</figcaption>
          </figure>
        </div>
        <aside class="outcome-card">
          <h3>Toyota 4Runner 5th Gen</h3>
          <p>Daily · Family · Weekend Trails</p>
          ${listItems(buildOutcome, "outcome-list")}
          <div class="outcome-note">
            <p class="eyebrow">Expected build outcome</p>
            <p>Actual outcome depends on the exact vehicle, selected parts, installation and driving conditions.</p>
          </div>
        </aside>
      </div>
    </section>`;
}

function categoriesSection() {
  return `<section class="home-section coverage-section" id="home-categories" data-figma-section="home-categories">
      <div class="coverage-heading">
        <div>
          <p class="eyebrow">Coverage</p>
          <h2>One plan across the complete vehicle</h2>
        </div>
        <aside class="relationship-card">
          <p class="eyebrow">System relationship</p>
          <p>Added bumper and cargo weight can change the suspension recommendation. RigAI maps these relationships before suggesting any single upgrade.</p>
        </aside>
      </div>
      <div class="category-grid">${categories.map((category) => `<article class="category-card">
        <span>${category.code}</span>
        <h3>${category.title}</h3>
        <p>${category.text}</p>
      </article>`).join("")}</div>
    </section>`;
}

function recommendationExample() {
  return `<section class="home-section recommendation-section" id="home-recommendation" data-figma-section="home-recommendation">
      <div class="section-heading section-heading--stacked">
        <p class="eyebrow">Intelligence</p>
        <h2>Recommendations with reasoning, not just product lists</h2>
      </div>
      <div class="recommendation-layout">
        <article class="recommendation-card">
          <header>
            <div>
              <h3>${recommendation.vehicle}</h3>
              <p>${recommendation.profile} · ${recommendation.priority}</p>
            </div>
            <span class="status-label success">Buy First</span>
          </header>
          <div class="recommendation-main">
            <section>
              <p class="eyebrow">Upgrade</p>
              <h4>${recommendation.buyFirst}</h4>
              <p>Matched to daily commute and weekend trail use. Size depends on trim and current configuration - verify before purchasing.</p>
            </section>
            <section>
              <p class="eyebrow">Why this helps</p>
              <p>${recommendation.why}</p>
            </section>
          </div>
          <div class="recommendation-actions">
            <section class="caution-panel"><strong>Do not buy yet</strong><p>${recommendation.skip}</p></section>
            <section class="verify-panel"><strong>Verify first</strong><p>${recommendation.verify}</p></section>
            <section class="search-panel"><strong>Search compatible parts</strong><p>${recommendation.search}</p></section>
          </div>
        </article>
        <aside class="side-stack">
          <section class="context-card">
            <p class="eyebrow">Vehicle context</p>
            <span class="mini-label">Example profile</span>
            ${vehicleContext.map(([key, value]) => `<div><span>${key}</span><strong>${value}</strong></div>`).join("")}
          </section>
          <section class="context-card">
            <p class="eyebrow">Plan progress</p>
            ${planProgress.map(([number, label, status]) => `<div><span>${number}</span><strong>${label}</strong>${status ? `<em>${status}</em>` : ""}</div>`).join("")}
          </section>
        </aside>
      </div>
    </section>`;
}

function appPreview() {
  return `<section class="home-section app-section" id="home-app-preview" data-figma-section="home-app-preview">
      <div class="section-heading section-heading--center">
        <p class="eyebrow">Application</p>
        <h2>Your complete build plan in one app</h2>
      </div>
      <div class="app-screen-grid" aria-label="Example app flow">
        ${appScreens.map((screen) => `<figure class="phone-preview">
          <div class="phone-shell">
            <div class="phone-status"><span>9:41</span><span>RigAI</span></div>
            <p class="eyebrow">${screen.eyebrow}</p>
            <h3>${screen.title}</h3>
            ${screen.lines.map((line, index) => `<p class="${index === 0 ? "is-selected" : ""}">${line}</p>`).join("")}
          </div>
          <figcaption><span>${screen.number}</span> ${screen.label}</figcaption>
        </figure>`).join("")}
      </div>
    </section>`;
}

function supportedVehicles() {
  return `<section class="home-section vehicles-section" id="vehicles" data-figma-section="home-vehicles">
      <div class="vehicle-section-heading">
        <div>
          <p class="eyebrow">Platforms</p>
          <h2>Built for real off-road platforms</h2>
        </div>
        <span class="status-label">More vehicles coming</span>
      </div>
      <div class="vehicle-grid">
        ${vehicles.map((vehicle, index) => {
          const content = `<div class="vehicle-media" aria-hidden="true" data-variant="${index + 1}"></div>
          <h3>${vehicle.name}</h3>
          <span class="status-label${vehicle.href ? " success" : ""}">${vehicle.status}</span>`;
          return vehicle.href
            ? `<a class="vehicle-card vehicle-card--visual is-published" href="${vehicle.href}" aria-label="${vehicle.name} upgrade guide">${content}<strong class="card-link-label">Open vehicle guide</strong></a>`
            : `<article class="vehicle-card vehicle-card--visual">${content}</article>`;
        }).join("")}
      </div>
    </section>`;
}

function guidesPreview() {
  return `<section class="home-section guides-section" id="guides" data-figma-section="home-guides">
      <div class="section-heading section-heading--stacked">
        <p class="eyebrow">Knowledge</p>
        <h2>Research before you upgrade</h2>
        <p>Guides written for SUV owners who want to understand the decisions, not just the products.</p>
      </div>
      <div class="guide-grid">
        ${guides.map((guide) => {
          const content = `<div><span class="status-label">${guide.category}</span><span class="mini-label">${guide.href ? "Published" : "Coming soon"}</span></div>
          <h3>${guide.title}</h3>
          <p>${guide.text}</p>
          ${guide.href ? `<small>${guide.readingTime} min read</small><strong class="card-link-label">Read guide</strong>` : "<small>Guide in development</small>"}`;
          return guide.href
            ? `<a class="guide-card is-published" href="${guide.href}">${content}</a>`
            : `<article class="guide-card">${content}</article>`;
        }).join("")}
      </div>
      <p class="guides-note">Guides become available as RigAI vehicle coverage expands.</p>
    </section>`;
}

function trustSafety() {
  return `<section class="home-section trust-section" id="home-trust-safety" data-figma-section="home-trust-safety">
      <div class="transparency-panel">
        <div>
          <p class="eyebrow">Transparency</p>
          <h2>Better planning starts with honest limitations</h2>
        </div>
        <div class="transparency-grid">
          ${transparencyItems.map(([title, text]) => `<section><h3>${title}</h3><p>${text}</p></section>`).join("")}
        </div>
      </div>
    </section>`;
}

function faq() {
  return `<section class="home-section faq-section" id="faq" data-figma-section="home-faq">
      <div class="section-heading section-heading--center">
        <p class="eyebrow">FAQ</p>
        <h2>Common questions</h2>
      </div>
      <div class="faq-list">
        ${faqs.map((item) => `<details class="faq-item"><summary>${item.question}</summary><p>${item.answer}</p></details>`).join("")}
      </div>
    </section>`;
}

function finalCta() {
  return `<section class="home-final-cta" id="download" data-figma-section="home-final-cta">
      <div>
        <p class="hero-badge">Ready to build</p>
        <h2>Build the SUV<br><span>you actually need.</span></h2>
        <p>Start with your vehicle, terrain and budget. RigAI will help you choose the right upgrades in the right order.</p>
        <div class="hero-actions">
          <span class="button primary is-static" aria-disabled="true">Build My Setup</span>
          <span class="button secondary is-static" aria-disabled="true">Coming soon on Google Play</span>
        </div>
      </div>
      <aside class="final-plan-card">
        <p class="eyebrow">Your RigAI plan can include</p>
        <div><strong>5</strong><span>Prioritized upgrade categories</span></div>
        <div><strong>3</strong><span>Fitment verification checks</span></div>
        <div><strong>2</strong><span>Items recommended to postpone</span></div>
        <div><strong>1</strong><span>Connected build strategy</span></div>
        <p class="example-note">Example output - actual content depends on your vehicle, driving profile and budget.</p>
      </aside>
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
