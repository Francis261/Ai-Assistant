# Node

Source: https://devdocs.io/webpack~5/configuration/node#node

The following Node.js options configure whether to polyfill or mock certain Node.js globals.

This feature is provided by webpack's internal NodeStuffPlugin plugin.

## node

false object

webpack.config.js

```
module.exports = {
  //...
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
};
```

The node option may be set to false to completely turn off the NodeStuffPlugin plugin.

## node.global

boolean 'warn'

See the Node.js documentation for the exact behavior of this object.

Options:

- true: Provide a polyfill.
- false: Provide nothing. Code that expects this object may crash with a ReferenceError.
- 'warn': Show a warning when using global.

## node.__filename

boolean 'mock' | 'warn-mock' | 'node-module' | 'eval-only'

Options:

- true: The filename of the input file relative to the context option.
- false: Webpack won't touch your __filename code, which means you have the regular Node.js __filename behavior. The filename of the output file when run in a Node.js environment.
- 'mock': The fixed value '/index.js'.
- 'warn-mock': Use the fixed value of '/index.js' but show a warning.
- 'node-module': Replace __filename in CommonJS modules to fileURLToPath(import.meta.url) when output.module is enabled.
- 'eval-only'

## node.__dirname

boolean 'mock' | 'warn-mock' | 'node-module' | 'eval-only'

Options:

- true: The dirname of the input file relative to the context option.
- false: Webpack won't touch your __dirname code, which means you have the regular Node.js __dirname behavior. The dirname of the output file when run in a Node.js environment.
- 'mock': The fixed value '/'.
- 'warn-mock': Use the fixed value of '/' but show a warning.
- 'node-module': Replace __dirname in CommonJS modules to fileURLToPath(import.meta.url + "/..") when output.module is enabled.
- 'eval-only'

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/node
