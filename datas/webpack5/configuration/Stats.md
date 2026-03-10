# Stats

Source: https://devdocs.io/webpack~5/configuration/stats

object string

The stats option lets you precisely control what bundle information gets displayed. This can be a nice middle ground if you don't want to use quiet or noInfo because you want some bundle information, but not all of it.

```
module.exports = {
  //...
  stats: 'errors-only',
};
```

## Stats Presets

Webpack comes with certain presets available for the stats output:

## Stats Options

It is possible to specify which information you want to see in the stats output.

### stats.all

A fallback value for stats options when an option is not defined. It has precedence over local webpack defaults.

```
module.exports = {
  //...
  stats: {
    all: undefined,
  },
};
```

### stats.assets

boolean = true

Tells stats whether to show the asset information. Set stats.assets to false to hide it.

```
module.exports = {
  //...
  stats: {
    assets: false,
  },
};
```

### stats.assetsSort

string = 'id'

Tells stats to sort the assets by a given field. All of the sorting fields are allowed to be used as values for stats.assetsSort. Use ! prefix in the value to reverse the sort order by a given field.

```
module.exports = {
  //...
  stats: {
    assetsSort: '!size',
  },
};
```

### stats.assetsSpace

number = 15

Tells stats how many items of assets should be displayed (groups will be collapsed to fit this space).

```
module.exports = {
  //...
  stats: {
    assetsSpace: 15,
  },
};
```

### stats.builtAt

boolean = true

Tells stats whether to add the build date and the build time information. Set stats.builtAt to false to hide it.

```
module.exports = {
  //...
  stats: {
    builtAt: false,
  },
};
```

### stats.cached

Old version of stats.cachedModules.

### stats.cachedAssets

boolean = true

Tells stats whether to add information about the cached assets. Setting stats.cachedAssets to false will tell stats to only show the emitted files (not the ones that were built).

```
module.exports = {
  //...
  stats: {
    cachedAssets: false,
  },
};
```

### stats.cachedModules

boolean = true

Tells stats whether to add information about cached (not built) modules.

```
module.exports = {
  //...
  stats: {
    cachedModules: false,
  },
};
```

### stats.children

boolean = true

Tells stats whether to add information about the children.

```
module.exports = {
  //...
  stats: {
    children: false,
  },
};
```

### stats.chunkGroupAuxiliary

boolean = true

Display auxiliary assets in chunk groups.

```
module.exports = {
  //...
  stats: {
    chunkGroupAuxiliary: false,
  },
};
```

### stats.chunkGroupChildren

boolean = true

Display children of the chunk groups (e.g. prefetched, preloaded chunks and assets).

```
module.exports = {
  //...
  stats: {
    chunkGroupChildren: false,
  },
};
```

### stats.chunkGroupMaxAssets

number

Limit of assets displayed in chunk groups.

```
module.exports = {
  //...
  stats: {
    chunkGroupMaxAssets: 5,
  },
};
```

### stats.chunkGroups

boolean = true

Tells stats whether to add information about the namedChunkGroups.

```
module.exports = {
  //...
  stats: {
    chunkGroups: false,
  },
};
```

### stats.chunkModules

boolean = true

Tells stats whether to add information about the built modules to information about the chunk.

```
module.exports = {
  //...
  stats: {
    chunkModules: false,
  },
};
```

### stats.chunkModulesSpace

number = 10

Tells stats how many items of chunk modules should be displayed (groups will be collapsed to fit this space).

```
module.exports = {
  //...
  stats: {
    chunkModulesSpace: 15,
  },
};
```

### stats.chunkOrigins

boolean = true

Tells stats whether to add information about the origins of chunks and chunk merging.

```
module.exports = {
  //...
  stats: {
    chunkOrigins: false,
  },
};
```

### stats.chunkRelations

boolean = false

Tells stats to display chunk parents, children and siblings.

```
module.exports = {
  //...
  stats: {
    chunkRelations: false,
  },
};
```

### stats.chunks

boolean = true

Tells stats whether to add information about the chunk. Setting stats.chunks to false results in a less verbose output.

```
module.exports = {
  //...
  stats: {
    chunks: false,
  },
};
```

### stats.chunksSort

string = 'id'

Tells stats to sort the chunks by a given field. All of the sorting fields are allowed to be used as values for stats.chunksSort. Use ! prefix in the value to reverse the sort order by a given field.

```
module.exports = {
  //...
  stats: {
    chunksSort: 'name',
  },
};
```

### stats.colors

boolean = false { bold?: string, cyan?: string, green?: string, magenta?: string, red?: string, yellow?: string }

Tells stats whether to output in the different colors.

```
module.exports = {
  //...
  stats: {
    colors: true,
  },
};
```

It is also available as a CLI flag:

