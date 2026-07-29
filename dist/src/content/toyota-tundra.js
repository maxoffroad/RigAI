const dates = {
  published: "2026-07-29T12:00:00+05:00",
  modified: "2026-07-29T12:00:00+05:00",
  reviewedLabel: "July 29, 2026"
};

const vehicle = {
  slug: "toyota-tundra",
  name: "Toyota Tundra 2022-Present",
  shortName: "Tundra",
  guidesLabel: "Toyota Tundra",
  heroLabel: "Tundra",
  ctaLabel: "Build My Setup",
  planInputs:
    "model year, trim, cab, bed length, drivetrain, i-FORCE or i-FORCE MAX powertrain, TRD package, factory suspension, wheels and tires, payload label, towing equipment, permanent accessories, passengers, cargo, trailer tongue weight, terrain, and current modifications"
};

const scope = {
  title: "Vehicle scope: 2022-present US Toyota Tundra",
  text:
    "This guide covers third-generation US-market Toyota Tundra pickups from model year 2022 to the present. Equipment varies by year, grade, Double Cab or CrewMax configuration, bed length, drivetrain, i-FORCE or i-FORCE MAX powertrain, TRD package, factory suspension, wheels, towing equipment, payload configuration, and prior modifications. Trailhunter references apply only to the officially announced 2027 package, not earlier trucks."
};

const safety = {
  title: "Safety, loading, towing, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, tire and loading label, certification label, Toyota towing information, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify model year, grade, cab, bed length, drivetrain, powertrain, TRD package, factory suspension, wheels, measured tire dimensions, payload, GVWR, GAWR, towing equipment, trailer requirements, permanent accessories, passengers, cargo, and tongue weight before purchasing, loading, towing, or installing parts."
  ]
};

const sources = {
  model: {
    label: "2026 Toyota Tundra brochure",
    href: "https://engage.toyota.com/static/files/ebrochures/2026/2026_tundra_eBrochure.pdf",
    type: "Toyota official US vehicle information"
  },
  architecture: {
    label: "Toyota Tundra multi-link rear suspension introduction",
    href: "https://pressroom.toyota.com/motor-bella-executive-remarks/",
    type: "Toyota official engineering overview"
  },
  trim: {
    label: "2025 Toyota Tundra equipment overview",
    href: "https://pressroom.toyota.com/2025-toyota-tundra-adds-trd-rally-package-and-more/",
    type: "Toyota official US product information"
  },
  lift: {
    label: "Toyota Tundra TRD lift kit compatibility",
    href: "https://pressroom.toyota.com/toyota-tundra-reaches-new-heights-with-trd-3-inch-lift-kit/",
    type: "Toyota official accessory information"
  },
  trailhunter: {
    label: "2027 Toyota Tundra Trailhunter announcement",
    href: "https://pressroom.toyota.com/new-2027-toyota-tundra-brings-rugged-updated-styling-advanced-technology-and-new-trailhunter-package/",
    type: "Toyota official US product announcement"
  },
  manual: {
    label: "Toyota Tundra owner's manual",
    href: "https://assets.sia.toyota.com/publications/en/om-s/OM0C056U/pdf/OM0C056U.pdf",
    type: "Toyota official owner information"
  }
};

const breadcrumbs = (label) => [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  ...(label
    ? [
        { label: "Toyota Tundra", href: "/vehicles/toyota-tundra" },
        { label }
      ]
    : [{ label: "Toyota Tundra" }])
];

const related = {
  hub: {
    title: "Toyota Tundra Guides",
    href: "/vehicles/toyota-tundra",
    text: "Start with the complete 2022-present Tundra planning framework."
  },
  first: {
    title: "Best First Upgrades for Toyota Tundra",
    href: "/vehicles/toyota-tundra/first-upgrades",
    text: "Prioritize inspection, tires, recovery, protection, storage, and load planning."
  },
  suspension: {
    title: "Toyota Tundra Suspension Guide",
    href: "/vehicles/toyota-tundra/suspension",
    text: "Plan IFS, multi-link rear suspension, coils, damping, load, and towing as one system."
  },
  tires: {
    title: "Toyota Tundra Tire Size and Fitment Guide",
    href: "/vehicles/toyota-tundra/tire-size",
    text: "Verify measured dimensions, wheels, steering, compression, load, braking, and spare clearance."
  },
  lift: {
    title: "Toyota Tundra Lift Kit Guide",
    href: "/vehicles/toyota-tundra/lift-kit",
    text: "Compare leveling, coilovers, complete systems, geometry, travel, and factory-system compatibility."
  },
  overland: {
    title: "Toyota Tundra Overland Build Guide",
    href: "/vehicles/toyota-tundra/overland-build",
    text: "Stage payload, bed systems, recovery, power, suspension, and towing decisions."
  }
};

const guideCards = [
  {
    eyebrow: "Published guide",
    title: related.first.title,
    text: related.first.text,
    href: related.first.href
  },
  {
    eyebrow: "Published guide",
    title: related.suspension.title,
    text: related.suspension.text,
    href: related.suspension.href
  },
  {
    eyebrow: "Published guide",
    title: related.tires.title,
    text: related.tires.text,
    href: related.tires.href
  },
  {
    eyebrow: "Published guide",
    title: related.lift.title,
    text: related.lift.text,
    href: related.lift.href
  },
  {
    eyebrow: "Published guide",
    title: related.overland.title,
    text: related.overland.text,
    href: related.overland.href
  }
];

const commonFaq = [
  {
    question: "Does one upgrade plan fit every 2022-present Tundra?",
    answer:
      "No. Year, grade, cab, bed, drivetrain, powertrain, TRD package, suspension, tires, payload, towing equipment, load, and prior changes must be verified."
  },
  {
    question: "Does suspension work increase payload or towing ratings?",
    answer:
      "No. Springs or dampers can change support and control, but they do not replace the limits on the truck's labels or Toyota towing information."
  },
  {
    question: "Is Trailhunter equipment available on every third-generation Tundra?",
    answer:
      "No. Toyota announced the Tundra Trailhunter package for model year 2027. Do not apply that package or its equipment to 2022-2026 trucks."
  }
];

