var PluginBuilder = require("bit-plugin-builder");

var defaults = {
  extensions: ["json"],
  precompile: function textPrecompile(meta) {
    return {
      source: "module.exports = " + meta.source + ";"
    };
  }
};

function textPlugin(options) {
  return PluginBuilder
    .create(defaults)
    .configure(options)
    .build();
}

module.exports = textPlugin;
