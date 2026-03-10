# Mode

Source: https://devdocs.io/webpack~5/configuration/mode#usage

Providing the mode configuration option tells webpack to use its built-in optimizations accordingly.

string = 'production': 'none' | 'development' | 'production'

## Usage

Provide the mode option in the config:

```
module.exports = {
  mode: 'development',
};
```

or pass it as a CLI argument:

```
webpack --mode=development
```

The following string values are supported:

If not set, webpack sets production as the default value for mode.

### Mode: development

```
// webpack.development.config.js
module.exports = {
  mode: 'development',
};
```

### Mode: production

```
// webpack.production.config.js
module.exports = {
  mode: 'production',
};
```

### Mode: none

```
// webpack.custom.config.js
module.exports = {
  mode: 'none',
};
```

If you want to change the behavior according to the mode variable inside the webpack.config.js, you have to export a function instead of an object:

```
var config = {
  entry: './app.js',
  //...
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    //...
  }

  return config;
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/mode
