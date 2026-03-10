# expose-loader

Source: https://devdocs.io/webpack~5/loaders/expose-loader

The expose-loader loader allows to expose a module (in whole or in part) to global object (self, window and global).

For further hints on compatibility issues, check out Shimming of the official docs.

## Getting Started

To begin, you'll need to install expose-loader:

```
npm install expose-loader --save-dev
```

or

```
yarn add -D expose-loader
```

or

```
pnpm add -D expose-loader
```

(If you're using WebPack 4, install expose-loader@1 and follow the corresponding instructions instead.)

Then you can use the expose-loader using two approaches.

## Inline

The | or %20 (space) allow to separate the globalName, moduleLocalName and override of expose. The documentation and syntax examples can be read here.

[!WARNING]

%20 is space in a query string, because you can't use spaces in URLs

```
import $ from "expose-loader?exposes=$,jQuery!jquery";
//
// Adds the `jquery` to the global object under the names `$` and `jQuery`
```

```
import { concat } from "expose-loader?exposes=_.concat!lodash/concat";
//
// Adds the `lodash/concat` to the global object under the name `_.concat`
```

```
import {
  map,
  reduce,
} from "expose-loader?exposes=_.map|map,_.reduce|reduce!underscore";
//
// Adds the `map` and `reduce` method from `underscore` to the global object under the name `_.map` and `_.reduce`
```

## Using Configuration

src/index.js

```
import $ from "jquery";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: ["$", "jQuery"],
        },
      },
      {
        test: require.resolve("underscore"),
        loader: "expose-loader",
        options: {
          exposes: [
            "_.map|map",
            {
              globalName: "_.reduce",
              moduleLocalName: "reduce",
            },
            {
              globalName: ["_", "filter"],
              moduleLocalName: "filter",
            },
          ],
        },
      },
    ],
  },
};
```

The require.resolve call is a Node.js function (unrelated to require.resolve in webpack processing). require.resolve gives you the absolute path to the module ("/.../app/node_modules/jquery/dist/jquery.js"). So the expose only applies to the jquery module. And it's only exposed when used in the bundle.

And run webpack via your preferred method.

## Options

### exposes

Type:

```
type exposes =
  | string
  | {
      globalName: string | Array<string>;
      moduleLocalName?: string;
      override?: boolean;
    }
  | Array<
      | string
      | {
          globalName: string | Array<string>;
          moduleLocalName?: string;
          override?: boolean;
        }
    >;
```

Default: undefined

List of exposes.

#### string

Allows to use a string to describe an expose.

##### syntax

The | or %20 (space) allow to separate the globalName, moduleLocalName and override of expose.

String syntax - [[globalName] [moduleLocalName] [override]] or [[globalName]|[moduleLocalName]|[override]], where:

- globalName - the name in the global object, for example window.$ for a browser environment (required)
- moduleLocalName - the name of method/variable/etc of the module (the module must export it) (may be omitted)
- override - allows to override existing value in the global object (may be omitted)

If moduleLocalName is not specified, it exposes the entire module to the global object, otherwise it exposes only the value of moduleLocalName.

src/index.js

```
import $ from "jquery";
import _ from "underscore";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          // For `underscore` library, it can be `_.map map` or `_.map|map`
          exposes: "$",
          // To access please use `window.$` or `globalThis.$`
        },
      },
      {
        // test: require.resolve("jquery"),
        test: /node_modules[/\\]underscore[/\\]modules[/\\]index-all\.js$/,
        loader: "expose-loader",
        type: "javascript/auto",
        options: {
          // For `underscore` library, it can be `_.map map` or `_.map|map`
          exposes: "_",
          // To access please use `window._` or `globalThis._`
        },
      },
    ],
  },
};
```

#### object

Allows to use an object to describe an expose.

##### globalName

Type:

```
type globalName = string | Array<string>;
```

Default: undefined

The name in the global object. (required).

src/index.js

```
import _ from "underscore";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /node_modules[/\\]underscore[/\\]modules[/\\]index-all\.js$/,
        loader: "expose-loader",
        type: "javascript/auto",
        options: {
          exposes: {
            // Can be `['_', 'filter']`
            globalName: "_.filter",
            moduleLocalName: "filter",
          },
        },
      },
    ],
  },
};
```

##### moduleLocalName

Type:

```
type moduleLocalName = string;
```

Default: undefined

The name of method/variable/etc of the module (the module must export it). If moduleLocalName is specified, it exposes only the value of moduleLocalName.

src/index.js

```
import _ from "underscore";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /node_modules[/\\]underscore[/\\]modules[/\\]index-all\.js$/,
        loader: "expose-loader",
        type: "javascript/auto",
        options: {
          exposes: {
            globalName: "_.filter",
            moduleLocalName: "filter",
          },
        },
      },
    ],
  },
};
```

##### override

Type:

```
type override = boolean;
```

Default: false

By default, loader does not override the existing value in the global object, because it is unsafe. In development mode, we throw an error if the value already present in the global object. But you can configure loader to override the existing value in the global object using this option.

To force override the value that is already present in the global object you can set the override option to the true value.

src/index.js

```
import $ from "jquery";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("jquery"),
        loader: "expose-loader",
        options: {
          exposes: {
            globalName: "$",
            override: true,
          },
        },
      },
    ],
  },
};
```

#### array

src/index.js

```
import _ from "underscore";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /node_modules[/\\]underscore[/\\]modules[/\\]index-all\.js$/,
        loader: "expose-loader",
        type: "javascript/auto",
        options: {
          exposes: [
            "_.map map",
            {
              globalName: "_.filter",
              moduleLocalName: "filter",
            },
            {
              globalName: ["_", "find"],
              moduleLocalName: "myNameForFind",
            },
          ],
        },
      },
    ],
  },
};
```

It will expose only map, filter and find (under myNameForFind name) methods to the global object.

In a browser these methods will be available under windows._.map(..args), windows._.filter(...args) and windows._.myNameForFind(...args) methods.

### globalObject

```
type globalObject = string;
```

Default: undefined

Object used for global context

```
import _ from "underscore";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /node_modules[/\\]underscore[/\\]modules[/\\]index-all\.js$/,
        loader: "expose-loader",
        type: "javascript/auto",
        options: {
          exposes: [
            {
              globalName: "_",
            },
          ],
          globalObject: "this",
        },
      },
    ],
  },
};
```

## Examples

### Expose a local module

index.js

```
import { method1 } from "./my-module.js";
```

my-module.js

```
function method1() {
  console.log("method1");
}

function method2() {
  console.log("method1");
}

export { method1, method2 };
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /my-module\.js$/,
        loader: "expose-loader",
        options: {
          exposes: "mod",
          // // To access please use `window.mod` or `globalThis.mod`
        },
      },
    ],
  },
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/loaders/expose-loader
