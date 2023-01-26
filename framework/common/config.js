/* 
deepmerge can be used directly in the browser without the use of package managers/bundlers as well:
UMD version from unpkg.com.

Include
deepmerge exposes a CommonJS entry point:

const merge = require('deepmerge')
The ESM entry point was dropped due to a Webpack bug.

https://www.npmjs.com/package/deepmerge
*/
const merge = require("deepmerge");
const fs = require("fs");
const path = require("path");

function withFrameworkConfig(defaultConfig = {}) {
  const framework = "shopify";

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  const config = merge(defaultConfig, frameworkNextConfig);
  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);

  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2));

  return config;
}

module.exports = { withFrameworkConfig };
