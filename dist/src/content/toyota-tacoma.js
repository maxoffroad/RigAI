const dates = {
  published: "2026-07-27T12:00:00+05:00",
  modified: "2026-07-27T12:00:00+05:00",
  reviewedLabel: "July 27, 2026"
};

const vehicle = {
  slug: "toyota-tacoma",
  name: "Toyota Tacoma 3rd Gen",
  shortName: "Tacoma",
  guidesLabel: "Toyota Tacoma",
  heroLabel: "TACOMA",
  ctaLabel: "Build My Setup",
  planInputs:
    "model year, trim, cab, bed length, drivetrain, driving profile, budget, installed equipment, payload, and planned load"
};

const scope = {
  title: "Vehicle scope: 2016-2023 Tacoma",
  text:
    "This guide is for the US-market third-generation Toyota Tacoma, model years 2016-2023. Cab, bed length, trim, drivetrain, factory suspension, payload rating, and installed equipment vary, so confirm the exact truck before choosing parts."
};

const safety = {
  title: "Safety, load, and fitment",
  paragraphs: [
    "This guide is informational and does not replace the owner's manual, the tire and loading label, manufacturer instructions, inspection, or advice from a qualified mechanic.",
    "Verify the exact model year, trim, cab, bed length, drivetrain, wheel dimensions, tire construction, alignment, added weight, towing load, prior modifications, and manufacturer fitment data before purchasing or installing parts."
  ]
};

const sources = {
  brochure: {
    label: "2023 Toyota Tacoma eBrochure",
    href: "https://www.toyota.com/content/dam/toyota/brochures/pdf/2023/tacoma_ebrochure.pdf",
    type: "Toyota official brochure"
  },
  newsroom: {
    label: "2023 Toyota Tacoma model overview",
    href: "https://pressroom.toyota.com/2023-toyota-tacoma-adds-new-sr5-sx-and-chrome-packages/",
    type: "Toyota USA Newsroom"
  },
  manual: {
    label: "2022 Toyota Tacoma manuals and warranties",
    href: "https://www.toyota.com/owners/warranty-owners-manuals/digital/article/tacoma/2022/om04039u/ch03se030402/",
    type: "Toyota Owners"
  },
  trdPro: {
    label: "2017 Toyota Tacoma TRD Pro technical overview",
    href: "https://pressroom.toyota.com/2017-tacoma-welcomes-new-trd-pro-lineup/",
    type: "Toyota USA Newsroom"
  }
};

const breadcrumbs = (label) => [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  ...(label
    ? [
        { label: "Toyota Tacoma", href: "/vehicles/toyota-tacoma" },
        { label }
      ]
    : [{ label: "Toyota Tacoma" }])
];

const related = {
  hub: {
    title: "Toyota Tacoma 3rd Gen Guide",
    href: "/vehicles/toyota-tacoma",
    text: "Start with the complete 2016-2023 Tacoma planning framework."
  },
  first: {
    title: "First Upgrades for a Tacoma",
    href: "/vehicles/toyota-tacoma/first-upgrades",
    text: "Put inspection, traction, recovery, protection, storage, and load planning in a useful order."
  },
  suspension: {
    title: "Tacoma Suspension Guide",
    href: "/vehicles/toyota-tacoma/suspension",
    text: "Match front coilovers, rear leaf springs, and shocks to real operating weight."
  },
  tires: {
    title: "Tacoma Tire Size and Fitment Guide",
    href: "/vehicles/toyota-tacoma/tire-size",
    text: "Evaluate wheel geometry, dynamic clearance, spare storage, braking, and gearing."
  },
  overland: {
    title: "Tacoma Overland Build Guide",
    href: "/vehicles/toyota-tacoma/overland-build",
    text: "Plan racks, shelter, storage, power, water, armor, and suspension around payload."
  }
};

