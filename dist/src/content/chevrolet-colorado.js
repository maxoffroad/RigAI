const dates = {
  published: "2026-07-28T20:00:00+05:00",
  modified: "2026-07-28T20:00:00+05:00",
  reviewedLabel: "July 28, 2026"
};

const vehicle = {
  slug: "chevrolet-colorado",
  name: "Chevrolet Colorado 3rd Gen",
  shortName: "Colorado",
  guidesLabel: "Chevrolet Colorado",
  heroLabel: "COLORADO 3RD GEN",
  ctaLabel: "Build My Setup",
  planInputs:
    "model year, trim, drivetrain, factory suspension and ride height, axle and differential equipment, factory tires and wheels, towing package, payload label, current modifications, permanent bed load, trailer tongue weight, driving profile, and planned trip load"
};

const scope = {
  title: "Vehicle scope: 2023-present Chevrolet Colorado",
  text:
    "This guide covers US-market third-generation Chevrolet Colorado pickups from 2023 to the present. Equipment varies by model year, WT, LT, Trail Boss, Z71, ZR2 or ZR2 Bison configuration, drivetrain, factory suspension, wheel and tire package, differential equipment, towing package, payload configuration, options, and prior modifications."
};

const safety = {
  title: "Safety, loading, towing, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, tire and loading label, trailering guide, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify model year, trim, drivetrain, suspension package, ride height, axles, differential equipment, wheels, measured tire dimensions, payload label, gross and axle weight limits, towing equipment, trailer requirements, permanent accessories, passengers, cargo, and tongue weight before purchasing, loading, towing, or installing parts."
  ]
};

const sources = {
  model: {
    label: "Chevrolet Colorado model and trim information",
    href: "https://www.chevrolet.com/trucks/previous-year/colorado",
    type: "Chevrolet official vehicle information"
  },
  trailering: {
    label: "2025 Chevrolet Colorado trailering chart",
    href: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicle-groups/trailering-and-towing/trucks/06-pdfs/25CW-ChevyTrailering-Charts-Colorado.pdf",
    type: "Chevrolet official trailering information"
  },
  manuals: {
    label: "Chevrolet manuals and guides",
    href: "https://www.chevrolet.com/support/vehicle/manuals-guides",
    type: "Chevrolet official owner information"
  },
  support: {
    label: "Chevrolet vehicle support",
    href: "https://www.chevrolet.com/support/vehicle",
    type: "Chevrolet official support information"
  }
};

const breadcrumbs = (label) => [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  ...(label
    ? [
        { label: "Chevrolet Colorado", href: "/vehicles/chevrolet-colorado" },
        { label }
      ]
    : [{ label: "Chevrolet Colorado" }])
];

const related = {
  hub: {
    title: "Chevrolet Colorado Guide",
    href: "/vehicles/chevrolet-colorado",
    text: "Start with the complete 2023-present Colorado upgrade-planning framework."
  },
  first: {
    title: "First Upgrades for a Chevrolet Colorado",
    href: "/vehicles/chevrolet-colorado/first-upgrades",
    text: "Prioritize condition, tires, recovery, protection, bed utility, and only the changes your use requires."
  },
  suspension: {
    title: "Chevrolet Colorado Suspension Guide",
    href: "/vehicles/chevrolet-colorado/suspension",
    text: "Plan IFS geometry, rear leaf support, shocks, factory trim hardware, permanent load, payload, and towing."
  },
  tires: {
    title: "Chevrolet Colorado Tire Size and Fitment Guide",
    href: "/vehicles/chevrolet-colorado/tire-size",
    text: "Check trim, measured tire dimensions, wheel position, steering, compression, load, and under-bed spare clearance."
  },
  lift: {
    title: "Chevrolet Colorado Lift Kit Guide",
    href: "/vehicles/chevrolet-colorado/lift-kit",
    text: "Match leveling, suspension height, IFS geometry, rear support, tires, load, and towing to a defined goal."
  },
  overland: {
    title: "Chevrolet Colorado Overland Build Guide",
    href: "/vehicles/chevrolet-colorado/overland-build",
    text: "Stage payload, bed storage, rack, shelter, recovery, power, water, suspension, and towing decisions."
  }
};

