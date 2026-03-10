# Output

Source: https://devdocs.io/webpack~5/configuration/output#outputscripttype

The top-level output key contains a set of options instructing webpack on how and where it should output your bundles, assets, and anything else you bundle or load with webpack.

## output.assetModuleFilename

string = '[hash][ext][query]' function (pathData, assetInfo) => string

The same as output.filename but for Asset Modules.

[name], [file], [query], [fragment], [base], and [path] are set to an empty string for the assets built from data URI replacements.

## output.asyncChunks

boolean = true

Create async chunks that are loaded on demand.

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    asyncChunks: true,
  },
};
```

## output.auxiliaryComment

string object

When used in tandem with output.library and output.libraryTarget, this option allows users to insert comments within the export wrapper. To insert the same comment for each libraryTarget type, set auxiliaryComment to a string:

webpack.config.js

```
module.exports = {
  //...
  output: {
    library: 'someLibName',
    libraryTarget: 'umd',
    filename: 'someLibName.js',
    auxiliaryComment: 'Test Comment',
  },
};
```

which will yield the following:

someLibName.js

```
(function webpackUniversalModuleDefinition(root, factory) {
  // Test Comment
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('lodash'));
  // Test Comment
  else if (typeof define === 'function' && define.amd)
    define(['lodash'], factory);
  // Test Comment
  else if (typeof exports === 'object')
    exports['someLibName'] = factory(require('lodash'));
  // Test Comment
  else root['someLibName'] = factory(root['_']);
})(this, function (__WEBPACK_EXTERNAL_MODULE_1__) {
  // ...
});
```

For fine-grained control over each libraryTarget comment, pass an object:

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    auxiliaryComment: {
      root: 'Root Comment',
      commonjs: 'CommonJS Comment',
      commonjs2: 'CommonJS2 Comment',
      amd: 'AMD Comment',
    },
  },
};
```

## output.charset

boolean = true

Tells webpack to add charset="utf-8" to the HTML <script> tag.

## output.chunkFilename

string = '[id].js' function (pathData, assetInfo) => string

This option determines the name of non-initial chunk files. See output.filename option for details on the possible values.

Note that these filenames need to be generated at runtime to send the requests for chunks. Because of this, placeholders like [name] and [chunkhash] need to add a mapping from chunk id to placeholder value to the output bundle with the webpack runtime. This increases the size and may invalidate the bundle when placeholder value for any chunk changes.

By default [id].js is used or a value inferred from output.filename ([name] is replaced with [id] or [id]. is prepended).

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    chunkFilename: '[id].js',
  },
};
```

Usage as a function:

webpack.config.js

```
module.exports = {
  //...
  output: {
    chunkFilename: (pathData) => {
      return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
    },
  },
};
```

## output.chunkFormat

false string: 'array-push' | 'commonjs' | 'module' | <any string>

The format of chunks (formats included by default are 'array-push' (web/WebWorker), 'commonjs' (node.js), 'module' (ESM), but others might be added by plugins).

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    chunkFormat: 'commonjs',
  },
};
```

## output.chunkLoadTimeout

number = 120000

The Number of milliseconds before chunk request expires. This option is supported since webpack 2.6.0.

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    chunkLoadTimeout: 30000,
  },
};
```

## output.chunkLoadingGlobal

string = 'webpackChunkwebpack'

The global variable is used by webpack for loading chunks.

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    chunkLoadingGlobal: 'myCustomFunc',
  },
};
```

## output.chunkLoading

false string: 'jsonp' | 'import-scripts' | 'require' | 'async-node' | 'import' | <any string>

The method to load chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins).

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    chunkLoading: 'async-node',
  },
};
```

## output.clean

boolean { dry?: boolean, keep?: RegExp | string | ((filename: string) => boolean) }

```
module.exports = {
  //...
  output: {
    clean: true, // Clean the output directory before emit.
  },
};
```

```
module.exports = {
  //...
  output: {
    clean: {
      dry: true, // Log the assets that should be removed instead of deleting them.
    },
  },
};
```

```
module.exports = {
  //...
  output: {
    clean: {
      keep: /ignored\/dir\//, // Keep these assets under 'ignored/dir'.
    },
  },
};

// or

