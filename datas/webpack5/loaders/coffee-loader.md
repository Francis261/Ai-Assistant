# coffee-loader

Source: https://devdocs.io/webpack~5/loaders/coffee-loader

Compile CoffeeScript to JavaScript.

## Getting Started

To begin, you'll need to install coffeescript and coffee-loader:

```
npm install --save-dev coffeescript coffee-loader
```

or

```
yarn add -D coffeescript coffee-loader
```

or

```
pnpm add -D coffeescript coffee-loader
```

Then add the plugin to your webpack config. For example:

file.coffee

```
# Assignment:
number   = 42
opposite = true

# Conditions:
number = -42 if opposite

# Functions:
square = (x) -> x * x

# Arrays:
list = [1, 2, 3, 4, 5]

# Objects:
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x

# Splats:
race = (winner, runners...) ->
  print winner, runners

# Existence:
alert "I knew it!" if elvis?

# Array comprehensions:
cubes = (math.cube num for num in list)
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
      },
    ],
  },
};
```

Alternative usage:

```
import coffee from "coffee-loader!./file.coffee";
```

And run webpack via your preferred method.

## Options

Type: Object Default: { bare: true }

Options for CoffeeScript. All possible options you can find here.

Documentation for the transpile option you can find here.

[!NOTE]

The sourceMap option takes a value from the compiler.devtool value by default.

[!NOTE]

The filename option takes a value from webpack loader API. The option value will be ignored.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
        options: {
          bare: false,
          transpile: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
};
```

## Examples

### CoffeeScript and Babel

From CoffeeScript 2 documentation:

[!NOTE]

CoffeeScript 2 generates JavaScript that uses the latest, modern syntax. The runtime or browsers where you want your code to run might not support all of that syntax. In that case, we want to convert modern JavaScript into older JavaScript that will run in older versions of Node or older browsers; for example, { a } = obj into a = obj.a. This is done via transpilers like Babel, Bublé or Traceur Compiler.

You'll need to install @babel/core and @babel/preset-env and then create a configuration file:

```
npm install --save-dev @babel/core @babel/preset-env
echo '{ "presets": ["@babel/env"] }' > .babelrc
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
        options: {
          transpile: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
};
```

### Literate CoffeeScript

For using Literate CoffeeScript you should setup:

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.coffee$/,
        loader: "coffee-loader",
        options: {
          literate: true,
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
 https://webpack.js.org/loaders/coffee-loader
