/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "esm",
  tailwind: true,
  postcss: true,
  // Server build configuration
  serverBuildPath: "build/index.js",
  // Future flags for better performance
  future: {
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
