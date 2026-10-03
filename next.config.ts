import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/amsa-surveyor-in-karratha",
        destination: "/accredited-amsa-maritime-surveyor-in-karratha/",
        permanent: true,
      },
      {
        source: "/amsa-surveyor-in-karratha/",
        destination: "/accredited-amsa-maritime-surveyor-in-karratha/",
        permanent: true,
      },
      {
        source: "/service-areas/karratha",
        destination: "/accredited-amsa-maritime-surveyor-in-karratha/",
        permanent: true,
      },
      {
        source: "/service-areas/karratha/",
        destination: "/accredited-amsa-maritime-surveyor-in-karratha/",
        permanent: true,
      },
      {
        source: "/amsa-surveyor-in-geraldton",
        destination: "/accredited-amsa-maritime-surveyor-in-geraldton/",
        permanent: true,
      },
      {
        source: "/amsa-surveyor-in-geraldton/",
        destination: "/accredited-amsa-maritime-surveyor-in-geraldton/",
        permanent: true,
      },
      {
        source: "/service-areas/geraldton",
        destination: "/accredited-amsa-maritime-surveyor-in-geraldton/",
        permanent: true,
      },
      {
        source: "/service-areas/geraldton/",
        destination: "/accredited-amsa-maritime-surveyor-in-geraldton/",
        permanent: true,
      },
      {
        source: "/amsa-surveyor-in-pilbara-region",
        destination: "/accredited-amsa-maritime-surveyor-in-pilbara/",
        permanent: true,
      },
      {
        source: "/amsa-surveyor-in-pilbara-region/",
        destination: "/accredited-amsa-maritime-surveyor-in-pilbara/",
        permanent: true,
      },
      {
        source: "/service-areas/pilbara",
        destination: "/accredited-amsa-maritime-surveyor-in-pilbara/",
        permanent: true,
      },
      {
        source: "/service-areas/pilbara/",
        destination: "/accredited-amsa-maritime-surveyor-in-pilbara/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "peacemarineservices.com.au",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
