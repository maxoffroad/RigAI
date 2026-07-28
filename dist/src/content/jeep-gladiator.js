const dates = {
  published: "2026-07-28T18:00:00+05:00",
  modified: "2026-07-28T18:00:00+05:00",
  reviewedLabel: "July 28, 2026"
};

const vehicle = {
  slug: "jeep-gladiator",
  name: "Jeep Gladiator JT",
  shortName: "Gladiator",
  guidesLabel: "Jeep Gladiator",
  heroLabel: "GLADIATOR JT",
  ctaLabel: "Build My Setup",
  planInputs:
    "model year, trim, engine, transmission, axle and transfer-case equipment, factory tires, suspension package, towing equipment, payload label, current accessories, bed load, trailer tongue weight, driving profile, and planned trip load"
};

const scope = {
  title: "Vehicle scope: 2020-present Jeep Gladiator JT",
  text:
    "This guide covers US-market Jeep Gladiator JT pickups from 2020 to the present. Equipment varies by model year, trim, engine, transmission, axle, transfer case, factory tire and suspension package, tow package, roof, payload configuration, and previous modification."
};

const safety = {
  title: "Safety, load, towing, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, tire and loading label, towing guide, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify model year, trim, engine, transmission, axles, axle ratio, transfer case, tow equipment, payload label, gross and axle weight limits, wheel dimensions, measured tire size, suspension travel, steering, brakes, trailer requirements, permanent accessories, cargo, passengers, and tongue weight before purchasing, loading, towing, or installing parts."
  ]
};

const sources = {
  capability: {
    label: "Jeep Gladiator capability",
    href: "https://www.jeep.com/gladiator/capability.html",
    type: "Jeep official vehicle information"
  },
  utility: {
    label: "Jeep Gladiator utility and towing",
    href: "https://www.jeep.com/gladiator/utility.html",
    type: "Jeep official utility information"
  },
  faq: {
    label: "Jeep Gladiator vehicle FAQ",
    href: "https://www.jeep.com/gladiator/faq.html",
    type: "Jeep official model information"
  },
  owners: {
    label: "2024 Jeep Gladiator owner's manual",
    href: "https://vehicleinfo.mopar.com/assets/publications/en-us/Jeep/2024/Gladiator/5538908_24_JT_OM_EN_USC_DIGITAL_E1.pdf",
    type: "Mopar official owner information"
  }
};

const breadcrumbs = (label) => [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  ...(label
    ? [
        { label: "Jeep Gladiator JT", href: "/vehicles/jeep-gladiator" },
        { label }
      ]
    : [{ label: "Jeep Gladiator JT" }])
];

const related = {
  hub: {
    title: "Jeep Gladiator JT Guide",
    href: "/vehicles/jeep-gladiator",
    text: "Start with the complete 2020-present pickup upgrade-planning framework."
  },
  first: {
    title: "First Upgrades for a Jeep Gladiator",
    href: "/vehicles/jeep-gladiator/first-upgrades",
    text: "Prioritize condition, tires, recovery, protection, bed utility, and only the changes the use case requires."
  },
  suspension: {
    title: "Jeep Gladiator Suspension Guide",
    href: "/vehicles/jeep-gladiator/suspension",
    text: "Plan springs, shocks, axle geometry, steering, empty-bed ride, permanent load, payload, and towing."
  },
  tires: {
    title: "Jeep Gladiator Tire Size and Fitment Guide",
    href: "/vehicles/jeep-gladiator/tire-size",
    text: "Check measured tire dimensions, wheel position, articulation, gearing, braking, towing, and under-bed spare clearance."
  },
  lift: {
    title: "Jeep Gladiator Lift Kit Guide",
    href: "/vehicles/jeep-gladiator/lift-kit",
    text: "Match lift type, geometry, travel, axle position, tire goals, load, and towing behavior to a defined purpose."
  },
  overland: {
    title: "Jeep Gladiator Overland Build Guide",
    href: "/vehicles/jeep-gladiator/overland-build",
    text: "Stage bed storage, rack, shelter, payload, recovery, power, water, suspension, and towing decisions."
  }
};

