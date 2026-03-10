# Target

Source: https://devdocs.io/webpack~5/configuration/target

Webpack can compile for multiple environments or targets. To understand what a target is in detail, read through the targets concept page.

## target

string [string] false

Instructs webpack to generate runtime code for a specific environment. Note that webpack runtime code is not the same as the user code you write, you should transpile those code with transpilers like Babel if you want to target specific environments, e.g, you have arrow functions in source code and want to run the bundled code in ES5 environments. Webpack won't transpile them automatically with a target configured.

Defaults to 'browserslist' or to 'web' when no browserslist configuration was found.

### string

The following string values are supported via WebpackOptionsApply:

For example, when the target is set to "electron-main", webpack includes multiple electron specific variables.

A version of node or electron may be optionally specified. This is denoted by the [[X].Y] in the table above.

webpack.config.js

```
module.exports = {
  // ...
  target: 'node12.18',
};
```

It helps determinate ES-features that may be used to generate a runtime-code (all the chunks and modules are wrapped by runtime code).

#### browserslist

If a project has a browserslist config, then webpack will use it for:

- Determinate ES-features that may be used to generate a runtime-code.
- Infer an environment (e.g: last 2 node versions the same as target: "node" with some output.environment settings).

Supported browserslist values:

- browserslist - use automatically resolved browserslist config and environment (from the nearest package.json or BROWSERSLIST environment variable, see browserslist documentation for details)
- browserslist:modern - use modern environment from automatically resolved browserslist config
- browserslist:last 2 versions - use an explicit browserslist query (config will be ignored)
- browserslist:/path/to/config - explicitly specify browserslist config
- browserslist:/path/to/config:modern - explicitly specify browserslist config and an environment

### [string]

When multiple targets are passed, then common subset of features will be used:

webpack.config.js

```
module.exports = {
  // ...
  target: ['web', 'es5'],
};
```

Webpack will generate a runtime code for web platform and will use only ES5 features.

Not all targets may be mixed for now.

webpack.config.js

```
module.exports = {
  // ...
  target: ['web', 'node'],
};
```

Will cause an error. Webpack does not support universal target for now.

### false

Set target to false if none of the predefined targets from the list above meet your needs, no plugins will be applied.

webpack.config.js

```
module.exports = {
  // ...
  target: false,
};
```

Or you can apply specific plugins you want:

webpack.config.js

```
const webpack = require('webpack');

module.exports = {
  // ...
  target: false,
  plugins: [
    new webpack.web.JsonpTemplatePlugin(options.output),
    new webpack.LoaderTargetPlugin('web'),
  ],
};
```

When no information about the target or the environment features is provided, then ES2015 will be used.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/target
