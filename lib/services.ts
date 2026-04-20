import type { LucideIcon } from "lucide-react";
import {
  Droplets,
  Flame,
  Wrench,
  ShowerHead,
  Waves,
  PipetteIcon,
  Gauge,
  Thermometer,
  CircleAlert,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  summary: string;
  bullets: string[];
  signs: string[];
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "water-heaters",
    title: "Water Heater Repair & Replacement",
    short: "Hot water, fast — tank, tankless, electric, and gas.",
    icon: Thermometer,
    summary:
      "From leaking tanks to on-demand tankless upgrades, we repair and replace every style of water heater used in Minnesota homes. Same-day service on most models, with upfront pricing before any work starts.",
    bullets: [
      "40, 50, 75-gallon tank replacements",
      "Tankless conversions and installs",
      "Thermostat, element, and anode service",
      "Gas, electric, and hybrid heat pump units",
      "Recirculating pump installation",
    ],
    signs: [
      "Rumbling or popping sounds from the tank",
      "Rusty or discolored hot water",
      "Pooling water under the unit",
      "Hot water runs out quickly",
      "Pilot light won't stay lit",
    ],
    process: [
      {
        title: "Honest diagnosis",
        body: "We test the unit, inspect the venting and shutoffs, and explain whether a repair or replacement saves you more over the next five years.",
      },
      {
        title: "Flat-rate quote",
        body: "You approve the price before we touch a tool — no hourly surprises.",
      },
      {
        title: "Clean installation",
        body: "Haul-away, new shutoffs, properly sized venting, permit pulled when required.",
      },
    ],
    faq: [
      {
        q: "How long does a water heater last in Minnesota?",
        a: "Tank units typically last 8–12 years. Hard water in the south metro can cut that short without a flush. Tankless systems last 15–20 years with descaling.",
      },
      {
        q: "Can you replace it today?",
        a: "Most standard tanks we can replace the same day. Tankless and heat pump units sometimes require a next-day install to size the venting and electrical correctly.",
      },
    ],
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning",
    short: "Clear lines, no mess, no recurring clogs.",
    icon: Waves,
    summary:
      "Slow drains and backups get solved with the right tool, not a rented store-bought auger. We use professional cable machines and hydro jetting to clear roots, grease, and scale — then camera-inspect so the problem does not come back next month.",
    bullets: [
      "Kitchen, bath, and laundry drains",
      "Main line stoppages",
      "Root removal and descaling",
      "Hydro jetting",
      "Camera inspection with video report",
    ],
    signs: [
      "Gurgling toilets when a sink drains",
      "Multiple slow drains at once",
      "Water backing up in a basement floor drain",
      "Recurring clogs in the same line",
      "Sewer smell near a drain",
    ],
    process: [
      {
        title: "Identify the blocked line",
        body: "We start at the right access point so we don't pull a toilet you don't need pulled.",
      },
      {
        title: "Clear it completely",
        body: "Cable or jet the line fully — not just enough to restore trickle flow.",
      },
      {
        title: "Verify with camera",
        body: "Optional video inspection to confirm the pipe is clean and flag any developing issues.",
      },
    ],
    faq: [
      {
        q: "Is hydro jetting safe for older pipes?",
        a: "On cast iron and clay we evaluate first with a camera. For most homes built after 1970 hydro jetting is safe and far more thorough than a cable.",
      },
      {
        q: "Do you guarantee the work?",
        a: "Main line clearings come with a 30-day clean-flow warranty when the line passes a camera inspection.",
      },
    ],
  },
  {
    slug: "sewer-line",
    title: "Sewer Line Repair & Replacement",
    short: "Cracked, collapsed, or root-bound sewer lines, fixed.",
    icon: PipetteIcon,
    summary:
      "When the main sewer line fails, it affects every fixture in the house. We camera-locate the failure, give you a clear repair-vs-replace recommendation, and handle locates, permits, and restoration so you are back online quickly.",
    bullets: [
      "Camera locating and line tracing",
      "Spot repairs and full replacements",
      "Trenchless options where soil allows",
      "Cleanout additions for future access",
      "Permit and locate coordination",
    ],
    signs: [
      "Sewage backing up into the lowest drain",
      "Wet or sunken spots in the yard",
      "Frequent main line clogs",
      "Tree roots visible on camera",
      "Sewer gas smell outside the home",
    ],
    process: [
      {
        title: "Locate the failure",
        body: "Camera and transmitter pinpoint the exact depth and position.",
      },
      {
        title: "Right-size the repair",
        body: "We recommend spot repair when it makes sense — not a full dig if you don't need one.",
      },
      {
        title: "Restore the site",
        body: "Backfill, compact, and re-sod. Your yard does not stay torn up.",
      },
    ],
    faq: [
      {
        q: "Do I need to replace the whole line?",
        a: "Often no. If the rest of the line passes a camera inspection, a spot repair at the failure point is usually the right call.",
      },
      {
        q: "Who calls in locates?",
        a: "We do. We coordinate Gopher State One Call before any digging.",
      },
    ],
  },
  {
    slug: "burst-pipe-repair",
    title: "Burst Pipe Repair",
    short: "Frozen pipe burst? We are on the way.",
    icon: CircleAlert,
    summary:
      "Minnesota winters put every exterior wall at risk. When a pipe bursts, the clock is running on water damage. We prioritize emergency dispatch, locate the break, replace the damaged section, and help you document the claim for insurance.",
    bullets: [
      "Emergency dispatch",
      "Thawing frozen lines safely",
      "Copper, PEX, and PVC repairs",
      "Shutoff valve replacement",
      "Damage documentation for insurance",
    ],
    signs: [
      "No water at a fixture in cold weather",
      "Bulging ceiling or wall",
      "Sudden drop in water pressure",
      "Water stains after a freeze",
      "Water meter spinning with nothing running",
    ],
    process: [
      {
        title: "Stop the water",
        body: "We walk you through shutting the main valve while we are en route.",
      },
      {
        title: "Thaw and inspect",
        body: "Safely warm the line and check the full run for additional failures.",
      },
      {
        title: "Repair and protect",
        body: "Replace the damaged section and add insulation or a freeze sensor if the location is exposed.",
      },
    ],
    faq: [
      {
        q: "Will my insurance cover this?",
        a: "Most homeowner policies cover sudden pipe bursts. We provide photos, scope, and an itemized invoice to support your claim.",
      },
      {
        q: "How fast can you get here?",
        a: "For active leaks in our service area we target a two-hour response, often faster.",
      },
    ],
  },
  {
    slug: "gas-line",
    title: "Gas Line Repair & Installation",
    short: "Licensed gas work for ranges, grills, and generators.",
    icon: Flame,
    summary:
      "Gas is not a DIY job. Our licensed plumbers install, extend, and repair natural gas and LP lines for ranges, dryers, water heaters, fireplaces, patio grills, and standby generators — permitted and pressure-tested.",
    bullets: [
      "New gas line runs",
      "Black iron and CSST installations",
      "Leak detection and repair",
      "Pressure testing and inspection",
      "Appliance connections",
    ],
    signs: [
      "Smell of gas near an appliance",
      "Hissing sound at a fitting",
      "Pilot lights that won't stay lit",
      "Dead plants along a buried line",
      "Higher-than-normal gas bill",
    ],
    process: [
      {
        title: "Test the system",
        body: "Electronic leak detection on every joint before any work begins.",
      },
      {
        title: "Pull the permit",
        body: "All gas work is permitted and inspected — no shortcuts.",
      },
      {
        title: "Pressure test",
        body: "The system is pressure-tested and signed off before you are billed.",
      },
    ],
    faq: [
      {
        q: "Do you handle the permit?",
        a: "Yes. We pull the permit, schedule the inspection, and hand you the final sign-off.",
      },
      {
        q: "Can you run a line outside for a grill?",
        a: "Absolutely — one of our most common upgrades. We can also add a gas stub for a future generator at the same time.",
      },
    ],
  },
  {
    slug: "repiping",
    title: "Whole-Home Repiping",
    short: "Replace failing galvanized or polybutylene with PEX or copper.",
    icon: Wrench,
    summary:
      "If you are fighting rusty water, pinhole leaks, or low pressure, repiping is a permanent fix. We plan the route, protect your walls, and complete most single-family repipes in two to three days.",
    bullets: [
      "PEX-A and copper options",
      "Galvanized and polybutylene replacement",
      "Manifold or home-run layouts",
      "Minimal drywall impact",
      "Pressure tested and inspected",
    ],
    signs: [
      "Discolored water at the tap",
      "Low pressure at upper-floor fixtures",
      "Repeated small leaks",
      "Polybutylene (grey plastic) visible in the basement",
      "Galvanized pipe older than 50 years",
    ],
    process: [
      {
        title: "Walk-through and plan",
        body: "We map the new routes with access in mind so the drywall repair is as small as possible.",
      },
      {
        title: "Repipe in stages",
        body: "Water is kept on to at least one bathroom every night of the project.",
      },
      {
        title: "Test, inspect, close up",
        body: "Pressure test, city inspection, then drywall patching coordinated or completed.",
      },
    ],
    faq: [
      {
        q: "PEX or copper?",
        a: "Both are excellent. PEX-A is faster, quieter, and freeze-tolerant. Copper is the traditional choice and still a great option in exposed runs. We will walk you through the trade-offs.",
      },
      {
        q: "Do we have to move out?",
        a: "No. We stage the work so your home is livable every night.",
      },
    ],
  },
  {
    slug: "kitchen-plumbing",
    title: "Kitchen Plumbing",
    short: "Faucets, disposals, dishwashers, and pot fillers.",
    icon: Droplets,
    summary:
      "Whether it is a dripping faucet, a jammed garbage disposal, or a full kitchen remodel rough-in, we handle the water side of your kitchen with care for the finishes around it.",
    bullets: [
      "Faucet repair and replacement",
      "Garbage disposal install",
      "Dishwasher hookups",
      "Pot filler installation",
      "Ice maker line additions",
    ],
    signs: [
      "Leaking faucet base",
      "Disposal humming without spinning",
      "Slow-draining double basin",
      "Water under the sink",
      "Dishwasher not filling",
    ],
    process: [
      {
        title: "Shut-offs first",
        body: "We replace corroded angle stops while we are in there — cheap insurance.",
      },
      {
        title: "Clean install",
        body: "Surfaces protected, cabinet interior left as clean as we found it.",
      },
      {
        title: "Test everything",
        body: "Run the full cycle on every fixture before calling it done.",
      },
    ],
    faq: [
      {
        q: "Can you install a faucet I already bought?",
        a: "Yes, as long as it meets code. We will flag anything sub-spec before we install it.",
      },
      {
        q: "Do you remove the old disposal?",
        a: "Yes, included. We haul it away with the rest of the debris.",
      },
    ],
  },
  {
    slug: "clogged-toilet",
    title: "Clogged Toilet Repair",
    short: "Clear the clog, fix what is actually wrong.",
    icon: ShowerHead,
    summary:
      "If a plunger has not worked, something deeper is going on. We diagnose whether it is the toilet itself, the branch line, or the main — and fix the actual problem instead of patching it.",
    bullets: [
      "Toilet augering",
      "Flange and wax ring replacement",
      "Fill valve and flapper repair",
      "New toilet installation",
      "Branch line clearing",
    ],
    signs: [
      "Plunger no longer works",
      "Bubbles in the bowl when a sink drains",
      "Toilet rocks on the floor",
      "Water at the base after every flush",
      "Two or more toilets backed up at once",
    ],
    process: [
      {
        title: "Figure out the source",
        body: "Toilet, branch, or main — the fix is different for each.",
      },
      {
        title: "Clear without damage",
        body: "Closet auger first, pull the toilet only when we need to.",
      },
      {
        title: "Reset to code",
        body: "New wax ring and bolts on every reset so it stays watertight.",
      },
    ],
    faq: [
      {
        q: "Can a low-flow toilet be the problem?",
        a: "Older 1.6 gpf units can struggle with long horizontal runs. Sometimes the right fix is a new high-efficiency toilet.",
      },
      {
        q: "Is it always the toilet?",
        a: "No. If multiple fixtures are affected, the clog is further down and we need to go to the main.",
      },
    ],
  },
  {
    slug: "sump-pumps",
    title: "Sump Pumps",
    short: "Keep the basement dry — with a backup that actually works.",
    icon: Gauge,
    summary:
      "A sump pump only matters on the worst day of the year. We install, service, and back up primary pumps with battery or water-powered secondaries so a power outage during a storm does not flood your basement.",
    bullets: [
      "Primary pump installation",
      "Battery backup systems",
      "Water-powered backups",
      "Check valve and discharge upgrades",
      "High-water alarms",
    ],
    signs: [
      "Pump runs constantly",
      "Pump never runs (stuck switch)",
      "Loud rattling or bang on shutoff",
      "Musty smell in the basement",
      "Pump older than 7 years",
    ],
    process: [
      {
        title: "Sizing check",
        body: "We measure inflow and head height to pick the right horsepower, not the biggest one on the shelf.",
      },
      {
        title: "Install with quiet check valve",
        body: "Spring-assisted check valves eliminate the bang that rattles the whole house.",
      },
      {
        title: "Add a backup",
        body: "Battery or water-powered backup with high-water alarm — the piece most homes are missing.",
      },
    ],
    faq: [
      {
        q: "Battery or water backup?",
        a: "Battery is simpler and works anywhere. Water-powered runs indefinitely on city pressure but needs a municipal supply. We will help you choose.",
      },
      {
        q: "How long does a sump pump last?",
        a: "Seven to ten years for most residential pumps. If yours is close, replace it before it fails in a storm.",
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