```
npx webpack --stats-colors
```

To disable:

```
npx webpack --no-stats-colors
```

You can specify your own terminal output colors using ANSI escape sequences

```
module.exports = {
  //...
  colors: {
    green: '\u001b[32m',
  },
};
```

### stats.context

string

The stats base directory, an absolute path for shortening the request information.

```
const path = require('path');

module.exports = {
  //...
  stats: {
    context: path.resolve(__dirname, 'src/components'),
  },
};
```

By default, the value of context or the Node.js current working directory is used.

### stats.dependentModules

boolean

Tells stats whether to show chunk modules that are dependencies of other modules of the chunk.

```
module.exports = {
  //...
  stats: {
    dependentModules: false,
  },
};
```

### stats.depth

boolean = false

Tells stats whether to display the distance from the entry point for each module.

```
module.exports = {
  //...
  stats: {
    depth: true,
  },
};
```

### stats.entrypoints

boolean = true "auto"

Tells stats whether to display the entry points with the corresponding bundles.

```
module.exports = {
  //...
  stats: {
    entrypoints: false,
  },
};
```

When stats.entrypoints is set to 'auto', webpack will decide automatically whether to display the entry points in the stats output.

### stats.env

boolean = false

Tells stats whether to display the --env information.

```
module.exports = {
  //...
  stats: {
    env: true,
  },
};
```

### stats.errorDetails

boolean "auto"

Tells stats whether to add the details to the errors. It defaults to 'auto' which will show error details when there're only 2 or less errors.

```
module.exports = {
  //...
  stats: {
    errorDetails: false,
  },
};
```

### stats.errorStack

boolean = true

Tells stats whether to show stack trace of errors.

```
module.exports = {
  //...
  stats: {
    errorStack: false,
  },
};
```

### stats.errors

boolean = true

Tells stats whether to display the errors.

```
module.exports = {
  //...
  stats: {
    errors: false,
  },
};
```

### stats.errorsCount

boolean = true

Add errors count.

```
module.exports = {
  //...
  stats: {
    errorsCount: false,
  },
};
```

### stats.errorsSpace

number

Tells stats to limit the number of lines to allocate for displaying an error.

```
module.exports = {
  //...
  stats: {
    errorsSpace: 5,
  },
};
```

### stats.exclude

See stats.excludeModules.

### stats.excludeAssets

array = []: string | RegExp | function (assetName) => boolean string RegExp function (assetName) => boolean

Tells stats to exclude the matching assets information. This can be done with a string, a RegExp, a function that is getting the assets name as an argument and returns a boolean. stats.excludeAssets can be an array of any of the above.

```
module.exports = {
  //...
  stats: {
    excludeAssets: [
      'filter',
      /filter/,
      (assetName) => assetName.contains('moduleA'),
    ],
  },
};
```

### stats.excludeModules

array = []: string | RegExp | function (assetName) => boolean string RegExp function (assetName) => boolean boolean: false

Tells stats to exclude the matching modules information. This can be done with a string, a RegExp, a function that is getting the module's source as an argument and returns a boolean. stats.excludeModules can be an array of any of the above. stats.excludeModules's configuration is merged with the stats.exclude's configuration value.

```
module.exports = {
  //...
  stats: {
    excludeModules: ['filter', /filter/, (moduleSource) => true],
  },
};
```

Setting stats.excludeModules to false will disable the exclude behaviour.

```
module.exports = {
  //...
  stats: {
    excludeModules: false,
  },
};
```

### stats.groupAssetsByChunk

boolean

Tells stats whether to group assets by how their are related to chunks.

```
module.exports = {
  //...
  stats: {
    groupAssetsByChunk: false,
  },
};
```

### stats.groupAssetsByEmitStatus

boolean

Tells stats whether to group assets by their status (emitted, compared for emit or cached).

```
module.exports = {
  //...
  stats: {
    groupAssetsByEmitStatus: false,
  },
};
```

### stats.groupAssetsByExtension

boolean

Tells stats whether to group assets by their extension.

```
module.exports = {
  //...
  stats: {
    groupAssetsByExtension: false,
  },
};
```

### stats.groupAssetsByInfo

boolean

Tells stats whether to group assets by their asset info (immutable, development, hotModuleReplacement, etc).

```
module.exports = {
  //...
  stats: {
    groupAssetsByInfo: false,
  },
};
```

### stats.groupAssetsByPath

boolean

Tells stats whether to group assets by their asset path.

```
module.exports = {
  //...
  stats: {
    groupAssetsByPath: false,
  },
};
```

### stats.groupModulesByAttributes

boolean

Tells stats whether to group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent).

```
module.exports = {
  //...
  stats: {
    groupModulesByAttributes: false,
  },
};
```

### stats.groupModulesByCacheStatus

