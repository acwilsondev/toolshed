/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  tailwind: true,
  postcss: true,
  // Server build configuration
  serverBuildPath: "build/index.js",
  browserNodeBuiltinsPolyfill: {
    modules: {
      buffer: true,
      stream: true,
      util: true,
      crypto: true
    }
  }
};