export const toyotaTacomaPages = [
  {
    key: "toyota-tacoma",
    kind: "vehicleHub",
    route: "/vehicles/toyota-tacoma",
    title: "Toyota Tacoma 3rd Gen Off-Road Upgrade Guide | RigAI",
    description:
      "Plan 2016-2023 Toyota Tacoma off-road upgrades around daily use, trails, payload, bed load, tires, recovery, protection, and suspension.",
    socialTitle: "Toyota Tacoma 3rd Gen Upgrade Guide | RigAI",
    socialDescription:
      "A practical upgrade-planning guide for the 2016-2023 Toyota Tacoma, from daily driving to trails, work, and overland travel.",
    eyebrow: "2016-2023 Toyota Tacoma planning guide",
    h1: "Toyota Tacoma 3rd Gen Off-Road Upgrade Guide",
    dek:
      "Build a useful truck around the way you drive, carry cargo, and use the bed. Start with condition and real load before choosing tires, armor, racks, or suspension.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs(),
    takeaways: [
      "Treat payload as a complete operating-load limit, not as spare capacity reserved only for bed cargo.",
      "Plan permanent bed weight before selecting rear springs or dampers.",
      "Keep daily comfort in the decision when the truck often runs with an empty bed.",
      "Confirm cab, bed, trim, drivetrain, factory equipment, wheels, alignment, and prior modifications."
    ],
    toc: [
      ["overview", "Quick overview"],
      ["use-cases", "Who the Tacoma suits"],
      ["upgrade-goals", "Common upgrade goals"],
      ["load-planning", "Payload and bed load"],
      ["featured-guides", "Tacoma guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "overview",
        title: "What should a third-generation Tacoma plan begin with?",
        paragraphs: [
          "Begin with the truck's exact configuration and current condition. The 2016-2023 Tacoma combines a coil-spring independent front suspension with a leaf-spring rear axle, so front accessory weight and rear bed load affect the truck differently.",
          "A lightly loaded daily driver may need little more than suitable tires, sound recovery preparation, and selective protection. A truck carrying a cap, drawers, water, tools, or a rooftop tent needs a weight inventory before rear springs and shocks are selected."
        ],
        contextualLink: {
          before: "If an enclosed SUV better matches the cargo plan, compare this pickup-focused approach with the ",
          label: "Toyota 4Runner upgrade guide",
          href: "/vehicles/toyota-4runner",
          after: "."
        }
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Who is the third-generation Tacoma suited for?",
        intro:
          "The Tacoma can cover several jobs, but the priorities change with passengers, bed use, trailer tongue load, and time spent on pavement.",
        items: [
          {
            title: "Daily driver",
            priority: "Ride quality, tire behavior, braking, visibility, and simple secure storage.",
            wait: "Constant-load rear springs when the bed normally stays empty.",
            data: "Normal passengers, commute, weather, parking, bed cargo, and current tire condition."
          },
          {
            title: "Weekend trail truck",
            priority: "Traction, rated recovery points, basic protection, clearance checks, and practice.",
            wait: "A tall lift or heavy rack before terrain and cargo needs are known.",
            data: "Trail surface, obstacle size, recovery partners, tire plan, trim equipment, and bed load."
          },
          {
            title: "Overland travel",
            priority: "Payload, storage, water, power, shelter, recovery, and loaded suspension control.",
            wait: "Spring selection before permanent accessory and trip weights are measured.",
            data: "Occupants, cap or rack, tent, drawers, refrigerator, battery, water, tools, and tongue load."
          },
          {
            title: "Work or towing",
            priority: "Rated capacities, load distribution, tire load rating, braking, and stability.",
            wait: "Off-road accessories that consume payload without serving the work.",
            data: "Truck label ratings, trailer weight, tongue load, tools, passengers, bed length, and route."
          }
        ]
      },
      {
        type: "systems",
        id: "upgrade-goals",
        title: "Plan common Tacoma upgrade goals as connected systems",
        intro:
          "A pickup makes cargo and rear-axle load central to the plan. Each addition can change suspension, tire, braking, and handling needs.",
        items: [
          ["Tires and wheels", "Traction, wheel geometry, dynamic clearance, load rating, braking, gearing, and spare storage."],
          ["Recovery", "Rated vehicle recovery points, appropriate equipment, training, and a situation-specific method."],
          ["Skid plates and armor", "Terrain exposure, mounting, service access, front-to-rear weight, and payload cost."],
          ["Front suspension", "Coilover condition, front accessory weight, damping, travel, geometry, and alignment."],
          ["Rear suspension", "Leaf-spring capacity, empty-bed comfort, constant load, temporary load, and shock control."],
          ["Bed and roof systems", "Bed rack or cap weight, rooftop-tent height, secure mounting, wind load, and center of mass."],
          ["Towing", "Trailer compatibility, tongue load, payload, axle load, braking, cooling, and owner-manual limits."],
          ["Storage and power", "Drawers, tools, refrigerator, battery, water, wiring, ventilation, and removable load."]
        ]
      },
      {
        type: "checklist",
        id: "load-planning",
        title: "Payload and bed-load inputs to record",
        intro:
          "Use the tire and loading label and owner's manual for the exact truck. Published maximums do not describe every cab, bed, trim, drivetrain, or option combination.",
        items: [
          "Occupants and personal gear",
          "Cargo, tools, recovery equipment, and bed storage",
          "Bed rack, cap, rooftop tent, awning, and mounting hardware",
          "Bumpers, winch, skid plates, sliders, and spare-tire changes",
          "Water, auxiliary battery, refrigerator, fuel, and trip supplies",
          "Trailer tongue load when towing",
          "Front and rear axle loading and weight distribution",
          "Which items are permanent and which are carried only for a trip"
        ],
        note:
          "Payload includes occupants, cargo, options, accessories, and trailer tongue load where applicable. Do not select constant-load springs from an unmeasured wish list."
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Toyota Tacoma 3rd Gen guides",
        published: [
          {
            eyebrow: "Published guide",
            title: "Best First Upgrades for a Tacoma",
            text: "Choose an order for daily driving, weekend trails, overland travel, or work and towing.",
            href: "/vehicles/toyota-tacoma/first-upgrades"
          },
          {
            eyebrow: "Published guide",
            title: "Tacoma Suspension Guide",
            text: "Match coilovers, leaf springs, and shocks to actual load and use.",
            href: "/vehicles/toyota-tacoma/suspension"
          },
          {
            eyebrow: "Published guide",
            title: "Tacoma Tire Size and Fitment Guide",
            text: "Check wheels, rubbing points, alignment, spare storage, and driving trade-offs.",
            href: "/vehicles/toyota-tacoma/tire-size"
          },
          {
            eyebrow: "Published guide",
            title: "Tacoma Overland Build Guide",
            text: "Stage bed, shelter, storage, power, water, recovery, armor, and suspension decisions.",
            href: "/vehicles/toyota-tacoma/overland-build"
          }
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Common Tacoma planning questions",
        items: [
          {
            question: "Do all 2016-2023 Tacoma trims start with the same equipment?",
            answer:
              "No. SR, SR5, TRD Sport, TRD Off-Road, Limited, TRD Pro, and special packages can differ in wheels, tires, shocks, traction equipment, body details, and capacities. Confirm the exact truck."
          },
          {
            question: "Should suspension be the first upgrade?",
            answer:
              "Not automatically. Healthy factory suspension may suit a lightly loaded truck. Condition, tires, recovery, or protection can be earlier priorities unless real load or terrain creates a suspension need."
          },
          {
            question: "Why does an empty bed matter?",
            answer:
              "Rear springs selected for a heavy permanent load can feel firm when that load is absent. Decide whether cargo is constant, occasional, or removable before choosing a rear spring package."
          }
        ]
      }
    ],
    related: [related.first, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.brochure, sources.newsroom, sources.manual]
  },
  {
    key: "toyota-tacoma-first-upgrades",
    kind: "article",
    route: "/vehicles/toyota-tacoma/first-upgrades",
    title: "Best First Off-Road Upgrades for Toyota Tacoma | RigAI",
    description:
      "Choose the first upgrades for a 2016-2023 Toyota Tacoma by condition, tires, recovery, protection, bed use, load, terrain, and towing needs.",
    socialTitle: "Best First Upgrades for a Toyota Tacoma | RigAI",
    socialDescription:
      "A practical first-upgrade order for a third-generation Tacoma used for commuting, trails, overland travel, work, or towing.",
    eyebrow: "2016-2023 Tacoma first upgrades",
    h1: "Best First Off-Road Upgrades for Toyota Tacoma",
    dek:
      "Start with the truck you own and the job it actually does. Inspection, traction, recovery, protection, storage, and load planning usually matter before a large suspension or tire change.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("First upgrades"),
    takeaways: [
      "Repair baseline problems before modifications hide or amplify them.",
      "Choose tires for real roads, weather, terrain, load, and wheel clearance.",
      "Use rated recovery points and equipment suited to the recovery method.",
      "Delay suspension, racks, and heavy armor until their load and purpose are clear."
    ],
    toc: [
      ["baseline", "Baseline inspection"],
      ["first-systems", "Early priorities"],
      ["build-order", "Order by use case"],
      ["bed-storage", "Bed storage and racks"],
      ["avoid", "What to avoid"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "baseline",
        title: "Begin with a baseline inspection",
        paragraphs: [
          "Check tires, brakes, steering, wheel bearings, driveline, fluids, leaks, suspension wear, leaf-spring condition, shocks, alignment, battery, and recovery-point condition before buying upgrades. A modification should not become a substitute for maintenance.",
          "Record the model year, trim, cab, bed length, drivetrain, factory suspension, tire placard data, wheel size, current ride height, and installed accessories. This prevents recommendations for a different Tacoma configuration from becoming the starting point."
        ],
        contextualLink: {
          before: "Keep the broader dependencies visible with the ",
          label: "Toyota Tacoma 3rd Gen upgrade guide",
          href: "/vehicles/toyota-tacoma",
          after: "."
        }
      },
      {
        type: "systems",
        id: "first-systems",
        title: "Early upgrade priorities",
        intro:
          "The right first purchase depends on condition and use. These systems are a decision checklist, not a universal shopping list.",
        items: [
          ["Tires", "Match pavement, weather, trail surface, load rating, noise, weight, and verified wheel-well clearance."],
          ["Recovery gear", "Carry equipment you know how to use and match it to solo travel, group travel, sand, mud, snow, or rocks."],
          ["Recovery points", "Confirm rated front and rear attachment options; transport tie-downs are not automatically recovery points."],
          ["Skid plates", "Protect exposed areas that the actual terrain reaches, while accounting for mounting, service access, and weight."],
          ["Bed storage", "Secure tools and recovery gear low in the bed without consuming unnecessary payload or blocking normal truck use."],
          ["Suspension", "Change it when wear, permanent load, damping, travel, or terrain creates a defined need."],
          ["Bed rack or cap", "Choose around cargo access, rack rating, tent load, wind, height, security, and daily removability."],
          ["Brakes and towing checks", "Inspect braking condition and confirm trailer, tongue-load, payload, and owner-manual requirements."]
        ]
      },
      {
        type: "scenarios",
        id: "build-order",
        title: "Recommended order by use case",
        items: [
          {
            title: "Daily driver",
            priority: "Maintenance, suitable tires, secure storage, and simple roadside or recovery readiness.",
            wait: "Lift, constant-load leaf packs, roof tent, and heavy armor without a regular need.",
            data: "Commute, weather, passengers, parking, empty-bed frequency, and noise tolerance."
          },
          {
            title: "Weekend trail use",
            priority: "Inspection, traction, rated recovery points, recovery practice, and terrain-specific protection.",
            wait: "Large tires or lift height selected from appearance alone.",
            data: "Trail difficulty, wheel and tire details, rubbing checks, recovery partners, and current clearance."
          },
          {
            title: "Overland build",
            priority: "Payload inventory, storage plan, shelter, recovery, tires, protection, then load-matched suspension.",
            wait: "Springs chosen before rack, tent, drawers, water, battery, and tools are weighed.",
            data: "Permanent weight, trip weight, axle distribution, passengers, range, and daily-use compromises."
          },
          {
            title: "Work or towing",
            priority: "Ratings, brakes, tires, load distribution, secure cargo, cooling checks, and trailer compatibility.",
            wait: "Accessories that reduce payload or visibility without supporting the work.",
            data: "Door-label payload, trailer and tongue load, tools, cab and bed configuration, route, and frequency."
          }
        ]
      },
      {
        type: "checklist",
        id: "bed-storage",
        title: "Bed storage, rack, and rooftop-tent checks",
        intro:
          "Bed equipment can solve a real problem, but it also changes payload, center of mass, access, noise, and rear-suspension demand.",
        items: [
          "Measure the rack, cap, tent, drawer, and mounting-hardware weight",
          "Confirm static and dynamic ratings for every mounting component",
          "Keep frequently used recovery gear accessible",
          "Secure cargo against braking, cornering, and rough-road movement",
          "Check tailgate, tonneau, cap, antenna, and garage clearance",
          "Consider removal when the truck returns to daily use",
          "Recalculate remaining payload with occupants and trip supplies",
          "Choose rear springs only after permanent load is established"
        ],
        note:
          "A tall rack and tent may be useful for travel but can add wind noise, height, and body motion. A lower or removable system may better fit a daily-driven truck."
      },
      {
        type: "mistakes",
        id: "avoid",
        title: "Avoid unnecessary early modifications",
        items: [
          ["Lifting before defining a problem", "Ride height alone does not select spring rate, damping, geometry, or tire clearance."],
          ["Buying the heaviest protection package", "Armor that does not match the terrain uses payload and can change front or rear spring needs."],
          ["Choosing tires by nominal size only", "Actual dimensions, construction, wheel width, offset, alignment, and dynamic movement all matter."],
          ["Installing load springs for occasional cargo", "A constant-load pack can compromise empty-bed comfort when the weight is rarely carried."],
          ["Building around another Tacoma photo", "Cab, bed, trim, drivetrain, wheel geometry, alignment, and prior modifications may differ."]
        ],
        contextualLink: {
          before: "Before choosing wheel and tire changes, use the ",
          label: "Tacoma tire size and fitment guide",
          href: "/vehicles/toyota-tacoma/tire-size",
          after: "."
        }
      },
      {
        type: "faq",
        id: "questions",
        title: "First-upgrade questions",
        items: [
          {
            question: "Are all-terrain tires always the first purchase?",
            answer:
              "No. Worn brakes, damaged suspension, unsuitable recovery points, or other baseline issues can come first. Tire choice also depends on pavement use, weather, terrain, load, and verified fitment."
          },
          {
            question: "When should skid plates move earlier?",
            answer:
              "Move protection earlier when the terrain regularly exposes a vulnerable area. Confirm existing factory protection because equipment differs by trim and package."
          },
          {
            question: "Should a rooftop tent come before suspension?",
            answer:
              "Plan the tent, rack, and other permanent load first, then choose suspension using the measured weight. That does not mean every tent requires a suspension change."
          }
        ]
      }
    ],
    related: [related.hub, related.suspension, related.tires, related.overland],
    safety,
    sources: [sources.brochure, sources.newsroom, sources.manual]
  },
  {
    key: "toyota-tacoma-suspension",
    kind: "article",
    route: "/vehicles/toyota-tacoma/suspension",
    title: "Toyota Tacoma 3rd Gen Suspension Upgrade Guide | RigAI",
    description:
      "Plan 2016-2023 Toyota Tacoma suspension around coilovers, leaf springs, shocks, actual load, empty-bed ride, lift geometry, caster, and alignment.",
    socialTitle: "Toyota Tacoma 3rd Gen Suspension Guide | RigAI",
    socialDescription:
      "Choose front and rear Tacoma suspension by real operating weight, ride needs, terrain, alignment, and geometry.",
    eyebrow: "2016-2023 Tacoma suspension planning",
    h1: "Toyota Tacoma 3rd Gen Suspension Upgrade Guide",
    dek:
      "Match springs and damping to the truck's real job. Front accessory load, rear bed weight, empty-bed use, alignment range, and lift geometry matter more than an advertised height alone.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Suspension"),
    takeaways: [
      "The front coilover and rear leaf-spring systems solve different load and control problems.",
      "Separate permanent accessory weight from passengers or cargo carried only sometimes.",
      "Choose spring rate for measured operating weight and shocks for appropriate control.",
      "Treat alignment, caster, travel, driveline angles, and supporting parts as part of the lift."
    ],
    toc: [
      ["direct-answer", "Direct answer"],
      ["front-rear", "Front and rear systems"],
      ["rear-springs", "Rear spring choices"],
      ["load-cases", "Empty and loaded ride"],
      ["alignment", "Alignment and caster"],
      ["lift-tradeoffs", "Lift trade-offs"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "When does Tacoma suspension need to change?",
        paragraphs: [
          "A suspension change can make sense when components are worn, permanent weight changes ride height or control, repeated rough-road use exceeds the current damping, or a carefully defined travel and clearance goal requires different hardware.",
          "Healthy factory suspension can remain appropriate for a lightly loaded daily driver. Excessive lift is not automatically better: it can increase geometry, alignment, droop, driveline, handling, and tire-clearance complications without solving a real load or terrain problem."
        ],
        contextualLink: {
          before: "Place suspension in the complete decision order with the ",
          label: "Tacoma first-upgrades guide",
          href: "/vehicles/toyota-tacoma/first-upgrades",
          after: "."
        }
      },
      {
        type: "systems",
        id: "front-rear",
        title: "Understand the front and rear systems",
        intro:
          "Toyota describes the third-generation Tacoma with double-wishbone coil-spring front suspension and leaf-spring rear suspension. Each end needs a load-specific plan.",
        items: [
          ["Front coilovers", "Support front ride height and control; account for bumper, winch, skid, battery, and other constant front weight."],
          ["Front springs", "Select rate and preload for actual weight and desired travel, not simply for the tallest advertised setting."],
          ["Front shocks", "Match damping, heat capacity, service needs, road comfort, and terrain speed to the use case."],
          ["Rear leaf springs", "Carry bed and tongue load while setting the balance between empty-bed comfort and loaded support."],
          ["Rear shocks", "Control axle and spring movement; shock length, travel, mounting, load, and spring behavior must work together."],
          ["Bump stops", "Manage end-of-travel contact and should be considered with lift, load, tire travel, and shock length."]
        ]
      },
      {
        type: "comparison",
        id: "rear-springs",
        title: "Add-a-leaf versus a full leaf pack",
        caption: "Rear spring approaches for a 2016-2023 Tacoma",
        headers: ["Approach", "Can suit", "Main checks"],
        rows: [
          ["Healthy factory pack", "Light or variable loads when ride height and control remain appropriate", "Condition, sag, bushings, shocks, payload, and loaded behavior"],
          ["Add-a-leaf", "A defined moderate load or support need when compatible with the existing pack", "Resulting rate, height, travel, clamp and pack condition, empty ride"],
          ["Full replacement leaf pack", "A known constant load or a complete spring reset", "Target permanent weight, axle load, rate choice, height, shocks, driveline angles"],
          ["Load-assist system", "Variable work or towing loads in an approved application", "Manufacturer limits, minimum pressure, articulation, mounting, and payload limits"]
        ]
      },
      {
        type: "scenarios",
        id: "load-cases",
        title: "Match suspension to empty and loaded use",
        items: [
          {
            title: "Mostly empty daily driver",
            priority: "Comfort, control, sensible height, and factory-like behavior.",
            wait: "Heavy constant-load rear springs.",
            data: "Normal bed weight, passengers, road quality, current wear, and occasional cargo."
          },
          {
            title: "Permanent overland load",
            priority: "Measured front and rear weight, loaded ride height, damping, and axle control.",
            wait: "Spring choice before cap, rack, drawers, tent, water, power, and armor are finalized.",
            data: "Permanent weight by axle, trip weight, center of mass, tire load, and remaining payload."
          },
          {
            title: "Temporary work load",
            priority: "Rated capacity, secure load, variable-load behavior, and an approved support strategy.",
            wait: "A permanent heavy spring rate if the truck is empty most of the week.",
            data: "Load frequency, maximum payload, bed position, tongue load, and unloaded ride expectations."
          },
          {
            title: "Repeated rough-road use",
            priority: "Damping control, heat management, usable travel, serviceability, and protection.",
            wait: "Height changes that reduce useful droop or create avoidable geometry problems.",
            data: "Terrain speed, frequency, impacts, load, shock temperatures, and maintenance plan."
          }
        ]
      },
      {
        type: "checklist",
        id: "alignment",
        title: "Alignment, caster, and upper-control-arm checks",
        intro:
          "A lifted front suspension still needs an alignment that serves road behavior and tire clearance. Available adjustment varies with the truck and the complete setup.",
        items: [
          "Measure ride height and inspect alignment before modification",
          "Confirm camber, caster, and toe after the final operating load is installed",
          "Check caster adjustment range rather than assuming a target is achievable",
          "Evaluate upper control arms only for a defined geometry, travel, or alignment need",
          "Check ball-joint or uniball travel, boot clearance, wheel clearance, and service requirements",
          "Cycle steering and suspension to inspect tire, brake-line, ABS-wire, and component clearance",
          "Recheck alignment after springs settle or load changes materially",
          "Use the tire wear pattern and road behavior as diagnostic inputs"
        ],
        note:
          "An aftermarket upper control arm is not automatically required for every lift, and it does not guarantee a particular caster value on every truck."
      },
      {
        type: "dependency",
        id: "lift-tradeoffs",
        title: "Treat lift height as a system decision",
        steps: ["Real operating weight", "Spring and shock selection", "Ride height and travel", "Alignment and driveline checks", "Dynamic tire clearance"],
        text:
          "More height can affect droop, control-arm position, caster, CV and driveline angles, shock travel, brake-line routing, body roll, and tire contact points. Select the smallest change that meets the defined load and terrain need."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Tacoma suspension mistakes",
        items: [
          ["Choosing by lift number", "Advertised height does not define spring rate, damping, travel, alignment, or loaded behavior."],
          ["Ignoring empty-bed use", "A rear pack designed for a large constant load may feel unnecessarily firm when the truck is unloaded."],
          ["Treating preload as free height", "Excessive preload can change available travel and ride behavior; follow the component maker's limits."],
          ["Selecting springs before accessories", "Bumpers, winch, rack, cap, drawers, tent, water, and towing load can change the correct choice."],
          ["Assuming alignment will solve every rub", "Caster changes can move the tire within the wheel opening and trade clearance at one point for another."]
        ],
        contextualLink: {
          before: "For tire and wheel interactions, continue with the ",
          label: "Tacoma tire size and fitment guide",
          href: "/vehicles/toyota-tacoma/tire-size",
          after: "."
        }
      },
      {
        type: "faq",
        id: "questions",
        title: "Tacoma suspension questions",
        items: [
          {
            question: "Is an add-a-leaf always better for a loaded Tacoma?",
            answer:
              "No. The answer depends on existing pack condition, permanent and temporary load, desired ride height, empty-bed use, shock choice, and the add-a-leaf design."
          },
          {
            question: "Does every lifted Tacoma need upper control arms?",
            answer:
              "No. Check the actual alignment range, travel, component clearance, intended height, and manufacturer requirements. Use an upper control arm when it solves a defined need."
          },
          {
            question: "Should towing weight determine rear springs?",
            answer:
              "Trailer tongue load is one input, but suspension changes do not raise the truck's rated capacities. Confirm the complete towing and payload limits in the owner's manual and labels."
          }
        ]
      }
    ],
    related: [related.hub, related.first, related.tires, related.overland],
    safety,
    sources: [sources.newsroom, sources.brochure, sources.manual, sources.trdPro]
  },
  {
    key: "toyota-tacoma-tire-size",
    kind: "article",
    route: "/vehicles/toyota-tacoma/tire-size",
    title: "Toyota Tacoma 3rd Gen Tire Size and Fitment Guide | RigAI",
    description:
      "Plan 2016-2023 Toyota Tacoma tire fitment using factory configuration, wheel width, offset, backspacing, alignment, rubbing points, load, and spare storage.",
    socialTitle: "Toyota Tacoma 3rd Gen Tire Fitment Guide | RigAI",
    socialDescription:
      "A cautious Tacoma tire and wheel guide covering dynamic clearance, wheel geometry, rubbing, braking, gearing, and load.",
    eyebrow: "2016-2023 Tacoma tire planning",
    h1: "Toyota Tacoma 3rd Gen Tire Size and Fitment Guide",
    dek:
      "There is no single largest tire that fits every third-generation Tacoma. Verify the complete tire, wheel, alignment, suspension, body-clearance, load, and spare-storage combination.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Tire size and fitment"),
    takeaways: [
      "Begin with the exact factory tire placard and current wheel dimensions.",
      "Nominal tire size does not describe measured diameter, section width, tread width, or construction.",
      "Wheel width, offset, backspacing, caster, lift, and prior modifications change where a tire travels.",
      "Include spare storage, braking, gearing, acceleration, fuel use, and unsprung weight in the decision."
    ],
    toc: [
      ["direct-answer", "Direct answer"],
      ["factory-baseline", "Factory baseline"],
      ["wheel-geometry", "Wheel geometry"],
      ["rubbing-points", "Rubbing points"],
      ["fitment-check", "Fitment checklist"],
      ["driving-tradeoffs", "Driving trade-offs"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "What tire size fits a third-generation Tacoma?",
        paragraphs: [
          "Fitment must be verified for the exact 2016-2023 Tacoma. SR, SR5, TRD Sport, TRD Off-Road, Limited, TRD Pro, and special packages can begin with different wheels, tires, suspension tuning, and body details.",
          "Stock height versus lifted height is only one variable. Actual tire dimensions, wheel width, offset, backspacing, alignment, caster, suspension travel, steering angle, load, mud flaps, fender liners, body mount clearance, and prior trimming all affect the result."
        ],
        contextualLink: {
          before: "If suspension changes are part of the plan, review the ",
          label: "Tacoma suspension guide",
          href: "/vehicles/toyota-tacoma/suspension",
          after: " before selecting the wheel and tire combination."
        }
      },
      {
        type: "checklist",
        id: "factory-baseline",
        title: "Record the factory baseline",
        items: [
          "Model year, trim, cab, bed length, drivetrain, and factory suspension",
          "Door-jamb tire and loading label",
          "Current tire size, service description, construction, and measured dimensions",
          "Wheel diameter, width, offset, and backspacing",
          "Current alignment values, especially caster",
          "Ride height, spring load, spacers, lift components, and prior trimming",
          "Full-size spare dimensions and available storage space",
          "Normal payload, towing use, tire pressure requirements, and expected terrain"
        ],
        note:
          "Use manufacturer load and pressure information for the selected tire and exact truck. A larger tire does not change the vehicle's payload, axle, or towing ratings."
      },
      {
        type: "comparison",
        id: "wheel-geometry",
        title: "How wheel dimensions change clearance",
        caption: "Wheel and tire variables that affect Tacoma fitment",
        headers: ["Variable", "What it changes", "What to verify"],
        rows: [
          ["Wheel width", "Supported tire shape and inner and outer sidewall position", "Tire-maker approved range, suspension clearance, fender coverage"],
          ["Offset", "Wheel mounting position relative to centerline", "Upper-control-arm clearance, scrub radius, outer sweep, bearing and steering effects"],
          ["Backspacing", "Distance from mounting face to inner wheel edge", "Inner sidewall and component clearance through steering and travel"],
          ["Actual tire dimensions", "Real diameter, width, tread, and shoulder shape", "Manufacturer measurements on the specified measuring wheel"],
          ["Alignment and caster", "Fore-aft position and angle of the tire in the opening", "Clearance at full steering lock and through suspension movement"]
        ]
      },
      {
        type: "systems",
        id: "rubbing-points",
        title: "Inspect Tacoma rubbing points dynamically",
        intro:
          "A tire that clears while parked may contact the truck while steering, braking, compressing, articulating, or carrying load.",
        items: [
          ["Upper control arm and suspension", "Check inner sidewall and wheel clearance at steering lock and through travel."],
          ["Body mount area", "Inspect rearward tire sweep under steering and compression; body modifications require qualified review."],
          ["Fender liner and pinch areas", "Check fasteners, liner shape, and contact marks through the full steering range."],
          ["Mud flaps", "Factory or aftermarket flaps can reduce clearance near the tire's rearward sweep."],
          ["Front bumper and air deflectors", "Trim and bumper configuration can alter forward clearance."],
          ["Cab and bed configuration", "Overall load and wheelbase do not guarantee identical front-wheel clearance, but they change how the truck is used and loaded."],
          ["Spare location", "Confirm the inflated spare fits its carrier and does not contact heat, brake, suspension, or body components."],
          ["Brake and steering components", "Verify wheel barrel, spoke, caliper, tie-rod, and balance-weight clearance."]
        ]
      },
      {
        type: "sequence",
        id: "fitment-check",
        title: "A safer tire-fitment process",
        items: [
          ["Identify the exact truck", "Record trim, cab, bed, drivetrain, suspension, wheel, alignment, and modifications."],
          ["Choose the tire for the job", "Balance road use, weather, terrain, load rating, construction, noise, and weight."],
          ["Confirm wheel compatibility", "Check approved wheel-width range, offset, backspacing, load rating, and brake clearance."],
          ["Compare measured dimensions", "Use tire-maker specifications instead of relying only on the nominal sidewall code."],
          ["Inspect dynamic clearance", "Check steering lock, compression, articulation, braking, reverse, and normal operating load."],
          ["Plan the spare", "Confirm matching diameter, storage, tools, and a practical change procedure."],
          ["Recheck after use", "Inspect contact marks, torque, pressures, alignment, and tire wear."]
        ]
      },
      {
        type: "dependency",
        id: "driving-tradeoffs",
        title: "Account for driving and load trade-offs",
        steps: ["Tire diameter and mass", "Effective gearing and unsprung weight", "Acceleration and braking demand", "Fuel use and road behavior", "Drivetrain and clearance decisions"],
        text:
          "A larger or heavier tire can change acceleration, shift behavior, braking demand, steering feel, fuel economy, and component loads. The practical result depends on engine, transmission, axle ratio, total weight, tire construction, pressure, and driving conditions."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Tacoma tire-fitment mistakes",
        items: [
          ["Publishing one universal maximum", "Tacoma configurations, wheels, tires, alignment, suspension, and body clearance differ."],
          ["Assuming a lift creates every needed clearance", "Lift can change static space without resolving steering sweep, body mount, liner, or compression contact."],
          ["Ignoring wheel offset", "The same nominal tire can follow a different path and contact different areas on another wheel."],
          ["Forgetting the spare", "A road-ready plan includes storage, diameter compatibility, tools, and access under load."],
          ["Ignoring braking and gearing", "Added diameter and mass can change how the truck accelerates, stops, shifts, and uses fuel."]
        ],
        contextualLink: {
          before: "For a staged purchase order, return to the ",
          label: "Tacoma first-upgrades guide",
          href: "/vehicles/toyota-tacoma/first-upgrades",
          after: "."
        }
      },
      {
        type: "faq",
        id: "questions",
        title: "Tacoma tire questions",
        items: [
          {
            question: "Does a suspension lift guarantee tire clearance?",
            answer:
              "No. Dynamic clearance still depends on the tire, wheel, alignment, caster, steering movement, suspension travel, body mount, liner, mud flaps, bumper, load, and prior modifications."
          },
          {
            question: "Can two tires with the same sidewall size fit differently?",
            answer:
              "Yes. Actual diameter, section width, tread width, shoulder shape, construction, and measuring wheel can differ by tire model."
          },
          {
            question: "Do TRD Off-Road and TRD Pro fitment results apply to an SR5 or Limited?",
            answer:
              "Not automatically. Factory wheels, tires, suspension tuning, body details, and installed equipment can differ. Verify the exact truck and complete setup."
          }
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.overland],
    safety,
    sources: [sources.brochure, sources.newsroom, sources.manual]
  },
  {
    key: "toyota-tacoma-overland-build",
    kind: "article",
    route: "/vehicles/toyota-tacoma/overland-build",
    title: "Toyota Tacoma Overland Build Guide | RigAI",
    description:
      "Plan a 2016-2023 Toyota Tacoma overland build around payload, bed systems, shelter, storage, power, water, recovery, armor, tires, and suspension.",
    socialTitle: "Toyota Tacoma Overland Build Guide | RigAI",
    socialDescription:
      "A staged third-generation Tacoma overland plan focused on payload, weight distribution, daily comfort, and useful equipment.",
    eyebrow: "2016-2023 Tacoma overland planning",
    h1: "Toyota Tacoma Overland Build Guide",
    dek:
      "Treat payload as the design budget. Plan bed systems, shelter, storage, power, water, recovery, armor, tires, and suspension as one operating-weight problem.",
    vehicle,
    scope,
    dates,
    breadcrumbs: breadcrumbs("Overland build"),
    takeaways: [
      "Weigh permanent accessories before selecting springs.",
      "Include occupants, cargo, water, tools, recovery gear, and trailer tongue load in payload planning.",
      "Keep heavy items low, secure, and distributed with axle load in mind.",
      "Stage the build so daily comfort, braking, tire capacity, and service access remain visible."
    ],
    toc: [
      ["payload-first", "Start with payload"],
      ["bed-systems", "Bed and camp systems"],
      ["weight-chain", "Weight before suspension"],
      ["staged-build", "Staged build"],
      ["load-checks", "Loaded-vehicle checks"],
      ["mistakes", "Common mistakes"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "payload-first",
        title: "Start a Tacoma overland build with payload",
        paragraphs: [
          "The payload available on the exact truck is shared by occupants, cargo, options, accessories, and trailer tongue load where applicable. A brochure maximum is not a substitute for the tire and loading label on the vehicle.",
          "Create separate permanent-load and trip-load lists. Permanent load may include a cap or rack, tent, drawers, battery, bumper, winch, sliders, and skid plates. Trip load adds people, water, food, refrigerator contents, recovery gear, tools, fuel containers, and personal equipment."
        ],
        contextualLink: {
          before: "Use the complete platform overview in the ",
          label: "Toyota Tacoma 3rd Gen upgrade guide",
          href: "/vehicles/toyota-tacoma",
          after: "."
        }
      },
      {
        type: "systems",
        id: "bed-systems",
        title: "Plan bed and camp systems together",
        intro:
          "Every storage or shelter decision changes weight, access, security, height, aerodynamics, and how the rear suspension works.",
        items: [
          ["Bed rack", "Confirm rack and bed-mount ratings, tent compatibility, cargo access, height, wind noise, and dynamic use."],
          ["Rooftop tent", "Include tent and ladder weight, occupied rating, mounting span, center of mass, weather, and daily removal needs."],
          ["Bed cap", "Balance security and weather protection against permanent weight, height, ventilation, and access."],
          ["Drawers", "Use them when organization justifies their weight; keep heavy tools low and preserve access to critical gear."],
          ["Refrigerator", "Plan secure mounting, ventilation, power consumption, cable protection, and food-storage needs."],
          ["Auxiliary battery", "Choose chemistry, capacity, charging, fusing, ventilation, mounting, temperature range, and cable size as a system."],
          ["Water", "Account for container and water weight, secure mounting, freezing, sanitation, and how capacity changes axle load."],
          ["Recovery gear", "Keep rated equipment accessible without unloading the entire bed during a recovery."]
        ]
      },
      {
        type: "dependency",
        id: "weight-chain",
        title: "Accessory weight must come before suspension selection",
        steps: ["Accessory and trip inventory", "Measured front and rear load", "Remaining payload and tire capacity", "Spring and shock choice", "Loaded alignment and road check"],
        text:
          "A front bumper and winch affect the front differently from drawers, water, or a tent over the bed. Select spring rate and damping after the permanent weight and its distribution are known, then verify the truck at representative operating load."
      },
      {
        type: "sequence",
        id: "staged-build",
        title: "A staged Tacoma overland build",
        intro:
          "Test each stage before adding the next. A lighter removable solution can be more useful than permanent equipment that serves only one trip.",
        items: [
          ["Stage 1: baseline", "Complete maintenance, inspect brakes and suspension, confirm ratings, and record empty operating weight."],
          ["Stage 2: travel essentials", "Add suitable tires, recovery preparation, navigation, communication, first aid, and simple secure storage."],
          ["Stage 3: cargo plan", "Choose bins, drawers, cap, or rack only after real trip equipment and access needs are understood."],
          ["Stage 4: shelter and power", "Add tent, refrigerator, battery, lighting, and water with a complete weight and electrical plan."],
          ["Stage 5: protection", "Add armor where terrain exposure justifies its payload and service cost."],
          ["Stage 6: suspension", "Match front and rear springs and shocks to measured permanent load and intended terrain."],
          ["Stage 7: loaded verification", "Weigh the truck, inspect axle distribution, align it, test braking and handling, and remove unused weight."]
        ]
      },
      {
        type: "checklist",
        id: "load-checks",
        title: "Loaded-vehicle checks before travel",
        items: [
          "Vehicle, axle, payload, tire, wheel, rack, cap, and hitch ratings",
          "Front and rear axle load with occupants and trip equipment",
          "Tire load rating, condition, pressure, and full-size spare plan",
          "Braking condition and representative loaded stopping behavior",
          "Secure mounting for drawers, refrigerator, battery, water, tools, and recovery equipment",
          "Daily-driver visibility, noise, height, ride, parking, and fuel-use compromises",
          "Rear suspension travel, bump-stop clearance, shock control, and driveline behavior",
          "Headlight aim, alignment, fastener torque, wiring protection, and service access"
        ],
        note:
          "Suspension support does not increase the Tacoma's certified payload, axle, tire, hitch, or towing ratings."
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common Tacoma overland-build mistakes",
        items: [
          ["Buying storage before inventory", "Drawers and boxes can consume payload before the actual trip gear is understood."],
          ["Stacking weight high", "A tall rack, tent, awning, and roof cargo can increase body motion and affect daily handling."],
          ["Selecting heavy rear springs too early", "The final permanent load may be lighter, heavier, or positioned differently than expected."],
          ["Ignoring rear axle load", "Total vehicle weight alone can hide a rear-biased bed, water, spare, or tongue-load problem."],
          ["Treating armor as automatic", "Protection should match exposed terrain; unused armor still affects payload, braking, and suspension."],
          ["Forgetting the trip home", "A reliable plan includes spare capacity, service access, tire repair, recovery, and removal of failed equipment."]
        ],
        contextualLink: {
          before: "Match the final measured load with the ",
          label: "Tacoma suspension guide",
          href: "/vehicles/toyota-tacoma/suspension",
          after: "."
        }
      },
      {
        type: "faq",
        id: "questions",
        title: "Tacoma overland questions",
        items: [
          {
            question: "Does a bed cap require heavier rear springs?",
            answer:
              "Not automatically. Add the cap to the complete permanent and trip load, measure the truck's behavior, and choose springs only if the resulting load and use create a defined need."
          },
          {
            question: "Should water be mounted at the rear of the bed?",
            answer:
              "Placement depends on the complete layout and mounting options. Heavy load far behind the rear axle can increase rear-axle demand, so keep weight low, secure, and as favorably distributed as practical."
          },
          {
            question: "Can suspension upgrades increase payload?",
            answer:
              "No. Springs or load-assist equipment can change ride height or control but do not raise the manufacturer's certified vehicle, axle, tire, hitch, or towing ratings."
          }
        ]
      }
    ],
    related: [related.hub, related.first, related.suspension, related.tires],
    safety,
    sources: [sources.brochure, sources.newsroom, sources.manual]
  }
];
