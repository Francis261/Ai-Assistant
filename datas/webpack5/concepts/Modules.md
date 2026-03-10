# Modules

Source: https://devdocs.io/webpack~5/concepts/modules

In modular programming, developers break programs up into discrete chunks of functionality called a module.

Each module has a smaller surface area than a full program, making verification, debugging, and testing trivial. Well-written modules provide solid abstractions and encapsulation boundaries, so that each module has a coherent design and a clear purpose within the overall application.

Node.js has supported modular programming almost since its inception. On the web, however, support for modules has been slow to arrive. Multiple tools exist that support modular JavaScript on the web, with a variety of benefits and limitations. Webpack builds on lessons learned from these systems and applies the concept of modules to any file in your project.

## What is a webpack Module

In contrast to Node.js modules, webpack modules can express their dependencies in a variety of ways. A few examples are:

- An ES2015 import statement
- A CommonJS require() statement
- An AMD define and require statement
- An @import statement inside of a css/sass/less file.
- An image url in a stylesheet url(...) or HTML <img src=...> file.

## Supported Module Types

Webpack supports the following module types natively:

- ECMAScript modules
- CommonJS modules
- AMD modules
- Assets
- WebAssembly modules

In addition to that webpack supports modules written in a variety of languages and preprocessors via loaders. Loaders describe to webpack how to process non-native modules and include these dependencies into your bundles. The webpack community has built loaders for a wide variety of popular languages and language processors, including:

- CoffeeScript
- TypeScript
- ESNext (Babel)
- Sass
- Less
- Stylus
- Elm

And many others! Overall, webpack provides a powerful and rich API for customization that allows one to use webpack for any stack, while staying non-opinionated about your development, testing, and production workflows.

For a full list, see the list of loaders or write your own.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/concepts/modules
