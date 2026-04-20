import type { NextConfig } from "next";

const config: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Legacy service URLs: /plumbing/<slug>/ → /services/<slug>
      { source: "/plumbing", destination: "/services", permanent: true },
      { source: "/plumbing/water-heaters", destination: "/services/water-heaters", permanent: true },
      { source: "/plumbing/drain-cleaning", destination: "/services/drain-cleaning", permanent: true },
      { source: "/plumbing/burst-pipe-repair", destination: "/services/burst-pipe-repair", permanent: true },
      { source: "/plumbing/gas-line-repair-installation", destination: "/services/gas-line", permanent: true },
      { source: "/plumbing/sewer-line-repair-replacement", destination: "/services/sewer-line", permanent: true },
      { source: "/plumbing/repiping", destination: "/services/repiping", permanent: true },
      { source: "/plumbing/kitchen-plumbing", destination: "/services/kitchen-plumbing", permanent: true },
      { source: "/plumbing/clogged-toilet-repair", destination: "/services/clogged-toilet", permanent: true },
      { source: "/plumbing/sump-pumps", destination: "/services/sump-pumps", permanent: true },

      // Legacy city URLs: /service-area/<city>-plumber/ → /service-area/<city>
      { source: "/service-area/eagan-plumber", destination: "/service-area/eagan", permanent: true },
      { source: "/service-area/lakeville-plumber", destination: "/service-area/lakeville", permanent: true },
      { source: "/service-area/burnsville-plumber", destination: "/service-area/burnsville", permanent: true },
      { source: "/service-area/rosemount-plumber", destination: "/service-area/rosemount", permanent: true },
      { source: "/service-area/farmington-plumber", destination: "/service-area/farmington", permanent: true },

      // Legacy top-level pages with different slugs
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us/why-choose-us", destination: "/why-choose-us", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/news-media", destination: "/news", permanent: true },
      { source: "/blog", destination: "/news", permanent: true },
      { source: "/blog/:slug*", destination: "/news", permanent: true },
    ];
  },
};

export default config;
