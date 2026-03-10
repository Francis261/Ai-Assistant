# exports-loader

Source: https://devdocs.io/webpack~5/loaders/exports-loader

Allow to setup exports module.exports/export for source files.

Useful when a source file does not contain exports or something does not export.

For further hints on compatibility issues, check out Shimming of the official docs.

[!WARNING]

By default loader generate ES module named syntax.

[!WARNING]

Be careful, existing exports (export/module.exports/exports) in the original code and exporting new values can cause a failure.

## Getting Started

To begin, you'll need to install exports-loader:

```
npm install exports-loader --save-dev
```

or

```
yarn add -D exports-loader
```

or

```
pnpm add -D exports-loader
```

### Inline

The | or %20 (space) allow to separate the syntax, name and alias of export. The documentation and syntax examples can be read here.

[!WARNING]

%20 is space in a query string, because you can't use spaces in URLs

Then add the loader to the desired import statement or require calls. For example:

```
import { myFunction } from "exports-loader?exports=myFunction!./file.js";
// Adds the following code to the file's source:
//
// ...
// Code
// ...
//
// export { myFunction }

myFunction("Hello world");
```

```
import {
  myVariable,
  myFunction,
} from "exports-loader?exports=myVariable,myFunction!./file.js";
// Adds the following code to the file's source:
//
// ...
// Code
// ...
//
// export { myVariable, myFunction };

const newVariable = myVariable + "!!!";

console.log(newVariable);

myFunction("Hello world");
```

```
const {
  myFunction,
} = require("exports-loader?type=commonjs&exports=myFunction!./file.js");
// Adds the following code to the file's source:
//
// ...
// Code
// ...
//
// module.exports = { myFunction }

myFunction("Hello world");
```

```
// Alternative syntax:
// import myFunction from 'exports-loader?exports=default%20myFunction!./file.js';
import myFunction from "exports-loader?exports=default|myFunction!./file.js";
// `%20` is space in a query string, equivalently `default myFunction`
// Adds the following code to the file's source:
//
// ...
// Code
// ...
//
// exports default myFunction;

myFunction("Hello world");
```

```
const myFunction = require("exports-loader?type=commonjs&exports=single|myFunction!./file.js");
// `|` is separator in a query string, equivalently `single|myFunction`
// Adds the following code to the file's source:
//
// ...
// Code
// ...
//
// module.exports = myFunction;

myFunction("Hello world");
```

```
import { myFunctionAlias } from "exports-loader?exports=named|myFunction|myFunctionAlias!./file.js";
// `|` is separator in a query string, equivalently `named|myFunction|myFunctionAlias`
// Adds the following code to the file's source:
//
// ...
// Code
// ...
//
// exports { myFunction as myFunctionAlias };

myFunctionAlias("Hello world");
```

Description of string values can be found in the documentation below.

### Using Configuration

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        // You can use `regexp`
        // test: /vendor\.js/$
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          exports: "myFunction",
        },
      },
    ],
  },
};
```

And run webpack via your preferred method.

## Options

### type

Type: String Default: module

Format of generated exports.

Possible values - commonjs (CommonJS module syntax) and module (ES module syntax).

#### commonjs

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          type: "commonjs",
          exports: "Foo",
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

module.exports = { Foo };
```

#### module

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          type: "module",
          exports: "Foo",
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

export { Foo };
```

### exports

Type: String|Array Default: undefined

List of exports.

#### String

Allows to use a string to describe an export.

##### Syntax

The | or %20 (space) allow to separate the syntax, name and alias of export.

String syntax - [[syntax] [name] [alias]] or [[syntax]|[name]|[alias]], where:

- [syntax] (may be omitted) -
  - if type is module- can be default and named,
  - if type is commonjs- can be single and multiple
- [name] - name of an exported value (required)
- [alias] - alias of an exported value (may be omitted)

[syntax] (may be omitted) -

- if type is module- can be default and named,
- if type is commonjs- can be single and multiple

[name] - name of an exported value (required)

[alias] - alias of an exported value (may be omitted)

Examples:

- [Foo] - generates export { Foo };.
- [default Foo] - generates export default Foo;.
- [named Foo] - generates export { Foo };.
- [named Foo FooA] - generates export { Foo as FooA };.
- [single Foo] - generates module.exports = Foo;.
- [multiple Foo] - generates module.exports = { Foo };.
- [multiple Foo FooA] - generates module.exports = { 'FooA': Foo };.
- [named [name] [name]Alias] - generates ES module named exports and exports a value equal to the filename under other name., for single.js it will be single and singleAlias, generates export { single as singleAlias };.

[!WARNING]

You need to set type: "commonjs" to use single or multiple syntaxes.

[!WARNING]

Aliases can't be used together with default or single syntaxes.

##### Examples

###### ES Module Default Export

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          exports: "default Foo",
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

export default Foo;
```

###### ES Module Named Exports

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          exports: "named Foo FooA",
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

export { Foo as FooA };
```

###### CommonJS Single Export

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          type: "commonjs",
          exports: "single Foo",
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

module.exports = Foo;
```

###### CommonJS Multiple Exports

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          type: "commonjs",
          exports: "multiple Foo FooA",
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

module.exports = { FooA: Foo };
```

#### Object

Allows to use an object to describe an export.

Properties:

- syntax - can be default or named for the module type (ES modules module format), and single or multiple for the commonjs type (CommonJS module format) (may be omitted)
- name - name of an exported value (required)
- alias - alias of an exported value (may be omitted)

##### Examples

###### ES Module Default Export

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          exports: {
            syntax: "default",
            name: "Foo",
          },
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

export default Foo;
```

###### ES Module Named Exports

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          exports: {
            syntax: "named",
            name: "Foo",
            alias: "FooA",
          },
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

export { Foo as FooA };
```

###### CommonJS Single Export

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          type: "commonjs",
          exports: {
            syntax: "single",
            name: "Foo",
          },
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

module.exports = Foo;
```

###### CommonJS Multiple Exports

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          type: "commonjs",
          exports: {
            syntax: "multiple",
            name: "Foo",
            alias: "FooA",
          },
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

module.exports = { FooA: Foo };
```

#### Array

Allow to specify multiple exports. Each item can be a string or an object.

[!WARNING]

Not possible to use single and multiple syntaxes together due to CommonJS format limitations.

[!WARNING]

Not possible to use multiple default values due to ES module format limitations.

[!WARNING]

Not possible to use multiple single values due to CommonJS format limitations.

##### Examples

###### CommonJS Multiple Exports

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          type: "commonjs",
          exports: ["Foo", "multiple Bar", "multiple Baz BazA"],
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

module.exports = { Foo, Bar, BazA: Bar };
```

###### ES Module Default Export And Named Exports Together

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          exports: ["default Foo", "named Bar BarA"],
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

export default Foo;
export { Bar as BarA };
```

###### Named Exports

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("./path/to/vendor.js"),
        loader: "exports-loader",
        options: {
          exports: [
            { syntax: "named", name: "Foo", alias: "FooA" },
            { syntax: "named", name: "Bar" },
            "Baz",
          ],
        },
      },
    ],
  },
};
```

Generate output:

```
// ...
// Code
// ...

export { Foo as FooA, Bar, Baz };
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/loaders/exports-loader
