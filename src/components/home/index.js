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
import { renderVehicleCard } from "../vehicles/card.js";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.maxkz.rigai";

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
        <p class="hero-copy">RigAI creates personalized off-road upgrade plans for SUVs based on the vehicle, driving goals, terrain and budget.</p>
        <div class="hero-actions">
          <a class="button primary" href="#download" data-analytics-event="build_setup_click" data-analytics-location="hero" data-destination-type="internal_section">Build My Setup</a>
          <a class="button secondary" href="#example-build" data-analytics-event="example_build_click" data-analytics-location="hero">See an Example Build</a>
          <a class="button google-play" href="${GOOGLE_PLAY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Get RigAI on Google Play" data-analytics-event="google_play_click" data-analytics-location="hero">Get it on Google Play</a>
        </div>
      </div>
      <aside class="home-hero-visual" aria-label="Example RigAI plan preview">
        <figure class="media-frame media-frame--hero media-position--center">
          <img src="/src/assets/rigai-garage-bg.jpg" width="1200" height="800" alt="Modified off-road SUV on a forest trail" fetchpriority="high" />
        </figure>
        <article class="hero-plan-card">
          <div class="result-header-row example-plan-header">
            <div class="example-plan-meta">
              <h2>Toyota 4Runner</h2>
              <p>Daily + Weekend Trails</p>
              <p class="hero-plan-budget">Approx. budget: $3,000</p>
            </div>
            <span class="hero-example-label">EXAMPLE PLAN</span>
          </div>
          <p class="hero-example-context">One example of a personalized RigAI plan.</p>
          <ol class="plan-list">
            ${planRows.map(([number, label, price]) => `<li class="example-plan-row"><span>${number}</span><strong>${label}</strong><em>${price}</em></li>`).join("")}
          </ol>
          <p class="example-note">Example only &mdash; recommendations and estimated costs vary by vehicle, configuration, market and selected products.</p>
        </article>
      </aside>
    </section>`;
}

function trustStrip() {
  return `<div class="hero-value-strip" id="home-trust-strip" data-figma-section="home-trust-strip" aria-label="RigAI product trust points">
      ${[
        "Prioritized upgrade plan",
        "Beginner-friendly explanations",
        "Compatibility reminders",
        "Budget-aware recommendations"
      ].map((item) => `<div class="hero-value-item"><span class="hero-value-icon" aria-hidden="true">&#10003;</span><span class="hero-value-text">${item}</span></div>`).join("")}
    </div>`;
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
      <div class="process-grid">
        ${steps.map((step, index) => `<article class="process-card${index === steps.length - 1 ? " is-active" : ""}">
          <span class="step-icon" aria-hidden="true">${step.number}</span>
          <h3>${step.title}</h3>
          <p>${step.text}</p>
          ${index === steps.length - 1 ? `<div class="mini-plan">
            <strong>Example result</strong>
            <span><b>01</b> All-terrain tires</span>
            <span><b>02</b> Recovery points</span>
            <span><b>03</b> Skid plates</span>
            <span><b>04</b> Suspension planning</span>
            <small>Prioritized according to your vehicle and use case.</small>
          </div>` : ""}
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
        <p class="recommendation-context-label">EXAMPLE RECOMMENDATION</p>
        <p class="recommendation-context">Shown for one Toyota 4Runner profile. RigAI uses the same planning logic for each supported vehicle configuration.</p>
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
          <p>RigAI supports multiple off-road platforms, with detailed website guides for Toyota 4Runner, third-generation Tacoma, Jeep Wrangler JL, sixth-generation Ford Bronco, Jeep Gladiator JT, third-generation Chevrolet Colorado, current US Ford Ranger, and modern off-road-focused Ford F-150 configurations.</p>
        </div>
      </div>
      <div class="vehicle-grid">
        ${vehicles
          .map((vehicle, index) =>
            renderVehicleCard(vehicle, {
              index,
              analyticsLocation: vehicle.href
                ? "homepage_vehicle_card"
                : "homepage_vehicles",
              showDescription: Boolean(vehicle.href)
            })
          )
          .join("")}
      </div>
      <aside class="vehicle-reassurance" aria-labelledby="vehicle-reassurance-title">
        <div>
          <h3 id="vehicle-reassurance-title">Your SUV is not listed?</h3>
          <p>RigAI is built around vehicle configuration, driving profile, terrain, budget and upgrade dependencies. Vehicle coverage is being expanded progressively.</p>
        </div>
        <a class="text-link" href="#how-it-works">See how RigAI works</a>
      </aside>
    </section>`;
}

function guidesPreview() {
  return `<section class="home-section guides-section" id="guides" data-figma-section="home-guides">
      <div class="section-heading section-heading--stacked">
        <p class="eyebrow">Knowledge</p>
        <h2>Research before you upgrade</h2>
        <p>Guides written for SUV and pickup owners who want to understand the decisions, not just the products.</p>
      </div>
      <div class="guide-grid">
        ${guides.map((guide) => {
          const content = `<div><span class="status-label">${guide.category}</span><span class="mini-label">${guide.href ? "Published" : "Coming soon"}</span></div>
          <h3>${guide.title}</h3>
          <p>${guide.text}</p>
          ${guide.href ? `<small>${guide.readingTime} min read</small><strong class="card-link-label">Read guide</strong>` : "<small>Guide in development</small>"}`;
          return guide.href
            ? `<a class="guide-card is-published" href="${guide.href}" data-analytics-event="guide_click" data-analytics-location="homepage_guides" data-guide-slug="${guide.href.split("/").pop()}" data-vehicle-slug="toyota-4runner">${content}</a>`
            : `<article class="guide-card">${content}</article>`;
        }).join("")}
      </div>
      <p class="guides-note">Detailed guide collections now cover Toyota 4Runner, the 2016-2023 Toyota Tacoma, the 2018-present Jeep Wrangler JL, the 2021-present Ford Bronco, the 2020-present Jeep Gladiator JT, the 2023-present Chevrolet Colorado, the 2024-present US Ford Ranger, and the 2021-present Ford F-150. Additional vehicle-specific guides will follow as coverage expands.</p>
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
        ${faqs.map((item, index) => `<details class="faq-item" data-analytics-event="faq_open" data-faq-id="home-faq-${index + 1}"><summary>${item.question}</summary><p>${item.answer}</p></details>`).join("")}
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
          <span class="button primary is-static" aria-disabled="true" data-analytics-event="build_setup_click" data-analytics-location="final_cta">Build My Setup</span>
          <a class="button google-play" href="${GOOGLE_PLAY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Get RigAI on Google Play" data-analytics-event="google_play_click" data-analytics-location="final_cta">Get it on Google Play</a>
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