export const jeepGladiatorPages = [
  {
    key: "jeep-gladiator",
    kind: "vehicleHub",
    route: "/vehicles/jeep-gladiator",
    title: "Jeep Gladiator JT Off-Road Upgrade Guide | RigAI",
    description:
      "Plan 2020-present Jeep Gladiator JT upgrades around pickup-bed use, payload, towing, tires, suspension, lift, recovery, and overland travel.",
    socialTitle: "Jeep Gladiator JT Off-Road Upgrade Guide | RigAI",
    socialDescription:
      "A pickup-specific Gladiator JT planning hub for daily use, trails, towing, payload, suspension, tires, and overland equipment.",
    eyebrow: "2020-present Jeep Gladiator JT planning guide",
    h1: "Jeep Gladiator JT Off-Road Upgrade Guide",
    dek:
      "Plan the whole pickup. Trim, axles, suspension package, tires, bed load, towing equipment, payload label, longer wheelbase, rear overhang, and daily use all change a useful upgrade order.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Treat payload, towing, tongue weight, and permanent accessory weight as separate but connected limits.",
      "The pickup bed, longer wheelbase, and rear overhang change cargo utility, breakover behavior, departure clearance, and trail line choice.",
      "Confirm Sport, Willys, Overland, Mojave, Rubicon, engine, axle, transfer-case, tire, shock, and tow-package equipment on the exact model year.",
      "A capable factory Gladiator may need inspection, recovery preparation, protection, and load planning before it needs extra lift."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["configurations", "Configuration differences"],
      ["pickup-use", "Pickup use cases"],
      ["upgrade-goals", "Connected upgrade goals"],
      ["featured-guides", "Gladiator guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should a Gladiator plan begin with?",
        paragraphs: [
          "Begin with model year, trim, engine, transmission, axles, axle ratio, transfer case, factory tires, suspension and shock package, tow equipment, roof type, payload label, current accessories, bed cargo, passengers, trailer use, and actual operating weight.",
          "The Gladiator combines solid front and rear axles with coil springs, a pickup bed, a longer wheelbase, and more rear body behind the axle than a short SUV. Those details affect steering, articulation, breakover, departure behavior, rear spring tuning, towing stability, and where cargo weight belongs."
        ]
      },
      {
        type: "systems",
        id: "configurations",
        title: "Configuration details that change the plan",
        intro:
          "Trim names are a starting point. Verify build information, labels, owner's resources, part numbers, and the vehicle itself.",
        items: [
          ["Sport and Sport S", "Confirm axles, ratio, transfer case, tires, shocks, tow package, payload label, protection, and recovery points on the exact model year."],
          ["Willys", "Factory tire, axle, traction, shock, protection, and trim content can vary; inspect the individual pickup before planning replacements."],
          ["Overland", "Balance daily comfort and utility with tires, protection, bed use, towing, and the weight of permanent trail equipment."],
          ["Rubicon", "Verify lockers, sway-bar disconnect, transfer case, axles, gearing, tires, fenders, shocks, rails, and protection rather than assuming all trail hardware."],
          ["Mojave", "Desert-oriented suspension, frame, steering, shock, and bump-stop hardware has a different purpose from Rubicon equipment and is not automatically interchangeable."],
          ["Gas and diesel applications", "Engine availability varies by model year; powertrain weight, cooling, gearing, service needs, payload, and towing documentation can change the plan."],
          ["Tow and payload configuration", "Tow package, axle ratio, cooling, tires, hitch, cab equipment, options, and curb weight affect the ratings shown for the exact vehicle."],
          ["Hardtop and soft top", "Roof configuration affects weather use and compatible rack or shelter systems; bed-mounted loads require separate rack and payload checks."]
        ]
      },
      {
        type: "scenarios",
        id: "pickup-use",
        title: "Match the plan to pickup use",
        items: [
          {
            title: "Daily driver",
            priority: "Condition, tire pressure, steering, brakes, visibility, weather use, ride, noise, and practical bed security.",
            wait: "Heavy armor, large offset changes, or permanent bed systems without a regular need.",
            data: "Commute, parking, passengers, bed use, roof type, current tires, payload, and highway behavior."
          },
          {
            title: "Weekend trail use",
            priority: "Suitable tires, rated recovery equipment, vulnerable-area protection, practical storage, and dynamic clearance.",
            wait: "Lift when current clearance, careful line choice, and factory capability already match the route.",
            data: "Trail surface, ledges, rear overhang, breakover points, tow hooks, factory protection, load, and recovery partners."
          },
          {
            title: "Technical terrain",
            priority: "Traction, durable tires and wheels, axle and underbody protection, controlled articulation, steering, recovery, and obstacle planning.",
            wait: "Extra height that harms geometry, driveshaft relationships, road behavior, or stability.",
            data: "Trim hardware, lockers, sway-bar equipment, axle ratio, tire plan, wheelbase, rear overhang, and operating load."
          },
          {
            title: "Towing and work",
            priority: "Exact ratings, hitch and trailer compatibility, tongue weight, payload calculation, axle load, brakes, tires, cooling, and stable handling.",
            wait: "Suspension changes used to disguise overload or exceed a published limit.",
            data: "Door label, towing guide, trailer weight, tongue weight, passengers, bed cargo, accessories, and weight-distribution requirements."
          },
          {
            title: "Overland travel",
            priority: "Payload, low and forward cargo, bed access, recovery, range, braking, reliability, and representative loaded handling.",
            wait: "Rack, tent, drawers, armor, bumpers, power, water, and fuel before a complete weight budget exists.",
            data: "Trip duration, people, bed system, shelter, water, fuel, spare, trailer use, roof, and daily usability."
          }
        ]
      },
      {
        type: "systems",
        id: "upgrade-goals",
        title: "Plan Gladiator goals as connected systems",
        items: [
          ["Tires and wheels", "Measured tire size, wheel width, offset, steering, articulation, gearing, braking, towing, payload, and under-bed spare clearance."],
          ["Recovery and protection", "Rated points, safe equipment, tow-hook configuration, skid plates, rock rails, differentials, bed protection, service access, and added weight."],
          ["Suspension", "Front and rear springs, shocks, control arms, track bars, bump stops, sway bars, axle position, steering, empty-bed ride, and permanent load."],
          ["Lift and geometry", "Purpose, tire goal, caster, pinion angle, axle centering, driveshafts, lines, links, articulation, towing behavior, and installation complexity."],
          ["Bed utility", "Tie-downs, protection, weather security, lightweight storage, bed access, cargo restraint, rack loads, and rear axle load."],
          ["Towing", "Vehicle-specific rating, trailer rating, hitch, tongue weight, payload, passengers, cargo, brakes, cooling, tires, stability, and legal requirements."],
          ["Overland equipment", "Rack, tent, drawers, refrigerator, battery, solar, water, fuel, spare, recovery, armor, center of gravity, and departure clearance."],
          ["Factory systems", "Confirm trim, axles, lockers, transfer case, ratio, sway-bar equipment, shocks, tires, protection, tow package, and payload label."]
        ]
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Jeep Gladiator JT guides",
        published: [
          { eyebrow: "Published guide", title: "Best First Upgrades for a Jeep Gladiator", text: "Choose a useful order for daily driving, trails, work, towing, or overland travel.", href: related.first.href },
          { eyebrow: "Published guide", title: "Jeep Gladiator Suspension Guide", text: "Connect axle geometry, steering, empty-bed behavior, permanent load, payload, and towing.", href: related.suspension.href },
          { eyebrow: "Published guide", title: "Jeep Gladiator Tire Size Guide", text: "Evaluate wheel position, measured dimensions, articulation, gearing, towing, and under-bed spare clearance.", href: related.tires.href },
          { eyebrow: "Published guide", title: "Jeep Gladiator Lift Kit Guide", text: "Choose spacers, springs, shocks, complete systems, and geometry from a defined goal.", href: related.lift.href },
          { eyebrow: "Published guide", title: "Jeep Gladiator Overland Build Guide", text: "Stage payload, bed storage, rack, shelter, recovery, power, water, and suspension decisions.", href: related.overland.href }
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Jeep Gladiator planning questions",
        items: [
          ["Does every Gladiator need a lift?", "No. Tires, recovery, protection, condition, bed utility, payload planning, and driver practice may address the first need."],
          ["Are Mojave and Rubicon suspension parts interchangeable?", "Do not assume so. Their hardware, tuning, mounts, bump stops, springs, shocks, steering parts, and model-year applications require verification."],
          ["Are towing capacity and payload the same limit?", "No. Payload covers weight carried by the vehicle, including occupants, cargo, accessories, and trailer tongue weight. Towing has separate vehicle and trailer limits."],
          ["Can springs increase the legal payload rating?", "Suspension changes may alter ride height or control but do not replace the manufacturer's vehicle ratings or loading label."]
        ]
      }
    ],
    related: [related.first, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.capability, sources.utility, sources.faq, sources.owners]
  },
  {
    key: "jeep-gladiator-first-upgrades",
    kind: "article",
    route: "/vehicles/jeep-gladiator/first-upgrades",
    title: "Best First Off-Road Upgrades for Jeep Gladiator | RigAI",
    description:
      "Prioritize Jeep Gladiator JT inspection, tires, recovery, protection, bed utility, payload, towing, and suspension decisions by actual use.",
    socialTitle: "Best First Off-Road Upgrades for Jeep Gladiator | RigAI",
    socialDescription:
      "A practical first-upgrade order for daily driving, trails, work, towing, and overland Gladiator JT use.",
    eyebrow: "Jeep Gladiator JT first-upgrade guide",
    h1: "Best First Off-Road Upgrades for Jeep Gladiator",
    dek:
      "Begin with condition and a complete use-and-load plan. The best first purchase depends on trail exposure, bed use, factory equipment, passengers, payload, towing, and permanent accessory weight.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Inspect tires, brakes, steering, suspension, axles, recovery points, underbody, bed, hitch, and towing equipment first.",
      "Rubicon, Mojave, and non-Rubicon pickups can begin with different traction, shocks, protection, tires, and trail capability.",
      "Plan springs after permanent bumper, winch, rack, tent, storage, and normal bed load are known.",
      "Do not confuse towing capacity with available payload after occupants, cargo, accessories, and tongue weight."
    ],
    toc: [
      ["baseline", "Baseline inspection"],
      ["first-systems", "Useful first systems"],
      ["build-order", "Upgrade paths by use"],
      ["package-priorities", "Factory equipment priorities"],
      ["avoid", "What to avoid"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Inspect and weigh the plan before buying",
        paragraphs: [
          "Check tire age, pressure and wear, wheel damage, brakes, bearings, steering joints, track bars, control arms, springs, shocks, bump stops, lines, wiring, driveshafts, axles, leaks, recovery points, tow hooks, skid plates, rock rails, differentials, bed mounts, tie-downs, hitch, spare, and previous modifications.",
          "Record the payload label and exact tow configuration. Estimate people, normal bed cargo, permanent accessories, and trailer tongue weight separately. A pickup can reach a load limit before it looks visually full."
        ],
        contextualLink: related.suspension
      },
      {
        type: "systems",
        id: "first-systems",
        title: "High-value first systems",
        items: [
          ["Tires and air", "Choose for weather, highway use, terrain, load, towing, durability, measured size, repair needs, pressure management, and spare compatibility."],
          ["Recovery", "Confirm rated recovery points and tow-hook equipment, then carry compatible gear and learn safe procedures before relying on it."],
          ["Protection", "Prioritize exposed skid, differential, rocker, bed, and underbody areas based on actual contact risk and factory equipment."],
          ["Bed storage", "Use secure tie-downs and lightweight, removable organization before committing to heavy drawers, caps, or rack systems."],
          ["Steering and suspension", "Repair wear first; change springs, shocks, links, arms, or geometry only for a defined handling, load, travel, or clearance need."],
          ["Towing preparation", "Verify hitch, wiring, brakes, cooling, mirrors, trailer ratings, tongue weight, tire pressure, loading, and vehicle-specific documentation."],
          ["Rack and shelter", "Calculate rack, tent, occupants, bedding, and dynamic load before selecting bed mounts or suspension."],
          ["Bumper and winch", "Confirm need, mounting, front axle load, spring and damping response, cooling, recovery access, electrical demand, and total payload."]
        ]
      },
      {
        type: "scenarios",
        id: "build-order",
        title: "A practical first-upgrade order by use",
        items: [
          { title: "Daily driver", priority: "Maintenance, road tires, brakes, steering, visibility, weather readiness, bed security, and ride.", wait: "Permanent heavy trail equipment.", data: "Commute, parking, passengers, bed use, climate, and highway behavior." },
          { title: "Weekend trail use", priority: "Appropriate tires, air system, recovery, essential protection, and secure storage.", wait: "Lift or large wheel offset without measured need.", data: "Terrain, trail partners, tow hooks, contact marks, breakover, rear overhang, and load." },
          { title: "Rock and technical trails", priority: "Traction, durable tires, axle and underbody protection, articulation, steering, recovery, and careful line choice.", wait: "Cosmetic height or accessories that reduce stability.", data: "Rubicon equipment, axle ratio, sway-bar function, wheelbase, rear overhang, tire plan, and recovery route." },
          { title: "Towing and work", priority: "Ratings, trailer match, hitch, brakes, cooling, tires, tongue weight, payload math, and stable load placement.", wait: "Springs used as permission to exceed ratings.", data: "Trailer, cargo, passengers, accessories, payload label, and axle loads." },
          { title: "Overland travel", priority: "Weight budget, lightweight bed storage, recovery, tires, essential protection, water, power, and loaded handling.", wait: "Rack, tent, drawers, armor, and spare systems before weighing the plan.", data: "Trip inventory, people, bed access, shelter, range, trailer use, and daily needs." }
        ]
      },
      {
        type: "comparison",
        id: "package-priorities",
        title: "Factory equipment changes the first priority",
        caption: "Verify exact model-year content before using trim labels to select parts.",
        headers: ["Configuration", "Confirm", "Planning effect"],
        rows: [
          ["Sport, Willys, or Overland", "Tires, shocks, axles, ratio, tow package, protection, rails, and payload label", "Tires, recovery, protection, bed utility, or towing preparation may come before suspension height."],
          ["Rubicon", "Lockers, sway-bar disconnect, transfer case, axles, gearing, tires, shocks, rails, and skids", "Existing trail equipment can move maintenance, load, recovery, and driver practice ahead of replacement parts."],
          ["Mojave", "Desert-tuned shocks, springs, bump stops, frame and steering hardware, tires, axle equipment, and mounts", "Preserve the intended suspension system unless a measured use case supports a compatible change."],
          ["Towing configuration", "Tow equipment, axle ratio, cooling, payload label, hitch, wiring, brakes, tires, and trailer", "The exact vehicle and trailer combination determines preparation; trim name alone does not."]
        ]
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "Upgrades to postpone until the plan is clear",
        items: [
          ["Immediate cosmetic lift", "Extra height can change steering, caster, axle position, driveshaft relationships, entry height, towing behavior, and ride without solving the first limitation."],
          ["Excessive wheel offset", "Moving tires outward changes scrub radius, steering and bearing leverage, fender coverage, and the tire path through articulation."],
          ["Heavy bed system by default", "Rack, tent, cap, drawers, refrigerator, battery, water, and tools consume payload and load the rear axle every day."],
          ["Springs before final load", "A heavy-rate rear spring can ride poorly empty, while an underspecified spring may sag once permanent equipment is installed."],
          ["Treating Mojave like Rubicon", "Their suspension and intended terrain differ; verify every component and goal instead of swapping by badge."],
          ["Using towing and payload interchangeably", "Trailer weight, tongue weight, payload, axle ratings, hitch limits, passengers, cargo, and accessories must each be checked."]
        ],
        contextualLink: related.overland
      },
      {
        type: "faq",
        id: "questions",
        title: "First-upgrade questions",
        items: [
          ["Should tires always be first?", "Not always. Mechanical condition, brakes, steering, recovery preparation, current tires, payload, and towing readiness can come first."],
          ["Does a Rubicon need no upgrades?", "No trim answers every use, but factory traction and protection may make replacement parts less urgent than recovery, load, tires, or practice."],
          ["Does towing require heavier rear springs?", "Not automatically. Confirm tongue weight, payload, axle load, hitch setup, ride height, handling, and vehicle ratings before changing springs."],
          ["Is a bed rack a first upgrade?", "Only when the cargo or shelter plan needs one and its static, dynamic, payload, mounting, and center-of-gravity effects have been checked."]
        ]
      }
    ],
    related: [related.hub, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.capability, sources.utility, sources.owners]
  },
  {
    key: "jeep-gladiator-suspension",
    kind: "article",
    route: "/vehicles/jeep-gladiator/suspension",
    title: "Jeep Gladiator JT Suspension Upgrade Guide | RigAI",
    description:
      "Plan Jeep Gladiator JT springs, shocks, axle geometry, steering, empty-bed ride, permanent bed load, payload, towing, and lift support.",
    socialTitle: "Jeep Gladiator JT Suspension Upgrade Guide | RigAI",
    socialDescription:
      "Understand Gladiator solid-axle suspension, rear load tuning, geometry, articulation, towing, and pickup-specific ride trade-offs.",
    eyebrow: "Jeep Gladiator JT suspension guide",
    h1: "Jeep Gladiator JT Suspension Upgrade Guide",
    dek:
      "Choose suspension for the actual pickup weight and job. Empty-bed comfort, permanent accessories, temporary cargo, tongue weight, towing, articulation, steering, and geometry require different answers.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "Front and rear coil springs, shocks, control arms, track bars, sway bars, and bump stops must work as one solid-axle system.",
      "Separate temporary payload, permanent accessory load, distributed bed cargo, and trailer tongue weight before choosing spring rate.",
      "Lift changes caster, pinion angle, axle position, driveshaft relationships, steering feel, lines, wiring, and usable articulation.",
      "Rubicon and Mojave suspension hardware has different tuning and should not be assumed interchangeable."
    ],
    toc: [
      ["direct-answer", "How to choose suspension"],
      ["components", "Suspension components"],
      ["load-cases", "Load and use cases"],
      ["geometry", "Geometry chain"],
      ["checks", "Fitment checks"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Choose by measured load and behavior",
        paragraphs: [
          "Start with ride height, corner and axle weights where available, normal bed load, passengers, permanent accessories, trailer tongue weight, tire and wheel mass, current spring and shock condition, alignment, steering, axle position, driveshaft behavior, and the exact factory suspension.",
          "The Gladiator uses solid front and rear axles with coil springs. Its long wheelbase and pickup bed create different breakover, rear-load, and towing behavior than a shorter vehicle. Rear tuning that controls a constant bed system may be too firm when empty."
        ],
        contextualLink: related.lift
      },
      {
        type: "systems",
        id: "components",
        title: "Suspension and steering systems",
        items: [
          ["Front and rear coil springs", "Set support and ride height; rate and free length must suit axle load, travel, bump stops, shock length, and intended use."],
          ["Shocks", "Control spring motion and body movement; damping, length, heat capacity, mounts, reservoirs, and travel must match the system."],
          ["Control arms", "Locate the axles and affect caster, pinion relationships, wheelbase, bushing behavior, bind, and articulation."],
          ["Track bars", "Locate each axle laterally; lift can move axle position and change bar angles, steering relationships, and clearance."],
          ["Sway bars and links", "Balance body control and articulation; link length, connected and disconnected travel, mounts, tires, lines, and shocks need checking."],
          ["Bump stops", "Protect shocks, springs, tires, fenders, steering, lines, and body at compression; extension changes usable uptravel."],
          ["Steering", "Tie rod, drag link, joints, steering gear, track-bar relationship, wheel offset, tire mass, caster, and toe shape road behavior."],
          ["Driveshafts, lines, and wiring", "Check pinion angle, joint travel, slip, exhaust, brake hoses, parking-brake routing, and ABS wires through full motion."]
        ]
      },
      {
        type: "scenarios",
        id: "load-cases",
        title: "Different loads require different tuning",
        items: [
          { title: "Empty-bed daily use", priority: "Compliance, steering precision, body control, braking stability, and low-speed ride.", wait: "Heavy-load rear springs without regular permanent weight.", data: "Empty ride height, axle weights, tire pressure, commute, passengers, and shock condition." },
          { title: "Permanent bed rack and tent", priority: "Measured constant weight, spring support, damping, body control, center of gravity, and rear axle load.", wait: "Spring choice based only on advertised accessory names.", data: "Rack, tent, cap, drawers, battery, spare, tools, and normal cargo weights." },
          { title: "Temporary payload", priority: "Stay within vehicle limits, distribute and secure cargo, set pressures, and confirm loaded handling.", wait: "Permanent stiff springs used only for occasional loads without considering empty ride.", data: "Cargo weight, location, passengers, axle loads, trip frequency, and unloading behavior." },
          { title: "Towing and tongue weight", priority: "Payload math, hitch setup, axle load, stable ride height, damping, brakes, tires, and trailer control.", wait: "Suspension changes used to exceed ratings or hide poor loading.", data: "Trailer weight, tongue weight, hitch, cargo, occupants, accessories, ratings, and scale data." },
          { title: "Technical trails", priority: "Controlled articulation, tire contact, steering, axle clearance, driveshaft motion, bump stops, and protection.", wait: "Excessive lift that harms stability or geometry.", data: "Obstacle profile, wheelbase, breakover, rear overhang, sway-bar use, tire path, and recovery plan." }
        ]
      },
      {
        type: "dependency",
        id: "geometry",
        title: "How suspension changes propagate",
        steps: [
          ["Permanent weight changes", "Spring compression, ride height, damping demand, axle load, braking, and body control."],
          ["Lift or spring height changes", "Caster, pinion angle, axle centering, control-arm and track-bar angles, bump-stop timing, and driveshaft operation."],
          ["Shock length changes", "Droop and compression limits, spring retention, line and wire travel, sway-bar links, and joint angles."],
          ["Larger tires and offset changes", "Steering load, scrub radius, leverage, clearance path, gearing, braking, and unsprung mass."],
          ["Towing adds tongue weight", "Rear axle load, front axle response, ride height, damping demand, steering, braking, and stability."]
        ],
        text:
          "Longer shocks alone are not a complete suspension system. Verify the full compressed and extended motion of springs, shocks, arms, track bars, sway bars, driveshafts, steering, tires, brake lines, ABS wires, and bump stops."
      },
      {
        type: "checklist",
        id: "checks",
        title: "Suspension verification checklist",
        items: [
          "Exact model year, trim, engine, transmission, axle, ratio, transfer case, tow package, shocks, springs, and factory suspension",
          "Representative permanent load, temporary cargo, passengers, trailer tongue weight, and axle loads",
          "Ride height and side-to-side stance empty and at intended operating load",
          "Caster, toe, steering-wheel position, axle centering, track-bar relationship, and complete alignment results",
          "Control-arm, bushing, ball-joint, tie-rod, drag-link, steering-gear, sway-bar, and tire clearance",
          "Shock compressed and extended limits, bump-stop timing, spring retention, and usable travel",
          "Front and rear driveshaft angle, joints, slip, exhaust proximity, and full-travel clearance",
          "Brake-line, parking-brake, breather, and ABS-wire routing through articulation",
          "Loaded braking, lane changes, crosswind response, trailer behavior, noises, and reinspection"
        ],
        note:
          "No single list of adjustable arms, track bars, or driveshafts applies to every lift. Measurements and component instructions decide what is required."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common suspension mistakes",
        items: [
          ["Choosing springs by lift number", "Spring rate, installed load, free length, travel, bump stops, and damping matter as much as nominal height."],
          ["Ignoring empty-bed ride", "Rear springs designed for constant heavy weight can reduce traction and comfort when the bed is usually empty."],
          ["Treating tongue weight as bed cargo", "Both affect payload and axle load, but the hitch location and trailer dynamics create different handling demands."],
          ["Assuming Mojave and Rubicon parts match", "Shocks, springs, bump stops, brackets, steering hardware, tuning, and intended terrain require application verification."],
          ["Adding longer shocks alone", "Additional droop can expose springs, lines, wiring, joints, driveshafts, links, and sway bars to unsupported motion."],
          ["Using lift to correct overload", "Ride height is not proof that payload, axle, tire, hitch, or towing limits are respected."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Suspension questions",
        items: [
          ["Does every lifted Gladiator need adjustable control arms?", "No. Need depends on lift, measured caster and pinion relationships, alignment range, axle position, component design, and use."],
          ["Does every lift need adjustable track bars?", "No. Check actual axle centering, steering geometry, clearance, bar angles, and the suspension manufacturer's complete requirements."],
          ["When should rear spring rate increase?", "When measured permanent load and intended operating behavior support it, while preserving acceptable empty and loaded ride."],
          ["Can suspension increase towing capacity?", "Suspension can change ride and control, but it does not replace the vehicle, hitch, axle, tire, payload, or towing ratings."]
        ]
      }
    ],
    related: [related.hub, related.first, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.capability, sources.utility, sources.owners]
  },
  {
    key: "jeep-gladiator-tire-size",
    kind: "article",
    route: "/vehicles/jeep-gladiator/tire-size",
    title: "Jeep Gladiator JT Tire Size and Fitment Guide | RigAI",
    description:
      "Evaluate Jeep Gladiator JT tire fitment by trim, measured tire size, wheel width and offset, articulation, spare clearance, gearing, payload, and towing.",
    socialTitle: "Jeep Gladiator JT Tire Size and Fitment Guide | RigAI",
    socialDescription:
      "A cautious Gladiator tire and wheel framework for full articulation, steering, under-bed spare clearance, braking, payload, and towing.",
    eyebrow: "Jeep Gladiator JT tire fitment guide",
    h1: "Jeep Gladiator JT Tire Size and Fitment Guide",
    dek:
      "Use the exact pickup, wheel, measured tire, suspension, load, and travel. Street clearance alone does not prove clearance at steering lock, compression, or connected and disconnected articulation.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size and fitment"),
    takeaways: [
      "There is no universal largest tire size for every Gladiator JT configuration.",
      "Sport, Willys, Overland, Mojave, and Rubicon can begin with different tires, wheels, fenders, suspension, axles, and gearing.",
      "Wheel offset and backspacing can change steering and body clearance even when tire diameter stays the same.",
      "Plan braking, gearing, acceleration, towing, payload, steering load, fuel use, and under-bed spare support with the tire."
    ],
    toc: [
      ["direct-answer", "How to evaluate fitment"],
      ["factory-baseline", "Factory baseline"],
      ["wheel-geometry", "Wheel and tire geometry"],
      ["dynamic-clearance", "Dynamic clearance"],
      ["fitment-process", "Fitment process"],
      ["tradeoffs", "System trade-offs"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Fitment is a complete configuration",
        paragraphs: [
          "Record model year, trim, factory fenders, axle ratio, wheels, tires, suspension, lift, bump stops, alignment, steering stops, current modifications, normal payload, towing use, and spare location. Compare manufacturer-measured tire diameter and width, not only the nominal sidewall label.",
          "A tire can clear during straight street driving and still contact a control arm, sway bar, fender, bumper, wheel well, body, or suspension component at steering lock, compression, and articulation. Sway-bar-connected and disconnected travel can produce different paths."
        ],
        contextualLink: related.lift
      },
      {
        type: "checklist",
        id: "factory-baseline",
        title: "Record the baseline before selecting tires",
        items: [
          "Model year, Sport, Willys, Overland, Mojave, Rubicon, or other verified trim and factory package",
          "Factory fenders, bumpers, axles, axle ratio, suspension, shocks, bump stops, sway-bar equipment, and steering stops",
          "Door-jamb tire size, pressure, payload information, current tire condition, and towing guidance",
          "Wheel diameter, width, offset, backspacing, load rating, brake clearance, and mounting details",
          "Tire brand, model, construction, load range, measured diameter, section width, tread width, and approved wheel range",
          "Lift, springs, shocks, control arms, track bars, alignment, axle centering, and previous clearance changes",
          "Normal passengers, bed cargo, permanent rack, tent, armor, bumpers, winch, trailer tongue weight, and operating load",
          "Under-bed spare space, exhaust and hitch clearance, hoist condition, tools, and recovery access"
        ],
        note:
          "Nominal tire codes do not guarantee identical measured dimensions across brands or models."
      },
      {
        type: "comparison",
        id: "wheel-geometry",
        title: "Wheel and tire dimensions change different clearances",
        caption: "Verify every value with the component manufacturer and the exact pickup.",
        headers: ["Variable", "What it changes", "What to verify"],
        rows: [
          ["Measured diameter", "Ride height, gearing, braking leverage, acceleration, speed indication, spare clearance, and compression path", "Actual specification, load, pressure, bump stops, fenders, wheel wells, and under-bed space"],
          ["Measured width", "Control-arm, sway-bar, fender, bumper, body, and rear-wheel-well clearance", "Section and tread width on the selected wheel, steering lock, articulation, and load"],
          ["Wheel width", "Tire shape, bead support, sidewall position, pressure behavior, and approved fitment", "Manufacturer range, load rating, brakes, tire profile, and use"],
          ["Offset and backspacing", "Inside clearance, outer poke, scrub radius, steering feel, bearing and joint leverage, and fender coverage", "Both values, not appearance alone, through complete steering and travel"],
          ["Tire and wheel mass", "Unsprung weight, braking, acceleration, steering, damping, fuel economy, payload, and towing response", "Complete assembly weight and its effect on the actual use case"]
        ]
      },
      {
        type: "systems",
        id: "dynamic-clearance",
        title: "Check the entire tire path",
        items: [
          ["Front steering lock", "Inspect control arms, sway bar, links, frame, bumper, fenders, liners, steering stops, brake hoses, and wiring in both directions."],
          ["Front compression and articulation", "Check bump-stop engagement, shock travel, fender and body clearance, steering angle, axle position, and connected or disconnected sway-bar state."],
          ["Rear compression and articulation", "Check wheel well, fender, frame, shock, sway bar, brake line, track bar, control arms, bump stops, and bed-side clearance."],
          ["Under-bed spare", "Confirm diameter and width clearance around the hitch, exhaust, axle, track bar, bed, hoist, and departure area at operating load."],
          ["Payload and towing", "Added assembly weight consumes payload and can alter braking, steering, acceleration, heat, shifting, stability, and trailer response."],
          ["Road systems", "Confirm pressure, balance, alignment, speedometer, assistance systems, steering feel, braking, noise, and fuel use."]
        ]
      },
      {
        type: "sequence",
        id: "fitment-process",
        title: "A safer fitment process",
        items: [
          ["Identify the exact Gladiator", "Record trim, powertrain, axle ratio, fenders, suspension, sway-bar equipment, lift, bump stops, wheels, and changes."],
          ["Define tire performance", "Balance weather, road use, terrain, construction, load rating, towing, noise, repair needs, and weight."],
          ["Confirm wheel compatibility", "Check approved width, load rating, offset, backspacing, brakes, steering, control arms, and fender coverage."],
          ["Use measured tire data", "Compare manufacturer diameter, width, tread, approved rim, load, and complete assembly weight."],
          ["Test dynamic clearance", "Inspect steering lock, front and rear compression, connected and disconnected articulation, bump stops, and representative load."],
          ["Verify the spare", "Confirm under-bed space, hoist, hitch, exhaust, tools, access, and a practical recovery plan."],
          ["Road-test and calibrate", "Evaluate pressure, balance, alignment, steering, braking, acceleration, shifting, towing behavior, speedometer, and assistance systems."]
        ]
      },
      {
        type: "dependency",
        id: "tradeoffs",
        title: "How a larger tire affects the pickup",
        steps: [
          ["More diameter", "Changes effective gearing, braking leverage, acceleration, speed indication, clearance, and spare packaging."],
          ["More width or outward position", "Changes scrub radius, steering load, leverage, fender coverage, and the clearance path."],
          ["More assembly mass", "Adds unsprung and rotating weight that affects damping, braking, steering, fuel use, payload, and towing response."],
          ["Different load and pressure", "Changes heat, ride, traction, wear, handling, and compatibility with payload and trailer use."],
          ["Changed travel relationship", "Can require bump-stop, wheel, fender, steering, suspension, or alignment decisions after measured testing."]
        ],
        text:
          "Larger tires affect a connected vehicle system. A fitment claim must account for the exact wheel, measured tire, suspension, steering, fenders, load, travel, and prior modifications."
      },
      {
        type: "faq",
        id: "questions",
        title: "Tire fitment questions",
        items: [
          ["What is the largest tire for a Gladiator JT?", "There is no single answer across model years, trims, fenders, wheels, suspension, bump stops, steering, measured tire dimensions, loads, and modifications."],
          ["Does a lift guarantee tire clearance?", "No. Lift may change static height while steering, compression, articulation, wheel position, bump stops, and body clearance still determine fit."],
          ["Can the factory spare location hold any larger tire?", "No. Verify measured dimensions, hitch, exhaust, axle, track bar, bed, hoist, departure clearance, and tool access."],
          ["Do larger tires affect towing?", "They can change effective gearing, acceleration, braking, heat, steering, stability, payload, and trailer response. Evaluate the complete combination."]
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.lift, related.overland],
    safety,
    sources: [sources.capability, sources.utility, sources.faq, sources.owners]
  },
  {
    key: "jeep-gladiator-lift-kit",
    kind: "article",
    route: "/vehicles/jeep-gladiator/lift-kit",
    title: "Jeep Gladiator JT Lift Kit Guide | RigAI",
    description:
      "Compare Jeep Gladiator JT spacer, leveling, spring, shock, and complete lift systems with geometry, payload, towing, tire, and ride trade-offs.",
    socialTitle: "Jeep Gladiator JT Lift Kit Guide | RigAI",
    socialDescription:
      "Choose Gladiator lift components by purpose, axle geometry, articulation, permanent load, towing behavior, and daily ride.",
    eyebrow: "Jeep Gladiator JT lift planning guide",
    h1: "Jeep Gladiator JT Lift Kit Guide",
    dek:
      "Choose lift by purpose and complete-system behavior. Height alone does not describe geometry, travel, spring rate, damping, axle position, steering, towing stability, or daily usability.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Lift kits"),
    takeaways: [
      "A spacer, leveling system, spring lift, and complete suspension system solve different problems.",
      "Lift can improve breakover and underbody clearance but does not shorten the pickup's rear overhang.",
      "As height changes, verify caster, pinion angle, axle centering, steering, driveshafts, bump stops, links, lines, and articulation.",
      "Gladiator and shorter-vehicle kits should not be assumed identical, and Mojave hardware requires application-specific verification."
    ],
    toc: [
      ["direct-answer", "How to choose a lift"],
      ["lift-types", "Lift types"],
      ["intent", "Choose by purpose"],
      ["supporting-parts", "Supporting systems"],
      ["geometry", "Geometry chain"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Start with the goal, tire, load, and measurements",
        paragraphs: [
          "Record current ride height, springs, shocks, control arms, track bars, sway-bar links, bump stops, driveshafts, brake lines, ABS wires, steering, alignment, tires, wheels, payload, permanent accessories, bed load, trailer use, and factory suspension package.",
          "A useful lift must preserve road behavior, steering, braking, travel, spring retention, joint operation, and towing stability. Extra breakover clearance does not remove the long wheelbase or rear overhang from trail planning."
        ],
        contextualLink: related.suspension
      },
      {
        type: "comparison",
        id: "lift-types",
        title: "Common lift approaches",
        caption: "Component names do not guarantee the same travel, geometry, load support, or ride.",
        headers: ["Approach", "What it changes", "Key checks"],
        rows: [
          ["Leveling system", "Front-to-rear stance and front static height", "Purpose, front travel, bump stops, caster, axle position, steering, spring rate, payload stance, and towing"],
          ["Spacer lift", "Installed spring position or body-to-spring relationship without automatically adding useful travel", "Shock range, spring retention, bump stops, geometry, links, driveshafts, ride, and manufacturer requirements"],
          ["Spring lift", "Ride height, support, rate, free length, and potentially available travel", "Permanent load, empty-bed ride, shocks, bump stops, arms, track bars, links, axle position, and towing"],
          ["Spring and shock system", "Ride height plus matched damping and travel limits", "Compressed and extended lengths, mounts, heat, lines, wiring, springs, sway bars, driveshafts, and tire clearance"],
          ["Complete suspension system", "Height, rate, damping, axle control, geometry, links, bump stops, and travel as a package", "Exact model and trim, Mojave hardware, payload, towing, tires, installation, alignment, and maintenance"]
        ]
      },
      {
        type: "scenarios",
        id: "intent",
        title: "Choose lift strategy by purpose",
        items: [
          { title: "Visual leveling", priority: "Minimal change with measured stance, adequate travel, alignment, steering, and loaded behavior.", wait: "Height that removes useful front droop or creates poor towing stance.", data: "Current rake, payload, tongue weight, front accessories, spring and shock package." },
          { title: "Mild trail and daily use", priority: "Ride quality, controlled travel, alignment, steering, modest clearance, and reliable road behavior.", wait: "Complexity and height beyond the trail need.", data: "Terrain, tires, daily route, passengers, load, and factory suspension." },
          { title: "Larger tire clearance", priority: "Measured tire path, wheels, bump stops, fenders, steering, articulation, gearing, braking, and spare.", wait: "Assuming static lift alone guarantees fitment.", data: "Actual tire dimensions, offset, connected and disconnected travel, load, and prior changes." },
          { title: "Frequent technical use", priority: "Geometry, articulation, steering, axle control, driveshafts, protection, recovery, stability, and repairability.", wait: "Maximum height without a complete travel and line-choice plan.", data: "Obstacles, wheelbase, breakover, rear overhang, tire, axles, trim hardware, and recovery." },
          { title: "Heavy overland load", priority: "Measured permanent weight, appropriate springs and damping, axle load, body control, braking, and center of gravity.", wait: "Springs selected before the rack, tent, storage, water, power, and spare plan.", data: "Corner and axle weights, trip inventory, daily unloaded use, passengers, and trailer." },
          { title: "Towing and work", priority: "Ratings, stable geometry, payload, tongue weight, axle load, tires, brakes, damping, and predictable handling.", wait: "Lift used to mask overload or a poor hitch setup.", data: "Trailer, hitch, cargo, occupants, accessories, scale data, and manufacturer instructions." }
        ]
      },
      {
        type: "systems",
        id: "supporting-parts",
        title: "Supporting systems to verify",
        items: [
          ["Control arms", "Caster, pinion relationships, axle position, bushing angles, bind, wheelbase, strength, and adjustment range where applicable."],
          ["Track bars", "Axle centering, lateral shift, steering relationship, roll behavior, mount loads, angles, and clearance."],
          ["Shocks and extensions", "Compressed and extended length, usable travel, heat, mounts, spring retention, bump stops, and line or wire limits."],
          ["Bump stops", "Tire and fender clearance, shock protection, spring behavior, axle and steering clearance, and retained uptravel."],
          ["Sway-bar links", "Connected and disconnected geometry, inversion risk, joint range, tires, shocks, lines, wiring, and mounts."],
          ["Driveshafts", "Joint angle, slip, strength, exhaust and crossmember clearance, full droop, compression, and load."],
          ["Brake lines and ABS wires", "Routing, brackets, slack, abrasion, full steering, compression, droop, and articulation."],
          ["Steering and alignment", "Caster, toe, steering-wheel position, drag-link and track-bar relationship, joints, gear, stabilizer, and road test."]
        ]
      },
      {
        type: "dependency",
        id: "geometry",
        title: "Why lift height is only one input",
        steps: [
          ["Ride height changes", "Control-arm and track-bar angles, caster, pinion angle, axle centering, steering, and driveshaft relationships."],
          ["Shock or extension changes", "Droop and compression limits, bump stops, spring retention, sway-bar motion, line and wire travel."],
          ["Tire size changes", "Clearance, effective gearing, braking, steering load, unsprung mass, spare packaging, payload, and towing behavior."],
          ["Permanent load changes", "Spring compression, stance, damping demand, axle load, body control, braking, and center of gravity."],
          ["Trailer tongue weight changes", "Rear axle load, front response, ride height, steering, braking, cooling, and stability."]
        ],
        text:
          "Geometry correction becomes more important as measured relationships move outside their intended range, but the exact parts depend on the complete system. There is no universal supporting-parts list for every nominal lift height."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common lift mistakes",
        items: [
          ["Buying only by advertised height", "Spring rate, shock travel, damping, geometry, load, bump stops, steering, and installation define system quality."],
          ["Assuming spacers add travel", "A spacer changes position but does not automatically increase shock stroke, articulation, or usable wheel travel."],
          ["Using a shorter-vehicle kit", "The Gladiator's wheelbase, bed, rear suspension tuning, payload, towing, and driveshaft relationships require exact application fitment."],
          ["Ignoring Mojave hardware", "Factory shocks, springs, bump stops, mounts, steering pieces, and tuning require a compatible, model-specific plan."],
          ["Forgetting towing behavior", "Lift, tires, wheel offset, spring rate, damping, center of gravity, and rake can alter trailer stability and braking response."],
          ["Correcting overload with height", "A level stance does not prove compliance with payload, axle, tire, hitch, or towing limits."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Lift-kit questions",
        items: [
          ["What lift height is best for a Gladiator?", "There is no universal height. Purpose, tire, load, geometry, suspension, towing, daily use, and component instructions decide."],
          ["Does every 2-inch lift need the same parts?", "No. Actual height, factory package, arms, track bars, shocks, driveshafts, alignment, load, and intended travel vary."],
          ["Does lift improve departure angle?", "Suspension height may raise some components, but it does not shorten the rear body or overhang. Tire size and bumper design also matter."],
          ["Can lift improve towing capacity?", "No lift replaces vehicle, hitch, axle, tire, payload, or trailer ratings. It can also alter stability and loading relationships."]
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.capability, sources.utility, sources.owners]
  },
  {
    key: "jeep-gladiator-overland-build",
    kind: "article",
    route: "/vehicles/jeep-gladiator/overland-build",
    title: "Jeep Gladiator Overland Build Guide | RigAI",
    description:
      "Build a Jeep Gladiator JT overland plan around payload, bed load, rack and tent weight, towing, recovery, water, power, suspension, and daily use.",
    socialTitle: "Jeep Gladiator Overland Build Guide | RigAI",
    socialDescription:
      "A staged Gladiator overland framework for bed systems, payload, towing, recovery, power, water, suspension, and center of gravity.",
    eyebrow: "Jeep Gladiator JT overland guide",
    h1: "Jeep Gladiator Overland Build Guide",
    dek:
      "Plan the trip and calculate every permanent and trip load before choosing suspension. A bed does not make steel bumpers, winch, armor, rack, tent, drawers, power, water, fuel, passengers, and tongue weight weightless.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "Use the exact payload label and include occupants, accessories, bed cargo, roof or rack equipment, and trailer tongue weight.",
      "Keep heavy cargo low, secure, and sensibly distributed while protecting bed access, rear axle capacity, braking, and departure clearance.",
      "Calculate permanent rack, tent, drawer, battery, bumper, armor, winch, and spare weight before selecting springs and shocks.",
      "Build in stages so real trip use and measured loaded behavior decide whether heavier systems are justified."
    ],
    toc: [
      ["trip-first", "Start with the trip"],
      ["payload-plan", "Payload planning"],
      ["cargo-systems", "Bed and travel systems"],
      ["weight-chain", "Weight dependency chain"],
      ["staged-build", "Staged build"],
      ["loaded-checks", "Loaded checks"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "trip-first",
        title: "Define the trip before the equipment",
        paragraphs: [
          "Record trip duration, terrain, weather, people, sleeping plan, food, water, fuel, recovery, tools, spare, bed access, daily-driving needs, trailer use, and resupply opportunities. A weekend route near services needs a different build from remote travel with passengers and a trailer.",
          "The long wheelbase can help highway stability and cargo packaging, but it changes breakover line choice. The pickup bed and rear overhang affect departure behavior, rear axle load, spare location, and how racks, tents, drawers, and fuel are positioned."
        ],
        contextualLink: related.suspension
      },
      {
        type: "comparison",
        id: "payload-plan",
        title: "Build a complete payload plan",
        caption: "Use the exact vehicle labels, manual, towing guide, component ratings, and scale data where available.",
        headers: ["Load group", "Include", "Why it matters"],
        rows: [
          ["Vehicle occupants", "Driver, passengers, child seats, pets, and personal items", "Consumes payload and affects axle loads before bed equipment is added"],
          ["Permanent accessories", "Bumpers, winch, armor, rack, cap, tent, drawers, battery, compressor, spare support, and tools", "Changes everyday curb weight, spring compression, damping, braking, and available payload"],
          ["Trip cargo", "Food, water, fuel, refrigerator contents, shelter, clothing, recovery gear, and sports equipment", "Varies by trip and must be secured and distributed"],
          ["Trailer tongue weight", "Loaded trailer force at the hitch plus hitch or weight-distribution hardware", "Consumes payload and changes rear axle load, front response, ride height, and stability"],
          ["Roof and bed-rack load", "Rack, tent, awning, accessories, and occupants where permitted", "Must satisfy each component's static and dynamic limits and raises center of gravity"]
        ]
      },
      {
        type: "systems",
        id: "cargo-systems",
        title: "Plan travel systems around load and access",
        items: [
          ["Bed rack or cap", "Mount ratings, bed compatibility, dynamic load, tent, weather sealing, visibility, tailgate and bed access, height, weight, and noise."],
          ["Rooftop tents and bed-mounted tents", "Rack approval, static and dynamic ratings, occupants, bedding, wind, center of gravity, setup space, and daily removal needs."],
          ["Drawers and storage", "Empty system weight, cargo restraint, access, dust and water protection, rear axle load, removability, and repair access."],
          ["Refrigerator and power", "Fridge duty cycle, auxiliary battery, wiring, fusing, charging, solar, ventilation, mounting, service access, and total weight."],
          ["Water and fuel", "Required volume, legal container, ventilation, restraint, heat, low placement, changing weight, range need, and separation from ignition sources."],
          ["Recovery and protection", "Rated points, recovery gear, winch, bumpers, skid plates, rock rails, armor, mounting, access, training, and permanent weight."],
          ["Spare and carrier", "Measured tire, under-bed space, hitch and exhaust clearance, hoist, tools, alternative support, departure area, and payload."],
          ["Suspension and tires", "Permanent load, temporary cargo, spring rate, damping, ride height, axle load, pressure, load rating, braking, and representative loaded handling."]
        ]
      },
      {
        type: "dependency",
        id: "weight-chain",
        title: "Why accessory weight compounds",
        steps: [
          ["Bumpers, winch, and armor", "Consume payload, add axle load, change spring compression and damping demand, and increase braking work."],
          ["Bed rack, tent, cap, and drawers", "Add permanent rear and elevated weight before trip supplies or passengers."],
          ["Battery, refrigerator, water, and fuel", "Add electrical complexity and variable cargo weight that must be secured and distributed."],
          ["Larger spare and recovery gear", "Add rear or bed load and can affect under-bed clearance, departure space, and access."],
          ["Passengers and trailer tongue weight", "Use remaining payload and can shift axle loads, ride height, steering response, braking, and stability."]
        ],
        text:
          "Steel bumpers, winch, armor, bed rack, tent, drawers, refrigerator, battery, water, fuel, recovery gear, passengers, and tongue weight can overload a pickup when combined. Calculate the complete system rather than evaluating each accessory alone."
      },
      {
        type: "sequence",
        id: "staged-build",
        title: "A staged Gladiator overland build",
        intro:
          "Use actual trips and measured weights to decide whether the next stage is necessary.",
        items: [
          ["Stage 1: reliability and essentials", "Complete maintenance, tires, brakes, recovery equipment, communication, basic tools, and essential underbody or rocker protection."],
          ["Stage 2: lightweight travel", "Add removable bed storage, shelter, cooking, modest water, and camping equipment while preserving payload and bed access."],
          ["Stage 3: weigh and tune", "Measure permanent and representative trip load, axle distribution, ride height, braking, handling, tire pressure, then tune springs and damping if needed."],
          ["Stage 4: justified advanced systems", "Add armor, electrical system, larger spare support, rack, tent, winch, or specialized equipment only when repeated use supports the weight and complexity."]
        ]
      },
      {
        type: "checklist",
        id: "loaded-checks",
        title: "Check the pickup at representative travel load",
        items: [
          "Payload, front and rear axle loads, tire and wheel ratings, hitch limits, trailer limits, and rack or tent static and dynamic ratings",
          "Cargo restraint, bed mounts, rack fasteners, tent mounts, drawers, refrigerator, battery, water, fuel, spare, and recovery equipment",
          "Ride height, spring compression, shock control, bump-stop clearance, axle centering, steering, body roll, and crosswind response",
          "Tire pressure, temperature, clearance, braking, acceleration, transmission behavior, cooling, and fuel range",
          "Trailer tongue weight, hitch setup, wiring, brakes, safety chains, sway behavior, mirrors, and legal requirements where towing",
          "Breakover and departure line choice, rear overhang, hitch, spare, exhaust, bumper, bed corners, and low-mounted equipment",
          "Bed and tailgate access, roof or top operation, doors, rear-seat use, visibility, security, daily parking, and emergency access",
          "Post-trip fastener torque, wear, leaks, wiring abrasion, mount movement, tire damage, brake condition, and weight changes"
        ],
        note:
          "Recheck after changing passengers, trailer, water, fuel, storage, spare, rack, tent, armor, or other major load."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Gladiator overland mistakes",
        items: [
          ["Starting with a heavy catalog build", "Every steel, storage, shelter, electrical, recovery, and spare system consumes payload and adds maintenance."],
          ["Ignoring the rear axle", "A pickup can remain under one total figure while cargo placement or tongue weight creates an axle, tire, hitch, or handling problem."],
          ["Choosing springs before weighing", "Suspension should respond to measured permanent load and actual behavior, not an imagined final build."],
          ["Mounting everything high", "Rack, tent, fuel, water, spare, and cargo above the bed increase center of gravity, body roll, crosswind response, and rollover risk."],
          ["Blocking bed access", "A system that makes common cargo, tools, recovery gear, spare equipment, or emergency items hard to reach can fail its daily purpose."],
          ["Treating published maximums as universal", "Payload and towing depend on the exact model year, trim, powertrain, axle ratio, equipment, options, hitch, trailer, and load."]
        ],
        contextualLink: related.first
      },
      {
        type: "faq",
        id: "questions",
        title: "Gladiator overland questions",
        items: [
          ["Does the pickup bed guarantee enough payload?", "No. Bed volume and payload are different. Occupants, accessories, cargo, rack, tent, spare, and tongue weight all use available capacity."],
          ["Should suspension be selected before the rack and tent?", "Usually not. First calculate or measure the permanent system and representative trip load, then choose support and damping for that weight."],
          ["Is a trailer separate from payload?", "Trailer mass has towing limits, while hitch hardware and tongue weight also consume vehicle payload and affect axle loads."],
          ["Does every overland Gladiator need armor and a winch?", "No. Terrain, partners, recovery plan, exposure, weight budget, service access, and actual travel decide what is justified."]
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.lift],
    safety,
    sources: [sources.utility, sources.faq, sources.owners, sources.capability]
  }
];