module.exports = {
  //...
  output: {
    clean: {
      keep(asset) {
        return asset.includes('ignored/dir');
      },
    },
  },
};
```

You can also use it with hook:

```
webpack.CleanPlugin.getCompilationHooks(compilation).keep.tap(
  'Test',
  (asset) => {
    if (/ignored\/dir\//.test(asset)) return true;
  }
);
```

## output.compareBeforeEmit

boolean = true

Tells webpack to check if to be emitted file already exists and has the same content before writing to the output file system.

```
module.exports = {
  //...
  output: {
    compareBeforeEmit: false,
  },
};
```

## output.crossOriginLoading

boolean = false string: 'anonymous' | 'use-credentials'

Tells webpack to enable cross-origin loading of chunks. Only takes effect when the target is set to 'web', which uses JSONP for loading on-demand chunks, by adding script tags.

- 'anonymous' - Enable cross-origin loading without credentials
- 'use-credentials' - Enable cross-origin loading with credentials

## output.cssChunkFilename

string function (pathData, assetInfo) => string

This option determines the name of non-initial CSS output files on disk. See output.filename option for details on the possible values.

You must not specify an absolute path here. However, feel free to include folders separated by '/'. This specified path combines with the output.path value to pinpoint the location on the disk.

## output.cssFilename

string function (pathData, assetInfo) => string

This option determines the name of CSS output files on disk. See output.filename option for details on the possible values.

You must not specify an absolute path here. However, feel free to include folders separated by '/'. This specified path combines with the output.path value to pinpoint the location on the disk.

## output.devtoolFallbackModuleFilenameTemplate

string function (info)

A fallback is used when the template string or function above yields duplicates.

See output.devtoolModuleFilenameTemplate.

## output.devtoolModuleFilenameTemplate

string = 'webpack://[namespace]/[resource-path]?[loaders]' function (info) => string

This option is only used when devtool uses an option that requires module names.

Customize the names used in each source map's sources array. This can be done by passing a template string or function. For example, when using devtool: 'eval'.

webpack.config.js

```
module.exports = {
  //...
  output: {
    devtoolModuleFilenameTemplate:
      'webpack://[namespace]/[resource-path]?[loaders]',
  },
};
```

The following substitutions are available in template strings (via webpack's internal ModuleFilenameHelpers):

When using a function, the same options are available camel-cased via the info parameter:

```
module.exports = {
  //...
  output: {
    devtoolModuleFilenameTemplate: (info) => {
      return `webpack:///${info.resourcePath}?${info.loaders}`;
    },
  },
};
```

If multiple modules would result in the same name, output.devtoolFallbackModuleFilenameTemplate is used instead for these modules.

## output.devtoolNamespace

string

This option determines the module's namespace used with the output.devtoolModuleFilenameTemplate. When not specified, it will default to the value of: output.uniqueName. It's used to prevent source file path collisions in sourcemaps when loading multiple libraries built with webpack.

For example, if you have 2 libraries, with namespaces library1 and library2, which both have a file ./src/index.js (with potentially different contents), they will expose these files as webpack://library1/./src/index.js and webpack://library2/./src/index.js.

You can use template strings like [name] to dynamically generate namespaces based on the build context, providing additional flexibility.

webpack.config.js

```
module.exports = {
  //...
  output: {
    filename: '[name]-bundle.js',
    library: 'library-[name]',
    libraryTarget: 'commonjs',
    devtoolNamespace: 'library-[name]', // Sets a unique namespace for each library
  },
};
```

## output.enabledChunkLoadingTypes

[string: 'jsonp' | 'import-scripts' | 'require' | 'async-node' | <any string>]

List of chunk loading types enabled for use by entry points. Will be automatically filled by webpack. Only needed when using a function as entry option and returning chunkLoading option from there.

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    enabledChunkLoadingTypes: ['jsonp', 'require'],
  },
};
```

## output.enabledLibraryTypes

[string]

List of library types enabled for use by entry points.

```
module.exports = {
  //...
  output: {
    enabledLibraryTypes: ['module'],
  },
};
```

## output.enabledWasmLoadingTypes

[string]

List of wasm loading types enabled for use by entry points.

```
module.exports = {
  //...
  output: {
    enabledWasmLoadingTypes: ['fetch'],
  },
};
```

## output.environment

Tell webpack what kind of ES-features may be used in the generated runtime-code.

```
module.exports = {
  output: {
    environment: {
      // The environment supports arrow functions ('() => { ... }').
      arrowFunction: true,
      // The environment supports async function and await ('async function () { await ... }').
      asyncFunction: true,
      // The environment supports BigInt as literal (123n).
      bigIntLiteral: false,
      // The environment supports const and let for variable declarations.
      const: true,
      // The environment supports destructuring ('{ a, b } = obj').
      destructuring: true,
      // The environment supports 'document' variable.
      document: true,
      // The environment supports an async import() function to import EcmaScript modules.
      dynamicImport: false,
      // The environment supports an async import() when creating a worker, only for web targets at the moment.
      dynamicImportInWorker: false,
      // The environment supports 'for of' iteration ('for (const x of array) { ... }').
      forOf: true,
      // The environment supports 'globalThis'.
      globalThis: true,
      // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
      module: false,
      // Determines if the node: prefix is generated for core module imports in environments that support it.
      // This is only applicable to Webpack runtime code.
      nodePrefixForCoreModules: false,
      // The environment supports optional chaining ('obj?.a' or 'obj?.()').
      optionalChaining: true,
      // The environment supports template literals.
      templateLiteral: true,
    },
  },
};
```

## output.filename

string function (pathData, assetInfo) => string

This option determines the name of each output bundle. The bundle is written to the directory specified by the output.path option.

For a single entry point, this can be a static name.

webpack.config.js

```
module.exports = {
  //...
  output: {
    filename: 'bundle.js',
  },
};
```

However, when creating multiple bundles via more than one entry point, code splitting, or various plugins, you should use one of the following substitutions to give each bundle a unique name...

Using entry name:

webpack.config.js

```
module.exports = {
  //...
  output: {
    filename: '[name].bundle.js',
  },
};
```

Using internal chunk id:

webpack.config.js

```
module.exports = {
  //...
  output: {
    filename: '[id].bundle.js',
  },
};
```

Using hashes generated from the generated content:

webpack.config.js

```
module.exports = {
  //...
  output: {
    filename: '[contenthash].bundle.js',
  },
};
```

Combining multiple substitutions:

webpack.config.js

```
module.exports = {
  //...
  output: {
    filename: '[name].[contenthash].bundle.js',
  },
};
```

Using the function to return the filename:

webpack.config.js

```
module.exports = {
  //...
  output: {
    filename: (pathData) => {
      return pathData.chunk.name === 'main' ? '[name].js' : '[name]/[name].js';
    },
  },
};
```

Make sure to read the Caching guide for details. There are more steps involved than only setting this option.

Note this option is called filename but you are still allowed to use something like 'js/[name]/bundle.js' to create a folder structure.

### Template strings

The following substitutions are available in template strings (via webpack's internal TemplatedPathPlugin):

Substitutions available on Compilation-level:

Substitutions available on Chunk-level:

Substitutions available on Module-level:

Substitutions available on File-level:

Substitutions available on URL-level:

The length of hashes ([hash], [contenthash] or [chunkhash]) can be specified using [hash:16] (defaults to 20). Alternatively, specify output.hashDigestLength to configure the length globally.

It is possible to filter out placeholder replacement when you want to use one of the placeholders in the actual file name. For example, to output a file [name].js, you have to escape the [name] placeholder by adding backslashes between the brackets. So that [\name\] generates [name] instead of getting replaced with the name of the asset.

Example: [\id\] generates [id] instead of getting replaced with the id.

If using a function for this option, the function will be passed an object containing data for the substitutions in the table above. Substitutions will be applied to the returned string too. The passed object will have this type: (properties available depending on context)

```
type PathData = {
  hash: string;
  hashWithLength: (number) => string;
  chunk: Chunk | ChunkPathData;
  module: Module | ModulePathData;
  contentHashType: string;
  contentHash: string;
  contentHashWithLength: (number) => string;
  filename: string;
  url: string;
  runtime: string | SortableSet<string>;
  chunkGraph: ChunkGraph;
};
type ChunkPathData = {
  id: string | number;
  name: string;
  hash: string;
  hashWithLength: (number) => string;
  contentHash: Record<string, string>;
  contentHashWithLength: Record<string, (number) => string>;
};
type ModulePathData = {
  id: string | number;
  hash: string;
  hashWithLength: (number) => string;
};
```

## output.globalObject

string = 'self'

When targeting a library, especially when library.type is 'umd', this option indicates what global object will be used to mount the library. To make UMD build available on both browsers and Node.js, set output.globalObject option to 'this'. Defaults to self for Web-like targets.

The return value of your entry point will be assigned to the global object using the value of output.library.name. Depending on the value of the type option, the global object could change respectively, e.g., self, global, or globalThis.

For example:

webpack.config.js

```
module.exports = {
  // ...
  output: {
    library: {
      name: 'myLib',
      type: 'umd',
    },
    filename: 'myLib.js',
    globalObject: 'this',
  },
};
```

## output.hashDigest

string = 'hex'

The encoding to use when generating the hash. All encodings from Node.JS' hash.digest are supported. Using 'base64' for filenames might be problematic since it has the character / in its alphabet. Likewise 'latin1' could contain any character.

## output.hashDigestLength

number = 20

The prefix length of the hash digest to use.

## output.hashFunction

string = 'md4' function

The hashing algorithm to use. All functions from Node.JS' crypto.createHash are supported. Since 4.0.0-alpha2, the hashFunction can now be a constructor to a custom hash function. You can provide a non-crypto hash function for performance reasons.

```
module.exports = {
  //...
  output: {
    hashFunction: require('metrohash').MetroHash64,
  },
};
```

Make sure that the hashing function will have an update and digest methods available.

## output.hashSalt

An optional salt to update the hash via Node.JS' hash.update.

## output.hotUpdateChunkFilename

string = '[id].[fullhash].hot-update.js'

Customize the filenames of hot update chunks. See output.filename option for details on the possible values.

The only placeholders allowed here are [id] and [fullhash], the default being:

webpack.config.js

```
module.exports = {
  //...
  output: {
    hotUpdateChunkFilename: '[id].[fullhash].hot-update.js',
  },
};
```

## output.hotUpdateGlobal

string

Only used when target is set to 'web', which uses JSONP for loading hot updates.

A JSONP function is used to asynchronously load hot-update chunks.

For details see output.chunkLoadingGlobal.

## output.hotUpdateMainFilename

string = '[runtime].[fullhash].hot-update.json' function

Customize the main hot update filename. [fullhash] and [runtime] are available as placeholder.

## output.iife

boolean = true

Tells webpack to add IIFE wrapper around emitted code.

```
module.exports = {
  //...
  output: {
    iife: true,
  },
};
```

## output.ignoreBrowserWarnings

boolean = false

Hide warnings from the browser console in production. This option does not affect the terminal/console output.

webpack.config.js

```
module.exports = {
  //...
  output: {
    ignoreBrowserWarnings: true,
  },
};
```

## output.importFunctionName

string = 'import'

The name of the native import() function. Can be used for polyfilling, e.g. with dynamic-import-polyfill.

webpack.config.js

```
module.exports = {
  //...
  output: {
    importFunctionName: '__import__',
  },
};
```

## output.importMetaName

string

The name of the native import.meta object (can be exchanged for a polyfill).

webpack.config.js

```
module.exports = {
  //...
  output: {
    importMetaName: 'pseudoImport.meta',
  },
};
```

## output.library

Output a library exposing the exports of your entry point.

- Type: string | string[] | object

Let's take a look at an example.

webpack.config.js

```
module.exports = {
  // …
  entry: './src/index.js',
  output: {
    library: 'MyLibrary',
  },
};
```

Say you have exported a function in your src/index.js entry:

```
export function hello(name) {
  console.log(`hello ${name}`);
}
```

Now the variable MyLibrary will be bound with the exports of your entry file, and here's how to consume the webpack bundled library:

```
<script src="https://example.org/path/to/my-library.js"></script>
<script>
  MyLibrary.hello('webpack');
</script>
```

In the above example, we're passing a single entry file to entry, however, webpack can accept many kinds of entry point, e.g., an array, or an object.

1. If you provide an array as the entry point, only the last one in the array will be exposed. module.exports = {
 // …
 entry: ['./src/a.js', './src/b.js'], // only exports in b.js will be exposed
 output: {
 library: 'MyLibrary',
 },
};
2. If an object is provided as the entry point, all entries can be exposed using the array syntax of library: module.exports = {
 // …
 entry: {
 a: './src/a.js',
 b: './src/b.js',
 },
 output: {
 filename: '[name].js',
 library: ['MyLibrary', '[name]'], // name is a placeholder here
 },
}; Assuming that both a.js and b.js export a function hello, here's how to consume the libraries: <script src="https://example.org/path/to/a.js"></script>
<script src="https://example.org/path/to/b.js"></script>
<script>
 MyLibrary.a.hello('webpack');
 MyLibrary.b.hello('webpack');
</script> See this example for more. Note that the above configuration won't work as expected if you're going to configure library options per entry point. Here is how to do it under each of your entries: module.exports = {
 // …
 entry: {
 main: {
 import: './src/index.js',
 library: {
 // all options under `output.library` can be used here
 name: 'MyLibrary',
 type: 'umd',
 umdNamedDefine: true,
 },
 },
 another: {
 import: './src/another.js',
 library: {
 name: 'AnotherLibrary',
 type: 'commonjs2',
 },
 },
 },
};

If you provide an array as the entry point, only the last one in the array will be exposed.

```
module.exports = {
  // …
  entry: ['./src/a.js', './src/b.js'], // only exports in b.js will be exposed
  output: {
    library: 'MyLibrary',
  },
};
```

If an object is provided as the entry point, all entries can be exposed using the array syntax of library:

```
module.exports = {
  // …
  entry: {
    a: './src/a.js',
    b: './src/b.js',
  },
  output: {
    filename: '[name].js',
    library: ['MyLibrary', '[name]'], // name is a placeholder here
  },
};
```

Assuming that both a.js and b.js export a function hello, here's how to consume the libraries:

```
<script src="https://example.org/path/to/a.js"></script>
<script src="https://example.org/path/to/b.js"></script>
<script>
  MyLibrary.a.hello('webpack');
  MyLibrary.b.hello('webpack');
</script>
```

See this example for more.

Note that the above configuration won't work as expected if you're going to configure library options per entry point. Here is how to do it under each of your entries:

```
module.exports = {
  // …
  entry: {
    main: {
      import: './src/index.js',
      library: {
        // all options under `output.library` can be used here
        name: 'MyLibrary',
        type: 'umd',
        umdNamedDefine: true,
      },
    },
    another: {
      import: './src/another.js',
      library: {
        name: 'AnotherLibrary',
        type: 'commonjs2',
      },
    },
  },
};
```

### output.library.amdContainer

Use a container(defined in global space) for calling define/require functions in an AMD module.

```
module.exports = {
  // …
  output: {
    library: {
      amdContainer: 'window["clientContainer"]',
      type: 'amd', // or 'amd-require'
    },
  },
};
```

Which will result in the following bundle:

```
window['clientContainer'].define(/*define args*/); // or 'amd-require' window['clientContainer'].require(/*require args*/);
```

### output.library.name

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
    },
  },
};
```

Specify a name for the library.

- Type: string | string[] | {amd?: string, commonjs?: string, root?: string | string[]}

Type:

```
string | string[] | {amd?: string, commonjs?: string, root?: string | string[]}
```

### output.library.type

Configure how the library will be exposed.

- Type: string Types included by default are 'var', 'module', 'modern-module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp' and 'system', but others might be added by plugins.

Type: string

Types included by default are 'var', 'module', 'modern-module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp' and 'system', but others might be added by plugins.

For the following examples, we'll use _entry_return_ to indicate the values returned by the entry point.

#### Expose a Variable

These options assign the return value of the entry point (e.g. whatever the entry point exported) to the name provided by output.library.name at whatever scope the bundle was included at.

##### type: 'var'

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
      type: 'var',
    },
  },
};
```

