export const problemCards = [
  {
    number: "01",
    label: "Sequence",
    title: "Buying in the wrong order",
    text:
      "Purchasing expensive parts before the basics can create a plan that costs more and solves less."
  },
  {
    number: "02",
    label: "Compatibility",
    title: "Choosing incompatible upgrades",
    text:
      "Suspension height, tire size, bumper weight, and daily comfort interact. Each decision should fit the rest of the vehicle."
  },
  {
    number: "03",
    label: "Purpose",
    title: "Building for appearance instead of use",
    text:
      "A vehicle can look ready while becoming worse for daily driving. Good planning starts with how you actually drive."
  }
];

export const steps = [
  {
    number: "1",
    title: "Choose your vehicle",
    text: "Select make, model, generation, trim, and current configuration."
  },
  {
    number: "2",
    title: "Describe how you drive",
    text: "Daily use, highways, trails, overlanding, terrain type, and experience level shape the recommendation."
  },
  {
    number: "3",
    title: "Set your priorities",
    text: "Budget, comfort, capability, appearance, and future plans are weighed against your real needs."
  },
  {
    number: "4",
    title: "Get the right build order",
    text: "Receive a prioritized plan with clear reasoning, dependency notes, and items to postpone."
  }
];

export const buildOutcome = [
  "Improved trail-focused tire selection",
  "Better underbody protection planning",
  "Daily comfort kept as a priority",
  "Basic recovery preparation included",
  "Unnecessary upgrades postponed"
];

export const categories = [
  { code: "SUSP", title: "Suspension", text: "Affects ride height, geometry, and tire fit" },
  { code: "TIRE", title: "Tires & Wheels", text: "Affects traction, suspension load, and handling" },
  { code: "SKID", title: "Skid Plates", text: "Depends on ride height, weight, and terrain" },
  { code: "SLDR", title: "Rock Sliders", text: "Adds vehicle weight and protects body panels" },
  { code: "RECV", title: "Recovery Gear", text: "Supports basic trail preparation" },
  { code: "WNCH", title: "Winches", text: "Requires compatible bumper, wiring, and use case" },
  { code: "BUMP", title: "Bumpers", text: "Can significantly change front suspension load" },
  { code: "LITE", title: "Lighting", text: "Depends on bumper, roof, and wiring choices" },
  { code: "ROOF", title: "Roof & Cargo", text: "Affects center of mass and payload planning" },
  { code: "OVRL", title: "Overland Equipment", text: "Total weight planning should come first" }
];

export const recommendation = {
  vehicle: "Toyota 4Runner — Upgrade #1",
  profile: "Example profile",
  priority: "Highest priority for this profile",
  buyFirst: "All-terrain tires",
  why:
    "Improves traction on dirt and wet roads without making daily driving unnecessarily harsh. Delivers the most capability per dollar for this example profile.",
  skip:
    "Heavy suspension before finalizing bumper, cargo, and added weight. Alignment depends on final vehicle weight.",
  verify:
    "Model year, trim, drivetrain, KDSS system, and any current lift. These change compatible tire sizes.",
  search:
    "RigAI can suggest Amazon search ideas, then you check fitment notes, seller details, and load ratings before ordering."
};

export const vehicleContext = [
  ["Make", "Toyota"],
  ["Model", "4Runner"],
  ["Generation", "5th Gen"],
  ["Trim", "TRD Off-Road"],
  ["Drivetrain", "4WD A-TRAC"],
  ["KDSS", "Installed"]
];

export const planProgress = [
  ["01", "AT tires", "now"],
  ["02", "Recovery points", ""],
  ["03", "Skid plates", ""],
  ["04", "Suspension lift", ""],
  ["05", "Recovery gear", ""]
];

export const appScreens = [
  {
    number: "01",
    label: "Select vehicle",
    eyebrow: "Your vehicle",
    title: "Toyota 4Runner",
    lines: ["Toyota Land Cruiser", "Lexus GX 460", "Jeep Wrangler", "5th Generation · 2010-present"]
  },
  {
    number: "02",
    label: "Driving profile",
    eyebrow: "How you drive",
    title: "Daily commute",
    lines: ["Weekend trails", "Overlanding", "Heavy rock crawling", "Beginner to intermediate"]
  },
  {
    number: "03",
    label: "Build plan",
    eyebrow: "Build plan",
    title: "5 items",
    lines: ["01 All-terrain tires", "02 Recovery points", "03 Skid plates", "Estimated total: example range"]
  },
  {
    number: "04",
    label: "Upgrade detail",
    eyebrow: "Upgrade detail",
    title: "All-terrain tires",
    lines: ["Best first upgrade for this profile", "Do not buy yet", "Verify first"]
  }
];

export const vehicles = [
  ["Toyota 4Runner", "Initial coverage"],
  ["Land Cruiser Prado", "Guide planned"],
  ["Land Cruiser 200", "Guide planned"],
  ["Lexus GX", "Guide planned"],
  ["Jeep Wrangler", "Guide planned"],
  ["Ford Bronco", "Guide planned"]
];

export const guides = [
  ["Suspension", "Toyota 4Runner Suspension Guide", "Factory suspension specs, common upgrade paths, and what to consider before lifting your 5th Gen."],
  ["First upgrades", "Best First Upgrades for a 4Runner", "The modifications that deliver the most capability per dollar for daily drivers and weekend trail users."],
  ["Lift kits", "Lift Kit vs Leveling Kit", "Understand the difference and which option matches your use case, budget, and long-term plans."],
  ["Tires", "All-Terrain vs Mud-Terrain Tires", "A practical comparison for SUV owners who mix highway driving with occasional trail or overland trips."],
  ["Recovery", "Recovery Gear for Beginners", "What to buy first, what can wait, and why the purchase order of recovery equipment matters."],
  ["KDSS", "Understanding KDSS Before a Suspension Upgrade", "Toyota's Kinetic Dynamic Suspension System changes what lift kits are compatible with your vehicle."]
];

export const transparencyItems = [
  ["Informational only", "Recommendations are informational. They are based on common vehicle configurations and are not professional mechanical advice."],
  ["Verify fitment", "Always verify fitment before purchasing. Trim level, model year, drivetrain, and installed equipment all affect compatibility."],
  ["Professional review", "Safety-related modifications should be reviewed or installed by a qualified mechanic or off-road specialist."],
  ["No fitment guarantees", "RigAI does not guarantee that any specific part will fit your exact vehicle. Use manufacturer fitment data as the final source."]
];

export const faqs = [
  {
    question: "What does RigAI recommend?",
    answer: "RigAI recommends a first upgrade path, what to skip for now, and what to verify before purchasing."
  },
  {
    question: "Is RigAI only for suspension upgrades?",
    answer: "No. RigAI can organize suspension, tires, protection, recovery gear, winches, bumpers, lighting, roof cargo, and overland equipment."
  },
  {
    question: "Does RigAI guarantee that a part will fit my vehicle?",
    answer: "No. You must verify fitment, compatibility, seller details, and installation requirements before purchasing."
  },
  {
    question: "Can beginners use RigAI?",
    answer: "Yes. RigAI uses plain language and explains why an upgrade helps, what to buy first, and what to skip for now."
  },
  {
    question: "Does RigAI consider my budget?",
    answer: "Yes. Budget is part of the planning flow, but final prices and availability depend on sellers and selected products."
  },
  {
    question: "How are product links selected?",
    answer: "For now, RigAI supports Amazon search ideas only. Some links may be affiliate links, and RigAI may earn from qualifying purchases."
  }
];
