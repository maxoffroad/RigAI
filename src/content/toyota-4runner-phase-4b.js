export const phase4BDates = {
  published: "2026-07-23",
  modified: "2026-07-23",
  reviewedLabel: "July 23, 2026"
};

const scope = {
  title: "Vehicle scope",
  text:
    "This guide focuses primarily on the Toyota 4Runner 5th Gen (model years 2010-2024). Equipment, specifications, and fitment can differ by model year, trim, market, drivetrain, and prior modifications."
};

const safety = {
  title: "Safety and fitment",
  paragraphs: [
    "This guide is informational and does not replace inspection, manufacturer instructions, or advice from a qualified mechanic.",
    "Always verify model year, trim, drivetrain, KDSS status, installed equipment, load, local requirements, and manufacturer fitment data before purchasing or installing parts."
  ]
};

const sources = {
  generations: {
    label: "Toyota 4Runner Icons: Fifth and Sixth Generations",
    href: "https://pressroom.toyota.com/toyota-4runner-icons-fifth-2010-2024-sixth-2025-generations/",
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
  nhtsaTires: {
    label: "Tire safety ratings and awareness",
    href: "https://www.nhtsa.gov/vehicle-safety/tires",
    type: "NHTSA safety guidance"
  },
  michelinSizing: {
    label: "Choosing the right tire size",
    href: "https://www.michelinman.com/auto/auto-tips-and-advice/tire-buying-guide/find-your-tire-size",
    type: "Michelin technical guidance"
  },
  springLoad: {
    label: "Choosing suspension for vehicle load",
    href: "https://arbusa.com/news/how-to-choose-the-best-suspension-kit-for-your-off-road-vehicle",
    type: "ARB technical resource"
  }
};

const hub = {
  title: "Toyota 4Runner Upgrade Guide",
  href: "/vehicles/toyota-4runner",
  text: "Connect this decision to the complete 4Runner vehicle plan."
};

export const phase4BPages = [
  {
    key: "toyota-4runner-kdss",
    kind: "article",
    route: "/vehicles/toyota-4runner/kdss",
    title: "Toyota 4Runner KDSS Guide: Suspension and Lift Considerations | RigAI",
    description:
      "Understand Toyota 4Runner KDSS, how to identify it, and what to verify when planning suspension, lift, load, alignment, and installation.",
    socialTitle: "Toyota 4Runner KDSS Guide | RigAI",
    socialDescription:
      "A practical 5th Gen 4Runner KDSS guide for suspension and lift planning, fitment checks, load, alignment, and installer questions.",
    eyebrow: "5th Gen KDSS planning",
    h1: "Toyota 4Runner KDSS Guide",
    dek:
      "KDSS changes how the 4Runner's stabilizer bars respond on road and off road. Confirm whether the exact vehicle has it before choosing suspension or lift components.",
    scope,
    dates: phase4BDates,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Vehicles", href: "/#vehicles" },
      { label: "Toyota 4Runner", href: "/vehicles/toyota-4runner" },
      { label: "KDSS" }
    ],
    takeaways: [
      "Confirm KDSS from vehicle-specific records or inspection, not from trim name alone.",
      "Use parts and procedures that explicitly cover the exact KDSS-equipped configuration.",
      "Treat side-to-side height differences as a diagnostic question, not a reason to add random spacers.",
      "Plan springs, damping, load, alignment, terrain, and daily comfort together."
    ],
    toc: [
      ["direct-answer", "Direct answer"],
      ["what-kdss-does", "What KDSS does"],
      ["identify-kdss", "How to identify KDSS"],
      ["kdss-lift-kits", "KDSS and lift kits"],
      ["suspension-selection", "Suspension selection"],
      ["decision-framework", "Decision framework"],
      ["verify", "What to verify"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Why KDSS matters before you buy suspension parts",
        paragraphs: [
          "Toyota describes the Kinetic Dynamic Suspension System as a system that adjusts stabilizer-bar resistance. It can allow the bars to behave differently when the vehicle is on a road and when wheel movement is needed off road.",
          "That makes KDSS a configuration input for a lift or suspension plan. A part listed for a conventional 5th Gen 4Runner should not be assumed to cover a KDSS-equipped vehicle unless the manufacturer application and instructions say so."
        ],
        contextualLink: {
          before: "See the wider system decision in the ",
          label: "Toyota 4Runner suspension guide",
          href: "/vehicles/toyota-4runner/suspension",
          after: "."
        }
      },
      {
        type: "prose",
        id: "what-kdss-does",
        title: "What KDSS does in plain language",
        paragraphs: [
          "Stabilizer bars help resist body roll. Toyota's description of KDSS says the hydraulic system can reduce stabilizer-bar resistance off road while retaining conventional stabilizer-bar behavior on road. The practical point is that the system participates in how the vehicle controls body movement.",
          "KDSS does not make modification automatically impossible. It means the part application, installation process, final ride height, and post-install checks need to account for the system that is actually on the vehicle."
        ]
      },
      {
        type: "checklist",
        id: "identify-kdss",
        title: "How to identify whether a 4Runner has KDSS",
        intro:
          "Use more than a trim badge or an online comment. Availability can vary by year, market, and specification.",
        items: [
          "Check the original build sheet or option list for the exact vehicle",
          "Use a VIN-based specification source from Toyota or an authorized dealer",
          "Review owner documentation for the exact model year and market",
          "Ask a qualified technician to identify the KDSS hydraulic components and stabilizer-bar hardware",
          "Record the result in the vehicle plan before comparing parts"
        ],
        note:
          "A trim that offered KDSS in one year or market does not prove that every vehicle with that trim has it."
      },
      {
        type: "prose",
        id: "kdss-lift-kits",
        title: "KDSS and lift-kit planning",
        paragraphs: [
          "The kit manufacturer should explicitly list the compatible generation, model year range, drivetrain, and KDSS status. Follow the manufacturer procedure because installation and settling checks may differ from a non-KDSS vehicle.",
          "A side-to-side ride-height difference can have several inputs: surface level, fuel and cargo distribution, spring seating, prior spacers, component condition, or system state. Measure on a level surface and have the complete installation inspected before choosing a correction."
        ],
        contextualLink: {
          before: "Use the ",
          label: "4Runner lift-kit decision guide",
          href: "/vehicles/toyota-4runner/lift-kit",
          after: " to define the height, load, and geometry goal before comparing kits."
        }
      },
      {
        type: "systems",
        id: "suspension-selection",
        title: "KDSS suspension selection factors",
        intro:
          "A KDSS label is not the whole specification. These inputs still determine whether a setup suits the vehicle.",
        items: [
          ["Shocks and springs", "Confirm the exact application and select springs around real front and rear constant load."],
          ["Stabilizer-bar behavior", "Use a kit and installer familiar with the KDSS-equipped configuration."],
          ["Alignment", "Measure alignment after installation and confirm adjustment remains suitable."],
          ["Terrain", "Match control and travel goals to actual roads, trails, speed, and frequency."],
          ["Daily comfort", "Account for normal passenger load, commute quality, noise, and access height."],
          ["Installation experience", "Choose instructions and an installer that cover the complete KDSS system, not only the damper."]
        ]
      },
      {
        type: "comparison",
        id: "decision-framework",
        title: "KDSS decision framework",
        caption: "Questions to resolve before selecting suspension or lift components",
        headers: ["Question", "Why it matters", "How to verify", "Decision affected"],
        rows: [
          ["Does this vehicle have KDSS?", "The system changes the relevant fitment and procedure", "Build sheet, VIN specification, or qualified inspection", "Eligible parts and installer"],
          ["What constant weight is installed?", "Load changes spring compression and final ride height", "Inventory front and rear accessories and cargo", "Spring range and damping"],
          ["What is the measured baseline?", "Existing lean or wear can distort the result", "Level-ground measurements and inspection", "Repair, diagnosis, or modification"],
          ["What does the manufacturer approve?", "Applications and procedures are product-specific", "Current fitment guide and installation manual", "Kit choice and installation"],
          ["How is the vehicle used?", "Road comfort and off-road control require different compromises", "Driving profile and terrain record", "Damping, height, and maintenance"]
        ]
      },
      {
        type: "checklist",
        id: "verify",
        title: "What to verify before purchase",
        items: [
          "Model year, market, trim, and drivetrain",
          "Confirmed KDSS presence",
          "Current ride height measured on level ground",
          "Existing spacers or suspension changes",
          "Bumper, winch, armor, and front constant weight",
          "Rear constant load and occasional cargo",
          "Manufacturer statement for KDSS compatibility",
          "Installer experience with the specified system",
          "Alignment and post-install inspection requirements"
        ]
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common KDSS planning mistakes",
        items: [
          ["Assuming from the trim", "Confirm the exact vehicle because year, market, options, and prior changes matter."],
          ["Buying before checking the application", "Use current manufacturer fitment data that names the KDSS configuration."],
          ["Correcting lean with a random spacer", "Measure, inspect, and diagnose the system and load distribution first."],
          ["Copying a non-KDSS setup", "The same advertised height does not make two configurations equivalent."],
          ["Ignoring added weight", "Bumpers, winches, armor, cargo, and roof equipment change the spring requirement."],
          ["Skipping final measurements", "Record ride height and alignment after installation and settling."]
        ],
        contextualLink: {
          before: "If this is an early-stage vehicle, check ",
          label: "what to upgrade first on a 4Runner",
          href: "/vehicles/toyota-4runner/first-upgrades",
          after: " before making suspension the first purchase."
        }
      }
    ],
    related: [
      hub,
      {
        title: "Toyota 4Runner Suspension Guide",
        href: "/vehicles/toyota-4runner/suspension",
        text: "Choose springs and damping around use, condition, load, and geometry."
      },
      {
        title: "Toyota 4Runner Lift Kit Guide",
        href: "/vehicles/toyota-4runner/lift-kit",
        text: "Define a lift objective and verify supporting systems."
      },
      {
        title: "First Upgrades for a 4Runner",
        href: "/vehicles/toyota-4runner/first-upgrades",
        text: "Decide whether suspension belongs early in the plan."
      }
    ],
    safety,
    sources: [sources.generations, sources.kdss, sources.manual]
  },
  {
    key: "toyota-4runner-lift-kit",
    kind: "article",
    route: "/vehicles/toyota-4runner/lift-kit",
    title: "Toyota 4Runner Lift Kit Guide: Height, Geometry and Trade-Offs | RigAI",
    description:
      "Choose a Toyota 4Runner lift objective using terrain, load, geometry, alignment, KDSS, tire clearance, and daily-driving trade-offs.",
    socialTitle: "Toyota 4Runner Lift Kit Guide | RigAI",
    socialDescription:
      "Plan a 5th Gen 4Runner lift around real clearance needs, final load, geometry, tire fitment, and daily use.",
    eyebrow: "5th Gen lift planning",
    h1: "Toyota 4Runner Lift Kit Guide",
    dek:
      "Choose lift around the job, final load, and geometry. Advertised height alone does not describe control, travel, alignment, or tire clearance.",
    scope,
    dates: phase4BDates,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Vehicles", href: "/#vehicles" },
      { label: "Toyota 4Runner", href: "/vehicles/toyota-4runner" },
      { label: "Lift Kit" }
    ],
    takeaways: [
      "Define the clearance problem before selecting height.",
      "A leveling kit and a suspension lift solve different planning goals and carry different compromises.",
      "Final accessory and cargo load changes the resulting ride height.",
      "A suspension lift does not settle tire clearance by itself."
    ],
    toc: [
      ["direct-answer", "Direct answer"],
      ["leveling-vs-lift", "Leveling vs suspension lift"],
      ["how-much", "How much lift"],
      ["geometry", "Geometry and supporting parts"],
      ["added-weight", "Added weight"],
      ["tire-clearance", "Tire clearance"],
      ["daily-use", "Daily trade-offs"],
      ["decision-table", "Decision table"],
      ["mistakes", "Common mistakes"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Choose a lift by need, not by the largest number",
        paragraphs: [
          "Start with the use case, the clearance that is actually limiting the vehicle, its normal load, and the road behavior you want to keep. Ride height is one result of a suspension system, not a complete measure of quality.",
          "As height and component changes move away from the original configuration, alignment range, joint and driveline angles, travel, line routing, and stabilizer-bar behavior deserve more attention. The exact checks depend on the parts and vehicle."
        ],
        contextualLink: {
          before: "For spring and damper fundamentals, read the ",
          label: "4Runner suspension planning guide",
          href: "/vehicles/toyota-4runner/suspension",
          after: "."
        }
      },
      {
        type: "comparison",
        id: "leveling-vs-lift",
        title: "Leveling kit vs suspension lift",
        caption: "High-level planning differences; exact designs and effects vary by product",
        headers: ["Approach", "Typical purpose", "Potential compromise", "Verify"],
        rows: [
          ["Leveling approach", "Reduce some factory rake or change front stance", "May change available travel, preload, ride, and alignment", "Method used, resulting travel, load, alignment, and KDSS application"],
          ["Suspension lift", "Change ride height while replacing or retuning springs and dampers", "Cost, geometry, access height, maintenance, and road behavior", "Matched components, load range, travel, geometry, and instructions"],
          ["Near-stock refresh", "Restore control without pursuing a height goal", "May not change a specific clearance limitation", "Complete condition and matched replacement application"]
        ]
      },
      {
        type: "checklist",
        id: "how-much",
        title: "How much lift do you actually need?",
        intro:
          "There is no useful universal height for every 4Runner. Write down these inputs before comparing product specifications.",
        items: [
          "Terrain and the exact clearance limitation",
          "Required suspension travel and control",
          "Planned tire and wheel specifications",
          "Front and rear constant weight",
          "Desired loaded and unloaded rake",
          "Alignment range and current component condition",
          "KDSS status",
          "Daily comfort and steering priorities",
          "Passenger access and loading height",
          "Garage, rack, and total vehicle height"
        ],
        note:
          "Use any advertised lift figure as a product-specific estimate. Final height depends on the vehicle, load, spring, installation, and measurement method."
      },
      {
        type: "systems",
        id: "geometry",
        title: "Geometry and supporting systems",
        intro:
          "A manufacturer or qualified installer should evaluate these items for the exact kit and resulting height.",
        items: [
          ["Alignment range", "Confirm measured caster, camber, and toe can be set appropriately after installation."],
          ["Control arms", "Inspect joint travel, bushing condition, clearance, and whether the kit documents another requirement."],
          ["CV and driveline angles", "Check operating angles and signs of binding or vibration through the intended range."],
          ["Stabilizer bars and KDSS", "Confirm links, clearances, procedures, and system-specific application."],
          ["Rear lateral geometry", "Check axle position, clearances, and movement through travel."],
          ["Bump stops and travel", "Confirm compression and extension limits protect components and tires."],
          ["Brake and sensor lines", "Inspect routing and slack through steering and suspension travel."],
          ["Lighting and driver aids", "Follow vehicle and equipment instructions when ride height changes aiming or calibration."]
        ]
      },
      {
        type: "dependency",
        id: "added-weight",
        title: "Final weight changes the lift result",
        steps: [
          "Bumper, winch, armor, and cargo",
          "Front and rear constant load",
          "Spring compression",
          "Resulting ride height",
          "Handling and damping"
        ],
        text:
          "Choose the spring after the constant-load plan is credible. A spring intended for substantial permanent weight may ride poorly on a vehicle that normally runs empty."
      },
      {
        type: "prose",
        id: "tire-clearance",
        title: "Lift height and tire clearance are separate questions",
        paragraphs: [
          "Suspension lift changes the vehicle's static position, but a tire still moves through steering and suspension travel. Clearance also depends on wheel width and offset, actual tire dimensions, alignment and caster, liners, mud flaps, body mounts, load, and manufacturing variation.",
          "Verify the complete tire-and-wheel assembly at full steering and through controlled compression. Do not use a lift claim as a substitute for a tire manufacturer's specification and a vehicle-specific clearance check."
        ],
        contextualLink: {
          before: "Use the ",
          label: "Toyota 4Runner tire-size guide",
          href: "/vehicles/toyota-4runner/tire-size",
          after: " to evaluate those fitment inputs separately."
        }
      },
      {
        type: "systems",
        id: "daily-use",
        title: "Daily-driving trade-offs",
        items: [
          ["Comfort", "Spring rate, preload, damping, tire choice, load, and travel all shape ride quality."],
          ["Steering feel", "Alignment, tire geometry, height, and component condition can change steering response."],
          ["Braking and control", "Added mass, tire changes, and center-of-mass changes can affect how the vehicle responds."],
          ["Energy use", "Extra height, mass, rolling resistance, and driving conditions may increase fuel use."],
          ["Access", "More step-in and cargo height can be inconvenient for passengers and frequent loading."],
          ["Clearance and service", "Check garage height, rack height, inspection intervals, and access to service points."]
        ]
      },
      {
        type: "comparison",
        id: "decision-table",
        title: "Lift decision table",
        caption: "Match the objective to load, geometry, daily use, and verification",
        headers: ["Use case", "Lift objective", "Load consideration", "Geometry concern", "Daily compromise", "Verify"],
        rows: [
          ["Daily + mild trails", "Address a documented clearance or control need", "Mostly passengers and light cargo", "Alignment and usable travel", "Comfort and access", "Baseline condition and full application"],
          ["Weekend trails", "Improve controlled clearance for actual obstacles", "Protection and recovery equipment", "Travel, lines, joints, and KDSS", "Steering and maintenance", "Post-install inspection and alignment"],
          ["Travel load", "Support final constant load without excessive unloaded compromise", "Front/rear weight inventory", "Loaded travel and axle clearances", "Ride when empty", "Loaded measurements and spring range"],
          ["More demanding use", "Meet a defined travel and control requirement", "Armor, recovery, tools, and cargo", "Complete operating angles and serviceability", "Cost, noise, and upkeep", "Manufacturer instructions and specialist review"]
        ]
      },
      {
        type: "mistakes",
        id: "mistakes",
        title: "Common lift-planning mistakes",
        items: [
          ["Choosing the maximum advertised height", "Start from terrain, load, travel, and daily behavior instead."],
          ["Ignoring final weight", "Finalize constant accessories before selecting spring load range."],
          ["Stacking unrelated spacers", "Use a documented, compatible system and inspect available travel."],
          ["Skipping KDSS confirmation", "Verify the exact vehicle and kit application before purchase."],
          ["Treating lift as tire clearance", "Evaluate wheel and tire specifications through steering and compression."],
          ["Skipping alignment", "Measure and document alignment after installation."],
          ["Using high-load springs on an empty vehicle", "Match springs to how the 4Runner is normally operated."]
        ],
        contextualLink: {
          before: "Confirm the vehicle's system first with the ",
          label: "4Runner KDSS guide",
          href: "/vehicles/toyota-4runner/kdss",
          after: "."
        }
      }
    ],
    related: [
      hub,
      {
        title: "Toyota 4Runner Suspension Guide",
        href: "/vehicles/toyota-4runner/suspension",
        text: "Understand load, damping, condition, and suspension architecture."
      },
      {
        title: "Toyota 4Runner KDSS Guide",
        href: "/vehicles/toyota-4runner/kdss",
        text: "Confirm system-specific fitment and installation questions."
      },
      {
        title: "Toyota 4Runner Tire Size Guide",
        href: "/vehicles/toyota-4runner/tire-size",
        text: "Evaluate wheel, tire, and real-clearance variables."
      },
      {
        title: "First Upgrades for a 4Runner",
        href: "/vehicles/toyota-4runner/first-upgrades",
        text: "Decide when a lift belongs in the purchase order."
      }
    ],
    safety,
    sources: [sources.generations, sources.manual, sources.kdss, sources.springLoad]
  },
  {
    key: "toyota-4runner-tire-size",
    kind: "article",
    route: "/vehicles/toyota-4runner/tire-size",
    title: "Toyota 4Runner Tire Size Guide: Clearance, Fitment and Trade-Offs | RigAI",
    description:
      "Choose Toyota 4Runner tire size by placard data, wheel compatibility, load rating, measured dimensions, clearance, and driving trade-offs.",
    socialTitle: "Toyota 4Runner Tire Size Guide | RigAI",
    socialDescription:
      "A careful 5th Gen 4Runner tire-size framework covering the placard baseline, real dimensions, wheels, clearance, and larger-tire trade-offs.",
    eyebrow: "5th Gen tire planning",
    h1: "Toyota 4Runner Tire Size Guide",
    dek:
      "Start with the exact vehicle's placard and documentation. Then compare the tire model's real specifications, wheel compatibility, load capacity, clearance, and road behavior.",
    scope,
    dates: phase4BDates,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Vehicles", href: "/#vehicles" },
      { label: "Toyota 4Runner", href: "/vehicles/toyota-4runner" },
      { label: "Tire Size" }
    ],
    takeaways: [
      "Use the door placard and owner documentation as the vehicle-specific baseline.",
      "Nominal size is not the complete tire specification.",
      "Wheel width, offset, alignment, load, steering, and suspension travel all affect clearance.",
      "Check load index, speed rating, rim-width range, spare storage, and system effects."
    ],
    toc: [
      ["direct-answer", "Direct answer"],
      ["read-size", "Understanding tire size"],
      ["stock-baseline", "Stock-size baseline"],
      ["real-dimensions", "Real dimensions"],
      ["clearance", "Clearance factors"],
      ["trade-offs", "Larger-tire trade-offs"],
      ["tire-types", "Tire types"],
      ["wheels", "Wheel considerations"],
      ["fitment-framework", "Fitment framework"],
      ["verify", "What to verify"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Choose tire size from the complete operating requirement",
        paragraphs: [
          "A useful tire choice starts with real use, the vehicle manufacturer's baseline, wheel compatibility, load capacity, available clearance, ride and road performance, and space for a usable spare.",
          "Changing overall diameter or mass can also affect acceleration, braking response, steering, indicated road speed, and how vehicle systems interpret wheel movement. Evaluate a proposed change with a qualified tire professional and current manufacturer data."
        ],
        contextualLink: {
          before: "For purchase order and beginner priorities, see ",
          label: "what to upgrade first on a 4Runner",
          href: "/vehicles/toyota-4runner/first-upgrades",
          after: "."
        }
      },
      {
        type: "prose",
        id: "read-size",
        title: "Understanding a metric tire-size label",
        paragraphs: [
          "In a neutral example such as 265/70R17, the first number is nominal section width in millimeters, the second is sidewall height expressed as a percentage of that width, R describes radial construction, and the final number is wheel diameter in inches.",
          "The full sidewall also includes service information such as load index and speed rating. The example explains syntax only; it is not a recommendation for a particular 4Runner."
        ]
      },
      {
        type: "prose",
        id: "stock-baseline",
        title: "Use the exact vehicle's stock-size baseline",
        paragraphs: [
          "5th Gen 4Runner equipment varies by year, trim, market, and wheel package. Do not merge different factory specifications into one cluster-wide answer.",
          "Read the Tire and Loading Information label on the vehicle and the owner documentation for its model year. NHTSA identifies those sources as the place to find manufacturer tire size and cold-pressure information. If the vehicle has non-original wheels, record their specifications separately."
        ]
      },
      {
        type: "dependency",
        id: "real-dimensions",
        title: "Why nominal size is not the whole measurement",
        steps: [
          "Nominal sidewall label",
          "Exact tire model and construction",
          "Manufacturer measuring rim",
          "Published diameter and section width",
          "Clearance on the actual vehicle"
        ],
        text:
          "Tire makers publish model-specific dimensions and approved rim-width ranges. Tread design, construction, and the wheel used for measurement can make two tires with the same label occupy different space."
      },
      {
        type: "systems",
        id: "clearance",
        title: "Clearance factors to inspect",
        items: [
          ["Steering angle", "Check both directions and intermediate steering positions."],
          ["Suspension compression", "Static parking clearance does not represent movement over bumps or articulation."],
          ["Wheel width and offset", "These change where the tire sits relative to suspension and body surfaces."],
          ["Alignment and caster", "The measured wheel position can change front and rear clearance in the opening."],
          ["Liner, mud flap, and body mount", "Inspect actual contact zones without assuming another vehicle matches."],
          ["Vehicle load", "Passengers, cargo, armor, and accessories change ride height and available space."],
          ["Manufacturing and wear variation", "Vehicle alignment, tire dimensions, and prior repairs may differ."],
          ["Spare location", "Confirm the exact inflated tire and wheel can be carried securely."]
        ],
        contextualLink: {
          before: "A height change does not replace these checks; use the ",
          label: "4Runner lift-kit guide",
          href: "/vehicles/toyota-4runner/lift-kit",
          after: " for the separate geometry decision."
        }
      },
      {
        type: "systems",
        id: "trade-offs",
        title: "Larger-tire trade-offs",
        intro:
          "The amount of change depends on the exact tire, wheel, vehicle, load, and driving conditions.",
        items: [
          ["Mass and inertia", "A heavier assembly can require more effort to accelerate and slow."],
          ["Braking and steering", "Size, construction, tread, pressure, and weight can change response."],
          ["Gearing feel", "A diameter change alters effective gearing and may affect low-speed response."],
          ["Fuel use", "Rolling resistance, mass, aerodynamics, pressure, and driving pattern all contribute."],
          ["Indicated speed", "A diameter change may alter speed and distance calculations."],
          ["Ride quality", "Construction, load range, sidewall, wheel diameter, pressure, and damping interact."],
          ["Clearance and service", "More space may be needed at the body, suspension, and spare location."],
          ["Payload", "Heavier wheels and tires are part of the vehicle's operating load."]
        ]
      },
      {
        type: "comparison",
        id: "tire-types",
        title: "Choose tread category by real use",
        caption: "Broad tire categories; performance varies by exact model",
        headers: ["Category", "Common priority", "Potential compromise", "Verify"],
        rows: [
          ["Highway terrain", "Road comfort, noise, and normal-weather use", "Less emphasis on severe loose terrain", "Load, weather rating, road conditions, and exact tread"],
          ["All terrain", "Mixed road and trail use", "Noise, weight, wet behavior, and wear vary widely", "Exact tests, construction, load, and terrain"],
          ["Rugged terrain", "A manufacturer-defined middle ground with more aggressive tread", "Category naming and behavior are not standardized across brands", "Exact product description and independent test context"],
          ["Mud terrain", "Loose mud and more aggressive off-road traction priorities", "Road noise, mass, wet-road behavior, and wear can be larger compromises", "Actual route need, weather, load, and road use"]
        ]
      },
      {
        type: "prose",
        id: "wheels",
        title: "Wheel specifications are part of tire fitment",
        paragraphs: [
          "Confirm wheel diameter, width, offset, load rating, mounting specification, and brake clearance. The tire maker's approved rim-width range applies to the exact tire model and size.",
          "A wheel change can move the tire toward suspension components or outward toward liners and body surfaces. Evaluate the complete assembly rather than discussing tire size alone."
        ],
        contextualLink: {
          before: "Suspension condition and load remain part of the answer; review the ",
          label: "Toyota 4Runner suspension guide",
          href: "/vehicles/toyota-4runner/suspension",
          after: "."
        }
      },
      {
        type: "comparison",
        id: "fitment-framework",
        title: "Tire fitment framework",
        caption: "Evidence to collect before changing tire size",
        headers: ["Decision factor", "Why it matters", "Where to verify", "Common mistake"],
        rows: [
          ["Vehicle baseline", "Defines the manufacturer starting point", "Door placard and owner documentation", "Using another trim's specification"],
          ["Exact tire dimensions", "Nominal labels do not show every measured dimension", "Tire maker's current specification sheet", "Comparing only the sidewall size"],
          ["Wheel specification", "Controls mounting and assembly position", "Wheel maker data and physical markings", "Ignoring width or offset"],
          ["Load and speed capacity", "Must support the intended vehicle operation", "Placard, tire service description, and manufacturer data", "Using sidewall appearance as capacity evidence"],
          ["Dynamic clearance", "Tires steer and move with suspension travel", "Controlled professional inspection", "Checking only while parked"],
          ["System effects", "Diameter and mass can affect readings and response", "Vehicle documentation and qualified review", "Assuming the change is isolated"]
        ]
      },
      {
        type: "checklist",
        id: "verify",
        title: "What to verify before purchase",
        items: [
          "Door placard and owner documentation",
          "Exact wheel diameter, width, offset, load rating, and mounting specification",
          "Exact tire model specification and approved rim-width range",
          "Load index, speed rating, and intended inflation guidance",
          "Clearance through full steering",
          "Clearance under controlled compression and articulation",
          "Spare-tire fitment and secure storage",
          "Alignment and current suspension condition",
          "Local equipment and tire regulations"
        ]
      }
    ],
    related: [
      hub,
      {
        title: "First Upgrades for a 4Runner",
        href: "/vehicles/toyota-4runner/first-upgrades",
        text: "Place tires in a condition- and use-based upgrade order."
      },
      {
        title: "Toyota 4Runner Lift Kit Guide",
        href: "/vehicles/toyota-4runner/lift-kit",
        text: "Separate static height from wheel and tire clearance."
      },
      {
        title: "Toyota 4Runner Suspension Guide",
        href: "/vehicles/toyota-4runner/suspension",
        text: "Connect tires to load, geometry, alignment, and control."
      }
    ],
    safety,
    sources: [sources.generations, sources.manual, sources.nhtsaTires, sources.michelinSizing]
  },
  {
    key: "toyota-4runner-overland-build",
    kind: "article",
    route: "/vehicles/toyota-4runner/overland-build",
    title: "Toyota 4Runner Overland Build Guide: Plan Weight, Recovery and Comfort | RigAI",
    description:
      "Plan a Toyota 4Runner overland build around trip profile, payload, reliability, tires, recovery, protection, suspension, cargo, and comfort.",
    socialTitle: "Toyota 4Runner Overland Build Guide | RigAI",
    socialDescription:
      "A travel-focused 5th Gen 4Runner build framework based on operating load, recovery, reliability, cargo, suspension, and daily use.",
    eyebrow: "5th Gen travel planning",
    h1: "Toyota 4Runner Overland Build Guide",
    dek:
      "An overland build is an operating plan, not an accessory list. Start with the trip, people, cargo, vehicle capacity, recovery context, and reliability.",
    scope,
    dates: phase4BDates,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Vehicles", href: "/#vehicles" },
      { label: "Toyota 4Runner", href: "/vehicles/toyota-4runner" },
      { label: "Overland Build" }
    ],
    takeaways: [
      "Define route, duration, passengers, weather, resupply, and support before adding equipment.",
      "Use the exact vehicle's label and documentation to plan operating load.",
      "Choose recovery and protection for credible routes, not appearance.",
      "Match suspension to the stable constant-load plan."
    ],
    toc: [
      ["direct-answer", "Direct answer"],
      ["travel-profile", "Travel profile"],
      ["weight", "Weight before accessories"],
      ["planning-order", "Planning order"],
      ["recovery-protection", "Recovery and protection"],
      ["suspension-load", "Suspension and load"],
      ["roof-load", "Roof load"],
      ["electrical-comfort", "Electrical and comfort"],
      ["scenarios", "Build scenarios"],
      ["wait", "What can wait"]
    ],
    sections: [
      {
        type: "prose",
        id: "direct-answer",
        title: "Start with the trip, not the accessory",
        paragraphs: [
          "Document route conditions, trip length, weather, passengers, cargo, water, fuel, communication, resupply, and recovery support. Then inspect baseline reliability and calculate the operating load for the exact vehicle.",
          "A roof tent, heavy bumper, or drawer system may suit one travel profile and create unnecessary weight or daily inconvenience in another. Buy only after the use case and load budget show what the vehicle needs."
        ],
        contextualLink: {
          before: "For the broader purchase sequence, begin with ",
          label: "the first upgrades for a Toyota 4Runner",
          href: "/vehicles/toyota-4runner/first-upgrades",
          after: "."
        }
      },
      {
        type: "scenarios",
        id: "travel-profile",
        title: "Define the travel profile",
        items: [
          {
            title: "Weekend camping",
            priority: "Reliability, weather-ready shelter, food, water, simple storage, and route-appropriate tires.",
            wait: "Permanent heavy storage for equipment used only a few weekends.",
            data: "Distance, campground access, passengers, forecast, and nearby support."
          },
          {
            title: "Family travel",
            priority: "Passenger comfort, restraint access, organized essentials, payload discipline, and easy loading.",
            wait: "Equipment that blocks seats, visibility, exits, or daily cargo use.",
            data: "Occupants, child seats, luggage, water, medical needs, and stop frequency."
          },
          {
            title: "Longer remote trips",
            priority: "Reliability, range planning, communication, recovery, spares, and conservative load.",
            wait: "Convenience items that displace essential capacity or complicate service.",
            data: "Resupply gaps, route difficulty, weather, support, fuel access, and communications."
          },
          {
            title: "Daily use + occasional travel",
            priority: "Removable equipment, road comfort, normal parking, and a lightweight core kit.",
            wait: "Permanent systems that add mass and reduce everyday utility.",
            data: "Trip frequency, storage location, commute, garage height, and normal passenger load."
          },
          {
            title: "Difficult remote terrain",
            priority: "Inspection, route-specific protection, recovery planning, tires, and experienced support.",
            wait: "Cosmetic equipment or untested systems added immediately before departure.",
            data: "Obstacle type, remoteness, skill, recovery partners, payload, and alternate routes."
          }
        ]
      },
      {
        type: "dependency",
        id: "weight",
        title: "Plan weight before accessories",
        steps: [
          "Passengers, cargo, water, and trip supplies",
          "Armor, bumper, winch, rack, and recovery gear",
          "Total operating load",
          "Vehicle and axle limits",
          "Tires, suspension, handling, and storage plan"
        ],
        text:
          "Use the Tire and Loading Information label and official documentation for the exact configuration. Do not borrow one payload number from another model year or trim. Include everything carried by the vehicle and keep the calculation current."
      },
      {
        type: "sequence",
        id: "planning-order",
        title: "Example planning sequence",
        intro:
          "This is a decision order, not a universal shopping list. Reliability, route risk, and legal requirements can move an item earlier.",
        items: [
          ["Baseline maintenance and reliability", "Inspect the vehicle, resolve known problems, and follow the maintenance plan."],
          ["Tires", "Match condition, load capacity, road use, weather, and route surface."],
          ["Recovery points and equipment", "Use rated vehicle-specific attachment options and training appropriate to the recovery method."],
          ["Protection based on route", "Protect credible exposure while accounting for weight, cooling, and service access."],
          ["Cargo and payload planning", "Inventory people, supplies, equipment, and where each item will be secured."],
          ["Suspension matched to final load", "Choose springs and damping only after constant front and rear weight is stable."],
          ["Electrical and comfort systems", "Size high-level needs, protect circuits, and use qualified installation."],
          ["Secondary accessories", "Add convenience only after the core trip plan works within capacity."]
        ]
      },
      {
        type: "systems",
        id: "recovery-protection",
        title: "Recovery and protection should match the route",
        items: [
          ["Rated recovery points", "Confirm vehicle-specific rating, mounting, inspection, and compatibility with the intended method."],
          ["Recovery equipment", "Select for a defined scenario and obtain practical training; this page does not provide a recovery procedure."],
          ["Winch planning", "Consider mounting, vehicle load, electrical demand, inspection, and safe-use training."],
          ["Underbody protection", "Match vulnerable areas and route exposure while tracking added mass."],
          ["Cooling and service access", "Check that protection and cargo do not obstruct required airflow, inspection, or maintenance."],
          ["Communication and support", "Match the plan to remoteness, coverage, group travel, and local emergency resources."]
        ]
      },
      {
        type: "prose",
        id: "suspension-load",
        title: "Select suspension after the constant load is known",
        paragraphs: [
          "Permanent front and rear equipment changes spring compression and the damping task. Separate constant equipment from passengers and trip cargo, then discuss both loaded and unloaded behavior with the suspension manufacturer or installer.",
          "High-load springs selected before the build is weighed can create an unnecessary compromise when the vehicle is empty. The goal is controlled operation within vehicle limits, not simply a taller stance."
        ],
        contextualLink: {
          before: "Use the ",
          label: "4Runner suspension guide",
          href: "/vehicles/toyota-4runner/suspension",
          after: " to turn the load inventory into a suspension decision."
        }
      },
      {
        type: "prose",
        id: "roof-load",
        title: "Roof load affects more than storage space",
        paragraphs: [
          "Weight carried high changes the vehicle's center of mass. Toyota instructs owners not to overload the vehicle and to consult the owner's manual for roof-load limits and restrictions.",
          "Vehicle and rack limits both matter, and static and moving load ratings may be stated differently by equipment manufacturers. Use the lowest applicable limit, secure the load as instructed, and keep heavy items lower when practical."
        ]
      },
      {
        type: "systems",
        id: "electrical-comfort",
        title: "Plan electrical needs and comfort as systems",
        items: [
          ["Electrical demand", "List refrigeration, lighting, charging, communication, and their expected operating time."],
          ["Circuit protection", "Use correctly specified fuses, protected routing, manufacturer instructions, and qualified installation."],
          ["Sleeping", "Match shelter to climate, occupants, setup time, and where its weight is carried."],
          ["Food and water", "Plan quantity, resupply, secure storage, hygiene, and changing trip temperatures."],
          ["Organization", "Keep emergency items accessible and secure all cargo for road and trail movement."],
          ["Daily conversion", "Prefer removable or flexible systems when the 4Runner remains a frequent daily driver."]
        ],
        contextualLink: {
          before: "Tire load and travel behavior are covered separately in the ",
          label: "Toyota 4Runner tire-size guide",
          href: "/vehicles/toyota-4runner/tire-size",
          after: "."
        }
      },
      {
        type: "scenarios",
        id: "scenarios",
        title: "Build scenarios",
        items: [
          {
            title: "Weekend family travel",
            priority: "Maintenance, safe seating, weather protection, simple food/water, tires, and organized essentials.",
            wait: "Permanent heavy cargo systems and difficult-to-remove roof equipment.",
            data: "Total passenger load, child-seat access, comfort, and easy packing."
          },
          {
            title: "Lightweight touring",
            priority: "A disciplined load list, removable shelter, compact recovery equipment, and reliability.",
            wait: "Duplicate tools, oversized storage, and equipment without a route-specific purpose.",
            data: "Measured packed load, item frequency, resupply, and secure low storage."
          },
          {
            title: "Remote travel preparation",
            priority: "Inspection, communication, range, route-specific recovery, spares, and tested systems.",
            wait: "Last-minute complex modifications before departure.",
            data: "Support distance, alternate routes, conditions, training, and capacity margin."
          },
          {
            title: "Daily driver + occasional trips",
            priority: "Road manners, removable cargo, normal parking height, and a small ready kit.",
            wait: "Permanent load that reduces everyday comfort and carrying flexibility.",
            data: "Trip frequency, garage clearance, commute, passengers, and storage at home."
          }
        ]
      },
      {
        type: "checklist",
        id: "wait",
        title: "What not to add too early",
        items: [
          "A heavy roof system before confirming vehicle and rack limits",
          "An oversized cargo system before packing a real trip",
          "A bumper and winch without a defined recovery use and load plan",
          "High-load springs before calculating constant front and rear weight",
          "Extensive lighting before defining legal and practical night use",
          "Duplicate recovery, cooking, or storage equipment",
          "A tire or lift change without complete fitment and clearance checks"
        ],
        note:
          "Test the smallest credible travel setup close to support before adding complexity for a longer or more remote trip."
      }
    ],
    related: [
      hub,
      {
        title: "First Upgrades for a 4Runner",
        href: "/vehicles/toyota-4runner/first-upgrades",
        text: "Prioritize condition, traction, recovery, protection, and later systems."
      },
      {
        title: "Toyota 4Runner Suspension Guide",
        href: "/vehicles/toyota-4runner/suspension",
        text: "Match springs and damping to the settled travel load."
      },
      {
        title: "Toyota 4Runner Tire Size Guide",
        href: "/vehicles/toyota-4runner/tire-size",
        text: "Verify tire load, wheel compatibility, clearance, and road trade-offs."
      },
      {
        title: "Toyota 4Runner Lift Kit Guide",
        href: "/vehicles/toyota-4runner/lift-kit",
        text: "Decide whether a height change solves a real travel need."
      },
      {
        title: "Toyota 4Runner KDSS Guide",
        href: "/vehicles/toyota-4runner/kdss",
        text: "Confirm KDSS before choosing suspension components."
      }
    ],
    safety,
    sources: [sources.generations, sources.manual, sources.brochure, sources.nhtsaTires, sources.springLoad]
  }
];