When your library is loaded, the return value of your entry point will be assigned to a variable:

```
var MyLibrary = _entry_return_;

// In a separate script with `MyLibrary` loaded…
MyLibrary.doSomething();
```

##### type: 'assign'

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
      type: 'assign',
    },
  },
};
```

This will generate an implied global which has the potential to reassign an existing value (use with caution):

```
MyLibrary = _entry_return_;
```

Be aware that if MyLibrary isn't defined earlier your library will be set in global scope.

##### type: 'assign-properties'

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
      type: 'assign-properties',
    },
  },
};
```

Similar to type: 'assign' but a safer option as it will reuse MyLibrary if it already exists:

```
// only create MyLibrary if it doesn't exist
MyLibrary = typeof MyLibrary === 'undefined' ? {} : MyLibrary;
// then copy the return value to MyLibrary
// similarly to what Object.assign does

// for instance, you export a `hello` function in your entry as follow
export function hello(name) {
  console.log(`Hello ${name}`);
}

// In another script with MyLibrary loaded
// you can run `hello` function like so
MyLibrary.hello('World');
```

#### Expose Via Object Assignment

These options assign the return value of the entry point (e.g. whatever the entry point exported) to a specific object under the name defined by output.library.name.

##### type: 'this'

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
      type: 'this',
    },
  },
};
```

The return value of your entry point will be assigned to this under the property named by output.library.name. The meaning of this is up to you:

```
this['MyLibrary'] = _entry_return_;

