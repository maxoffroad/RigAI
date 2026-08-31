const dates = {
  published: "2026-07-28T15:00:00+05:00",
  modified: "2026-08-31T12:00:00+05:00",
  reviewedLabel: "August 31, 2026"
};

const vehicle = {
  slug: "ford-bronco",
  name: "Ford Bronco 6th Gen",
  shortName: "Bronco",
  guidesLabel: "Ford Bronco",
  heroLabel: "BRONCO",
  ctaLabel: "Build My Bronco Setup",
  planInputs:
    "model year, door count, trim, engine, transmission, axle and transfer-case equipment, Sasquatch status, HOSS version, factory tires and fenders, driving profile, payload, installed equipment, and planned load"
};

const scope = {
  title: "Vehicle scope: 2021-present Ford Bronco",
  text:
    "This guide covers US-market sixth-generation Ford Bronco models from 2021 to the present, including 2-door and 4-door configurations. Equipment varies by model year, trim, engine, transmission, axle, transfer case, Sasquatch status, HOSS version, factory tire and fender package, and previous modification."
};

const safety = {
  title: "Safety, load, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, tire and loading label, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify model year, door count, trim, engine, transmission, axle, axle ratio, transfer case, Sasquatch status, HOSS hardware, wheel dimensions, tire measurements, suspension, steering, alignment, added weight, and manufacturer fitment data before purchasing or installing parts."
  ]
};

const sources = {
  offRoad: {
    label: "2025 Ford Bronco off-road features",
    href: "https://www.ford.com/suvs/bronco/2025/features/off-roading/",
    type: "Ford official vehicle information"
  },
  models: {
    label: "2025 Ford Bronco model overview",
    href: "https://www.ford.com/suvs/bronco/2025/models/",
    type: "Ford official model information"
  },
  orderGuide: {
    label: "2025 Ford Bronco order guide",
    href: "https://www.fromtheroad.ford.com/content/dam/fordmediasite/us/en/library/2025/order-guides/2025_Ford_Bronco_Order_Guide.pdf",
    type: "Ford official order guide"
  },
  owners: {
    label: "2024 Ford Bronco owner support",
    href: "https://www.ford.com/support/vehicle/bronco/2024/",
    type: "Ford official owner information"
  }
};

const breadcrumbs = (label) => [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  ...(label
    ? [
        { label: "Ford Bronco", href: "/vehicles/ford-bronco" },
        { label }
      ]
    : [{ label: "Ford Bronco" }])
];

const related = {
  hub: {
    title: "Ford Bronco 6th Gen Guide",
    href: "/vehicles/ford-bronco",
    text: "Start with the complete 2021-present Bronco planning framework."
  },
  first: {
    title: "First Upgrades for a Ford Bronco",
    href: "/vehicles/ford-bronco/first-upgrades",
    text: "Prioritize inspection, tires, recovery, protection, and only the changes the use case requires."
  },
  suspension: {
    title: "Ford Bronco Suspension Guide",
    href: "/vehicles/ford-bronco/suspension",
    text: "Plan front coilovers, rear springs and shocks, IFS geometry, steering, alignment, and operating load."
  },
  tires: {
    title: "Ford Bronco Tire Size and Fitment Guide",
    href: "/vehicles/ford-bronco/tire-size",
    text: "Check wheel geometry, measured tire dimensions, steering, compression, articulation, gearing, and spare support."
  },
  lift: {
    title: "Ford Bronco Lift Kit Guide",
    href: "/vehicles/ford-bronco/lift-kit",
    text: "Match leveling, spacers, coilovers, geometry, travel, steering, and rear suspension to the real objective."
  },
  overland: {
    title: "Ford Bronco Overland Build Guide",
    href: "/vehicles/ford-bronco/overland-build",
    text: "Build a staged travel plan around payload, removable-roof limits, cargo space, recovery, and center of gravity."
  }
};

