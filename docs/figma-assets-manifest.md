# RigAI Figma Assets Manifest

| Section | Figma visual | Current asset | Status | Production-safe | Replacement needed | Recommended alt | Focal point |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero SUV | Large dark SUV trail image with overlaid plan card | `src/assets/rigai-garage-bg.jpg` | Existing local generic off-road image | Yes | Replace when final licensed hero SUV asset is available | Modified off-road SUV on a forest trail | `center` |
| Build result SUV | Wide SUV trail result image | `src/assets/rigai-garage-bg.jpg` | Existing local generic off-road image reused | Yes | Replace with final licensed result image | Modified off-road SUV on a forest trail | `center bottom` |
| Vehicle cards | Six model-specific image cards | CSS neutral visual placeholders | Safe placeholder state | Yes | Replace with verified, licensed model-specific images | Decorative platform preview | N/A |
| App screens | Four mobile app preview screens | HTML/CSS example app flow | Example UI preview, not real screenshots | Yes | Replace only if confirmed app screenshots are supplied | Example app flow | N/A |
| Decorative backgrounds | Dark grid and automotive atmosphere | CSS grid plus `src/assets/rigai-garage-bg.jpg` body overlay | Existing local asset and CSS | Yes | Optional refinement with final art direction assets | Decorative dark off-road background | `center` |

Notes:
- No external vehicle images were downloaded or copied.
- No Figma binary assets were committed.
- Model-specific alt text is avoided where the current image does not verify the exact model.
- `.media-frame img` uses object-fit and focal point modifier classes so final assets can be swapped without rebuilding the layout.
