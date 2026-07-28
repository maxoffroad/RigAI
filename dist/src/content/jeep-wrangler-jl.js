const dates = {
  published: "2026-07-28T12:00:00+05:00",
  modified: "2026-07-28T12:00:00+05:00",
  reviewedLabel: "July 28, 2026"
};

const vehicle = {
  slug: "jeep-wrangler-jl",
  name: "Jeep Wrangler JL",
  shortName: "Wrangler JL",
  guidesLabel: "Jeep Wrangler JL",
  heroLabel: "WRANGLER JL",
  ctaLabel: "Build My Setup",
  planInputs:
    "model year, door count, trim, engine, axle and transfer-case equipment, factory packages, tires, suspension, driving profile, payload, installed equipment, and planned load"
};

const scope = {
  title: "Vehicle scope: 2018-present Jeep Wrangler JL",
  text:
    "This guide covers US-market Jeep Wrangler JL models from 2018 to the present, including 2-door and 4-door Wrangler Unlimited versions. Equipment varies by model year, trim, engine, transmission, axle, transfer case, factory package, and previous modification, so identify the exact vehicle before selecting parts."
};

const safety = {
  title: "Safety, load, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, tire and loading label, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify model year, door count, trim, engine, transmission, axle, axle ratio, transfer case, wheel dimensions, tire measurements, suspension, alignment, added weight, prior modifications, and manufacturer fitment data before purchasing or installing parts."
  ]
};

const sources = {
  capability: {
    label: "2025 Jeep Wrangler capability overview",
    href: "https://www.jeep.com/2025/wrangler/capability.html",
    type: "Jeep official vehicle information"
  },
  systems: {
    label: "Jeep 4x4 systems overview",
    href: "https://www.jeep.com/4x4.html",
    type: "Jeep official capability information"
  },
  faq: {
    label: "2025 Jeep Wrangler specifications FAQ",
    href: "https://www.jeep.com/2025/wrangler/faq.html",
    type: "Jeep official model information"
  },
  manual: {
    label: "Jeep Wrangler owner's handbook",
    href: "https://www.jeep.com/content/dam/cross-regional/stellantis/jeep/emea/bulgaria/bg_bg/owners/owners-manuals/WRANGLER_Owner_Handbook_EN.pdf",
    type: "Jeep official owner information"
  }
};

const breadcrumbs = (label) => [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  ...(label
    ? [
        { label: "Jeep Wrangler JL", href: "/vehicles/jeep-wrangler-jl" },
        { label }
      ]
    : [{ label: "Jeep Wrangler JL" }])
];

const related = {
  hub: {
    title: "Jeep Wrangler JL Guide",
    href: "/vehicles/jeep-wrangler-jl",
    text: "Start with the complete 2018-present Wrangler JL planning framework."
  },
  first: {
    title: "First Upgrades for a Wrangler JL",
    href: "/vehicles/jeep-wrangler-jl/first-upgrades",
    text: "Prioritize inspection, tires, recovery, protection, and only the suspension changes the use case requires."
  },
  suspension: {
    title: "Wrangler JL Suspension Guide",
    href: "/vehicles/jeep-wrangler-jl/suspension",
    text: "Plan springs, shocks, control arms, track bars, bump stops, and alignment as one geometry system."
  },
  tires: {
    title: "Wrangler JL Tire Size and Fitment Guide",
    href: "/vehicles/jeep-wrangler-jl/tire-size",
    text: "Check measured tire size, wheel geometry, articulation clearance, gearing, braking, and spare support."
  },
  lift: {
    title: "Wrangler JL Lift Kit Guide",
    href: "/vehicles/jeep-wrangler-jl/lift-kit",
    text: "Match lift intent with spring, shock, geometry, bump-stop, driveline, and daily-use requirements."
  },
  overland: {
    title: "Wrangler JL Overland Build Guide",
    href: "/vehicles/jeep-wrangler-jl/overland-build",
    text: "Build a staged travel plan around payload, cargo space, roof load, recovery, and center of gravity."
  }
};

