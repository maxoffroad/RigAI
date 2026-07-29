function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

export function renderVehicleCard(
  vehicle,
  {
    index = 0,
    analyticsLocation,
    showDescription = false,
    showImage = false
  } = {}
) {
  const scope = vehicle.scope
    ? `<span class="vehicle-card-scope vehicle-card__meta">${escapeHtml(vehicle.scope)}</span>`
    : "";
  const description = showDescription && vehicle.description
    ? `<p class="vehicle-card-description vehicle-card__description">${escapeHtml(vehicle.description)}</p>`
    : "";
  const statusClass =
    vehicle.state === "guide" || vehicle.state === "supported"
      ? " success"
      : vehicle.state === "limited"
        ? " warning"
        : "";
  const image = showImage ? vehicle.images?.directory : null;
  const media = image
    ? `<div class="vehicle-media vehicle-media--photo" data-vehicle-media>
            <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" width="${image.width}" height="${image.height}" loading="${index < 2 ? "eager" : "lazy"}" decoding="async"${index === 0 ? ' fetchpriority="high"' : ""} data-vehicle-image style="object-position: ${escapeHtml(image.objectPosition)}" />
            <span class="vehicle-media-fallback" aria-hidden="true">${escapeHtml(vehicle.name)}</span>
          </div>`
    : `<div class="vehicle-media" aria-hidden="true" data-variant="${index + 1}"></div>`;
  const cta = vehicle.href
    ? `<strong class="card-link-label vehicle-card__cta">${escapeHtml(vehicle.ctaLabel || "Open vehicle guide")}</strong>`
    : "";
  const content = `${media}
          <span class="vehicle-card__overlay" aria-hidden="true"></span>
          <div class="vehicle-card__content">
            <h3 class="vehicle-card__title">${escapeHtml(vehicle.name)}</h3>
            ${scope}${description}<span class="status-label vehicle-card__status${statusClass}">${escapeHtml(vehicle.status)}</span>
            ${cta}
          </div>`;

  if (!vehicle.href) {
    return `<article class="vehicle-card vehicle-card--visual vehicle-card--${vehicle.state}">${content}</article>`;
  }

  return `<a class="vehicle-card vehicle-card--visual is-published" href="${vehicle.href}" aria-label="${escapeHtml(vehicle.name)} upgrade guide" data-analytics-event="vehicle_guide_click" data-analytics-location="${analyticsLocation}" data-vehicle-slug="${vehicle.slug}">${content}</a>`;
}
