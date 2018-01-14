var defaults = {
  extensions: ["json"],
  postdependency: function jsonPrecompile(meta) {
    return {
      source: "module.exports = " + meta.source + ";"
    };
  }
};

function buildPlugin(options, builder) {
  return builder
    .configure(defaults)
    .configure(options);
}

module.exports = function factory(options) {
  return function(builder) {
    return buildPlugin(options, builder);
  };
};
