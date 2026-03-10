# val-loader

Source: https://devdocs.io/webpack~5/loaders/val-loader

A webpack loader which executes a given module, and returns the result of the execution at build-time, when the module is required in the bundle. In this way, the loader changes a module from code to a result.

Another way to view val-loader, is that it allows a user a way to make their own custom loader logic, without having to write a custom loader.

The target module is called with two arguments: (options, loaderContext)

- options: The loader options (for instance provided in the webpack config. See the example below).
- loaderContext: The loader context.

## Getting Started

To begin, you'll need to install val-loader:

```
npm install val-loader --save-dev
```

```
yarn add -D val-loader
```

```
pnpm add -D val-loader
```

Then add the loader to your webpack config. For example:

target-file.js

```
module.exports = (options, loaderContext) => {
  return { code: "module.exports = 42;" };
};
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /target-file.js$/,
        use: [
          {
            loader: `val-loader`,
          },
        ],
      },
    ],
  },
};
```

src/entry.js

```
const answer = require("target-file");
```

And run webpack via your preferred method.

## Options

- executableFile

### executableFile

Type:

```
type executableFile = string;
```

Default: undefined

Allows to specify path to the executable file

data.json

```
{
  "years": "10"
}
```

executable-file.js

```
module.exports = function yearsInMs(options, loaderContext, content) {
  const { years } = JSON.parse(content);
  const value = years * 365 * 24 * 60 * 60 * 1000;

  return {
    cacheable: true,
    code: "module.exports = " + value,
  };
};
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.(json)$/i,
        rules: [
          {
            loader: "val-loader",
            options: {
              executableFile: path.resolve(
                __dirname,
                "fixtures",
                "executableFile.js",
              ),
            },
          },
        ],
      },
      {
        test: /\.json$/i,
        type: "asset/resource",
      },
    ],
  },
};
```

## Return Object Properties

Targeted modules of this loader must export a Function that returns an object, or a Promise resolving an object (e.g. async function), containing a code property at a minimum, but can contain any number of additional properties.

### code

Type:

```
type code = string | Buffer;
```

Default: undefined Required

Code passed along to webpack or the next loader that will replace the module.

### sourceMap

Type:

```
type sourceMap = object;
```

Default: undefined

A source map passed along to webpack or the next loader.

### ast

Type:

```
type ast = Array<object>;
```

Default: undefined

An Abstract Syntax Tree that will be passed to the next loader. Useful to speed up the build time if the next loader uses the same AST.

### dependencies

Type:

```
type dependencies = Array<string>;
```

Default: []

An array of absolute, native paths to file dependencies that should be watched by webpack for changes.

Dependencies can also be added using loaderContext.addDependency(file: string).

### contextDependencies

Type:

```
type contextDependencies = Array<string>;
```

Default: []

An array of absolute, native paths to directory dependencies that should be watched by webpack for changes.

Context dependencies can also be added using loaderContext.addContextDependency(directory: string).

### buildDependencies

Type:

```
type buildDependencies = Array<string>;
```

Default: []

An array of absolute, native paths to directory dependencies that should be watched by webpack for changes.

Build dependencies can also be added using loaderContext.addBuildDependency(file: string).

### cacheable

Type:

```
type cacheable = boolean;
```

Default: false

If true, specifies that the code can be re-used in watch mode if none of the dependencies have changed.

## Examples

### Simple

In this example the loader is configured to operator on a file name of years-in-ms.js, execute the code, and store the result in the bundle as the result of the execution. This example passes years as an option, which corresponds to the years parameter in the target module exported function:

years-in-ms.js

```
module.exports = function yearsInMs({ years }) {
  const value = years * 365 * 24 * 60 * 60 * 1000;

  // NOTE: this return value will replace the module in the bundle
  return {
    cacheable: true,
    code: "module.exports = " + value,
  };
};
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: require.resolve("src/years-in-ms.js"),
        use: [
          {
            loader: "val-loader",
            options: {
              years: 10,
            },
          },
        ],
      },
    ],
  },
};
```

In the bundle, requiring the module then returns:

```
import tenYearsMs from "years-in-ms";

console.log(tenYearsMs); // 315360000000
```

### Modernizr

Example shows how to build modernizr.

entry.js

```
import modenizr from "./modernizr.js";
```

modernizr.js

```
const modernizr = require("modernizr");

module.exports = function (options) {
  return new Promise(function (resolve) {
    // It is impossible to throw an error because modernizr causes the process.exit(1)
    modernizr.build(options, function (output) {
      resolve({
        cacheable: true,
        code: `var modernizr; var hadGlobal = 'Modernizr' in window; var oldGlobal = window.Modernizr; ${output} modernizr = window.Modernizr; if (hadGlobal) { window.Modernizr = oldGlobal; } else { delete window.Modernizr; } export default modernizr;`,
      });
    });
  });
};
```

webpack.config.js

```
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: path.resolve(__dirname, "src", "modernizr.js"),
        use: [
          {
            loader: "val-loader",
            options: {
              minify: false,
              options: ["setClasses"],
              "feature-detects": [
                "test/css/flexbox",
                "test/es6/promises",
                "test/serviceworker",
              ],
            },
          },
        ],
      },
    ],
  },
};
```

### Figlet

Example shows how to build figlet.

entry.js

```
import { default as figlet } from "./figlet.js";

console.log(figlet);
```

figlet.js

```
const figlet = require("figlet");

function wrapOutput(output, config) {
  let figletOutput = "";

  if (config.textBefore) {
    figletOutput += encodeURI(`${config.textBefore}\n`);
  }

  output.split("\n").forEach((line) => {
    figletOutput += encodeURI(`${line}\n`);
  });

  if (config.textAfter) {
    figletOutput += encodeURI(`${config.textAfter}\n`);
  }

  return `module.exports = decodeURI("${figletOutput}");`;
}

module.exports = function (options) {
  const defaultConfig = {
    fontOptions: {
      font: "ANSI Shadow",
      horizontalLayout: "default",
      kerning: "default",
      verticalLayout: "default",
    },
    text: "FIGLET-LOADER",
    textAfter: null,
    textBefore: null,
  };

  const config = Object.assign({}, defaultConfig, options);

  return new Promise(function (resolve, reject) {
    figlet.text(config.text, config.fontOptions, (error, output) => {
      if (error) {
        return reject(error);
      }

      resolve({
        cacheable: true,
        code: "module.exports = " + wrapOutput(output, config),
      });
    });
  });
};
```

webpack.config.js

```
const path = require("path");
module.exports = {
  module: {
    rules: [
      {
        test: path.resolve(__dirname, "src", "figlet.js"),
        use: [
          {
            loader: "val-loader",
            options: {
              text: "FIGLET",
            },
          },
        ],
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
 https://webpack.js.org/loaders/val-loader
