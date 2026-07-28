const dates = {
  published: "2026-07-28T22:00:00+05:00",
  modified: "2026-07-28T22:00:00+05:00",
  reviewedLabel: "July 28, 2026"
};

const vehicle = {
  slug: "ford-ranger",
  name: "Ford Ranger Current US Generation",
  shortName: "Ranger",
  guidesLabel: "Ford Ranger",
  heroLabel: "RANGER US",
  ctaLabel: "Build My Setup",
  planInputs:
    "model year, XL, XLT, Lariat or Raptor trim, drivetrain, engine, FX4 equipment, factory suspension, axle and differential equipment, wheels and tires, towing package, payload label, current modifications, permanent bed load, trailer tongue weight, driving profile, and planned trip load"
};

const scope = {
  title: "Vehicle scope: 2024-present US Ford Ranger",
  text:
    "This guide covers current-generation US-market Ford Ranger pickups from model year 2024 to the present. Equipment varies by model year, XL, XLT, Lariat or Ranger Raptor trim, drivetrain, engine, FX4 package availability, suspension, axle and differential equipment, wheel and tire package, towing configuration, payload configuration, options, and prior modifications."
};

const safety = {
  title: "Safety, loading, towing, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, tire and loading label, Ford towing guide, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify model year, trim, engine, drivetrain, FX4 or Raptor configuration, suspension, axles, differential equipment, wheels, measured tire dimensions, payload label, gross and axle weight limits, towing equipment, trailer requirements, permanent accessories, passengers, cargo, and tongue weight before purchasing, loading, towing, or installing parts."
  ]
};

const sources = {
  model: {
    label: "Ford Ranger models and specifications",
    href: "https://www.ford.com/trucks/ranger/compare-specs/",
    type: "Ford official US vehicle information"
  },
  technical: {
    label: "2024 Ford Ranger technical specifications",
    href: "https://media.ford.com/content/dam/fordmedia/North%20America/US/product/2024/ranger/2024%20Ford%20Ranger%20Specs.pdf",
    type: "Ford official US technical information"
  },
  raptor: {
    label: "Ford Ranger Raptor suspension information",
    href: "https://www.ford.com/trucks/ranger/2025/models/raptor/",
    type: "Ford official US model information"
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
        { label: "Ford Ranger", href: "/vehicles/ford-ranger" },
        { label }
      ]
    : [{ label: "Ford Ranger" }])
];

const related = {
  hub: {
    title: "Ford Ranger Guide",
    href: "/vehicles/ford-ranger",
    text: "Start with the complete 2024-present US Ranger upgrade-planning framework."
  },
  first: {
    title: "First Upgrades for a Ford Ranger",
    href: "/vehicles/ford-ranger/first-upgrades",
    text: "Prioritize condition, tires, recovery, protection, bed utility, and only the changes the use case requires."
  },
  suspension: {
    title: "Ford Ranger Suspension Guide",
    href: "/vehicles/ford-ranger/suspension",
    text: "Separate regular Ranger leaf-spring planning from Ranger Raptor Live Valve and Watts-link compatibility."
  },
  tires: {
    title: "Ford Ranger Tire Size and Fitment Guide",
    href: "/vehicles/ford-ranger/tire-size",
    text: "Check configuration, measured tire dimensions, wheel position, steering, compression, load, and spare clearance."
  },
  lift: {
    title: "Ford Ranger Lift Kit Guide",
    href: "/vehicles/ford-ranger/lift-kit",
    text: "Match leveling, suspension height, IFS geometry, rear support, tires, load, and Raptor compatibility to a defined goal."
  },
  overland: {
    title: "Ford Ranger Overland Build Guide",
    href: "/vehicles/ford-ranger/overland-build",
    text: "Stage payload, bed storage, rack, shelter, recovery, power, suspension, and towing decisions."
  }
};

