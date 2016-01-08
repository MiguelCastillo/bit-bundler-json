var PluginBuilder = require("bit-plugin-builder");

var defaults = {
  match: {
    path: /[\w]+\.(json)$/
  },
  dependency: function textDependency(meta) {
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
