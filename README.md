# bit-loader-json

[![Greenkeeper badge](https://badges.greenkeeper.io/MiguelCastillo/bit-loader-json.svg)](https://greenkeeper.io/)
> bit-loader plugin for JSON

The output of this plugin factory is a configuration Object that can be used as a [bit-loader](https://github.com/MiguelCastillo/bit-loader) plugin.

## Usage

### install

```
$ npm install bit-loader-json --save
```

### bit-bundler setup

``` javascript
var Bitbundler = require("bit-bundler");
var jsonPlugin = require("bit-loader-json");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      jsonPlugin()
    ]
  }
});
```

## License

Licensed under MIT
