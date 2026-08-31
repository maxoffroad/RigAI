const dates = {
  published: "2026-07-28T22:30:00+05:00",
  modified: "2026-08-31T12:00:00+05:00",
  reviewedLabel: "August 31, 2026"
};

const vehicle = {
  slug: "ford-f150",
  name: "Ford F-150 2021-Present",
  shortName: "F-150",
  guidesLabel: "Ford F-150",
  heroLabel: "F-150",
  ctaLabel: "Build My F-150 Setup",
  planInputs:
    "model year, cab, bed length, trim, engine, drivetrain, FX4, Tremor, Raptor or Raptor R configuration, axle ratio, factory suspension, wheels and tires, payload label, towing equipment, current modifications, permanent bed load, trailer tongue weight, driving profile, and trip load"
};

const scope = {
  title: "Vehicle scope: 2021-present US Ford F-150",
  text:
    "This guide covers US-market Ford F-150 pickups from model year 2021 to the present, with an off-road focus on regular 4x4 and FX4-equipped trucks, F-150 Tremor, F-150 Raptor, and F-150 Raptor R. Equipment varies by model year, trim, cab, bed length, engine, drivetrain, package, axle ratio, suspension, payload configuration, towing equipment, and prior modifications."
};

const safety = {
  title: "Safety, loading, towing, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, tire and loading label, Safety Compliance Certification Label, Ford towing guide, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify model year, trim, cab, bed length, engine, drivetrain, FX4, Tremor, Raptor or Raptor R configuration, axle ratio, suspension, wheels, measured tire dimensions, payload label, GVWR, GAWR, towing equipment, trailer requirements, permanent accessories, passengers, cargo, and tongue weight before purchasing, loading, towing, or installing parts."
  ]
};

const sources = {
  model: {
    label: "Ford F-150 models and specifications",
    href: "https://www.ford.com/trucks/f150/2025/",
    type: "Ford official US vehicle information"
  },
  technical: {
    label: "2024 Ford F-150 technical specifications",
    href: "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2024/f150/2024%20Ford%20F-150%20Tech%20Specs.pdf",
    type: "Ford official US technical information"
  },
  payload: {
    label: "Ford payload capacity guidance",
    href: "https://www.ford.com/support/how-tos/owner-resources/vehicle-specifications/what-is-the-payload-capacity/",
    type: "Ford official owner information"
  },
  towing: {
    label: "2025 Ford RV and Trailer Towing Guide",
    href: "https://www.ford.com/content/dam/brand_ford/en_us/brand/towing/pdf/2025-Ford-RV-and-Trailer-Towing-Guide-v5.pdf",
    type: "Ford official US towing information"
  },
  manuals: {
    label: "Ford owner manual access",
    href: "https://www.ford.com/support/how-tos/owner-resources/vehicle-documents/where-can-i-get-an-owners-manual/",
    type: "Ford official owner information"
  }
};

const breadcrumbs = (label) => [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  ...(label
    ? [
        { label: "Ford F-150", href: "/vehicles/ford-f150" },
        { label }
      ]
    : [{ label: "Ford F-150" }])
];

const related = {
  hub: {
    title: "Ford F-150 Guide",
    href: "/vehicles/ford-f150",
    text: "Start with the complete 2021-present F-150 off-road planning framework."
  },
  first: {
    title: "First Upgrades for a Ford F-150",
    href: "/vehicles/ford-f150/first-upgrades",
    text: "Prioritize inspection, tires, recovery, protection, bed utility, and only the changes the actual use requires."
  },
  suspension: {
    title: "Ford F-150 Suspension Guide",
    href: "/vehicles/ford-f150/suspension",
    text: "Separate regular and FX4 leaf-spring planning from Tremor and wide-track Raptor suspension decisions."
  },
  tires: {
    title: "Ford F-150 Tire Size and Fitment Guide",
    href: "/vehicles/ford-f150/tire-size",
    text: "Check configuration, measured dimensions, wheel position, steering, compression, load, gearing, and spare clearance."
  },
  lift: {
    title: "Ford F-150 Lift Kit Guide",
    href: "/vehicles/ford-f150/lift-kit",
    text: "Match leveling or lift parts to the exact suspension, geometry, load, tire goal, and daily or towing use."
  },
  overland: {
    title: "Ford F-150 Overland Build Guide",
    href: "/vehicles/ford-f150/overland-build",
    text: "Stage payload, bed systems, camper weight, recovery, power, suspension, and towing decisions."
  }
};

const configurationItems = [
  [
    "Regular 4x4 and FX4",
    "Confirm trim, cab, bed, engine, axle ratio, factory tire package, tow hooks, skid plates, electronic-locking differential availability, payload label, towing equipment, and actual FX4 content for the model year."
  ],
  [
    "F-150 Tremor",
    "Treat its factory ride height, 33-inch tire package, off-road damping, control hardware, protection, differential equipment, and drive features as a Tremor-specific starting system."
  ],
  [
    "F-150 Raptor",
    "Treat its wide track, unique body clearance, control arms, steering hardware, FOX Live Valve suspension, 35-inch standard tire configuration, optional packages, axle ratio, and high-speed tuning as one application."
  ],
  [
    "F-150 Raptor R",
    "Verify its engine, mass, 37-inch tire package, FOX Dual Live Valve equipment, driveline, cooling, suspension calibration, and model-year hardware rather than assuming ordinary Raptor parts or settings apply."
  ],
  [
    "Cab and bed",
    "Regular Cab, SuperCab, and SuperCrew availability, wheelbase, bed length, passenger load, departure clearance, rack span, storage position, and trailer use change the plan."
  ],
  [
    "Engine, axle, and towing package",
    "Engine, hybrid equipment where fitted, axle ratio, hitch, trailer package, cooling, GCWR, payload, and tongue weight must be confirmed for the individual truck."
  ],
  [
    "Weight and labels",
    "Use the truck's tire and loading label plus certification labels. Options and aftermarket equipment reduce the payload available for people, cargo, and trailer tongue weight."
  ]
];

const guideCards = [
  {
    eyebrow: "Published guide",
    title: "Best First Off-Road Upgrades for Ford F-150",
    text: "Choose a useful order for daily driving, trails, work, towing, hunting, or overland travel.",
    href: related.first.href
  },
  {
    eyebrow: "Published guide",
    title: "Ford F-150 Suspension Upgrade Guide",
    text: "Separate regular, FX4, Tremor, Raptor, and Raptor R suspension paths before selecting parts.",
    href: related.suspension.href
  },
  {
    eyebrow: "Published guide",
    title: "Ford F-150 Tire Size and Fitment Guide",
    text: "Evaluate factory configuration, wheel position, measured tire size, compression, gearing, braking, and spare storage.",
    href: related.tires.href
  },
  {
    eyebrow: "Published guide",
    title: "Ford F-150 Lift Kit Guide",
    text: "Choose leveling or lift systems by architecture, geometry, tire need, load, towing, and intended terrain.",
    href: related.lift.href
  },
  {
    eyebrow: "Published guide",
    title: "Ford F-150 Overland Build Guide",
    text: "Stage payload, bed storage, rack or camper systems, recovery, power, suspension, and towing decisions.",
    href: related.overland.href
  }
];

