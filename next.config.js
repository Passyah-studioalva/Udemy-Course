/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
};

console.log("next.config.js", JSON.stringify(module.exports, null, 2));
