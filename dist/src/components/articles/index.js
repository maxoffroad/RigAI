import { readingTimeMinutes, toyota4RunnerPages } from "../../content/toyota-4runner.js";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function guideSlug(href) {
  return href.split("/").filter(Boolean).pop() || "toyota-4runner";
}

function guideAnalytics(href, location) {
  return `data-analytics-event="guide_click" data-analytics-location="${location}" data-guide-slug="${guideSlug(href)}" data-vehicle-slug="toyota-4runner"`;
}

function renderBreadcrumbs(items) {
  return `<nav class="breadcrumb article-breadcrumb" aria-label="Breadcrumb">
      <ol>
        ${items.map((item, index) => {
          const isLast = index === items.length - 1;
          return `<li>${isLast ? `<span aria-current="page">${escapeHtml(item.label)}</span>` : `<a href="${item.href}">${escapeHtml(item.label)}</a>`}</li>`;
        }).join("")}
      </ol>
    </nav>`;
}

function renderToc(items) {
  return `<nav class="article-toc" aria-label="Table of contents">
      <h2>On this page</h2>
      <ol>${items.map(([id, label]) => `<li><a href="#${id}">${escapeHtml(label)}</a></li>`).join("")}</ol>
    </nav>`;
}

function renderScope(scope) {
  return `<aside class="callout vehicle-scope-callout">
      <strong>${escapeHtml(scope.title)}</strong>
      <p>${escapeHtml(scope.text)}</p>
    </aside>`;
}

function renderTakeaways(items) {
  return `<section class="article-takeaways" aria-labelledby="key-takeaways">
      <p class="eyebrow">Decision summary</p>
      <h2 id="key-takeaways">Key takeaways</h2>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
    </section>`;
}

function contextualLink(link) {
  if (!link) return "";
  return `<p class="contextual-link">${escapeHtml(link.before)}<a href="${link.href}" ${guideAnalytics(link.href, "article_context")}>${escapeHtml(link.label)}</a>${escapeHtml(link.after)}</p>`;
}

function renderProse(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      ${contextualLink(section.contextualLink)}
    </section>`;
}

function renderScenarios(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      ${section.intro ? `<p>${escapeHtml(section.intro)}</p>` : ""}
      <div class="scenario-grid">
        ${section.items.map((item) => `<article class="scenario-card">
          <h3>${escapeHtml(item.title)}</h3>
          <dl>
            <div><dt>Prioritize</dt><dd>${escapeHtml(item.priority)}</dd></div>
            <div><dt>Can wait</dt><dd>${escapeHtml(item.wait)}</dd></div>
            <div><dt>Confirm</dt><dd>${escapeHtml(item.data)}</dd></div>
          </dl>
        </article>`).join("")}
      </div>
    </section>`;
}

function renderSystems(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      ${section.intro ? `<p>${escapeHtml(section.intro)}</p>` : ""}
      <div class="article-system-grid">
        ${section.items.map(([title, text]) => `<article>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(text)}</p>
        </article>`).join("")}
      </div>
      ${contextualLink(section.contextualLink)}
    </section>`;
}

function renderSequence(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      ${section.intro ? `<p>${escapeHtml(section.intro)}</p>` : ""}
      <ol class="decision-sequence">
        ${section.items.map(([title, text]) => `<li><div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></div></li>`).join("")}
      </ol>
    </section>`;
}

