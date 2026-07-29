import { vehicles } from "../../content/home.js";
import { getVehicleImage } from "../../content/vehicle-images.js";
import { renderVehicleCard } from "./card.js";

function renderBreadcrumbs() {
  return `<nav class="breadcrumb article-breadcrumb" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li><span aria-current="page">Vehicles</span></li>
      </ol>
    </nav>`;
}

export function renderVehiclesDirectory() {
  const publishedVehicles = vehicles
    .filter((vehicle) => vehicle.href)
    .map((vehicle) => ({
      ...vehicle,
      images: getVehicleImage(vehicle.slug)
    }));
  const imageCredits = publishedVehicles
    .map((vehicle) => {
      const source = vehicle.images?.source;
      if (!source) return "";
      return `<li><strong>${vehicle.name}:</strong> ${source.author}, <a href="${source.pageUrl}" rel="noopener noreferrer">${source.publisher}</a>, <a href="${source.licenseUrl}" rel="license noopener noreferrer">${source.licenseName}</a>.</li>`;
    })
    .join("");

  return `<main id="main-content" class="vehicles-directory-page">
      <div class="article-shell">
        ${renderBreadcrumbs()}
        <header class="vehicles-directory-header">
          <p class="eyebrow">Vehicle guides</p>
          <h1>Off-Road Vehicle Upgrade Guides</h1>
          <p>Choose a vehicle-specific planning hub for upgrade order, fitment reminders, load considerations, and related guides.</p>
        </header>
        <section aria-labelledby="published-vehicle-guides">
          <h2 id="published-vehicle-guides">Published vehicle guides</h2>
          <div class="vehicle-grid vehicle-directory-grid">
            ${publishedVehicles
              .map((vehicle, index) =>
                renderVehicleCard(vehicle, {
                  index,
                  analyticsLocation: "vehicles_directory_card",
                  showDescription: true,
                  showImage: true
                })
              )
              .join("")}
          </div>
          <details class="vehicle-image-credits">
            <summary>Vehicle image credits</summary>
            <ul>${imageCredits}</ul>
          </details>
        </section>
      </div>
    </main>`;
}