const commonFaq = [
  {
    question: "Does every off-road F-150 need a lift?",
    answer:
      "No. Inspection, suitable tires, pressure management, recovery, protection, careful route choice, and load planning may address the first limitation without added height."
  },
  {
    question: "Can Raptor fitment be copied to a regular or FX4 F-150?",
    answer:
      "No. Track width, bodywork, suspension, control arms, steering hardware, wheels, tires, ride height, and clearance differ. Verify parts and fitment for the exact configuration."
  },
  {
    question: "Can suspension parts increase the payload rating?",
    answer:
      "No. Springs or dampers may change support and control, but they do not replace the ratings on the truck's labels or the towing guide."
  }
];

export const fordF150Pages = [
  {
    key: "ford-f150",
    kind: "vehicleHub",
    route: "/vehicles/ford-f150",
    title: "Ford F-150 Suspension & Off-Road Setup Guide | RigAI",
    description:
      "Plan a 2021-present Ford F-150 off-road setup around suspension, lift, tires, FX4, Tremor, Raptor, payload, towing, and overland use.",
    socialTitle: "Ford F-150 Suspension & Off-Road Setup Guide | RigAI",
    socialDescription:
      "A modern F-150 planning hub for suspension, lift, tires, payload, towing, daily use, trails, and overland equipment.",
    eyebrow: "2021-present US Ford F-150 planning guide",
    h1: "Ford F-150 Suspension & Off-Road Setup Guide",
    dek:
      "Compare suspension, lift, tires, payload, towing, and trail priorities for your F-150 based on cab, bed, engine, FX4, Tremor, Raptor equipment, and daily use.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Confirm the exact US model year, cab, bed, engine, drivetrain, axle ratio, package, suspension, tire package, payload label, and towing equipment.",
      "Regular 4x4 or FX4, Tremor, Raptor, and Raptor R have different factory capability, geometry, track width, damping, tires, body clearance, payload, and towing limits.",
      "FOX dampers and 35- or 37-inch factory tire configurations belong to specific Raptor applications rather than every F-150.",
      "Permanent accessories, passengers, cargo, and trailer tongue weight all consume the truck-specific payload shown on its label."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["configurations", "Configuration differences"],
      ["use-cases", "Full-size truck use cases"],
      ["upgrade-goals", "Connected upgrade goals"],
      ["featured-guides", "F-150 guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should an F-150 plan begin with?",
        paragraphs: [
          "Begin with model year, trim, cab, bed length, wheelbase, engine, drivetrain, axle ratio, FX4, Tremor, Raptor or Raptor R equipment, factory suspension, wheel and tire package, protection, payload label, towing package, current accessories, normal cargo, passengers, trailer use, and actual operating weight.",
          "A full-size pickup offers useful space and capacity, but added width, wheelbase, rear overhang, bed load, and accessory mass affect trail access, breakover, departure clearance, steering, braking, and recovery. Build around the routes and loads the truck will actually carry."
        ]
      },
      {
        type: "systems",
        id: "configurations",
        title: "Configuration details that change the plan",
        intro:
          "A trim or package name is a starting point, not a universal specification. Verify the individual truck and its model-year documentation.",
        items: configurationItems
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Match the plan to how the F-150 is used",
        items: [
          {
            title: "Daily driver",
            priority: "Condition, tire pressure, braking, steering, visibility, ride, noise, weather use, parking, and useful bed security.",
            wait: "Heavy armor, large offset changes, or permanent bed equipment without a regular need.",
            data: "Cab, bed, passengers, commute, parking, tire package, normal cargo, drivetrain, payload, and highway behavior."
          },
          {
            title: "Mild trail and remote access",
            priority: "Suitable tires, airing equipment, rated recovery, tow-hook verification, essential protection, practical storage, and route clearance.",
            wait: "Lift when factory capability and careful line choice already match the route.",
            data: "FX4 or Tremor equipment, trail width, surface, recovery provisions, protection, tires, wheelbase, and load."
          },
          {
            title: "High-speed desert use",
            priority: "Raptor-specific inspection, tires, dampers, steering, cooling, skid protection, spare support, recovery, and controlled weight.",
            wait: "Replacing factory suspension merely because an aftermarket part is available.",
            data: "Raptor or Raptor R equipment, model year, tire package, suspension condition, accessory weight, terrain, and operating temperature."
          },
          {
            title: "Towing and work",
            priority: "Exact ratings, hitch and trailer compatibility, tongue weight, payload calculation, axle load, brakes, tires, cooling, and stable handling.",
            wait: "Suspension changes used to hide overload or exceed a published limit.",
            data: "Door labels, Ford towing guide, engine, cab, bed, axle, trailer, tongue weight, people, cargo, accessories, and scale data."
          },
          {
            title: "Overland travel",
            priority: "Payload, low and secure cargo, bed access, recovery, range, braking, reliability, and representative loaded handling.",
            wait: "Rack, tent, drawers, camper, armor, power, water, and fuel before a complete weight budget exists.",
            data: "Trip duration, people, shelter, water, fuel, spare, trailer use, bed length, payload label, and daily usability."
          }
        ]
      },
      {
        type: "systems",
        id: "upgrade-goals",
        title: "Plan F-150 goals as connected systems",
        items: [
          ["Tires and wheels", "Factory configuration, measured tire size, wheel width, offset, steering lock, compression, crash-bar or liner clearance where applicable, gearing, braking, towing, and spare storage."],
          ["Recovery and protection", "Rated recovery provisions, tow-hook configuration, safe equipment, skid plates, differential and transfer-case exposure, service access, wheelbase, and added weight."],
          ["Regular and FX4 suspension", "Front struts or coilovers, control arms, CV joints, steering, rear leaf packs, shocks, bump stops, empty ride, permanent load, payload, and towing."],
          ["Tremor suspension", "Factory ride height, off-road damping, Tremor-specific control hardware, rear leaf behavior, protection, tires, and exact part compatibility."],
          ["Raptor suspension", "Wide-track control arms and steering, FOX dampers, factory geometry, electronic integration, tire package, high-speed tuning, body clearance, and accessory weight."],
          ["Bed and cab systems", "Bed length, rack span, cap or camper fitment, tie-downs, weather protection, power, bed access, cargo restraint, passengers, and rear load distribution."],
          ["Payload and towing", "Truck-specific labels, GCWR, GAWR, hitch, trailer, tongue weight, people, cargo, brakes, tires, cooling, stability, and legal requirements."],
          ["Overland equipment", "Rack, tent, cap, camper, drawers, refrigerator, battery, Pro Power Onboard where equipped, solar, water, fuel, spare, recovery, center of gravity, and departure clearance."]
        ]
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Ford F-150 guides",
        published: guideCards
      },
      {
        type: "faq",
        id: "questions",
        title: "Ford F-150 planning questions",
        items: commonFaq
      }
    ],
    related: [related.first, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.payload, sources.towing, sources.manuals]
  },
  {
    key: "ford-f150-first-upgrades",
    kind: "article",
    route: "/vehicles/ford-f150/first-upgrades",
    title: "Best First Off-Road Upgrades for Ford F-150 | RigAI",
    description:
      "Prioritize 2021-present Ford F-150 inspection, tires, recovery, protection, bed utility, payload, towing, and suspension by actual use.",
    socialTitle: "Best First Off-Road Upgrades for Ford F-150 | RigAI",
    socialDescription:
      "A practical first-upgrade order for daily driving, trails, hunting, work, towing, overland travel, and Raptor desert use.",
    eyebrow: "Ford F-150 first-upgrade guide",
    h1: "Best First Off-Road Upgrades for Ford F-150",
    dek:
      "Begin with condition and a complete use-and-load plan. The right first purchase depends on cab, bed, engine, axle, FX4, Tremor or Raptor equipment, terrain, towing, and permanent accessory weight.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Inspect tires, brakes, steering, suspension, recovery points, skid plates, drivetrain protection, bed, hitch, spare, and previous modifications first.",
      "Regular 4x4 or FX4, Tremor, Raptor, and Raptor R have different starting equipment and should not share one automatic upgrade order.",
      "A Tremor or Raptor may gain more from recovery, protection, tire care, and load planning than immediate suspension replacement.",
      "Plan springs and dampers after bumper, winch, rack, cap, camper, tent, storage, and normal bed load are known."
    ],
    toc: [
      ["baseline", "Baseline inspection"],
      ["first-systems", "Useful first systems"],
      ["build-order", "Upgrade paths by use"],
      ["configuration-priorities", "Configuration priorities"],
      ["avoid", "What to avoid"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Inspect the truck before buying parts",
        paragraphs: [
          "Check tire pressure, age and wear, wheel damage, brakes, bearings, steering joints, tie rods, control arms, ball joints, CV boots, front struts or coilovers, rear leaf packs and shocks where fitted, Raptor-specific suspension hardware, bump stops, lines, leaks, tow hooks, recovery provisions, skid plates, transfer-case and differential exposure, bed mounts, tie-downs, hitch, spare, and previous modifications.",
          "Record the tire and loading label plus exact towing configuration. Estimate occupants, normal cargo, permanent accessories, trailer tongue weight, and where each load sits. A full-size truck can exceed payload or rear axle limits without an obvious stance change."
        ],
        contextualLink: related.suspension
      },
      {
        type: "sequence",
        id: "first-systems",
        title: "A useful first-upgrade sequence",
        intro:
          "The sequence protects capability and budget before height or appearance becomes the main decision.",
        items: [
          ["Condition and labels", "Resolve maintenance, tire, brake, steering, suspension, driveline, cooling, and safety issues. Record payload, axle, hitch, and towing information."],
          ["Tires and pressure tools", "Choose tires for real surfaces and loads, then add an accurate gauge, inflation equipment, repair supplies, and a serviceable spare."],
          ["Rated recovery", "Confirm factory tow-hook equipment and recovery procedures. Carry appropriately rated equipment and know how the large truck can be recovered safely."],
          ["Essential protection", "Inspect factory skid plates and protect exposed engine, transfer-case, fuel, or differential areas only where the routes justify it."],
          ["Secure bed storage", "Keep tools, recovery gear, hunting equipment, and travel cargo restrained, weather-protected, low, and accessible."],
          ["Suspension, level, or lift", "Change height or load support only after the tire, terrain, permanent weight, ride, alignment, and towing problem is clearly defined."]
        ]
      },
      {
        type: "scenarios",
        id: "build-order",
        title: "First upgrades by use",
        items: [
          {
            title: "Daily driver",
            priority: "Maintenance, all-weather tires, pressure, braking, lighting, bed security, and practical recovery basics.",
            wait: "Leveling for appearance, heavy bumpers, large wheels, or suspension stiffness without a measured need.",
            data: "Commute, passengers, parking, climate, normal bed load, tire noise, payload, and towing frequency."
          },
          {
            title: "Mild trail use",
            priority: "All-terrain tires, airing equipment, rated recovery, tow-hook confirmation, targeted skid protection, and clearance awareness.",
            wait: "A large lift or aggressive offset before evaluating stock travel and full-compression clearance.",
            data: "FX4 or Tremor content, surface, trail width, wheelbase, recovery route, tires, underbody exposure, and load."
          },
          {
            title: "Hunting and remote access",
            priority: "Reliable tires, spare, recovery, communications, weather-protected storage, low cargo placement, range, and route planning.",
            wait: "Permanent rack and camper weight when seasonal removable storage can meet the need.",
            data: "Season, distance, passengers, equipment, bed length, access roads, payload, and emergency plan."
          },
          {
            title: "Towing and work",
            priority: "Truck and trailer ratings, hitch, tongue weight, tires, brakes, load distribution, cooling, mirrors, and stable loaded behavior.",
            wait: "Lift, soft off-road tires, or rear changes that reduce towing stability or mask excess load.",
            data: "Engine, axle, cab, bed, package, trailer, tongue weight, payload label, passengers, cargo, and scale weights."
          },
          {
            title: "Overland travel",
            priority: "Payload budget, light storage, recovery, tires, spare, water, power, shelter, braking, and representative load testing.",
            wait: "Steel armor, rack, tent, drawers, refrigerator, batteries, fuel, and water all purchased before weight planning.",
            data: "Trip length, people, bed system, trailer use, expected roads, climate, payload, axle load, and center of gravity."
          },
          {
            title: "Raptor desert use",
            priority: "Factory-system inspection, correct tires and pressure, dampers, steering, skid protection, cooling, recovery, and weight control.",
            wait: "Replacing factory FOX hardware or adding mass without identifying a heat, control, durability, or load problem.",
            data: "Raptor or Raptor R model year, tire package, terrain, speed, temperature, suspension condition, load, and support plan."
          }
        ]
      },
      {
        type: "systems",
        id: "configuration-priorities",
        title: "Respect the factory starting point",
        items: [
          ["Regular 4x4", "Confirm tow hooks, differential equipment, tires, protection, recovery needs, payload, and towing package before adding FX4-like parts."],
          ["FX4", "Inventory the actual skid plates, differential, shocks, tires, and drive features. Replace only the element that limits the intended route."],
          ["Tremor", "Use its factory ride height, damping, tires, protection, and traction equipment before assuming a suspension replacement is the first improvement."],
          ["Raptor and Raptor R", "Preserve wide-track geometry, factory control systems, cooling, damping, and tire package unless a verified use case and compatible system justify change."],
          ["Accessory weight", "Bumper, winch, rack, cap, camper, tent, drawers, battery, water, fuel, tools, people, and tongue weight must be known before spring selection."],
          ["Leveling versus performance", "A level appearance does not prove more wheel travel, better damping, more payload, or improved towing stability."]
        ],
        contextualLink: related.overland
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "What to avoid buying first",
        items: [
          ["Excessive wheel offset", "Pushing the tire outward can increase scrub radius, steering load, bearing leverage, spray, body contact, and full-compression interference."],
          ["Unplanned permanent weight", "Armor, bumpers, racks, campers, storage, and power systems consume payload and can degrade ride, braking, handling, and departure clearance."],
          ["A suspension kit chosen by badge alone", "Regular, FX4, Tremor, Raptor, and Raptor R hardware and geometry require application-specific confirmation."],
          ["Leveling without a purpose", "Appearance may change while droop, CV angles, alignment range, ride, towing stance, and usable travel become worse."],
          ["Raptor parts as a shortcut", "Wide-track Raptor body, steering, control-arm, shock, and wheel systems are not a bolt-on fitment assumption for a regular truck."],
          ["Every accessory at once", "Stage changes, weigh the truck, drive it loaded, and solve the next documented limitation."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "First-upgrade questions",
        items: [
          {
            question: "Should suspension be the first F-150 upgrade?",
            answer:
              "Only when inspection, control, load support, tire clearance, or terrain shows a real suspension limitation. Tires, recovery, protection, storage, and weight planning often come first."
          },
          {
            question: "Does an FX4 need the same first upgrades as a Tremor?",
            answer:
              "No. Factory ride height, shocks, tires, protection, differential equipment, and drive features differ. Inventory the exact truck first."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.payload, sources.towing, sources.manuals]
  },
  {
    key: "ford-f150-suspension",
    kind: "article",
    route: "/vehicles/ford-f150/suspension",
    title: "Ford F-150 Suspension Upgrade Guide | RigAI",
    description:
      "Compare 2021-present Ford F-150, FX4, Tremor, Raptor, and Raptor R suspension, geometry, load support, towing, and upgrade choices.",
    socialTitle: "Ford F-150 Suspension Upgrade Guide | RigAI",
    socialDescription:
      "Plan F-150 shocks, coilovers, control arms, leaf springs, geometry, payload, and towing around the exact factory configuration.",
    eyebrow: "Ford F-150 suspension guide",
    h1: "Ford F-150 Suspension Upgrade Guide",
    dek:
      "Choose suspension for the exact architecture, weight, terrain, and job. Regular and FX4 leaf-spring trucks, Tremor, Raptor, and Raptor R do not share one universal parts plan.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "Regular 4x4 and FX4 trucks use independent front suspension with front strut or coilover assemblies and a solid rear axle on leaf springs.",
      "Tremor has a factory off-road suspension and ride-height package that requires Tremor-specific compatibility checks.",
      "Raptor and Raptor R use wide-track, Raptor-specific control, steering, spring, and FOX damper systems designed around factory geometry.",
      "Springs and damping must match empty ride, permanent bed load, passengers, payload, trailer tongue weight, terrain, and desired control."
    ],
    toc: [
      ["architecture", "Suspension architectures"],
      ["geometry", "IFS geometry and alignment"],
      ["load", "Rear load and towing"],
      ["damping", "Shocks, springs, and travel"],
      ["selection", "Selection framework"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "systems",
        id: "architecture",
        title: "Separate the suspension architectures",
        intro:
          "Identify the exact factory system before shopping. A shared vehicle name does not make shocks, control arms, steering, springs, or geometry interchangeable.",
        items: [
          ["Regular 4x4 and FX4 front", "Independent front suspension uses control arms, steering knuckles, tie rods, CV shafts on driven wheels, coil springs with strut or coilover assemblies, bump stops, and alignment adjustment."],
          ["Regular 4x4 and FX4 rear", "A solid rear axle, leaf springs, rear shocks, axle and spring mounts, bump stops, and brake-line routing support the bed and towing role. Spring specification varies with configuration."],
          ["Tremor", "Its factory ride height, off-road-tuned front and rear damping, control hardware where specified, leaf-spring rear behavior, tires, and package calibration require Tremor-specific parts confirmation."],
          ["Raptor", "Wide-track control arms, steering hardware, springs, FOX Live Valve dampers, body clearance, 35-inch tire package, and long-travel calibration form a Raptor-specific system."],
          ["Raptor R", "Engine mass, 37-inch tire package, FOX Dual Live Valve equipment, model-year tuning, driveline, and thermal demands require an exact Raptor R application."],
          ["Hybrid and equipment variation", "Engine, battery and power equipment, cab, bed, axle, option content, payload package, bumper, winch, rack, cap, and camper weight can change front and rear requirements."]
        ]
      },
      {
        type: "prose",
        id: "geometry",
        title: "IFS lift changes geometry, not just height",
        paragraphs: [
          "Raising the front changes control-arm position, CV-joint angles, tie-rod angle, caster, camber, toe, droop, compression, bump-stop relationship, and the position where the tire moves through steering and suspension travel. More static height does not guarantee more usable travel.",
          "An alignment sheet at curb height is only one check. Verify steering lock, droop, compression, brake and ABS line slack, CV behavior, tie-rod clearance, tire contact, and loaded ride height. Upper control arms can help a specific geometry or travel problem but are not automatically required for every mild change."
        ],
        contextualLink: related.lift
      },
      {
        type: "systems",
        id: "load",
        title: "Rear suspension must match the real load",
        items: [
          ["Empty daily use", "A heavy-rate leaf pack selected for a future camper can ride harshly, reduce compliance, and make an unloaded rear axle less settled on rough surfaces."],
          ["Permanent bed equipment", "Cap, rack, drawers, tools, spare, batteries, camper, and recovery gear should be weighed and located before selecting spring rate or ride height."],
          ["Variable trip cargo", "Choose a system that remains controlled empty and loaded rather than tuning only for the maximum occasional trip."],
          ["Towing", "Tongue weight acts within payload and loads the rear axle. Spring support does not increase GVWR, GAWR, GCWR, hitch rating, or the truck's certified payload."],
          ["Bumpers and winches", "Front mass can alter ride height, available compression, damping demand, steering feel, and braking. Rear mass affects spring deflection and departure clearance."],
          ["Scale verification", "Use representative axle weights and compare them with the truck's labels. Appearance is not a reliable overload measurement."]
        ],
        contextualLink: related.overland
      },
      {
        type: "comparison",
        id: "damping",
        title: "Match the component to the problem",
        caption: "F-150 suspension decision examples",
        headers: ["Observed need", "Useful direction", "Confirm before purchase"],
        rows: [
          ["Poor control on repeated rough roads", "Appropriate-quality dampers with heat capacity and calibration for the truck's spring and load", "Configuration, travel, mounting, electronic integration, tire mass, terrain, speed, and service needs"],
          ["Front sag from permanent equipment", "Matched front spring or coilover system designed for measured added weight", "Actual axle weight, available compression, alignment, CV and steering geometry"],
          ["Rear sag from permanent bed load", "Application-specific leaf pack or support strategy with matching rear damping", "Payload, rear GAWR, empty ride, permanent versus temporary weight, towing"],
          ["Occasional heavy load", "Load management that preserves acceptable empty behavior", "Frequency, legal ratings, distribution, tire capacity, pressure, and loaded testing"],
          ["Tire contact at full compression", "Fitment and travel correction based on the contact point", "Wheel offset, measured tire, steering lock, compression path, body and liner clearance"],
          ["Raptor damper concern", "Inspect, diagnose, service, or replace with a verified Raptor-specific system", "Model year, damper type, electronics, calibration, travel, control arms, and intended speed"]
        ]
      },
      {
        type: "checklist",
        id: "selection",
        title: "Suspension selection checklist",
        items: [
          "Record model year, cab, bed, engine, drivetrain, axle, package, factory suspension, wheel and tire package, and current ride height.",
          "Measure front and rear axle weight empty, at normal daily load, and at representative trip or towing load where practical.",
          "Separate permanent equipment from passengers, removable cargo, and trailer tongue weight.",
          "Define whether the problem is ride, damping, heat, bottoming, sag, alignment, travel, clearance, towing stability, or appearance.",
          "Verify shock length, mounts, spring specification, bump-stop relationship, brake and ABS lines, steering, CV angles, and alignment range.",
          "For Tremor, Raptor, or Raptor R, require explicit application and electronic compatibility rather than a regular-F-150 assumption.",
          "Inspect fastener torque, alignment, line clearance, loaded stance, steering, braking, and tire contact after installation."
        ],
        note:
          "Longer shocks alone are not a complete suspension system. Their travel must remain compatible with springs, control arms, joints, bump stops, lines, driveshafts, and tire clearance."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common suspension mistakes",
        items: [
          ["Selecting by advertised lift height", "Height does not describe spring rate, damping, droop, compression, alignment, durability, empty ride, or loaded control."],
          ["Assuming upper control arms are universal", "A control-arm change should solve a verified alignment, travel, joint-angle, or clearance requirement for the exact system."],
          ["Using rear springs to excuse overload", "A level stance does not change certified payload, axle, tire, hitch, or towing limits."],
          ["Replacing factory Raptor dampers automatically", "Different hardware is not necessarily better than a healthy system engineered for the truck's geometry and intended high-speed behavior."],
          ["Ignoring empty ride", "A truck tuned only for its heaviest trip can be harsh and less composed during most daily driving."],
          ["Mixing regular, Tremor, and Raptor parts", "Mounting, dimensions, travel, control arms, steering, electronics, track width, and tuning can differ."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "F-150 suspension questions",
        items: [
          {
            question: "Do longer shocks create more safe travel?",
            answer:
              "Not by themselves. Springs, control arms, joints, CV shafts, tie rods, bump stops, brake lines, mounts, and tire clearance must support the travel."
          },
          {
            question: "Should a Tremor receive regular F-150 suspension parts?",
            answer:
              "Only when the manufacturer explicitly lists the exact Tremor application and the dimensions, geometry, travel, load, and electronic requirements have been verified."
          },
          {
            question: "Is replacing Raptor FOX dampers always an upgrade?",
            answer:
              "No. Diagnose condition and define the heat, control, travel, service, or load problem first. Preserve application-specific geometry and electronic behavior."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.first, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.payload, sources.towing, sources.manuals]
  },
  {
    key: "ford-f150-tire-size",
    kind: "article",
    route: "/vehicles/ford-f150/tire-size",
    title: "Ford F-150 Tire Size and Fitment Guide | RigAI",
    description:
      "Plan 2021-present Ford F-150 tire fitment using trim, package, wheel, offset, measured size, steering, compression, load, gearing, and spare clearance.",
    socialTitle: "Ford F-150 Tire Size and Fitment Guide | RigAI",
    socialDescription:
      "A configuration-specific tire and wheel framework for regular F-150, FX4, Tremor, Raptor, and Raptor R.",
    eyebrow: "Ford F-150 tire fitment guide",
    h1: "Ford F-150 Tire Size and Fitment Guide",
    dek:
      "Treat tire fitment as a moving-system check. Factory Raptor or Tremor clearance does not transfer automatically to a regular F-150 with different track width, bodywork, wheel position, and suspension.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size"),
    takeaways: [
      "Verify model year, trim, package, cab, bed, suspension, track width, factory tire, wheel width, offset, measured dimensions, alignment, and prior changes.",
      "Street-height clearance does not prove clearance at steering lock and full compression under load.",
      "Raptor 35- or 37-inch configurations and Tremor 33-inch factory fitment do not guarantee equivalent fitment on a regular or FX4 truck.",
      "Larger and heavier tires change braking, acceleration, gearing feel, steering load, fuel use, towing behavior, payload feel, and spare storage."
    ],
    toc: [
      ["baseline", "Configuration baseline"],
      ["clearance", "Dynamic clearance"],
      ["wheels", "Wheel position"],
      ["systems", "Vehicle-system effects"],
      ["process", "Fitment process"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "systems",
        id: "baseline",
        title: "Start with the factory configuration",
        items: [
          ["Regular 4x4 and FX4", "Record original tire, wheel diameter and width, offset, suspension, ride height, crash-bar or clearance components where applicable, liners, bumper, spare, and axle ratio."],
          ["Tremor", "Verify its model-year 33-inch tire package, wheel, offset, ride height, control hardware, fender and liner clearance, spare location, and any changes."],
          ["Raptor", "Treat the wide track, bodywork, control arms, steering, suspension travel, wheel position, 35-inch tire package, and optional equipment as Raptor-specific."],
          ["Raptor R", "Treat the 37-inch tire package, body clearance, wheel, suspension, gearing, driveline, spare, braking, and calibration as an exact Raptor R application."],
          ["Cab, bed, and load", "Wheelbase and bed do not alone determine front fitment, but configuration, payload, towing, load distribution, and rear compression affect operating clearance and behavior."],
          ["Actual tire", "Nominal sidewall size is not a measured diameter or section width. Compare manufacturer dimensions, approved wheel range, load index, and the mounted tire."]
        ]
      },
      {
        type: "prose",
        id: "clearance",
        title: "Clearance must be checked through motion",
        paragraphs: [
          "Check straight ahead, both steering locks, reverse steering, droop, full compression, body roll, braking dive, rear articulation, and representative payload. Inspect control arms, tie rods, crash bars or clearance structures where fitted, frame, inner fender, liner, bumper, valance, flare, brake hoses, wiring, and the opposite side after alignment.",
          "A tire can clear in a parking lot and contact under trail compression, turning on a slope, braking, or carrying cargo. A suspension lift may move the static tire position without creating enough clearance at every point in the travel path."
        ]
      },
      {
        type: "systems",
        id: "wheels",
        title: "Wheel width and offset can change the result",
        items: [
          ["More outward position", "May improve one inner clearance while increasing scrub radius, bearing leverage, steering effort, spray, flare exposure, and contact at the bumper or outer body."],
          ["More inward position", "May protect the tire under the body but reduce control-arm, tie-rod, shock, frame, or inner-liner clearance."],
          ["Wheel width", "Changes mounted section width and sidewall shape. Keep the tire within its approved wheel-width range."],
          ["Backspacing", "Use it with wheel width and offset rather than as an isolated fitment number."],
          ["Beadlock-capable versus beadlock use", "Appearance or capability labels do not replace wheel manufacturer instructions, legal requirements, torque checks, and intended-use limitations."],
          ["Spare compatibility", "Confirm under-bed space, heat and exhaust clearance, carrier capacity, departure clearance, access, and whether a matching wheel is needed."]
        ],
        contextualLink: related.lift
      },
      {
        type: "comparison",
        id: "systems",
        title: "What a larger tire changes",
        caption: "F-150 tire-system effects",
        headers: ["System", "Possible effect", "What to verify"],
        rows: [
          ["Braking", "Greater rotating mass and leverage can increase effort and stopping distance", "Actual tire weight, brake condition, load, trailer use, heat, and stopping behavior"],
          ["Acceleration and gearing", "Effective gearing becomes taller and response may soften", "Engine, axle ratio, transmission behavior, terrain, towing, and legal recalibration options"],
          ["Steering", "Width, mass, and offset can increase kickback and component load", "Scrub radius, tie rods, steering clearance, alignment, pressure, and wheel bearings"],
          ["Fuel economy", "Mass, rolling resistance, tread, pressure, and aerodynamics can increase consumption", "Real route, speed, load, climate, and tire construction"],
          ["Payload and towing feel", "Heavier tires add unsprung mass and can change braking, response, and stability", "Truck labels, tire load capacity, pressure, trailer, tongue weight, and axle load"],
          ["Speedometer and controls", "Rolling circumference can alter displayed speed and system assumptions", "Measured circumference and approved calibration procedures"],
          ["Spare system", "A larger tire may not fit the factory carrier or may reduce departure clearance", "Measured space, exhaust heat, carrier, cable, access, and secure retention"]
        ]
      },
      {
        type: "sequence",
        id: "process",
        title: "A cautious fitment process",
        items: [
          ["Identify the truck", "Record model year, trim, cab, bed, engine, drivetrain, FX4, Tremor, Raptor or Raptor R configuration, axle, suspension, and current modifications."],
          ["Record wheel data", "Confirm wheel diameter, width, offset, backspacing, load rating, fastener and hub compatibility."],
          ["Compare measured tire data", "Use actual diameter, section width, tread width, weight, load index, pressure requirements, and approved wheel range."],
          ["Map the clearance path", "Inspect steering lock, droop, compression, liner, body, bumper, frame, control arms, tie rods, hoses, and wiring."],
          ["Plan system effects", "Evaluate braking, gearing, acceleration, steering, payload, towing, fuel use, calibration, and spare storage."],
          ["Test under representative load", "Recheck pressure, torque, steering, braking, vibration, contact marks, and full travel after installation and alignment."]
        ]
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common tire-fitment mistakes",
        items: [
          ["Asking for one largest size", "Configuration, suspension, track width, bodywork, wheel position, tire construction, alignment, load, and tolerance make one universal answer unreliable."],
          ["Copying Raptor fitment", "Raptor body, track, control arms, steering, wheel position, travel, and factory clearance differ from regular and FX4 trucks."],
          ["Copying Tremor fitment", "Tremor ride height, wheels, tires, damping, and clearance details do not automatically transfer to FX4."],
          ["Checking only at ride height", "The first contact may occur at steering lock, reverse, compression, roll, braking dive, or with payload."],
          ["Ignoring tire weight", "Two nominally equal tires can differ substantially in construction and mass, affecting ride, heat, braking, steering, and damping."],
          ["Forgetting the spare", "A travel tire plan is incomplete if the replacement cannot be carried securely and accessed when the bed is loaded."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "F-150 tire questions",
        items: [
          {
            question: "What is the largest tire for every 2021-present F-150?",
            answer:
              "There is no responsible universal size. Verify the exact configuration, wheel, measured tire, steering, full compression, load, body clearance, gearing, braking, and spare system."
          },
          {
            question: "Does unchanged tire diameter mean offset cannot cause rubbing?",
            answer:
              "No. Moving the tire inward or outward changes its path relative to control arms, frame, liners, bumper, flare, and body during steering and travel."
          },
          {
            question: "Does Raptor factory fitment prove the same tire fits an FX4?",
            answer:
              "No. Raptor track width, suspension, wheels, bodywork, steering, and travel are application-specific."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.payload, sources.towing, sources.manuals]
  },
  {
    key: "ford-f150-lift-kit",
    kind: "article",
    route: "/vehicles/ford-f150/lift-kit",
    title: "Ford F-150 Lift Kit Guide | RigAI",
    description:
      "Compare 2021-present Ford F-150 leveling and lift systems by FX4, Tremor or Raptor configuration, geometry, tires, payload, towing, and use.",
    socialTitle: "Ford F-150 Lift Kit Guide | RigAI",
    socialDescription:
      "Plan F-150 leveling, coilovers, control arms, rear springs, geometry, tire clearance, ride, payload, and towing.",
    eyebrow: "Ford F-150 lift and leveling guide",
    h1: "Ford F-150 Lift Kit Guide",
    dek:
      "Choose height only after defining the tire, terrain, load, stance, and travel goal. Regular, FX4, Tremor, Raptor, and Raptor R systems require separate compatibility decisions.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Lift kit"),
    takeaways: [
      "Lift height alone does not describe travel, spring rate, damping, geometry, alignment, durability, ride, towing behavior, or tire clearance.",
      "Top spacers, preload changes, replacement coilovers, complete systems, rear blocks, add-a-leaf parts, and leaf packs solve different problems.",
      "Excessive front lift can reduce droop and increase CV, tie-rod, ball-joint, and alignment demands.",
      "Tremor, Raptor, and Raptor R require explicit applications; regular F-150 lift guidance does not transfer automatically."
    ],
    toc: [
      ["options", "Lift and leveling options"],
      ["geometry", "Geometry and travel"],
      ["intent", "Choose by intent"],
      ["rear", "Rear height and load"],
      ["configuration", "Tremor and Raptor"],
      ["installation", "Installation checks"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "systems",
        id: "options",
        title: "Understand what each system changes",
        items: [
          ["Top spacer", "Changes assembly position and ride height but does not automatically improve spring rate, damping, or usable travel. Verify droop, upper-arm, ball-joint, CV, and shock limits."],
          ["Preload spacer", "Changes spring preload and static position. Ride, available extension, compression, top-out behavior, and application limits require confirmation."],
          ["Replacement coilover or strut", "Can coordinate spring, damping, body length, travel, and height when designed for the exact axle load and suspension."],
          ["Complete front system", "May include matched coilovers, control arms, knuckles or crossmembers, differential location, steering provisions, bump stops, and application-specific geometry."],
          ["Rear block", "Changes rear ride height without adding spring capacity. Verify axle wrap, U-bolts, shock travel, brake lines, driveshaft, towing stance, and manufacturer limits."],
          ["Add-a-leaf or replacement pack", "Changes spring support and often ride. Match permanent load, empty behavior, height, travel, shock damping, and legal ratings."],
          ["Rear shocks and bump stops", "Must remain compatible with spring travel, axle movement, brake lines, bed load, towing, compression, and extension."]
        ]
      },
      {
        type: "prose",
        id: "geometry",
        title: "Front lift changes an IFS operating range",
        paragraphs: [
          "As front ride height rises, static control-arm, CV, tie-rod, and joint angles change. Caster, camber, toe, droop, compression, bump-stop engagement, shock extension, steering effort, and tire path can all change. A truck can look level while losing useful downward travel.",
          "Differential-drop products have application-specific effects and limitations; they do not reset every joint, steering, crossmember, ground-clearance, or driveline relationship. Verify what a complete system changes rather than relying on one advertised correction."
        ],
        contextualLink: related.suspension
      },
      {
        type: "scenarios",
        id: "intent",
        title: "Choose the system by intent",
        items: [
          {
            title: "Visual leveling",
            priority: "A modest, application-specific change with alignment, droop, CV, steering, ride, and towing stance checked.",
            wait: "Maximum front height or tire claims when appearance is the only requirement.",
            data: "Current rake, payload, trailer use, front accessories, suspension, wheel and tire package, and desired loaded stance."
          },
          {
            title: "Mild trail and daily use",
            priority: "Controlled damping, usable travel, alignment, suitable tires, underbody clearance, and daily ride.",
            wait: "Height that sacrifices droop, steering quality, braking, parking, or highway behavior.",
            data: "Surface, speed, obstacles, commute, passengers, payload, towing, and tire clearance."
          },
          {
            title: "Larger tire clearance",
            priority: "Measured fitment analysis plus only the height, wheel, body, liner, or travel changes the tire path requires.",
            wait: "Assuming advertised lift height guarantees lock-to-lock full-compression clearance.",
            data: "Measured tire, wheel width and offset, body clearance, steering, compression, alignment, track width, and load."
          },
          {
            title: "Heavy overland load",
            priority: "Weigh permanent equipment first, then match front and rear springs, damping, bump control, tires, and stance.",
            wait: "Front leveling before rear camper, rack, storage, water, fuel, and tongue weight are known.",
            data: "Axle weights, payload label, permanent versus trip load, center of gravity, empty ride, and route."
          },
          {
            title: "Towing and work",
            priority: "Preserve ratings, stable geometry, braking, tire capacity, rear support, loaded alignment, driveline behavior, and hitch setup.",
            wait: "A tall soft system or level-at-curb stance that creates poor loaded rake and control.",
            data: "Truck labels, engine, axle, trailer, tongue weight, hitch, passengers, cargo, and scale data."
          }
        ]
      },
      {
        type: "systems",
        id: "rear",
        title: "Rear lift and load support are different goals",
        items: [
          ["Static height", "Blocks or spring arch can raise the body, but the result must retain shock travel, line clearance, axle control, driveshaft compatibility, and stable handling."],
          ["Permanent load support", "A cap, camper, rack, drawers, batteries, tools, water, fuel, and spare may justify a load-matched leaf solution and damping after weight is measured."],
          ["Occasional payload", "Avoid making the empty truck harsh for a rare maximum load. Consider frequency, distribution, legal ratings, and representative testing."],
          ["Towing stance", "Tongue weight belongs in the payload calculation. A suspension aid may affect stance but does not increase truck, axle, tire, hitch, or trailer ratings."],
          ["Travel balance", "Rear spring and shock length, bump stop, brake lines, driveshaft, axle wrap, and tire compression clearance must work together."],
          ["Departure clearance", "A taller rear body does not move every low point, and under-bed spare, hitch, exhaust, bumper, and bed accessories still affect departure."]
        ],
        contextualLink: related.overland
      },
      {
        type: "systems",
        id: "configuration",
        title: "Treat Tremor and Raptor as separate applications",
        items: [
          ["Tremor", "Confirm factory ride height, damping, control arms or knuckles where applicable, leaf springs, shocks, tires, alignment, electronic features, and explicit Tremor fitment."],
          ["Raptor", "Wide-track geometry, control arms, steering, FOX Live Valve dampers, springs, bodywork, tire package, travel, and electronic behavior require a Raptor-specific system."],
          ["Raptor R", "Verify model-year Raptor R suspension, engine mass, FOX Dual Live Valve equipment, 37-inch package, steering, cooling, calibration, and part listing."],
          ["Spacer or perch changes", "Do not assume a common regular-truck adjustment is suitable for an adaptive or high-performance factory suspension."],
          ["Factory travel", "Changing static position can reduce droop, alter top-out and compression behavior, and move the operating point away from the factory calibration."],
          ["Interchange assumptions", "Regular, FX4, Tremor, Raptor, and Raptor R parts are not interchangeable by default even when the model name and model year overlap."]
        ]
      },
      {
        type: "checklist",
        id: "installation",
        title: "Lift installation and verification",
        items: [
          "Confirm exact application, included hardware, fastener procedures, torque, required tools, calibration, and post-install inspection.",
          "Measure ride height before and after at consistent points with representative load and tire pressure.",
          "Check control arms, ball joints, tie rods, CV shafts, driveshafts, brake and ABS lines, shocks, springs, bump stops, sway bars, differential, and exhaust through travel.",
          "Align caster, camber, and toe within the system's intended range, then record the results.",
          "Check tire clearance at both steering locks and through droop and compression with expected load.",
          "Test braking, steering return, vibration, ride, stability, towing stance, driver-assistance behavior, and fastener torque.",
          "Reinspect after initial use and after loaded trail or towing operation according to component instructions."
        ],
        note:
          "A lift does not change the truck's payload, axle, tire, hitch, or towing ratings. Keep the labels and model-year towing guidance as the operating boundaries."
      },
      {
        type: "faq",
        id: "questions",
        title: "F-150 lift questions",
        items: [
          {
            question: "What lift height works for every 2021-present F-150?",
            answer:
              "There is no universal height. Configuration, suspension, use, tire goal, load, towing, geometry, alignment, travel, and legal requirements differ."
          },
          {
            question: "Does a spacer lift improve suspension travel?",
            answer:
              "Not automatically. It may change static position while leaving damping and spring rate unchanged and reducing usable droop or creating other limits."
          },
          {
            question: "Can a regular F-150 kit be installed on a Raptor?",
            answer:
              "Do not assume so. Raptor track width, control arms, steering, shocks, springs, bodywork, travel, and electronics require explicit compatibility."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.payload, sources.towing, sources.manuals]
  },
  {
    key: "ford-f150-overland-build",
    kind: "article",
    route: "/vehicles/ford-f150/overland-build",
    title: "Ford F-150 Overland Build Guide | RigAI",
    description:
      "Plan a 2021-present Ford F-150 overland build around payload, towing, bed and camper systems, tires, recovery, power, suspension, and daily use.",
    socialTitle: "Ford F-150 Overland Build Guide | RigAI",
    socialDescription:
      "A staged full-size truck plan for payload, bed equipment, shelter, recovery, electrical power, suspension, and trip reliability.",
    eyebrow: "Ford F-150 overland planning guide",
    h1: "Ford F-150 Overland Build Guide",
    dek:
      "Use the truck's volume without spending its payload twice. Plan people, bed system, shelter, recovery, water, fuel, power, towing, and permanent weight before selecting springs.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "Start with trip type, duration, people, route, climate, cab, bed, trailer use, and the payload available on the individual truck.",
      "Bumpers, winch, skid plates, rack, camper, tent, drawers, refrigerator, battery, water, fuel, recovery gear, people, and tongue weight accumulate quickly.",
      "Weigh permanent equipment before selecting rear leaf springs or damping; appearance alone does not show remaining payload or axle capacity.",
      "Pro Power Onboard can be useful where equipped, but availability and output depend on the truck and do not remove battery, ventilation, load, or backup planning."
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
            priority: "Simple shelter, food, water, weather-protected storage, recovery, lighting, and quick bed access.",
            wait: "Permanent drawers, large battery bank, steel rack, or camper when removable equipment works.",
            data: "People, climate, route, nights, bed length, daily use, payload, and storage security."
          },
          {
            title: "Remote hunting and access",
            priority: "Range, communications, weather protection, recovery, spare, low secure storage, traction, and emergency margin.",
            wait: "Roof-high cargo or complex systems that reduce visibility, access, and usable payload.",
            data: "Season, distance, cargo, passengers, road width, trailer, recovery route, and load."
          },
          {
            title: "Long-distance travel",
            priority: "Reliability, tires, braking, comfortable highway behavior, low weight, organized storage, water, power, and service access.",
            wait: "Aggressive lift, offset, tire weight, and armor that degrade range or daily control without route need.",
            data: "Distance, road mix, fuel access, climate, service interval, passengers, payload, and towing."
          },
          {
            title: "Camper-based travel",
            priority: "Exact camper weight, center of gravity, tie-downs, bed compatibility, payload, rear axle load, tires, braking, springs, and damping.",
            wait: "Camper purchase based only on a brochure dry weight or generic F-150 capacity claim.",
            data: "Wet and loaded camper, options, people, cargo, cab, bed, truck labels, axle weights, and intended roads."
          },
          {
            title: "Trailer-supported travel",
            priority: "Trailer rating, hitch, tongue weight, payload, axle load, braking, cooling, tire capacity, route clearance, and recovery plan.",
            wait: "Truck accessories that consume the payload needed for tongue weight and passengers.",
            data: "Loaded trailer, tongue weight, frontal area, engine, axle, package, people, cargo, and scale readings."
          }
        ]
      },
      {
        type: "prose",
        id: "payload",
        title: "Build a payload budget before a parts list",
        paragraphs: [
          "Start with the tire and loading label on the individual truck. Subtract people, permanent accessories, removable cargo, water, fuel carried as cargo, recovery gear, pets, and trailer tongue weight. Compare loaded axle weights with front and rear GAWR and total weight with GVWR.",
          "A steel bumper, winch, skid plates, bed rack, cap or camper, rooftop or bed tent, drawers, refrigerator, auxiliary battery, water, fuel, spare, tools, recovery gear, passengers, and trailer tongue weight can consume capacity faster than the empty stance suggests. Suspension changes do not restore the payload printed on the label."
        ],
        contextualLink: related.suspension
      },
      {
        type: "systems",
        id: "bed",
        title: "Choose a bed and shelter system by use and weight",
        items: [
          ["Open bed with removable bins", "Light, flexible, and easy to remove for work use. Secure and weather-protect cargo, preserve tie-down access, and control movement."],
          ["Bed rack and tent", "Confirm rack rating, bed mounting, dynamic and static loads, tent mass, height, wind, center of gravity, bed access, and departure clearance."],
          ["Cap or topper", "Adds weather security and useful volume. Include cap mass, roof rating, rack, ventilation, visibility, dust control, and access in the plan."],
          ["Drawers and refrigerator", "Provide organization but add permanent mass and raise the load floor. Compare their value with removable storage and keep dense items low."],
          ["Slide-in camper", "Use actual wet, optioned, loaded weight and center-of-gravity information. Confirm bed fit, tie-down system, payload, axle loads, tires, suspension, braking, and handling."],
          ["Bed-mounted tent", "Check bed length, mounting, cargo access, occupants, ladder, wind, parking, load rating, and whether it displaces the storage the trip needs."],
          ["Spare and recovery access", "A loaded bed should not trap the spare, jack, tow equipment, extinguisher, first aid, or recovery gear needed urgently."]
        ]
      },
      {
        type: "systems",
        id: "systems",
        title: "Plan supporting systems together",
        items: [
          ["Recovery", "Rated recovery provisions, tow hooks, recovery gear, jack strategy, traction aids, communications, and a plan suitable for a large full-size truck."],
          ["Armor and bumpers", "Protect only exposed areas justified by the route. Track front and rear axle weight, cooling airflow, service access, sensors, crumple behavior, and departure clearance."],
          ["Winch", "Confirm bumper and frame compatibility, line pull, electrical demand, mounting, airflow, controls, recovery points, front spring effect, and safe training."],
          ["Electrical power", "Size refrigerator, lighting, communications, charging, battery, solar, wiring, fusing, ventilation, and backup around measured energy use."],
          ["Pro Power Onboard", "Where equipped, confirm model-year output, operating instructions, fuel or hybrid considerations, grounding, ventilation, weather protection, and a backup plan."],
          ["Water and fuel", "Carry only the route margin needed, use approved containers, secure them low, separate hazards, protect from heat, and include the weight."],
          ["Tires and spare", "Choose load-appropriate construction and pressure, then verify fitment, braking, gearing, towing behavior, repair equipment, and secure spare storage."],
          ["Suspension", "Select rear springs and damping after permanent weight and representative axle loads are known; retain acceptable empty and daily behavior."]
        ],
        contextualLink: related.tires
      },
      {
        type: "sequence",
        id: "stages",
        title: "A staged F-150 overland build",
        intro:
          "Each stage should be used and weighed before the next group of permanent parts is added.",
        items: [
          ["Stage 1: reliability and essentials", "Complete maintenance and inspection, then address tires, pressure and repair tools, rated recovery, communications, spare, and essential protection."],
          ["Stage 2: lightweight travel system", "Add removable storage, basic shelter, food and water, simple power, cargo restraint, lighting, and the minimum bed system required."],
          ["Stage 3: measure and tune", "Load the truck as traveled, measure axle weights, calculate remaining payload, test braking and handling, then tune rear springs and damping if needed."],
          ["Stage 4: advanced equipment", "Add justified armor, electrical systems, camper support, winch, rack, auxiliary systems, or towing equipment only within verified weight and compatibility limits."]
        ]
      },
      {
        type: "checklist",
        id: "verification",
        title: "Verify the completed travel load",
        items: [
          "Weigh front axle, rear axle, and total truck with people, fuel, water, food, recovery gear, shelter, cargo, and trailer tongue weight as traveled.",
          "Compare the scale result with payload, GVWR, front and rear GAWR, tire capacity, hitch rating, GCWR, and model-year towing guidance.",
          "Secure all cargo and confirm that dense items are low and cannot strike occupants or damage the bed.",
          "Check tire pressure and temperature, braking, steering, lane changes, ride, bottoming, sway, visibility, lighting, and driver-assistance sensors.",
          "Verify bed access, spare and jack access, recovery equipment, fire extinguisher, first aid, ventilation, electrical protection, and emergency shutdowns.",
          "Inspect suspension travel, bump clearance, brake and ABS lines, tire contact, hitch, tie-downs, rack or camper mounts, and fastener torque.",
          "Repeat the check whenever a camper, trailer, rack, battery, water system, bumper, winch, or major storage system changes."
        ],
        note:
          "The most capable travel build is often the one that preserves payload, braking, steering, service access, and a comfortable daily truck instead of filling every available mounting point."
      },
      {
        type: "faq",
        id: "questions",
        title: "F-150 overland questions",
        items: [
          {
            question: "Does every F-150 have Pro Power Onboard?",
            answer:
              "No. Availability and output vary by model year, engine, trim, and equipment. Verify the truck and follow Ford operating guidance."
          },
          {
            question: "Should rear springs be selected before choosing a camper?",
            answer:
              "No. Select the actual camper and permanent equipment, determine loaded weight and axle distribution, then choose compatible support and damping."
          },
          {
            question: "Can a level stance confirm the truck is within payload?",
            answer:
              "No. Use the truck's labels and representative scale weights. Springs can change stance without changing certified limits."
          },
          ...commonFaq
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.lift],
    safety,
    sources: [sources.model, sources.technical, sources.payload, sources.towing, sources.manuals]
  }
];
