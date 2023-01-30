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
const prettier = require("prettier");

const ALLOWED_FW = ["shopify", "bigcommerce", "shopify_local"];
const FALLBACK_FW = "shopify"

function withFrameworkConfig(defaultConfig = {}) {
  /* Example 1 */
  // const framework = "shopify";
  /* Example 2 */
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error(
      "The API framework is missing, please add a valid provider!"
    );
  }

  if (!ALLOWED_FW.includes(framework)) {
    throw new Error(
      `The API framework: ${framework}
       cannot be found, please use one of ${ALLOWED_FW.join(", ")}`
    );
  }

  if (framework === "shopify_local") {
    framework = FALLBACK_FW
  }

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

  fs.writeFileSync(
    tsPath,
    prettier.format(JSON.stringify(tsConfig), { parser: "json" })
  );

  return config;
}

module.exports = { withFrameworkConfig };
