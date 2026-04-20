export type Section = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  category: string;
  excerpt: string;
  readMinutes: number;
  body: Section[];
};

export const posts: Post[] = [
  {
    slug: "winterize-minnesota-home",
    title: "How to Winterize a Minnesota Home Before the First Deep Freeze",
    date: "2025-11-04",
    category: "Seasonal",
    readMinutes: 5,
    excerpt:
      "Five minutes with a flashlight and a foam sleeve today can save a $10,000 burst pipe in January. Here is the short list every south-metro homeowner should run through before the first hard freeze.",
    body: [
      {
        paragraphs: [
          "Every winter we take the same emergency call: a pipe burst overnight, the finished basement is soaked, and the homeowner had no idea the line was exposed. Almost every one of these is preventable in about fifteen minutes — if you know where to look.",
          "Here is the checklist we run in our own homes every fall.",
        ],
      },
      {
        heading: "1. Disconnect every garden hose",
        paragraphs: [
          "A hose left attached to a frost-free sillcock will trap water in the valve body. When that water freezes, the copper inside cracks — and you will not know until spring, when you turn the hose on and water floods down the inside of the wall.",
          "Disconnect the hose, drain it, and hang it up. If your sillcock is not a frost-free style, shut the interior valve and open the outside bib to drain the line.",
        ],
      },
      {
        heading: "2. Insulate the two pipes most likely to freeze",
        paragraphs: [
          "In most Minnesota homes the first pipes to freeze are the ones running through exterior walls or along uninsulated rim joists — usually a kitchen sink on an exterior wall and a basement utility sink or laundry line.",
          "A $6 roll of foam pipe sleeve from any hardware store solves most of this. Sleeve every exposed supply line in the rim joist, and any copper that runs along an outside wall in the basement.",
        ],
      },
      {
        heading: "3. Open cabinet doors on the coldest nights",
        paragraphs: [
          "When the overnight low drops into the negative teens, open the cabinet doors under the kitchen and bathroom sinks that share an exterior wall. Room-temperature air doing a slow circulation pass is often enough to keep a vulnerable line above freezing.",
        ],
      },
      {
        heading: "4. Know where the main shutoff is",
        paragraphs: [
          "If a pipe does burst, every minute matters. Walk down to your basement right now and find the main water shutoff. It is usually a ball valve on the supply line where it enters the foundation.",
          "Try it. Turn it halfway closed and back open. If it is stuck or weeping, that is a twenty-minute fix for a plumber now — and a disaster prevented later.",
        ],
      },
      {
        heading: "5. Drain exterior irrigation",
        paragraphs: [
          "If you have an irrigation system, blow it out before the ground freezes. If you have a hose bib on a detached garage with no interior shutoff, wrap it with an insulated foam cap.",
        ],
      },
      {
        heading: "When to call",
        paragraphs: [
          "If you find a pipe that already feels icy in December, or you hear a whistling or chirping sound from a supply line on a cold night, that is a partial freeze in progress. Call us before the line fails completely — a thaw and inspection is a fraction of the cost of a burst repair.",
        ],
      },
    ],
  },
  {
    slug: "water-heater-failing-signs",
    title: "Four Signs Your Water Heater Is About to Quit",
    date: "2025-10-14",
    category: "Water Heaters",
    readMinutes: 4,
    excerpt:
      "Water heaters rarely fail without warning. Here are the four signs we see in almost every tank that is two weeks away from a leak — and one sneaky symptom most homeowners miss.",
    body: [
      {
        paragraphs: [
          "A water heater that fails quietly is the worst version of this appliance. A slow leak at the bottom of a tank in the utility room can soak the subfloor for days before you notice. The good news: tanks almost always tell you they are dying before they actually die.",
        ],
      },
      {
        heading: "1. Rumbling or popping on the burn",
        paragraphs: [
          "That low rumble you hear when the burner kicks on is sediment on the bottom of the tank — essentially a thick layer of hard-water scale that the flame has to boil through. That scale stresses the tank bottom and insulates the burner, costing you efficiency every cycle.",
          "On a healthy tank, flushing and draining once a year keeps sediment manageable. On a neglected tank past year seven, flushing sometimes does not help — the scale has bonded to the metal.",
        ],
      },
      {
        heading: "2. Rusty or metallic-smelling hot water",
        paragraphs: [
          "If only the hot side runs discolored, the tank itself is the source. Check the anode rod first — it is the sacrificial metal that is supposed to corrode so the tank does not. If the anode is fully consumed, the tank is next in line.",
          "Replacing an anode rod on a five-year-old tank is $150 of insurance. On a twelve-year-old tank, it is often too late.",
        ],
      },
      {
        heading: "3. A pilot that will not stay lit",
        paragraphs: [
          "A thermocouple that needs replacing is a $20 part. A flame sensor on a power-vent unit is similar. What is not as simple is a failing gas valve or a back-drafting flue — both of which can masquerade as a bad pilot.",
          "If you replace a thermocouple and the pilot still drops within a week, stop troubleshooting and call. There is a real diagnostic reason this is happening.",
        ],
      },
      {
        heading: "4. Water at the base of the tank",
        paragraphs: [
          "Sometimes this is condensation — especially in a cold basement with a well-insulated tank. Sometimes it is the T&P valve weeping, which is a $50 part.",
          "And sometimes it is a pinhole at the bottom weld of the tank — which means the tank is done. The difference between those three matters, and it is worth a diagnostic visit before you spend on the wrong fix.",
        ],
      },
      {
        heading: "The symptom most homeowners miss",
        paragraphs: [
          "Here is the sneaky one: hot water that runs out noticeably faster than it used to. That is not your teenager taking longer showers — that is sediment volume displacing hot water capacity in the tank. When your 50-gallon tank starts acting like a 35-gallon tank, the tank is telling you it is nearing end of life.",
        ],
      },
    ],
  },
  {
    slug: "store-bought-drain-cleaner",
    title: "Why Store-Bought Drain Cleaner Usually Makes Things Worse",
    date: "2025-09-09",
    category: "Drain Cleaning",
    readMinutes: 4,
    excerpt:
      "The chemical drain cleaner under your sink is a short-term win and a long-term liability. Here is what it actually does to older pipes — and what to do instead.",
    body: [
      {
        paragraphs: [
          "Every aisle of every hardware store has a half-dozen bottles promising to dissolve a drain clog. They usually work, at least enough to get water trickling again. But as plumbers, we see the second-order effects — and they are not pretty.",
        ],
      },
      {
        heading: "What the chemicals are actually doing",
        paragraphs: [
          "Most off-the-shelf drain cleaners are sodium hydroxide (lye) or sulfuric acid based. They generate heat as they react, which is what dissolves hair and grease.",
          "That same heat and chemistry attacks the inside of older pipes. On cast iron, it accelerates the scale that is already there. On galvanized, it eats at the zinc lining. On a wax ring under a toilet or a rubber trap seal, it softens the material and shortens its life.",
        ],
      },
      {
        heading: "The repeat-clog cycle",
        paragraphs: [
          "Chemical cleaners rarely clear the full obstruction. They usually bore a small channel through it — enough for water to flow again. The rest of the clog is still there, and now it has been softened into something even better at trapping the next round of hair or grease.",
          "That is why the same drain clogs again two months later, and the cycle repeats.",
        ],
      },
      {
        heading: "What to try first",
        bullets: [
          "Hot water and dish soap — surprisingly effective on light grease clogs in kitchen lines.",
          "A drum-style hair catcher in the shower. Fifteen dollars, pays for itself the first time.",
          "A proper plunger (not the toilet one) with a good seal over the drain.",
        ],
      },
      {
        heading: "When to stop and call",
        paragraphs: [
          "If the clog has come back twice, stop fighting it from the top. That is a branch-line problem we need to get at with a cable or camera. Clearing the full pipe once, professionally, costs about what three bottles of drain cleaner do — and it actually solves the problem.",
        ],
      },
    ],
  },
  {
    slug: "tankless-water-heater-minnesota",
    title: "Tankless Water Heaters: Are They Worth It in Minnesota?",
    date: "2025-08-12",
    category: "Water Heaters",
    readMinutes: 6,
    excerpt:
      "Tankless gets sold as an upgrade for every household. The truth is it is great for some homes and mediocre for others. Here is how to tell which one you have.",
    body: [
      {
        paragraphs: [
          "Tankless water heaters get pitched hard: endless hot water, smaller footprint, lower energy bill. Some of that is true. Some of it is oversold. Here is how we walk homeowners through the decision.",
        ],
      },
      {
        heading: "What tankless actually does well",
        bullets: [
          "No standby heat loss — you are not keeping 50 gallons hot for a shower you take once a day.",
          "Longer usable life — 15–20 years is typical with descaling, versus 8–12 on a tank.",
          "Space savings — the unit is the size of a carry-on bag and wall-mounts.",
          "Endless hot water if the unit is sized correctly for your peak demand.",
        ],
      },
      {
        heading: "Where it struggles",
        paragraphs: [
          "Cold-climate incoming water is the catch. When the supply line is coming in at 40°F (typical mid-winter in Minnesota), a tankless has to raise the water temperature by ~80°F to hit a comfortable shower temperature. That is a huge lift, and it means you need a properly sized unit.",
          "An undersized tankless in Minnesota is miserable — you will run out of flow during a two-shower morning. A correctly sized one is a luxury.",
        ],
      },
      {
        heading: "The honest math",
        paragraphs: [
          "Payback period on tankless vs. a similarly priced tank install runs 10–15 years for most households. If you are replacing a failing tank and plan to stay in the house for a decade-plus, tankless usually wins.",
          "If you are flipping the house in three years, just replace the tank. The buyer will not pay you back for the upgrade.",
        ],
      },
      {
        heading: "What we ask before quoting a tankless",
        bullets: [
          "How many simultaneous hot-water users do you need to support?",
          "Is the gas line sized right, or does it need an upsize?",
          "Does the venting path work for the tankless unit's exhaust requirements?",
          "Will you actually descale annually (it matters more on hard water in the south metro)?",
        ],
      },
      {
        paragraphs: [
          "If the answers line up, we will recommend it. If they do not, we will tell you a good high-efficiency tank is the better call — and you will be happier with your hot water.",
        ],
      },
    ],
  },
  {
    slug: "sump-pump-backup-options",
    title: "Battery vs. Water-Powered Sump Backup: Which One for Your Basement?",
    date: "2025-07-21",
    category: "Sump Pumps",
    readMinutes: 5,
    excerpt:
      "A primary sump pump keeps your basement dry. A backup pump keeps it dry when the power goes out during the storm that is actually filling the pit. Here is how to pick the right one.",
    body: [
      {
        paragraphs: [
          "The single most common question we get about sump pumps is not about the primary unit — it is about the backup. And rightly so: primary pumps work fine most days, but the day you need a sump is often the day the power is out.",
        ],
      },
      {
        heading: "Battery backup",
        paragraphs: [
          "A 12V DC pump on a deep-cycle marine battery, with a charger that float-charges off house power. When the primary loses power or cannot keep up, the battery pump kicks in.",
          "Pros: works anywhere, simple to install, no water supply required. Good for 5–10 hours of intermittent pumping on a fresh battery.",
          "Cons: batteries age. You have to test them quarterly and replace them every 4–6 years or they will let you down when you need them. A forgotten backup is a worthless backup.",
        ],
      },
      {
        heading: "Water-powered backup",
        paragraphs: [
          "A venturi-style pump that uses pressure from your incoming municipal water line to suck water out of the pit. No electricity, no battery — as long as the city water pressure is up, the pump runs.",
          "Pros: runs indefinitely, near-zero maintenance, no batteries to replace. Perfect for a weekend cabin or a house you travel from.",
          "Cons: only works on municipal supply (not well water), uses 1–2 gallons of city water per gallon pumped (you will see it on the bill), and you need an available high-pressure cold line near the pit.",
        ],
      },
      {
        heading: "Our usual recommendation",
        paragraphs: [
          "Most south-metro homeowners on city water get the water-powered backup — it is more reliable over the long term because there are no batteries to forget about.",
          "Homes on well water get battery, full stop, with a calendar reminder to test it every quarter.",
          "Every install we do includes a high-water alarm. Even the best backup is useless if nobody hears it running when they are on vacation.",
        ],
      },
    ],
  },
  {
    slug: "spot-repair-vs-full-repipe",
    title: "When a Spot Repair Is Smarter Than a Full Repipe",
    date: "2025-06-18",
    category: "Repiping",
    readMinutes: 5,
    excerpt:
      "A second opinion on a $12,000 repipe quote has saved our neighbors a lot of money. Here is how to tell whether a spot repair will do the job.",
    body: [
      {
        paragraphs: [
          "If you have had a leak in an old galvanized or polybutylene line, somebody has probably told you to rip out the whole system. Sometimes that is the right call. Often, it is not.",
        ],
      },
      {
        heading: "When a full repipe is the right call",
        bullets: [
          "Polybutylene (the grey plastic from the 1980s–90s). When it fails, it fails again. Replace it.",
          "Galvanized steel older than 50 years with multiple recent pinhole leaks.",
          "Rust or discoloration on multiple fixtures throughout the house, not just one.",
          "A hot supply loop that has already been repaired twice.",
        ],
      },
      {
        heading: "When a spot repair is smarter",
        bullets: [
          "A single pinhole on an otherwise-healthy copper line.",
          "A leak at a specific fitting or transition — joint failures are localized.",
          "Any visible damage from a nail, screw, or settling — mechanical, not systemic.",
          "A line that fails a pressure test in only one segment.",
        ],
      },
      {
        heading: "How we decide",
        paragraphs: [
          "The deciding factor is usually a pressure test and a visual inspection of the worst-looking runs. If the system holds pressure everywhere except the failure point, and the pipe elsewhere looks clean, a spot repair is almost always the right answer.",
          "If we cannot get the pressure test to hold — or the rest of the pipe visibly looks like the repair section — that is when repipe becomes the honest recommendation.",
        ],
      },
      {
        paragraphs: [
          "If you have a quote for a full repipe and you are not sure, get a second opinion. We will not charge for a walk-through, and we have no problem recommending a $400 spot repair over a $12,000 job when that is what the pipe actually needs.",
        ],
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatPostDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