// In a separate script...
this.MyLibrary.doSomething();
MyLibrary.doSomething(); // if `this` is window
```

##### type: 'window'

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
      type: 'window',
    },
  },
};
```

The return value of your entry point will be assigned to the window object using the output.library.name value.

```
window['MyLibrary'] = _entry_return_;

window.MyLibrary.doSomething();
```

##### type: 'global'

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
      type: 'global',
    },
  },
};
```

The return value of your entry point will be assigned to the global object using the output.library.name value. Depending on the target value, the global object could change respectively, e.g., self, global or globalThis.

```
global['MyLibrary'] = _entry_return_;

global.MyLibrary.doSomething();
```

##### type: 'commonjs'

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
      type: 'commonjs',
    },
  },
};
```

The return value of your entry point will be assigned to the exports object using the output.library.name value. As the name implies, this is used in CommonJS environments.

```
exports['MyLibrary'] = _entry_return_;

require('MyLibrary').doSomething();
```

#### Module Definition Systems

These options will result in a bundle that comes with a complete header to ensure compatibility with various module systems. The output.library.name option will take on a different meaning under the following output.library.type options.

##### type: 'module'

```
module.exports = {
  // …
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      // do not specify a `name` here
      type: 'module',
    },
  },
};
```

Output ES Module.

However this feature is still experimental and not fully supported yet, so make sure to enable experiments.outputModule beforehand. In addition, you can track the development progress in this thread.

##### type: 'modern-module'

```
module.exports = {
  // …
  experiments: {
    outputModule: true,
  },
  output: {
    library: {
      // do not specify a `name` here
      type: 'modern-module',
    },
  },
};
```

This configuration generates tree-shakable output for ES Modules.

However this feature is still experimental and not fully supported yet, so make sure to enable experiments.outputModule beforehand.

##### type: 'commonjs2'

```
module.exports = {
  // …
  output: {
    library: {
      // note there's no `name` here
      type: 'commonjs2',
    },
  },
};
```

The return value of your entry point will be assigned to the module.exports. As the name implies, this is used in Node.js (CommonJS) environments:

```
module.exports = _entry_return_;

require('MyLibrary').doSomething();
```

If we specify output.library.name with type: commmonjs2, the return value of your entry point will be assigned to the module.exports.[output.library.name].

