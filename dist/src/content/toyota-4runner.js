import { phase4BPages } from "./toyota-4runner-phase-4b.js";

export const phase4ADates = {
  published: "2026-07-23",
  modified: "2026-07-23",
  reviewedLabel: "July 23, 2026"
};

const commonScope = {
  title: "Vehicle scope",
  text:
    "This guide focuses primarily on the Toyota 4Runner 5th Gen (model years 2010-2024). Suspension layout, trim equipment, KDSS availability, and fitment details can differ by model year and configuration."
};

const commonSafety = {
  title: "Safety and fitment",
  paragraphs: [
    "This guide is informational and does not replace inspection, manufacturer instructions, or advice from a qualified mechanic.",
    "Always verify model year, trim, drivetrain, KDSS status, installed equipment, load, local requirements, and manufacturer fitment data before purchasing or installing parts."
  ]
};

const sources = {
  generations: {
    label: "Toyota 4Runner Icons: Fifth and Sixth Generations",
    href:
      "https://pressroom.toyota.com/toyota-4runner-icons-fifth-2010-2024-sixth-2025-generations/",
    type: "Toyota USA Newsroom"
  },
  kdss: {
    label: "2024 Toyota 4Runner: Rugged Capability",
    href: "https://pressroom.toyota.com/2024-toyota-4runner-rugged-capability/",
    type: "Toyota USA Newsroom"
  },
  manual: {
    label: "Toyota 4Runner Owner's Manual",
    href: "https://assets.sia.toyota.com/publications/en/om-s/OM35C03U/pdf/OM35C03U.pdf",
    type: "Toyota official manual"
  },
  brochure: {
    label: "2024 Toyota 4Runner eBrochure",
    href: "https://www.toyota.com/content/dam/toyota/brochures/pdf/2024/4runner_ebrochure.pdf",
    type: "Toyota official brochure"
  },
  dampers: {
    label: "Monotube and twin-tube shock absorber principles",
    href:
      "https://workshop.bilstein.com/en/shock-absorber-failure-analysis-approaches/",
    type: "BILSTEIN technical resource"
  },
  springLoad: {
    label: "Choosing suspension for vehicle load",
    href:
      "https://arbusa.com/news/how-to-choose-the-best-suspension-kit-for-your-off-road-vehicle",
    type: "ARB technical resource"
  }
};

