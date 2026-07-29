const dates = {
  published: "2026-07-29T12:00:00+05:00",
  modified: "2026-07-29T12:00:00+05:00",
  reviewedLabel: "July 29, 2026"
};

const vehicle = {
  slug: "nissan-frontier",
  name: "Nissan Frontier 2022-Present",
  shortName: "Frontier",
  guidesLabel: "Nissan Frontier",
  heroLabel: "Frontier",
  ctaLabel: "Build My Setup",
  planInputs:
    "model year, S trim, SV, PRO-X or PRO-4X, King Cab or Crew Cab, standard bed or long bed, 4x2 or 4x4 drivetrain, factory suspension, wheels and tires, payload label, towing equipment, permanent accessories, passengers, cargo, trailer tongue weight, terrain, and current modifications"
};

const scope = {
  title: "Vehicle scope: 2022-present US Nissan Frontier",
  text:
    "This guide covers third-generation US-market Nissan Frontier pickups from model year 2022 to the present. Equipment varies by year, S trim, SV, PRO-X or PRO-4X, King Cab or Crew Cab, standard bed or long bed where offered, 4x2 or 4x4 drivetrain, suspension, wheels and tires, towing equipment, payload configuration, packages, and prior modifications. It does not use pre-2022 Frontier or international Navara specifications."
};

const safety = {
  title: "Safety, loading, towing, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, tire and loading label, certification label, Nissan towing information, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify model year, trim, cab, bed length, drivetrain, factory suspension, wheels, measured tire dimensions, payload, GVWR, GAWR, towing equipment, trailer requirements, permanent accessories, passengers, cargo, and tongue weight before purchasing, loading, towing, or installing parts."
  ]
};

const sources = {
  specs: {
    label: "2026 Nissan Frontier specifications and trims",
    href: "https://www.nissanusa.com/vehicles/trucks/frontier/specs-trims.html",
    type: "Nissan official US vehicle information"
  },
  brochure: {
    label: "2025 Nissan Frontier brochure",
    href: "https://www.nissanusa.com/content/dam/Nissan/us/vehicle-brochures/2025/2025-nissan-frontier-brochure-en.pdf",
    type: "Nissan official US equipment and specification information"
  },
  features: {
    label: "Nissan Frontier capability and configuration overview",
    href: "https://www.nissanusa.com/vehicles/trucks/frontier/features.html",
    type: "Nissan official US vehicle information"
  },
  manual: {
    label: "2025 Nissan Frontier owner's manual",
    href: "https://www.nissanusa.com/content/dam/Nissan/us/manuals-and-guides/frontier/2025/2025-nissan-frontier-owner-manual.pdf",
    type: "Nissan official owner information"
  }
};

const sharedSources = [sources.specs, sources.brochure, sources.features, sources.manual];

const breadcrumbs = (label) => [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  ...(label
    ? [
        { label: "Nissan Frontier", href: "/vehicles/nissan-frontier" },
        { label }
      ]
    : [{ label: "Nissan Frontier" }])
];

const related = {
  hub: {
    title: "Nissan Frontier Guides",
    href: "/vehicles/nissan-frontier",
    text: "Start with the complete 2022-present Frontier planning framework."
  },
  first: {
    title: "Best First Upgrades for Nissan Frontier",
    href: "/vehicles/nissan-frontier/first-upgrades",
    text: "Prioritize inspection, tires, recovery, protection, bed utility, and load planning."
  },
  suspension: {
    title: "Nissan Frontier Suspension Guide",
    href: "/vehicles/nissan-frontier/suspension",
    text: "Plan IFS, rear leaf springs, damping, geometry, payload, and towing as one system."
  },
  tires: {
    title: "Nissan Frontier Tire Size and Fitment Guide",
    href: "/vehicles/nissan-frontier/tire-size",
    text: "Verify measured dimensions, wheel position, steering, compression, load, and spare clearance."
  },
  lift: {
    title: "Nissan Frontier Lift Kit Guide",
    href: "/vehicles/nissan-frontier/lift-kit",
    text: "Compare leveling, coilovers, rear blocks, leaf systems, geometry, travel, and ride."
  },
  overland: {
    title: "Nissan Frontier Overland Build Guide",
    href: "/vehicles/nissan-frontier/overland-build",
    text: "Stage payload, bed systems, recovery, power, suspension, and towing decisions."
  }
};

const guideCards = [
  { eyebrow: "Published guide", title: related.first.title, text: related.first.text, href: related.first.href },
  { eyebrow: "Published guide", title: related.suspension.title, text: related.suspension.text, href: related.suspension.href },
  { eyebrow: "Published guide", title: related.tires.title, text: related.tires.text, href: related.tires.href },
  { eyebrow: "Published guide", title: related.lift.title, text: related.lift.text, href: related.lift.href },
  { eyebrow: "Published guide", title: related.overland.title, text: related.overland.text, href: related.overland.href }
];

const commonFaq = [
  {
    question: "Does one upgrade plan fit every 2022-present Frontier?",
    answer:
      "No. Year, trim, cab, bed, drivetrain, suspension, wheels, tires, payload, towing equipment, load, and prior modifications must be verified."
  },
  {
    question: "Is PRO-X the same as PRO-4X?",
    answer:
      "No. PRO-X is a 4x2 configuration, while PRO-4X is the factory 4x4 off-road configuration with model-year-specific chassis, traction, protection, tire, and camera equipment."
  },
  {
    question: "Can suspension changes increase payload or towing ratings?",
    answer:
      "No. Springs and dampers can change support or control, but they do not replace the limits on the truck's labels or Nissan towing information."
  }
];