##### type: 'commonjs-module'

commonjs-module is equivalent to commonjs2. We may remove commonjs-module in future versions.

##### type: 'commonjs-static'

```
module.exports = {
  // …
  output: {
    library: {
      // note there's no `name` here
      type: 'commonjs-static',
    },
  },
};
```

Individual exports will be set as properties on module.exports. The "static" in the name refers to the output being statically analysable, and thus named exports are importable into ESM via Node.js:

Input:

```
export function doSomething() {}
```

Output:

```
function doSomething() {}

// …

exports.doSomething = __webpack_exports__.doSomething;
```

Consumption (CommonJS):

```
const { doSomething } = require('./output.cjs'); // doSomething => [Function: doSomething]
```

Consumption (ESM):

```
import { doSomething } from './output.cjs'; // doSomething => [Function: doSomething]
```

##### type: 'amd'

This will expose your library as an AMD module.

AMD modules require that the entry chunk (e.g. the first script loaded by the <script> tag) be defined with specific properties, such as to define and require which is typically provided by RequireJS or any compatible loaders (such as almond). Otherwise, loading the resulting AMD bundle directly will result in an error like define is not defined.

With the following configuration...

```
module.exports = {
  //...
  output: {
    library: {
      name: 'MyLibrary',
      type: 'amd',
    },
  },
};
```

The generated output will be defined with the name "MyLibrary", i.e.:

```
define('MyLibrary', [], function () {
  return _entry_return_;
});
```

The bundle can be included as part of a script tag, and the bundle can be invoked like so:

```
require(['MyLibrary'], function (MyLibrary) {
  // Do something with the library...
});
```

If output.library.name is undefined, the following is generated instead.

```
define(function () {
  return _entry_return_;
});
```

This bundle will not work as expected, or not work at all (in the case of the almond loader) if loaded directly with a <script> tag. It will only work through a RequireJS compatible asynchronous module loader through the actual path to that file, so in this case, the output.path and output.filename may become important for this particular setup if these are exposed directly on the server.

##### type: 'amd-require'

```
module.exports = {
  //...
  output: {
    library: {
      name: 'MyLibrary',
      type: 'amd-require',
    },
  },
};
```

This packages your output with an immediately executed AMD require(dependencies, factory) wrapper.

The 'amd-require' type allows for the use of AMD dependencies without needing a separate later invocation. As with the 'amd' type, this depends on the appropriate require function being available in the environment in which the webpack output is loaded.

With this type, the library name can't be used.

##### type: 'umd'

This exposes your library under all the module definitions, allowing it to work with CommonJS, AMD, and as global variable. Take a look at the UMD Repository to learn more.

In this case, you need the library.name property to name your module:

```
module.exports = {
  //...
  output: {
    library: {
      name: 'MyLibrary',
      type: 'umd',
    },
  },
};
```

And finally the output is:

```
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['MyLibrary'] = factory();
  else root['MyLibrary'] = factory();
})(global, function () {
  return _entry_return_;
});
```

Note that omitting library.name will result in the assignment of all properties returned by the entry point be assigned directly to the root object, as documented under the object assignment section. Example:

```
module.exports = {
  //...
  output: {
    type: 'umd',
  },
};
```

The output will be:

```
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(global, function () {
  return _entry_return_;
});
```

You may specify an object for library.name for differing names per targets:

```
module.exports = {
  //...
  output: {
    library: {
      name: {
        root: 'MyLibrary',
        amd: 'my-library',
        commonjs: 'my-common-library',
      },
      type: 'umd',
    },
  },
};
```

##### type: 'system'

This will expose your library as a System.register module. This feature was first released in webpack 4.30.0.

System modules require that a global variable System is present in the browser when the webpack bundle is executed. Compiling to System.register format allows you to System.import('/bundle.js') without additional configuration and has your webpack bundle loaded into the System module registry.

```
module.exports = {
  //...
  output: {
    library: {
      type: 'system',
    },
  },
};
```

Output:

```
System.register([], function (__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
  return {
    execute: function () {
      // ...
    },
  };
});
```

By adding output.library.name to configuration in addition to having output.library.type set to system, the output bundle will have the library name as an argument to System.register:

```
System.register(
  'MyLibrary',
  [],
  function (__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
    return {
      execute: function () {
        // ...
      },
    };
  }
);
```

#### Other Types

##### type: 'jsonp'

```
module.exports = {
  // …
  output: {
    library: {
      name: 'MyLibrary',
      type: 'jsonp',
    },
  },
};
```

This will wrap the return value of your entry point into a jsonp wrapper.

```
MyLibrary(_entry_return_);
```

The dependencies for your library will be defined by the externals config.

### output.library.export

Specify which export should be exposed as a library.

- Type: string | string[]

It is undefined by default, which will export the whole (namespace) object. The examples below demonstrate the effect of this configuration when using output.library.type: 'var'.

```
module.exports = {
  output: {
    library: {
      name: 'MyLibrary',
      type: 'var',
      export: 'default',
    },
  },
};
```

The default export of your entry point will be assigned to the library name:

```
// if your entry has a default export
var MyLibrary = _entry_return_.default;
```

You can pass an array to output.library.export as well, it will be interpreted as a path to a module to be assigned to the library name:

```
module.exports = {
  output: {
    library: {
      name: 'MyLibrary',
      type: 'var',
      export: ['default', 'subModule'],
    },
  },
};
```

And here's the library code:

```
var MyLibrary = _entry_return_.default.subModule;
```

### output.library.auxiliaryComment

Add a comment in the UMD wrapper.

- Type: string | { amd?: string, commonjs?: string, commonjs2?: string, root?: string }

To insert the same comment for each umd type, set auxiliaryComment to a string:

```
module.exports = {
  // …
  mode: 'development',
  output: {
    library: {
      name: 'MyLibrary',
      type: 'umd',
      auxiliaryComment: 'Test Comment',
    },
  },
};
```

which will yield the following:

