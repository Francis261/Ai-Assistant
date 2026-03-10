# ContextExclusionPlugin

Source: https://devdocs.io/webpack~5/plugins/context-exclusion-plugin

Context refers to a require with an expression such as require('./locale/' + name + '.json').

The ContextExclusionPlugin allows you to exclude context. Provide RegExp as an argument when initializing the Plugin to exclude all context that matches it.

webpack.config.js

```
module.exports = {
  plugins: [new webpack.ContextExclusionPlugin(/dont/)],
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/context-exclusion-plugin
