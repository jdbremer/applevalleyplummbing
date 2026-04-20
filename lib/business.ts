export const business = {
  name: "Apple Valley Plumbing Company",
  shortName: "Apple Valley Plumbing",
  tagline: "Five-Star Service at a Three-Star Price",
  phone: "612-387-1207",
  phoneTel: "+16123871207",
  email: "service@theapplevalleyplumber.com",
  address: {
    street: "15615 Fairfield Drive",
    city: "Apple Valley",
    state: "MN",
    zip: "55124",
  },
  license: "PMD65142",
  founded: 2013,
  owner: "Greg Kranz",
  hours: [
    { day: "Monday – Friday", open: "7:00 AM", close: "6:00 PM" },
    { day: "Saturday", open: "8:00 AM", close: "4:00 PM" },
    { day: "Sunday", open: "Emergency service only", close: "" },
  ],
  emergencyAvailable: true,
  social: {
    facebook: "https://www.facebook.com/AppleValleyPlumbingCo",
    twitter: "https://twitter.com/AppleValleyPlum",
  },
  siteUrl: "https://applevalleyplumber-preview.shopfrontweb.com",
} as const;

export const serviceCities = [
  "Apple Valley",
  "Eagan",
  "Lakeville",
  "Burnsville",
  "Rosemount",
  "Farmington",
  "Bloomington",
  "Edina",
  "Inver Grove Heights",
  "Mendota Heights",
  "Prior Lake",
  "Richfield",
] as const;

export function citySlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
