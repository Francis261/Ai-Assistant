# Module Variables

Source: https://devdocs.io/webpack~5/api/module-variables

This section covers all variables available in code compiled with webpack. Modules will have access to certain data from the compilation process through module and other variables.

## module.loaded (NodeJS)

This is false if the module is currently executing, and true if the sync execution has finished.

## module.hot (webpack-specific)

Indicates whether or not Hot Module Replacement is enabled and provides an interface to the process. See the HMR API page for details.

## module.id (CommonJS)

The ID of the current module.

```
module.id === require.resolve('./file.js');
```

## module.exports (CommonJS)

Defines the value that will be returned when a consumer makes a require call to the module (defaults to a new object).

```
module.exports = function doSomething() {
  // Do something...
};
```

## exports (CommonJS)

This variable is equal to the default value of module.exports (i.e. an object). If module.exports gets overwritten, exports will no longer be exported.

```
exports.someValue = 42;
exports.anObject = {
  x: 123,
};
exports.aFunction = function doSomething() {
  // Do something
};
```

## global (NodeJS)

See node.js global.

For compatibility reasons webpack polyfills the global variable by default.

## __dirname (NodeJS)

Depending on the configuration option node.__dirname:

- false: Not defined
- mock: equal to '/'
- true: node.js __dirname

If used inside an expression that is parsed by the Parser, the configuration option is treated as true.

## import.meta

The import.meta exposes context-specific metadata to a JavaScript module, such as the URL of the module. It is only available in ESM.

Please note that webpack does not support direct access to import.meta. Instead, you should access its properties or use destructuring assignment. E.g.,

```
// webpack will warn about this
Object.keys(import.meta);

// fine to use
console.log(import.meta.url);
const { url } = import.meta;
```

### import.meta.url

Returns the absolute file: URL of the module.

src/index.js

```
console.log(import.meta.url); // output something like `file:///path/to/your/project/src/index.js`
```

### import.meta.webpack

Returns the webpack version.

src/index.js

```
console.log(import.meta.webpack); // output `5` for webpack 5
```

### import.meta.webpackHot

Webpack specific. An alias for module.hot, however import.meta.webpackHot can be used in strict ESM while module.hot can't.

### import.meta.webpackContext

Returns the same value as require.context but only for javascript/auto and javascript/esm.

- Type: (
 request: string,
 options?: {
 recursive?: boolean;
 regExp?: RegExp;
 include?: RegExp;
 exclude?: RegExp;
 preload?: boolean | number;
 prefetch?: boolean | number;
 chunkName?: string;
 exports?: string | string[][];
 mode?: 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once';
 }
) => webpack.Context;
- Available: 5.70.0+
- Example: const contextRequire = import.meta.webpackContext('.', {
 recursive: false,
 regExp: /two/,
 mode: 'weak',
 exclude: /three/,
});

Type:

```
(
  request: string,
  options?: {
    recursive?: boolean;
    regExp?: RegExp;
    include?: RegExp;
    exclude?: RegExp;
    preload?: boolean | number;
    prefetch?: boolean | number;
    chunkName?: string;
    exports?: string | string[][];
    mode?: 'sync' | 'eager' | 'weak' | 'lazy' | 'lazy-once';
  }
) => webpack.Context;
```

Available: 5.70.0+

Example:

```
const contextRequire = import.meta.webpackContext('.', {
  recursive: false,
  regExp: /two/,
  mode: 'weak',
  exclude: /three/,
});
```

## __filename (NodeJS)

Depending on the configuration option node.__filename:

- false: Not defined
- mock: equal to '/index.js'
- true: node.js __filename

If used inside an expression that is parsed by the Parser, the configuration option is treated as true.

## __resourceQuery (webpack-specific)

The resource query of the current module. If the following require call was made, then the query string would be available in file.js.

```
require('file.js?test');
```

file.js

```
__resourceQuery === '?test';
```

## __webpack_public_path__ (webpack-specific)

Equals the configuration option's output.publicPath.

## __webpack_require__ (webpack-specific)

The raw require function. This expression isn't parsed by the Parser for dependencies.

## __webpack_chunk_load__ (webpack-specific)

The internal chunk loading function. Takes one argument:

- chunkId The id for the chunk to load.

Example to load chunks from alternate public path when one failed:

```
const originalLoad = __webpack_chunk_load__;
const publicPaths = ['a', 'b', 'c'];
__webpack_chunk_load__ = async (id) => {
  let error;
  for (const path of publicPaths) {
    __webpack_public_path__ = path;
    try {
      return await originalLoad(id);
    } catch (e) {
      error = e;
    }
  }
  throw error;
};
import('./module-a').then((moduleA) => {
  // now webpack will use the custom __webpack_chunk_load__ to load chunk
});
```

## __webpack_module__ (webpack-specific)

It provides access to the the current module. module is not available in strict ESM.

## __webpack_module__.id (webpack-specific)

It provides access to the ID of current module (module.id). module is not available in strict ESM.

## __webpack_modules__ (webpack-specific)

Access to the internal object of all modules.

## __webpack_hash__ (webpack-specific)

It provides access to the hash of the compilation.

## __webpack_get_script_filename__ (webpack-specific)

function (chunkId)

It provides filename of the chunk by its id.

It is assignable, which allows changing the filename used by the runtime. For example, it can be used to determine the final path when loading chunks.

```
const oldFn = __webpack_get_script_filename__;