```
(function webpackUniversalModuleDefinition(root, factory) {
  //Test Comment
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  //Test Comment
  else if (typeof define === 'function' && define.amd) define([], factory);
  //Test Comment
  else if (typeof exports === 'object') exports['MyLibrary'] = factory();
  //Test Comment
  else root['MyLibrary'] = factory();
})(self, function () {
  return _entry_return_;
});
```

For fine-grained control, pass an object:

```
module.exports = {
  // …
  mode: 'development',
  output: {
    library: {
      name: 'MyLibrary',
      type: 'umd',
      auxiliaryComment: {
        root: 'Root Comment',
        commonjs: 'CommonJS Comment',
        commonjs2: 'CommonJS2 Comment',
        amd: 'AMD Comment',
      },
    },
  },
};
```

### output.library.umdNamedDefine

boolean

When using output.library.type: "umd", setting output.library.umdNamedDefine to true will name the AMD module of the UMD build. Otherwise, an anonymous define is used.

```
module.exports = {
  //...
  output: {
    library: {
      name: 'MyLibrary',
      type: 'umd',
      umdNamedDefine: true,
    },
  },
};
```

The AMD module will be:

```
define('MyLibrary', [], factory);
```

## output.libraryExport

string [string]

Configure which module or modules will be exposed via the libraryTarget. It is undefined by default, same behaviour will be applied if you set libraryTarget to an empty string e.g. '' it will export the whole (namespace) object. The examples below demonstrate the effect of this configuration when using libraryTarget: 'var'.

The following configurations are supported:

libraryExport: 'default' - The default export of your entry point will be assigned to the library target:

```
// if your entry has a default export of `MyDefaultModule`
var MyDefaultModule = _entry_return_.default;
```

libraryExport: 'MyModule' - The specified module will be assigned to the library target:

```
var MyModule = _entry_return_.MyModule;
```

libraryExport: ['MyModule', 'MySubModule'] - The array is interpreted as a path to a module to be assigned to the library target:

```
var MySubModule = _entry_return_.MyModule.MySubModule;
```

With the libraryExport configurations specified above, the resulting libraries could be utilized as such:

```
MyDefaultModule.doSomething();
MyModule.doSomething();
MySubModule.doSomething();
```

## output.libraryTarget

string = 'var'

Configure how the library will be exposed. Any one of the following options can be used. Please note that this option works in conjunction with the value assigned to output.library. For the following examples, it is assumed that the value of output.library is configured as MyLibrary.

### Expose a Variable

These options assign the return value of the entry point (e.g. whatever the entry point exported) to the name provided by output.library at whatever scope the bundle was included at.

#### libraryTarget: 'var'

When your library is loaded, the return value of your entry point will be assigned to a variable:

```
var MyLibrary = _entry_return_;

// In a separate script...
MyLibrary.doSomething();
```

#### libraryTarget: 'assign'

This will generate an implied global which has the potential to reassign an existing value (use with caution):

```
MyLibrary = _entry_return_;
```

Be aware that if MyLibrary isn't defined earlier your library will be set in the global scope.

#### libraryTarget: 'assign-properties'

Copy the return value to a target object if it exists, otherwise create the target object first:

```
// create the target object if it doesn't exist
MyLibrary = typeof MyLibrary === 'undefined' ? {} : MyLibrary;
// then copy the return value to MyLibrary
// similarly to what Object.assign does

// for instance, you export a `hello` function in your entry as follow
export function hello(name) {
  console.log(`Hello ${name}`);
}

// In another script running MyLibrary
// you can run `hello` function like so
MyLibrary.hello('World');
```

### Expose Via Object Assignment

These options assign the return value of the entry point (e.g. whatever the entry point exported) to a specific object under the name defined by output.library.

If output.library is not assigned a non-empty string, the default behavior is that all properties returned by the entry point will be assigned to the object as defined for the particular output.libraryTarget, via the following code fragment:

```
(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(output.libraryTarget, _entry_return_);
```

#### libraryTarget: 'this'

The return value of your entry point will be assigned to this under the property named by output.library. The meaning of this is up to you:

```
this['MyLibrary'] = _entry_return_;

// In a separate script...
this.MyLibrary.doSomething();
MyLibrary.doSomething(); // if this is window
```

#### libraryTarget: 'window'

The return value of your entry point will be assigned to the window object using the output.library value.

```
window['MyLibrary'] = _entry_return_;

window.MyLibrary.doSomething();
```

#### libraryTarget: 'global'

The return value of your entry point will be assigned to the global object using the output.library value.

```
global['MyLibrary'] = _entry_return_;

global.MyLibrary.doSomething();
```

#### libraryTarget: 'commonjs'

The return value of your entry point will be assigned to the exports object using the output.library value. As the name implies, this is used in CommonJS environments.

```
exports['MyLibrary'] = _entry_return_;

require('MyLibrary').doSomething();
```

### Module Definition Systems

These options will result in a bundle that comes with a complete header to ensure compatibility with various module systems. The output.library option will take on a different meaning under the following output.libraryTarget options.

#### libraryTarget: 'module'

Output ES Module. Make sure to enable experiments.outputModule beforehand.

Note that this feature is not fully supported yet, please track the progress in this thread.

#### libraryTarget: 'commonjs2'

The return value of your entry point will be assigned to the module.exports. As the name implies, this is used in CommonJS environments:

```
module.exports = _entry_return_;

require('MyLibrary').doSomething();
```

Note that output.library can't be used with this particular output.libraryTarget, for further details, please read this issue.

#### libraryTarget: 'amd'

This will expose your library as an AMD module.

AMD modules require that the entry chunk (e.g. the first script loaded by the <script> tag) be defined with specific properties, such as to define and require which is typically provided by RequireJS or any compatible loaders (such as almond). Otherwise, loading the resulting AMD bundle directly will result in an error like define is not defined.

With the following configuration...

```
module.exports = {
  //...
  output: {
    library: 'MyLibrary',
    libraryTarget: 'amd',
  },
};
```

The generated output will be defined with the name "MyLibrary", i.e.

```
define('MyLibrary', [], function () {
  return _entry_return_;
});
```

The bundle can be included as part of a script tag, and the bundle can be invoked like so:

