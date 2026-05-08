export const BRAND = {
  name: "Specialty Roofing",
  nameUpper: "SPECIALTY ROOFING",
  tagline: "A roof done right the first time.",
  subtitle:
    "Family-owned roofing in Austin, TX. Honest work, lasting craftsmanship, and a stress-free experience — every job, every time.",
  location: "Austin, TX",
  phone: "(512) XXX-XXXX",
  phoneHref: "tel:5125550000",
  email: "info@specialty-roofs.com",
  emailHref: "mailto:info@specialty-roofs.com",
  address: "5306 Beckett Circle, Austin, TX 78749",
  instagram: "https://instagram.com/specialtyroofing",
  facebook: "https://facebook.com/specialtyroofing",
  google: "#",
};

export const COLORS = {
  bg: "#FAF6EE",
  bgAlt: "#F1E9D7",
  fg: "#1E3A5F",
  fgMuted: "#6B7B92",
  accent: "#E08544",
  accentDark: "#B8642C",
  soft: "#CFE0EE",
  soft2: "#E3EDF5",
  cream: "#EBD8B6",
  creamSoft: "#F4E7CC",
  dark: "#15294A",
  border: "#E2D9C6",
  white: "#FFFFFF",
};

export interface Service {
  id: string;
  name: string;
  tag: string;
  description: string;
  bullets: string[];
  bgColor: string;
  fgColor: string;
}

export const SERVICES: Service[] = [
  {
    id: "inspections",
    name: "ROOF INSPECTIONS",
    tag: "Step One",
    description:
      "A thorough top-to-bottom assessment that catches problems before they become expensive — written report, photos, and an honest recommendation.",
    bullets: ["Drone + walked roof inspection", "Moisture &amp; ventilation check", "Insurance documentation"],
    bgColor: COLORS.soft,
    fgColor: COLORS.fg,
  },
  {
    id: "repairs",
    name: "ROOF REPAIRS",
    tag: "Made to Last",
    description:
      "Leak repairs, shingle replacement, flashing, and storm damage — fixed right the first time so you&rsquo;re not calling someone else next month.",
    bullets: ["Leak diagnosis &amp; repair", "Shingle &amp; flashing replacement", "Hail / storm damage"],
    bgColor: COLORS.dark,
    fgColor: COLORS.bg,
  },
  {
    id: "replacements",
    name: "ROOF REPLACEMENTS",
    tag: "Built for Texas",
    description:
      "Full residential roof replacements with quality materials and a craftsmanship warranty that&rsquo;s actually worth the paper it&rsquo;s printed on.",
    bullets: ["Architectural &amp; standing-seam", "Tear-off &amp; haul-away", "Manufacturer + workmanship warranty"],
    bgColor: COLORS.cream,
    fgColor: COLORS.fg,
  },
];

export interface Project {
  id: string;
  title: string;
  type: string;
  location: string;
  palette: [string, string];
}

export const PROJECTS: Project[] = [
  { id: "p1", title: "Hill Country Residence", type: "Full Replacement", location: "Cedar Park", palette: ["#3a2c22", "#211710"] },
  { id: "p2", title: "Lakeside Storm Repair", type: "Storm Damage", location: "Westlake", palette: ["#2c3543", "#1a2029"] },
  { id: "p3", title: "South Austin Reroof", type: "Full Replacement", location: "78704", palette: ["#4a3528", "#2c1f17"] },
  { id: "p4", title: "Round Rock Inspection", type: "Inspection", location: "Round Rock", palette: ["#3d2a1e", "#241710"] },
  { id: "p5", title: "Modern Standing Seam", type: "Metal Roof", location: "Bouldin Creek", palette: ["#28323e", "#161e28"] },
  { id: "p6", title: "Eastside Leak Repair", type: "Repair", location: "East Austin", palette: ["#5a3d2a", "#352010"] },
];

export interface Review {
  quote: string;
  name: string;
  location: string;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "Best roof I&rsquo;ve ever had. Showed up early, finished a day ahead. You can&rsquo;t even tell they were here — except for the new roof.",
    name: "Sarah M.",
    location: "Cedar Park",
  },
  {
    quote:
      "Got three quotes after the hailstorm. Specialty was honest about what we did and didn&rsquo;t need. The other two tried to sell us a full replacement we didn&rsquo;t have to do.",
    name: "Daniel K.",
    location: "Westlake",
  },
  {
    quote:
      "Finally a roofer that fixes the leak. Two other companies came out and just kept charging me for &lsquo;mystery&rsquo; problems. One visit from Specialty and it&rsquo;s done.",
    name: "Priya R.",
    location: "South Austin",
  },
];
