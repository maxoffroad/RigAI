import { toyota4RunnerPages } from "../src/content/toyota-4runner.js";
import { toyotaTacomaPages } from "../src/content/toyota-tacoma.js";
import { jeepWranglerJlPages } from "../src/content/jeep-wrangler-jl.js";

export const site = {
  name: "RigAI",
  domain: "https://rigai-offroad.com",
  defaultLanguage: "en",
  email: "maxoffroad.store@gmail.com",
  description:
    "RigAI helps SUV and offroad owners build a prioritized upgrade plan with buy-first guidance, skip-for-now warnings, and fitment reminders.",
  socialImage: {
    path: "/assets/rigai-og-image.png",
    width: 1200,
    height: 630,
    alt: "RigAI AI off-road setup assistant for SUV and pickup upgrade planning"
  },
  languages: {
    default: "en",
    preparedAlternates: []
  }
};

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Contact", href: "/contact" },
  { label: "Support", href: "/support" },
  { label: "About", href: "/about" }
];

const homeNav = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "Guides", href: "#guides" },
  { label: "About", href: "/about" }
];

const pageNav = [
  { label: "Home", href: "/" },
  { label: "Vehicles", href: "/vehicles" },
  { label: "About", href: "/about" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" }
];

const vehiclePages = [
  ...toyota4RunnerPages,
  ...toyotaTacomaPages,
  ...jeepWranglerJlPages
].map((content) => ({
  key: content.key,
  route: content.route,
  output: `${content.route.replace(/^\//, "")}.html`,
  title: content.title,
  description: content.description,
  socialTitle: content.socialTitle,
  socialDescription: content.socialDescription,
  nav: pageNav,
  footerLinks,
  includeInSitemap: true,
  language: "en",
  renderer: "vehicleArticle",
  content,
  structuredData: content.kind,
  openGraphType: content.kind === "article" ? "article" : "website",
  lastmod: content.dates.modified.slice(0, 10)
}));

export const pages = [
  {
    key: "home",
    route: "/",
    source: "index.html",
    output: "index.html",
    title: "RigAI - AI Off-Road Setup Assistant",
    description:
      "RigAI helps SUV and offroad owners build a prioritized upgrade plan with buy-first guidance, skip-for-now warnings, and fitment reminders.",
    socialTitle: "RigAI - AI Off-Road Setup Assistant",
    socialDescription:
      "Build the right upgrade plan for your SUV with buy-first guidance, connected upgrade order, and fitment reminders.",
    nav: homeNav,
    footerLinks,
    headerVariant: "home",
    renderer: "home",
    includeInSitemap: true,
    scripts: ['<script type="module" src="/src/main.js?v=phase-5b"></script>'],
    extraHead: ['<meta name="impact-site-verification" value="829d8d13-665f-4a80-8ec4-797315534c1a" />'],
    structuredData: true
  },
  {
    key: "vehicles",
    route: "/vehicles",
    output: "vehicles.html",
    title: "Off-Road Vehicle Upgrade Guides | RigAI",
    description:
      "Browse RigAI vehicle-specific upgrade guides for Toyota 4Runner, 2016-2023 Toyota Tacoma, and 2018-present Jeep Wrangler JL.",
    socialTitle: "Off-Road Vehicle Upgrade Guides | RigAI",
    socialDescription:
      "Choose a vehicle planning hub for practical upgrade order, fitment reminders, and load considerations.",
    nav: pageNav,
    footerLinks,
    includeInSitemap: true,
    renderer: "vehicles",
    structuredData: "vehicleDirectory",
    content: {
      h1: "Off-Road Vehicle Upgrade Guides",
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Vehicles" }
      ],
      dates: {
        published: "2026-07-27T12:00:00+05:00",
        modified: "2026-07-28T12:00:00+05:00"
      }
    },
    lastmod: "2026-07-28"
  },
  {
    key: "privacy",
    route: "/privacy",
    source: "public/privacy.html",
    output: "privacy.html",
    title: "Privacy Policy - RigAI",
    description: "RigAI Privacy Policy for the AI offroad upgrade planner.",
    socialTitle: "Privacy Policy - RigAI",
    socialDescription: "How RigAI handles information used for vehicle upgrade recommendations.",
    nav: pageNav,
    footerLinks,
    includeInSitemap: true
  },
  {
    key: "terms",
    route: "/terms",
    source: "public/terms.html",
    output: "terms.html",
    title: "Terms of Service - RigAI",
    description: "RigAI Terms of Service for the AI offroad upgrade planner.",
    socialTitle: "Terms of Service - RigAI",
    socialDescription: "Terms for using RigAI vehicle upgrade recommendations.",
    nav: pageNav,
    footerLinks,
    includeInSitemap: true
  },
  {
    key: "affiliate-disclosure",
    route: "/affiliate-disclosure",
    source: "public/affiliate-disclosure.html",
    output: "affiliate-disclosure.html",
    title: "Affiliate Disclosure - RigAI",
    description: "RigAI Amazon Affiliate Disclosure.",
    socialTitle: "Affiliate Disclosure - RigAI",
    socialDescription: "RigAI may earn commission from qualifying Amazon purchases.",
    nav: pageNav,
    footerLinks,
    includeInSitemap: true
  },
  {
    key: "contact",
    route: "/contact",
    source: "public/contact.html",
    output: "contact.html",
    title: "Contact - RigAI",
    description: "Contact RigAI for support, partnerships, and Amazon affiliate questions.",
    socialTitle: "Contact - RigAI",
    socialDescription: "Contact RigAI at maxoffroad.store@gmail.com.",
    nav: pageNav,
    footerLinks,
    includeInSitemap: true
  },
  {
    key: "support",
    route: "/support",
    source: "public/support.html",
    output: "support.html",
    title: "Support - RigAI",
    description: "RigAI support page for app help, fitment reminders, and contact information.",
    socialTitle: "Support - RigAI",
    socialDescription: "Get support for RigAI and learn how to use recommendations safely.",
    nav: pageNav,
    footerLinks,
    includeInSitemap: true
  },
  {
    key: "about",
    route: "/about",
    source: "public/about.html",
    output: "about.html",
    title: "About - RigAI",
    description: "About RigAI, an AI offroad upgrade planner for SUV beginners.",
    socialTitle: "About - RigAI",
    socialDescription: "RigAI helps SUV beginners plan first offroad upgrades in plain language.",
    nav: pageNav,
    footerLinks,
    includeInSitemap: true
  },
  ...vehiclePages,
  {
    key: "design-system",
    route: "/design-system",
    source: "public/design-system.html",
    output: "design-system.html",
    title: "Design System - RigAI",
    description: "Internal RigAI website design system reference.",
    socialTitle: "Design System - RigAI",
    socialDescription: "Internal RigAI website design system reference.",
    nav: pageNav,
    footerLinks,
    includeInSitemap: false,
    robots: "noindex, follow",
    scripts: ['<script type="module" src="/src/main.js?v=phase-5b"></script>']
  },
  {
    key: "not-found",
    route: "/404",
    source: "public/404.html",
    output: "404.html",
    title: "Page not found - RigAI",
    description: "The requested RigAI page could not be found.",
    socialTitle: "Page not found - RigAI",
    socialDescription: "The requested RigAI page could not be found.",
    nav: [
      { label: "Home", href: "/" },
      { label: "Support", href: "/support" }
    ],
    footerLinks,
    includeInSitemap: false,
    robots: "noindex, follow",
    scripts: ['<script type="module" src="/src/main.js?v=launch-1"></script>']
  }
];