export const fordRangerPages = [
  {
    key: "ford-ranger",
    kind: "vehicleHub",
    route: "/vehicles/ford-ranger",
    title: "Ford Ranger Off-Road Upgrade Guide | RigAI",
    description:
      "Plan 2024-present US Ford Ranger upgrades around trim, FX4 or Raptor equipment, suspension, tires, lift, payload, towing, and overland use.",
    socialTitle: "Ford Ranger Off-Road Upgrade Guide | RigAI",
    socialDescription:
      "A current US Ranger planning hub for daily use, trails, work, payload, towing, suspension, tires, lift, and overland equipment.",
    eyebrow: "2024-present US Ford Ranger planning guide",
    h1: "Ford Ranger Off-Road Upgrade Guide",
    dek:
      "Plan the whole pickup. Trim, drivetrain, engine, FX4 equipment, factory suspension, tires, bed load, payload, towing, daily driving, and trail goals all change the right upgrade order.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Confirm XL, XLT, Lariat, FX4, or Ranger Raptor equipment on the exact US model year before selecting parts.",
      "Regular Ranger and Ranger Raptor differ in suspension architecture, control arms, rear layout, shocks, track width, wheels, tires, drivetrain hardware, towing, and payload.",
      "FOX Live Valve dampers, Watts-link rear suspension, full-time-capable four-wheel drive, and locking axles are Raptor-specific rather than universal Ranger equipment.",
      "Payload, axle load, trailer tongue weight, permanent accessories, passengers, and trip cargo must be planned together."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["configurations", "Configuration differences"],
      ["use-cases", "Pickup use cases"],
      ["upgrade-goals", "Connected upgrade goals"],
      ["featured-guides", "Ranger guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should a Ranger plan begin with?",
        paragraphs: [
          "Begin with model year, trim, engine, drivetrain, FX4 or Raptor configuration, factory suspension, axle and differential equipment, wheel and tire package, protection, towing equipment, payload label, current accessories, normal bed cargo, passengers, trailer use, and actual operating weight.",
          "Regular XL, XLT, and Lariat Rangers use independent front suspension and a solid rear axle with leaf springs. Ranger Raptor uses a substantially different long-travel system with unique control arms, FOX Live Valve dampers, and a trailing-arm rear suspension located laterally by a Watts link. Compatibility must follow the exact architecture."
        ]
      },
      {
        type: "systems",
        id: "configurations",
        title: "Configuration details that change the plan",
        intro:
          "Trim and package names identify a starting point, not a universal parts list. Verify US build information, labels, owner's resources, part numbers, and the pickup itself.",
        items: [
          ["XL", "Confirm 4x2 or 4x4 drivetrain, engine, wheels, tires, tow hooks, recovery provisions, protection, differential equipment, payload label, towing package, and intended work load."],
          ["XLT", "Balance road comfort and utility with engine, drivetrain, tire choice, recovery, underbody exposure, FX4 availability, bed use, towing, and permanent equipment."],
          ["Lariat", "Confirm engine, drivetrain, wheel and tire package, FX4 equipment where offered, differential, protection, payload, towing, and electronic features for the model year."],
          ["FX4-equipped Ranger", "Verify package availability and exact off-road-tuned shocks, protection, electronic-locking rear differential, tires, drive features, tow hooks, and model-year content."],
          ["Ranger Raptor", "Treat its engine, four-wheel-drive system, front and rear locking equipment, wide track, unique control arms, FOX Live Valve shocks, Watts-link trailing-arm rear suspension, tires, wheels, bodywork, and clearance as one trim-specific system."],
          ["Payload and towing", "Door labels, equipment, engine, drivetrain, passengers, cargo, accessories, hitch, trailer, and tongue weight determine the usable plan for the individual pickup."],
          ["Bed and accessory use", "Racks, caps, tents, drawers, spare support, tools, power, water, and recovery equipment add permanent or trip weight and can alter rear suspension behavior."],
          ["US-market scope", "Parts from the previous US generation or another market require explicit confirmation for the current US application."]
        ]
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Match the plan to how the pickup is used",
        items: [
          { title: "Daily driver", priority: "Condition, tire pressure, braking, steering, visibility, ride, noise, weather use, and practical bed security.", wait: "Heavy armor, large wheel-offset changes, or permanent bed systems without a regular need.", data: "Commute, parking, passengers, bed use, current tires, drivetrain, payload, and highway behavior." },
          { title: "Mild trail use", priority: "Suitable tires, airing equipment, rated recovery, essential protection, practical storage, and verified clearance.", wait: "Lift when factory capability and careful line choice already match the route.", data: "Trim, FX4 equipment, trail surface, recovery hardware, protection, tire condition, and load." },
          { title: "Technical trail use", priority: "Traction, durable tires and wheels, underbody and rocker protection, controlled travel, steering, recovery, and obstacle planning.", wait: "Extra height that harms IFS geometry, braking, stability, or daily behavior.", data: "Raptor or regular architecture, differential equipment, tires, track width, compression clearance, load, and recovery route." },
          { title: "Towing and work", priority: "Exact ratings, hitch and trailer compatibility, tongue weight, payload calculation, axle load, brakes, tires, cooling, and stable handling.", wait: "Suspension changes used to disguise overload or exceed a published limit.", data: "Door label, Ford towing guide, engine, drivetrain, trailer, tongue weight, passengers, cargo, accessories, and scale data." },
          { title: "Overland travel", priority: "Payload, low and secure cargo, bed access, recovery, range, braking, reliability, and representative loaded handling.", wait: "Rack, tent, drawers, armor, bumpers, power, water, and fuel before a complete weight budget exists.", data: "Trip duration, people, shelter, water, fuel, spare, trailer use, configuration, and daily usability." }
        ]
      },
      {
        type: "systems",
        id: "upgrade-goals",
        title: "Plan Ranger goals as connected systems",
        items: [
          ["Tires and wheels", "Configuration, factory suspension, measured tire size, wheel width, offset, steering lock, compression, bodywork, gearing, braking, towing, and spare storage."],
          ["Recovery and protection", "Rated recovery provisions, safe equipment, tow-hook configuration, skid plates, differential and rocker exposure, FX4 or Raptor hardware, service access, and weight."],
          ["Regular Ranger suspension", "Front coilovers or struts, control arms, CV joints, steering, rear leaf packs, shocks, bump stops, empty-bed ride, permanent load, payload, and towing."],
          ["Ranger Raptor suspension", "Unique control arms, FOX Live Valve dampers, trailing arms, Watts link, rear springs, electronic integration, wide track, factory tuning, and exact compatibility."],
          ["Lift and geometry", "Purpose, tire goal, caster, camber, toe, CV and steering angles, droop, compression, rear height, brake-line clearance, and installation complexity."],
          ["Bed utility", "Tie-downs, protection, weather security, lightweight storage, bed access, rack or cap loads, cargo restraint, and rear load distribution."],
          ["Towing", "Vehicle-specific rating, trailer rating, hitch, tongue weight, payload, passengers, cargo, brakes, tires, cooling, stability, and legal requirements."],
          ["Overland equipment", "Rack, tent, drawers, refrigerator, battery, solar, water, fuel, spare, recovery, armor, center of gravity, and departure clearance."]
        ]
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Ford Ranger guides",
        published: [
          { eyebrow: "Published guide", title: "Best First Upgrades for a Ford Ranger", text: "Choose a useful order for daily driving, trails, work, towing, or overland travel.", href: related.first.href },
          { eyebrow: "Published guide", title: "Ford Ranger Suspension Guide", text: "Separate regular Ranger leaf-spring planning from Raptor Live Valve and Watts-link compatibility.", href: related.suspension.href },
          { eyebrow: "Published guide", title: "Ford Ranger Tire Size Guide", text: "Evaluate configuration, wheel position, measured dimensions, compression, gearing, braking, and spare clearance.", href: related.tires.href },
          { eyebrow: "Published guide", title: "Ford Ranger Lift Kit Guide", text: "Choose regular Ranger leveling or suspension systems while treating Raptor as a separate application.", href: related.lift.href },
          { eyebrow: "Published guide", title: "Ford Ranger Overland Build Guide", text: "Stage payload, bed storage, rack, shelter, recovery, power, and suspension decisions.", href: related.overland.href }
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Ford Ranger planning questions",
        items: [
          ["Does every Ranger need a lift?", "No. Condition, tires, recovery, protection, load planning, and driver practice may address the first limitation."],
          ["Does every Ranger have FOX Live Valve dampers?", "No. Live Valve dampers are Ranger Raptor-specific equipment in this US scope."],
          ["Can Raptor tire or suspension fitment be copied to an XL, XLT, or Lariat?", "No. Track width, bodywork, wheels, suspension architecture, control arms, rear layout, and clearance differ."],
          ["Can springs increase the manufacturer's payload rating?", "No. Suspension changes can alter support or control but do not replace the vehicle's certified labels and limits."]
        ]
      }
    ],
    related: [related.first, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.raptor, sources.towing, sources.manuals]
  },
  {
    key: "ford-ranger-first-upgrades",
    kind: "article",
    route: "/vehicles/ford-ranger/first-upgrades",
    title: "Best First Off-Road Upgrades for Ford Ranger | RigAI",
    description:
      "Prioritize 2024-present US Ford Ranger inspection, tires, recovery, protection, bed utility, payload, towing, and suspension by actual use.",
    socialTitle: "Best First Off-Road Upgrades for Ford Ranger | RigAI",
    socialDescription:
      "A practical first-upgrade order for daily driving, trails, work, towing, and overland current-generation Ranger use.",
    eyebrow: "Ford Ranger first-upgrade guide",
    h1: "Best First Off-Road Upgrades for Ford Ranger",
    dek:
      "Begin with condition and a complete use-and-load plan. The right first purchase depends on trim, drivetrain, FX4 or Raptor equipment, terrain, bed use, passengers, payload, towing, and permanent accessory weight.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Inspect tires, brakes, steering, suspension, recovery provisions, underbody, bed, hitch, and towing equipment first.",
      "XL, XLT, Lariat, FX4-equipped trucks, and Ranger Raptor have different starting equipment and should not share one automatic upgrade order.",
      "A Ranger Raptor may gain more from inspection, recovery, protection, and load planning than immediate suspension replacement.",
      "Plan spring and damper changes after bumper, winch, rack, tent, storage, and normal bed load are known."
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
        title: "Inspect the pickup before buying parts",
        paragraphs: [
          "Check tire pressure, age and wear, wheel damage, brakes, bearings, steering joints, tie rods, control arms, ball joints, CV boots, front coilovers or struts, regular-Ranger leaf packs and shocks, Raptor trailing arms, Watts link and Live Valve hardware where equipped, bump stops, lines, leaks, recovery provisions, skid plates, bed mounts, tie-downs, hitch, spare, and previous modifications.",
          "Record the payload label and exact towing configuration. Estimate occupants, normal cargo, permanent accessories, trailer tongue weight, and weight location. A pickup can exceed a load or axle limit without looking visibly overloaded."
        ],
        contextualLink: related.suspension
      },
      {
        type: "systems",
        id: "first-systems",
        title: "High-value first systems",
        items: [
          ["Tires and airing equipment", "Choose for weather, highway use, terrain, load, towing, durability, measured size, repair needs, pressure management, and spare compatibility."],
          ["Recovery", "Identify exact factory tow-hook and recovery provisions, then use compatible rated equipment and safe procedures."],
          ["Underbody protection", "Inspect factory skid and bash plates and prioritize exposed engine, transfer-case, fuel, differential, rocker, and underbody areas based on actual risk."],
          ["Bed storage", "Use secure tie-downs and lightweight removable organization before committing to heavy drawers, caps, or rack systems."],
          ["Rock and differential protection", "Select for the terrain and exact cab, frame, axle, FX4, or Raptor application while accounting for clearance, service access, and weight."],
          ["Suspension", "Repair wear first; change regular Ranger leaf or strut components, or Raptor-specific parts, only for a defined load, travel, control, durability, or clearance need."],
          ["Bumper and winch", "Confirm need, mounting, cooling, front load, spring and damping response, recovery access, electrical demand, and total payload."],
          ["Towing preparation", "Verify hitch, wiring, trailer brakes, cooling, tires, tongue weight, cargo, passengers, trailer ratings, and vehicle-specific documentation."]
        ]
      },
      {
        type: "scenarios",
        id: "build-order",
        title: "A practical first-upgrade order by use",
        items: [
          { title: "Daily driver", priority: "Maintenance, road-appropriate tires, brakes, steering, visibility, weather readiness, bed security, and ride.", wait: "Permanent heavy trail equipment.", data: "Commute, parking, passengers, bed use, climate, and highway behavior." },
          { title: "Mild trail use", priority: "Suitable tires, air system, recovery, essential protection, and secure storage.", wait: "Lift or wheel-offset change without measured need.", data: "Trim, FX4 equipment, terrain, trail partners, tow hooks, contact marks, and load." },
          { title: "Technical trail use", priority: "Traction, durable tires, protection, controlled travel, steering, recovery, and careful line choice.", wait: "Cosmetic height or parts that replace useful Raptor hardware without a clear reason.", data: "Raptor or regular architecture, differential equipment, tires, track width, compression clearance, and recovery route." },
          { title: "Towing and work use", priority: "Ratings, trailer match, hitch, brakes, cooling, tires, tongue weight, payload math, and stable load placement.", wait: "Springs used as permission to exceed labels.", data: "Engine, drivetrain, trailer, cargo, occupants, accessories, payload label, axle loads, and scale data." },
          { title: "Overland travel", priority: "Weight budget, lightweight bed storage, recovery, tires, essential protection, water, power, and loaded handling.", wait: "Rack, tent, drawers, armor, and spare systems before weighing the plan.", data: "Trip inventory, people, bed access, shelter, range, trailer use, configuration, and daily needs." }
        ]
      },
      {
        type: "comparison",
        id: "configuration-priorities",
        title: "Factory equipment changes the first priority",
        caption: "Verify exact US model-year content before using a trim or package name to select parts.",
        headers: ["Configuration", "Confirm", "Planning effect"],
        rows: [
          ["XL, XLT, or Lariat", "Engine, 4x2 or 4x4, tires, wheels, recovery provisions, protection, differential equipment, tow package, and payload label", "Condition, tires, recovery, protection, bed utility, or towing preparation may come before added height."],
          ["FX4-equipped Ranger", "Package availability, off-road-tuned shocks, tires, protection, locking rear differential, drive features, and tow hooks", "Preserve useful factory hardware while addressing the specific terrain, load, or clearance gap."],
          ["Ranger Raptor", "Live Valve dampers, unique control arms, Watts-link trailing-arm rear suspension, wide track, tires, wheels, lockers, drivetrain, payload, and towing", "Inspection, recovery, load planning, and driver practice may matter more than immediate suspension replacement."],
          ["Towing configuration", "Engine, drivetrain, tow package, hitch, cooling, payload label, brakes, tires, tongue weight, and trailer", "The exact pickup and trailer determine preparation; a published maximum is not universal."]
        ]
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "Upgrades to postpone until the plan is clear",
        items: [
          ["Immediate cosmetic lift", "Extra height can change CV and steering angles, alignment, droop, ride, braking, entry height, towing behavior, and stability without solving the first limitation."],
          ["Excessive wheel offset", "Moving the tire changes scrub radius, steering and bearing leverage, body coverage, and its path through compression and steering lock."],
          ["Heavy bed system by default", "Rack, cap, tent, drawers, refrigerator, battery, water, tools, and spare support consume payload every day."],
          ["Replacing Raptor dampers by assumption", "A generic damper is not automatically an improvement over the integrated Live Valve system. Define the load or performance problem first."],
          ["Springs before final load", "Regular Ranger leaf capacity or Raptor-specific spring and damper tuning should follow measured permanent load and empty behavior."],
          ["Treating regular and Raptor parts as interchangeable", "Control arms, shocks, rear architecture, track width, electronics, mounts, wheels, and body clearance differ."]
        ],
        contextualLink: related.overland
      },
      {
        type: "faq",
        id: "questions",
        title: "First-upgrade questions",
        items: [
          ["Should tires always be first?", "Not always. Mechanical condition, brakes, steering, recovery preparation, current tire condition, payload, and towing readiness can come first."],
          ["Does a Ranger Raptor need immediate suspension replacement?", "Not automatically. Its factory system may already match the use; change it only for a verified load, travel, durability, service, or handling need."],
          ["Does FX4 make an XLT or Lariat a Raptor?", "No. FX4 equipment can add useful trail hardware, but Raptor suspension, track width, drivetrain, axles, tires, and rear architecture are different."],
          ["Is a bed rack a first upgrade?", "Only when the cargo or shelter plan needs one and mounting, dynamic load, payload, height, and center-of-gravity effects are understood."]
        ]
      }
    ],
    related: [related.hub, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.raptor, sources.towing]
  },
  {
    key: "ford-ranger-suspension",
    kind: "article",
    route: "/vehicles/ford-ranger/suspension",
    title: "Ford Ranger Suspension Upgrade Guide | RigAI",
    description:
      "Plan 2024-present US Ford Ranger IFS, regular-trim rear leaves, Raptor Live Valve and Watts-link systems, geometry, load, and towing.",
    socialTitle: "Ford Ranger Suspension Upgrade Guide | RigAI",
    socialDescription:
      "Separate current regular Ranger suspension and load tuning from Ranger Raptor control-arm, Live Valve, and trailing-arm compatibility.",
    eyebrow: "Ford Ranger suspension guide",
    h1: "Ford Ranger Suspension Upgrade Guide",
    dek:
      "Choose suspension for the exact architecture, pickup weight, and job. Regular Ranger rear leaves and passive shocks require a different plan from Ranger Raptor Live Valve dampers and trailing-arm Watts-link rear suspension.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "Regular XL, XLT, and Lariat Rangers use independent front suspension with a solid rear axle and leaf springs.",
      "Ranger Raptor uses unique control arms, FOX Live Valve dampers, a wider track, and trailing-arm Watts-link rear suspension.",
      "Separate permanent bed equipment, temporary payload, passengers, and tongue weight before selecting springs or damping.",
      "Excessive front lift can reduce droop and increase CV, ball-joint, tie-rod, steering, and alignment demands."
    ],
    toc: [
      ["direct-answer", "How to choose suspension"],
      ["regular-ranger", "Regular Ranger system"],
      ["raptor-system", "Ranger Raptor system"],
      ["load-cases", "Load and use cases"],
      ["geometry", "IFS geometry chain"],
      ["checks", "Verification checks"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Identify the architecture before selecting parts",
        paragraphs: [
          "Start with model year, trim, engine, drivetrain, FX4 or Raptor configuration, ride height, representative axle weights, normal bed load, passengers, accessories, tongue weight, tire and wheel mass, current spring and damper condition, alignment, CV joints, steering, bump stops, and exact factory suspension.",
          "Front lift changes independent-suspension operating angles and available droop. Regular Ranger rear leaf selection changes empty-bed ride and loaded support. Raptor rear tuning involves trailing arms, Watts-link location, Raptor-specific springs, electronic dampers, mounts, and factory control logic."
        ],
        contextualLink: related.lift
      },
      {
        type: "systems",
        id: "regular-ranger",
        title: "Regular Ranger suspension and steering",
        items: [
          ["Front coilovers or strut assemblies", "Support the front and control wheel motion; verify exact engine, drivetrain, trim, FX4 equipment, mount, spring rate, damping, travel, and ride height."],
          ["Upper and lower control arms", "Locate the front wheel and influence alignment range, ball-joint angles, tire clearance, droop, compression, and strength."],
          ["CV joints and front axles", "Operate through angles that change with ride height, droop, steering, and travel; inspect boots, plunge, and full-motion clearance."],
          ["Tie rods and steering", "Wheel offset, tire mass, lift, alignment, trail impacts, and steering angle affect load and wear."],
          ["Rear solid axle and leaf springs", "Support empty and loaded weight; pack design, rate, progression, axle wrap, travel, bushings, and intended constant load matter."],
          ["Outboard rear shocks", "Control leaf and axle motion; length, damping, heat capacity, mounts, compression, droop, and load must match the system."],
          ["Bump stops", "Protect tires, shocks, leaves, lines, body, and axle components while defining usable compression travel."],
          ["Driveshafts, brake lines, and wiring", "Check slip, joint angles, routing, brackets, slack, abrasion, and clearance where a change makes it relevant."]
        ]
      },
      {
        type: "systems",
        id: "raptor-system",
        title: "Ranger Raptor is a separate suspension application",
        items: [
          ["Front architecture", "Forged aluminum control-arm hardware, wide track, long travel, steering, frame mounts, and Raptor-specific geometry require exact parts."],
          ["FOX Live Valve dampers", "Front coil-over and rear reservoir dampers combine internal bypass tuning, sensors, drive-mode logic, mounts, travel, and thermal management."],
          ["Rear trailing arms", "Locate the rear axle longitudinally and move through a different travel path from regular Ranger leaf springs."],
          ["Watts link", "Controls lateral axle position through travel; links, pivots, mounts, clearance, ride height, and articulation must remain compatible."],
          ["Factory springs and bump control", "Support the Raptor architecture and tuned travel; accessory weight can alter ride height, damping demand, body control, and available capacity."],
          ["Electronic integration", "Live Valve operation depends on vehicle sensors, software, wiring, modes, and calibrated hardware; replacement requires system-level compatibility."],
          ["Wide track and tires", "Control arms, wheel position, bodywork, steering, compression clearance, and spare strategy differ from regular configurations."],
          ["Compatibility limit", "Standard Ranger leaf, shock, control-arm, spacer, and lift guidance must not be applied to Raptor without explicit application support."]
        ]
      },
      {
        type: "scenarios",
        id: "load-cases",
        title: "Different loads require different tuning",
        items: [
          { title: "Empty-bed daily use", priority: "Compliance, steering precision, braking stability, body control, and low-speed ride.", wait: "Heavy constant-load regular-Ranger leaves or Raptor changes without regular permanent weight.", data: "Empty ride height, axle weights, tire pressure, commute, passengers, architecture, and damper condition." },
          { title: "Permanent rack and tent", priority: "Measured constant weight, appropriate rear support, damping, body control, center of gravity, and rear load.", wait: "Spring selection based only on accessory names.", data: "Rack, cap, tent, drawers, battery, spare, tools, architecture, and cargo weights." },
          { title: "Temporary payload", priority: "Stay within labels, distribute and secure cargo, set pressures, and confirm loaded handling.", wait: "Permanent stiff springs used only for rare loads without considering empty ride.", data: "Cargo weight, location, passengers, axle loads, trip frequency, and unloading behavior." },
          { title: "Towing and tongue weight", priority: "Payload math, hitch setup, rear load, stable ride height, damping, brakes, tires, and trailer control.", wait: "Suspension changes used to exceed ratings or hide poor loading.", data: "Engine, drivetrain, trailer, tongue weight, hitch, cargo, occupants, ratings, and scale data." },
          { title: "Technical or faster trail use", priority: "Controlled travel, tire contact, steering, CV operation, bump control, heat management, protection, and recovery.", wait: "Excessive front lift or unverified Raptor changes that harm geometry or control.", data: "Architecture, track width, dampers, tires, full-motion clearance, load, terrain, and recovery plan." }
        ]
      },
      {
        type: "dependency",
        id: "geometry",
        title: "How suspension changes propagate",
        steps: [
          ["Front ride height changes", "Control-arm position, ball-joint and CV angles, tie-rod angle, caster, camber, toe, droop, compression, and steering behavior."],
          ["Permanent weight changes", "Spring compression, ride height, damping demand, axle load, braking, body control, and available payload."],
          ["Regular Ranger leaf changes", "Empty and loaded stance, ride, axle wrap, bump timing, shock demand, articulation, and towing response."],
          ["Raptor ride-height changes", "Control arms, trailing arms, Watts-link position, Live Valve operating range, bump control, sensors, alignment, and calibrated behavior."],
          ["Larger tires and wheel offset", "Steering load, scrub radius, clearance path, gearing, braking, unsprung mass, and wheel-bearing leverage."]
        ],
        text:
          "Longer shocks alone are not a complete suspension system. Verify springs, arms, joints, CV axles, tie rods, shocks, bump stops, links, brake lines, ABS wiring, driveshafts, tires, and alignment through intended motion."
      },
      {
        type: "checklist",
        id: "checks",
        title: "Suspension verification checklist",
        items: [
          "Exact US model year, trim, engine, drivetrain, FX4 or Raptor configuration, ride height, dampers, springs or leaves, links, wheels, tires, and prior modifications",
          "Representative permanent load, temporary cargo, passengers, trailer tongue weight, payload, and front and rear axle loads",
          "Ride height and side-to-side stance empty and at intended operating load",
          "Caster, camber, toe, steering-wheel position, complete alignment results, and available adjustment range",
          "Control arms, ball joints, CV joints and boots, tie rods, sway bars, and full-steering clearance",
          "Regular Ranger leaf, U-bolt, axle-wrap, shock, and bump-stop behavior through compression and droop",
          "Raptor trailing-arm, Watts-link, Live Valve, wiring, sensor, mount, and full-travel compatibility where applicable",
          "Loaded braking, lane changes, crosswind response, trailer behavior, noises, fastener checks, and reinspection"
        ],
        note:
          "Upper control arms and other geometry parts are not automatically required for every lifted regular Ranger. Measurements, alignment results, travel, and component instructions decide."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common suspension mistakes",
        items: [
          ["Treating regular Ranger and Raptor alike", "Front hardware, rear architecture, shocks, track width, electronics, mounts, tuning, and load behavior differ."],
          ["Assuming replacement shocks are better", "A replacement must solve a defined heat, damping, load, travel, service, or durability problem; generic dampers are not automatically better than Live Valve."],
          ["Choosing regular-Ranger leaves by lift number", "Permanent load, empty ride, progression, travel, damping, towing, and axle behavior matter as much as nominal height."],
          ["Adding longer shocks alone", "Shock length must work with springs, bump stops, arms, CV joints, lines, wiring, travel, and mounts."],
          ["Ignoring trailer tongue weight", "Tongue weight consumes payload and affects rear load, front response, damping demand, braking, and stability."],
          ["Assuming every lift needs upper control arms", "Actual height, alignment range, ball-joint angles, travel, wheel position, and manufacturer instructions determine the need."]
        ]
      }
    ],
    related: [related.hub, related.first, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.raptor, sources.towing]
  },
  {
    key: "ford-ranger-tire-size",
    kind: "article",
    route: "/vehicles/ford-ranger/tire-size",
    title: "Ford Ranger Tire Size and Fitment Guide | RigAI",
    description:
      "Evaluate 2024-present US Ford Ranger tire fitment by trim, FX4 or Raptor setup, measured size, wheels, steering, compression, load, and spare.",
    socialTitle: "Ford Ranger Tire Size and Fitment Guide | RigAI",
    socialDescription:
      "A current US Ranger tire guide covering configuration, track width, wheels, dynamic clearance, braking, towing, and under-bed spare fitment.",
    eyebrow: "Ford Ranger tire fitment guide",
    h1: "Ford Ranger Tire Size and Fitment Guide",
    dek:
      "Fitment is a motion-and-load question, not one advertised diameter. Trim, FX4 or Raptor configuration, suspension, track width, wheels, offset, actual tire dimensions, steering, compression, alignment, and cargo all affect clearance.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size and fitment"),
    takeaways: [
      "Street-driving clearance does not prove clearance at steering lock and full suspension compression.",
      "Ranger Raptor factory fitment does not prove the same tire fits XL, XLT, or Lariat.",
      "Nominal sizes vary by manufacturer, model, wheel width, pressure, and load; use published and measured dimensions.",
      "Larger tires affect braking, steering load, effective gearing, acceleration, fuel use, towing, payload, and spare storage."
    ],
    toc: [
      ["direct-answer", "How to verify fitment"],
      ["configuration-baseline", "Configuration baselines"],
      ["dimensions", "Tire and wheel variables"],
      ["clearance", "Dynamic clearance"],
      ["tradeoffs", "Driving and load trade-offs"],
      ["checklist", "Fitment checklist"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Verify the exact pickup through full motion",
        paragraphs: [
          "Record US model year, trim, engine, drivetrain, FX4 or Raptor configuration, factory suspension and ride height, track width, wheel width, offset and backspacing, tire model and measured dimensions, alignment, bodywork, liners, mud flaps, bumpers, load, and previous modifications.",
          "Check both front tires at full left and right steering lock while the suspension moves through compression. Inspect control arms, inner fenders, liners, bumper edges, mud flaps, brake hoses, wiring, and bodywork. Then verify rear compression and under-bed spare storage."
        ],
        contextualLink: related.lift
      },
      {
        type: "comparison",
        id: "configuration-baseline",
        title: "Factory tire baselines differ by configuration",
        caption: "Confirm the door label, US build information, wheel markings, and installed equipment on the individual pickup.",
        headers: ["Configuration", "Verify", "Why copying fitment fails"],
        rows: [
          ["XL, XLT, or Lariat", "Factory tire, wheel size, offset, engine, drivetrain, ride height, liners, bodywork, and payload", "Wheel and tire packages vary, and a Raptor application uses different stance, suspension, and body clearance."],
          ["FX4-equipped Ranger", "Package-specific tires, wheels, shocks, protection, differential equipment, ride height, and load", "FX4 does not automatically reproduce Raptor track width, control arms, bodywork, or travel."],
          ["Ranger Raptor", "Factory tires, wheels, wide track, unique control arms, Live Valve suspension, trailing-arm rear layout, bodywork, and spare storage", "Its complete factory package is not a universal compatibility template for regular Ranger trims."]
        ]
      },
      {
        type: "systems",
        id: "dimensions",
        title: "Tire and wheel variables",
        items: [
          ["Actual diameter", "Manufacturer specifications and measured mounted diameter can differ from the nominal sidewall calculation."],
          ["Section and tread width", "Both affect control-arm, liner, body, bumper, and mud-flap clearance; wheel width and pressure change mounted shape."],
          ["Wheel width", "Must suit the tire's approved range and changes sidewall shape, protection, bead behavior, and measured width."],
          ["Offset and backspacing", "Move the tire relative to suspension and body, changing inner clearance, outer sweep, scrub radius, bearing leverage, and coverage."],
          ["Track width", "Ranger Raptor's wider stance and unique control arms cannot be recreated or ignored using tire diameter alone."],
          ["Alignment", "Caster, camber, toe, ride height, and control-arm position change the tire path during steering and travel."],
          ["Tire construction", "Load range, casing, tread, sidewall, mass, pressure, speed rating, and terrain affect ride, grip, braking, and durability."],
          ["Spare storage", "Measure the inflated tire against the under-bed hoist, frame, hitch, exhaust, heat shields, lines, axle motion, and access path."]
        ]
      },
      {
        type: "dependency",
        id: "clearance",
        title: "Dynamic clearance chain",
        steps: [
          ["Steering reaches full lock", "The front tire sweeps toward control arms, liners, bodywork, bumper edges, mud flaps, and fenders."],
          ["Suspension compresses", "The tire rises and changes position relative to liners, body, bump stops, arms, hoses, wiring, and nearby hardware."],
          ["Wheel offset changes", "Inner and outer clearances trade places while scrub radius, steering load, and bearing leverage change."],
          ["Vehicle load increases", "Static ride height and available compression change, making representative loaded checks necessary."],
          ["Trail forces combine", "Steering, articulation or independent wheel travel, body roll, and impacts can reduce clearance beyond a level-road test."]
        ],
        text:
          "Static parking-lot or street clearance is only the first check. Validate steering and suspension motion without placing anyone beneath an unsupported vehicle."
      },
      {
        type: "systems",
        id: "tradeoffs",
        title: "Larger-tire trade-offs",
        items: [
          ["Braking", "More diameter and mass can increase braking demand and change response, especially with passengers, cargo, or a trailer."],
          ["Gearing and axle ratio", "Effective gearing becomes taller as diameter increases, changing launch, grade response, transmission behavior, and engine braking."],
          ["Steering and durability", "Mass and wheel position increase loads on tie rods, ball joints, bearings, control arms, steering, and suspension."],
          ["Fuel economy", "Rolling resistance, tread, pressure, mass, width, and aerodynamics can reduce efficiency."],
          ["Speedometer behavior", "A different rolling circumference can change indicated speed and distance; verify correction options for the exact model year."],
          ["Payload and towing", "Heavier wheels, tires, and spare support consume capacity and can affect acceleration, braking, cooling, stability, and trailer response."],
          ["Unsprung weight", "Added mass can make the suspension work harder over rough surfaces and affect ride and tire control."],
          ["Spare strategy", "A matching spare must fit its storage or carrier, remain accessible, and be included in payload and departure-clearance planning."]
        ]
      },
      {
        type: "checklist",
        id: "checklist",
        title: "Ford Ranger tire fitment checklist",
        items: [
          "US model year, trim, engine, drivetrain, FX4 or Raptor configuration, suspension, ride height, track width, bodywork, liners, bumpers, mud flaps, and prior modifications",
          "Tire manufacturer, model, nominal size, measured diameter, section width, tread width, load rating, pressure range, and approved wheel width",
          "Wheel diameter, width, offset, backspacing, center bore, bolt pattern, load rating, brake clearance, and hardware",
          "Full left and right steering lock at static height and controlled compression",
          "Control-arm, tie-rod, sway-bar, liner, body, bumper, fender, mud-flap, hose, and wiring clearance",
          "Rear compression clearance and under-bed spare fit against frame, hitch, exhaust, heat shields, hoist, lines, and axle motion",
          "Alignment, braking, steering return, vibration, speed indication, acceleration, transmission behavior, and loaded road test",
          "Payload, towing, tire capacity, wheel capacity, spare support, fastener torque, and post-use inspection"
        ],
        note:
          "No one largest tire size applies to every 2024-present US Ranger. Verify the complete configuration and actual tire."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common tire-fitment mistakes",
        items: [
          ["Copying Raptor fitment to a regular Ranger", "Track width, control arms, suspension travel, wheels, bodywork, steering, and clearance differ."],
          ["Testing only on level pavement", "Steering and compression together can reveal interference that ordinary driving does not."],
          ["Ignoring offset", "The same tire on a different wheel follows a different path and changes steering and bearing loads."],
          ["Using nominal dimensions only", "Real tires vary by brand, model, wheel width, pressure, wear, and production tolerance."],
          ["Forgetting the spare", "An under-bed tire can interfere with the frame, hitch, exhaust, heat shields, lines, or access even when the road tires clear."],
          ["Ignoring towing and payload", "Added rotating and spare weight affects available capacity, braking, acceleration, cooling, and trailer response."]
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.raptor, sources.towing]
  },
  {
    key: "ford-ranger-lift-kit",
    kind: "article",
    route: "/vehicles/ford-ranger/lift-kit",
    title: "Ford Ranger Lift Kit Guide | RigAI",
    description:
      "Compare 2024-present US Ford Ranger leveling, coilover, leaf, shock, and complete lift systems with separate Ranger Raptor compatibility.",
    socialTitle: "Ford Ranger Lift Kit Guide | RigAI",
    socialDescription:
      "Choose a current US Ranger lift around configuration, IFS geometry, travel, tires, rear load, towing, and Raptor-specific hardware.",
    eyebrow: "Ford Ranger lift-kit guide",
    h1: "Ford Ranger Lift Kit Guide",
    dek:
      "Lift height alone does not describe suspension quality. Match the exact regular Ranger or Raptor architecture, tire goal, IFS geometry, rear load, travel, ride, towing, and installation requirements.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Lift kits"),
    takeaways: [
      "Regular Ranger leveling and leaf-spring guidance must not be applied automatically to Ranger Raptor.",
      "A spacer can change stance without automatically increasing usable travel or improving damping.",
      "Excessive front lift can reduce droop and increase CV, ball-joint, tie-rod, steering, and alignment demands.",
      "Altering Raptor ride height can affect Live Valve operating range, control arms, trailing arms, Watts link, bump control, sensors, and factory tuning."
    ],
    toc: [
      ["direct-answer", "How to choose a lift"],
      ["regular-approaches", "Regular Ranger approaches"],
      ["intent", "Choose by intent"],
      ["raptor", "Raptor compatibility"],
      ["supporting-parts", "Supporting systems"],
      ["geometry", "Geometry chain"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Start with purpose and exact factory configuration",
        paragraphs: [
          "Measure current front and rear ride height empty and at representative load. Record US model year, trim, engine, drivetrain, FX4 or Raptor configuration, factory suspension, tires, wheels, alignment, front accessories, permanent bed load, passengers, tongue weight, and desired use.",
          "A mild regular-Ranger daily-driver level, larger-tire clearance plan, technical trail system, constant-load overland setup, towing configuration, and Raptor-specific change solve different problems. One universal height cannot serve them all."
        ],
        contextualLink: related.suspension
      },
      {
        type: "comparison",
        id: "regular-approaches",
        title: "Regular Ranger lift approaches",
        caption: "These approaches do not automatically apply to Ranger Raptor.",
        headers: ["Approach", "What it changes", "Key checks"],
        rows: [
          ["Leveling or top spacer", "Front static height and stance without automatically changing spring or damper quality", "Trim, FX4, droop, compression, CV and ball-joint angles, alignment, bump stops, ride, and loaded stance"],
          ["Preload spacer where applicable", "Spring preload and installed height, often with ride and travel trade-offs", "Exact assembly, rate, top-out behavior, droop, damping, alignment, and instructions"],
          ["Replacement front coilover or strut", "Spring, damping, height, and travel as an application-specific assembly", "Engine, drivetrain, trim, FX4, mounts, control arms, CV joints, tie rods, bump stops, lines, tires, and alignment"],
          ["Rear block or add-a-leaf", "Rear stance or support with different effects on leaf behavior", "Axle location, U-bolts, wrap, shock length, bump stops, empty ride, permanent load, towing, and installation"],
          ["Replacement leaf pack", "Rear rate, progression, support, height, and travel", "Measured constant load, empty-bed comfort, bushings, shocks, brake lines, payload, and towing behavior"],
          ["Complete regular-Ranger system", "Height, spring support, damping, geometry, bump control, and travel as a package", "Exact trim, FX4, tires, payload, towing, alignment, installation, and maintenance"]
        ]
      },
      {
        type: "scenarios",
        id: "intent",
        title: "Choose regular Ranger lift strategy by purpose",
        items: [
          { title: "Visual leveling", priority: "Minimal change with measured stance, adequate droop, compression, alignment, steering, and loaded behavior.", wait: "Height that creates poor ride or towing stance.", data: "Current rake, payload, tongue weight, front accessories, trim, and suspension." },
          { title: "Mild trail and daily use", priority: "Ride quality, controlled travel, alignment, modest clearance, reliable steering, and road behavior.", wait: "Complexity and height beyond the trail need.", data: "Terrain, tires, commute, passengers, load, and FX4 equipment." },
          { title: "Larger tire clearance", priority: "Measured tire path, wheels, bodywork, bump stops, steering, compression, gearing, braking, and spare.", wait: "Assuming static height guarantees fitment.", data: "Actual tire dimensions, offset, steering lock, compression, load, and prior changes." },
          { title: "Frequent technical use", priority: "IFS geometry, travel, damping, steering, CV operation, protection, recovery, stability, and serviceability.", wait: "Maximum height without a complete motion plan.", data: "Obstacles, FX4 hardware, tires, load, full-motion clearance, and recovery." },
          { title: "Heavy overland load", priority: "Measured permanent weight, appropriate rear leaf support, damping, axle load, braking, and center of gravity.", wait: "Leaves selected before rack, tent, storage, water, power, and spare planning.", data: "Axle weights, trip inventory, daily unloaded use, passengers, and trailer." },
          { title: "Towing and work use", priority: "Ratings, stable geometry, payload, tongue weight, axle load, tires, brakes, damping, and predictable handling.", wait: "Lift used to mask overload or poor hitch setup.", data: "Engine, drivetrain, trailer, hitch, cargo, occupants, scale data, and instructions." }
        ]
      },
      {
        type: "systems",
        id: "raptor",
        title: "Ranger Raptor lift requires a separate method",
        items: [
          ["Application", "Use only parts and procedures explicitly designed for the current US Ranger Raptor architecture and model year."],
          ["FOX Live Valve system", "Ride-height changes can alter damper position, bypass zones, electronic response, travel, heat behavior, wiring, and calibrated control."],
          ["Front control arms", "Unique geometry, wide track, joints, mounts, steering, CV operation, bump control, and wheel path require exact verification."],
          ["Rear architecture", "Trailing arms, Watts link, Raptor-specific springs, dampers, mounts, bump control, lines, and axle path differ from regular leaf-spring Ranger."],
          ["Spacer or perch-collar changes", "Do not assume they are safe or complete; verify travel, top-out, compression, damper range, springs, geometry, sensors, and instructions."],
          ["Load and towing", "Changes do not increase payload or towing ratings and can alter stance, body control, braking, stability, and trailer behavior."],
          ["Tires and body clearance", "Wide track and Raptor bodywork do not eliminate the need to check measured tire path at steering lock and compression."],
          ["Factory tuning", "A change should solve a defined clearance, load, travel, service, or behavior need rather than replace integrated factory hardware by default."]
        ]
      },
      {
        type: "systems",
        id: "supporting-parts",
        title: "Supporting systems to verify",
        items: [
          ["Upper control arms", "Alignment range, ball-joint angle, droop, compression, tire clearance, strength, and exact application; the need must be measured."],
          ["CV joints and axles", "Operating angle, boot clearance, binding, plunge, steering, droop, compression, and service condition."],
          ["Tie rods and steering", "Angles, joint range, wheel offset, tire mass, steering lock, trail impacts, and alignment."],
          ["Bump stops", "Tire and body clearance, shock protection, retained uptravel, mounts, and exact regular or Raptor application."],
          ["Regular-Ranger blocks, leaves, and U-bolts", "Axle location, wrap, support, progression, fastener length, bump timing, shock travel, and load."],
          ["Shocks", "Compressed and extended length, damping, heat, mounts, spring or leaf motion, brake-line limits, load, and electronic integration where equipped."],
          ["Lines, wiring, and driveshafts", "Routing, brackets, slack, abrasion, joint angle, slip, compression, droop, steering, and nearby components."],
          ["Alignment and road test", "Caster, camber, toe, steering-wheel position, braking, return-to-center, lane changes, loaded behavior, and reinspection."]
        ]
      },
      {
        type: "dependency",
        id: "geometry",
        title: "Why lift height is only one input",
        steps: [
          ["Front ride height changes", "Control-arm, ball-joint, CV, tie-rod, caster, camber, toe, droop, compression, and steering relationships."],
          ["Spacer or preload changes", "Static position without automatically adding damper stroke, wheel travel, cooling, or load capacity."],
          ["Tire and wheel changes", "Clearance, effective gearing, braking, steering load, unsprung mass, scrub radius, and spare packaging."],
          ["Regular-Ranger rear changes", "Empty and loaded stance, leaf behavior, axle wrap, bump timing, shock demand, and towing response."],
          ["Raptor rear changes", "Trailing-arm and Watts-link position, spring and Live Valve range, bump control, sensors, axle path, and factory tuning."]
        ],
        text:
          "There is no universal supporting-parts list for every 2-inch or 3-inch claim. Actual change, architecture, alignment, motion, tire path, load, and component instructions determine what is required."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common lift mistakes",
        items: [
          ["Buying only by advertised height", "Spring rate, damper travel, damping, geometry, load, bump control, steering, and installation define system quality."],
          ["Assuming spacers add travel", "A spacer changes position but does not automatically increase shock stroke, droop, compression, or useful wheel travel."],
          ["Applying a regular Ranger kit to Raptor", "Control arms, rear architecture, Live Valve dampers, mounts, track width, electronics, bodywork, and travel differ."],
          ["Ignoring permanent bed load", "Rack, cap, tent, drawers, battery, spare, tools, water, and tongue weight change spring and damper requirements."],
          ["Treating control arms as universal", "Need depends on actual height, alignment, ball-joint angle, droop, tire clearance, architecture, and design."],
          ["Correcting overload with height", "A level stance does not prove compliance with payload, axle, tire, hitch, or towing limits."]
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.model, sources.technical, sources.raptor, sources.towing]
  },
  {
    key: "ford-ranger-overland-build",
    kind: "article",
    route: "/vehicles/ford-ranger/overland-build",
    title: "Ford Ranger Overland Build Guide | RigAI",
    description:
      "Build a 2024-present US Ford Ranger overland plan around payload, bed load, racks, tents, towing, recovery, power, suspension, and daily use.",
    socialTitle: "Ford Ranger Overland Build Guide | RigAI",
    socialDescription:
      "A staged current US Ranger framework for payload, bed systems, towing, recovery, power, regular rear leaves, Raptor suspension, and loaded handling.",
    eyebrow: "Ford Ranger overland guide",
    h1: "Ford Ranger Overland Build Guide",
    dek:
      "Plan the trip and calculate every permanent and travel load before choosing suspension. A pickup bed does not make bumpers, winch, protection, rack, tent, drawers, power, water, fuel, passengers, or trailer tongue weight disappear.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "Use the exact payload label and include occupants, permanent accessories, bed cargo, rack or tent equipment, and trailer tongue weight.",
      "Keep heavy cargo low, secure, and sensibly distributed while preserving bed access, rear capacity, braking, and departure clearance.",
      "Calculate rack, cap, tent, drawer, battery, bumper, armor, winch, and spare weight before selecting regular-Ranger leaves or changing Raptor suspension.",
      "Build in stages so actual trips and measured loaded behavior decide whether heavier systems are justified."
    ],
    toc: [
      ["trip-first", "Start with the trip"],
      ["payload-plan", "Payload planning"],
      ["cargo-systems", "Bed and travel systems"],
      ["suspension-plan", "Suspension by architecture"],
      ["weight-chain", "Weight dependency chain"],
      ["staged-build", "Staged build"],
      ["loaded-checks", "Loaded checks"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "trip-first",
        title: "Define the trip before the equipment",
        paragraphs: [
          "Record trip duration, terrain, weather, people, sleeping plan, food, water, fuel, recovery, tools, spare, bed access, daily-driving needs, trailer use, and resupply opportunities. A weekend near services needs a different pickup from remote travel with passengers and a trailer.",
          "Trim and factory equipment affect starting traction, clearance, protection, suspension, payload, and towing. XL, XLT, Lariat, FX4-equipped trucks, and Ranger Raptor do not share one capacity or suspension answer."
        ],
        contextualLink: related.suspension
      },
      {
        type: "comparison",
        id: "payload-plan",
        title: "Build a complete payload plan",
        caption: "Use the exact vehicle labels, manual, Ford towing guide, component ratings, and scale data where available.",
        headers: ["Load group", "Include", "Why it matters"],
        rows: [
          ["Vehicle occupants", "Driver, passengers, child seats, pets, and personal items", "Consumes payload and affects axle loads before bed equipment is added"],
          ["Permanent accessories", "Bumpers, winch, skid plates, rock protection, rack, cap, tent, drawers, battery, compressor, spare support, and tools", "Changes everyday curb weight, spring position, damping, braking, and available payload"],
          ["Trip cargo", "Food, water, fuel, refrigerator contents, shelter, clothing, recovery gear, and sports equipment", "Varies by trip and must be secured and distributed"],
          ["Trailer tongue weight", "Loaded force at the hitch plus hitch or weight-distribution hardware", "Consumes payload and changes rear load, front response, ride height, and stability"],
          ["Rack and tent load", "Bed rack or cap, tent, awning, accessories, and occupants where permitted", "Must satisfy every component's static and dynamic ratings and raises center of gravity"]
        ]
      },
      {
        type: "systems",
        id: "cargo-systems",
        title: "Plan travel systems around load and access",
        items: [
          ["Bed rack or cap", "Mount ratings, bed compatibility, dynamic load, tent, weather sealing, visibility, tailgate and bed access, height, weight, and noise."],
          ["Rooftop and bed-mounted tents", "Rack or cap approval, static and dynamic ratings, occupants, bedding, wind, center of gravity, setup space, and daily removal needs."],
          ["Drawers and storage", "Empty system weight, cargo restraint, access, dust and water protection, rear load, removability, and service access."],
          ["Refrigerator and power", "Duty cycle, auxiliary battery, wiring, fusing, charging, solar, ventilation, mounting, service access, and total weight."],
          ["Water and fuel", "Required volume, legal container, ventilation, restraint, heat, low placement, changing weight, range need, and separation from ignition sources."],
          ["Recovery and protection", "Rated recovery provisions, recovery gear, winch, bumpers, skid plates, rock protection, mounting, access, training, and permanent weight."],
          ["Spare and carrier", "Measured tire, under-bed space, hitch and exhaust clearance, hoist, tools, alternative support, departure area, and payload."],
          ["Roof and rack load", "Vehicle, rack, cap, tent, and accessory static and dynamic limits, mounting points, wind load, center of gravity, and total payload."]
        ]
      },
      {
        type: "systems",
        id: "suspension-plan",
        title: "Tune suspension only after the load plan",
        items: [
          ["Regular Ranger rear leaves", "Choose pack capacity and progression for measured permanent weight, temporary cargo, empty-bed ride, towing, travel, and shock damping."],
          ["Regular Ranger rear shocks", "Match damping, length, heat capacity, mounts, bump stops, leaf motion, and representative loaded behavior."],
          ["Ranger Raptor springs and links", "Treat trailing arms, Watts link, springs, mounts, travel, bump control, ride height, and load as a Raptor-specific system."],
          ["Ranger Raptor Live Valve", "Accessory weight and ride-height changes can alter damper position, bypass operation, electronic response, heat, body control, and factory tuning."],
          ["Front suspension", "Account for bumper, winch, skid, tire and wheel weight, ride height, CV and steering angles, alignment, droop, compression, and braking."],
          ["Loaded verification", "Measure ride height and axle loads, then test braking, lane changes, crosswinds, rough-road control, heat, and trailer behavior at representative load."]
        ]
      },
      {
        type: "dependency",
        id: "weight-chain",
        title: "Why accessory weight compounds",
        steps: [
          ["Steel bumpers, winch, and protection", "Consume payload, add axle load, change spring position and damping demand, and increase braking work."],
          ["Bed rack, cap, tent, and drawers", "Add permanent rear and elevated weight before trip supplies or passengers."],
          ["Battery, refrigerator, water, and fuel", "Add electrical complexity and variable cargo weight that must be secured and distributed."],
          ["Larger spare and recovery gear", "Add rear or bed load and can affect under-bed clearance, departure space, and access."],
          ["Passengers and trailer tongue weight", "Use remaining payload and can shift loads, ride height, steering response, braking, and stability."]
        ],
        text:
          "Steel bumpers, winch, skid plates, bed rack, rooftop tent, drawers, refrigerator, auxiliary battery, water, fuel, recovery gear, passengers, and tongue weight can overload a Ranger when combined. Calculate the complete system."
      },
      {
        type: "sequence",
        id: "staged-build",
        title: "A staged Ranger overland build",
        intro:
          "Use actual trips and measured weights to decide whether the next stage is necessary.",
        items: [
          ["Stage 1: reliability and essentials", "Complete maintenance, tires, brakes, recovery equipment, communication, basic tools, and essential underbody or rocker protection."],
          ["Stage 2: lightweight travel", "Add removable bed storage, shelter, cooking, modest water, and camping equipment while preserving payload and bed access."],
          ["Stage 3: weigh and tune", "Measure permanent and representative trip load, distribution, ride height, braking, handling, and tire pressure, then tune the correct suspension architecture if needed."],
          ["Stage 4: justified advanced systems", "Add armor, electrical systems, larger spare support, rack, tent, winch, or specialized equipment only when repeated use supports the weight and complexity."]
        ]
      },
      {
        type: "checklist",
        id: "loaded-checks",
        title: "Check the pickup at representative travel load",
        items: [
          "Payload, front and rear loads, tire and wheel ratings, hitch limits, trailer limits, and rack, cap, or tent static and dynamic ratings",
          "Cargo restraint, bed mounts, rack fasteners, tent mounts, drawers, refrigerator, battery, water, fuel, spare, and recovery equipment",
          "Ride height, regular-Ranger leaf or Raptor-specific spring position, shock control, bump clearance, steering, body roll, and crosswind response",
          "Tire pressure, temperature, full-compression clearance, braking, acceleration, transmission behavior, cooling, and fuel range",
          "Trailer tongue weight, hitch setup, wiring, brakes, safety chains, sway behavior, mirrors, and legal requirements where towing",
          "Departure angle, hitch, spare, exhaust, bumper, bed corners, and low-mounted equipment on intended terrain",
          "Bed and tailgate access, rear-seat use, visibility, security, daily parking, roof-load and rack-load limits, and emergency access",
          "Post-trip fastener torque, wear, leaks, wiring abrasion, mount movement, tire damage, brake condition, and weight changes"
        ],
        note:
          "Recheck after changing passengers, trailer, water, fuel, storage, spare, rack, cap, tent, protection, or other major load."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Ranger overland mistakes",
        items: [
          ["Starting with a heavy catalog build", "Every steel, storage, shelter, electrical, recovery, and spare system consumes payload and adds maintenance."],
          ["Assuming all trims share ratings", "Payload and towing vary with model year, trim, engine, drivetrain, equipment, options, hitch, passengers, cargo, and accessories."],
          ["Choosing suspension before weighing", "Regular leaves or Raptor-specific changes should respond to measured permanent load and representative trip behavior."],
          ["Mounting everything high", "Rack, tent, fuel, water, spare, and cargo above the bed increase center of gravity, body roll, crosswind response, and rollover risk."],
          ["Blocking bed access", "A system that makes tools, recovery gear, spare equipment, common cargo, or emergency items hard to reach can fail its daily purpose."],
          ["Treating Raptor capability as unlimited capacity", "Factory trail equipment does not remove payload, axle, tire, braking, towing, or component-rating limits."]
        ],
        contextualLink: related.first
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.lift],
    safety,
    sources: [sources.model, sources.technical, sources.raptor, sources.towing, sources.manuals]
  }
];
