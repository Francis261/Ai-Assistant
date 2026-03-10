# Optimization

Source: https://devdocs.io/webpack~5/configuration/optimization#optimizationusedexports

Webpack runs optimizations for you depending on the chosen mode, still all optimizations are available for manual configuration and overrides.

## optimization.checkWasmTypes

boolean

Tells webpack to check the incompatible types of WebAssembly modules when they are imported/exported. By default optimization.checkWasmTypes is enabled in production mode and disabled elsewise.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    checkWasmTypes: false,
  },
};
```

## optimization.chunkIds

boolean = false string: 'natural' | 'named' | 'size' | 'total-size' | 'deterministic'

Tells webpack which algorithm to use when choosing chunk ids. Setting optimization.chunkIds to false tells webpack that none of built-in algorithms should be used, as custom one can be provided via plugin. There are a couple of defaults for optimization.chunkIds:

- Also if the environment is development then optimization.chunkIds is set to 'named', while in production it is set to 'deterministic'
- if none of the above, optimization.chunkIds will be defaulted to 'natural'

The following string values are supported:

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    chunkIds: 'named',
  },
};
```

By default, a minimum length of 3 digits is used when optimization.chunkIds is set to 'deterministic'. To override the default behaviour, set optimization.chunkIds to false and use the webpack.ids.DeterministicChunkIdsPlugin.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    chunkIds: false,
  },
  plugins: [
    new webpack.ids.DeterministicChunkIdsPlugin({
      maxLength: 5,
    }),
  ],
};
```

## optimization.concatenateModules

boolean

Tells webpack to find segments of the module graph which can be safely concatenated into a single module. Depends on optimization.providedExports and optimization.usedExports. By default optimization.concatenateModules is enabled in production mode and disabled elsewise.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    concatenateModules: true,
  },
};
```

## optimization.emitOnErrors

boolean = false

Use the optimization.emitOnErrors to emit assets whenever there are errors while compiling. This ensures that erroring assets are emitted. Critical errors are emitted into the generated code and will cause errors at runtime.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    emitOnErrors: true,
  },
};
```

## optimization.avoidEntryIife

boolean = false

Use optimization.avoidEntryIife to avoid wrapping the entry module in an IIFE when it is required (search for "This entry needs to be wrapped in an IIFE because" in JavascriptModulesPlugin). This approach helps optimize performance for JavaScript engines and enables tree shaking when building ESM libraries.

Currently, optimization.avoidEntryIife can only optimize a single entry module along with other modules.

By default, optimization.avoidEntryIife is enabled in production mode and disabled otherwise.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    avoidEntryIife: true,
  },
};
```

## optimization.flagIncludedChunks

boolean

Tells webpack to determine and flag chunks which are subsets of other chunks in a way that subsets don’t have to be loaded when the bigger chunk has been already loaded. By default optimization.flagIncludedChunks is enabled in production mode and disabled elsewise.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    flagIncludedChunks: true,
  },
};
```

## optimization.innerGraph

boolean = true

optimization.innerGraph tells webpack whether to conduct inner graph analysis for unused exports.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    innerGraph: false,
  },
};
```

## optimization.mangleExports

boolean string: 'deterministic' | 'size'

optimization.mangleExports allows to control export mangling.

By default optimization.mangleExports: 'deterministic' is enabled in production mode and disabled elsewise.

The following values are supported:

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    mangleExports: true,
  },
};
```

## optimization.mangleWasmImports

boolean = false

When set to true tells webpack to reduce the size of WASM by changing imports to shorter strings. It mangles module and export names.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    mangleWasmImports: true,
  },
};
```

## optimization.mergeDuplicateChunks

boolean = true

Tells webpack to merge chunks which contain the same modules. Setting optimization.mergeDuplicateChunks to false will disable this optimization.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    mergeDuplicateChunks: false,
  },
};
```

## optimization.minimize

boolean = true

Tell webpack to minimize the bundle using the TerserPlugin or the plugin(s) specified in optimization.minimizer.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    minimize: false,
  },
};
```

## optimization.minimizer

[TerserPlugin] and or [function (compiler)] or undefined | null | 0 | false | ""

Allows you to override the default minimizer by providing a different one or more customized TerserPlugin instances. Starting with webpack 5.87.0 falsy values can be used to conditionally disable specific minimizers.

webpack.config.js

```
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        },
      }),
    ],
  },
};
```

Or, as function:

```
module.exports = {
  optimization: {
    minimizer: [
      (compiler) => {
        const TerserPlugin = require('terser-webpack-plugin');
        new TerserPlugin({
          /* your config */
        }).apply(compiler);
      },
    ],
  },
};
```

By default, webpack would set optimization.minimizer to the following value:

```
[
  {
    apply: (compiler) => {
      // Lazy load the Terser plugin
      const TerserPlugin = require('terser-webpack-plugin');
      new TerserPlugin({
        terserOptions: {
          compress: {
            passes: 2,
          },
        },
      }).apply(compiler);
    },
  },
]; // eslint-disable-line
```