export const jeepWranglerJlPages = [
  {
    key: "jeep-wrangler-jl",
    kind: "vehicleHub",
    route: "/vehicles/jeep-wrangler-jl",
    title: "Jeep Wrangler JL Off-Road Upgrade Guide | RigAI",
    description:
      "Plan Jeep Wrangler JL upgrades for 2018-present 2-door and 4-door models around trim equipment, tires, suspension, recovery, trails, and daily use.",
    socialTitle: "Jeep Wrangler JL Off-Road Upgrade Guide | RigAI",
    socialDescription:
      "A practical planning hub for 2018-present Jeep Wrangler JL tires, suspension, lift, protection, recovery, and overland use.",
    eyebrow: "2018-present Jeep Wrangler JL planning guide",
    h1: "Jeep Wrangler JL Off-Road Upgrade Guide",
    dek:
      "Plan the vehicle you actually own. Door count, trim, powertrain, axles, factory packages, tire equipment, daily use, and trail goals all change a sensible upgrade order.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Separate factory capability from equipment that is optional or trim-specific.",
      "A capable stock Wrangler may need inspection, tires, recovery preparation, and driver practice before it needs lift height.",
      "Account for the shorter 2-door wheelbase or the greater cargo and load potential of a 4-door vehicle.",
      "Verify the exact engine, axle ratio, transfer case, factory tire package, suspension, and previous modifications."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["configurations", "Configuration differences"],
      ["use-cases", "Daily and trail use"],
      ["upgrade-goals", "Common upgrade goals"],
      ["featured-guides", "Wrangler JL guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should a Wrangler JL plan begin with?",
        paragraphs: [
          "Start with the exact model year, door count, trim, engine, transmission, axle equipment, transfer case, factory tire package, roof type, current suspension, and installed accessories. The JL uses solid front and rear axles with coil springs, but that shared layout does not make every configuration or aftermarket part interchangeable.",
          "Sport, Willys, Sahara, Rubicon, Rubicon X, and 4xe configurations can begin with different tires, protection, axle hardware, powertrain weight, and off-road systems. Confirm what is actually installed instead of planning from a trim name alone."
        ]
      },
      {
        type: "systems",
        id: "configurations",
        title: "Configuration details that change the plan",
        intro:
          "Model-year changes and factory options matter. Use the build sheet, labels, owner's information, and a physical inspection to confirm the baseline.",
        items: [
          ["Door count and wheelbase", "A 2-door turns tightly and has less cargo room; a 4-door offers more space and a longer wheelbase but can carry more accessory and trip weight."],
          ["Sport and Sahara", "Confirm factory tires, axle equipment, transfer case, tow hooks, protection, and intended terrain before assuming a Rubicon-oriented part or sequence applies."],
          ["Willys", "Factory tire and traction equipment can differ by year and package, so verify the actual axle, differential, wheel, tire, and suspension configuration."],
          ["Rubicon and Rubicon X", "Equipped models may include locking differentials, an electronic front sway-bar disconnect, different axles, lower gearing, protection, or high-clearance equipment; none should be assumed on another trim."],
          ["4xe", "The plug-in hybrid system changes curb weight, packaging, load planning, and compatible parts. Use 4xe-specific manufacturer fitment and service guidance."],
          ["Engine and axle ratio", "Powertrain and gearing affect acceleration, engine braking, crawl behavior, tire-size trade-offs, towing, and heat management."],
          ["Factory tire packages", "Nominal tire size, wheel width, offset, fenders, bump stops, and suspension can change clearance; verify the complete package."],
          ["Roof and top", "Soft top, hardtop, and other roof systems change weather protection, cargo mounting options, weight, noise, and rack compatibility."]
        ]
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Match priorities to daily and trail use",
        intro:
          "The best plan keeps the Wrangler useful between trips and adds capability only where the terrain exposes a real limitation.",
        items: [
          {
            title: "Daily driver",
            priority: "Condition, tire behavior, pressure, braking, steering, visibility, weather use, and ride quality.",
            wait: "Heavy armor, aggressive offset, or a tall suspension system without a defined trail need.",
            data: "Commute, passengers, parking, climate, roof use, current tires, and highway behavior."
          },
          {
            title: "Mild trail use",
            priority: "Suitable tires, rated recovery points, recovery practice, vulnerable-area protection, and dynamic clearance.",
            wait: "A lift when stock clearance and careful line choice already match the trails.",
            data: "Surface, ledges, mud, snow, water, partners, trim equipment, and full-articulation clearance."
          },
          {
            title: "Technical rock use",
            priority: "Traction equipment, tire and wheel durability, controlled articulation, protection, recovery, gearing, and steering geometry.",
            wait: "Cosmetic changes or suspension travel that is not limited by correct bump stops, lines, and driveshaft clearance.",
            data: "Axles, lockers, sway-bar system, transfer case, tire plan, wheelbase, breakover needs, and recovery access."
          },
          {
            title: "Overland travel",
            priority: "Payload, cargo access, low-mounted weight, range, recovery, reliability, and representative loaded handling.",
            wait: "Permanent racks, tents, drawers, armor, and electrical systems before the trip inventory is known.",
            data: "Door count, occupants, trip length, roof rating, water, food, spare, batteries, shelter, and daily usability."
          }
        ]
      },
      {
        type: "systems",
        id: "upgrade-goals",
        title: "Plan common Wrangler JL goals as connected systems",
        items: [
          ["Tires and wheels", "Terrain, weather, measured dimensions, wheel geometry, articulation, gearing, braking, steering, and spare support."],
          ["Recovery", "Confirmed rated recovery points, suitable equipment, training, safe access, and a method appropriate to the situation."],
          ["Protection", "Skid plates, rock rails, differential protection, bumpers, terrain exposure, mounting, service access, and added weight."],
          ["Suspension", "Springs, shocks, control arms, track bars, sway bars, bump stops, travel, geometry, alignment, and operating load."],
          ["Lift and clearance", "Tire goal, terrain, fenders, articulation, steering geometry, driveline limits, installation complexity, and road behavior."],
          ["Overland equipment", "Payload, roof limits, cargo volume, water, power, shelter, spare-tire support, center of gravity, and braking."],
          ["Steering and alignment", "Caster, toe, axle centering, tire balance, wheel offset, joints, fasteners, and post-installation inspection."],
          ["Factory systems", "Confirm lockers, sway-bar disconnect, transfer case, axle ratio, high-clearance packages, and any model-year-specific controls."]
        ]
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Jeep Wrangler JL guides",
        published: [
          { eyebrow: "Published guide", title: "Best First Upgrades for a Wrangler JL", text: "Choose a useful order for daily driving, mild trails, rock use, or overland travel.", href: related.first.href },
          { eyebrow: "Published guide", title: "Wrangler JL Suspension Guide", text: "Connect spring and shock choices with geometry, travel, alignment, load, and steering.", href: related.suspension.href },
          { eyebrow: "Published guide", title: "Wrangler JL Tire Size Guide", text: "Evaluate measured tire dimensions, wheel position, articulation, gearing, and spare support.", href: related.tires.href },
          { eyebrow: "Published guide", title: "Wrangler JL Lift Kit Guide", text: "Choose a complete system from the tire goal, terrain, geometry, and daily-use trade-offs.", href: related.lift.href },
          { eyebrow: "Published guide", title: "Wrangler JL Overland Build Guide", text: "Stage payload, storage, shelter, recovery, armor, power, and suspension decisions.", href: related.overland.href }
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Wrangler JL planning questions",
        items: [
          { question: "Does every Wrangler JL need a lift for trail use?", answer: "No. Stock clearance, factory tires, trim equipment, careful driving, and suitable trail selection may already meet the goal. Lift should solve a defined clearance, travel, load, or tire requirement." },
          { question: "Does every Rubicon have the same equipment?", answer: "No. Model year, door count, engine, transmission, package, axle ratio, tire package, and previous modifications can differ. Confirm the individual vehicle." },
          { question: "Are 2-door and 4-door suspension choices identical?", answer: "Not automatically. Wheelbase, curb weight, cargo capacity, spring calibration, operating load, and part application can differ." }
        ]
      }
    ],
    related: [related.first, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.capability, sources.systems, sources.faq, sources.manual]
  },
  {
    key: "jeep-wrangler-jl-first-upgrades",
    kind: "article",
    route: "/vehicles/jeep-wrangler-jl/first-upgrades",
    title: "Best First Off-Road Upgrades for Jeep Wrangler JL | RigAI",
    description:
      "Prioritize first Jeep Wrangler JL upgrades for daily driving, mild trails, rock crawling, or overland travel without assuming an immediate lift.",
    socialTitle: "Best First Upgrades for Jeep Wrangler JL | RigAI",
    socialDescription:
      "A practical first-upgrade order for 2018-present Wrangler JL models, with Rubicon and non-Rubicon priorities explained.",
    eyebrow: "2018-present Wrangler JL first upgrades",
    h1: "Best First Off-Road Upgrades for Jeep Wrangler JL",
    dek:
      "Begin with condition, pressure, recovery, protection, and the terrain you actually drive. Factory capability can change the order, but it does not remove the need to verify the exact vehicle.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Inspect steering, suspension, tires, brakes, recovery points, and underbody condition before adding parts.",
      "A lift is not a universal first purchase, even for a Wrangler used off pavement.",
      "Rubicon and non-Rubicon vehicles can begin with different traction, protection, and clearance equipment.",
      "Avoid heavy accessories and aggressive wheel offset until their effect on payload, steering, clearance, and suspension is understood."
    ],
    toc: [
      ["baseline", "Baseline inspection"],
      ["first-systems", "What to consider first"],
      ["build-order", "Use-case sequences"],
      ["trim-priorities", "Rubicon differences"],
      ["avoid", "What to avoid"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Inspect the Wrangler before planning upgrades",
        paragraphs: [
          "Check tire age, condition, pressure, uneven wear, wheel damage, brake condition, steering play, ball joints, control-arm and track-bar bushings, shocks, springs, fasteners, leaks, recovery points, tow hooks where equipped, skid plates, rock rails, and evidence of trail contact. Correcting a baseline problem is more valuable than hiding it behind new parts.",
          "Confirm which recovery points are rated for the intended method. Factory tow-hook equipment varies, and a visible hook or aftermarket bumper is not proof of rating, installation quality, or compatibility with a recovery technique."
        ],
        contextualLink: {
          before: "Use the complete platform context in the ",
          label: "Jeep Wrangler JL upgrade guide",
          href: "/vehicles/jeep-wrangler-jl",
          after: "."
        }
      },
      {
        type: "systems",
        id: "first-systems",
        title: "Useful first-upgrade systems",
        items: [
          ["Tire care and selection", "Set pressure for load and conditions, inspect condition, and choose terrain-appropriate tires only after confirming wheel and dynamic clearance."],
          ["Recovery equipment", "Carry rated, compatible equipment and learn safe procedures before depending on it. Include gloves, communication, and an accessible storage plan."],
          ["Recovery points", "Verify front and rear attachment points, hardware, frame connection, ratings, and compatibility with the planned method."],
          ["Airing equipment", "Use a reliable gauge, an appropriate compressor, protected storage, and a pressure plan that accounts for tire construction, load, speed, and terrain."],
          ["Skid plates", "Inspect factory coverage and add protection only for exposed components and terrain that justify the weight and service complexity."],
          ["Rock rails", "Confirm whether the installed rails are protective structural equipment or appearance steps, then match protection to ledges and body exposure."],
          ["Differential protection", "Consider housing shape, cover clearance, steering or track-bar clearance, fluid service, fasteners, and likely contact."],
          ["Suspension and lift", "Change them only to solve a defined load, control, travel, geometry, or tire-clearance need."]
        ]
      },
      {
        type: "scenarios",
        id: "build-order",
        title: "First-upgrade sequences by use",
        items: [
          {
            title: "Daily driver",
            priority: "Maintenance, road-friendly tires, correct pressure, braking, steering, lighting, visibility, and compact recovery basics.",
            wait: "Tall lift, heavy armor, large spare systems, or aggressive offset that compromises daily behavior.",
            data: "Commute, weather, passengers, parking, highway speed, noise tolerance, and current tire wear."
          },
          {
            title: "Mild trail use",
            priority: "Suitable tires, rated recovery points, recovery practice, airing equipment, and protection at proven contact areas.",
            wait: "Suspension height when stock clearance and careful line choice already handle the route.",
            data: "Trail rating, surface, obstacles, water, partners, tow hooks, factory protection, and articulation clearance."
          },
          {
            title: "Rock-crawling use",
            priority: "Traction systems, durable tires and wheels, recovery, rock rails, targeted armor, controlled travel, and steering inspection.",
            wait: "Long shocks or extra articulation without correct bump stops, line clearance, driveshaft checks, and geometry.",
            data: "Trim equipment, lockers, sway-bar system, transfer case, axle ratio, wheelbase, tire goal, and obstacle profile."
          },
          {
            title: "Overland travel",
            priority: "Reliability, suitable tires, recovery, simple storage, payload inventory, water, communication, and a full-size spare plan.",
            wait: "Permanent drawers, rack, tent, armor, bumper, winch, or springs before trip weight is known.",
            data: "Trip length, occupants, cargo volume, roof system, water, power, shelter, fuel range, and representative load."
          }
        ]
      },
      {
        type: "comparison",
        id: "trim-priorities",
        title: "Why priorities differ by factory equipment",
        caption: "Planning differences, not universal equipment claims",
        headers: ["Starting point", "Confirm first", "Likely planning effect"],
        rows: [
          ["Non-Rubicon configurations", "Tires, tow hooks, rails, skid coverage, axles, differential behavior, transfer case, and gearing", "Traction, recovery attachment, and targeted protection may come before extra suspension height."],
          ["Rubicon configurations", "Lockers, sway-bar disconnect, axle hardware, gearing, tires, fenders, protection, and package details", "Existing capability may move maintenance, recovery, tire condition, driver practice, and load control ahead of lift."],
          ["4xe configurations", "Hybrid-specific weight, packaging, service requirements, roof and cargo plan, and part application", "Use 4xe-specific fitment; do not assume a non-hybrid suspension or armor application."],
          ["Factory high-clearance packages", "Actual tires, wheels, fenders, bump stops, axle ratio, suspension, and spare support", "Preserve the complete factory system unless a measured use case justifies changing it."]
        ]
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "First purchases that often need more planning",
        items: [
          ["Immediate lift for appearance", "Height can change steering, axle position, ride, driveline angles, and entry effort without solving a real trail limitation."],
          ["Excessive wheel offset", "Moving the tire outward changes scrub radius, steering feel, bearing leverage, fender coverage, and the path the tire follows during articulation."],
          ["Unnecessary heavy accessories", "Bumpers, a winch, armor, a rack, and a large spare can quickly consume payload and change spring and shock needs."],
          ["Cosmetic steps used as rails", "Appearance equipment may not provide the mounting or strength needed for rock contact."],
          ["Long shocks as a complete system", "Shock length must work with springs, bump stops, brake lines, ABS wiring, sway-bar links, driveshafts, and available travel."],
          ["Assuming factory capability removes preparation", "Traction equipment does not replace inspection, recovery planning, tire care, route judgment, or driver practice."]
        ],
        contextualLink: {
          before: "Before changing ride height, review the ",
          label: "Wrangler JL lift-kit guide",
          href: "/vehicles/jeep-wrangler-jl/lift-kit",
          after: "."
        }
      },
      {
        type: "faq",
        id: "questions",
        title: "Wrangler JL first-upgrade questions",
        items: [
          { question: "Should tires always be the first purchase?", answer: "Not always. Unsafe wear, steering or brake issues, missing recovery preparation, or an unsuitable load plan may come first. Choose tires after the exact wheel and clearance baseline is known." },
          { question: "Does a Rubicon need fewer upgrades?", answer: "It may already include useful trail equipment, but condition, use, model year, package, tire choice, load, and driver goals still determine the plan." },
          { question: "Should recovery gear be carried without training?", answer: "Equipment is only part of a recovery system. Learn compatible attachment, loading, communication, exclusion zones, inspection, and safe methods before use." }
        ]
      }
    ],
    related: [related.hub, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.capability, sources.systems, sources.manual]
  },
  {
    key: "jeep-wrangler-jl-suspension",
    kind: "article",
    route: "/vehicles/jeep-wrangler-jl/suspension",
    title: "Jeep Wrangler JL Suspension Upgrade Guide | RigAI",
    description:
      "Plan Jeep Wrangler JL springs, shocks, control arms, track bars, sway bars, bump stops, alignment, articulation, and load for road and trail use.",
    socialTitle: "Jeep Wrangler JL Suspension Guide | RigAI",
    socialDescription:
      "Understand Wrangler JL suspension geometry, travel, load, steering, and 2-door, 4-door, hardtop, soft-top, and 4xe considerations.",
    eyebrow: "2018-present Wrangler JL suspension",
    h1: "Jeep Wrangler JL Suspension Upgrade Guide",
    dek:
      "Treat springs, shocks, control arms, track bars, sway bars, bump stops, steering geometry, driveline clearance, and operating weight as one system.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "Lift height changes control-arm and track-bar angles, caster, axle position, steering behavior, and driveline relationships.",
      "Longer shocks alone do not create a complete or safely limited suspension system.",
      "Control-arm or track-bar correction can be useful in some builds but is not mandatory on every JL.",
      "Verify brake-line, ABS-wire, driveshaft, tire, fender, and body clearance through the intended travel."
    ],
    toc: [
      ["direct-answer", "How the system works"],
      ["components", "Suspension components"],
      ["configuration-load", "Configuration and load"],
      ["geometry", "Geometry after height changes"],
      ["travel-checks", "Travel and alignment checks"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "How does Wrangler JL suspension planning differ?",
        paragraphs: [
          "The Wrangler JL uses coil springs and locating links with solid front and rear axles. Each axle moves as an assembly, while control arms locate it fore and aft and track bars locate it laterally. Springs support load and ride height; shocks control motion; sway bars influence roll and articulation; bump stops and limiting relationships protect components at the ends of travel.",
          "Changing spring height, shock length, tire size, wheel position, or accessory weight can affect caster, pinion angle, axle centering, steering feel, body roll, bump clearance, and driveshaft operation. Evaluate the complete system at normal and trail load."
        ],
        contextualLink: {
          before: "If the main objective is ride height, start with the ",
          label: "Wrangler JL lift-kit guide",
          href: "/vehicles/jeep-wrangler-jl/lift-kit",
          after: "."
        }
      },
      {
        type: "systems",
        id: "components",
        title: "Suspension components and their jobs",
        items: [
          ["Coil springs", "Support vehicle weight and influence ride height, available travel, ride frequency, and response to permanent load."],
          ["Shocks", "Control motion and heat; length, travel, damping, mounts, and compressed clearance must match the rest of the system."],
          ["Control arms", "Locate the axles and influence caster, pinion relationships, wheelbase, bushing behavior, and articulation."],
          ["Track bars", "Locate each axle laterally. Height changes can shift axle position, while correction choices affect geometry and clearance."],
          ["Sway bars and links", "Manage body roll and axle articulation. Link length and disconnect behavior must suit travel and equipped factory systems."],
          ["Bump stops", "Limit compression to protect shocks, tires, fenders, springs, driveshafts, steering, and other components from contact."],
          ["Brake lines and ABS wiring", "Must retain safe routing and slack through steering, compression, droop, and articulation."],
          ["Driveshafts", "Operating angle and clearance change with height and travel; inspect joints, boots, exhaust proximity, and full-droop behavior."]
        ]
      },
      {
        type: "scenarios",
        id: "configuration-load",
        title: "Configuration and load change suspension needs",
        items: [
          {
            title: "2-door daily driver",
            priority: "Controlled ride, steering precision, modest unsprung mass, and spring and damping choices matched to the shorter, lighter configuration.",
            wait: "Heavy constant-load rates or maximum travel without a clear operating need.",
            data: "Top type, occupants, bumpers, winch, spare, normal cargo, tire mass, and road use."
          },
          {
            title: "4-door loaded travel",
            priority: "Representative loaded ride height, spring support, damping, axle distribution, braking, and body control.",
            wait: "Spring selection before permanent and trip load is inventoried.",
            data: "Passengers, roof system, drawers, water, refrigerator, bumpers, spare carrier, armor, and tongue load."
          },
          {
            title: "4xe",
            priority: "Configuration-specific parts, operating weight, service guidance, spring and shock application, and underbody packaging.",
            wait: "A non-hybrid kit selected only from nominal lift height.",
            data: "Exact model year, trim, hybrid-specific fitment, wheel and tire package, load, and previous modifications."
          },
          {
            title: "Technical trail use",
            priority: "Controlled articulation, correct bump and droop limits, geometry, steering, line routing, driveshaft clearance, and durable joints.",
            wait: "Travel targets that exceed the safe range of connected components.",
            data: "Tire path, wheel offset, sway-bar state, shocks, bump stops, driveshafts, lines, fenders, and bodywork."
          }
        ]
      },
      {
        type: "dependency",
        id: "geometry",
        title: "Ride-height changes create a geometry chain",
        steps: ["Spring or spacer height", "Control-arm and track-bar angles", "Caster, axle position, and roll behavior", "Steering and driveline relationships", "Alignment and full-travel verification"],
        text:
          "As height changes, axle locating links operate at different angles. Some builds benefit from caster or axle-centering correction, but the required parts depend on measured geometry, actual lift, intended travel, tire and wheel setup, powertrain, and vehicle-specific fitment."
      },
      {
        type: "checklist",
        id: "travel-checks",
        title: "Suspension installation and travel checks",
        items: [
          "Ride height and side-to-side stance at representative operating load",
          "Toe, steering-wheel position, caster, and complete alignment results",
          "Front and rear axle centering and track-bar clearance",
          "Pinion and driveshaft operating angles, boots, joints, and exhaust clearance",
          "Shock compressed and extended length relative to bump and droop limits",
          "Coil retention and spring, isolator, mount, and bowing condition",
          "Brake-line and ABS-wire routing through steering and articulation",
          "Tire clearance at steering lock, compression, droop, and disconnected articulation where applicable",
          "Sway-bar link, electronic disconnect, drag-link, tie-rod, and differential-cover clearance",
          "Fastener torque at specified vehicle position and reinspection after use"
        ],
        note:
          "Do not use articulation as a goal by itself. Travel must remain inside the safe limits of shocks, bump stops, lines, wiring, driveshafts, steering, tires, springs, and bodywork."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Wrangler JL suspension mistakes",
        items: [
          ["Selecting by lift height alone", "Two systems with the same advertised height can use different springs, shocks, travel, geometry correction, and load assumptions."],
          ["Using longer shocks without limits", "Extra droop can overextend lines, unseat springs, bind driveshafts, or create tire and body contact."],
          ["Ignoring permanent front weight", "A bumper and winch can alter ride height, spring demand, damping, braking, and steering response."],
          ["Assuming every build needs adjustable links", "Control-arm and track-bar changes should answer measured geometry, centering, travel, or durability needs."],
          ["Skipping loaded alignment", "Final caster, toe, axle position, and steering behavior should be checked at the vehicle's representative operating load."],
          ["Assuming factory trail hardware guarantees compatibility", "Rubicon equipment and aftermarket parts still require exact model-year, trim, package, travel, and clearance verification."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Wrangler JL suspension questions",
        items: [
          { question: "Does every lifted JL need adjustable control arms?", answer: "No. The need depends on actual height, measured caster and pinion relationships, ride and steering behavior, intended travel, and the correction method supported by the specific system." },
          { question: "Does every lifted JL need adjustable track bars?", answer: "No. Measure axle position and evaluate the complete geometry. Some heights and systems use other correction methods or remain acceptable without an adjustable bar." },
          { question: "Do hardtop and soft-top models need different springs?", answer: "Not automatically, but top weight is part of the complete permanent-load and configuration picture used to select the correct application." }
        ]
      }
    ],
    related: [related.hub, related.first, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.capability, sources.systems, sources.manual]
  },
  {
    key: "jeep-wrangler-jl-tire-size",
    kind: "article",
    route: "/vehicles/jeep-wrangler-jl/tire-size",
    title: "Jeep Wrangler JL Tire Size and Fitment Guide | RigAI",
    description:
      "Evaluate Jeep Wrangler JL tire fitment by trim, wheel width, offset, measured size, articulation, fenders, gearing, braking, and spare support.",
    socialTitle: "Jeep Wrangler JL Tire Size Guide | RigAI",
    socialDescription:
      "Plan Wrangler JL tires without a universal largest-size claim, using dynamic clearance, wheel geometry, gearing, and load.",
    eyebrow: "2018-present Wrangler JL tire fitment",
    h1: "Jeep Wrangler JL Tire Size and Fitment Guide",
    dek:
      "A tire that clears during street driving may still contact at steering lock, compression, or sway-bar-disconnected articulation. Verify the complete vehicle, wheel, tire, and load.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size and fitment"),
    takeaways: [
      "There is no universal largest tire size for the Wrangler JL platform.",
      "Use the tire maker's measured dimensions and approved wheel-width range, not only the nominal sidewall code.",
      "Check steering, compression, articulation, fender, bumper, control-arm, and spare-carrier clearance.",
      "Account for gearing, axle ratio, braking, acceleration, fuel use, unsprung mass, and steering feel."
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
        title: "What tire size fits a Wrangler JL?",
        paragraphs: [
          "The answer depends on model year, door count, trim, suspension, fenders, factory package, wheel width, offset, backspacing, tire brand, actual measured diameter and width, steering stops, bump stops, vehicle load, and axle articulation. A size that works on one JL is not a universal result.",
          "Sport, Sahara, Willys, Rubicon, and other configurations can begin with different wheels, tires, fenders, axles, gearing, and suspension details. Verify the door-jamb label, wheel markings, build information, current measurements, and manufacturer fitment guidance."
        ],
        contextualLink: {
          before: "If additional clearance is genuinely required, compare options in the ",
          label: "Wrangler JL lift-kit guide",
          href: "/vehicles/jeep-wrangler-jl/lift-kit",
          after: "."
        }
      },
      {
        type: "checklist",
        id: "factory-baseline",
        title: "Record the factory and current baseline",
        items: [
          "Model year, 2-door or 4-door body, trim, engine, transmission, axle ratio, and factory package",
          "Door-jamb tire size, pressure, loading information, and current tire condition",
          "Wheel diameter, width, offset, backspacing, load rating, and brake clearance",
          "Tire brand, model, construction, load range, measured diameter, section width, and tread width",
          "Spring, spacer, shock, bump-stop, control-arm, track-bar, sway-bar, and alignment changes",
          "Fenders, liners, bumper ends, rock rails, mud guards, steering stops, and prior trimming",
          "Normal passengers, cargo, bumpers, winch, armor, spare carrier, roof equipment, and trip load",
          "Spare location, carrier rating, tailgate reinforcement, camera, and third brake-light clearance"
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
          ["Offset", "Inboard or outboard wheel position", "Changes scrub radius, steering feel, bearing leverage, fender coverage, and contact points."],
          ["Backspacing", "Inner wheel and tire position", "Affects control-arm, sway-bar, steering, brake, and suspension clearance."],
          ["True tire dimensions", "Actual diameter, width, shoulder, and tread profile", "Two products with the same nominal size can occupy different space."],
          ["Unsprung mass", "Weight moved by the suspension and accelerated by the drivetrain", "Can affect damping, steering, braking, acceleration, and ride."],
          ["Spare support", "Tailgate and carrier load plus package depth", "Affects hinge load, latch behavior, visibility, camera, and third brake light."]
        ]
      },
      {
        type: "systems",
        id: "dynamic-clearance",
        title: "Check clearance through real movement",
        items: [
          ["Steering lock", "Inspect both directions, forward and reverse, over uneven surfaces, with the actual alignment and steering stops."],
          ["Compression", "Check fender, liner, bumper, body, bump-stop, shock, and spring relationships at representative load."],
          ["Articulation", "Opposing wheel movement can create contact that never appears during level street driving; include disconnected sway-bar operation where equipped and appropriate."],
          ["Control arms and sway bars", "Inboard clearance changes with wheel backspacing, tire width, steering angle, and axle movement."],
          ["Fenders and bumper ends", "Trim and package differences change available space; visible static clearance is not proof of dynamic fit."],
          ["Spare and tailgate", "Verify carrier rating, reinforcement needs, hinge and latch condition, camera view, third brake light, and departure clearance."],
          ["Brake and steering components", "Confirm hose, line, tie-rod, drag-link, wheel-weight, and caliper clearance."],
          ["Load", "Passengers, cargo, armor, bumpers, roof equipment, and trail supplies change ride height and available compression travel."]
        ]
      },
      {
        type: "sequence",
        id: "fitment-process",
        title: "A repeatable tire-fitment process",
        items: [
          ["Identify the exact JL", "Record model year, door count, trim, powertrain, axles, ratio, factory package, suspension, and prior modifications."],
          ["Choose tire performance", "Balance road use, weather, terrain, construction, load rating, noise, wet behavior, and repair needs."],
          ["Confirm wheel compatibility", "Check tire-approved wheel width, wheel load rating, offset, backspacing, brakes, steering, and fender coverage."],
          ["Use measured specifications", "Compare manufacturer dimensions and remember that mounted size changes with wheel width, pressure, load, and production variation."],
          ["Test dynamic clearance", "Inspect steering, compression, droop, articulation, bump-stop engagement, and body clearance at representative load."],
          ["Plan the spare", "Confirm a usable matching diameter, carrier capacity, tailgate support, tools, camera, and brake-light position."],
          ["Recheck road behavior", "Evaluate pressure, balance, alignment, steering, braking, acceleration, shifting, noise, heat, and fuel use."]
        ]
      },
      {
        type: "dependency",
        id: "tradeoffs",
        title: "Larger and heavier tires affect more than clearance",
        steps: ["Diameter, width, and mass", "Effective gearing and unsprung load", "Acceleration, braking, and steering", "Fuel economy and component demand", "Axle-ratio, suspension, and spare decisions"],
        text:
          "The practical effect depends on engine, transmission, axle ratio, wheel geometry, vehicle weight, tire construction, pressure, speed, and terrain. Do not treat a tire-clearance result as proof that the complete vehicle still performs as intended."
      },
      {
        type: "faq",
        id: "questions",
        title: "Wrangler JL tire questions",
        items: [
          { question: "Is there one largest tire size for the Wrangler JL platform?", answer: "There is no universal answer. Fitment depends on the complete trim, wheel, tire, suspension, fender, bump-stop, steering, load, and articulation configuration." },
          { question: "Does street clearance prove trail clearance?", answer: "No. Full steering, suspension compression, droop, axle articulation, sway-bar state, and loaded operation can reveal different contact points." },
          { question: "Does a lift solve wheel-offset problems?", answer: "Not necessarily. Ride height does not automatically correct inboard or outboard tire position, scrub radius, steering path, or every compression and articulation contact point." }
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.lift, related.overland],
    safety,
    sources: [sources.capability, sources.faq, sources.manual]
  },
  {
    key: "jeep-wrangler-jl-lift-kit",
    kind: "article",
    route: "/vehicles/jeep-wrangler-jl/lift-kit",
    title: "Jeep Wrangler JL Lift Kit Guide | RigAI",
    description:
      "Compare Jeep Wrangler JL spacer lifts, spring lifts, complete suspension systems, geometry correction, shocks, bump stops, and daily-use trade-offs.",
    socialTitle: "Jeep Wrangler JL Lift Kit Guide | RigAI",
    socialDescription:
      "Choose Wrangler JL lift components by tire goal, terrain, load, travel, steering geometry, driveline clearance, and ride quality.",
    eyebrow: "2018-present Wrangler JL lift planning",
    h1: "Jeep Wrangler JL Lift Kit Guide",
    dek:
      "Lift height alone does not describe system quality. Start with the tire, terrain, load, travel, and daily-use goal, then verify every supporting relationship.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Lift kit"),
    takeaways: [
      "Do not choose one universal lift height for every Wrangler JL.",
      "Spacer, spring, and complete suspension systems solve different problems and require different supporting checks.",
      "Geometry correction becomes more important as actual height and link angles change, but supporting parts are build-specific.",
      "Confirm shocks, bump stops, sway-bar links, lines, wiring, driveshafts, caster, axle centering, tires, and alignment."
    ],
    toc: [
      ["direct-answer", "Choosing lift intent"],
      ["lift-types", "Lift types"],
      ["intent", "Recommendations by intent"],
      ["supporting-parts", "Supporting components"],
      ["geometry", "Geometry and travel"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Choose a lift from the result you need",
        paragraphs: [
          "Define whether the goal is visual stance, restoring height under permanent load, improving controlled trail travel, creating verified tire clearance, or supporting frequent technical use. The same advertised height can produce different actual results by door count, powertrain, trim, top, bumper, winch, spare, armor, and cargo.",
          "A complete decision includes spring or spacer design, shock length and damping, compressed and extended travel, bump stops, sway-bar links, control-arm and track-bar geometry, brake-line and ABS-wire routing, driveshaft clearance, tire path, alignment, and installation requirements."
        ],
        contextualLink: {
          before: "For the underlying component relationships, read the ",
          label: "Wrangler JL suspension guide",
          href: "/vehicles/jeep-wrangler-jl/suspension",
          after: "."
        }
      },
      {
        type: "comparison",
        id: "lift-types",
        title: "Compare common lift approaches",
        caption: "Lift approach and planning boundary",
        headers: ["Approach", "Can address", "Must still be verified"],
        rows: [
          ["Spacer lift", "Modest stance or clearance change while retaining existing springs", "Shock travel, extensions if used, bump stops, spring retention, geometry, load, ride, and tire clearance."],
          ["Replacement spring lift", "Ride height, spring-rate, load, and travel objectives", "Actual load, shocks, bump stops, geometry, sway-bar links, driveshafts, and alignment."],
          ["Complete suspension system", "Coordinated springs, shocks, links, and correction for a defined use", "Exact vehicle application, all included and omitted parts, travel limits, installation, and loaded results."],
          ["Shock extensions", "Reuse of compatible shocks in a limited application", "Compressed length, droop, damping, mount load, bump limits, and whether retained shocks suit the goal."],
          ["Replacement shocks", "Travel and damping matched to use", "Spring retention, bump-stop timing, line and driveshaft limits, mounts, and full compression clearance."]
        ]
      },
      {
        type: "scenarios",
        id: "intent",
        title: "Lift planning by intent",
        items: [
          {
            title: "Leveling or visual stance",
            priority: "Modest, measured change with road ride, shock travel, alignment, spring seating, and load balance preserved.",
            wait: "Extra height that adds geometry and access compromises without functional value.",
            data: "Current rake, permanent weight, actual desired change, door count, top, powertrain, and tire plan."
          },
          {
            title: "Mild trail and daily use",
            priority: "Controlled ride, useful travel, correct bump limits, predictable steering, and verified dynamic tire clearance.",
            wait: "Maximum articulation or heavy-duty spring rate when most use is on pavement.",
            data: "Trail obstacles, highway use, occupants, load, tire dimensions, wheel position, and current equipment."
          },
          {
            title: "Larger tire clearance",
            priority: "Measured tire and wheel package, fenders, steering path, bump stops, compression, articulation, gearing, braking, and spare support.",
            wait: "Assuming advertised lift height alone guarantees fitment.",
            data: "Trim, factory package, actual tire dimensions, wheel width and offset, alignment, steering stops, and load."
          },
          {
            title: "Frequent technical use",
            priority: "Durable joints, controlled articulation, geometry, shocks, bump stops, sway-bar operation, lines, wiring, driveshafts, and inspection access.",
            wait: "Travel beyond the safe range of connected parts.",
            data: "Obstacle type, wheelbase, axles, transfer case, tire plan, recovery strategy, and full-travel measurements."
          },
          {
            title: "Heavy overland load",
            priority: "Measured permanent weight, spring support, damping, body control, braking, axle load, and representative loaded alignment.",
            wait: "Spring rate selected from an accessory wish list rather than measured load.",
            data: "Bumpers, winch, armor, rack, tent, storage, water, battery, spare, passengers, and trip cargo."
          }
        ]
      },
      {
        type: "systems",
        id: "supporting-parts",
        title: "Supporting parts to evaluate",
        items: [
          ["Control arms", "May correct caster, pinion relationships, axle position, wheelbase, bushing behavior, or travel on some systems."],
          ["Track bars", "May help axle centering or geometry when actual height creates a measurable need; check mounts and clearance."],
          ["Bump stops", "Protect shocks, tires, fenders, springs, driveshafts, steering, and bodywork at compression."],
          ["Sway-bar links", "Must match ride height and travel while preserving correct bar operation and equipped disconnect functions."],
          ["Brake lines and ABS wiring", "Need protected routing and adequate slack through steering, compression, and droop."],
          ["Driveshafts", "Inspect operating angle, joints, boots, exhaust clearance, and limits at full droop."],
          ["Steering and alignment", "Measure caster, toe, steering-wheel position, axle centering, and road behavior after installation."],
          ["Tires and wheels", "Verify full dynamic clearance, wheel geometry, spare support, braking, gearing, and fender coverage."]
        ]
      },
      {
        type: "dependency",
        id: "geometry",
        title: "Geometry correction follows actual change",
        steps: ["Defined lift and load goal", "Measured installed height", "Control-arm and track-bar angles", "Caster, axle centering, pinion, and steering", "Full-travel and road verification"],
        text:
          "Correction becomes increasingly important as actual height and geometry depart from the baseline, but there is no rule that every nominal 2-inch or 2.5-inch system needs exactly the same parts. Use the kit maker's vehicle-specific instructions and verify measured results."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Wrangler JL lift mistakes",
        items: [
          ["Buying only by advertised height", "Height does not describe spring rate, damping, travel, geometry, durability, load assumptions, or included support parts."],
          ["Assuming a universal supporting-parts list", "Door count, powertrain, actual lift, trim, load, tire package, and intended travel change what is required."],
          ["Ignoring bump-stop timing", "A shock or tire can reach a damaging limit before the factory or added bump stop protects it."],
          ["Chasing articulation without boundaries", "Brake lines, ABS wiring, driveshafts, springs, shocks, steering, and bodywork establish safe limits."],
          ["Skipping post-installation checks", "Fastener torque, alignment, axle position, steering, tire contact, driveline behavior, and loaded ride need verification."],
          ["Using lift to mask overload", "Springs can change stance and control but do not increase certified vehicle, axle, tire, roof, or towing ratings."]
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Wrangler JL lift questions",
        items: [
          { question: "What lift height is best for every Wrangler JL?", answer: "There is no universal height. Choose from the tire, terrain, load, travel, daily-use, installation, and geometry objectives of the exact vehicle." },
          { question: "Does every 2.5-inch lift need the same control arms and track bars?", answer: "No. Advertised height is not the same as actual installed change, and systems use different correction methods. Measure geometry and follow vehicle-specific instructions." },
          { question: "Can a lift increase payload?", answer: "No. Suspension changes can alter ride height or control but do not raise the manufacturer's certified ratings." }
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.capability, sources.systems, sources.manual]
  },
  {
    key: "jeep-wrangler-jl-overland-build",
    kind: "article",
    route: "/vehicles/jeep-wrangler-jl/overland-build",
    title: "Jeep Wrangler JL Overland Build Guide | RigAI",
    description:
      "Plan a Jeep Wrangler JL overland build around payload, 2-door or 4-door cargo space, roof load, storage, recovery, power, water, and suspension.",
    socialTitle: "Jeep Wrangler JL Overland Build Guide | RigAI",
    socialDescription:
      "A staged Wrangler JL travel plan focused on useful equipment, payload, roof limits, center of gravity, handling, and daily usability.",
    eyebrow: "2018-present Wrangler JL overland planning",
    h1: "Jeep Wrangler JL Overland Build Guide",
    dek:
      "Build from the trip, not from an accessory catalog. Door count, payload, cargo space, roof system, water, recovery, shelter, armor, and spare-tire weight must work together.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "The Wrangler can become overloaded quickly when heavy armor, bumpers, a winch, rack, tent, drawers, water, power, and a large spare are combined.",
      "A 2-door and 4-door vehicle need different cargo, wheelbase, access, and load-distribution strategies.",
      "Confirm roof-system and rack limits before adding a rooftop tent or roof cargo.",
      "Weigh the finished vehicle at representative trip load before final suspension tuning."
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
          "List occupants, trip duration, climate, route difficulty, resupply, recovery support, water, food, shelter, tools, spare parts, communication, and daily-driving needs. Compare the complete load with the tire and loading label and the owner's information for the exact vehicle.",
          "A 2-door offers less interior cargo volume and a shorter wheelbase, which rewards compact removable systems and careful weight placement. A 4-door offers more room but can invite more permanent equipment. Neither body style gains unlimited capacity from having available space."
        ],
        contextualLink: {
          before: "Set the broader platform baseline in the ",
          label: "Jeep Wrangler JL upgrade guide",
          href: "/vehicles/jeep-wrangler-jl",
          after: "."
        }
      },
      {
        type: "systems",
        id: "cargo-systems",
        title: "Plan cargo and camp systems together",
        items: [
          ["Roof racks", "Confirm compatibility with the soft top, hardtop, body mounting, doors, removable panels, dynamic use, and vehicle-specific limits."],
          ["Rooftop tents", "Include tent, rack, occupants, bedding, and mounting weight; evaluate center of gravity, wind, access, roof limits, and daily removal needs."],
          ["Rear cargo systems", "Balance organization and security against drawer weight, seat use, rear visibility, spare access, and emergency removal."],
          ["Refrigerators", "Plan secure mounting, ventilation, power consumption, cable protection, and access without unloading the vehicle."],
          ["Batteries and electrical", "Choose capacity, chemistry, charging, fusing, cable size, ventilation, water protection, and service access as one system."],
          ["Water", "Count container and water weight, secure it low, plan sanitation and freezing, and carry only the capacity the route needs."],
          ["Bumpers and winches", "Confirm mounting, recovery rating, airflow, front weight, spring response, approach clearance, electrical demand, and legal requirements."],
          ["Spare and tire carrier", "Verify tire mass, carrier and hinge capacity, latch operation, camera, third brake light, departure clearance, and rear-door use."]
        ]
      },
      {
        type: "dependency",
        id: "weight-chain",
        title: "Accessory weight changes the complete vehicle",
        steps: ["Trip and accessory inventory", "Front, rear, and roof load", "Payload and tire capacity", "Braking, handling, and center of gravity", "Spring rate and damping"],
        text:
          "Heavy armor, bumpers, a winch, rack, rooftop tent, drawers, water, batteries, recovery gear, fuel, and a large spare add up quickly. High or rearward load can increase body motion and axle demand even when total weight appears close to a limit."
      },
      {
        type: "sequence",
        id: "staged-build",
        title: "A staged Wrangler JL overland build",
        intro:
          "Test every stage on representative roads and trips. Remove equipment that does not earn its weight, space, cost, and maintenance burden.",
        items: [
          ["Stage 1: reliability, tires, recovery, and protection", "Complete maintenance, inspect steering and brakes, choose suitable tires, confirm recovery points, and add only essential protection for the route."],
          ["Stage 2: lightweight storage and camping", "Use removable bins, compact shelter, basic cooking, communication, water, and low-mounted cargo before committing to permanent systems."],
          ["Stage 3: weight assessment and suspension tuning", "Weigh the representative load, check axle distribution, braking, handling, ride height, and tire capacity, then tune springs and shocks only where needed."],
          ["Stage 4: advanced equipment when justified", "Add armor, electrical systems, a larger spare carrier, permanent storage, or specialized recovery equipment only when repeated trips prove the need."]
        ]
      },
      {
        type: "checklist",
        id: "loaded-checks",
        title: "Loaded Wrangler checks before travel",
        items: [
          "Vehicle, axle, payload, tire, wheel, roof, rack, carrier, hitch, and towing ratings for the exact configuration",
          "Front and rear axle weight with occupants, water, cargo, recovery gear, and fuel",
          "Cargo restraint, rear visibility, emergency access, and seat-belt or airbag clearance",
          "Roof mounting, removable-panel operation, top compatibility, wind, height, and center of gravity",
          "Tire condition, pressure, load rating, dynamic clearance, and usable spare",
          "Brake condition, loaded stopping behavior, steering, body roll, crosswind response, and headlight aim",
          "Spring support, shock control, bump travel, axle centering, alignment, and driveshaft behavior",
          "Battery mounting, fusing, cable protection, ventilation, charging, and water resistance",
          "Daily parking, garage height, noise, fuel use, rear-door operation, and removal of unused equipment"
        ],
        note:
          "Springs, air helpers, racks, carriers, and hitches do not increase certified vehicle, axle, tire, roof, or towing ratings."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Wrangler JL overland mistakes",
        items: [
          ["Buying every popular accessory", "A useful travel vehicle carries equipment required by its routes, occupants, climate, and support plan, not every available category."],
          ["Ignoring roof limitations", "A rack or hardtop does not automatically approve every rooftop tent, occupied load, or off-road dynamic load."],
          ["Stacking weight high", "Roof cargo and tall storage raise the center of gravity and can change body roll, braking, steering, and side-slope confidence."],
          ["Tuning suspension before weighing", "Spring rate and damping should answer measured permanent and trip load, not a future accessory list."],
          ["Consuming rear capacity", "A bumper, carrier, large spare, drawers, water, and cargo can create a rear-biased load and alter departure clearance."],
          ["Losing daily usability", "Permanent equipment still affects noise, access, parking, fuel use, visibility, roof removal, and handling between trips."]
        ],
        contextualLink: {
          before: "Match the measured final load with the ",
          label: "Wrangler JL suspension guide",
          href: "/vehicles/jeep-wrangler-jl/suspension",
          after: "."
        }
      },
      {
        type: "faq",
        id: "questions",
        title: "Wrangler JL overland questions",
        items: [
          { question: "Does a 4-door Wrangler automatically have enough payload for a full overland build?", answer: "No. Available space and payload are different. Use the exact vehicle label and include occupants, options, accessories, cargo, and tongue load where applicable." },
          { question: "Is a rooftop tent required?", answer: "No. Ground tents and other removable shelter can reduce roof load, height, cost, wind resistance, and permanent weight." },
          { question: "Should suspension be upgraded before the cargo system?", answer: "Usually the permanent and representative trip load should be defined and measured first, unless an existing condition already requires repair." }
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.lift],
    safety,
    sources: [sources.capability, sources.faq, sources.manual]
  }
];