```
require(['MyLibrary'], function (MyLibrary) {
  // Do something with the library...
});
```

If output.library is undefined, the following is generated instead.

```
define([], function () {
  return _entry_return_;
});
```

This bundle will not work as expected, or not work at all (in the case of the almond loader) if loaded directly with a <script> tag. It will only work through a RequireJS compatible asynchronous module loader through the actual path to that file, so in this case, the output.path and output.filename may become important for this particular setup if these are exposed directly on the server.

#### libraryTarget: 'amd-require'

This packages your output with an immediately executed AMD require(dependencies, factory) wrapper.

The 'amd-require' target allows for the use of AMD dependencies without needing a separate later invocation. As with the 'amd' target, this depends on the appropriate require function being available in the environment in which the webpack output is loaded.

With this target, the library name is ignored.

#### libraryTarget: 'umd'

This exposes your library under all the module definitions, allowing it to work with CommonJS, AMD and as a global variable. Take a look at the UMD Repository to learn more.

In this case, you need the library property to name your module:

```
module.exports = {
  //...
  output: {
    library: 'MyLibrary',
    libraryTarget: 'umd',
  },
};
```

And finally the output is:

```
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['MyLibrary'] = factory();
  else root['MyLibrary'] = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  return _entry_return_;
});
```

Note that omitting the library will result in the assignment of all properties returned by the entry point be assigned directly to the root object, as documented under the object assignment section. Example:

```
module.exports = {
  //...
  output: {
    libraryTarget: 'umd',
  },
};
```

The output will be:

```
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(typeof self !== 'undefined' ? self : this, function () {
  return _entry_return_;
});
```

Since webpack 3.1.0, you may specify an object for library for differing names per targets:

```
module.exports = {
  //...
  output: {
    library: {
      root: 'MyLibrary',
      amd: 'my-library',
      commonjs: 'my-common-library',
    },
    libraryTarget: 'umd',
  },
};
```

#### libraryTarget: 'system'

This will expose your library as a System.register module. This feature was first released in webpack 4.30.0.

System modules require that a global variable System is present in the browser when the webpack bundle is executed. Compiling to System.register format allows you to System.import('/bundle.js') without additional configuration and has your webpack bundle loaded into the System module registry.

```
module.exports = {
  //...
  output: {
    libraryTarget: 'system',
  },
};
```

Output:

```
System.register([], function (_export) {
  return {
    setters: [],
    execute: function () {
      // ...
    },
  };
});
```

By adding output.library to configuration in addition to having output.libraryTarget set to system, the output bundle will have the library name as an argument to System.register:

```
System.register('my-library', [], function (_export) {
  return {
    setters: [],
    execute: function () {
      // ...
    },
  };
});
```

You can access SystemJS context via __system_context__:

```
// Log the URL of the current SystemJS module
console.log(__system_context__.meta.url);

// Import a SystemJS module, with the current SystemJS module's url as the parentUrl
__system_context__.import('./other-file.js').then((m) => {
  console.log(m);
});
```

### Other Targets

#### libraryTarget: 'jsonp'

This will wrap the return value of your entry point into a jsonp wrapper.

```
MyLibrary(_entry_return_);
```

The dependencies for your library will be defined by the externals config.

## output.module

boolean = false

Output JavaScript files as module type. Disabled by default as it's an experimental feature.

When enabled, webpack will set output.iife to false, output.scriptType to 'module' and terserOptions.module to true internally.

If you're using webpack to compile a library to be consumed by others, make sure to set output.libraryTarget to 'module' when output.module is true.

```
module.exports = {
  //...
  experiments: {
    outputModule: true,
  },
  output: {
    module: true,
  },
};
```

## output.path

string = path.join(process.cwd(), 'dist')

The output directory as an absolute path.

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
  },
};
```

Note that [fullhash] in this parameter will be replaced with a hash of the compilation. See the Caching guide for details.

## output.pathinfo

boolean=true string: 'verbose'

Tells webpack to include comments in bundles with information about the contained modules. This option defaults to true in development and false in production mode respectively. 'verbose' shows more information like exports, runtime requirements and bailouts.

webpack.config.js

```
module.exports = {
  //...
  output: {
    pathinfo: true,
  },
};
```

## output.publicPath

- Type:
  - function
  - string output.publicPath defaults to 'auto' with web and web-worker targets, see this guide for its use cases.

Type:

- function
- string output.publicPath defaults to 'auto' with web and web-worker targets, see this guide for its use cases.

function

string

output.publicPath defaults to 'auto' with web and web-worker targets, see this guide for its use cases.

This is an important option when using on-demand-loading or loading external resources like images, files, etc. If an incorrect value is specified you'll receive 404 errors while loading these resources.

This option specifies the public URL of the output directory when referenced in a browser. A relative URL is resolved relative to the HTML page (or <base> tag). Server-relative URLs, protocol-relative URLs or absolute URLs are also possible and sometimes required, i. e. when hosting assets on a CDN.

The value of the option is prefixed to every URL created by the runtime or loaders. Because of this the value of this option ends with / in most cases.

A rule to consider: The URL of your output.path from the view of the HTML page.

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  output: {
    path: path.resolve(__dirname, 'public/assets'),
    publicPath: 'https://cdn.example.com/assets/',
  },
};
```

For this configuration:

webpack.config.js

```
module.exports = {
  //...
  output: {
    publicPath: '/assets/',
    chunkFilename: '[id].chunk.js',
  },
};
```

A request to a chunk will look like /assets/4.chunk.js.

A loader outputting HTML might emit something like this:

```
<link href="/assets/spinner.gif" />
```

or when loading an image in CSS:

```
background-image: url(/assets/spinner.gif);
```

The webpack-dev-server also takes a hint from publicPath, using it to determine where to serve the output files from.

Note that [fullhash] in this parameter will be replaced with a hash of the compilation. See the Caching guide for details.

Examples:

```
module.exports = {
  //...
  output: {
    // One of the below
    publicPath: 'auto', // It automatically determines the public path from either `import.meta.url`, `document.currentScript`, `<script />` or `self.location`.
    publicPath: 'https://cdn.example.com/assets/', // CDN (always HTTPS)
    publicPath: '//cdn.example.com/assets/', // CDN (same protocol)
    publicPath: '/assets/', // server-relative
    publicPath: 'assets/', // relative to HTML page
    publicPath: '../assets/', // relative to HTML page
    publicPath: '', // relative to HTML page (same directory)
  },
};
```

In cases where the publicPath of output files can't be known at compile time, it can be left blank and set dynamically at runtime in the entry file using the free variable __webpack_public_path__.

```
__webpack_public_path__ = myRuntimePublicPath;

// rest of your application entry
```

See this discussion for more information on __webpack_public_path__.

## output.scriptType

string: 'module' | 'text/javascript' boolean = false

This option allows loading asynchronous chunks with a custom script type, such as <script type="module" ...>.

```
module.exports = {
  //...
  output: {
    scriptType: 'module',
  },
};
```

## output.sourceMapFilename

string = '[file].map[query]'

Configure how source maps are named. Only takes effect when devtool is set to 'source-map', which writes an output file.

The [name], [id], [fullhash] and [chunkhash] substitutions from output.filename can be used. In addition to those, you can use substitutions listed under Filename-level in Template strings.

## output.sourcePrefix

string = ''

Change the prefix for each line in the output bundles.

webpack.config.js

```
module.exports = {
  //...
  output: {
    sourcePrefix: '\t',
  },
};
```

## output.strictModuleErrorHandling

Handle error in module loading as per EcmaScript Modules spec at a performance cost.

- Type: boolean
- Available: 5.25.0+

```
module.exports = {
  //...
  output: {
    strictModuleErrorHandling: true,
  },
};
```

## output.strictModuleExceptionHandling

boolean = false

Tell webpack to remove a module from the module instance cache (require.cache) if it throws an exception when it is required.

It defaults to false for performance reasons.

When set to false, the module is not removed from cache, which results in the exception getting thrown only on the first require call (making it incompatible with node.js).

For instance, consider module.js:

```
throw new Error('error');
```

With strictModuleExceptionHandling set to false, only the first require throws an exception:

```
// with strictModuleExceptionHandling = false
require('module'); // <- throws
require('module'); // <- doesn't throw
```

Instead, with strictModuleExceptionHandling set to true, all requires of this module throw an exception:

```
// with strictModuleExceptionHandling = true
require('module'); // <- throws
require('module'); // <- also throws
```

## output.trustedTypes

true string object

Controls Trusted Types compatibility. When enabled, webpack will detect Trusted Types support and, if they are supported, use Trusted Types policies to create script URLs it loads dynamically. Use when the application runs under a require-trusted-types-for Content Security Policy directive.

It is disabled by default (no compatibility, script URLs are strings).

- When set to true, webpack will use output.uniqueName as the Trusted Types policy name.
- When set to a non-empty string, its value will be used as a policy name.
- When set to an object, the policy name is taken from the object's policyName property.

webpack.config.js

```
module.exports = {
  //...
  output: {
    //...
    trustedTypes: {
      policyName: 'my-application#webpack',
    },
  },
};
```

### output.trustedTypes.onPolicyCreationFailure

string = 'stop': 'continue' | 'stop'

Determine whether to proceed with loading in anticipation that require-trusted-types-for 'script' has not been enforced or to immediately fail when the call to trustedTypes.createPolicy(...) fails due to the policy name being absent from the CSP trusted-types list or being a duplicate.

```
module.exports = {
  //...
  output: {
    //...
    trustedTypes: {
      policyName: 'my-application#webpack',
      onPolicyCreationFailure: 'continue',
    },
  },
};
```

## output.umdNamedDefine

boolean

When using libraryTarget: "umd", setting output.umdNamedDefine to true will name the AMD module of the UMD build. Otherwise an anonymous define is used.

```
module.exports = {
  //...
  output: {
    umdNamedDefine: true,
  },
};
```

## output.uniqueName

string

A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals. It defaults to output.library name or the package name from package.json in the context, if both aren't found, it is set to an ''.

output.uniqueName will be used to generate unique globals for:

- output.chunkLoadingGlobal

webpack.config.js

```
module.exports = {
  // ...
  output: {
    uniqueName: 'my-package-xyz',
  },
};
```

## output.wasmLoading

false 'fetch-streaming' | 'fetch' | 'async-node' string

Option to set the method of loading WebAssembly Modules. Methods included by default are 'fetch' (web/WebWorker), 'async-node' (Node.js), but others might be added by plugins.

The default value can be affected by different target:

- Defaults to 'fetch' if target is set to 'web', 'webworker', 'electron-renderer' or 'node-webkit'.
- Defaults to 'async-node' if target is set to 'node', 'async-node', 'electron-main' or 'electron-preload'.

```
module.exports = {
  //...
  output: {
    wasmLoading: 'fetch',
  },
};
```

## output.webassemblyModuleFilename

string = '[hash].module.wasm'

Specifies the filename of WebAssembly modules. It should be provided as a relative path within the output.path directory

```
module.exports = {
  //...
  output: {
    webassemblyModuleFilename: '[id].[hash].wasm',
  },
};
```

## output.workerChunkLoading

string: 'require' | 'import-scripts' | 'async-node' | 'import' | 'universal' boolean: false

The new option workerChunkLoading controls the chunk loading of workers.

webpack.config.js

```
module.exports = {
  //...
  output: {
    workerChunkLoading: false,
  },
};
```

## output.workerPublicPath

string

Set a public path for Worker, defaults to value of output.publicPath. Only use this option if your worker scripts are located in a different path from your other scripts.

webpack.config.js

```
module.exports = {
  //...
  output: {
    workerPublicPath: '/workerPublicPath2/',
  },
};
```

## output.workerWasmLoading

false 'fetch-streaming' | 'fetch' | 'async-node' string

Option to set the method of loading WebAssembly Modules in workers, defaults to the value of output.wasmLoading.

webpack.config.js

```
module.exports = {
  //...
  output: {
    workerWasmLoading: 'fetch',
  },
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/output