export const toyota4RunnerPages = [
  {
    key: "toyota-4runner",
    kind: "vehicleHub",
    route: "/vehicles/toyota-4runner",
    title: "Toyota 4Runner Off-Road Upgrade Guide | RigAI",
    description:
      "Plan Toyota 4Runner off-road upgrades in a practical order based on use, condition, load, recovery needs, protection, and suspension dependencies.",
    socialTitle: "Toyota 4Runner Off-Road Upgrade Guide | RigAI",
    socialDescription:
      "A practical Toyota 4Runner upgrade-planning guide for daily driving, trails, overland travel, and more demanding use.",
    eyebrow: "Toyota 4Runner planning guide",
    h1: "Toyota 4Runner Off-Road Upgrade Guide",
    dek:
      "Build around how you use your 4Runner, not around a random parts list. This guide explains the decisions and dependencies that shape a useful upgrade plan.",
    scope: commonScope,
    dates: phase4ADates,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Vehicles", href: "/#vehicles" },
      { label: "Toyota 4Runner" }
    ],
    takeaways: [
      "Define the real use case before selecting parts.",
      "Inspect the vehicle and address baseline condition first.",
      "Plan tires, recovery, protection, added weight, and suspension as connected decisions.",
      "Treat generation, trim, drivetrain, KDSS, and existing modifications as fitment inputs."
    ],
    toc: [
      ["quick-answer", "Quick answer"],
      ["use-cases", "Choose your use case"],
      ["upgrade-systems", "Upgrade systems"],
      ["planning-order", "Planning order"],
      ["considerations", "4Runner considerations"],
      ["featured-guides", "Featured guides"],
      ["questions", "Common questions"]
    ],
    sections: [
      {
        type: "prose",
        id: "quick-answer",
        title: "Where should a 4Runner upgrade plan start?",
        paragraphs: [
          "Start by defining the roads and trails the vehicle actually sees, then inspect its current condition. For many mixed-use vehicles, suitable tires, safe recovery preparation, and basic protection decisions come before a major suspension change.",
          "Suspension selection is more useful after future bumper, winch, armor, cargo, and tire plans are clearer. That sequence is not universal: a worn suspension, a constant travel load, or more demanding terrain can move suspension work earlier."
        ]
      },
      {
        type: "scenarios",
        id: "use-cases",
        title: "Choose your use case",
        intro:
          "The same 4Runner can serve very different jobs. Use the closest scenario as a planning starting point, then adjust it for condition, experience, and local terrain.",
        items: [
          {
            title: "Daily driving + occasional trails",
            priority: "Road manners, tire condition, simple recovery readiness, and restraint.",
            wait: "Heavy armor, high-load springs, and complex recovery hardware may be premature.",
            data: "Commute, weather, trail frequency, tire condition, and normal passenger/cargo load."
          },
          {
            title: "Weekend trails",
            priority: "Traction, recovery attachment points, basic protection, and driver practice.",
            wait: "A large suspension change before terrain and tire requirements are understood.",
            data: "Trail difficulty, obstacles, tire plans, current clearance, and recovery partners."
          },
          {
            title: "Overland travel",
            priority: "Reliability, payload planning, constant load, recovery, and balanced suspension.",
            wait: "Roof and cargo additions without a complete weight inventory.",
            data: "Passenger load, water, fuel, camping equipment, roof load, and trip duration."
          },
          {
            title: "Heavier off-road use",
            priority: "Inspection, protection, recovery strategy, controlled suspension travel, and tires.",
            wait: "Copying another vehicle's setup without matching generation, load, and terrain.",
            data: "Obstacle type, driving speed, experience, current damage, and supporting components."
          }
        ]
      },
      {
        type: "systems",
        id: "upgrade-systems",
        title: "Plan the vehicle as connected systems",
        intro:
          "An upgrade can change what another system needs. Use these relationships to avoid buying the same solution twice.",
        items: [
          ["Tires & Wheels", "Traction, road behavior, load rating, clearance, and spare-tire planning."],
          ["Recovery", "Rated attachment points, recovery equipment, training, and a situation-specific plan."],
          ["Protection", "Terrain exposure, coverage, mounting, service access, and added weight."],
          ["Suspension", "Condition, load, damping, geometry, alignment, travel, and ride-height goals."],
          ["Bumpers & Winches", "Mounting, electrical demand, recovery use, front load, and legal requirements."],
          ["Roof & Cargo", "Payload, center of mass, secure mounting, and the effect of constant load."],
          ["Lighting", "Actual night use, mounting, wiring, road legality, and glare control."],
          ["Overland Equipment", "Trip need, reliability, storage, payload, and removal when not required."]
        ],
        contextualLink: {
          before: "For travel-focused weight and cargo dependencies, use the ",
          label: "Toyota 4Runner overland build guide",
          href: "/vehicles/toyota-4runner/overland-build",
          after: "."
        }
      },
      {
        type: "sequence",
        id: "planning-order",
        title: "A practical planning sequence for many mixed-use builds",
        intro:
          "This is a decision sequence, not a universal shopping list. Move a step earlier when condition, safety, or the intended use makes it urgent.",
        items: [
          ["Define use case", "Describe daily use, terrain, trip length, experience, and priorities."],
          ["Inspect baseline condition", "Resolve maintenance or damage that could distort an upgrade decision."],
          ["Confirm tire and recovery needs", "Review traction, tire condition, attachment points, and recovery method."],
          ["Plan protection", "Match vulnerable areas and protection weight to the terrain you actually drive."],
          ["Calculate added weight", "Include bumpers, winch, armor, passengers, roof cargo, and constant rear load."],
          ["Select suspension", "Match springs and damping to the confirmed load, desired control, and compromises."],
          ["Add secondary equipment", "Add lighting, storage, and convenience items after core dependencies are clear."]
        ]
      },
      {
        type: "checklist",
        id: "considerations",
        title: "Important 4Runner considerations",
        intro:
          "The 4Runner name spans multiple generations and configurations. A recommendation becomes useful only when these inputs are known.",
        items: [
          "Generation and model year",
          "Trim and drivetrain",
          "Whether KDSS is installed",
          "Existing lift or suspension changes",
          "Current and planned added weight",
          "Alignment condition and adjustment range",
          "Tire clearance through steering and suspension travel",
          "Daily use, terrain, speed, and recovery context"
        ],
        note:
          "A 5th Gen plan should not be transferred to a 6th Gen, Prado, or Lexus GX as though the vehicles were technically identical."
      },
      {
        type: "featured",
        id: "featured-guides",
        title: "Featured Toyota 4Runner guides",
        published: [
          {
            eyebrow: "Published guide",
            title: "Toyota 4Runner Suspension Guide",
            text: "Choose suspension by use, condition, load, damping needs, geometry, and KDSS status.",
            href: "/vehicles/toyota-4runner/suspension"
          },
          {
            eyebrow: "Published guide",
            title: "What to Upgrade First on a 4Runner",
            text: "Prioritize baseline condition, tires, recovery, protection, and later suspension planning.",
            href: "/vehicles/toyota-4runner/first-upgrades"
          },
          {
            eyebrow: "Published guide",
            title: "Toyota 4Runner KDSS Guide",
            text: "Confirm KDSS and plan compatible suspension, lift, load, and installation checks.",
            href: "/vehicles/toyota-4runner/kdss"
          },
          {
            eyebrow: "Published guide",
            title: "Toyota 4Runner Lift Kit Guide",
            text: "Choose a lift objective using load, geometry, clearance, and daily-use trade-offs.",
            href: "/vehicles/toyota-4runner/lift-kit"
          },
          {
            eyebrow: "Published guide",
            title: "Toyota 4Runner Tire Size Guide",
            text: "Evaluate placard data, real tire dimensions, wheels, clearance, and load.",
            href: "/vehicles/toyota-4runner/tire-size"
          },
          {
            eyebrow: "Published guide",
            title: "Toyota 4Runner Overland Build Guide",
            text: "Plan travel around operating load, reliability, recovery, cargo, and comfort.",
            href: "/vehicles/toyota-4runner/overland-build"
          }
        ]
      },
      {
        type: "faq",
        id: "questions",
        title: "Common planning questions",
        items: [
          {
            question: "Is suspension always the first 4Runner upgrade?",
            answer:
              "No. Stock suspension may be appropriate when it is in good condition and the current load and terrain do not require a change. Tires, recovery preparation, maintenance, or protection may be earlier priorities."
          },
          {
            question: "Does a lift guarantee that larger tires will fit?",
            answer:
              "No. Clearance depends on the exact tire and wheel, alignment, body and suspension clearances, steering movement, suspension travel, trim, and existing modifications. Verify the complete combination."
          },
          {
            question: "Why does added weight matter?",
            answer:
              "Bumpers, a winch, armor, roof equipment, and constant cargo change the load the springs and dampers must manage. Plan that load before choosing suspension."
          },
          {
            question: "Does every 5th Gen 4Runner have KDSS?",
            answer:
              "No. Availability depends on configuration. Confirm the equipment on the exact vehicle and use manufacturer fitment data for any suspension kit."
          }
        ]
      }
    ],
    related: [
      {
        title: "Toyota 4Runner Suspension Guide",
        href: "/vehicles/toyota-4runner/suspension",
        text: "A use-case and load-based suspension decision framework."
      },
      {
        title: "First Upgrades for a 4Runner",
        href: "/vehicles/toyota-4runner/first-upgrades",
        text: "A practical order for early modification decisions."
      },
      {
        title: "Toyota 4Runner Tire Size Guide",
        href: "/vehicles/toyota-4runner/tire-size",
        text: "Plan wheels, real tire dimensions, load, and clearance."
      },
      {
        title: "Toyota 4Runner Overland Build Guide",
        href: "/vehicles/toyota-4runner/overland-build",
        text: "Turn payload, recovery, and cargo into a travel plan."
      }
    ],
    safety: commonSafety,
    sources: [sources.generations, sources.kdss, sources.manual]
  },
  {
    key: "toyota-4runner-suspension",
    kind: "article",
    route: "/vehicles/toyota-4runner/suspension",
    title: "Toyota 4Runner Suspension Guide: How to Choose a Setup | RigAI",
    description:
      "Learn how to choose Toyota 4Runner suspension by use case, condition, added load, damping needs, geometry, KDSS status, and fitment checks.",
    socialTitle: "Toyota 4Runner Suspension Guide | RigAI",
    socialDescription:
      "A practical 5th Gen 4Runner suspension guide covering stock vs upgraded setups, load, damping, geometry, KDSS, and purchase checks.",
    eyebrow: "5th Gen suspension planning",
    h1: "Toyota 4Runner Suspension Guide",
    dek:
      "Choose suspension by the job it must do. Ride height is only one input; condition, load, damping, geometry, alignment, tires, and KDSS status shape the complete decision.",
    scope: commonScope,
    dates: phase4ADates,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Vehicles", href: "/#vehicles" },
      { label: "Toyota 4Runner", href: "/vehicles/toyota-4runner" },
      { label: "Suspension" }
    ],
    takeaways: [
      "Keep stock suspension when it is healthy and already serves the use case.",
      "Select springs for real constant load, not a future guess.",
      "Select damping for control and terrain, not for lift height alone.",
      "Confirm KDSS, geometry, alignment, tire clearance, and manufacturer fitment."
    ],
    toc: [
      ["direct-answer", "Direct answer"],
      ["use-case", "Start with the use case"],
      ["stock-vs-upgraded", "Stock vs upgraded"],
      ["height-vs-quality", "Height vs quality"],
      ["suspension-types", "Suspension types"],
      ["added-weight", "Added weight"],
      ["kdss", "KDSS"],
      ["geometry", "Geometry"],
      ["decision-framework", "Decision framework"],
      ["verify", "What to verify"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "When does a suspension upgrade make sense?",
        paragraphs: [
          "A 4Runner suspension upgrade makes sense when the existing system is worn, the real load has changed, the vehicle needs more controlled damping for its terrain, or a carefully defined clearance and travel goal cannot be met by the current setup.",
          "Stock suspension can remain the better choice for a lightly loaded daily driver that is in good condition and already works for its roads and trails. A lift by itself does not prove that the suspension performs better or that a planned tire will clear."
        ],
        contextualLink: {
          before: "For the broader dependency map, start with the ",
          label: "complete Toyota 4Runner upgrade guide",
          href: "/vehicles/toyota-4runner",
          after: "."
        }
      },
      {
        type: "scenarios",
        id: "use-case",
        title: "Start with the use case",
        items: [
          {
            title: "Daily driver",
            priority: "Comfort, predictable control, noise, and maintaining useful road behavior.",
            wait: "High-load springs or heat-management hardware without a matching need.",
            data: "Normal passenger/cargo load, road quality, current wear, and tire plans."
          },
          {
            title: "Daily + weekend trails",
            priority: "Balanced road comfort, controlled repeated movement, and appropriate clearance.",
            wait: "Selecting by advertised height before checking load and geometry.",
            data: "Trail surface, frequency, speed, obstacles, tire size, and current alignment."
          },
          {
            title: "Overland load",
            priority: "Constant-load support, damping control, reliability, and loaded handling.",
            wait: "Spring selection before the front and rear weight inventory is stable.",
            data: "Bumper, winch, armor, drawers, water, fuel, roof load, passengers, and trip cargo."
          },
          {
            title: "More demanding off-road use",
            priority: "Control, heat management, usable travel, protection, and serviceability.",
            wait: "Copying a competition-style setup onto a mixed-use vehicle.",
            data: "Terrain, speed, articulation needs, expected impacts, maintenance, and supporting parts."
          }
        ]
      },
      {
        type: "comparison",
        id: "stock-vs-upgraded",
        title: "Stock vs upgraded suspension",
        caption: "Reasons to retain or reconsider the current suspension",
        headers: ["Decision", "When it may fit", "What to inspect", "Main caution"],
        rows: [
          ["Keep stock", "Healthy system, modest load, mostly road use, and suitable trail behavior", "Leaks, bushings, ride height, tire wear, alignment, and control", "Age or wear can make a stock-vs-aftermarket comparison misleading"],
          ["Refresh near stock", "Worn components but no major load or clearance change", "Complete component condition and matched replacement parts", "Replacing only one weak component may leave another problem"],
          ["Upgrade for load", "Constant bumper, winch, armor, cargo, or travel load", "Measured front/rear load and how often it is carried", "Heavy-load springs can be uncomfortable when the vehicle is usually empty"],
          ["Upgrade for terrain/control", "Repeated rough-road use exposes a control or heat-management need", "Driving speed, surface, travel, damping, and service requirements", "More aggressive hardware can add cost and maintenance without helping daily use"]
        ]
      },
      {
        type: "prose",
        id: "height-vs-quality",
        title: "Lift height is not suspension quality",
        paragraphs: [
          "Ride height describes where the vehicle sits; suspension performance describes how springs, dampers, geometry, tires, and supporting components manage movement and load. Two setups at a similar height can behave very differently.",
          "More height can introduce compromises in alignment, component angles, usable travel, steering feel, and access to factory adjustment. Evaluate the complete operating range instead of treating height as the result."
        ]
      },
      {
        type: "systems",
        id: "suspension-types",
        title: "High-level suspension types",
        intro:
          "Architecture alone does not make one damper universally better. Vehicle tuning, heat, load, travel, serviceability, and price all matter.",
        items: [
          ["Twin-tube", "Uses an inner working tube and an outer compensation chamber. Often appropriate for conventional road-focused use."],
          ["Monotube", "Separates the gas and oil with a floating piston and can support consistent damping under demanding use."],
          ["Remote reservoir", "Adds fluid and gas capacity outside the main body; useful only when the use case benefits from the added heat capacity and complexity."],
          ["Adjustable systems", "Allow some tuning inputs, but adjustments still need a sound baseline and documented procedure."],
          ["Load-matched springs", "Should be selected around real front and rear constant load, ride goals, and the matching damper."],
          ["Complete matched systems", "Can reduce guesswork when springs, dampers, travel, and fitment are engineered for the same configuration."]
        ]
      },
      {
        type: "dependency",
        id: "added-weight",
        title: "Added weight changes the suspension requirement",
        steps: [
          "Bumper / winch / cargo / armor",
          "Added vehicle weight",
          "Spring requirement",
          "Damping requirement",
          "Ride height and handling"
        ],
        text:
          "Separate front and rear constant load from occasional cargo. A spring intended for permanent load may feel unnecessarily firm when that load is absent, while a light spring may not hold the intended loaded ride height."
      },
      {
        type: "prose",
        id: "kdss",
        title: "Treat KDSS as a separate fitment input",
        paragraphs: [
          "Toyota describes KDSS as a hydraulic system that changes stabilizer-bar behavior between road and off-road conditions. It was not installed on every 5th Gen configuration.",
          "Confirm whether the exact vehicle has KDSS before selecting a kit. Use the suspension manufacturer's application notes and installation instructions; do not assume a non-KDSS and KDSS-equipped vehicle accept the same parts or procedure."
        ]
      },
      {
        type: "checklist",
        id: "geometry",
        title: "Geometry and supporting components",
        intro:
          "A suspension plan should review these systems through the full steering and suspension range. The required solution depends on the actual height, parts, alignment result, and vehicle.",
        items: [
          "Alignment range and final measured alignment",
          "Upper and lower control-arm clearance and joint angles",
          "Front CV angles and boot condition",
          "Rear axle and panhard-bar relationship",
          "Bump-stop engagement and usable travel",
          "Brake-line and ABS-wire routing",
          "Sway-bar behavior and KDSS-specific instructions",
          "Tire clearance at steering lock and suspension compression"
        ]
      },
      {
        type: "comparison",
        id: "decision-framework",
        title: "Suspension decision framework",
        caption: "Use-case inputs to discuss with a manufacturer or installer",
        headers: ["Use case", "Primary goal", "Spring/load", "Damping priority", "Main compromise", "Verify"],
        rows: [
          ["Mostly daily driving", "Restore control and comfort", "Near-normal constant load", "Predictable road response", "Aggressive tuning may reduce comfort", "Condition, trim, KDSS, tires, alignment"],
          ["Daily + weekend trails", "Balanced road and trail control", "Light or moderate confirmed load", "Repeated rough-road control", "Cost and firmness can rise", "Terrain, travel, clearances, loaded use"],
          ["Overland travel", "Support a stable constant load", "Front and rear load inventory", "Loaded control and heat management", "Unloaded ride may change", "Payload, roof load, spring range, service"],
          ["Demanding off-road use", "Control and usable travel", "Exact operating load", "Terrain- and speed-specific", "Maintenance, cost, road compromise", "Component limits, geometry, installation"]
        ]
      },
      {
        type: "checklist",
        id: "verify",
        title: "What to verify before purchase",
        items: [
          "Model year and 5th Gen confirmation",
          "Trim and drivetrain",
          "KDSS status",
          "Current lift and suspension parts",
          "Existing front and rear accessories",
          "Front constant weight",
          "Rear constant load and occasional cargo",
          "Current and planned tires and wheels",
          "Installer requirements and alignment capability",
          "Manufacturer application, exclusions, and instructions"
        ]
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common suspension-planning mistakes",
        items: [
          ["Buying for height alone", "Define control, load, travel, and terrain goals before comparing height."],
          ["Choosing springs too early", "Finalize constant weight before selecting a spring range."],
          ["Ignoring alignment", "Plan for a measured post-install alignment and inspect the available adjustment."],
          ["Assuming tire clearance", "A lift does not replace full steering and compression clearance checks."],
          ["Using heavy-duty springs unloaded", "Match spring load range to how the vehicle is normally driven."],
          ["Copying another 4Runner", "Match generation, trim, KDSS, load, tires, terrain, and compromises instead."]
        ],
        contextualLink: {
          before: "See how suspension fits into the ",
          label: "first upgrades for a 4Runner",
          href: "/vehicles/toyota-4runner/first-upgrades",
          after: " instead of treating it as an isolated purchase."
        }
      }
    ],
    related: [
      {
        title: "Toyota 4Runner Upgrade Guide",
        href: "/vehicles/toyota-4runner",
        text: "Connect suspension to tires, recovery, protection, weight, and cargo."
      },
      {
        title: "First Upgrades for a 4Runner",
        href: "/vehicles/toyota-4runner/first-upgrades",
        text: "Decide when suspension should move earlier or wait."
      },
      {
        title: "Toyota 4Runner Lift Kit Guide",
        href: "/vehicles/toyota-4runner/lift-kit",
        text: "Separate ride-height goals from geometry and tire clearance."
      },
      {
        title: "Toyota 4Runner KDSS Guide",
        href: "/vehicles/toyota-4runner/kdss",
        text: "Confirm system-specific fitment and installation planning."
      }
    ],
    safety: commonSafety,
    sources: [sources.generations, sources.kdss, sources.manual, sources.dampers, sources.springLoad]
  },
  {
    key: "toyota-4runner-first-upgrades",
    kind: "article",
    route: "/vehicles/toyota-4runner/first-upgrades",
    title: "Best First Upgrades for a Toyota 4Runner | RigAI",
    description:
      "Decide what to upgrade first on a Toyota 4Runner using condition, tires, recovery readiness, terrain, experience, budget, and planned load.",
    socialTitle: "What to Upgrade First on a Toyota 4Runner | RigAI",
    socialDescription:
      "A scenario-based framework for early 5th Gen 4Runner upgrades without a universal shopping list.",
    eyebrow: "5th Gen beginner planning",
    h1: "What Should You Upgrade First on a Toyota 4Runner?",
    dek:
      "The right first upgrade depends on the vehicle in front of you. Start with condition, traction, recovery readiness, terrain, experience, budget, and the weight you plan to add.",
    scope: commonScope,
    dates: phase4ADates,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Vehicles", href: "/#vehicles" },
      { label: "Toyota 4Runner", href: "/vehicles/toyota-4runner" },
      { label: "First Upgrades" }
    ],
    takeaways: [
      "Baseline condition comes before discretionary modifications.",
      "Appropriate tires and recovery readiness are common early priorities, not universal prescriptions.",
      "Protection moves earlier when terrain exposes vulnerable areas.",
      "Choose suspension after intended load and the rest of the plan are clearer."
    ],
    toc: [
      ["direct-answer", "Direct answer"],
      ["before-buying", "Before buying"],
      ["priority-framework", "Priority framework"],
      ["scenarios", "Scenario priorities"],
      ["not-first", "What not to buy first"],
      ["budget", "Budget levels"],
      ["example-order", "Example order"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "What should come first?",
        paragraphs: [
          "For many stock, mixed-use 5th Gen 4Runners, the early priorities are baseline maintenance, tires suited to the actual roads and trails, safe recovery attachment points, and essential recovery equipment. That is a framework, not a rule for every vehicle.",
          "A vehicle with worn steering or brakes needs a different first step. A vehicle on suitable tires may need recovery preparation or protection instead. Suspension is usually easier to select after the intended bumper, winch, armor, cargo, and tire plan is clearer."
        ],
        contextualLink: {
          before: "Use the ",
          label: "complete 4Runner upgrade guide",
          href: "/vehicles/toyota-4runner",
          after: " to map dependencies across the full vehicle."
        }
      },
      {
        type: "checklist",
        id: "before-buying",
        title: "Before buying modifications",
        intro:
          "Use an owner manual and a qualified inspection when condition is uncertain. This is a planning checklist, not a service procedure.",
        items: [
          "Current maintenance status and warning lights",
          "Tire age, condition, pressure, and suitability",
          "Brake condition and fluid leaks",
          "Steering play, suspension wear, and unusual noises",
          "Engine, transmission, axle, and shock leaks",
          "Battery health and secure electrical connections",
          "Rated recovery attachment points and access",
          "Local road, lighting, tire, and modification requirements"
        ]
      },
      {
        type: "sequence",
        id: "priority-framework",
        title: "A practical priority framework",
        intro:
          "Move a category higher when the vehicle's condition or use makes it urgent. Move it lower when the current equipment already meets the need.",
        items: [
          ["Baseline condition", "Moves first when maintenance, wear, damage, or warning signs could affect safety or diagnosis."],
          ["Tires", "Move earlier when condition, season, terrain, or traction needs are not met. Verify full-size spare and complete fitment."],
          ["Recovery readiness", "Moves earlier when traveling away from help. Define rated attachment points, equipment, training, and companions."],
          ["Underbody protection", "Moves earlier when terrain exposes vulnerable areas. Match coverage and weight to the route."],
          ["Suspension planning", "Moves earlier for wear, confirmed constant load, or a defined control need. It can wait when stock works well."],
          ["Additional equipment", "Lighting, roof systems, storage, and convenience items follow the core need and weight plan."]
        ]
      },
      {
        type: "comparison",
        id: "scenarios",
        title: "Scenario-based early priorities",
        caption: "Examples of how the first decision can change",
        headers: ["Scenario", "Likely early priorities", "What can often wait", "Key verification"],
        rows: [
          ["Mostly street", "Condition, road-suitable tires, emergency basics", "Armor, winch, high-load suspension", "Weather, tire condition, normal load, local rules"],
          ["Street + easy trails", "Condition, tires, recovery attachment, basic recovery kit", "Large lift, heavy bumper, extensive roof load", "Trail surface, spare, clearance, recovery method"],
          ["Weekend trails", "Tires, recovery, driver practice, targeted protection", "Secondary lighting and cargo accessories", "Obstacle exposure, group recovery plan, payload"],
          ["Overland travel", "Reliability, load inventory, tires, recovery, storage discipline", "Suspension until constant load is defined", "Payload, roof load, trip distance, loaded handling"],
          ["More technical terrain", "Inspection, tires, recovery plan, protection, controlled suspension", "Appearance-led additions", "Experience, terrain, supporting parts, legal use"]
        ]
      },
      {
        type: "mistakes",
        id: "not-first",
        title: "What often should not be the first purchase",
        intro:
          "These items can be useful, but buying them before their dependencies are defined can create extra cost or new compromises.",
        items: [
          ["Lift for appearance only", "Define clearance, control, load, geometry, and tire goals first."],
          ["Heavy bumper without weight planning", "Include front load in spring and damping decisions."],
          ["Winch without a recovery plan", "Confirm mounting, electrical demand, rated points, training, and intended use."],
          ["Oversized tires without a complete check", "Review wheel specification, steering and suspension clearance, spare, gearing behavior, and manufacturer guidance."],
          ["Roof load without payload planning", "Account for vehicle limits, secure mounting, handling, and the higher center of mass."]
        ],
        contextualLink: {
          before: "When suspension moves onto the shortlist, use the ",
          label: "Toyota 4Runner suspension guide",
          href: "/vehicles/toyota-4runner/suspension",
          after: " to compare use, load, damping, and geometry."
        }
      },
      {
        type: "budget",
        id: "budget",
        title: "Plan by readiness level, not a fixed price",
        items: [
          {
            title: "Essential readiness",
            text:
              "Protect the budget for maintenance, tire condition, a usable spare, required safety equipment, and a basic recovery plan."
          },
          {
            title: "Balanced starter build",
            text:
              "Add terrain-appropriate tires, rated recovery capability, and targeted protection where the real routes justify it."
          },
          {
            title: "Expanded trail preparation",
            text:
              "After load and use are stable, evaluate suspension, additional protection, winch, storage, and secondary equipment as one plan."
          }
        ]
      },
      {
        type: "example",
        id: "example-order",
        title: "Example only: mixed-use 5th Gen plan",
        intro:
          "This example assumes a mechanically sound, mostly stock vehicle used for daily driving and moderate weekend trails. It is not a universal recommendation.",
        items: [
          "Confirm maintenance and current tire condition",
          "Define terrain, weather, passengers, cargo, and recovery context",
          "Select suitable tires and confirm the spare and clearances",
          "Confirm rated recovery attachment points and essential equipment",
          "Add protection only for areas exposed by the intended trails",
          "Finalize bumper, winch, cargo, and constant-load plans",
          "Choose suspension only if condition, load, control, or clearance goals justify it"
        ]
      }
    ],
    related: [
      {
        title: "Toyota 4Runner Upgrade Guide",
        href: "/vehicles/toyota-4runner",
        text: "See the complete vehicle planning sequence and system dependencies."
      },
      {
        title: "Toyota 4Runner Suspension Guide",
        href: "/vehicles/toyota-4runner/suspension",
        text: "Choose suspension after load, use, and supporting components are known."
      },
      {
        title: "Toyota 4Runner Tire Size Guide",
        href: "/vehicles/toyota-4runner/tire-size",
        text: "Check tire, wheel, load, and dynamic-clearance variables."
      },
      {
        title: "Toyota 4Runner Overland Build Guide",
        href: "/vehicles/toyota-4runner/overland-build",
        text: "Build a travel plan around reliability and operating load."
      }
    ],
    safety: commonSafety,
    sources: [sources.generations, sources.manual, sources.brochure, sources.kdss, sources.springLoad]
  },
  ...phase4BPages
];

function collectWords(value, key = "") {
  if (typeof value === "string") {
    if (["href", "id", "type"].includes(key)) return [];
    return value.match(/[A-Za-z0-9]+(?:['-][A-Za-z0-9]+)*/g) || [];
  }

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectWords(item));
  }

  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([childKey, childValue]) => collectWords(childValue, childKey));
  }

  return [];
}

export function readingTimeMinutes(page, wordsPerMinute = 225) {
  const words = collectWords({
    h1: page.h1,
    dek: page.dek,
    takeaways: page.takeaways,
    sections: page.sections,
    safety: page.safety
  });

  return Math.max(1, Math.ceil(words.length / wordsPerMinute));
}

export function getToyota4RunnerPage(key) {
  return toyota4RunnerPages.find((page) => page.key === key);
}
