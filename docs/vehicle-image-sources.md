# RigAI Vehicle Image Sources

## Scope

These images are used only in the crawlable `/vehicles` directory and the matching vehicle guide hub. They are not used in the homepage hero, app preview, advertisements, or individual guide articles.

All served files are local WebP derivatives in `public/images/vehicles`. WebP conversion removes embedded metadata and reduces transfer size. No logos, text, accessories, or vehicle details were added or removed.

## Source Register

| Vehicle | Local file | Source and publisher | Author / credit | License or usage basis | Changes |
| --- | --- | --- | --- | --- | --- |
| Toyota 4Runner (5th Gen) | `/images/vehicles/toyota-4runner.webp` | [2024 Toyota 4Runner album](https://pressroom.toyota.com/album/2024-toyota-4runner/), Toyota USA Newsroom | Toyota Motor Sales, U.S.A. | Toyota newsroom materials are provided for editorial use only. This image is confined to editorial vehicle discovery and the 4Runner guide hub, not advertising. | Web-resolution source resized only as needed, converted to WebP, metadata removed. |
| Toyota Tacoma (3rd Gen) | `/images/vehicles/toyota-tacoma.webp` | [2023 Toyota Tacoma album](https://pressroom.toyota.com/album/2023-toyota-tacoma/), Toyota USA Newsroom | Toyota Motor Sales, U.S.A. | Toyota newsroom editorial-use terms. This image is confined to editorial vehicle discovery and the Tacoma guide hub, not advertising. | Web-resolution source resized to 1400 px, converted to WebP, metadata removed. |
| Jeep Wrangler JL | `/images/vehicles/jeep-wrangler-jl.webp` | [Jeep Wrangler (JL) 090254](https://commons.wikimedia.org/wiki/File:Jeep_Wrangler_(JL)_090254.jpg), Wikimedia Commons | Trop86 | [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) | Resized to 1400 px, converted to WebP, metadata removed. |
| Ford Bronco (6th Gen) | `/images/vehicles/ford-bronco.webp` | [Ford Bronco (U725), Washington DC](https://commons.wikimedia.org/wiki/File:Ford_Bronco_(U725)_Washington_DC_Metro_Area,_USA.jpg), Wikimedia Commons | OWS Photography | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) | Resized to 1400 px, converted to WebP, metadata removed. |
| Jeep Gladiator JT | `/images/vehicles/jeep-gladiator.webp` | [2020 Jeep Gladiator Rubicon](https://commons.wikimedia.org/wiki/File:2020_Jeep_Gladiator_Rubicon,_front_10.25.20.jpg), Wikimedia Commons | Kevauto | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The WebP derivative is distributed under the same license. | Resized to 1400 px, converted to WebP, metadata removed. |
| Chevrolet Colorado (3rd Gen) | `/images/vehicles/chevrolet-colorado.webp` | [2023 Chevrolet Colorado ZR2](https://commons.wikimedia.org/wiki/File:2023_Chevrolet_Colorado_ZR2.jpg), Wikimedia Commons | 42-BRT | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The WebP derivative is distributed under the same license. | Resized to 1400 px, converted to WebP, metadata removed. |
| Ford Ranger (2024-present US generation) | `/images/vehicles/ford-ranger.webp` | [Ford Ranger Raptor (P703) 1X7A6776](https://commons.wikimedia.org/wiki/File:Ford_Ranger_Raptor_(P703)_1X7A6776.jpg), Wikimedia Commons | Alexander-93 | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The WebP derivative is distributed under the same license. | Resized to 1400 px, converted to WebP, metadata removed. |
| Ford F-150 (14th Gen) | `/images/vehicles/ford-f150.webp` | [2024 Ford F-150 Tremor SuperCrew](https://commons.wikimedia.org/wiki/File:Ford_F-150_Tremor_4WD_SuperCrew_(2024)_(53620395622).jpg), Wikimedia Commons | Charles from Port Chester, New York | [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/) | Resized to 1400 px, converted to WebP, metadata removed. |
| Toyota Tundra (3rd Gen) | `/images/vehicles/toyota-tundra.webp` | [2024 Toyota Tundra album](https://pressroom.toyota.com/album/2024-toyota-tundra/), Toyota USA Newsroom | Toyota Motor Sales, U.S.A. | Toyota newsroom editorial-use terms. This image is confined to editorial vehicle discovery and the Tundra guide hub, not advertising. | Web-resolution source resized to 1400 px, converted to WebP, metadata removed. |
| Nissan Frontier (3rd Gen) | `/images/vehicles/nissan-frontier.webp` | [2022 Nissan Frontier, front](https://commons.wikimedia.org/wiki/File:2022_Nissan_Frontier,_front_3.20.23.jpg), Wikimedia Commons | Kevauto | [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). The WebP derivative is distributed under the same license. | Resized to 1400 px, converted to WebP, metadata removed. |

## Attribution Delivery

- Vehicle hub captions link to the source page and license.
- The `/vehicles` directory includes a compact `Vehicle image credits` disclosure after the card grid.
- Source, author, license, dimensions, alt text, and object position are centralized in `src/content/vehicle-images.js`.

## Review Notes

- Selected vehicles match the generation covered by each RigAI hub.
- Images show stock production vehicles without custom aftermarket builds or watermarks.
- If a local image fails to load, the shared component displays the existing RigAI vehicle-plan visual instead of requesting a remote image.
- Source and license details were reviewed on 2026-07-29.
