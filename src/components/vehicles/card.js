function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderVehicleCard(
  vehicle,
  { index = 0, analyticsLocation, showDescription = false } = {}
) {
  const scope = vehicle.scope
    ? `<span class="vehicle-card-scope">${escapeHtml(vehicle.scope)}</span>`
    : "";
  const description = showDescription && vehicle.description
    ? `<p class="vehicle-card-description">${escapeHtml(vehicle.description)}</p>`
    : "";
  const statusClass =
    vehicle.state === "guide" || vehicle.state === "supported"
      ? " success"
      : vehicle.state === "limited"
        ? " warning"
        : "";
  const content = `<div class="vehicle-media" aria-hidden="true" data-variant="${index + 1}"></div>
          <h3>${escapeHtml(vehicle.name)}</h3>
          ${scope}${description}<span class="status-label${statusClass}">${escapeHtml(vehicle.status)}</span>`;

  if (!vehicle.href) {
    return `<article class="vehicle-card vehicle-card--visual vehicle-card--${vehicle.state}">${content}</article>`;
  }

  return `<a class="vehicle-card vehicle-card--visual is-published" href="${vehicle.href}" aria-label="${escapeHtml(vehicle.name)} upgrade guide" data-analytics-event="vehicle_guide_click" data-analytics-location="${analyticsLocation}" data-vehicle-slug="${vehicle.slug}">${content}<strong class="card-link-label">${escapeHtml(vehicle.ctaLabel || "Open vehicle guide")}</strong></a>`;
}
