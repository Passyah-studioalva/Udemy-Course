const path = require("path");
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

function withFrameworkConfig(defaultConfig = {}) {
  const framework = "bigcommerce";

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  const config = merge(defaultConfig, frameworkNextConfig);

  return config;
}

module.exports = { withFrameworkConfig };
