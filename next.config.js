/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  nextConfig,
  framework: {
    // name: "doesntexist",
    name: "shopify_local",
    // name: "shopify",
    // name: "bigcommerce",
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

console.log("next.config.js", JSON.stringify(module.exports, null, 2));