export const fordBroncoPages = [
  {
    key: "ford-bronco",
    kind: "vehicleHub",
    route: "/vehicles/ford-bronco",
    title: "Ford Bronco Suspension & Off-Road Setup Guide | RigAI",
    description:
      "Plan a 2021-present Ford Bronco off-road setup around suspension, lift, tires, Sasquatch status, HOSS hardware, recovery, and trail use.",
    socialTitle: "Ford Bronco Suspension & Off-Road Setup Guide | RigAI",
    socialDescription:
      "A practical sixth-generation Ford Bronco planning hub for suspension, lift, tires, protection, recovery, daily driving, and overland travel.",
    eyebrow: "2021-present Ford Bronco planning guide",
    h1: "Ford Bronco Suspension & Off-Road Setup Guide",
    dek:
      "Compare suspension, lift, tires, recovery, and trail priorities for your Bronco based on door count, trim, Sasquatch status, HOSS hardware, daily use, and payload.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Identify factory package and HOSS hardware before replacing suspension or steering parts.",
      "A capable factory Bronco may need inspection, tires, recovery preparation, and practice before it needs extra lift.",
      "Account for the shorter 2-door wheelbase or the greater cargo and load potential of a 4-door configuration.",
      "Do not assume lockers, Sasquatch equipment, stabilizer-bar disconnect, shocks, gearing, fenders, or tire clearance from the model name alone."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["configurations", "Configuration differences"],
      ["use-cases", "Daily and trail use"],
      ["upgrade-goals", "Common upgrade goals"],
      ["featured-guides", "Bronco guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should a modern Bronco plan begin with?",
        paragraphs: [
          "Begin with model year, 2-door or 4-door body, trim, engine, transmission, axle equipment, transfer case, Sasquatch status, HOSS version, factory wheels, tires and fenders, roof type, current suspension, steering condition, and installed accessories. The platform combines independent front suspension with a solid rear axle, so front geometry and rear load control must be evaluated differently.",
          "Base where offered, Big Bend, Black Diamond, Outer Banks, Badlands, Wildtrak where offered, Heritage Edition, and factory packages can start with different traction, protection, tires, fenders, gearing, suspension, and steering hardware. Confirm the individual vehicle and model year."
        ]
      },
      {
        type: "systems",
        id: "configurations",
        title: "Configuration details that change the plan",
        intro:
          "Use the build information, labels, owner's resources, part numbers, and physical inspection to verify the baseline.",
        items: [
          ["Door count and wheelbase", "A 2-door has less cargo room and a shorter wheelbase; a 4-door offers more space and a longer wheelbase but can accumulate more accessory and trip weight."],
          ["Big Bend and Outer Banks", "Confirm tires, fenders, tow hooks, underbody protection, axles, transfer case, HOSS hardware, and package content before setting trail priorities."],
          ["Black Diamond equipment", "Availability and content vary by model year; verify protection, rails, axle and gearing equipment, tires, and suspension on the exact vehicle."],
          ["Badlands", "Equipped vehicles may add trail-oriented hardware, but Sasquatch status, tires, shocks, fenders, lockers, gearing, and stabilizer-bar equipment still require confirmation."],
          ["Wildtrak and Heritage Edition", "Package and model-year differences can change tires, fenders, HOSS version, gearing, shocks, and factory capability."],
          ["Sasquatch Package", "Factory tires, wheels, high-clearance fenders, gearing, locking axle equipment, suspension, and model-year content should be treated as a complete verified package."],
          ["Engines and transmissions", "The 2.3L and 2.7L configurations, manual or automatic availability, gearing, weight, cooling, and calibration affect tire and load trade-offs."],
          ["Raptor configuration", "Its body, suspension, steering, tires, axles, and calibration form a separate high-performance application; its parts are not universal upgrades for other Broncos."]
        ]
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Match priorities to daily and trail use",
        items: [
          {
            title: "Daily driver",
            priority: "Condition, tire pressure and road behavior, steering, braking, visibility, weather use, and ride quality.",
            wait: "Heavy armor, large offset changes, or extra height without a defined use.",
            data: "Commute, climate, passengers, parking, roof use, current tires, HOSS hardware, and highway behavior."
          },
          {
            title: "Mild trail use",
            priority: "Suitable tires, rated recovery points, recovery practice, vulnerable-area protection, and dynamic clearance.",
            wait: "Lift when the factory package and careful line choice already match the route.",
            data: "Trail surface, ledges, water, partners, tow hooks, factory protection, Sasquatch status, and steering clearance."
          },
          {
            title: "Technical trail use",
            priority: "Traction equipment, durable tires and wheels, steering protection, controlled travel, underbody protection, recovery, and cooling.",
            wait: "Front height that creates poor CV, steering, droop, or alignment relationships.",
            data: "Lockers, transfer case, HOSS version, stabilizer-bar equipment, axle ratio, tire plan, wheelbase, and obstacle profile."
          },
          {
            title: "Overland travel",
            priority: "Payload, low-mounted cargo, roof compatibility, recovery, reliability, range, braking, and representative loaded handling.",
            wait: "Permanent racks, tents, drawers, armor, bumpers, and electrical systems before the trip inventory is known.",
            data: "Door count, occupants, roof type, trip duration, water, power, shelter, spare, fuel, and daily usability."
          }
        ]
      },
      {
        type: "systems",
        id: "upgrade-goals",
        title: "Plan common Bronco goals as connected systems",
        items: [
          ["Tires and wheels", "Factory package, measured dimensions, wheel width and offset, fenders, crash-bar or clearance components, steering, gearing, braking, and spare support."],
          ["Recovery", "Confirmed rated points, compatible equipment, training, safe access, and a method appropriate to the situation."],
          ["Protection", "Skid plates, rock rails, differential and steering protection, bumpers, terrain exposure, mounting, service access, and added weight."],
          ["Front suspension and steering", "Coilovers, upper control arms, CV angles, tie rods, steering rack, bump stops, travel, camber, caster, toe, and tire load."],
          ["Rear suspension", "Springs, shocks, track bar, sway bar, bump stops, axle centering, driveshaft clearance, and operating weight."],
          ["Lift and clearance", "Purpose, actual tire package, IFS geometry, droop, alignment range, steering angles, rear correction, and daily ride."],
          ["Overland equipment", "Payload, removable roof, rack limits, cargo volume, water, power, shelter, spare support, center of gravity, and braking."],
          ["Factory systems", "Confirm HOSS version, Sasquatch content, lockers, transfer case, axle ratio, stabilizer-bar equipment, tires, and fenders."]
        ]
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Ford Bronco guides",
        published: [
          { eyebrow: "Published guide", title: "Best First Upgrades for a Ford Bronco", text: "Choose a useful order for daily driving, mild trails, technical terrain, or overland travel.", href: related.first.href },
          { eyebrow: "Published guide", title: "Ford Bronco Suspension Guide", text: "Connect IFS geometry, steering, rear suspension, alignment, load, and HOSS hardware.", href: related.suspension.href },
          { eyebrow: "Published guide", title: "Ford Bronco Tire Size Guide", text: "Evaluate wheel position, measured dimensions, fenders, steering, gearing, and spare support.", href: related.tires.href },
          { eyebrow: "Published guide", title: "Ford Bronco Lift Kit Guide", text: "Choose leveling, spacers, coilovers, and supporting geometry from a defined goal.", href: related.lift.href },
          { eyebrow: "Published guide", title: "Ford Bronco Overland Build Guide", text: "Stage payload, storage, shelter, recovery, armor, power, and suspension decisions.", href: related.overland.href }
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Ford Bronco planning questions",
        items: [
          { question: "Does every Bronco need a lift for trail use?", answer: "No. Factory tire and suspension packages, careful driving, suitable routes, and targeted protection may already meet the goal." },
          { question: "Does every Badlands have the same trail equipment?", answer: "No. Model year, door count, engine, transmission, package, Sasquatch status, axle, HOSS hardware, and previous modifications can differ." },
          { question: "Are 2-door and 4-door suspension plans identical?", answer: "Not automatically. Wheelbase, curb weight, cargo space, spring calibration, operating load, and exact part application can differ." }
        ]
      }
    ],
    related: [related.first, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.offRoad, sources.models, sources.orderGuide, sources.owners]
  },
  {
    key: "ford-bronco-first-upgrades",
    kind: "article",
    route: "/vehicles/ford-bronco/first-upgrades",
    title: "Best First Off-Road Upgrades for Ford Bronco | RigAI",
    description:
      "Prioritize first Ford Bronco upgrades for daily driving, mild trails, technical terrain, or overland travel without assuming an immediate lift.",
    socialTitle: "Best First Upgrades for Ford Bronco | RigAI",
    socialDescription:
      "A practical first-upgrade order for 2021-present Ford Bronco models, including Sasquatch, Badlands, and non-Sasquatch priorities.",
    eyebrow: "2021-present Ford Bronco first upgrades",
    h1: "Best First Off-Road Upgrades for Ford Bronco",
    dek:
      "Inspect first, understand the factory package, then add tires, recovery, protection, or suspension only where the terrain and use expose a real need.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Inspect tires, brakes, steering, suspension, recovery points, and underbody condition before adding parts.",
      "Sasquatch, Badlands, and non-Sasquatch vehicles can start with different tires, fenders, gearing, traction, suspension, and protection.",
      "A capable factory Bronco does not automatically need immediate lift height.",
      "Avoid excessive wheel offset and unnecessary accessory weight that increase steering, suspension, braking, and payload demands."
    ],
    toc: [
      ["baseline", "Baseline inspection"],
      ["first-systems", "What to consider first"],
      ["build-order", "Use-case paths"],
      ["package-priorities", "Package differences"],
      ["avoid", "What to avoid"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Inspect the Bronco before planning upgrades",
        paragraphs: [
          "Check tire age, condition and pressure, uneven wear, wheel damage, brakes, wheel bearings, CV boots, front control arms, tie rods, steering behavior, coilovers, rear springs and shocks, bushings, fasteners, leaks, recovery points, tow hooks where equipped, skid plates, rock rails, and trail-contact marks.",
          "Confirm the HOSS version, Sasquatch status, axle and locker equipment, factory fenders, wheel and tire package, transfer case, and any previous changes. Replacing capable factory hardware without understanding it can add cost while reducing ride, travel, steering, or compatibility."
        ],
        contextualLink: {
          before: "Use the full configuration framework in the ",
          label: "Ford Bronco upgrade guide",
          href: "/vehicles/ford-bronco",
          after: "."
        }
      },
      {
        type: "systems",
        id: "first-systems",
        title: "Useful first-upgrade systems",
        items: [
          ["Tire condition and pressure", "Set pressure for load and conditions, inspect damage and wear, and choose terrain-appropriate tires after wheel and dynamic clearance are confirmed."],
          ["Recovery equipment", "Carry rated compatible equipment, learn safe procedures, and keep it accessible without unloading the vehicle."],
          ["Recovery points", "Verify front and rear attachment points, hardware, frame connection, ratings, and compatibility with the planned method; tow-hook equipment varies."],
          ["Airing equipment", "Use a reliable gauge and suitable compressor with a pressure plan based on tire construction, load, speed, and terrain."],
          ["Skid plates and underbody protection", "Inspect factory coverage and protect exposed steering, driveline, fuel, and underbody areas only where terrain justifies the weight."],
          ["Rock rails", "Confirm mounting and structural intent instead of assuming appearance steps are suitable for body protection."],
          ["Tire selection", "Balance road, weather, terrain, measured size, load, wheel geometry, steering clearance, gearing, braking, and spare support."],
          ["Suspension and lift", "Change them only to solve a measured load, control, geometry, travel, or tire-clearance need."]
        ]
      },
      {
        type: "scenarios",
        id: "build-order",
        title: "First-upgrade paths by use",
        items: [
          {
            title: "Daily driver",
            priority: "Maintenance, road-friendly tires, correct pressure, braking, steering, visibility, ride, and compact recovery basics.",
            wait: "Heavy armor, large spare systems, aggressive offset, or extra height that compromises daily behavior.",
            data: "Commute, climate, passengers, parking, roof use, HOSS hardware, current tires, and highway behavior."
          },
          {
            title: "Mild trail use",
            priority: "Suitable tires, rated recovery points, recovery practice, airing equipment, and protection at proven contact areas.",
            wait: "Lift when current clearance, factory package, and careful line choice already handle the route.",
            data: "Surface, obstacles, water, partners, factory protection, Sasquatch status, tow hooks, and steering clearance."
          },
          {
            title: "Technical trail use",
            priority: "Traction systems, durable tires and wheels, steering and underbody protection, recovery, controlled travel, and cooling.",
            wait: "Front height or wheel offset that increases CV, tie-rod, rack, alignment, or contact problems.",
            data: "Lockers, transfer case, HOSS version, stabilizer-bar equipment, gearing, tire plan, wheelbase, and obstacles."
          },
          {
            title: "Overland travel",
            priority: "Reliability, suitable tires, recovery, simple storage, payload inventory, water, communication, and spare support.",
            wait: "Permanent drawers, rack, tent, armor, bumper, winch, or springs before trip weight is known.",
            data: "Trip length, occupants, cargo space, roof type, water, power, shelter, fuel, spare, and representative load."
          }
        ]
      },
      {
        type: "comparison",
        id: "package-priorities",
        title: "Why factory package changes the order",
        caption: "Planning differences, not universal equipment claims",
        headers: ["Starting point", "Confirm first", "Likely planning effect"],
        rows: [
          ["Non-Sasquatch", "Tires, fenders, wheels, gearing, lockers, HOSS version, protection, and steering clearance", "Traction, recovery, targeted protection, or a measured tire plan may come before suspension height."],
          ["Sasquatch", "Complete factory tire, wheel, fender, gearing, axle, locker, suspension, and model-year package", "Existing clearance and capability may move maintenance, recovery, load, and driver practice ahead of replacement parts."],
          ["Badlands", "Sasquatch status, stabilizer-bar equipment, tires, shocks, axles, protection, gearing, and HOSS version", "Priorities depend on what is fitted, not the badge alone."],
          ["Raptor configuration", "Vehicle-specific body, suspension, steering, axle, tire, and calibration application", "Treat its hardware as a separate system, not as universal donor parts."]
        ]
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "First purchases that need more planning",
        items: [
          ["Immediate lift for appearance", "Front height changes IFS alignment, CV and steering angles, available droop, ride, and entry height without necessarily solving a trail limit."],
          ["Excessive wheel offset", "Moving tires outward changes scrub radius, steering feel, bearing and tie-rod leverage, fender coverage, and the tire path."],
          ["Unnecessary heavy accessories", "Bumpers, winch, armor, rack, tent, drawers, and a large spare consume payload and change springs, damping, braking, and center of gravity."],
          ["Replacing factory package parts blindly", "Sasquatch or HOSS components should be identified before choosing parts that may duplicate or reduce their function."],
          ["Ignoring steering exposure", "Larger tires and difficult terrain can increase loads on tie rods, steering rack, joints, and mounts."],
          ["Longer shocks as a complete system", "Shock length must work with springs, bump stops, control arms, CVs, lines, wiring, steering, rear axle, and usable travel."]
        ],
        contextualLink: {
          before: "Before changing height, review the ",
          label: "Ford Bronco lift-kit guide",
          href: "/vehicles/ford-bronco/lift-kit",
          after: "."
        }
      },
      {
        type: "faq",
        id: "questions",
        title: "Ford Bronco first-upgrade questions",
        items: [
          { question: "Should tires always be the first purchase?", answer: "Not always. Mechanical condition, steering, brakes, recovery preparation, current package capability, and the load plan can come first." },
          { question: "Does Sasquatch mean no upgrades are useful?", answer: "No, but its existing tires, fenders, gearing, lockers, and suspension can change which upgrades are useful and which replacements are unnecessary." },
          { question: "Does technical trail use require immediate lift?", answer: "Not automatically. Traction, recovery, tire durability, line choice, steering protection, and underbody protection may address the first limitations." }
        ]
      }
    ],
    related: [related.hub, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.offRoad, sources.models, sources.orderGuide, sources.owners]
  },
  {
    key: "ford-bronco-suspension",
    kind: "article",
    route: "/vehicles/ford-bronco/suspension",
    title: "Ford Bronco Suspension Upgrade Guide | RigAI",
    description:
      "Plan Ford Bronco front coilovers, rear springs and shocks, HOSS hardware, IFS geometry, steering, alignment, travel, and added load.",
    socialTitle: "Ford Bronco Suspension Upgrade Guide | RigAI",
    socialDescription:
      "Understand Bronco IFS geometry, rear solid-axle control, HOSS variants, steering loads, alignment, and 2-door or 4-door weight.",
    eyebrow: "2021-present Ford Bronco suspension",
    h1: "Ford Bronco Suspension Upgrade Guide",
    dek:
      "Treat front coilovers, rear springs and shocks, control arms, steering, rear track bar, bump stops, alignment, CV angles, and operating weight as one system.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "Front lift changes IFS control-arm, CV, tie-rod, steering, alignment, and droop relationships.",
      "Identify the HOSS version and factory package before selecting shocks, coilovers, or supporting parts.",
      "Longer shocks alone are not a complete suspension system.",
      "Aftermarket upper control arms can be useful in some builds but are not required on every lifted Bronco."
    ],
    toc: [
      ["direct-answer", "How the system works"],
      ["components", "Suspension components"],
      ["configuration-load", "Configuration and load"],
      ["front-geometry", "IFS geometry"],
      ["checks", "Travel and alignment checks"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "How does Bronco suspension planning differ?",
        paragraphs: [
          "The front independent suspension uses coilovers, control arms, CV half-shafts, tie rods, and a steering rack. The rear solid axle uses springs, shocks, locating links, a track bar, and a driveshaft. Front ride-height changes directly affect alignment range, CV and steering angles, and available droop, while rear changes affect axle position, spring support, damping, and driveshaft relationships.",
          "HOSS hardware and shock suppliers vary by model year, trim, and package. Bilstein-equipped factory configurations and other HOSS versions must be identified by the exact vehicle and part application rather than assumed from appearance."
        ],
        contextualLink: {
          before: "If height is the main objective, start with the ",
          label: "Ford Bronco lift-kit guide",
          href: "/vehicles/ford-bronco/lift-kit",
          after: "."
        }
      },
      {
        type: "systems",
        id: "components",
        title: "Suspension and steering components",
        items: [
          ["Front coilovers", "Support front weight and control motion; spring rate, preload, damping, travel, compressed length, mounts, and HOSS application must match."],
          ["Upper and lower control arms", "Guide front wheel motion and influence ball-joint angle, alignment range, tire clearance, and travel."],
          ["CV joints and half-shafts", "Operate through angle and plunge changes; extra front height can increase operating angle and reduce usable droop margin."],
          ["Tie rods and steering rack", "Carry steering and tire loads; larger, heavier tires and wheel offset can increase leverage and impact demand."],
          ["Rear springs and shocks", "Support rear load and control axle motion; spring rate and damping should match permanent and trip weight."],
          ["Rear track bar and links", "Locate the rear axle laterally and longitudinally; height changes can affect centering, roll geometry, bushing position, and clearance."],
          ["Sway bars and bump stops", "Manage body roll and protect tires, shocks, suspension, steering, and bodywork at travel limits."],
          ["Lines, wiring, and driveshaft", "Brake hoses, ABS wiring, rear driveshaft, joints, exhaust, and mounts need safe clearance through intended travel."]
        ]
      },
      {
        type: "scenarios",
        id: "configuration-load",
        title: "Configuration and weight change suspension needs",
        items: [
          {
            title: "2-door daily driver",
            priority: "Road comfort, steering precision, balanced spring rate, controlled damping, and modest unsprung mass.",
            wait: "Heavy constant-load springs or maximum height without a defined need.",
            data: "Roof type, passengers, bumper, winch, spare, normal cargo, tire mass, HOSS version, and road use."
          },
          {
            title: "4-door loaded travel",
            priority: "Representative loaded stance, rear spring support, damping, braking, body control, and axle distribution.",
            wait: "Spring selection before permanent and trip weight is inventoried.",
            data: "Passengers, roof rack, tent, drawers, water, refrigerator, bumpers, spare, armor, and cargo."
          },
          {
            title: "Sasquatch or upgraded HOSS",
            priority: "Preserve or intentionally replace the complete factory geometry, shocks, travel, tires, fenders, steering, and gearing package.",
            wait: "Parts selected from nominal height without confirming current hardware.",
            data: "Model year, package, HOSS version, shock part numbers, tire and wheel setup, alignment, and use."
          },
          {
            title: "Technical trail use",
            priority: "Controlled front and rear travel, steering durability, correct bump limits, CV margin, alignment, rear centering, and cooling.",
            wait: "Front lift that sacrifices droop or creates poor steering and CV angles.",
            data: "Tire path, offset, HOSS hardware, steering rack and tie rods, travel, rear axle, lines, and driveshaft."
          }
        ]
      },
      {
        type: "dependency",
        id: "front-geometry",
        title: "Front lift creates an IFS geometry chain",
        steps: ["Coilover, spacer, or perch height", "Control-arm and CV angles", "Caster, camber, toe, and available droop", "Tie-rod and steering-rack loading", "Alignment and full-travel verification"],
        text:
          "As front ride height increases, the suspension operates in a different part of its travel. More height can reduce droop, increase CV and steering angles, and make alignment harder. Upper control arms or other correction can help specific builds, but the requirement depends on actual height, hardware, measurements, and use."
      },
      {
        type: "checklist",
        id: "checks",
        title: "Suspension installation and travel checks",
        items: [
          "HOSS version, shock and spring part numbers, Sasquatch status, and exact vehicle application",
          "Ride height and side-to-side stance at representative operating load",
          "Caster, camber, toe, steering-wheel position, and complete alignment results",
          "Upper-control-arm, ball-joint, CV, tie-rod, rack, sway-bar, and tire clearance",
          "Front coilover compressed and extended limits, bump-stop timing, and available droop",
          "Rear axle centering, track-bar and link clearance, spring retention, and shock travel",
          "Brake-line and ABS-wire routing through steering, compression, droop, and rear articulation",
          "Rear driveshaft operating angle, joints, exhaust proximity, and full-travel clearance",
          "Tire clearance at steering lock, compression, articulation, and representative load",
          "Fastener torque, road behavior, noises, leaks, and reinspection after use"
        ],
        note:
          "Suspension travel must remain inside the safe range of coilovers, shocks, bump stops, control arms, CV joints, tie rods, steering rack, lines, wiring, rear driveshaft, tires, and bodywork."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Ford Bronco suspension mistakes",
        items: [
          ["Selecting by lift height alone", "Equal advertised height can use different preload, springs, coilovers, shocks, travel, geometry correction, and load assumptions."],
          ["Ignoring CV and steering angles", "Excessive front height can increase joint angles, tie-rod load, rack demand, and alignment difficulty while reducing droop."],
          ["Assuming every build needs upper control arms", "Use them to answer measured alignment, ball-joint angle, travel, clearance, or durability needs."],
          ["Choosing spring rate before weighing", "Bumper, winch, roof rack, tent, drawers, water, armor, and spare weight change front and rear requirements."],
          ["Mixing HOSS applications", "Factory HOSS versions and high-performance configurations use different hardware and calibration that are not universal."],
          ["Skipping loaded alignment", "Final caster, camber, toe, rear centering, steering, and tire behavior should be checked at representative load."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Ford Bronco suspension questions",
        items: [
          { question: "Does every lifted Bronco need aftermarket upper control arms?", answer: "No. The need depends on actual lift, alignment range, ball-joint angle, travel, tire clearance, durability target, and the complete suspension system." },
          { question: "Does every Bronco use the same HOSS hardware?", answer: "No. HOSS version, shocks, springs, steering, package, and model-year content vary. Confirm exact parts and application." },
          { question: "Can longer front coilovers create more usable travel by themselves?", answer: "Not necessarily. Control arms, CV joints, steering, bump stops, tire clearance, lines, and the coilover's compressed and extended limits define usable travel." }
        ]
      }
    ],
    related: [related.hub, related.first, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.offRoad, sources.models, sources.orderGuide, sources.owners]
  },
  {
    key: "ford-bronco-tire-size",
    kind: "article",
    route: "/vehicles/ford-bronco/tire-size",
    title: "Ford Bronco Tire Size and Fitment Guide | RigAI",
    description:
      "Evaluate Ford Bronco tire fitment by Sasquatch status, fenders, wheel width, offset, measured size, steering, compression, gearing, and spare support.",
    socialTitle: "Ford Bronco Tire Size and Fitment Guide | RigAI",
    socialDescription:
      "Plan modern Bronco tires without a universal maximum-size claim, using wheel geometry, full steering and compression, gearing, and load.",
    eyebrow: "2021-present Ford Bronco tire fitment",
    h1: "Ford Bronco Tire Size and Fitment Guide",
    dek:
      "Street-driving clearance does not prove clearance at full steering, compression, or articulation. Verify the exact trim, factory package, fenders, wheel, tire, suspension, steering, and load.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size and fitment"),
    takeaways: [
      "There is no universal largest tire size for every 2021-present Ford Bronco configuration.",
      "Sasquatch and non-Sasquatch vehicles can differ in tires, wheels, fenders, gearing, suspension, and clearance components.",
      "Use measured tire dimensions and approved wheel-width range, not only the nominal sidewall code.",
      "Check steering, compression, articulation, gearing, braking, driver-assistance behavior, and spare-carrier load."
    ],
    toc: [
      ["direct-answer", "Fitment answer"],
      ["factory-baseline", "Factory baseline"],
      ["wheel-geometry", "Wheel geometry"],
      ["dynamic-clearance", "Dynamic clearance"],
      ["fitment-process", "Fitment process"],
      ["tradeoffs", "Driving trade-offs"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "What tire size fits a Ford Bronco?",
        paragraphs: [
          "The answer depends on model year, 2-door or 4-door body, trim, Sasquatch status, factory fenders, suspension and HOSS version, wheel width, offset, backspacing, tire brand, measured diameter and width, steering travel, bump stops, added load, and prior modifications.",
          "Standard, Sasquatch, Badlands, and Raptor configurations can begin with different tires, wheels, fenders, gearing, suspension, steering, and clearance. Treat Raptor fitment as a separate application and confirm every component on the individual vehicle."
        ],
        contextualLink: {
          before: "If additional clearance is genuinely required, compare options in the ",
          label: "Ford Bronco lift-kit guide",
          href: "/vehicles/ford-bronco/lift-kit",
          after: "."
        }
      },
      {
        type: "checklist",
        id: "factory-baseline",
        title: "Record the factory and current baseline",
        items: [
          "Model year, door count, trim, engine, transmission, axle ratio, transfer case, and factory package",
          "Sasquatch status, HOSS version, factory fenders, crash bars or other clearance components, and current suspension",
          "Door-jamb tire size, pressure, loading information, and current tire condition",
          "Wheel diameter, width, offset, backspacing, load rating, and brake clearance",
          "Tire brand, model, construction, load range, measured diameter, section width, and tread width",
          "Coilover, spacer, perch, control-arm, bump-stop, rear spring, shock, track-bar, and alignment changes",
          "Normal passengers, cargo, bumpers, winch, armor, spare support, roof equipment, and trip load",
          "Spare location, carrier and tailgate rating, camera view, and third brake-light position"
        ],
        note:
          "Factory package names and nominal tire labels are starting points. Physical dimensions and dynamic clearance on the complete vehicle determine the result."
      },
      {
        type: "comparison",
        id: "wheel-geometry",
        title: "How wheel geometry changes tire position",
        caption: "Wheel and tire variables to verify together",
        headers: ["Variable", "What it changes", "Why it matters"],
        rows: [
          ["Wheel width", "Tire section shape and approved mounting range", "Can change measured width, bead support, steering path, and manufacturer approval."],
          ["Offset", "Inboard or outboard tire position", "Changes scrub radius, steering feel, bearing and tie-rod leverage, fender coverage, and contact points."],
          ["Backspacing", "Inner wheel and tire position", "Affects upper-control-arm, tie-rod, sway-bar, brake, and suspension clearance."],
          ["Measured tire dimensions", "Actual diameter, width, shoulder, and tread profile", "Products with the same nominal code can occupy different space."],
          ["Unsprung mass", "Weight accelerated and controlled by the suspension", "Can affect damping, steering, tie-rod and rack loads, braking, acceleration, and ride."],
          ["Spare support", "Tailgate, hinge, carrier, and package depth", "Affects latch behavior, camera, third brake light, visibility, and departure clearance."]
        ]
      },
      {
        type: "systems",
        id: "dynamic-clearance",
        title: "Check clearance through real movement",
        items: [
          ["Full steering lock", "Inspect both directions, forward and reverse, over uneven surfaces, with the actual alignment and steering system."],
          ["Front compression and droop", "Check fenders, liners, crash bars or clearance components, body, control arms, tie rods, CVs, coilovers, and bump stops."],
          ["Rear articulation", "Check fender, liner, spring, shock, sway-bar, track-bar, bumper, and body relationships with representative load."],
          ["Factory fenders", "Sasquatch and other package differences change available space; visible static clearance is not proof of dynamic fit."],
          ["Steering and suspension", "Wheel offset, tire mass, and terrain loads affect tie rods, rack, joints, bearings, alignment, and control-arm clearance."],
          ["Spare and tailgate", "Verify carrier and hinge capacity, latch condition, camera view, third brake light, and rear-door operation."],
          ["Load", "Passengers, cargo, armor, bumpers, roof equipment, spare support, and trip supplies change ride height and available travel."],
          ["Calibration", "Changed diameter can affect speedometer accuracy, shift behavior, gearing, and driver-assistance systems; use supported calibration guidance."]
        ]
      },
      {
        type: "sequence",
        id: "fitment-process",
        title: "A repeatable tire-fitment process",
        items: [
          ["Identify the exact Bronco", "Record trim, door count, powertrain, axle ratio, transfer case, Sasquatch status, HOSS version, fenders, suspension, and changes."],
          ["Choose tire performance", "Balance road use, weather, terrain, construction, load rating, noise, wet behavior, repair needs, and weight."],
          ["Confirm wheel compatibility", "Check approved wheel width, load rating, offset, backspacing, brakes, upper control arm, tie rods, and fender coverage."],
          ["Use measured specifications", "Compare manufacturer diameter, width, tread, and measuring-wheel data instead of relying only on the nominal code."],
          ["Test dynamic clearance", "Inspect steering lock, front compression and droop, rear articulation, bump-stop engagement, and body clearance at representative load."],
          ["Plan the spare", "Confirm usable diameter, carrier and tailgate support, tools, camera, third brake light, and practical access."],
          ["Verify road behavior and calibration", "Evaluate pressure, balance, alignment, steering, braking, acceleration, shifting, speedometer, assistance systems, noise, and fuel use."]
        ]
      },
      {
        type: "dependency",
        id: "tradeoffs",
        title: "Larger and heavier tires affect more than clearance",
        steps: ["Diameter, width, offset, and mass", "Effective gearing and unsprung load", "Acceleration, braking, and steering demand", "Speedometer and assistance-system inputs", "Axle-ratio, suspension, steering, and spare decisions"],
        text:
          "The practical effect depends on engine, transmission, axle ratio, wheel geometry, vehicle weight, tire construction, pressure, speed, terrain, and supported calibration. A clearance result alone does not prove the complete vehicle performs as intended."
      },
      {
        type: "faq",
        id: "questions",
        title: "Ford Bronco tire questions",
        items: [
          { question: "Is there one largest tire size for every modern Bronco?", answer: "No. Fitment depends on trim, package, fenders, wheel, tire, suspension, steering, bump stops, load, articulation, and prior modifications." },
          { question: "Does street clearance prove trail clearance?", answer: "No. Full steering, front compression and droop, rear articulation, bump-stop engagement, and loaded operation can reveal different contact points." },
          { question: "Does lift solve wheel-offset problems?", answer: "Not necessarily. Height does not automatically correct tire position, scrub radius, steering leverage, control-arm clearance, or every dynamic contact point." }
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.lift, related.overland],
    safety,
    sources: [sources.offRoad, sources.models, sources.orderGuide, sources.owners]
  },
  {
    key: "ford-bronco-lift-kit",
    kind: "article",
    route: "/vehicles/ford-bronco/lift-kit",
    title: "Ford Bronco Lift Kit Guide | RigAI",
    description:
      "Compare Ford Bronco leveling kits, spacer lifts, perch collars, coilovers, rear suspension changes, IFS geometry, alignment, steering, and ride.",
    socialTitle: "Ford Bronco Lift Kit Guide | RigAI",
    socialDescription:
      "Choose a Bronco lift by tire goal, Sasquatch status, HOSS hardware, IFS geometry, steering, rear suspension, load, and daily use.",
    eyebrow: "2021-present Ford Bronco lift planning",
    h1: "Ford Bronco Lift Kit Guide",
    dek:
      "Lift height alone does not describe system quality. Define the tire, terrain, load, travel, steering, and daily-use goal, then verify the exact HOSS and factory package.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Lift kit"),
    takeaways: [
      "A spacer lift changes ride height but does not create additional usable wheel travel.",
      "Extra front height can increase CV and steering angles, reduce droop, and create alignment problems.",
      "Sasquatch and non-Sasquatch vehicles may need different parts because their tires, fenders, gearing, suspension, and baseline height differ.",
      "There is no universal lift height or supporting-parts list for every Bronco."
    ],
    toc: [
      ["direct-answer", "Choosing lift intent"],
      ["lift-types", "Lift types"],
      ["intent", "Recommendations by intent"],
      ["supporting-parts", "Supporting components"],
      ["geometry", "IFS geometry"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Choose a lift from the result you need",
        paragraphs: [
          "Define whether the goal is visual leveling, restoring stance under permanent load, verified larger-tire clearance, improved damping, or frequent technical use. Actual height varies with door count, engine, trim, Sasquatch status, HOSS hardware, roof, bumpers, winch, spare, armor, and cargo.",
          "Evaluate front coilovers or spacers, rear springs and shocks, upper control arms, rear track-bar geometry, bump stops, CV and steering angles, tie-rod load, alignment, tire path, crash bars or other clearance components, daily ride, travel, and installation requirements."
        ],
        contextualLink: {
          before: "For component relationships and load effects, read the ",
          label: "Ford Bronco suspension guide",
          href: "/vehicles/ford-bronco/suspension",
          after: "."
        }
      },
      {
        type: "comparison",
        id: "lift-types",
        title: "Compare common Bronco lift approaches",
        caption: "Lift approach and planning boundary",
        headers: ["Approach", "Can address", "Must still be verified"],
        rows: [
          ["Leveling kit", "A modest front-to-rear stance change", "Front droop, alignment, CV and steering angles, load balance, rear stance, and tire clearance."],
          ["Spacer lift", "Ride-height change while retaining current springs and dampers", "It does not add usable travel; check coilover limits, bump stops, droop, geometry, and ride."],
          ["Perch collars", "Spring-seat and preload change in supported applications", "Spring and shock application, ride, available droop, installed height, and manufacturer instructions."],
          ["Replacement coilovers", "Front height, spring rate, damping, and travel objectives", "HOSS application, control arms, CVs, steering, bump stops, alignment, and compressed clearance."],
          ["Complete suspension system", "Coordinated front and rear springs, dampers, travel, and correction", "Exact package, included and omitted parts, steering, rear centering, load assumptions, and installation."],
          ["Rear spring and shock changes", "Rear load support, height, damping, and axle control", "Track-bar geometry, bump stops, driveshaft, brake lines, sway bar, and representative load."]
        ]
      },
      {
        type: "scenarios",
        id: "intent",
        title: "Lift planning by purpose",
        items: [
          {
            title: "Visual leveling",
            priority: "A modest measured change with alignment, droop, CV, steering, ride, and load balance preserved.",
            wait: "Extra height that adds geometry and access compromises without functional value.",
            data: "Current rake, permanent weight, actual desired change, door count, engine, HOSS version, and tire plan."
          },
          {
            title: "Mild trail and daily use",
            priority: "Controlled ride, useful front and rear travel, correct bump limits, predictable steering, and verified tire clearance.",
            wait: "Maximum height or heavy spring rate when most use is on pavement.",
            data: "Trail obstacles, highway use, occupants, load, Sasquatch status, tire measurements, wheel offset, and factory package."
          },
          {
            title: "Larger tire clearance",
            priority: "Measured tire and wheel package, fenders, steering path, control-arm clearance, bump stops, compression, gearing, braking, and spare support.",
            wait: "Assuming lift height alone guarantees fitment.",
            data: "Trim, Sasquatch status, actual tire dimensions, wheel width and offset, crash bars or clearance components, alignment, and load."
          },
          {
            title: "Frequent technical use",
            priority: "Durable steering, controlled travel, CV margin, alignment, bump stops, rear centering, lines, driveshaft, and regular inspection.",
            wait: "Front height that sacrifices droop or creates poor CV, tie-rod, rack, and ball-joint angles.",
            data: "Obstacles, HOSS hardware, tire plan, wheelbase, steering parts, cooling, recovery, and full-travel measurements."
          },
          {
            title: "Heavy overland load",
            priority: "Measured permanent weight, spring support, damping, body control, braking, axle load, roof load, and representative alignment.",
            wait: "Spring rate selected from an accessory list instead of measured weight.",
            data: "Bumpers, winch, armor, rack, tent, storage, water, battery, spare, passengers, and trip cargo."
          }
        ]
      },
      {
        type: "systems",
        id: "supporting-parts",
        title: "Supporting parts to evaluate",
        items: [
          ["Upper control arms", "May improve alignment range, ball-joint angle, travel, or tire clearance in some systems; they are not automatic requirements."],
          ["Rear track-bar correction", "May address rear axle centering or geometry after measured height change; verify mounts, links, sway bar, and clearance."],
          ["Bump stops", "Protect coilovers, shocks, tires, fenders, control arms, steering, rear suspension, and bodywork at compression."],
          ["CV joints", "Check operating and full-droop angles, boots, plunge, binding, and compatibility with actual installed height."],
          ["Tie rods and steering rack", "Account for tire mass, wheel offset, steering angle, terrain impacts, rack condition, and part application."],
          ["Alignment", "Measure caster, camber, toe, steering-wheel position, tire wear, and road behavior after installation."],
          ["Rear shocks and springs", "Match load, height, damping, travel, bump limits, rear axle position, and driveshaft clearance."],
          ["Tires and clearance parts", "Verify full steering and travel, fenders, control arms, crash bars or related components, spare support, gearing, and calibration."]
        ]
      },
      {
        type: "dependency",
        id: "geometry",
        title: "Front geometry follows actual installed height",
        steps: ["Defined purpose and complete load", "Measured front and rear height", "IFS control-arm, CV, and steering angles", "Alignment range, droop, and tire path", "Loaded road and full-travel verification"],
        text:
          "More front lift can reduce droop, increase CV and steering angles, and make caster, camber, or toe harder to achieve. There is no rule that every nominal 2-inch or 2.5-inch system needs exactly the same parts. Confirm HOSS version, Sasquatch status, and system-specific instructions."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Ford Bronco lift mistakes",
        items: [
          ["Buying only by advertised height", "Height does not describe preload, spring rate, damping, travel, geometry, steering demand, load assumptions, or included parts."],
          ["Assuming spacers add wheel travel", "A spacer changes position within existing travel and can reduce available droop without changing the damper's total stroke."],
          ["Ignoring HOSS and package differences", "Sasquatch, non-Sasquatch, and different HOSS systems can require different components and starting assumptions."],
          ["Overlooking tie-rod and rack load", "Larger tires, offset, extra height, and technical terrain can increase steering leverage and impact demand."],
          ["Using lift to mask overload", "Suspension can change stance and control but does not increase certified vehicle, axle, tire, roof, or towing ratings."],
          ["Skipping post-installation checks", "Fastener torque, alignment, CV behavior, steering, tire contact, rear centering, travel, and loaded ride need verification."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Ford Bronco lift questions",
        items: [
          { question: "What lift height is best for every Ford Bronco?", answer: "There is no universal height. Choose from tire, terrain, load, HOSS version, Sasquatch status, steering, travel, daily-use, and installation objectives." },
          { question: "Does every 2.5-inch lift need upper control arms?", answer: "No. Actual installed height, alignment, ball-joint angle, travel, clearance, and the system's correction method determine the need." },
          { question: "Can more front lift reduce droop?", answer: "Yes. Some approaches reposition the suspension within existing travel, leaving less downward movement. Verify the complete coilover and control-arm range." }
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.offRoad, sources.models, sources.orderGuide, sources.owners]
  },
  {
    key: "ford-bronco-overland-build",
    kind: "article",
    route: "/vehicles/ford-bronco/overland-build",
    title: "Ford Bronco Overland Build Guide | RigAI",
    description:
      "Plan a Ford Bronco overland build around payload, 2-door or 4-door cargo space, removable roof, racks, storage, recovery, power, water, and suspension.",
    socialTitle: "Ford Bronco Overland Build Guide | RigAI",
    socialDescription:
      "A staged modern Bronco travel plan focused on payload, roof compatibility, useful equipment, center of gravity, handling, and daily use.",
    eyebrow: "2021-present Ford Bronco overland planning",
    h1: "Ford Bronco Overland Build Guide",
    dek:
      "Build from the trip, not an accessory catalog. Door count, payload, removable roof, cargo space, water, recovery, shelter, armor, spare weight, and daily use must work together.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "The Bronco can become overloaded or top-heavy when armor, bumpers, winch, rack, tent, drawers, water, batteries, and a large spare are combined.",
      "A 2-door and 4-door vehicle need different cargo-space, wheelbase, rear-seat, access, and load-distribution strategies.",
      "Confirm soft-top or hardtop compatibility and roof-system limits before adding racks, cargo, or a rooftop tent.",
      "Measure permanent and representative trip weight before final spring-rate and damping choices."
    ],
    toc: [
      ["trip-first", "Start with the trip"],
      ["cargo-systems", "Cargo and camp systems"],
      ["weight-chain", "Weight and handling"],
      ["staged-build", "Staged build"],
      ["loaded-checks", "Loaded checks"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "trip-first",
        title: "Start with trip type, duration, and payload",
        paragraphs: [
          "List occupants, trip duration, climate, route difficulty, resupply, recovery support, water, food, shelter, tools, spare parts, communication, fuel planning, and daily-driving needs. Compare the complete load with the tire and loading label and owner information for the exact Bronco.",
          "A 2-door has tighter rear-seat and cargo compromises and rewards compact removable systems. A 4-door offers more room but can invite heavier permanent equipment. Available volume is not the same as payload."
        ],
        contextualLink: {
          before: "Set the complete platform baseline in the ",
          label: "Ford Bronco upgrade guide",
          href: "/vehicles/ford-bronco",
          after: "."
        }
      },
      {
        type: "systems",
        id: "cargo-systems",
        title: "Plan cargo and camp systems together",
        items: [
          ["Roof racks", "Confirm body and roof mounting, soft-top or hardtop compatibility, removable-panel operation, dynamic use, wind, height, and vehicle-specific limits."],
          ["Rooftop tents", "Include tent, rack, occupants, bedding, and mounting weight; evaluate center of gravity, roof limits, access, and daily removal needs."],
          ["Rear cargo systems", "Balance organization and security against drawer weight, rear-seat use, visibility, spare access, roof removal, and emergency removal."],
          ["Refrigerators", "Plan secure mounting, ventilation, power consumption, cable protection, and access without unloading the vehicle."],
          ["Batteries and solar", "Choose capacity, chemistry, charging, solar input, controllers, fusing, cable size, mounting, ventilation, and service access as one system."],
          ["Water and fuel", "Count container and liquid weight, secure it low, plan sanitation or legal storage, and carry only what the route requires."],
          ["Bumpers, winches, and skid plates", "Confirm mounting, recovery rating, airflow, front weight, spring response, approach clearance, electrical demand, and service access."],
          ["Spare and tire carrier", "Verify tire mass, tailgate and carrier capacity, hinge and latch condition, camera, third brake light, departure clearance, and swing-gate use."]
        ]
      },
      {
        type: "dependency",
        id: "weight-chain",
        title: "Accessory weight changes the complete vehicle",
        steps: ["Trip and accessory inventory", "Front, rear, and roof load", "Payload and tire capacity", "Braking, body roll, and center of gravity", "Spring rate and damping"],
        text:
          "Armor, bumpers, winch, rack, rooftop tent, drawers, water, batteries, recovery gear, fuel, and a large spare add up quickly. High or rearward load can increase body roll and axle demand even when total weight appears close to a limit."
      },
      {
        type: "sequence",
        id: "staged-build",
        title: "A staged Ford Bronco overland build",
        intro:
          "Test each stage on representative roads and trips. Remove equipment that does not earn its weight, space, cost, and maintenance burden.",
        items: [
          ["Stage 1: reliability, tires, recovery, and protection", "Complete maintenance, inspect steering and brakes, choose suitable tires, confirm recovery points, and add only essential protection."],
          ["Stage 2: lightweight storage and camping", "Use removable bins, compact shelter, basic cooking, communication, water, and low-mounted cargo before permanent systems."],
          ["Stage 3: measure weight and tune suspension", "Weigh representative load, check axle distribution, braking, body roll, ride height, and tire capacity, then tune springs and damping where needed."],
          ["Stage 4: advanced equipment when justified", "Add armor, electrical systems, larger spare support, permanent storage, or specialized recovery equipment only when repeated trips prove the need."]
        ]
      },
      {
        type: "checklist",
        id: "loaded-checks",
        title: "Loaded Bronco checks before travel",
        items: [
          "Vehicle, axle, payload, tire, wheel, roof, rack, carrier, hitch, and towing ratings for the exact configuration",
          "Front and rear axle weight with occupants, water, cargo, recovery gear, spare, and fuel",
          "Cargo restraint, rear-seat compromise, visibility, emergency access, and restraint-system clearance",
          "Roof mounting, removable-panel operation, soft-top or hardtop compatibility, wind, height, and center of gravity",
          "Tire condition, pressure, load rating, dynamic clearance, supported calibration, and usable spare",
          "Brake condition, loaded stopping behavior, steering, body roll, crosswind response, and headlight aim",
          "Front coilover and CV behavior, steering loads, rear spring and shock control, axle centering, and alignment",
          "Battery, solar, fusing, cable protection, ventilation, charging, and water resistance",
          "Daily parking, garage height, noise, fuel economy, tailgate operation, roof removal, and removal of unused gear"
        ],
        note:
          "Springs, racks, carriers, and hitches do not increase certified vehicle, axle, tire, roof, payload, or towing ratings."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Ford Bronco overland mistakes",
        items: [
          ["Buying every popular accessory", "A useful travel vehicle carries equipment required by its routes, occupants, climate, and support plan."],
          ["Ignoring removable-roof constraints", "A rack or hardtop does not automatically approve every tent, occupied load, dynamic load, or panel-removal plan."],
          ["Stacking weight high", "Roof cargo and tall storage raise the center of gravity and can change body roll, braking, steering, and side-slope confidence."],
          ["Tuning suspension before weighing", "Spring rate and damping should answer measured permanent and trip load, not a future accessory list."],
          ["Overloading the tailgate", "A heavy spare and carrier can affect hinges, latch, camera, third brake light, rear access, and departure clearance."],
          ["Losing daily usability", "Permanent equipment affects noise, access, rear seats, parking, fuel use, visibility, roof removal, and handling between trips."]
        ],
        contextualLink: {
          before: "Match measured final load with the ",
          label: "Ford Bronco suspension guide",
          href: "/vehicles/ford-bronco/suspension",
          after: "."
        }
      },
      {
        type: "faq",
        id: "questions",
        title: "Ford Bronco overland questions",
        items: [
          { question: "Does a 4-door Bronco automatically have enough payload for a full travel build?", answer: "No. Available cargo volume and payload are different. Include occupants, options, accessories, cargo, and tongue load where applicable." },
          { question: "Is a rooftop tent required?", answer: "No. Ground tents and removable shelter can reduce roof load, height, cost, wind resistance, and permanent weight." },
          { question: "Should suspension be upgraded before the cargo system?", answer: "Usually permanent and representative trip load should be defined and measured first, unless an existing condition already requires repair." }
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.lift],
    safety,
    sources: [sources.offRoad, sources.models, sources.orderGuide, sources.owners]
  }
];
