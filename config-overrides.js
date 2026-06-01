module.exports = function override(config) {
  // Suppress "Failed to parse source map" warnings from react-zoom-pan-pinch.
  // The package publishes source maps referencing a src/ folder that is not
  // included in the npm release, this is a known upstream bug with no fix yet.
  // We use webpack 5's ignoreWarnings to filter by message pattern.
  config.ignoreWarnings = [
    ...(config.ignoreWarnings || []),
    /Failed to parse source map/,
  ];

  return config;
};
