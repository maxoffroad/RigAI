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
    number: "01",
    title: "Choose your vehicle",
    text: "Select make, model, generation, trim, and current configuration."
  },
  {
    number: "02",
    title: "Describe how you drive",
    text: "Daily use, highways, trails, overlanding, terrain type, and experience level shape the recommendation."
  },
  {
    number: "03",
    title: "Set your priorities",
    text: "Budget, comfort, capability, appearance, and future plans are weighed against your real needs."
  },
  {
    number: "04",
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
    eyebrow: "Example vehicle selection",
    title: "Choose your SUV",
    lines: ["Toyota 4Runner", "Land Cruiser Prado", "Lexus GX", "Jeep Wrangler", "Additional vehicles available"]
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
  {
    name: "Toyota 4Runner",
    scope: "2010-2024 · 5th Gen",
    description: "SUV-focused upgrade planning for daily driving, trails, and overland travel.",
    status: "Detailed guide available",
    state: "guide",
    href: "/vehicles/toyota-4runner",
    slug: "toyota-4runner"
  },
  {
    name: "Toyota Tacoma",
    scope: "2016–2023 · 3rd Gen",
    description: "Pickup-specific planning for payload, bed load, tires, suspension, and trail use.",
    status: "Detailed guide available",
    state: "guide",
    href: "/vehicles/toyota-tacoma",
    slug: "toyota-tacoma"
  },
  {
    name: "Jeep Wrangler JL",
    scope: "2018–present · 2-door and 4-door",
    description: "Suspension, tire fitment, lift, and trail-build guidance for the Jeep Wrangler JL.",
    status: "Detailed guide available",
    state: "guide",
    href: "/vehicles/jeep-wrangler-jl",
    slug: "jeep-wrangler-jl",
    ctaLabel: "View Wrangler guides"
  },
  { name: "Land Cruiser Prado", status: "Supported in app", state: "supported" },
  { name: "Land Cruiser 200", status: "Limited support", state: "limited" },
  { name: "Lexus GX", status: "Supported in app", state: "supported" },
  {
    name: "Ford Bronco",
    scope: "2021–present · 6th Gen",
    description: "Suspension, tire fitment, lift, and trail-build guidance for the modern Ford Bronco.",
    status: "Detailed guide available",
    state: "guide",
    href: "/vehicles/ford-bronco",
    slug: "ford-bronco",
    ctaLabel: "View Bronco guides"
  },
  {
    name: "Jeep Gladiator JT",
    scope: "2020–present · Midsize pickup",
    description: "Suspension, tire fitment, lift, payload, and overland guidance for the Jeep Gladiator JT.",
    status: "Detailed guide available",
    state: "guide",
    href: "/vehicles/jeep-gladiator",
    slug: "jeep-gladiator",
    ctaLabel: "View Gladiator guides"
  },
  {
    name: "Chevrolet Colorado",
    scope: "2023–present · 3rd Gen",
    description: "Suspension, tire fitment, lift, payload, and overland guidance for the third-generation Chevrolet Colorado.",
    status: "Detailed guide available",
    state: "guide",
    href: "/vehicles/chevrolet-colorado",
    slug: "chevrolet-colorado",
    ctaLabel: "View Colorado guides"
  },
  {
    name: "Ford Ranger",
    scope: "2024–present · US generation",
    description: "Suspension, tire fitment, lift, payload, and overland guidance for the current-generation Ford Ranger.",
    status: "Detailed guide available",
    state: "guide",
    href: "/vehicles/ford-ranger",
    slug: "ford-ranger",
    ctaLabel: "View Ranger guides"
  }
];

const suspensionPage = getToyota4RunnerPage("toyota-4runner-suspension");
const firstUpgradesPage = getToyota4RunnerPage("toyota-4runner-first-upgrades");
const liftKitPage = getToyota4RunnerPage("toyota-4runner-lift-kit");
const tireSizePage = getToyota4RunnerPage("toyota-4runner-tire-size");
const kdssPage = getToyota4RunnerPage("toyota-4runner-kdss");
const overlandBuildPage = getToyota4RunnerPage("toyota-4runner-overland-build");

export const guides = [
  {
    category: "Suspension",
    title: "Toyota 4Runner Suspension Guide",
    text: "Choose suspension by use, condition, added load, damping needs, geometry, and KDSS status.",
    href: suspensionPage.route,
    readingTime: readingTimeMinutes(suspensionPage)
  },
  {
    category: "First upgrades",
    title: "Best First Upgrades for a 4Runner",
    text: "A practical framework for deciding what to buy first and what can wait.",
    href: firstUpgradesPage.route,
    readingTime: readingTimeMinutes(firstUpgradesPage)
  },
  {
    category: "Lift kits",
    title: "Toyota 4Runner Lift Kit Guide",
    text: "Choose a lift objective using load, geometry, clearance, and daily-driving trade-offs.",
    href: liftKitPage.route,
    readingTime: readingTimeMinutes(liftKitPage)
  },
  {
    category: "Tires",
    title: "Toyota 4Runner Tire Size Guide",
    text: "Evaluate the placard baseline, real dimensions, wheels, clearance, and load.",
    href: tireSizePage.route,
    readingTime: readingTimeMinutes(tireSizePage)
  },
  {
    category: "KDSS",
    title: "Toyota 4Runner KDSS Guide",
    text: "Confirm KDSS and plan compatible suspension, lift, load, and installation checks.",
    href: kdssPage.route,
    readingTime: readingTimeMinutes(kdssPage)
  },
  {
    category: "Overland travel",
    title: "Toyota 4Runner Overland Build Guide",
    text: "Plan travel around operating load, reliability, recovery, cargo, and comfort.",
    href: overlandBuildPage.route,
    readingTime: readingTimeMinutes(overlandBuildPage)
  }
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
import { getToyota4RunnerPage, readingTimeMinutes } from "./toyota-4runner.js";