export const nissanFrontierPages = [
  {
    key: "nissan-frontier",
    kind: "vehicleHub",
    route: "/vehicles/nissan-frontier",
    title: "Nissan Frontier Off-Road Upgrade Guide | RigAI",
    description:
      "Plan 2022-present Nissan Frontier upgrades around S, SV, PRO-X, PRO-4X, suspension, tires, lift, payload, towing, and overland use.",
    socialTitle: "Nissan Frontier Off-Road Upgrade Guide | RigAI",
    socialDescription:
      "A third-generation Frontier planning hub for daily use, trails, towing, suspension, tires, lift, payload, and overland equipment.",
    eyebrow: "2022-present US Nissan Frontier planning guide",
    h1: "Nissan Frontier Off-Road Upgrade Guide",
    dek:
      "Plan the midsize pickup as one system. Trim, cab, bed, drivetrain, factory equipment, payload, towing, daily driving, and trail goals change the right upgrade order.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Confirm the exact year, S, SV, PRO-X or PRO-4X trim, cab, bed, drivetrain, suspension, wheel and tire package, payload label, and towing equipment.",
      "PRO-X and PRO-4X are different starting points: PRO-X is 4x2, while PRO-4X is the distinct factory 4x4 off-road configuration.",
      "Bilstein dampers, electronic locking rear differential, all-terrain tires, skid plates, tow hooks, and Off-Road Mode camera features are configuration-specific.",
      "Passengers, bed cargo, accessories, and trailer tongue weight all consume the payload available on the individual truck."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["configurations", "Configuration differences"],
      ["use-cases", "Use cases"],
      ["systems", "Connected upgrade goals"],
      ["featured-guides", "Frontier guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should a Frontier plan begin with?",
        paragraphs: [
          "Begin with model year, trim, King Cab or Crew Cab, standard or long bed where offered, wheelbase, 4x2 or 4x4 drivetrain, factory suspension, wheels and tires, payload label, towing equipment, protection, recovery provisions, normal passengers, cargo, trailer use, and current modifications.",
          "A midsize pickup combines useful bed space with a shorter footprint than a full-size truck, but wheelbase, rear overhang, bed load, accessory mass, and turning space still affect breakover, departure clearance, steering, braking, recovery, and trail access."
        ]
      },
      {
        type: "systems",
        id: "configurations",
        title: "Configuration details that change the plan",
        intro:
          "A trim badge is a starting point, not proof of every feature. Verify model-year equipment on the individual truck.",
        items: [
          ["S and SV", "Confirm 4x2 or 4x4 drivetrain, cab, bed, factory tires, wheel package, tow hooks, protection, payload, towing equipment, and packages before adding parts."],
          ["PRO-X", "Treat it as a 4x2 appearance and equipment configuration, not as a PRO-4X or proof of four-wheel-drive traction hardware."],
          ["PRO-4X", "Inventory its model-year Bilstein dampers, electronic locking rear differential, all-terrain tires, skid plates, front tow hooks, hill-descent and Off-Road Mode camera equipment."],
          ["King Cab", "Rear seating, access doors, bed availability, wheelbase, payload, storage, passenger use, rack span, and departure clearance differ from Crew Cab."],
          ["Crew Cab", "Passenger space, standard or long-bed availability, wheelbase, rear load distribution, payload, towing, parking, and trail maneuverability change the plan."],
          ["4x2 and 4x4", "Transfer case, front driveline, CV joints, recovery expectations, traction, clearance, weight, payload, and trail suitability are different."],
          ["Payload and towing", "Use the individual truck's labels and model-year Nissan information; ratings vary by cab, bed, trim, drivetrain, and equipment."]
        ]
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Match the plan to how the Frontier is used",
        items: [
          {
            title: "Daily driver",
            priority: "Condition, tire pressure, braking, steering, visibility, ride, parking, weather use, and useful bed security.",
            wait: "Heavy armor, large offset changes, or permanent camping equipment without a regular need.",
            data: "Trim, cab, bed, passengers, commute, parking, normal cargo, tires, payload, and highway behavior."
          },
          {
            title: "Mild trail and remote access",
            priority: "Suitable tires, inflation equipment, rated recovery, recovery-point verification, essential protection, and route clearance.",
            wait: "Lift when stock capability and careful line choice already match the route.",
            data: "4x2 or 4x4, PRO-4X equipment, surface, trail width, wheelbase, recovery provisions, tires, and load."
          },
          {
            title: "Technical trail use",
            priority: "4x4 system, traction equipment, tires, pressure, protection, recovery, spotter visibility, clearance, and controlled weight.",
            wait: "Large tires or lift without full-travel clearance, gearing, braking, steering, and recovery planning.",
            data: "PRO-4X equipment, locking differential operation, skid coverage, terrain, obstacles, wheelbase, load, and exit plan."
          },
          {
            title: "Towing and work",
            priority: "Truck-specific ratings, hitch, tongue weight, payload, axle load, brakes, tires, cooling, and stable handling.",
            wait: "Suspension changes used to hide overload or exceed a published limit.",
            data: "Labels, Nissan towing information, cab, bed, drivetrain, trailer, tongue weight, people, cargo, and scale data."
          },
          {
            title: "Overland travel",
            priority: "Payload, secure low cargo, bed access, recovery, range, braking, reliability, and loaded handling.",
            wait: "Rack, tent, drawers, armor, battery, water, and fuel before a complete weight budget exists.",
            data: "Trip duration, people, shelter, water, fuel, spare, trailer, bed, payload, and daily use."
          }
        ]
      },
      {
        type: "systems",
        id: "systems",
        title: "Plan Frontier goals as connected systems",
        items: [
          ["Tires and wheels", "Measured dimensions, wheel width, offset, backspacing, steering lock, compression, liner and bumper clearance, braking, gearing, towing, and spare storage."],
          ["Recovery and protection", "Rated recovery provisions, 4x2 or 4x4 expectations, safe equipment, skid coverage, differential protection and exposure, rock protection, service access, and added weight."],
          ["Front suspension", "Double-wishbone IFS, coilover or strut assemblies, control arms, tie rods, CV joints on 4x4 trucks, alignment, droop, compression, and bump stops."],
          ["Rear suspension", "Solid rear axle, overslung multi-leaf packs, rear shocks, bump stops, empty-bed ride, permanent load, payload, and trailer tongue weight."],
          ["PRO-4X system", "Bilstein damping, electronic locking rear differential, tires, protection, recovery hooks, traction controls, and Off-Road Mode camera where equipped."],
          ["Bed and cab", "Bed length, rack span, cap or tent fitment, tie-downs, bed access, passenger room, cargo restraint, rear axle loading, and departure angle."],
          ["Payload and towing", "Truck labels, GVWR, GAWR, hitch, trailer, tongue weight, people, cargo, brakes, tires, cooling, stability, and legal requirements."]
        ]
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Nissan Frontier guides",
        published: guideCards
      },
      {
        type: "faq",
        id: "questions",
        title: "Nissan Frontier planning questions",
        items: commonFaq
      }
    ],
    related: [related.first, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: sharedSources
  },
  {
    key: "nissan-frontier-first-upgrades",
    kind: "article",
    route: "/vehicles/nissan-frontier/first-upgrades",
    title: "Best First Off-Road Upgrades for Nissan Frontier | RigAI",
    description:
      "Prioritize 2022-present Nissan Frontier inspection, tires, recovery, protection, bed utility, payload, towing, and suspension by actual use.",
    socialTitle: "Best First Off-Road Upgrades for Nissan Frontier | RigAI",
    socialDescription:
      "A practical first-upgrade order for Frontier daily driving, trails, work, towing, and overland travel, with distinct PRO-4X guidance.",
    eyebrow: "Nissan Frontier first-upgrade guide",
    h1: "Best First Off-Road Upgrades for Nissan Frontier",
    dek:
      "Begin with condition and a complete use-and-load plan. The right first purchase depends on trim, cab, bed, drivetrain, factory equipment, terrain, towing, and permanent weight.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Inspect tires, brakes, steering, suspension, recovery provisions, protection, hitch, bed, spare, and previous changes first.",
      "S, SV, PRO-X, and PRO-4X have different starting equipment and should not share one automatic upgrade order.",
      "A PRO-4X may gain more from recovery, tire care, protection assessment, and load planning than immediate suspension replacement.",
      "Plan springs and damping after bumper, winch, rack, cap, tent, storage, normal cargo, and trailer tongue weight are known."
    ],
    toc: [
      ["baseline", "Baseline inspection"],
      ["sequence", "Useful first systems"],
      ["paths", "Upgrade paths by use"],
      ["starting-points", "Trim starting points"],
      ["avoid", "What to skip for now"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Inspect the truck before buying parts",
        paragraphs: [
          "Check tire pressure, age and wear, spare, wheels, brakes, bearings, steering, tie rods, upper and lower control arms, ball joints, CV boots on 4x4 trucks, front coilovers or struts, rear leaf packs, shocks, bump stops, lines, leaks, recovery provisions, skid plates, differential exposure, hitch, bed mounts, tie-downs, and prior work.",
          "Record the tire and loading label plus exact towing configuration. Estimate people, normal cargo, permanent accessories, trailer tongue weight, and where each load sits. A level stance cannot prove available payload."
        ],
        contextualLink: related.suspension
      },
      {
        type: "sequence",
        id: "sequence",
        title: "A useful first-upgrade sequence",
        items: [
          ["Condition and labels", "Resolve maintenance, tire, brake, steering, suspension, driveline, cooling, and safety issues. Record payload, axle, hitch, and towing information."],
          ["Tires and pressure tools", "Choose load-appropriate tires for real surfaces, then carry an accurate gauge, inflation equipment, repair supplies, and a serviceable spare."],
          ["Rated recovery", "Verify front and rear recovery provisions and procedures. Carry equipment rated for the loaded truck and understand different 4x2 and 4x4 recovery limits."],
          ["Essential protection", "Inventory factory skid plates and protect exposed engine, transmission, transfer-case, fuel, or differential areas only where routes justify the weight."],
          ["Secure bed storage", "Keep tools and travel cargo restrained, weather-protected, low, and accessible without blocking the spare or recovery equipment."],
          ["Suspension or lift", "Change height, leaf support, or damping after tire, clearance, terrain, permanent load, towing, ride, and alignment needs are defined."]
        ]
      },
      {
        type: "scenarios",
        id: "paths",
        title: "First upgrades by use",
        items: [
          {
            title: "Daily driver",
            priority: "Maintenance, all-weather tires, pressure, braking, lighting, bed security, and practical recovery basics.",
            wait: "Cosmetic leveling, heavy bumpers, large wheels, or stiff rear springs without a measured need.",
            data: "Commute, parking, people, climate, normal cargo, tire noise, payload, and towing frequency."
          },
          {
            title: "Mild trail use",
            priority: "All-terrain tires, airing equipment, rated recovery, recovery-point confirmation, targeted protection, and clearance awareness.",
            wait: "A large lift or aggressive offset before evaluating stock travel and full-compression clearance.",
            data: "4x2 or 4x4, factory protection, surface, trail width, recovery route, tires, and load."
          },
          {
            title: "Technical trail use",
            priority: "4x4 traction, appropriate tires, pressure, differential operation, protection, recovery, spotting, and controlled weight.",
            wait: "Large tires and height without geometry, travel, steering, braking, gearing, and spare planning.",
            data: "PRO-4X equipment, obstacle size, wheelbase, underbody exposure, full travel, load, and exit plan."
          },
          {
            title: "Towing and work",
            priority: "Truck and trailer ratings, hitch, tongue weight, tires, brakes, load distribution, cooling, and stable loaded behavior.",
            wait: "Lift or rear changes that reduce towing stability or disguise overload.",
            data: "Cab, bed, drivetrain, trailer, tongue weight, payload label, people, cargo, and scale weights."
          },
          {
            title: "Overland travel",
            priority: "Payload budget, light storage, recovery, tires, spare, water, power, shelter, braking, and loaded testing.",
            wait: "Steel armor, rack, tent, drawers, battery, fuel, and water all purchased before weight planning.",
            data: "Trip length, people, bed system, trailer, roads, climate, payload, axle load, and center of gravity."
          }
        ]
      },
      {
        type: "systems",
        id: "starting-points",
        title: "Respect the factory starting point",
        items: [
          ["S and SV", "Confirm drivetrain, recovery equipment, tires, protection, payload, bed utility, and towing package before adding off-road parts."],
          ["PRO-X", "Treat it as 4x2. Appearance and some equipment overlap do not give it PRO-4X drivetrain, locking differential, or trail expectations."],
          ["PRO-4X", "Inventory Bilstein dampers, locking differential, all-terrain tires, skid plates, tow hooks, and drive features before replacement."],
          ["King Cab and Crew Cab", "Passenger load, bed length, wheelbase, payload, storage, rack span, and daily use create different priorities."],
          ["Accessory weight", "Bumper, winch, armor, rack, cap, tent, drawers, battery, water, fuel, tools, people, and tongue weight must be known before spring selection."],
          ["Cosmetic versus functional lift", "A level appearance does not prove more travel, better damping, greater payload, or better towing stability."]
        ],
        contextualLink: related.overland
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "What not to buy yet",
        items: [
          ["Excessive wheel offset", "Moving the tire outward can increase scrub radius, steering load, bearing leverage, spray, and compression contact."],
          ["Unplanned permanent weight", "Bumpers, armor, racks, tents, storage, water, and power equipment consume payload and alter braking and handling."],
          ["Suspension by trim name alone", "S, SV, PRO-X, and PRO-4X components, ride heights, wheels, and equipment require exact application checks."],
          ["Leveling without a purpose", "Appearance may change while droop, CV angles, alignment range, ride, and towing stance become worse."],
          ["Replacing PRO-4X dampers automatically", "Factory Bilstein dampers should be inspected and replaced only for condition or a defined control, load, heat, durability, or travel need."],
          ["Every accessory at once", "Stage changes, weigh the truck, drive it loaded, and solve the next documented limitation."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Frontier first-upgrade questions",
        items: [
          {
            question: "Should suspension be the first Frontier upgrade?",
            answer:
              "Only when inspection, control, load support, clearance, or terrain shows a real limitation. Tires, recovery, protection, storage, and weight planning often come first."
          },
          {
            question: "Does a PRO-4X need immediate replacement shocks?",
            answer:
              "No. Inspect and use its factory Bilstein system first. Change it only for condition or a clearly defined, compatible performance or load requirement."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.suspension, related.tires, related.overland],
    safety,
    sources: sharedSources
  },
  {
    key: "nissan-frontier-suspension",
    kind: "article",
    route: "/vehicles/nissan-frontier/suspension",
    title: "Nissan Frontier Suspension Upgrade Guide | RigAI",
    description:
      "Plan 2022-present Nissan Frontier IFS, rear leaf springs, shocks, geometry, load support, towing, and PRO-4X suspension upgrades.",
    socialTitle: "Nissan Frontier Suspension Upgrade Guide | RigAI",
    socialDescription:
      "Understand Frontier coilovers, control arms, rear leaf packs, Bilstein dampers, alignment, payload, towing, and loaded ride.",
    eyebrow: "Nissan Frontier suspension guide",
    h1: "Nissan Frontier Suspension Upgrade Guide",
    dek:
      "Choose suspension for the exact trim, drivetrain, permanent weight, terrain, and towing job. PRO-4X hardware is a distinct starting point, not a universal parts list.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "The Frontier uses double-wishbone independent front suspension and an overslung multi-leaf rear suspension with a solid axle.",
      "Front lift changes control-arm, ball-joint, tie-rod, CV, caster, camber, toe, droop, compression, and bump-stop relationships.",
      "Bilstein dampers are PRO-4X-specific equipment where listed, not equipment on every S, SV, or PRO-X.",
      "Rear leaf rate and damping must consider permanent bed load, passengers, payload, trailer tongue weight, empty ride, and loaded ride."
    ],
    toc: [
      ["architecture", "Suspension architecture"],
      ["front", "Front IFS and geometry"],
      ["rear", "Rear leaf suspension"],
      ["pro4x", "PRO-4X considerations"],
      ["load", "Load and towing"],
      ["checklist", "Selection checklist"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "systems",
        id: "architecture",
        title: "Frontier suspension architecture",
        items: [
          ["Front IFS", "Independent double-wishbone layout with front coilover or strut assemblies, upper and lower control arms, steering links, stabilizer hardware, and bump stops."],
          ["Front driveline", "Four-wheel-drive trucks add front differential, half shafts, CV joints, boots, and angle constraints that 4x2 trucks do not share."],
          ["Rear axle", "A solid axle sits below overslung multi-leaf spring packs with rear shocks, shackles, U-bolts, bump stops, and model-specific stabilizer equipment."],
          ["Factory variation", "Dampers, rear leaf packs, ride height, wheels, tires, payload configuration, and PRO-4X equipment require exact application checks."]
        ]
      },
      {
        type: "prose",
        id: "front",
        title: "Front lift changes more than ride height",
        paragraphs: [
          "Raising the front changes upper and lower control-arm position, ball-joint angle, tie-rod relationship, CV angle on 4x4 trucks, caster, camber, toe, droop, compression, bump-stop engagement, and where the damper operates in its stroke.",
          "Excessive static lift can reduce droop and increase top-out, CV, steering, and alignment problems. Longer shocks alone are not a complete system, and a mild lift does not automatically require upper control arms; use measured alignment and travel needs."
        ],
        contextualLink: related.lift
      },
      {
        type: "systems",
        id: "rear",
        title: "Rear leaf packs and loaded behavior",
        items: [
          ["Leaf pack", "Select rate, arch, leaf design, and capacity for permanent load, desired ride height, available travel, empty ride, and loaded ride."],
          ["Shackles and mounts", "Inspect bushings, hangers, shackles, U-bolts, axle seats, and frame mounts; height changes alter operating position and driveshaft behavior."],
          ["Rear shocks", "Damping must control the chosen leaf pack and actual load through repeated impacts, towing, heat, and daily use without becoming harsh when empty."],
          ["Bump stops", "Preserve compression protection for axle, shocks, tires, frame, bed, exhaust, brake lines, and cargo."],
          ["Driveshaft and lines", "Check slip, joint angle, vibration, brake-line slack, ABS wiring, parking-brake cables, and clearance after meaningful height changes."],
          ["Empty versus loaded", "A heavy-load leaf pack can ride poorly and reduce traction when empty, while a soft pack can sag or bottom under permanent cargo."]
        ]
      },
      {
        type: "comparison",
        id: "pro4x",
        title: "Match suspension to the factory configuration",
        caption: "Nissan Frontier suspension configuration checks",
        headers: ["Configuration", "What to verify"],
        rows: [
          ["S and SV", "Drivetrain, cab, bed, factory damper, leaf pack, ride height, wheels, tires, payload, and towing use."],
          ["PRO-X", "Its 4x2 drivetrain, factory dampers, wheels, tires, ride height, and exact part listing; do not assume PRO-4X chassis equipment."],
          ["PRO-4X", "Bilstein dampers, 4x4 driveline, locking differential, wheels, tires, skid protection, ride height, and application-specific replacement parts."],
          ["King Cab", "Cab and bed configuration, wheelbase, rear load, payload, leaf pack, towing, and shock application."],
          ["Crew Cab and long bed", "Wheelbase, bed load, passenger load, payload, rear axle weight, departure clearance, and model-year availability."]
        ]
      },
      {
        type: "systems",
        id: "load",
        title: "Match suspension to load and towing",
        items: [
          ["Permanent front load", "Bumper, winch, lights, and armor affect front spring position, damping, steering, braking, and available payload."],
          ["Permanent bed load", "Rack, cap, tent, drawers, spare, battery, water, and tools affect leaf deflection, damping, rear axle load, ride height, and handling."],
          ["Trailer tongue weight", "Tongue load acts near the rear of the truck and affects rear axle loading and front axle response differently from cargo distributed in the bed."],
          ["Spring rate", "Select around measured permanent weight and acceptable empty behavior, not a catalog maximum-load description alone."],
          ["Ratings", "Leaf springs, shocks, helper systems, or lift parts do not increase payload, GVWR, GAWR, tire, hitch, or towing ratings."]
        ]
      },
      {
        type: "checklist",
        id: "checklist",
        title: "Suspension selection and verification",
        items: [
          "Record year, trim, cab, bed, drivetrain, wheels, tires, payload label, towing equipment, current ride heights, and permanent accessories.",
          "Inspect coilovers or struts, control arms, joints, tie rods, CV boots, leaf packs, bushings, shackles, U-bolts, shocks, bump stops, lines, and prior work.",
          "Define the problem: damping, bottoming, sag, tire clearance, alignment, travel, load support, towing stability, or damaged parts.",
          "Weigh the representative truck and compare total and axle weights with labels before selecting spring rate.",
          "Verify alignment, droop, compression, bump clearance, CV and driveshaft angles, line slack, tire contact, braking, steering, and loaded behavior after installation."
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Frontier suspension questions",
        items: [
          {
            question: "Does every Frontier use Bilstein dampers?",
            answer:
              "No. Bilstein off-road dampers are associated with specific PRO-4X equipment. Verify the actual trim, model year, and part application."
          },
          {
            question: "Should a heavy-load rear leaf pack be used on an empty daily truck?",
            answer:
              "Not automatically. A pack selected for permanent heavy load can ride harshly and reduce compliance when the bed is empty."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.first, related.tires, related.lift, related.overland],
    safety,
    sources: sharedSources
  },
  {
    key: "nissan-frontier-tire-size",
    kind: "article",
    route: "/vehicles/nissan-frontier/tire-size",
    title: "Nissan Frontier Tire Size and Fitment Guide | RigAI",
    description:
      "Check 2022-present Nissan Frontier tire fitment by trim, cab, bed, drivetrain, suspension, wheel width, offset, measured size, load, and spare clearance.",
    socialTitle: "Nissan Frontier Tire Size and Fitment Guide | RigAI",
    socialDescription:
      "A no-guarantee Frontier fitment method for factory differences, wheel position, steering, compression, braking, towing, and spare storage.",
    eyebrow: "Nissan Frontier tire fitment guide",
    h1: "Nissan Frontier Tire Size and Fitment Guide",
    dek:
      "Do not choose a universal largest tire. Verify the exact trim, wheel, measured tire, suspension, alignment, steering, compression, load, and spare location.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size and fitment"),
    takeaways: [
      "Factory wheel and tire packages differ across S, SV, PRO-X, PRO-4X, cabs, beds, drivetrains, packages, and model years.",
      "A nominal tire size is not a measured size; brand, model, wheel width, construction, pressure, and load change actual dimensions.",
      "Street-driving clearance does not prove clearance at steering lock, full suspension compression, articulation, or representative load.",
      "Larger and heavier tires affect braking, acceleration, gearing, steering, fuel economy, towing behavior, and spare storage."
    ],
    toc: [
      ["baseline", "Factory baseline"],
      ["variables", "Fitment variables"],
      ["clearance", "Dynamic clearance"],
      ["tradeoffs", "Driving tradeoffs"],
      ["spare", "Spare and verification"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Start with the exact factory package",
        paragraphs: [
          "Record model year, S, SV, PRO-X or PRO-4X trim, King Cab or Crew Cab, bed length, 4x2 or 4x4 drivetrain, suspension, wheel diameter and width, offset, tire size, load index, spare, alignment, ride height, and prior modifications.",
          "Do not use PRO-4X fitment as proof for S, SV, or PRO-X. Factory wheel, all-terrain tire, suspension, protection, body clearance, and drivetrain details can differ."
        ]
      },
      {
        type: "systems",
        id: "variables",
        title: "Variables that determine fitment",
        items: [
          ["Measured tire", "Record mounted diameter, section width, tread width, construction, load range, approved wheel range, and deflection under load."],
          ["Wheel width, offset, and backspacing", "These position the tire relative to control arms, tie rods, frame, body, liner, bumper, fender, and suspension through steering and travel."],
          ["Suspension and alignment", "Ride height, spring position, caster, camber, toe, control-arm path, bump-stop engagement, leaf deflection, and load change the tire path."],
          ["Body clearance", "Check inner fender, liner, bumper edge, mud flap, pinch or body areas where relevant, and fender through both steering locks."],
          ["Mechanical clearance", "Check upper control arm, tie rod, brake hose, sway hardware, coilover, frame, and other moving components."],
          ["Configuration", "Trim, drivetrain, cab, bed, wheel package, ride height, payload, and previous modifications can change the answer."]
        ]
      },
      {
        type: "checklist",
        id: "clearance",
        title: "Verify dynamic clearance",
        items: [
          "Measure the actual mounted tire and wheel position instead of relying only on the sidewall size.",
          "Check both steering locks on level ground and while the front suspension is loaded or articulated.",
          "Inspect inner and outer clearance through droop, full suspension compression, bump-stop approach, braking, and turning.",
          "Repeat with passengers, bed cargo, trailer tongue weight, or overland load representative of actual use.",
          "Look for contact at liners, bumper, mud flaps, control arms, tie rods, hoses, fenders, frame, and bodywork.",
          "Recheck after alignment, suspension settling, tire-pressure changes, wheel changes, or added permanent load."
        ]
      },
      {
        type: "comparison",
        id: "tradeoffs",
        title: "What a larger or heavier tire changes",
        caption: "Nissan Frontier tire-system tradeoffs",
        headers: ["System", "Possible effect", "What to verify"],
        rows: [
          ["Braking", "Greater radius, leverage, and rotating mass can increase braking demand", "Actual tire weight, brakes, load, trailer use, heat, and stopping behavior"],
          ["Acceleration and gearing", "Effective gearing becomes taller and response can soften", "Axle ratio, transmission behavior, terrain, towing, and approved calibration"],
          ["Steering", "Width, offset, scrub radius, construction, and weight can increase effort or kickback", "Tie rods, bearings, alignment, pressure, steering lock, and clearance"],
          ["Fuel economy", "Rolling resistance, mass, tread, pressure, and aerodynamics can increase consumption", "Actual route, speed, load, climate, and tire construction"],
          ["Towing and payload", "Heavier tires add unsprung mass and can change braking, response, and stability", "Truck labels, tire capacity, pressure, trailer, tongue weight, and axle load"],
          ["Speedometer", "Rolling circumference can alter indicated speed and distance", "Measured circumference and approved recalibration procedures"]
        ]
      },
      {
        type: "systems",
        id: "spare",
        title: "The under-bed spare is a separate fitment problem",
        items: [
          ["Storage space", "Check the actual inflated spare against hoist, frame, hitch, exhaust, heat shields, axle path, bed, and departure clearance."],
          ["Matching wheel", "Confirm wheel width, offset, lug hardware, brake clearance, load rating, TPMS needs, and compatibility with the intended axle."],
          ["Loaded access", "Make sure racks, tents, hitch accessories, cargo, or trailers do not prevent safe spare and jack access."],
          ["Temporary mismatch", "Understand drivetrain and differential limitations before using a different-size spare; follow Nissan and tire manufacturer guidance."],
          ["Repair plan", "Carry suitable inflation, repair, lifting, wheel-torque, and recovery equipment for the loaded truck and route."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Frontier tire-fitment questions",
        items: [
          {
            question: "Is there one largest tire for all 2022-present Frontier configurations?",
            answer:
              "No. Trim, drivetrain, cab, bed, suspension, wheel width, offset, measured tire, alignment, steering, compression, load, and prior modifications matter."
          },
          {
            question: "Does a PRO-4X factory tire prove fitment on PRO-X?",
            answer:
              "No. PRO-4X and PRO-X differ in drivetrain and factory equipment. Verify wheel position, suspension, body clearance, steering, compression, and measured tire."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.lift, related.overland],
    safety,
    sources: sharedSources
  },
  {
    key: "nissan-frontier-lift-kit",
    kind: "article",
    route: "/vehicles/nissan-frontier/lift-kit",
    title: "Nissan Frontier Lift Kit Guide | RigAI",
    description:
      "Compare 2022-present Nissan Frontier leveling kits, coilovers, rear blocks, leaf systems, geometry, travel, load, towing, and PRO-4X compatibility.",
    socialTitle: "Nissan Frontier Lift Kit Guide | RigAI",
    socialDescription:
      "Plan Frontier lift height, IFS geometry, rear leaf packs, shocks, PRO-4X compatibility, ride, payload, towing, and installation.",
    eyebrow: "Nissan Frontier lift planning guide",
    h1: "Nissan Frontier Lift Kit Guide",
    dek:
      "Choose a system, not a height claim. Lift method, factory suspension, geometry, travel, tires, permanent load, towing, and daily behavior must work together.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Lift kits"),
    takeaways: [
      "Top spacers, preload changes, replacement coilovers, and complete systems affect spring preload, droop, compression, damping, and geometry differently.",
      "Rear blocks, add-a-leaf systems, and replacement leaf packs solve different height, load, travel, and ride problems.",
      "PRO-4X and non-PRO-4X suspension parts need exact model-year, trim, cab, bed, drivetrain, and component compatibility.",
      "Lift height alone does not describe wheel travel, alignment, CV angle, steering load, ride quality, payload, or towing behavior."
    ],
    toc: [
      ["goal", "Define the goal"],
      ["front", "Front lift methods"],
      ["rear", "Rear lift methods"],
      ["geometry", "Geometry and travel"],
      ["pro4x", "PRO-4X compatibility"],
      ["installation", "Installation checks"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "goal",
        title: "Define the problem before choosing height",
        paragraphs: [
          "A useful lift plan begins with the exact tire goal, measured clearance limit, terrain, underbody contact, approach or departure need, permanent load, towing use, ride complaint, alignment data, and desired travel.",
          "A cosmetic level is not automatically a suspension improvement. It does not prove more travel, better damping, greater payload, or improved towing. Preserve braking, steering, stability, visibility, sensor behavior, and daily use."
        ],
        contextualLink: related.tires
      },
      {
        type: "comparison",
        id: "front",
        title: "Front lift methods",
        caption: "Nissan Frontier front lift methods",
        headers: ["Method", "What it changes", "What to verify"],
        rows: [
          ["Top spacer", "Assembly position and static ride height", "Droop, top-out, compression, coil clearance, alignment, CV and steering angles"],
          ["Preload spacer", "Spring preload and static position", "Ride, droop, coil behavior, damper stroke, spring seat, and application"],
          ["Replacement coilover", "Spring, damping, travel, and adjustable or fixed height depending on design", "Trim, drivetrain, load, mounting, stroke, alignment, and tire clearance"],
          ["Complete front system", "Coilovers plus supporting geometry or travel components", "Control arms, joints, tie rods, CVs, bump stops, lines, travel, and installation"]
        ]
      },
      {
        type: "comparison",
        id: "rear",
        title: "Rear lift and load-support methods",
        caption: "Nissan Frontier rear leaf-suspension choices",
        headers: ["Method", "Useful for", "Tradeoffs and checks"],
        rows: [
          ["Rear block", "Height change while retaining the existing leaf pack", "Axle leverage, wrap, U-bolts, shock travel, bump stops, brake lines, driveshaft, and load"],
          ["Add-a-leaf", "Additional spring support or height when matched to the actual pack and load", "Empty ride, pack compatibility, arch, clamp position, shock damping, and travel"],
          ["Replacement leaf pack", "A complete spring-rate, load, height, and travel strategy", "Permanent weight, empty ride, loaded ride, shackles, bump stops, shocks, and axle ratings"],
          ["Longer rear shock", "Travel and damping only when correctly matched to the complete system", "Extended and compressed length, mounts, bump stops, lines, damping, and spring retention"]
        ]
      },
      {
        type: "systems",
        id: "geometry",
        title: "Protect geometry and usable travel",
        items: [
          ["Droop", "Excessive front lift can use droop at static height, increase top-out, and reduce the wheel's ability to extend into a depression."],
          ["Compression", "Maintain bump-stop function and clearance for tires, coilovers, control arms, steering, CV shafts, lines, bodywork, frame, and rear axle."],
          ["Alignment", "Measure caster, camber, and toe. A green printout alone does not prove balanced caster, good steering return, or travel clearance."],
          ["CV and steering", "On 4x4 trucks check CV angles and boots; on every truck check tie rods, ball joints, steering effort, scrub radius, binding, and kickback."],
          ["Upper control arms", "Use them when the specific lift, alignment, joint angle, travel, tire clearance, or strength requirement justifies them, not by height label alone."],
          ["Rear driveline", "Check axle position, leaf and shackle behavior, pinion and driveshaft angles, shock travel, U-bolts, brake lines, and ABS wiring."]
        ]
      },
      {
        type: "systems",
        id: "pro4x",
        title: "Treat PRO-4X as a distinct application",
        items: [
          ["Factory damping", "Verify Bilstein damper part numbers, dimensions, mounts, stroke, calibration, and condition before replacement."],
          ["Ride height and travel", "Measure the actual truck rather than assuming a PRO-4X and non-PRO-4X share height, bump clearance, or alignment."],
          ["4x4 driveline", "Check front differential, CV joints, boots, transfer case, driveshafts, skid plates, and clearances through lift and travel."],
          ["Electronic locking differential", "Rear lift does not change its operating instructions or legal and surface limitations; verify wiring and axle compatibility."],
          ["Interchange assumptions", "S, SV, PRO-X, and PRO-4X parts are not interchangeable by default even when model year and cab overlap."]
        ]
      },
      {
        type: "checklist",
        id: "installation",
        title: "Lift installation and verification",
        items: [
          "Confirm year, trim, cab, bed, drivetrain, factory suspension, wheels, tires, payload label, towing use, and exact part application.",
          "Measure baseline ride heights, alignment, representative axle weights, tire clearances, and suspension condition.",
          "Check control arms, joints, tie rods, CVs, driveshaft, leaf packs, shackles, U-bolts, shocks, bump stops, brake and ABS lines, and exhaust through travel.",
          "Align caster, camber, and toe, then check steering return, braking, stability, vibration, and driver-assistance behavior.",
          "Test tire clearance through steering and compression with representative load and recheck fasteners after initial use."
        ],
        note:
          "A lift does not change payload or towing ratings. Continue to use the truck's labels and Nissan model-year guidance."
      },
      {
        type: "faq",
        id: "questions",
        title: "Frontier lift questions",
        items: [
          {
            question: "What lift height works for every third-generation Frontier?",
            answer:
              "There is no universal height. Trim, drivetrain, factory suspension, geometry, tire goal, load, towing, ride, alignment, travel, and legal requirements differ."
          },
          {
            question: "Does a spacer lift add wheel travel?",
            answer:
              "Not automatically. It can change static position while leaving spring rate and damping unchanged and may reduce usable droop."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.overland],
    safety,
    sources: sharedSources
  },
  {
    key: "nissan-frontier-overland-build",
    kind: "article",
    route: "/vehicles/nissan-frontier/overland-build",
    title: "Nissan Frontier Overland Build Guide | RigAI",
    description:
      "Plan a 2022-present Nissan Frontier overland build around payload, towing, bed systems, tires, recovery, power, rear leaf springs, and daily use.",
    socialTitle: "Nissan Frontier Overland Build Guide | RigAI",
    socialDescription:
      "A staged midsize Frontier plan for payload, bed equipment, shelter, recovery, electrical power, suspension, towing, and trip reliability.",
    eyebrow: "Nissan Frontier overland planning guide",
    h1: "Nissan Frontier Overland Build Guide",
    dek:
      "Use the truck's bed without spending its payload twice. Plan people, shelter, recovery, water, power, towing, and permanent weight before selecting leaf springs.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "Start with trip type, duration, people, route, climate, cab, bed, trailer use, and payload available on the individual truck.",
      "Bumpers, winch, skid plates, rack, tent, drawers, refrigerator, battery, water, fuel, recovery gear, people, and tongue weight accumulate quickly.",
      "Weigh permanent equipment before selecting rear leaf packs or damping; a level stance cannot prove remaining payload or axle capacity.",
      "King Cab, Crew Cab, long-bed, 4x2, 4x4, and PRO-4X configurations can have different payload, towing, wheelbase, and equipment."
    ],
    toc: [
      ["mission", "Define the trip"],
      ["payload", "Payload planning"],
      ["bed", "Bed and shelter systems"],
      ["systems", "Recovery, power, and protection"],
      ["stages", "Staged build"],
      ["verification", "Loaded verification"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "scenarios",
        id: "mission",
        title: "Define the travel mission",
        items: [
          {
            title: "Weekend base camp",
            priority: "Simple shelter, food, water, secure removable storage, recovery, lighting, and quick bed access.",
            wait: "Permanent drawers, large battery bank, steel rack, or complex tent system when removable equipment works.",
            data: "People, route, nights, climate, cab, bed, daily use, payload, and storage security."
          },
          {
            title: "Remote access",
            priority: "Reliable tires, spare, communications, recovery, weather protection, low cargo placement, range, and route planning.",
            wait: "Heavy permanent equipment that reduces payload and departure clearance without a regular need.",
            data: "4x2 or 4x4, PRO-4X equipment, season, distance, people, bed, road condition, and emergency plan."
          },
          {
            title: "Long-distance travel",
            priority: "Reliability, tires, braking, highway comfort, low weight, organized storage, water, power, and service access.",
            wait: "Aggressive lift, wheel offset, tire weight, and armor without a route need.",
            data: "Distance, roads, fuel access, service, people, payload, weather, bed configuration, and towing."
          },
          {
            title: "Trailer-supported travel",
            priority: "Trailer rating, hitch, tongue weight, payload, axle load, braking, cooling, tires, clearance, and recovery.",
            wait: "Truck accessories that consume payload needed for tongue weight and passengers.",
            data: "Loaded trailer, tongue weight, frontal area, drivetrain, equipment, people, cargo, and scale readings."
          }
        ]
      },
      {
        type: "prose",
        id: "payload",
        title: "Build a payload budget before a parts list",
        paragraphs: [
          "Start with the tire and loading label on the individual truck. Subtract people, permanent accessories, removable cargo, water, fuel carried as cargo, recovery equipment, and trailer tongue weight. Compare loaded axle weights with GAWR and total weight with GVWR.",
          "A steel bumper, winch, skid plates, bed rack, rooftop or bed-mounted tent, drawers, refrigerator, auxiliary battery, water, fuel, spare, tools, recovery gear, passengers, and trailer tongue weight can consume capacity quickly. Suspension changes do not restore payload."
        ],
        contextualLink: related.suspension
      },
      {
        type: "systems",
        id: "bed",
        title: "Choose a bed and shelter system by use and weight",
        items: [
          ["Open bed and removable bins", "Light and flexible for work use. Secure cargo, protect it from weather, preserve tie-downs, and control movement."],
          ["Bed rack and rooftop tent", "Confirm rack and bed ratings, mounting, static and dynamic load, tent mass, height, wind, center of gravity, access, and departure angle."],
          ["Bed cap", "Include cap mass, roof rating, rack, ventilation, visibility, dust control, bed access, and rear axle load."],
          ["Bed-mounted tent", "Check bed length, mounting, occupants, ladder, cargo access, wind, parking, load rating, and remaining storage."],
          ["Drawers and refrigerator", "Compare organization value with permanent mass, raised load floor, cooling airflow, power demand, and removable alternatives."],
          ["Water and fuel", "Carry only the route margin needed in approved, secured containers placed low and included in total and axle weights."],
          ["Emergency access", "Do not bury the spare, jack, recovery gear, extinguisher, first aid, tools, or electrical shutoff."]
        ]
      },
      {
        type: "systems",
        id: "systems",
        title: "Plan supporting systems together",
        items: [
          ["Recovery", "Rated recovery provisions, equipment sized for a loaded midsize truck, safe training, communications, traction aids, and a route-specific plan."],
          ["Armor and bumpers", "Protect only exposed areas justified by the route. Track axle load, cooling airflow, sensors, service access, and departure clearance."],
          ["Winch", "Confirm bumper and frame compatibility, line pull, electrical demand, airflow, controls, recovery points, front spring effect, and training."],
          ["Electrical", "Size refrigerator, lighting, communications, battery, solar, wiring, fusing, ventilation, and backup around measured energy use."],
          ["Tires and spare", "Choose load-appropriate construction and pressure, then verify fitment, braking, towing, repair equipment, and secure spare storage."],
          ["Suspension", "Select rear leaf packs and damping after permanent weight and representative axle loads are known; preserve acceptable empty behavior."],
          ["Weight distribution", "Keep dense equipment low and secure, avoid unnecessary roof load, preserve bed access, and control front-to-rear balance."]
        ]
      },
      {
        type: "sequence",
        id: "stages",
        title: "A staged Frontier overland build",
        intro:
          "Use and weigh each stage before adding the next group of permanent equipment.",
        items: [
          ["Stage 1: reliability and essentials", "Complete maintenance and inspection, then address tires, pressure and repair tools, rated recovery, communications, spare, and essential protection."],
          ["Stage 2: lightweight travel system", "Add removable storage, simple shelter, food and water, basic power, cargo restraint, lighting, and the minimum bed system required."],
          ["Stage 3: measure and tune", "Load the truck as traveled, measure axle weights, calculate remaining payload, test braking and handling, then tune rear leaf springs and damping if needed."],
          ["Stage 4: advanced equipment", "Add justified armor, electrical systems, larger spare support, winch, rack, auxiliary systems, or towing equipment only within verified limits."]
        ]
      },
      {
        type: "checklist",
        id: "verification",
        title: "Verify the completed travel load",
        items: [
          "Weigh front axle, rear axle, and total truck with people, fuel, water, food, recovery equipment, shelter, cargo, and trailer tongue weight as traveled.",
          "Compare scale results with payload, GVWR, front and rear GAWR, tire capacity, hitch rating, and model-year towing guidance.",
          "Secure cargo and confirm dense items are low and cannot strike occupants or move in the bed.",
          "Check tire pressure and temperature, braking, steering, lane changes, ride, bottoming, sway, visibility, lighting, and driver-assistance sensors.",
          "Verify spare, jack, recovery gear, ventilation, electrical protection, bed access, tie-downs, rack or tent mounts, and fastener torque.",
          "Repeat whenever a trailer, rack, battery, water system, bumper, winch, large spare, or major storage system changes."
        ],
        note:
          "A useful Frontier overland build preserves payload margin, braking, steering, bed access, serviceability, departure clearance, and comfortable daily behavior."
      },
      {
        type: "faq",
        id: "questions",
        title: "Frontier overland questions",
        items: [
          {
            question: "Should rear leaf springs be selected before choosing permanent equipment?",
            answer:
              "No. Choose the rack, tent, storage, power, water, recovery, and other permanent equipment, determine loaded weight and axle distribution, then select compatible support and damping."
          },
          {
            question: "Does a PRO-4X have the same payload as another Frontier?",
            answer:
              "Do not assume so. Use the tire and loading label on the individual truck and include every person, accessory, cargo item, and trailer tongue load."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.lift],
    safety,
    sources: sharedSources
  }
];
