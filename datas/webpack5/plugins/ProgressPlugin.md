# ProgressPlugin

Source: https://devdocs.io/webpack~5/plugins/progress-plugin

The ProgressPlugin provides a way to customize how progress is reported during a compilation.

## Usage

Create an instance of ProgressPlugin and provide one of the allowed params, besides, there's a static method createDefaultHandler which can be used to customize the default handler.

### Providing function

Provide a handler function which will be called when hooks report progress. handler function arguments:

- percentage: a number between 0 and 1 indicating the completion percentage of the compilation
- message: a short description of the currently-executing hook
- ...args: zero or more additional strings describing the current progress

```
const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

new webpack.ProgressPlugin(handler);
```

### Providing object

When providing an object to the ProgressPlugin, following properties are supported:

- activeModules (boolean = false): Shows active modules count and one active module in progress message.
- entries (boolean = true): Shows entries count in progress message.
- handler (See Providing function)
- modules (boolean = true): Shows modules count in progress message.
- modulesCount (number = 5000): A minimum modules count to start with. Takes effect when modules property is enabled.
- profile (boolean = false): Tells ProgressPlugin to collect profile data for progress steps.
- dependencies (boolean = true): Shows the count of dependencies in progress message.
- dependenciesCount (number = 10000): A minimum dependencies count to start with. Takes effect when dependencies property is enabled.
- percentBy (string = null: 'entries' | 'dependencies' | 'modules' | null): Tells ProgressPlugin how to calculate progress percentage.

```
new webpack.ProgressPlugin({
  activeModules: false,
  entries: true,
  handler(percentage, message, ...args) {
    // custom logic
  },
  modules: true,
  modulesCount: 5000,
  profile: false,
  dependencies: true,
  dependenciesCount: 10000,
  percentBy: null,
});
```

### webpack.ProgressPlugin.createDefaultHandler

If the default handler of ProgressPlugin does not meet your requirements, you can customize it using the static ProgressPlugin.createDefaultHandler method.

```
static createDefaultHandler: (
  profile: undefined | null | boolean,
  logger: WebpackLogger
) => (percentage: number, msg: string, ...args: string[]) => void;
```

## Percentage calculation

By default, progress percentage is calculated based on built modules count and total modules count: built / total

The total modules count is unknown in advance and changes during the build. This may cause inaccurate progress percentage.

To solve this problem ProgressPlugin caches the last known total modules count and reuses this value on the next build. The first build will warm the cache but the following builds will use and update this value.

We recommend using percentBy: 'entries' setting for projects with multiple configured entry points. Percentage calculation will become more accurate because the amount of entry points is known in advance.

## Supported Hooks

The following hooks report progress information to ProgressPlugin.

Compiler

- compilation
- emit*
- afterEmit*
- done

Compilation

- buildModule
- failedModule
- succeedModule
- finishModules*
- seal*
- optimizeDependenciesBasic*
- optimizeDependencies*
- optimizeDependenciesAdvanced*
- afterOptimizeDependencies*
- optimize*
- optimizeModulesBasic*
- optimizeModules*
- optimizeModulesAdvanced*
- afterOptimizeModules*
- optimizeChunksBasic*
- optimizeChunks*
- optimizeChunksAdvanced*
- afterOptimizeChunks*
- optimizeTree*
- afterOptimizeTree*
- optimizeChunkModulesBasic*
- optimizeChunkModules*
- optimizeChunkModulesAdvanced*
- afterOptimizeChunkModules*
- reviveModules*
- optimizeModuleOrder*
- advancedOptimizeModuleOrder*
- beforeModuleIds*
- moduleIds*
- optimizeModuleIds*
- afterOptimizeModuleIds*
- reviveChunks*
- optimizeChunkOrder*
- beforeChunkIds*
- optimizeChunkIds*
- afterOptimizeChunkIds*
- recordModules*
- recordChunks*
- beforeHash*
- afterHash*
- recordHash*
- beforeModuleAssets*
- beforeChunkAssets*
- additionalChunkAssets*
- record*
- additionalAssets*
- optimizeChunkAssets*
- afterOptimizeChunkAssets*
- optimizeAssets*
- afterOptimizeAssets*
- afterSeal*

## Source

- ProgressPlugin source

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/progress-plugin
