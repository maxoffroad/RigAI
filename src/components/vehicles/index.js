import { vehicles } from "../../content/home.js";
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
  const publishedVehicles = vehicles.filter((vehicle) => vehicle.href);

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
                  showDescription: true
                })
              )
              .join("")}
          </div>
        </section>
      </div>
    </main>`;
}
