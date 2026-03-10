# Compiler Hooks

Source: https://devdocs.io/webpack~5/api/compiler-hooks

The Compiler module is the main engine that creates a compilation instance with all the options passed through the CLI or Node API. It extends the Tapable class in order to register and call plugins. Most user-facing plugins are first registered on the Compiler.

When developing a plugin for webpack, you might want to know where each hook is called. To learn this, search for hooks.<hook name>.call across the webpack source.

## Watching

The Compiler supports watching which monitors the file system and recompiles as files change. When in watch mode, the compiler will emit the additional events such as watchRun, watchClose, and invalid. This is typically used in development, usually under the hood of tools like webpack-dev-server, so that the developer doesn't need to re-compile manually every time. Watch mode can also be entered via the CLI.

## Hooks

The following lifecycle hooks are exposed by the compiler and can be accessed as such:

```
compiler.hooks.someHook.tap('MyPlugin', (params) => {
  /* ... */
});
```

Depending on the hook type, tapAsync and tapPromise may also be available.

For the description of hook types, see the Tapable docs.

### environment

SyncHook

Called while preparing the compiler environment, right after initializing the plugins in the configuration file.

### afterEnvironment

SyncHook

Called right after the environment hook, when the compiler environment setup is complete.

### entryOption

SyncBailHook

Called after the entry configuration from webpack options has been processed.

- Callback Parameters: context, entry

```
compiler.hooks.entryOption.tap('MyPlugin', (context, entry) => {
  /* ... */
});
```

### afterPlugins

SyncHook

Called after setting up initial set of internal plugins.

- Callback Parameters: compiler

### afterResolvers

SyncHook

Triggered after resolver setup is complete.

- Callback Parameters: compiler

### initialize

SyncHook

Called when a compiler object is initialized.

### beforeRun

AsyncSeriesHook

Adds a hook right before running the compiler.

- Callback Parameters: compiler

### run

AsyncSeriesHook

Hook into the compiler before it begins reading records.

- Callback Parameters: compiler

### watchRun

AsyncSeriesHook

Executes a plugin during watch mode after a new compilation is triggered but before the compilation is actually started.

- Callback Parameters: compiler

### normalModuleFactory

SyncHook

Called after a NormalModuleFactory is created.

- Callback Parameters: normalModuleFactory

### contextModuleFactory

SyncHook

Runs a plugin after a ContextModuleFactory is created.

- Callback Parameters: contextModuleFactory

### beforeCompile

AsyncSeriesHook

Executes a plugin after compilation parameters are created.

- Callback Parameters: compilationParams

The compilationParams variable is initialized as follows:

```
compilationParams = {
  normalModuleFactory,
  contextModuleFactory,
};
```

This hook can be used to add/modify the compilation parameters:

```
compiler.hooks.beforeCompile.tapAsync('MyPlugin', (params, callback) => {
  params['MyPlugin - data'] = 'important stuff my plugin will use later';
  callback();
});
```

### compile

SyncHook

Called right after beforeCompile, before a new compilation is created. This hook is not copied to child compilers.

- Callback Parameters: compilationParams

### thisCompilation

SyncHook

Executed while initializing the compilation, right before emitting the compilation event. This hook is not copied to child compilers.

- Callback Parameters: compilation, compilationParams

### compilation

SyncHook

Runs a plugin after a compilation has been created.

- Callback Parameters: compilation, compilationParams

### make

AsyncParallelHook

Executed before finishing the compilation. This hook is not copied to child compilers.

- Callback Parameters: compilation

### afterCompile

AsyncSeriesHook

Called after finishing and sealing the compilation.

- Callback Parameters: compilation

### shouldEmit

SyncBailHook

Called before emitting assets. Should return a boolean telling whether to emit.

- Callback Parameters: compilation

```
compiler.hooks.shouldEmit.tap('MyPlugin', (compilation) => {
  // return true to emit the output, otherwise false
  return true;
});
```

### emit

AsyncSeriesHook

Executed right before emitting assets to output dir. This hook is not copied to child compilers.

- Callback Parameters: compilation

### afterEmit

AsyncSeriesHook

Called after emitting assets to output directory. This hook is not copied to child compilers.

- Callback Parameters: compilation

### assetEmitted

AsyncSeriesHook

Executed when an asset has been emitted. Provides access to information about the emitted asset, such as its output path and byte content.

- Callback Parameters: file, info

For example, you may access the asset's content buffer via info.content:

```
compiler.hooks.assetEmitted.tap(
  'MyPlugin',
  (file, { content, source, outputPath, compilation, targetPath }) => {
    console.log(content); // <Buffer 66 6f 6f 62 61 72>
  }
);
```

### done

AsyncSeriesHook

Executed when the compilation has completed. This hook is not copied to child compilers.

- Callback Parameters: stats

### additionalPass

AsyncSeriesHook

This hook allows you to do a one more additional pass of the build.

### failed

SyncHook

Called if the compilation fails.

- Callback Parameters: error

### invalid

SyncHook

Executed when a watching compilation has been invalidated. This hook is not copied to child compilers.

- Callback Parameters: fileName, changeTime

### watchClose

SyncHook

Called when a watching compilation has stopped.

### shutdown

AsyncSeriesHook

Called when the compiler is closing.

### infrastructureLog

SyncBailHook

Allows to use infrastructure logging when enabled in the configuration via infrastructureLogging option.

- Callback Parameters: name, type, args

### log

SyncBailHook

Allows to log into stats when enabled, see stats.logging, stats.loggingDebug and stats.loggingTrace options.

- Callback Parameters: origin, logEntry

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/api/compiler-hooks
