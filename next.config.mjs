import createNextIntlPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/8kyc11bs/production/**",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/aqzygdsy/production/**",
      },
    ],
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(config);
