# NoEmitOnErrorsPlugin

Source: https://devdocs.io/webpack~5/plugins/noemitonerrorsplugin

The NoEmitOnErrorsPlugin allows you to avoid emitting assets when there are any errors. Enabled by default, you can disable using optimization.emitOnErrors

webpack.config.js

```
module.exports = {
  plugins: [new webpack.NoEmitOnErrorsPlugin()],
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/NoEmitOnErrorsPlugin
