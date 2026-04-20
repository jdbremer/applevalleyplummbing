import { business, serviceCities } from "@/lib/business";
import { services } from "@/lib/services";

export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${business.siteUrl}#business`,
    name: business.name,
    image: `${business.siteUrl}/images/apple-tech.png`,
    logo: `${business.siteUrl}/images/applevalley.jpg`,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 44.7319,
      longitude: -93.2177,
    },
    areaServed: serviceCities.map((c) => ({
      "@type": "City",
      name: c,
    })),
    sameAs: [business.social.facebook, business.social.twitter],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    foundingDate: `${business.founded}-01-01`,
    founder: { "@type": "Person", name: business.owner },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.summary },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