Which can be accessed with '...' in case you want to keep it when customizing optimization.minimizer:

```
module.exports = {
  optimization: {
    minimizer: [new CssMinimizer(), '...'],
  },
};
```

Basically, '...' is a shortcut to access the default configuration value webpack would otherwise set for us.

## optimization.moduleIds

boolean: false string: 'natural' | 'named' | 'deterministic' | 'size'

Tells webpack which algorithm to use when choosing module ids. Setting optimization.moduleIds to false tells webpack that none of built-in algorithms should be used, as custom one can be provided via plugin.

The following string values are supported:

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    moduleIds: 'deterministic',
  },
};
```

deterministic option is useful for long term caching, but still results in smaller bundles compared to hashed. Length of the numeric value is chosen to fill a maximum of 80% of the id space. By default a minimum length of 3 digits is used when optimization.moduleIds is set to deterministic. To override the default behaviour set optimization.moduleIds to false and use the webpack.ids.DeterministicModuleIdsPlugin.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    moduleIds: false,
  },
  plugins: [
    new webpack.ids.DeterministicModuleIdsPlugin({
      maxLength: 5,
    }),
  ],
};
```

## optimization.nodeEnv

boolean = false string

Tells webpack to set process.env.NODE_ENV to a given string value. optimization.nodeEnv uses DefinePlugin unless set to false. optimization.nodeEnv defaults to mode if set, else falls back to 'production'.

Possible values:

- any string: the value to set process.env.NODE_ENV to.
- false: do not modify/set the value of process.env.NODE_ENV.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    nodeEnv: 'production',
  },
};
```

## optimization.portableRecords

boolean

optimization.portableRecords tells webpack to generate records with relative paths to be able to move the context folder.

By default optimization.portableRecords is disabled. Automatically enabled if at least one of the records options provided to webpack config: recordsPath, recordsInputPath, recordsOutputPath.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    portableRecords: true,
  },
};
```

## optimization.providedExports

boolean

Tells webpack to figure out which exports are provided by modules to generate more efficient code for export * from .... By default optimization.providedExports is enabled.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    providedExports: false,
  },
};
```

## optimization.realContentHash

boolean

Adds an additional hash compilation pass after the assets have been processed to get the correct asset content hashes. If realContentHash is set to false, internal data is used to calculate the hash and it can change when assets are identical. By default optimization.realContentHash is enabled in production mode and disabled otherwise.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    realContentHash: false,
  },
};
```

## optimization.removeAvailableModules

boolean = false

Tells webpack to detect and remove modules from chunks when these modules are already included in all parents. Setting optimization.removeAvailableModules to true will enable this optimization.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    removeAvailableModules: true,
  },
};
```

## optimization.removeEmptyChunks

boolean = true

Tells webpack to detect and remove chunks which are empty. Setting optimization.removeEmptyChunks to false will disable this optimization.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    removeEmptyChunks: false,
  },
};
```

## optimization.runtimeChunk

object string boolean

Setting optimization.runtimeChunk to true or 'multiple' adds an additional chunk containing only the runtime to each entrypoint. This setting is an alias for:

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
};
```

The value 'single' instead creates a runtime file to be shared for all generated chunks. This setting is an alias for:

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      name: 'runtime',
    },
  },
};
```

By setting optimization.runtimeChunk to object it is only possible to provide the name property which stands for the name or name factory for the runtime chunks.

Default is false: each entry chunk embeds runtime.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    runtimeChunk: {
      name: (entrypoint) => `runtimechunk~${entrypoint.name}`,
    },
  },
};
```

## optimization.sideEffects

boolean = true string: 'flag'

Tells webpack to recognise the sideEffects flag in package.json or rules to skip over modules which are flagged to contain no side effects when exports are not used.

package.json

```
{
  "name": "awesome npm module",
  "version": "1.0.0",
  "sideEffects": false
}
```

optimization.sideEffects depends on optimization.providedExports to be enabled. This dependency has a build time cost, but eliminating modules has positive impact on performance because of less code generation. Effect of this optimization depends on your codebase, try it for possible performance wins.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    sideEffects: true,
  },
};
```

To only use the manual flag and do not analyse source code:

```
module.exports = {
  //...
  optimization: {
    sideEffects: 'flag',
  },
};
```

The 'flag' value is used by default in non-production builds.

## optimization.splitChunks

object

By default webpack v4+ provides new common chunks strategies out of the box for dynamically imported modules. See available options for configuring this behavior in the SplitChunksPlugin page.

## optimization.usedExports

boolean = true string: 'global'

Tells webpack to determine used exports for each module. This depends on optimization.providedExports. Information collected by optimization.usedExports is used by other optimizations or code generation i.e. exports are not generated for unused exports, export names are mangled to single char identifiers when all usages are compatible. Dead code elimination in minimizers will benefit from this and can remove unused exports.

webpack.config.js

```
module.exports = {
  //...
  optimization: {
    usedExports: false,
  },
};
```

To opt-out from used exports analysis per runtime:

```
module.exports = {
  //...
  optimization: {
    usedExports: 'global',
  },
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/optimization