function renderChecklist(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      ${section.intro ? `<p>${escapeHtml(section.intro)}</p>` : ""}
      <ul class="article-checklist">${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      ${section.note ? `<aside class="dependency-note"><strong>Planning boundary</strong><p>${escapeHtml(section.note)}</p></aside>` : ""}
    </section>`;
}

function renderTable(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      <div class="table-scroll" tabindex="0" role="region" aria-label="${escapeHtml(section.caption)}">
        <table class="table article-table">
          <caption>${escapeHtml(section.caption)}</caption>
          <thead><tr>${section.headers.map((header) => `<th scope="col">${escapeHtml(header)}</th>`).join("")}</tr></thead>
          <tbody>${section.rows.map((row) => `<tr>${row.map((cell, index) => index === 0 ? `<th scope="row">${escapeHtml(cell)}</th>` : `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
        </table>
      </div>
    </section>`;
}

function renderDependency(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      <div class="dependency-chain" aria-label="${escapeHtml(section.steps.join(" leads to "))}">
        ${section.steps.map((step, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHtml(step)}</strong></div>`).join("")}
      </div>
      <aside class="dependency-note"><strong>Why this matters</strong><p>${escapeHtml(section.text)}</p></aside>
    </section>`;
}

function renderMistakes(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      ${section.intro ? `<p>${escapeHtml(section.intro)}</p>` : ""}
      <div class="mistake-list">${section.items.map(([title, text]) => `<article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></article>`).join("")}</div>
      ${contextualLink(section.contextualLink)}
    </section>`;
}

function renderFeatured(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      <div class="related-guide-grid">
        ${section.published.map((item) => `<a class="related-guide-card is-published" href="${item.href}" ${guideAnalytics(item.href, "article_featured")}>
          <span class="eyebrow">${escapeHtml(item.eyebrow)}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          <strong>Read guide</strong>
        </a>`).join("")}
      </div>
      ${section.planned?.length ? `<div class="planned-guides" aria-label="Planned guides">
        <span>Planned</span>
        ${section.planned.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>` : ""}
    </section>`;
}

function renderFaq(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      <div class="faq-list article-faq">
        ${section.items.map((item, index) => `<details class="faq-item" data-analytics-event="faq_open" data-faq-id="${section.id}-faq-${index + 1}"><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`).join("")}
      </div>
    </section>`;
}

function renderBudget(section) {
  return `<section class="article-section" id="${section.id}">
      <h2>${escapeHtml(section.title)}</h2>
      <div class="budget-levels">${section.items.map((item, index) => `<article>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.text)}</p>
      </article>`).join("")}</div>
    </section>`;
}

function renderExample(section) {
  return `<section class="article-section" id="${section.id}">
      <div class="example-heading"><span>Example only</span><h2>${escapeHtml(section.title)}</h2></div>
      <p>${escapeHtml(section.intro)}</p>
      <ol class="example-order">${section.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ol>
    </section>`;
}

function renderSection(section) {
  const renderers = {
    prose: renderProse,
    scenarios: renderScenarios,
    systems: renderSystems,
    sequence: renderSequence,
    checklist: renderChecklist,
    comparison: renderTable,
    dependency: renderDependency,
    mistakes: renderMistakes,
    featured: renderFeatured,
    faq: renderFaq,
    budget: renderBudget,
    example: renderExample
  };

  const renderer = renderers[section.type];
  if (!renderer) throw new Error(`Unknown article section type: ${section.type}`);
  return renderer(section);
}

function renderRelated(items) {
  return `<section class="related-guides" aria-labelledby="related-guides-title">
      <p class="eyebrow">Continue planning</p>
      <h2 id="related-guides-title">Related 4Runner guides</h2>
      <div class="related-guide-grid">
        ${items.map((item) => {
          const relatedPage = toyota4RunnerPages.find((page) => page.route === item.href);
          const readingTime = relatedPage?.kind === "article" ? readingTimeMinutes(relatedPage) : null;
          return `<a class="related-guide-card is-published" href="${item.href}" ${guideAnalytics(item.href, "related_guides")}>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.text)}</p>
          <strong>Read guide${readingTime ? ` · ${readingTime} min` : ""}</strong>
        </a>`;
        }).join("")}
      </div>
    </section>`;
}

function renderAppCta(page) {
  return `<section class="article-app-cta" aria-labelledby="article-app-cta-title">
      <div>
        <p class="eyebrow">Personalized planning</p>
        <h2 id="article-app-cta-title">Build Your 4Runner Plan</h2>
        <p>RigAI uses your generation, trim, drivetrain, KDSS status, driving profile, budget, installed equipment, and planned load to organize what to consider first and what can wait.</p>
      </div>
      <a class="button primary" href="/#download" data-analytics-event="build_setup_click" data-analytics-location="article_cta" data-destination-type="internal_section">Check app availability</a>
    </section>`;
}

function renderEditorial(page) {
  return `<section class="editorial-notes" aria-labelledby="editorial-notes-title">
      <div>
        <p class="eyebrow">Editorial transparency</p>
        <h2 id="editorial-notes-title">Editorial and fitment notes</h2>
        <p>This guide is informational. Vehicle configurations vary, and manufacturer fitment data is the final source for a specific part. RigAI reviewed this page against the technical sources listed below.</p>
        <p><strong>Editorial responsibility:</strong> RigAI Editorial Team<br><strong>Last reviewed:</strong> ${escapeHtml(page.dates.reviewedLabel)}</p>
      </div>
      <div>
        <h3>Core sources</h3>
        <ul>${page.sources.map((source) => `<li><a href="${source.href}" rel="noopener noreferrer" data-analytics-event="outbound_link_click" data-analytics-location="article_sources">${escapeHtml(source.label)}</a><span>${escapeHtml(source.type)}</span></li>`).join("")}</ul>
      </div>
    </section>`;
}

function renderSafety(safety) {
  return `<aside class="callout safety-disclaimer">
      <strong>${escapeHtml(safety.title)}</strong>
      ${safety.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
    </aside>`;
}

export function renderVehicleArticle(page) {
  const readingTime = readingTimeMinutes(page);
  const sectionsHtml = page.sections.map(renderSection).join("");

  return `<main id="main-content" class="vehicle-article-page">
      <div class="article-shell">
        ${renderBreadcrumbs(page.breadcrumbs)}
        <header class="article-header">
          <div>
            <p class="eyebrow">${escapeHtml(page.eyebrow)}</p>
            <h1>${escapeHtml(page.h1)}</h1>
            <p class="article-dek">${escapeHtml(page.dek)}</p>
            <div class="article-meta">
              <span>RigAI Editorial Team</span>
              <time datetime="${page.dates.published}">Published ${escapeHtml(page.dates.reviewedLabel)}</time>
              ${page.kind === "article" ? `<span>${readingTime} min read</span>` : ""}
            </div>
          </div>
          <div class="article-hero-visual" aria-hidden="true">
            <span>4RUNNER</span>
            <div class="system-lines"><i></i><i></i><i></i><i></i></div>
            <strong>Vehicle plan</strong>
          </div>
        </header>
        ${renderScope(page.scope)}
        ${renderTakeaways(page.takeaways)}
        <div class="article-layout">
          <aside class="article-sidebar">${renderToc(page.toc)}</aside>
          <article class="article-content">
            ${sectionsHtml}
            ${renderSafety(page.safety)}
            ${renderRelated(page.related)}
            ${renderAppCta(page)}
            ${renderEditorial(page)}
          </article>
        </div>
      </div>
    </main>`;
}