export const chevroletColoradoPages = [
  {
    key: "chevrolet-colorado",
    kind: "vehicleHub",
    route: "/vehicles/chevrolet-colorado",
    title: "Chevrolet Colorado Off-Road Upgrade Guide | RigAI",
    description:
      "Plan 2023-present Chevrolet Colorado upgrades around trim, suspension, tires, lift, payload, towing, recovery, and overland use.",
    socialTitle: "Chevrolet Colorado Off-Road Upgrade Guide | RigAI",
    socialDescription:
      "A third-generation Colorado planning hub for daily use, trails, payload, towing, suspension, tires, lift, and overland equipment.",
    eyebrow: "2023-present Chevrolet Colorado planning guide",
    h1: "Chevrolet Colorado Off-Road Upgrade Guide",
    dek:
      "Plan the whole pickup. Trim, factory ride height, suspension hardware, tires, differential equipment, bed load, payload, towing, daily driving, and trail goals all change the right upgrade order.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Confirm WT, LT, Trail Boss, Z71, ZR2, or ZR2 Bison equipment on the exact model year before selecting parts.",
      "Factory ride height, shocks, track width, tires, wheels, fenders, protection, drive modes, and differential equipment are not shared by every Colorado.",
      "Payload, axle load, trailer tongue weight, permanent accessories, passengers, and trip cargo must be planned together.",
      "A capable factory configuration may need inspection, recovery preparation, protection, and load planning before it needs suspension replacement."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["configurations", "Trim differences"],
      ["use-cases", "Pickup use cases"],
      ["upgrade-goals", "Connected upgrade goals"],
      ["featured-guides", "Colorado guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should a Colorado plan begin with?",
        paragraphs: [
          "Begin with model year, trim, drivetrain, factory suspension and ride height, differential equipment, wheel and tire package, protection, towing equipment, payload label, current accessories, normal bed cargo, passengers, trailer use, and actual operating weight.",
          "The third-generation Colorado uses independent front suspension and a rear solid axle on leaf springs, but factory hardware and starting clearance differ substantially across the lineup. A useful daily-driver plan for an LT is not automatically the right trail or load plan for a Trail Boss, Z71, ZR2, or ZR2 Bison."
        ]
      },
      {
        type: "systems",
        id: "configurations",
        title: "Configuration details that change the plan",
        intro:
          "Trim names identify a starting point, not a universal parts list. Verify build information, labels, owner's resources, part numbers, and the pickup itself.",
        items: [
          ["WT", "Confirm drivetrain, tires, wheels, tow hooks or recovery provisions, protection, differential equipment, payload label, towing package, and intended work load."],
          ["LT", "Balance road comfort and utility with tire choice, recovery, underbody exposure, bed use, towing, and the weight of permanent trail equipment."],
          ["Trail Boss", "Verify its factory ride height, wider stance, wheel and tire package, suspension hardware, drive modes, protection, differential equipment, and model-year content."],
          ["Z71", "Confirm factory tires, wheels, suspension tuning, protection, recovery hardware, drive modes, differential equipment, payload, and towing configuration."],
          ["ZR2", "Treat its factory lift, Multimatic DSSV dampers, wider stance, tires, fenders, protection, and locking equipment as an integrated trim-specific system."],
          ["ZR2 Bison", "Verify model-year AEV hardware, tires, jounce-control equipment, protection, bumpers, clearance, payload, and exact replacement-part compatibility."],
          ["Payload and towing", "Door labels, equipment, passengers, cargo, accessories, hitch, trailer, and tongue weight determine the usable plan for the individual pickup."],
          ["Bed and accessory use", "Racks, caps, tents, drawers, spare support, tools, power, water, and recovery equipment add permanent or trip weight over the rear axle."] 
        ]
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Match the plan to how the pickup is used",
        items: [
          { title: "Daily driver", priority: "Condition, tire pressure, braking, steering, visibility, ride, noise, weather use, and practical bed security.", wait: "Heavy armor, large offset changes, or permanent bed systems without a regular need.", data: "Commute, parking, passengers, bed use, current tires, payload, and highway behavior." },
          { title: "Mild trail use", priority: "Suitable tires, airing equipment, rated recovery, essential protection, practical storage, and verified clearance.", wait: "Lift when factory capability and careful line choice already match the route.", data: "Trim, trail surface, recovery hardware, protection, tire condition, contact points, and load." },
          { title: "Technical trail use", priority: "Traction, durable tires and wheels, underbody and rocker protection, controlled travel, steering, recovery, and obstacle planning.", wait: "Extra height that harms IFS geometry, braking, stability, or daily behavior.", data: "ZR2 or Bison hardware, lockers, tires, track width, fenders, compression clearance, load, and recovery route." },
          { title: "Towing or work", priority: "Exact ratings, hitch and trailer compatibility, tongue weight, payload calculation, axle load, brakes, tires, cooling, and stable handling.", wait: "Suspension changes used to disguise overload or exceed a published limit.", data: "Door label, trailering guide, trailer, tongue weight, passengers, bed cargo, accessories, and scale data." },
          { title: "Overland travel", priority: "Payload, low and secure cargo, bed access, recovery, range, braking, reliability, and representative loaded handling.", wait: "Rack, tent, drawers, armor, bumpers, power, water, and fuel before a complete weight budget exists.", data: "Trip duration, people, shelter, water, fuel, spare, trailer use, and daily usability." }
        ]
      },
      {
        type: "systems",
        id: "upgrade-goals",
        title: "Plan Colorado goals as connected systems",
        items: [
          ["Tires and wheels", "Trim, factory suspension, measured tire size, wheel width, offset, steering lock, compression, fenders, gearing, braking, towing, and spare storage."],
          ["Recovery and protection", "Rated recovery provisions, safe equipment, skid plates, differential and rocker exposure, factory Bison or ZR2 hardware, service access, and added weight."],
          ["Suspension", "Front coilover or strut assemblies, control arms, CV joints, steering, rear leaf packs, shocks, bump stops, jounce systems, empty-bed ride, and permanent load."],
          ["Lift and geometry", "Purpose, tire goal, caster, camber, toe, CV and steering angles, droop, compression, rear height, brake-line clearance, and installation complexity."],
          ["Bed utility", "Tie-downs, protection, weather security, lightweight storage, bed access, rack or cap loads, cargo restraint, and rear axle load."],
          ["Towing", "Vehicle-specific rating, trailer rating, hitch, tongue weight, payload, passengers, cargo, brakes, tires, cooling, stability, and legal requirements."],
          ["Overland equipment", "Rack, tent, drawers, refrigerator, battery, solar, water, fuel, spare, recovery, armor, center of gravity, and departure clearance."],
          ["Factory systems", "Confirm ride height, DSSV or standard dampers, jounce hardware, tires, wheels, track width, fenders, lockers, protection, tow equipment, and payload label."]
        ]
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Chevrolet Colorado guides",
        published: [
          { eyebrow: "Published guide", title: "Best First Upgrades for a Chevrolet Colorado", text: "Choose a useful order for daily driving, trails, work, towing, or overland travel.", href: related.first.href },
          { eyebrow: "Published guide", title: "Chevrolet Colorado Suspension Guide", text: "Connect IFS geometry, rear leaf support, trim hardware, permanent load, payload, and towing.", href: related.suspension.href },
          { eyebrow: "Published guide", title: "Chevrolet Colorado Tire Size Guide", text: "Evaluate trim, wheel position, measured dimensions, compression, gearing, braking, and spare clearance.", href: related.tires.href },
          { eyebrow: "Published guide", title: "Chevrolet Colorado Lift Kit Guide", text: "Choose leveling, coilovers or struts, rear support, and complete systems from a defined goal.", href: related.lift.href },
          { eyebrow: "Published guide", title: "Chevrolet Colorado Overland Build Guide", text: "Stage payload, bed storage, rack, shelter, recovery, power, water, and suspension decisions.", href: related.overland.href }
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Chevrolet Colorado planning questions",
        items: [
          ["Does every Colorado need a lift?", "No. Condition, tires, recovery, protection, load planning, and driver practice may address the first limitation."],
          ["Does every Colorado have DSSV dampers?", "No. Multimatic DSSV equipment is configuration-specific. Verify trim, model year, hardware, and part application."],
          ["Can ZR2 or Bison tire fitment be copied to another trim?", "No. Ride height, track width, wheels, offset, fenders, suspension, and clearance can differ."],
          ["Can springs increase the manufacturer's payload rating?", "No. Suspension can alter support or control but does not replace the vehicle's certified labels and limits."]
        ]
      }
    ],
    related: [related.first, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.trailering, sources.manuals, sources.support]
  },
  {
    key: "chevrolet-colorado-first-upgrades",
    kind: "article",
    route: "/vehicles/chevrolet-colorado/first-upgrades",
    title: "Best First Off-Road Upgrades for Chevy Colorado | RigAI",
    description:
      "Prioritize 2023-present Chevrolet Colorado inspection, tires, recovery, protection, bed utility, payload, towing, and suspension by actual use.",
    socialTitle: "Best First Off-Road Upgrades for Chevy Colorado | RigAI",
    socialDescription:
      "A practical first-upgrade order for daily driving, trails, work, towing, and overland third-generation Colorado use.",
    eyebrow: "Chevrolet Colorado first-upgrade guide",
    h1: "Best First Off-Road Upgrades for Chevy Colorado",
    dek:
      "Begin with condition and a complete use-and-load plan. The right first purchase depends on trim, factory equipment, terrain, bed use, passengers, payload, towing, and permanent accessory weight.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Inspect tires, brakes, steering, suspension, recovery provisions, underbody, bed, hitch, and towing equipment first.",
      "WT, LT, Trail Boss, Z71, ZR2, and ZR2 Bison have different starting equipment and should not share one automatic upgrade order.",
      "Factory ZR2 suspension may be more useful than an immediate generic replacement; define the problem before changing it.",
      "Plan spring and damping changes after permanent bumper, winch, rack, tent, storage, and normal bed load are known."
    ],
    toc: [
      ["baseline", "Baseline inspection"],
      ["first-systems", "Useful first systems"],
      ["build-order", "Upgrade paths by use"],
      ["trim-priorities", "Trim-specific priorities"],
      ["avoid", "What to avoid"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Inspect the pickup before buying parts",
        paragraphs: [
          "Check tire pressure, age and wear, wheel damage, brakes, bearings, steering joints, tie rods, control arms, ball joints, CV boots, front struts or coilovers, rear leaf packs, shocks, bump stops, lines, leaks, recovery provisions, skid plates, rock protection, differentials, bed mounts, tie-downs, hitch, spare, and previous modifications.",
          "Record the payload label and exact towing configuration. Estimate occupants, normal cargo, permanent accessories, trailer tongue weight, and the weight location. A level stance does not prove that the pickup is within its limits."
        ],
        contextualLink: related.suspension
      },
      {
        type: "systems",
        id: "first-systems",
        title: "High-value first systems",
        items: [
          ["Tires and airing equipment", "Choose for weather, highway use, terrain, load, towing, durability, measured size, repair needs, pressure management, and spare compatibility."],
          ["Recovery", "Identify the exact factory tow-hook or recovery-point configuration, then use compatible rated equipment and safe procedures."],
          ["Underbody protection", "Inspect factory skid plates and prioritize exposed engine, transfer-case, fuel, differential, rocker, and underbody areas based on actual risk."],
          ["Bed storage", "Use secure tie-downs and lightweight removable organization before committing to heavy drawers, caps, or rack systems."],
          ["Rock protection", "Select protection for the terrain and exact cab or body application while accounting for mount design, clearance, service access, and weight."],
          ["Suspension", "Repair wear first; change struts, coilovers, leaf packs, shocks, arms, or geometry only for a defined load, travel, control, or clearance need."],
          ["Bumper and winch", "Confirm need, mounting, cooling, front axle load, spring and damping response, recovery access, electrical demand, and total payload."],
          ["Towing preparation", "Verify hitch, wiring, brakes, cooling, tires, tongue weight, cargo, passengers, trailer ratings, and vehicle-specific documentation."]
        ]
      },
      {
        type: "scenarios",
        id: "build-order",
        title: "A practical first-upgrade order by use",
        items: [
          { title: "Daily driver", priority: "Maintenance, road-appropriate tires, brakes, steering, visibility, weather readiness, bed security, and ride.", wait: "Permanent heavy trail equipment.", data: "Commute, parking, passengers, bed use, climate, and highway behavior." },
          { title: "Mild trail use", priority: "Suitable tires, air system, recovery, essential protection, and secure storage.", wait: "Lift or wheel-offset change without measured need.", data: "Trim, terrain, trail partners, recovery provisions, contact marks, clearance, and load." },
          { title: "Technical trail use", priority: "Traction, durable tires, protection, controlled travel, steering, recovery, and careful line choice.", wait: "Cosmetic height or parts that replace useful ZR2 or Bison hardware without a clear reason.", data: "Factory suspension, lockers, protection, tires, fenders, full-compression clearance, and recovery route." },
          { title: "Towing or work use", priority: "Ratings, trailer match, hitch, brakes, cooling, tires, tongue weight, payload math, and stable load placement.", wait: "Springs used as permission to exceed labels.", data: "Trailer, cargo, occupants, accessories, payload label, axle loads, and scale data." },
          { title: "Overland travel", priority: "Weight budget, lightweight bed storage, recovery, tires, essential protection, water, power, and loaded handling.", wait: "Rack, tent, drawers, armor, and spare systems before weighing the plan.", data: "Trip inventory, people, bed access, shelter, range, trailer use, and daily needs." }
        ]
      },
      {
        type: "comparison",
        id: "trim-priorities",
        title: "Factory equipment changes the first priority",
        caption: "Verify exact model-year content before using a trim label to select parts.",
        headers: ["Configuration", "Confirm", "Planning effect"],
        rows: [
          ["WT or LT", "Drivetrain, tires, wheels, recovery provisions, protection, differential equipment, tow package, and payload label", "Condition, tires, recovery, protection, bed utility, or towing preparation may come before added height."],
          ["Trail Boss or Z71", "Factory ride height, track width, tires, wheels, suspension, drive modes, protection, differential equipment, and payload", "Preserve useful factory capability while addressing the specific terrain, load, or clearance gap."],
          ["ZR2", "DSSV dampers, lift, tires, wheels, fenders, lockers, protection, jounce equipment, payload, and model-year hardware", "Inspection, recovery, load planning, and driver practice may matter more than immediate suspension replacement."],
          ["ZR2 Bison", "AEV hardware, protection, bumpers, tires, jounce-control system, clearance, payload, towing, and exact part compatibility", "Added factory hardware changes weight, clearance, service access, and aftermarket compatibility."],
          ["Towing configuration", "Trailering equipment, hitch, cooling, payload label, brakes, tires, tongue weight, and trailer", "The exact vehicle and trailer combination determines preparation; trim name alone does not."]
        ]
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "Upgrades to postpone until the plan is clear",
        items: [
          ["Immediate cosmetic lift", "Extra height can change CV and steering angles, alignment, droop, ride, braking, entry height, towing behavior, and stability without solving the first limitation."],
          ["Excessive wheel offset", "Moving the tire changes scrub radius, steering and bearing leverage, fender coverage, and its path through compression and steering lock."],
          ["Heavy bed system by default", "Rack, cap, tent, drawers, refrigerator, battery, water, tools, and spare support consume payload every day."],
          ["Replacing ZR2 dampers by assumption", "A generic shock is not automatically an improvement over trim-specific DSSV tuning. Define the load or performance problem first."],
          ["Springs before final load", "Rear leaf capacity and shock damping should follow measured permanent load, intended payload, and empty-bed ride requirements."],
          ["Treating every trim as ZR2", "WT, LT, Trail Boss, and Z71 do not automatically share ZR2 ride height, dampers, track width, lockers, tires, or fenders."]
        ],
        contextualLink: related.overland
      },
      {
        type: "faq",
        id: "questions",
        title: "First-upgrade questions",
        items: [
          ["Should tires always be first?", "Not always. Mechanical condition, brakes, steering, recovery preparation, current tire condition, payload, and towing readiness can come first."],
          ["Does a ZR2 need immediate suspension replacement?", "Not automatically. Its factory system may already match the use; change it only for a verified load, travel, durability, service, or handling need."],
          ["Does a Trail Boss start like a WT?", "No. Factory height, stance, wheels, tires, suspension, protection, and differential equipment can differ. Verify the exact pickup."],
          ["Is a bed rack a first upgrade?", "Only when the cargo or shelter plan needs one and mounting, dynamic load, payload, height, and center-of-gravity effects are understood."]
        ]
      }
    ],
    related: [related.hub, related.suspension, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.trailering, sources.manuals]
  },
  {
    key: "chevrolet-colorado-suspension",
    kind: "article",
    route: "/vehicles/chevrolet-colorado/suspension",
    title: "Chevrolet Colorado Suspension Upgrade Guide | RigAI",
    description:
      "Plan 2023-present Chevrolet Colorado IFS, rear leaf springs, shocks, geometry, DSSV caveats, permanent load, payload, and towing.",
    socialTitle: "Chevrolet Colorado Suspension Upgrade Guide | RigAI",
    socialDescription:
      "Understand third-generation Colorado front suspension geometry, rear leaf support, trim hardware, load tuning, and towing trade-offs.",
    eyebrow: "Chevrolet Colorado suspension guide",
    h1: "Chevrolet Colorado Suspension Upgrade Guide",
    dek:
      "Choose suspension for the exact trim, pickup weight, and job. Factory ride height, IFS geometry, rear leaf support, DSSV equipment, empty-bed comfort, permanent load, towing, and trail control require different answers.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "The Colorado uses independent front suspension and a rear solid axle with leaf springs, but factory hardware varies by trim.",
      "ZR2 DSSV dampers and Bison-specific equipment must be treated as trim- and model-year-specific systems.",
      "Separate permanent bed equipment, temporary payload, passengers, and trailer tongue weight before selecting rear leaf capacity and damping.",
      "Excessive front lift can reduce droop and increase CV, tie-rod, steering, and alignment demands."
    ],
    toc: [
      ["direct-answer", "How to choose suspension"],
      ["components", "Suspension components"],
      ["trim-systems", "Factory trim systems"],
      ["load-cases", "Load and use cases"],
      ["geometry", "IFS geometry chain"],
      ["checks", "Fitment checks"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Choose by trim, measured load, and behavior",
        paragraphs: [
          "Start with ride height, representative front and rear axle weights where available, normal bed load, passengers, permanent accessories, trailer tongue weight, tire and wheel mass, current spring and damper condition, alignment, CV joints, steering, bump stops, and exact factory suspension.",
          "Front lift changes independent-suspension operating angles and available droop. Rear leaf selection changes empty-bed ride, loaded support, axle control, and shock demand. Neither end should be selected from advertised height alone."
        ],
        contextualLink: related.lift
      },
      {
        type: "systems",
        id: "components",
        title: "Suspension and steering systems",
        items: [
          ["Front coilovers or strut assemblies", "Support the front and control wheel motion; verify exact trim, mount, spring rate, damping, travel, and factory ride height."],
          ["Upper and lower control arms", "Locate the front wheel and influence alignment range, ball-joint angles, tire clearance, droop, compression, and strength."],
          ["CV joints and front axles", "Operate through angles that change with ride height, droop, steering, and suspension travel; inspect boots and full-motion clearance."],
          ["Tie rods and steering", "Wheel offset, tire mass, lift, alignment, trail impacts, and steering angle affect load and wear."],
          ["Rear leaf springs", "Support empty and loaded weight; pack design, rate, progression, travel, bushings, and intended constant load matter."],
          ["Rear shocks", "Control leaf and axle motion; length, damping, heat capacity, mounts, compression, droop, and load must match the system."],
          ["Bump stops and jounce systems", "Protect components and manage compression; ZR2 or Bison equipment must be verified rather than assumed across trims."],
          ["Driveshafts, brake lines, and wiring", "Check slip, joint angles, routing, brackets, slack, abrasion, and clearance through full motion where changes make it relevant."]
        ]
      },
      {
        type: "comparison",
        id: "trim-systems",
        title: "Factory suspension is not one system",
        caption: "Use exact model-year parts and measurements; trim labels alone are not compatibility proof.",
        headers: ["Configuration", "Important differences", "Planning approach"],
        rows: [
          ["WT and LT", "Standard ride-height and road-oriented applications can vary with drivetrain and equipment", "Repair wear first and choose changes for a measured load, handling, travel, or clearance need."],
          ["Trail Boss", "Factory lift, wider stance, tires, wheels, shocks, and off-road equipment differ from standard configurations", "Verify starting height and track width before selecting geometry or tire parts."],
          ["Z71", "Suspension tuning, tires, protection, and drive equipment differ from both standard and ZR2 applications", "Preserve balanced daily use while solving the specific trail or load limitation."],
          ["ZR2", "Factory lift, Multimatic DSSV dampers, wider stance, tires, lockers, fenders, and compression-control hardware", "Do not assume standard Colorado shocks, lift kits, or control parts are compatible or better."],
          ["ZR2 Bison", "Model-year-specific AEV protection and clearance equipment plus specialized jounce-control hardware where equipped", "Check mounts, interference, service access, load, ride height, and application before changing the system."]
        ]
      },
      {
        type: "scenarios",
        id: "load-cases",
        title: "Different loads require different tuning",
        items: [
          { title: "Empty-bed daily use", priority: "Compliance, steering precision, braking stability, body control, and low-speed ride.", wait: "Heavy constant-load leaf packs without regular permanent weight.", data: "Empty ride height, axle weights, tire pressure, commute, passengers, and damper condition." },
          { title: "Permanent rack and tent", priority: "Measured constant weight, rear leaf support, damping, body control, center of gravity, and axle load.", wait: "Leaf selection based only on accessory names.", data: "Rack, cap, tent, drawers, battery, spare, tools, and normal cargo weights." },
          { title: "Temporary payload", priority: "Stay within labels, distribute and secure cargo, set pressures, and confirm loaded handling.", wait: "Permanent stiff springs used only for rare loads without considering empty ride.", data: "Cargo weight, location, passengers, axle loads, trip frequency, and unloading behavior." },
          { title: "Towing and tongue weight", priority: "Payload math, hitch setup, rear axle load, stable ride height, damping, brakes, tires, and trailer control.", wait: "Suspension changes used to exceed ratings or hide poor loading.", data: "Trailer, tongue weight, hitch, cargo, occupants, accessories, ratings, and scale data." },
          { title: "Technical trails", priority: "Controlled wheel travel, tire contact, steering, CV operation, bump control, protection, and recovery.", wait: "Excessive front lift that harms geometry or stability.", data: "Trim, track width, shocks, jounce hardware, tire path, obstacles, load, and recovery plan." }
        ]
      },
      {
        type: "dependency",
        id: "geometry",
        title: "How suspension changes propagate",
        steps: [
          ["Front ride height changes", "Control-arm position, ball-joint and CV angles, tie-rod angle, caster, camber, toe, droop, compression, and steering behavior."],
          ["Permanent weight changes", "Spring compression, ride height, damping demand, axle load, braking, body control, and available payload."],
          ["Rear leaf changes", "Empty and loaded stance, ride, axle wrap, articulation, bump-stop timing, shock demand, and towing response."],
          ["Shock length changes", "Droop and compression limits, bump stops, line and wire travel, joint angles, and component contact."],
          ["Larger tires and offset changes", "Steering load, scrub radius, clearance path, gearing, braking, unsprung mass, and wheel-bearing leverage."]
        ],
        text:
          "Longer shocks alone are not a complete suspension system. Verify springs, arms, ball joints, CV joints, tie rods, shocks, bump stops, sway bars, brake lines, ABS wiring, driveshafts, tires, and alignment through intended motion."
      },
      {
        type: "checklist",
        id: "checks",
        title: "Suspension verification checklist",
        items: [
          "Exact model year, trim, drivetrain, factory ride height, shocks or DSSV dampers, jounce equipment, springs, leaf packs, wheels, tires, and previous modifications",
          "Representative permanent load, temporary cargo, passengers, trailer tongue weight, payload, and front and rear axle loads",
          "Ride height and side-to-side stance empty and at intended operating load",
          "Caster, camber, toe, steering-wheel position, complete alignment results, and adjustment range",
          "Upper and lower control arms, ball joints, CV joints and boots, tie rods, sway bars, and full-steering clearance",
          "Shock compressed and extended limits, bump-stop or jounce timing, leaf behavior, and usable travel",
          "Driveshaft, brake-line, breather, and ABS-wire routing through compression and droop where relevant",
          "Loaded braking, lane changes, crosswind response, trailer behavior, noises, fastener checks, and reinspection"
        ],
        note:
          "Upper control arms and other geometry parts are not automatically required for every nominal lift. Measurements, alignment results, travel, and component instructions decide."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common suspension mistakes",
        items: [
          ["Treating every trim alike", "Standard, Trail Boss, Z71, ZR2, and Bison applications differ in starting height, stance, dampers, tires, and hardware."],
          ["Assuming replacement shocks are better", "A replacement must solve a defined heat, damping, load, travel, service, or durability problem; generic parts are not automatically better than DSSV dampers."],
          ["Choosing leaf packs by lift number", "Permanent load, empty ride, progression, travel, damping, towing, and axle behavior matter as much as nominal height."],
          ["Adding longer shocks alone", "Shock length must work with springs, bump stops, arms, CV joints, lines, wiring, travel, and mounts."],
          ["Ignoring trailer tongue weight", "Tongue weight consumes payload and affects rear axle load, front response, damping demand, braking, and stability."],
          ["Assuming every lift needs upper control arms", "Actual height, alignment range, ball-joint angles, travel, wheel position, and manufacturer instructions determine the need."]
        ]
      }
    ],
    related: [related.hub, related.first, related.tires, related.lift, related.overland],
    safety,
    sources: [sources.model, sources.trailering, sources.manuals]
  },
  {
    key: "chevrolet-colorado-tire-size",
    kind: "article",
    route: "/vehicles/chevrolet-colorado/tire-size",
    title: "Chevrolet Colorado Tire Size and Fitment Guide | RigAI",
    description:
      "Evaluate 2023-present Chevrolet Colorado tire fitment by trim, measured size, wheels, offset, steering, compression, load, and spare storage.",
    socialTitle: "Chevrolet Colorado Tire Size and Fitment Guide | RigAI",
    socialDescription:
      "A trim-aware third-generation Colorado tire guide covering wheels, clearance, IFS motion, braking, towing, and under-bed spare fitment.",
    eyebrow: "Chevrolet Colorado tire fitment guide",
    h1: "Chevrolet Colorado Tire Size and Fitment Guide",
    dek:
      "Fitment is a motion-and-load question, not one advertised diameter. Trim, factory ride height, track width, fenders, wheels, offset, actual tire dimensions, steering, compression, alignment, and cargo all affect clearance.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size and fitment"),
    takeaways: [
      "Street-driving clearance does not prove clearance at steering lock and full suspension compression.",
      "ZR2 or Bison factory tires do not prove the same size fits WT, LT, Trail Boss, or Z71.",
      "Nominal sizes vary by manufacturer, model, wheel width, pressure, and load; use published and measured dimensions.",
      "Larger tires affect braking, steering load, gearing, acceleration, fuel use, towing, payload, and spare storage."
    ],
    toc: [
      ["direct-answer", "How to verify fitment"],
      ["trim-baseline", "Trim baselines"],
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
          "Record model year, trim, drivetrain, factory suspension and ride height, wheel width, offset and backspacing, tire model and measured dimensions, alignment, fenders, liners, mud flaps, bumpers, protection, load, and previous modifications.",
          "Check both front tires at full left and right steering lock while the suspension moves through compression. Inspect control arms, inner fenders, liners, bumper edges, mud flaps, brake hoses, wiring, and body seams. Then verify rear compression and under-bed spare storage."
        ],
        contextualLink: related.lift
      },
      {
        type: "comparison",
        id: "trim-baseline",
        title: "Factory tire baselines differ by configuration",
        caption: "Confirm the door label, build information, wheel markings, and installed equipment on the individual pickup.",
        headers: ["Configuration", "Verify", "Why copying fitment fails"],
        rows: [
          ["WT or LT", "Factory tire, wheel size, offset, drivetrain, standard ride height, liners, and payload", "A larger-trim factory package may use different stance, fenders, wheels, and suspension."],
          ["Trail Boss", "Factory lift, wider track, wheels, offset, tire package, fenders, steering, and suspension", "Its starting geometry and wheel position differ from standard configurations."],
          ["Z71", "Factory tires, wheels, suspension, liners, mud flaps, protection, and load", "Z71 should not be assumed identical to either Trail Boss or ZR2."],
          ["ZR2", "Factory lift, wide stance, 33-inch-class tire application where specified, wheels, fenders, DSSV suspension, lockers, and bump control", "Its complete factory package is not a universal compatibility template."],
          ["ZR2 Bison", "Model-year tire package, wheels, AEV hardware, jounce equipment, fenders, bumpers, clearance, and spare storage", "Bison-specific body, protection, and suspension details must be measured before aftermarket selection."]
        ]
      },
      {
        type: "systems",
        id: "dimensions",
        title: "Tire and wheel variables",
        items: [
          ["Actual diameter", "Manufacturer specifications and measured mounted diameter can differ from the nominal sidewall calculation."],
          ["Section and tread width", "Both affect control-arm, liner, fender, and body clearance; wheel width and pressure change mounted shape."],
          ["Wheel width", "Must suit the tire's approved range and changes sidewall shape, protection, bead behavior, and measured width."],
          ["Offset and backspacing", "Move the tire relative to suspension and body, changing inner clearance, outer sweep, scrub radius, bearing leverage, and fender coverage."],
          ["Factory track width", "Trail Boss, ZR2, and Bison stance differences cannot be recreated or ignored using tire diameter alone."],
          ["Alignment", "Caster, camber, toe, ride height, and control-arm position change the tire path during steering and travel."],
          ["Tire construction", "Load range, casing, tread, sidewall, mass, pressure, speed rating, and intended terrain affect ride, grip, braking, and durability."],
          ["Spare storage", "Measure the inflated tire against the under-bed hoist, frame, hitch, exhaust, heat shields, lines, axle motion, and access path."]
        ]
      },
      {
        type: "dependency",
        id: "clearance",
        title: "Dynamic clearance chain",
        steps: [
          ["Steering reaches full lock", "The front tire sweeps toward control arms, liners, body mounts, bumper edges, mud flaps, and fenders."],
          ["Suspension compresses", "The tire rises and changes position relative to liners, fenders, bump stops, arms, hoses, wiring, and bodywork."],
          ["Wheel offset changes", "Inner and outer clearances trade places while scrub radius, steering load, and bearing leverage change."],
          ["Vehicle load increases", "Static ride height and available compression change, making representative loaded checks necessary."],
          ["Articulation and trail forces combine", "One corner may compress while steering and body roll bring the tire closer to components than a level road test does."]
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
          ["Gearing and acceleration", "Effective gearing becomes taller as diameter increases, changing launch, grade response, transmission behavior, and engine braking."],
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
        title: "Colorado tire fitment checklist",
        items: [
          "Model year, trim, drivetrain, factory suspension, factory ride height, track width, fenders, liners, bumpers, mud flaps, and prior modifications",
          "Tire manufacturer, model, nominal size, measured diameter, section width, tread width, load rating, pressure range, and approved wheel width",
          "Wheel diameter, width, offset, backspacing, center bore, bolt pattern, load rating, brake clearance, and hardware",
          "Full left and right steering lock at static height and controlled compression",
          "Control-arm, tie-rod, sway-bar, liner, body, bumper, fender, mud-flap, hose, and wiring clearance",
          "Rear compression clearance and under-bed spare fit against frame, hitch, exhaust, heat shields, hoist, lines, and axle motion",
          "Alignment, braking, steering return, vibration, speed indication, acceleration, transmission behavior, and loaded road test",
          "Payload, towing, tire capacity, wheel capacity, spare support, fastener torque, and post-use inspection"
        ],
        note:
          "No one largest tire size applies to every 2023-present Colorado. Verify the complete configuration and actual tire."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common tire-fitment mistakes",
        items: [
          ["Copying ZR2 fitment to another trim", "Ride height, track width, wheels, fenders, suspension, bump control, and clearance can differ."],
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
    sources: [sources.model, sources.trailering, sources.manuals]
  },
  {
    key: "chevrolet-colorado-lift-kit",
    kind: "article",
    route: "/vehicles/chevrolet-colorado/lift-kit",
    title: "Chevrolet Colorado Lift Kit Guide | RigAI",
    description:
      "Compare 2023-present Chevrolet Colorado leveling, coilover, strut, leaf, shock, and complete lift systems with trim-specific IFS caveats.",
    socialTitle: "Chevrolet Colorado Lift Kit Guide | RigAI",
    socialDescription:
      "Choose a third-generation Colorado lift around trim, purpose, IFS geometry, travel, tires, rear load, towing, and daily use.",
    eyebrow: "Chevrolet Colorado lift-kit guide",
    h1: "Chevrolet Colorado Lift Kit Guide",
    dek:
      "Lift height alone does not describe suspension quality. Match the exact trim, factory ride height, tire goal, IFS geometry, rear load, travel, ride, towing, and installation requirements.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Lift kits"),
    takeaways: [
      "Trail Boss, ZR2, and ZR2 Bison begin from different factory ride heights and hardware than standard configurations.",
      "A spacer can change stance without automatically increasing usable travel or improving damping.",
      "Excessive front lift can reduce droop and increase CV, ball-joint, tie-rod, steering, and alignment demands.",
      "Standard Colorado kits must not be assumed compatible with DSSV-equipped ZR2 or Bison hardware."
    ],
    toc: [
      ["direct-answer", "How to choose a lift"],
      ["approaches", "Lift approaches"],
      ["intent", "Choose by intent"],
      ["supporting-parts", "Supporting systems"],
      ["geometry", "Geometry chain"],
      ["checks", "Installation checks"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Start with purpose and exact factory configuration",
        paragraphs: [
          "Measure current front and rear ride height empty and at representative load. Record model year, trim, drivetrain, factory suspension and ride height, DSSV or standard dampers, jounce hardware, tires, wheels, alignment, front accessories, permanent bed load, passengers, trailer tongue weight, and desired use.",
          "A mild daily-driver level, a larger-tire clearance plan, technical trail suspension, a constant-load overland system, and a towing or work setup solve different problems. One universal height cannot serve all configurations."
        ],
        contextualLink: related.suspension
      },
      {
        type: "comparison",
        id: "approaches",
        title: "Common lift approaches",
        caption: "Component names do not guarantee the same travel, geometry, load support, or ride.",
        headers: ["Approach", "What it changes", "Key checks"],
        rows: [
          ["Leveling or top spacer", "Front static height and stance without automatically changing spring or damper quality", "Trim compatibility, droop, compression, CV and ball-joint angles, alignment, bump stops, ride, and loaded stance"],
          ["Preload spacer where applicable", "Spring preload and installed ride height, often with ride and travel trade-offs", "Exact assembly, rate, top-out behavior, droop, damping, alignment, and manufacturer instructions"],
          ["Replacement front coilover or strut", "Spring, damping, height, and travel as an application-specific assembly", "Trim, mounts, DSSV exclusion or compatibility, control arms, CV joints, tie rods, bump stops, lines, tires, and alignment"],
          ["Rear block or add-a-leaf", "Rear stance or support with different effects on leaf behavior", "Axle location, U-bolts, wrap, shock length, bump stops, empty ride, permanent load, towing, and installation"],
          ["Replacement leaf pack", "Rear rate, progression, support, height, and travel", "Measured constant load, empty-bed comfort, bushings, shocks, brake lines, payload, and towing behavior"],
          ["Complete suspension system", "Height, spring support, damping, geometry, bump control, and travel as a package", "Exact trim and factory ride height, ZR2 or Bison compatibility, tires, payload, towing, alignment, and maintenance"]
        ]
      },
      {
        type: "scenarios",
        id: "intent",
        title: "Choose lift strategy by purpose",
        items: [
          { title: "Visual leveling", priority: "Minimal change with measured stance, adequate droop, compression, alignment, steering, and loaded behavior.", wait: "Height that creates poor ride or towing stance.", data: "Current rake, payload, tongue weight, front accessories, trim, and factory suspension." },
          { title: "Mild trail and daily use", priority: "Ride quality, controlled travel, alignment, modest clearance, reliable steering, and road behavior.", wait: "Complexity and height beyond the trail need.", data: "Terrain, tires, commute, passengers, load, and starting ride height." },
          { title: "Larger tire clearance", priority: "Measured tire path, wheels, fenders, bump stops, steering, compression, gearing, braking, and spare.", wait: "Assuming static height guarantees fitment.", data: "Trim, actual tire dimensions, offset, steering lock, compression, load, and prior changes." },
          { title: "Frequent technical off-road use", priority: "IFS geometry, travel, damping, steering, CV operation, protection, recovery, stability, and serviceability.", wait: "Maximum height without a complete motion plan.", data: "Obstacles, ZR2 or Bison hardware, tires, track width, jounce control, load, and recovery." },
          { title: "Heavy overland load", priority: "Measured permanent weight, appropriate rear leaf support, damping, axle load, braking, and center of gravity.", wait: "Springs selected before rack, tent, storage, water, power, and spare planning.", data: "Axle weights, trip inventory, daily unloaded use, passengers, and trailer." },
          { title: "Towing and work use", priority: "Ratings, stable geometry, payload, tongue weight, axle load, tires, brakes, damping, and predictable handling.", wait: "Lift used to mask overload or poor hitch setup.", data: "Trailer, hitch, cargo, occupants, accessories, scale data, and manufacturer instructions." }
        ]
      },
      {
        type: "systems",
        id: "supporting-parts",
        title: "Supporting systems to verify",
        items: [
          ["Upper control arms", "Alignment range, ball-joint angle, droop, compression, tire clearance, strength, and exact trim application; the need must be verified."],
          ["CV joints and axles", "Operating angle, boot clearance, binding, plunge, steering, droop, compression, and service condition."],
          ["Tie rods and steering", "Angles, joint range, wheel offset, tire mass, steering lock, trail impacts, and alignment."],
          ["Bump stops and jounce systems", "Tire and body clearance, shock protection, retained uptravel, mount compatibility, and ZR2 or Bison hardware."],
          ["Rear blocks, leaves, and U-bolts", "Axle location, wrap, support, progression, fastener length, bump timing, shock travel, and load."],
          ["Rear shocks", "Compressed and extended length, damping, heat, mounts, leaf motion, brake-line limits, and intended load."],
          ["Differential-drop claims", "Treat as application-specific; verify actual CV-angle change, clearance, mounts, protection, and manufacturer instructions."],
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
          ["Rear height or leaf changes", "Empty and loaded stance, ride, axle wrap, bump timing, shock demand, and towing response."],
          ["Permanent load changes", "Spring compression, stance, damping demand, axle load, body control, braking, and available payload."]
        ],
        text:
          "There is no universal supporting-parts list for every 2-inch or 3-inch claim. Actual change, trim, hardware, alignment, motion, tire path, load, and component instructions determine what is required."
      },
      {
        type: "checklist",
        id: "checks",
        title: "Lift installation and verification checklist",
        items: [
          "Exact model year, trim, drivetrain, factory ride height, DSSV or standard dampers, jounce hardware, wheels, tires, towing equipment, and previous modifications",
          "Measured front and rear height empty and at intended load, plus permanent accessory, passenger, cargo, and tongue-weight calculations",
          "Control arms, ball joints, CV joints and boots, tie rods, sway bars, brake hoses, ABS wires, driveshafts, and bump stops through motion",
          "Shock compression and droop limits, spring or leaf retention, rear U-bolts, leaf behavior, axle wrap, and mount clearance",
          "Full steering and controlled compression tire clearance at liners, fenders, arms, body, bumper, mud flaps, hoses, and wiring",
          "Caster, camber, toe, steering-wheel position, available adjustment range, and printed alignment results",
          "Braking, return-to-center, lane changes, crosswind behavior, loaded stance, towing response, noises, and stability",
          "Fastener torque, line routing, leaks, settling, tire wear, alignment, and post-installation reinspection"
        ],
        note:
          "Follow the exact kit and vehicle instructions. Safety-critical work and alignment should be inspected by qualified professionals."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common lift mistakes",
        items: [
          ["Buying only by advertised height", "Spring rate, damper travel, damping, geometry, load, bump control, steering, and installation define system quality."],
          ["Assuming spacers add travel", "A spacer changes position but does not automatically increase shock stroke, droop, compression, or useful wheel travel."],
          ["Using a standard kit on ZR2 or Bison", "Factory ride height, DSSV dampers, jounce hardware, mounts, track width, protection, and clearance require exact compatibility."],
          ["Ignoring rear permanent load", "Rack, cap, tent, drawers, battery, spare, tools, water, and tongue weight change leaf and shock requirements."],
          ["Treating control arms as universal", "Need depends on actual height, alignment, ball-joint angle, droop, tire clearance, trim, and component design."],
          ["Correcting overload with height", "A level stance does not prove compliance with payload, axle, tire, hitch, or towing limits."]
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.model, sources.trailering, sources.manuals]
  },
  {
    key: "chevrolet-colorado-overland-build",
    kind: "article",
    route: "/vehicles/chevrolet-colorado/overland-build",
    title: "Chevrolet Colorado Overland Build Guide | RigAI",
    description:
      "Build a 2023-present Chevrolet Colorado overland plan around payload, bed load, racks, tents, towing, recovery, power, suspension, and daily use.",
    socialTitle: "Chevrolet Colorado Overland Build Guide | RigAI",
    socialDescription:
      "A staged third-generation Colorado framework for payload, bed systems, towing, recovery, power, water, rear leaves, and loaded handling.",
    eyebrow: "Chevrolet Colorado overland guide",
    h1: "Chevrolet Colorado Overland Build Guide",
    dek:
      "Plan the trip and calculate every permanent and travel load before choosing suspension. A pickup bed does not make bumpers, winch, armor, rack, tent, drawers, power, water, fuel, passengers, or trailer tongue weight disappear.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "Use the exact payload label and include occupants, permanent accessories, bed cargo, rack or tent equipment, and trailer tongue weight.",
      "Keep heavy cargo low, secure, and sensibly distributed while preserving bed access, rear axle capacity, braking, and departure clearance.",
      "Calculate rack, cap, tent, drawer, battery, bumper, armor, winch, and spare weight before selecting rear leaves and shocks.",
      "Build in stages so actual trips and measured loaded behavior decide whether heavier systems are justified."
    ],
    toc: [
      ["trip-first", "Start with the trip"],
      ["payload-plan", "Payload planning"],
      ["cargo-systems", "Bed and travel systems"],
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
          "Trim and factory equipment affect starting clearance and protection, but payload planning applies to every configuration. WT, LT, Trail Boss, Z71, ZR2, and ZR2 Bison do not share one payload or towing figure."
        ],
        contextualLink: related.suspension
      },
      {
        type: "comparison",
        id: "payload-plan",
        title: "Build a complete payload plan",
        caption: "Use the exact vehicle labels, manual, trailering guide, component ratings, and scale data where available.",
        headers: ["Load group", "Include", "Why it matters"],
        rows: [
          ["Vehicle occupants", "Driver, passengers, child seats, pets, and personal items", "Consumes payload and affects axle loads before bed equipment is added"],
          ["Permanent accessories", "Bumpers, winch, skid plates, rock protection, rack, cap, tent, drawers, battery, compressor, spare support, and tools", "Changes everyday curb weight, spring compression, damping, braking, and available payload"],
          ["Trip cargo", "Food, water, fuel, refrigerator contents, shelter, clothing, recovery gear, and sports equipment", "Varies by trip and must be secured and distributed"],
          ["Trailer tongue weight", "Loaded force at the hitch plus hitch or weight-distribution hardware", "Consumes payload and changes rear axle load, front response, ride height, and stability"],
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
          ["Drawers and storage", "Empty system weight, cargo restraint, access, dust and water protection, rear axle load, removability, and service access."],
          ["Refrigerator and power", "Duty cycle, auxiliary battery, wiring, fusing, charging, solar, ventilation, mounting, service access, and total weight."],
          ["Water and fuel", "Required volume, legal container, ventilation, restraint, heat, low placement, changing weight, range need, and separation from ignition sources."],
          ["Recovery and armor", "Rated recovery provisions, recovery gear, winch, bumpers, skid plates, rock protection, mounting, access, training, and permanent weight."],
          ["Spare and carrier", "Measured tire, under-bed space, hitch and exhaust clearance, hoist, tools, alternative support, departure area, and payload."],
          ["Suspension and tires", "Permanent load, temporary cargo, rear leaf capacity, damping, ride height, axle load, pressure, load rating, braking, and loaded handling."]
        ]
      },
      {
        type: "dependency",
        id: "weight-chain",
        title: "Why accessory weight compounds",
        steps: [
          ["Steel bumpers, winch, and protection", "Consume payload, add axle load, change spring compression and damping demand, and increase braking work."],
          ["Bed rack, cap, tent, and drawers", "Add permanent rear and elevated weight before trip supplies or passengers."],
          ["Battery, refrigerator, water, and fuel", "Add electrical complexity and variable cargo weight that must be secured and distributed."],
          ["Larger spare and recovery gear", "Add rear or bed load and can affect under-bed clearance, departure space, and access."],
          ["Passengers and trailer tongue weight", "Use remaining payload and can shift axle loads, ride height, steering response, braking, and stability."]
        ],
        text:
          "Steel bumpers, winch, skid plates, rack, tent, drawers, refrigerator, battery, water, fuel, recovery gear, passengers, and tongue weight can overload a Colorado when combined. Calculate the complete system rather than evaluating each accessory alone."
      },
      {
        type: "sequence",
        id: "staged-build",
        title: "A staged Colorado overland build",
        intro:
          "Use actual trips and measured weights to decide whether the next stage is necessary.",
        items: [
          ["Stage 1: reliability and essentials", "Complete maintenance, tires, brakes, recovery equipment, communication, basic tools, and essential underbody or rocker protection."],
          ["Stage 2: lightweight travel", "Add removable bed storage, shelter, cooking, modest water, and camping equipment while preserving payload and bed access."],
          ["Stage 3: weigh and tune", "Measure permanent and representative trip load, axle distribution, ride height, braking, handling, tire pressure, then tune rear leaves and damping if needed."],
          ["Stage 4: justified advanced systems", "Add armor, electrical equipment, larger spare support, rack, tent, winch, or specialized gear only when repeated use supports the weight and complexity."]
        ]
      },
      {
        type: "checklist",
        id: "loaded-checks",
        title: "Check the pickup at representative travel load",
        items: [
          "Payload, front and rear axle loads, tire and wheel ratings, hitch limits, trailer limits, and rack, cap, or tent static and dynamic ratings",
          "Cargo restraint, bed mounts, rack fasteners, tent mounts, drawers, refrigerator, battery, water, fuel, spare, and recovery equipment",
          "Ride height, rear leaf compression, shock control, bump-stop or jounce clearance, steering, body roll, and crosswind response",
          "Tire pressure, temperature, full-compression clearance, braking, acceleration, transmission behavior, cooling, and fuel range",
          "Trailer tongue weight, hitch setup, wiring, brakes, safety chains, sway behavior, mirrors, and legal requirements where towing",
          "Departure angle, hitch, spare, exhaust, bumper, bed corners, and low-mounted equipment on intended terrain",
          "Bed and tailgate access, rear-seat use, visibility, security, daily parking, roof-load and rack-load limits, and emergency access",
          "Post-trip fastener torque, wear, leaks, wiring abrasion, mount movement, tire damage, brake condition, and weight changes"
        ],
        note:
          "Recheck after changing passengers, trailer, water, fuel, storage, spare, rack, cap, tent, armor, or other major load."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Colorado overland mistakes",
        items: [
          ["Starting with a heavy catalog build", "Every steel, storage, shelter, electrical, recovery, and spare system consumes payload and adds maintenance."],
          ["Assuming all trims share ratings", "Payload and towing vary with model year, trim, drivetrain, equipment, options, hitch, passengers, cargo, and accessories."],
          ["Choosing leaf packs before weighing", "Rear suspension should respond to measured permanent load and representative trip behavior, not an imagined final build."],
          ["Mounting everything high", "Rack, tent, fuel, water, spare, and cargo above the bed increase center of gravity, body roll, crosswind response, and rollover risk."],
          ["Blocking bed access", "A system that makes tools, recovery gear, spare equipment, common cargo, or emergency items hard to reach can fail its daily purpose."],
          ["Treating ZR2 capability as unlimited capacity", "Factory trail equipment does not remove payload, axle, tire, braking, towing, or component-rating limits."]
        ],
        contextualLink: related.first
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires, related.lift],
    safety,
    sources: [sources.model, sources.trailering, sources.manuals, sources.support]
  }
];