__webpack_get_script_filename__ = (chunkId) => {
  const filename = oldFn(chunkId);
  return filename + '.changed';
};
```

## __non_webpack_require__ (webpack-specific)

Generates a require function that is not parsed by webpack. Can be used to do cool stuff with a global require function if available.

## __webpack_exports_info__ (webpack-specific)

In modules, __webpack_exports_info__ is available to allow exports introspection:

- __webpack_exports_info__ is always true
- __webpack_exports_info__.<exportName>.used is false when the export is known to be unused, true otherwise
- __webpack_exports_info__.<exportName>.useInfo is
  - false when the export is known to be unused
  - true when the export is known to be used
  - null when the export usage could depend on runtime conditions
  - undefined when no info is available
- __webpack_exports_info__.<exportName>.provideInfo is
  - false when the export is known to be not provided
  - true when the export is known to be provided
  - null when the export provision could depend on runtime conditions
  - undefined when no info is available
- Accessing the info from nested exports is possible: i. e. __webpack_exports_info__.<exportName>.<exportName>.<exportName>.used
- Check whether exports can be mangled with __webpack_exports_info__.<name>.canMangle

__webpack_exports_info__ is always true

__webpack_exports_info__.<exportName>.used is false when the export is known to be unused, true otherwise

__webpack_exports_info__.<exportName>.useInfo is

- false when the export is known to be unused
- true when the export is known to be used
- null when the export usage could depend on runtime conditions
- undefined when no info is available

__webpack_exports_info__.<exportName>.provideInfo is

- false when the export is known to be not provided
- true when the export is known to be provided
- null when the export provision could depend on runtime conditions
- undefined when no info is available

Accessing the info from nested exports is possible: i. e. __webpack_exports_info__.<exportName>.<exportName>.<exportName>.used

Check whether exports can be mangled with __webpack_exports_info__.<name>.canMangle

## __webpack_is_included__ (webpack-specific)

Test whether or not the given module is bundled by webpack.

```
if (__webpack_is_included__('./module-a.js')) {
  // do something
}
```

## __webpack_base_uri__ (webpack-specific)

Change base URI at runtime.

- Type: string
- Available: 5.21.0+
- Example: __webpack_base_uri__ = 'https://example.com';

Type: string

Available: 5.21.0+

Example:

```
__webpack_base_uri__ = 'https://example.com';
```

## __webpack_runtime_id__

Access the runtime id of current entry.

This is a webpack specific feature and it's available since webpack 5.25.0.

src/index.js

```
console.log(__webpack_runtime_id__ === 'main');
```

## DEBUG (webpack-specific)

Equals the configuration option debug.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/api/module-variables