const sharedSources = [
  sources.model,
  sources.architecture,
  sources.trim,
  sources.lift,
  sources.trailhunter,
  sources.manual
];

export const toyotaTundraPages = [
  {
    key: "toyota-tundra",
    kind: "vehicleHub",
    route: "/vehicles/toyota-tundra",
    title: "Toyota Tundra Off-Road Upgrade Guide | RigAI",
    description:
      "Plan 2022-present Toyota Tundra off-road upgrades around TRD equipment, suspension, tires, lift, payload, towing, and overland use.",
    socialTitle: "Toyota Tundra Off-Road Upgrade Guide | RigAI",
    socialDescription:
      "A third-generation Tundra planning hub for daily use, trails, towing, suspension, tires, lift, payload, and overland equipment.",
    eyebrow: "2022-present US Toyota Tundra planning guide",
    h1: "Toyota Tundra Off-Road Upgrade Guide",
    dek:
      "Plan the full-size pickup as one system. Cab, bed, powertrain, TRD equipment, payload, towing, daily driving, and trail goals all change the right upgrade order.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Confirm the exact year, grade, cab, bed, drivetrain, powertrain, TRD package, suspension, tire package, payload label, and towing equipment.",
      "The third-generation Tundra uses a solid rear axle located by a multi-link system with coil springs, not the rear leaf-spring architecture of the previous generation.",
      "TRD Off-Road, TRD Pro, AVS, rear load-leveling air suspension, and the 2027 Trailhunter package are configuration-specific.",
      "Permanent accessories, passengers, cargo, and trailer tongue weight all consume the payload available on the individual truck."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["configurations", "Configuration differences"],
      ["use-cases", "Full-size truck use cases"],
      ["systems", "Connected upgrade goals"],
      ["featured-guides", "Tundra guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should a Tundra plan begin with?",
        paragraphs: [
          "Begin with model year, grade, Double Cab or CrewMax, bed length, wheelbase, drivetrain, i-FORCE or i-FORCE MAX powertrain, TRD package, suspension, wheels and tires, payload label, towing equipment, normal passengers, cargo, trailer use, and current modifications.",
          "The Tundra's width, wheelbase, rear overhang, bed load, and accessory mass affect trail access, breakover, departure clearance, steering, braking, and recovery. Build around the routes and representative loads the truck will actually carry."
        ]
      },
      {
        type: "systems",
        id: "configurations",
        title: "Configuration details that change the plan",
        intro:
          "A grade name is a starting point, not a universal specification. Verify model-year equipment on the individual truck.",
        items: [
          ["SR and SR5", "Confirm drivetrain, cab, bed, factory tires, tow hooks, protection, differential equipment, payload, and towing configuration before planning additions."],
          ["Limited, Platinum, 1794, and Capstone", "Large wheel packages, comfort equipment, AVS, rear air suspension, powertrain, payload, and tire sidewall can change the trail and lift plan where fitted."],
          ["TRD Off-Road", "Inventory the actual Bilstein damping, skid protection, tire package, traction features, and locking differential equipment for the model year."],
          ["TRD Pro", "Treat its i-FORCE MAX powertrain, 1.1-inch front lift, FOX internal-bypass dampers, TRD control arm, protection, wheels, and tires as a specific factory system."],
          ["Trailhunter", "Apply this name only to the officially announced 2027 SR5-based package with Old Man Emu suspension and its model-year equipment."],
          ["Cab and bed", "Double Cab and CrewMax passenger space, wheelbase, bed length, rack span, storage, departure clearance, payload, and towing use change the plan."],
          ["Powertrain and load", "i-FORCE and i-FORCE MAX availability, curb weight, payload, axle load, towing equipment, cooling, and tongue weight must be checked on the actual truck."]
        ]
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Match the plan to how the Tundra is used",
        items: [
          {
            title: "Daily driver",
            priority: "Condition, tire pressure, braking, steering, visibility, ride, parking, weather use, and useful bed security.",
            wait: "Heavy armor, large offset changes, or permanent camping equipment without a regular need.",
            data: "Cab, bed, passengers, commute, parking, normal cargo, factory tires, payload, and highway behavior."
          },
          {
            title: "Mild trail and remote access",
            priority: "Suitable tires, airing equipment, rated recovery, recovery-point verification, essential protection, and route clearance.",
            wait: "Lift when factory capability and careful line choice already match the route.",
            data: "TRD equipment, trail width, surface, wheelbase, recovery provisions, protection, tires, and load."
          },
          {
            title: "Towing and work",
            priority: "Truck-specific ratings, hitch, tongue weight, payload calculation, axle load, brakes, tires, cooling, and stable handling.",
            wait: "Suspension changes used to hide overload or exceed a published limit.",
            data: "Labels, Toyota towing information, powertrain, cab, bed, trailer, tongue weight, people, cargo, and scale data."
          },
          {
            title: "Overland travel",
            priority: "Payload, secure low cargo, bed access, recovery, range, braking, reliability, and representative loaded handling.",
            wait: "Rack, camper, tent, drawers, armor, power, water, and fuel before a complete weight budget exists.",
            data: "Trip duration, people, shelter, water, fuel, spare, trailer, bed length, payload, and daily use."
          }
        ]
      },
      {
        type: "systems",
        id: "systems",
        title: "Plan Tundra goals as connected systems",
        items: [
          ["Tires and wheels", "Measured dimensions, wheel width, offset, steering lock, compression, liner and bumper clearance, braking, acceleration, towing, and spare storage."],
          ["Recovery and protection", "Rated recovery provisions, safe equipment, skid coverage, service access, wheelbase, truck mass, and added accessory weight."],
          ["Front suspension", "Double-wishbone IFS, coilovers, control arms, tie rods, CV joints, alignment, droop, compression, bump stops, and front accessory weight."],
          ["Rear suspension", "Solid axle, multi-link location, coil springs, shocks, lateral control, bump stops, bed load, towing, and air or adaptive equipment where fitted."],
          ["Bed and cab systems", "Bed length, rack span, cap or camper fitment, tie-downs, bed access, cargo restraint, passengers, and rear axle loading."],
          ["Payload and towing", "Truck labels, GVWR, GAWR, hitch, trailer, tongue weight, people, cargo, brakes, tires, cooling, stability, and legal requirements."],
          ["Factory special systems", "TRD Pro FOX hardware, AVS, rear load-leveling air, hybrid equipment, and 2027 Trailhunter parts need explicit compatibility."]
        ]
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Toyota Tundra guides",
        published: guideCards
      },
      {
        type: "faq",
        id: "questions",
        title: "Toyota Tundra planning questions",
        items: commonFaq
      }
    ],
    related: [related.first, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: sharedSources
  },
  {
    key: "toyota-tundra-first-upgrades",
    kind: "article",
    route: "/vehicles/toyota-tundra/first-upgrades",
    title: "Best First Off-Road Upgrades for Toyota Tundra | RigAI",
    description:
      "Prioritize 2022-present Toyota Tundra inspection, tires, recovery, protection, storage, payload, towing, and suspension by actual use.",
    socialTitle: "Best First Off-Road Upgrades for Toyota Tundra | RigAI",
    socialDescription:
      "A practical first-upgrade order for daily driving, trails, towing, work, overland travel, and factory-capable TRD configurations.",
    eyebrow: "Toyota Tundra first-upgrade guide",
    h1: "Best First Off-Road Upgrades for Toyota Tundra",
    dek:
      "Begin with condition and a complete use-and-load plan. The right first purchase depends on cab, bed, powertrain, TRD equipment, terrain, towing, and permanent accessory weight.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Inspect tires, brakes, steering, suspension, recovery provisions, protection, hitch, bed, spare, and previous changes first.",
      "Standard 4x4, TRD Off-Road, TRD Pro, and the model-year-specific Trailhunter package do not share one automatic upgrade order.",
      "Factory-capable trims may gain more from recovery, protection, tire care, and load planning than immediate suspension replacement.",
      "Plan springs and damping after bumper, winch, rack, cap, camper, tent, storage, normal bed load, and trailer tongue weight are known."
    ],
    toc: [
      ["baseline", "Baseline inspection"],
      ["sequence", "Useful first systems"],
      ["use", "Upgrade paths by use"],
      ["starting-points", "Factory starting points"],
      ["avoid", "What to skip for now"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Inspect the truck before buying parts",
        paragraphs: [
          "Check tire pressure, age and wear, spare, wheels, brakes, bearings, steering, tie rods, control arms, ball joints, CV boots, coilovers, rear links, coil springs, shocks, bump stops, lines, leaks, recovery provisions, skid plates, hitch, bed mounts, tie-downs, and prior modifications.",
          "Record the tire and loading label plus exact towing configuration. Estimate people, cargo, permanent accessories, trailer tongue weight, and where every load sits. Suspension stance alone cannot confirm available payload."
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
          ["Rated recovery", "Verify factory recovery provisions and procedures. Carry equipment sized and rated for a loaded full-size truck, with safe training."],
          ["Essential protection", "Inventory factory skid plates and protect exposed areas only where the intended routes justify the weight."],
          ["Secure bed storage", "Keep tools and travel cargo restrained, weather-protected, low, and accessible without blocking the spare or recovery equipment."],
          ["Suspension or lift", "Change height, spring support, or damping only after tire, clearance, terrain, permanent load, towing, ride, and alignment needs are defined."]
        ]
      },
      {
        type: "scenarios",
        id: "use",
        title: "First upgrades by use",
        items: [
          {
            title: "Daily driver",
            priority: "Maintenance, all-weather tires, pressure, braking, lighting, bed security, and practical recovery basics.",
            wait: "Leveling for appearance, heavy bumpers, large wheels, or stiff springs without a measured need.",
            data: "Commute, parking, people, climate, normal cargo, tire noise, payload, and towing frequency."
          },
          {
            title: "Mild trail and remote access",
            priority: "All-terrain tires, airing equipment, rated recovery, recovery-point confirmation, targeted protection, and clearance awareness.",
            wait: "A large lift or aggressive offset before evaluating stock travel and full-compression clearance.",
            data: "Factory TRD content, surface, trail width, wheelbase, recovery route, tires, protection, and load."
          },
          {
            title: "Towing and work",
            priority: "Truck and trailer ratings, hitch, tongue weight, tires, brakes, load distribution, cooling, and stable loaded behavior.",
            wait: "Lift or rear changes that reduce towing stability or disguise overload.",
            data: "Powertrain, cab, bed, trailer, tongue weight, payload label, people, cargo, and scale weights."
          },
          {
            title: "Overland travel",
            priority: "Payload budget, light storage, recovery, tires, spare, water, power, shelter, braking, and loaded testing.",
            wait: "Steel armor, rack, camper, tent, drawers, battery, fuel, and water all purchased before weight planning.",
            data: "Trip length, people, bed system, trailer, expected roads, climate, payload, axle load, and center of gravity."
          }
        ]
      },
      {
        type: "systems",
        id: "starting-points",
        title: "Respect the factory starting point",
        items: [
          ["Standard 4x4", "Confirm recovery equipment, tires, protection, differential features, payload, and towing package before adding TRD-like parts."],
          ["TRD Off-Road", "Inventory the actual dampers, skid plates, tires, traction features, and locking differential equipment before replacement."],
          ["TRD Pro", "Use its FOX suspension, factory lift, TRD upper control arm, protection, wheels, tires, and hybrid powertrain as one starting system."],
          ["2027 Trailhunter", "Use its Old Man Emu suspension and model-year equipment before replacing parts; the package does not describe earlier trucks."],
          ["i-FORCE MAX", "Hybrid equipment changes configuration and vehicle weight, but it does not remove truck-specific payload, axle, or towing limits."],
          ["Level versus performance", "A level stance does not prove more travel, better damping, greater payload, or better towing stability."]
        ]
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "What not to buy yet",
        items: [
          ["Excessive wheel offset", "More outward position can increase scrub radius, steering load, bearing leverage, spray, and compression contact."],
          ["Unplanned permanent weight", "Bumpers, armor, racks, campers, storage, water, and power equipment consume payload and alter handling."],
          ["Suspension by badge alone", "Regular, TRD Off-Road, TRD Pro, AVS, rear-air, and Trailhunter configurations need exact compatibility."],
          ["Leveling without a purpose", "Appearance may improve while droop, CV angles, alignment range, ride, and towing stance become worse."],
          ["Replacing capable factory dampers", "Bilstein, FOX, AVS, or Old Man Emu equipment should be replaced only for a defined load, control, durability, or travel need."],
          ["Every accessory at once", "Stage changes, weigh the truck, drive it loaded, and solve the next documented limitation."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "First-upgrade questions",
        items: [
          {
            question: "Should suspension be the first Tundra upgrade?",
            answer:
              "Only when inspection, control, load support, clearance, or terrain shows a real limitation. Tires, recovery, protection, storage, and weight planning often come first."
          },
          {
            question: "Does a TRD Pro need immediate replacement shocks?",
            answer:
              "No. Its factory FOX system is a specific performance package. Replace it only when condition or a clearly defined use requires compatible changes."
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
    key: "toyota-tundra-suspension",
    kind: "article",
    route: "/vehicles/toyota-tundra/suspension",
    title: "Toyota Tundra Suspension Upgrade Guide | RigAI",
    description:
      "Plan 2022-present Toyota Tundra IFS, multi-link rear suspension, coil springs, damping, geometry, load support, and towing upgrades.",
    socialTitle: "Toyota Tundra Suspension Upgrade Guide | RigAI",
    socialDescription:
      "Understand Tundra coilovers, control arms, rear links and coils, TRD Pro FOX, AVS, rear air suspension, payload, and towing.",
    eyebrow: "Toyota Tundra suspension guide",
    h1: "Toyota Tundra Suspension Upgrade Guide",
    dek:
      "Choose suspension for the exact factory system, permanent weight, terrain, and towing job. The third-generation coil-spring rear architecture needs its own plan.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "The 2022-present Tundra uses double-wishbone IFS and a solid rear axle with multi-link location and coil springs; do not use second-generation rear leaf-spring guidance.",
      "Front lift changes control-arm, ball-joint, tie-rod, CV, caster, camber, toe, droop, compression, and bump-stop relationships.",
      "TRD Pro FOX, AVS, rear load-leveling air suspension, and 2027 Trailhunter hardware require configuration-specific solutions.",
      "Rear spring and damping choices must consider permanent bed load, passengers, payload, trailer tongue weight, empty ride, and loaded ride."
    ],
    toc: [
      ["architecture", "Suspension architecture"],
      ["front", "Front IFS and geometry"],
      ["rear", "Rear multi-link and coils"],
      ["factory", "Factory systems"],
      ["load", "Load and towing"],
      ["checklist", "Selection checklist"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "systems",
        id: "architecture",
        title: "Third-generation Tundra suspension architecture",
        items: [
          ["Front", "Double-wishbone independent suspension with coilover assemblies, upper and lower control arms, steering links, CV shafts on 4x4 trucks, stabilizer hardware, and bump stops."],
          ["Rear", "A solid axle located by a multi-link system and supported by coil springs, rear shocks, lateral-location hardware, stabilizer components, and bump stops."],
          ["What changed", "Unlike the second generation, the 2022-present truck does not use rear leaf springs. Leaf-pack add-ons and leaf-specific setup advice do not apply."],
          ["Factory options", "TRD dampers, TRD Pro FOX hardware, Adaptive Variable Suspension, rear load-leveling air suspension, and 2027 Trailhunter equipment exist only on specific configurations."]
        ]
      },
      {
        type: "prose",
        id: "front",
        title: "Front lift changes more than ride height",
        paragraphs: [
          "Raising the front changes upper and lower control-arm position, ball-joint angle, tie-rod relationship, CV angle, caster, camber, toe, droop, compression, bump-stop engagement, and where the coilover operates in its stroke.",
          "Excessive static lift can reduce droop and increase top-out, CV, steering, and alignment problems. Longer shocks alone are not a complete system, and a mild change does not automatically require upper control arms; use measured alignment and travel needs."
        ],
        contextualLink: related.lift
      },
      {
        type: "systems",
        id: "rear",
        title: "Rear coils, links, and loaded behavior",
        items: [
          ["Coil springs", "Select rate and free length for permanent load, desired ride height, available travel, empty ride, and loaded ride rather than appearance alone."],
          ["Multi-link location", "Link bushings and geometry manage axle path, longitudinal forces, pinion behavior, and articulation. Inspect links and mounts when height changes."],
          ["Lateral control", "Track or lateral-location geometry can affect axle position through travel; confirm the specific system and correction requirements."],
          ["Rear shocks", "Damping must control the spring and actual load through heat, repeated impacts, towing, and daily use without becoming harsh when empty."],
          ["Bump stops", "Preserve appropriate compression protection for axle, shocks, tires, frame, body, air components, and load."],
          ["Driveshaft", "Check slip, joint angle, vibration, and clearance after meaningful height or load changes."]
        ]
      },
      {
        type: "comparison",
        id: "factory",
        title: "Factory suspension systems are not interchangeable",
        caption: "Toyota Tundra factory suspension compatibility",
        headers: ["Configuration", "What to verify"],
        rows: [
          ["Regular and TRD Off-Road", "Exact dampers, springs, ride height, protection, wheels, tires, package content, and desired use."],
          ["TRD Pro", "FOX internal-bypass coilovers and rear remote-reservoir shocks, factory front lift, TRD upper control arms, hybrid weight, and electronic or hardware compatibility."],
          ["AVS-equipped truck", "Sensor, actuator, wiring, calibration, damping control, warning behavior, and explicit part compatibility."],
          ["Rear-air-equipped truck", "Air spring, height control, sensors, lines, compressor, operating modes, payload, towing, and lift compatibility."],
          ["2027 Trailhunter", "Model-year-specific Old Man Emu suspension and package details; do not transfer the name or parts assumptions to 2022-2026 trucks."]
        ]
      },
      {
        type: "systems",
        id: "load",
        title: "Match suspension to load and towing",
        items: [
          ["Permanent front load", "Bumper, winch, lights, and armor affect front spring position, damping, steering, braking, and available payload."],
          ["Permanent rear load", "Rack, cap, camper, drawers, spare, power, water, and tools affect rear coils, shocks, axle load, ride height, and handling."],
          ["Trailer tongue weight", "Tongue load acts near the rear of the truck and affects rear axle loading and front axle response differently from cargo distributed in the bed."],
          ["Hybrid configuration", "i-FORCE MAX equipment changes the truck configuration and weight distribution; verify application and labels rather than assuming gas-model settings."],
          ["Ratings", "Support components can improve stance or control but do not increase payload, GVWR, GAWR, hitch, tire, or towing ratings."]
        ]
      },
      {
        type: "checklist",
        id: "checklist",
        title: "Suspension selection and verification",
        items: [
          "Record year, grade, cab, bed, powertrain, drivetrain, TRD package, AVS, rear air suspension, wheels, tires, and current ride heights.",
          "Inspect coilovers, control arms, joints, tie rods, CV boots, rear links, coils, shocks, bump stops, sensors, lines, and previous work.",
          "Define the problem: damping, bottoming, sag, tire clearance, alignment, travel, load support, towing stability, or damaged parts.",
          "Weigh the representative truck and compare total and axle weights with labels before selecting spring rate.",
          "Verify alignment, droop, compression, bump clearance, CV and driveshaft angles, line slack, tire contact, sensor operation, and loaded behavior after installation."
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Tundra suspension questions",
        items: [
          {
            question: "Does a 2022-present Tundra have rear leaf springs?",
            answer:
              "No. The third generation uses rear coil springs with a solid axle and multi-link location. Rear leaf-spring guidance belongs to the older generation."
          },
          {
            question: "Are upper control arms required for every mild lift?",
            answer:
              "No. The need depends on lift method, geometry, alignment range, travel, joint angles, component design, and intended use."
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
    key: "toyota-tundra-tire-size",
    kind: "article",
    route: "/vehicles/toyota-tundra/tire-size",
    title: "Toyota Tundra Tire Size and Fitment Guide | RigAI",
    description:
      "Check 2022-present Toyota Tundra tire fitment by year, trim, cab, bed, suspension, wheel width, offset, measured size, load, and spare clearance.",
    socialTitle: "Toyota Tundra Tire Size and Fitment Guide | RigAI",
    socialDescription:
      "A no-guarantee Tundra fitment method for factory differences, wheel position, steering, compression, braking, towing, and spare storage.",
    eyebrow: "Toyota Tundra tire fitment guide",
    h1: "Toyota Tundra Tire Size and Fitment Guide",
    dek:
      "Do not choose a universal largest tire. Verify the exact truck, wheel, measured tire, suspension, alignment, steering, compression, load, and spare location.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size and fitment"),
    takeaways: [
      "Factory wheel and tire packages differ across grades, TRD equipment, model years, cab and bed configurations.",
      "A nominal size is not a measured size; brand, model, wheel width, construction, pressure, and load change actual dimensions.",
      "Street-driving clearance does not prove clearance at steering lock, suspension compression, articulation, or representative load.",
      "Larger and heavier tires affect braking, acceleration, gearing, steering, fuel use, towing behavior, and spare storage."
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
          "Record model year, grade, Double Cab or CrewMax, bed length, drivetrain, powertrain, TRD package, suspension, factory lift, AVS or rear air equipment, wheel diameter and width, offset, tire size, load index, spare, and prior modifications.",
          "Do not use TRD Pro or 2027 Trailhunter fitment as proof for another grade. Their wheels, tires, suspension height, body clearance, and associated hardware are configuration-specific."
        ]
      },
      {
        type: "systems",
        id: "variables",
        title: "Variables that determine fitment",
        items: [
          ["Measured tire", "Record mounted diameter, section width, tread width, construction, load range, approved wheel range, and growth or deflection under load."],
          ["Wheel width and offset", "These position the tire relative to control arms, tie rods, body, liner, bumper, fender, and suspension through steering and travel."],
          ["Suspension and alignment", "Ride height, spring position, caster, camber, toe, control-arm path, bump-stop engagement, and load change where the tire travels."],
          ["Body clearance", "Check inner liner, bumper edge, mud flap, cab or body-mount area where relevant, and fender through both steering locks."],
          ["Mechanical clearance", "Check upper control arm, tie rod, brake hose, sway hardware, coilover, frame, and other moving components."],
          ["Configuration", "Year, grade, cab, bed, powertrain, factory lift, AVS, rear air, wheel package, and previous modifications can change the answer."]
        ]
      },
      {
        type: "checklist",
        id: "clearance",
        title: "Verify dynamic clearance",
        items: [
          "Measure the actual mounted tire and wheel position instead of relying only on the sidewall size.",
          "Check both steering locks on level ground and while the suspension is loaded or articulated.",
          "Inspect inner and outer clearance through compression, droop, bump-stop approach, and realistic braking and turning conditions.",
          "Repeat with passengers, bed cargo, trailer tongue weight, or overland load representative of actual use.",
          "Look for contact at liners, bumper, mud flaps, cab-area mounts, control arms, tie rods, hoses, fenders, and bodywork.",
          "Recheck after alignment, suspension settling, pressure changes, wheel changes, or added permanent load."
        ]
      },
      {
        type: "comparison",
        id: "tradeoffs",
        title: "What a larger or heavier tire changes",
        caption: "Toyota Tundra tire-system tradeoffs",
        headers: ["System", "Planning effect"],
        rows: [
          ["Braking and acceleration", "Greater radius and rotating mass can increase braking demand and reduce acceleration."],
          ["Gearing", "Effective gearing becomes taller; axle ratio and powertrain response determine how noticeable the change is."],
          ["Steering", "Width, offset, scrub radius, construction, and weight can change effort, return, tracking, and component load."],
          ["Towing and payload", "Tire capacity, pressure, heat, braking, acceleration, hitch load, axle load, and stability still require verification."],
          ["Fuel economy", "Rolling resistance, mass, tread, pressure, frontal area, speed, and use can reduce efficiency."],
          ["Speedometer", "A diameter change can alter indicated speed and distance; verify model-year calibration options and actual error."]
        ]
      },
      {
        type: "systems",
        id: "spare",
        title: "The spare is a separate fitment problem",
        items: [
          ["Under-bed storage", "Check the actual inflated spare against hoist, frame, hitch, exhaust, heat shields, axle path, bed, and departure clearance."],
          ["Matching wheel", "Confirm wheel width, offset, lug hardware, brake clearance, load rating, TPMS needs, and compatibility with the intended axle."],
          ["Loaded access", "Make sure racks, campers, hitch accessories, cargo, or trailers do not prevent safe spare and jack access."],
          ["Temporary mismatch", "Understand drivetrain and differential limitations before using a different-size spare; follow Toyota and tire manufacturer guidance."],
          ["Repair plan", "Carry suitable inflation, repair, lifting, wheel-torque, and recovery equipment for the truck's weight and route."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Tundra tire-fitment questions",
        items: [
          {
            question: "Is there one largest tire for all 2022-present Tundra configurations?",
            answer:
              "There is no universal answer. Year, grade, cab, bed, suspension, wheel width, offset, measured tire, alignment, steering, compression, load, and prior changes matter."
          },
          {
            question: "Does a TRD Pro tire fit every other Tundra?",
            answer:
              "No. TRD Pro suspension height, wheels, offset, body clearance, and associated hardware cannot be assumed for another grade."
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
    key: "toyota-tundra-lift-kit",
    kind: "article",
    route: "/vehicles/toyota-tundra/lift-kit",
    title: "Toyota Tundra Lift Kit Guide | RigAI",
    description:
      "Compare 2022-present Toyota Tundra leveling kits, coilovers, complete lifts, geometry, travel, load, towing, and factory-system compatibility.",
    socialTitle: "Toyota Tundra Lift Kit Guide | RigAI",
    socialDescription:
      "Plan Tundra lift height, IFS geometry, rear coils, shocks, AVS, air suspension, TRD Pro compatibility, ride, payload, and towing.",
    eyebrow: "Toyota Tundra lift planning guide",
    h1: "Toyota Tundra Lift Kit Guide",
    dek:
      "Choose a system, not a height claim. Lift method, factory suspension, geometry, travel, tires, permanent load, towing, and daily behavior must work together.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Lift kits"),
    takeaways: [
      "Leveling spacers, preload changes, replacement coilovers, and complete systems affect spring preload, droop, compression, damping, and geometry differently.",
      "Lift height alone does not describe wheel travel, ride quality, alignment, CV angle, steering load, or system quality.",
      "Regular, TRD Off-Road, TRD Pro, AVS, rear-air, and 2027 Trailhunter configurations need explicit compatibility.",
      "Rear height and spring support must be selected around permanent bed load, tongue weight, empty ride, loaded ride, and towing stability."
    ],
    toc: [
      ["goal", "Define the goal"],
      ["methods", "Lift methods"],
      ["geometry", "Geometry and travel"],
      ["factory", "Factory compatibility"],
      ["load", "Rear load and towing"],
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
          "Level appearance is a styling result. It does not automatically add travel, improve damping, increase payload, or improve towing. Preserve safe braking, steering, stability, visibility, sensor behavior, and daily use."
        ],
        contextualLink: related.tires
      },
      {
        type: "comparison",
        id: "methods",
        title: "Common lift methods",
        caption: "Toyota Tundra lift methods",
        headers: ["Method", "What it changes"],
        rows: [
          ["Top spacer", "Changes assembly position and ride height but may alter droop, top-out, compression, and geometry without changing spring rate or damping."],
          ["Preload spacer", "Changes spring preload and static position; ride, droop, coil behavior, and damper operating point require verification."],
          ["Replacement coilover", "Can combine spring, damping, travel, and height changes when the complete application is engineered and installed correctly."],
          ["Complete front system", "May include coilovers, upper control arms, knuckles, tie-rod parts, CV support, bump stops, lines, and geometry corrections."],
          ["Rear coil or spacer", "Changes rear support or height but must match shock length, link geometry, bump stops, brake and sensor lines, load, and towing."],
          ["Rear air solution", "Where factory rear air is fitted, use a system explicitly compatible with height sensors, modes, lines, calibration, and safe operation."]
        ]
      },
      {
        type: "systems",
        id: "geometry",
        title: "Protect geometry and usable travel",
        items: [
          ["Droop", "Excessive front lift can use droop at static height, increase top-out, and reduce the wheel's ability to extend into a depression."],
          ["Compression", "Maintain bump-stop function and clearance for tires, coilovers, control arms, steering, CV shafts, lines, bodywork, and frame."],
          ["Alignment", "Measure caster, camber, and toe. A green printout alone does not prove balanced caster, good steering return, or adequate travel clearance."],
          ["CV and steering", "Check CV angles, boots, tie rods, ball joints, steering effort, scrub radius, and binding through steering and suspension travel."],
          ["Upper control arms", "Use them when the particular lift, alignment, joint angle, travel, tire clearance, or strength requirement justifies them; not automatically."],
          ["Rear links and driveshaft", "Check axle location, link angles, lateral position, pinion and driveshaft behavior, shock travel, and line slack."]
        ]
      },
      {
        type: "comparison",
        id: "factory",
        title: "Factory configuration compatibility",
        caption: "Toyota Tundra factory lift compatibility",
        headers: ["Configuration", "Lift decision"],
        rows: [
          ["Regular and TRD Off-Road", "Confirm exact application, bed length, powertrain, suspension, tire goal, alignment, and included supporting hardware."],
          ["TRD Pro", "Do not assume regular-truck parts fit its factory lift, FOX dampers, TRD control arm, hybrid configuration, travel, or calibration."],
          ["AVS", "Use only systems that explicitly preserve or correctly replace adaptive damping hardware, sensors, wiring, calibration, and warning behavior."],
          ["Rear air suspension", "Verify air-spring, height-control, sensor, line, compressor, mode, and calibration compatibility."],
          ["2027 Trailhunter", "Verify package-specific Old Man Emu hardware and model-year application; ordinary Tundra lift assumptions are not enough."],
          ["Toyota TRD lift kit", "Toyota lists specific 2022-and-newer 4x4, bed, and powertrain applications and excludes TRD Pro, TRD Sport, AVS, and rear-air trucks."]
        ]
      },
      {
        type: "systems",
        id: "load",
        title: "Rear lift, payload, and towing",
        items: [
          ["Permanent load", "Choose rear coils and damping after bumper, rack, cap, camper, drawers, spare, battery, water, tools, and typical cargo are known."],
          ["Tongue weight", "A trailer applies load behind the rear axle and can change front axle response, headlight aim, braking, and stability."],
          ["Empty behavior", "A spring selected only for maximum load may ride poorly and reduce traction when the truck is empty."],
          ["Loaded behavior", "A soft appearance-oriented setup may sag, bottom, oscillate, or steer poorly when the truck is loaded or towing."],
          ["Ratings", "Lift parts, springs, airbags, or dampers do not increase payload, axle, tire, hitch, or towing ratings."]
        ]
      },
      {
        type: "checklist",
        id: "installation",
        title: "Lift installation and verification",
        items: [
          "Confirm exact year, grade, cab, bed, drivetrain, powertrain, TRD package, AVS, rear air, wheels, tires, and part application.",
          "Measure baseline ride heights, alignment, representative axle weights, tire clearances, and suspension condition.",
          "Check control arms, joints, tie rods, CVs, driveshaft, links, shocks, coils, bump stops, brake and ABS lines, sensors, wiring, and exhaust through travel.",
          "Align caster, camber, and toe, then check steering return, braking, stability, vibration, and driver-assistance behavior.",
          "Test tire clearance through steering and compression with representative load and recheck fasteners after initial use."
        ],
        note:
          "A lift does not change payload or towing ratings. Continue to use the truck's labels and Toyota model-year guidance."
      },
      {
        type: "faq",
        id: "questions",
        title: "Tundra lift questions",
        items: [
          {
            question: "What lift height works for every third-generation Tundra?",
            answer:
              "There is no universal height. Factory suspension, geometry, tire goal, load, towing, ride, alignment, travel, and legal requirements differ."
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
    key: "toyota-tundra-overland-build",
    kind: "article",
    route: "/vehicles/toyota-tundra/overland-build",
    title: "Toyota Tundra Overland Build Guide | RigAI",
    description:
      "Plan a 2022-present Toyota Tundra overland build around payload, towing, bed and camper systems, tires, recovery, power, suspension, and daily use.",
    socialTitle: "Toyota Tundra Overland Build Guide | RigAI",
    socialDescription:
      "A staged full-size Tundra plan for payload, bed equipment, shelter, recovery, electrical power, rear coils, towing, and trip reliability.",
    eyebrow: "Toyota Tundra overland planning guide",
    h1: "Toyota Tundra Overland Build Guide",
    dek:
      "Use the truck's space without spending its payload twice. Plan people, bed system, shelter, recovery, water, power, towing, and permanent weight before selecting springs.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "Start with trip type, duration, people, route, climate, cab, bed, trailer use, and payload available on the individual truck.",
      "Bumpers, winch, skid plates, rack, camper, tent, drawers, refrigerator, battery, water, fuel, recovery gear, people, and tongue weight accumulate quickly.",
      "Weigh permanent equipment before selecting rear coil springs or damping; a level stance cannot prove remaining payload or axle capacity.",
      "i-FORCE MAX availability does not remove payload, axle, tire, hitch, or towing limits."
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
            wait: "Permanent drawers, large battery bank, steel rack, or camper when removable equipment works.",
            data: "People, route, nights, climate, cab, bed, daily use, payload, and storage security."
          },
          {
            title: "Long-distance travel",
            priority: "Reliability, tires, braking, highway comfort, low weight, organized storage, water, power, and service access.",
            wait: "Aggressive lift, offset, tire weight, and armor without a route need.",
            data: "Distance, roads, fuel access, service, people, payload, weather, and towing."
          },
          {
            title: "Bed-camper travel",
            priority: "Actual wet camper weight, center of gravity, mounting, bed fit, payload, rear axle load, tires, braking, coils, and damping.",
            wait: "Camper choice based only on brochure dry weight or a generic Tundra rating.",
            data: "Camper, options, water, people, cargo, cab, bed, labels, axle weights, and route."
          },
          {
            title: "Trailer-supported travel",
            priority: "Trailer rating, hitch, tongue weight, payload, axle load, braking, cooling, tires, clearance, and recovery.",
            wait: "Truck accessories that consume payload needed for tongue weight and passengers.",
            data: "Loaded trailer, tongue weight, frontal area, powertrain, equipment, people, cargo, and scale readings."
          }
        ]
      },
      {
        type: "prose",
        id: "payload",
        title: "Build a payload budget before a parts list",
        paragraphs: [
          "Start with the tire and loading label on the individual truck. Subtract people, permanent accessories, removable cargo, water, fuel carried as cargo, recovery gear, and trailer tongue weight. Compare loaded axle weights with GAWR and total weight with GVWR.",
          "A steel bumper, winch, skid plates, bed rack, cap or camper, rooftop tent, drawers, refrigerator, auxiliary battery, water, fuel, spare, tools, recovery gear, passengers, and trailer tongue weight can consume capacity quickly. Hybrid powertrain availability does not remove those limits."
        ],
        contextualLink: related.suspension
      },
      {
        type: "systems",
        id: "bed",
        title: "Choose a bed and shelter system by use and weight",
        items: [
          ["Open bed and removable bins", "Light and flexible for work use. Secure cargo, protect it from weather, preserve tie-downs, and control movement."],
          ["Bed rack and rooftop tent", "Confirm rack and bed ratings, mounting, static and dynamic load, tent mass, height, wind, center of gravity, access, and departure clearance."],
          ["Cap or canopy", "Include cap mass, roof rating, rack, ventilation, visibility, dust control, bed access, and rear axle load."],
          ["Drawers and refrigerator", "Compare organization value with permanent mass, raised load floor, cooling airflow, power demand, and removable alternatives."],
          ["Bed camper", "Use actual wet and loaded weight, center of gravity, bed compatibility, tie-downs, payload, axle load, tires, suspension, braking, and handling."],
          ["Water and fuel", "Carry the route margin needed in approved, secured containers placed low and accounted for in total and axle weights."],
          ["Access", "Do not bury the spare, jack, recovery gear, extinguisher, first aid, tools, or emergency electrical shutoff."]
        ]
      },
      {
        type: "systems",
        id: "systems",
        title: "Plan supporting systems together",
        items: [
          ["Recovery", "Rated provisions, equipment sized for a loaded full-size truck, safe training, communications, traction aids, and a route-specific plan."],
          ["Armor and bumpers", "Protect only exposed areas justified by the route. Track axle load, cooling airflow, sensors, service access, and departure clearance."],
          ["Winch", "Confirm bumper and frame compatibility, line pull, electrical demand, airflow, controls, recovery points, front spring effect, and training."],
          ["Electrical", "Size refrigerator, lighting, communications, battery, solar, wiring, fusing, ventilation, and backup around measured energy use."],
          ["Tires and spare", "Choose load-appropriate construction and pressure, then verify fitment, braking, towing, repair equipment, and secure spare storage."],
          ["Suspension", "Select rear coil springs and damping after permanent weight and representative axle loads are known; preserve acceptable empty behavior."],
          ["Weight distribution", "Keep dense equipment low and secure, avoid unnecessary roof load, preserve bed access, and control front-to-rear balance."]
        ]
      },
      {
        type: "sequence",
        id: "stages",
        title: "A staged Tundra overland build",
        intro:
          "Use and weigh each stage before adding the next group of permanent equipment.",
        items: [
          ["Stage 1: reliability and essentials", "Complete maintenance and inspection, then address tires, pressure and repair tools, rated recovery, communications, spare, and essential protection."],
          ["Stage 2: lightweight travel system", "Add removable storage, simple shelter, food and water, basic power, cargo restraint, lighting, and the minimum bed system required."],
          ["Stage 3: measure and tune", "Load the truck as traveled, measure axle weights, calculate remaining payload, test braking and handling, then tune rear coils and damping if needed."],
          ["Stage 4: advanced equipment", "Add justified armor, electrical systems, camper support, winch, rack, auxiliary systems, or towing equipment only within verified limits."]
        ]
      },
      {
        type: "checklist",
        id: "verification",
        title: "Verify the completed travel load",
        items: [
          "Weigh front axle, rear axle, and total truck with people, fuel, water, food, recovery gear, shelter, cargo, and trailer tongue weight as traveled.",
          "Compare scale results with payload, GVWR, front and rear GAWR, tire capacity, hitch rating, and model-year towing guidance.",
          "Secure cargo and confirm dense items are low and cannot strike occupants or move in the bed.",
          "Check tire pressure and temperature, braking, steering, lane changes, ride, bottoming, sway, visibility, lighting, and driver-assistance sensors.",
          "Verify spare, jack, recovery gear, ventilation, electrical protection, bed access, tie-downs, rack or camper mounts, and fastener torque.",
          "Repeat the process whenever a camper, trailer, rack, battery, water system, bumper, winch, or major storage system changes."
        ],
        note:
          "A useful Tundra overland build preserves payload margin, braking, steering, service access, bed utility, and comfortable daily behavior."
      },
      {
        type: "faq",
        id: "questions",
        title: "Tundra overland questions",
        items: [
          {
            question: "Should rear springs be selected before choosing a camper?",
            answer:
              "No. Select the actual camper and permanent equipment, determine loaded weight and axle distribution, then choose compatible support and damping."
          },
          {
            question: "Does i-FORCE MAX provide extra payload for overland equipment?",
            answer:
              "Do not assume so. Use the payload and axle information on the individual hybrid truck and include every passenger, accessory, cargo item, and tongue load."
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