boolean

Tells stats whether to group modules by their cache status (cached or built and cacheable).

```
module.exports = {
  //...
  stats: {
    groupModulesByCacheStatus: true,
  },
};
```

### stats.groupModulesByExtension

boolean

Tells stats whether to group modules by their extension.

```
module.exports = {
  //...
  stats: {
    groupModulesByExtension: true,
  },
};
```

### stats.groupModulesByLayer

boolean

Tells stats whether to group modules by their layer.

```
module.exports = {
  //...
  stats: {
    groupModulesByLayer: true,
  },
};
```

### stats.groupModulesByPath

boolean

Tells stats whether to group modules by their path.

```
module.exports = {
  //...
  stats: {
    groupModulesByPath: true,
  },
};
```

### stats.groupModulesByType

boolean

Tells stats whether to group modules by their type.

```
module.exports = {
  //...
  stats: {
    groupModulesByType: true,
  },
};
```

### stats.groupReasonsByOrigin

boolean

Group reasons by their origin module to avoid large set of reasons.

```
module.exports = {
  //...
  stats: {
    groupReasonsByOrigin: true,
  },
};
```

### stats.hash

boolean = true

Tells stats whether to add information about the hash of the compilation.

```
module.exports = {
  //...
  stats: {
    hash: false,
  },
};
```

### stats.ids

boolean = false

Tells stats to add IDs of modules and chunks.

```
module.exports = {
  //...
  stats: {
    ids: true,
  },
};
```

### stats.logging

string = 'info': 'none' | 'error' | 'warn' | 'info' | 'log' | 'verbose' boolean

Tells stats whether to add logging output.

- 'none', false - disable logging
- 'error' - errors only
- 'warn' - errors and warnings only
- 'info' - errors, warnings, and info messages
- 'log', true - errors, warnings, info messages, log messages, groups, clears. Collapsed groups are displayed in a collapsed state.
- 'verbose' - log everything except debug and trace. Collapsed groups are displayed in expanded state.

```
module.exports = {
  //...
  stats: {
    logging: 'verbose',
  },
};
```

### stats.loggingDebug

array = []: string | RegExp | function (name) => boolean string RegExp function (name) => boolean

Tells stats to include the debug information of the specified loggers such as Plugins or Loaders. When stats.logging is set to false, stats.loggingDebug option is ignored.

```
module.exports = {
  //...
  stats: {
    loggingDebug: [
      'MyPlugin',
      /MyPlugin/,
      /webpack/, // To get core logging
      (name) => name.contains('MyPlugin'),
    ],
  },
};
```

### stats.loggingTrace

boolean = true

Enable stack traces in the logging output for errors, warnings and traces. Set stats.loggingTrace to hide the trace.

```
module.exports = {
  //...
  stats: {
    loggingTrace: false,
  },
};
```

### stats.moduleAssets

boolean = true

Tells stats whether to add information about assets inside modules. Set stats.moduleAssets to false to hide it.

```
module.exports = {
  //...
  stats: {
    moduleAssets: false,
  },
};
```

### stats.moduleTrace

boolean = true

Tells stats to show dependencies and the origin of warnings/errors. stats.moduleTrace is available since webpack 2.5.0.

```
module.exports = {
  //...
  stats: {
    moduleTrace: false,
  },
};
```

### stats.modules

boolean = true

Tells stats whether to add information about the built modules.

```
module.exports = {
  //...
  stats: {
    modules: false,
  },
};
```

### stats.modulesSort

string = 'id'

Tells stats to sort the modules by a given field. All of the sorting fields are allowed to be used as values for stats.modulesSort. Use ! prefix in the value to reverse the sort order by a given field.

```
module.exports = {
  //...
  stats: {
    modulesSort: 'size',
  },
};
```

### stats.modulesSpace

number = 15

Tells stats how many items of modules should be displayed (groups will be collapsed to fit this space).

```
module.exports = {
  //...
  stats: {
    modulesSpace: 15,
  },
};
```

### stats.nestedModules

boolean

Tells stats whether to add information about modules nested in other modules (like with module concatenation).

```
module.exports = {
  //...
  stats: {
    nestedModules: true,
  },
};
```

### stats.nestedModulesSpace

number = 10

Tells stats how many items of nested modules should be displayed (groups will be collapsed to fit this space).

```
module.exports = {
  //...
  stats: {
    nestedModulesSpace: 15,
  },
};
```

### stats.optimizationBailout

boolean

Tells stats to show the reasons why optimization bailed out for modules.

```
module.exports = {
  //...
  stats: {
    optimizationBailout: false,
  },
};
```

### stats.orphanModules

boolean = false

Tells stats whether to hide orphan modules. A module is an orphan if it is not included in any chunk. Orphan modules are hidden by default in stats.

```
module.exports = {
  //...
  stats: {
    orphanModules: true,
  },
};
```

### stats.outputPath

boolean = true

Tells stats to show the outputPath.

```
module.exports = {
  //...
  stats: {
    outputPath: false,
  },
};
```

### stats.performance

boolean = true

Tells stats to show performance hint when the file size exceeds performance.maxAssetSize.

```
module.exports = {
  //...
  stats: {
    performance: false,
  },
};
```

### stats.preset

string boolean: false

Sets the preset for the type of information that gets displayed. It is useful for extending stats behaviours.

```
module.exports = {
  //...
  stats: {
    preset: 'minimal',
  },
};
```

Setting value of stats.preset to false tells webpack to use 'none' stats preset.

### stats.providedExports

boolean = false

Tells stats to show the exports of the modules.

```
module.exports = {
  //...
  stats: {
    providedExports: true,
  },
};
```

### stats.publicPath

boolean = true

Tells stats to show the publicPath.

```
module.exports = {
  //...
  stats: {
    publicPath: false,
  },
};
```

### stats.reasons

boolean = true

Tells stats to add information about the reasons of why modules are included.

```
module.exports = {
  //...
  stats: {
    reasons: false,
  },
};
```

### stats.reasonsSpace

number

Space to display reasons (groups will be collapsed to fit this space).

```
module.exports = {
  //...
  stats: {
    reasonsSpace: 1000,
  },
};
```

### stats.relatedAssets

boolean = false

Tells stats whether to add information about assets that are related to other assets (like SourceMaps for assets).

```
module.exports = {
  //...
  stats: {
    relatedAssets: true,
  },
};
```

### stats.runtimeModules

boolean = true

Tells stats whether to add information about runtime modules.

```
module.exports = {
  //...
  stats: {
    runtimeModules: false,
  },
};
```

### stats.source

boolean = false

Tells stats to add the source code of modules.

```
module.exports = {
  //...
  stats: {
    source: true,
  },
};
```

### stats.timings

boolean = true

Tells stats to add the timing information.

```
module.exports = {
  //...
  stats: {
    timings: false,
  },
};
```

### stats.usedExports

boolean = false

Tells stats whether to show which exports of a module are used.

```
module.exports = {
  //...
  stats: {
    usedExports: true,
  },
};
```

### stats.version

boolean = true

Tells stats to add information about the webpack version used.

```
module.exports = {
  //...
  stats: {
    version: false,
  },
};
```

### stats.warnings

boolean = true

Tells stats to add warnings.

```
module.exports = {
  //...
  stats: {
    warnings: false,
  },
};
```

### stats.warningsCount

boolean = true

Add warnings count.

```
module.exports = {
  //...
  stats: {
    warningsCount: false,
  },
};
```

### stats.warningsFilter

array = []: string | RegExp | function (warning) => boolean string RegExp function (warning) => boolean

Tells stats to exclude the warnings that are matching given filters. This can be done with a string, a RegExp, a function that is getting a warning as an argument and returns a boolean. stats.warningsFilter can be an array of any of the above.

```
module.exports = {
  //...
  stats: {
    warningsFilter: ['filter', /filter/, (warning) => true],
  },
};
```

### stats.warningsSpace

number

Tells stats to limit the number of lines to allocate for displaying a warning.

```
module.exports = {
  //...
  stats: {
    warningsSpace: 5,
  },
};
```

### Sorting fields

For assetsSort, chunksSort, and modulesSort there are several possible fields that you can sort items by:

- 'id' - the item's id,
- 'name' - the item's name that was assigned to it upon importing,
- 'size' - the size of item in bytes,
- 'chunks' - what chunks the item originates from (for example, if there are multiple subchunks for one chunk: the subchunks will be grouped according to their main chunk),
- 'errors' - number of errors in items,
- 'warnings' - number of warnings in items,
- 'failed' - whether the item has failed compilation,
- 'cacheable' - whether the item is cacheable,
- 'built' - whether the asset has been built,
- 'prefetched' - whether the asset will be prefetched,
- 'optional' - whether the asset is optional.
- 'identifier' - identifier of the item.
- 'index' - item's processing index.
- 'index2'
- 'profile'
- 'issuer' - an identifier of the issuer.
- 'issuerId' - an id of the issuer.
- 'issuerName' - a name of the issuer.
- 'issuerPath' - a full issuer object. There's no real need to sort by this field.

### Extending stats behaviours

If you want to use one of the presets e.g. 'minimal' but still override some of the rules: specify the desired stats.preset and add the customized or additional rules afterwards.

webpack.config.js

```
module.exports = {
  //..
  stats: {
    preset: 'minimal',
    moduleTrace: true,
    errorDetails: true,
  },
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/stats
