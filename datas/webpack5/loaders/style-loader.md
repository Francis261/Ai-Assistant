# style-loader

Source: https://devdocs.io/webpack~5/loaders/style-loader

Inject CSS into the DOM.

## Getting Started

To begin, you'll need to install style-loader:

```
npm install --save-dev style-loader
```

or

```
yarn add -D style-loader
```

or

```
pnpm add -D style-loader
```

It's recommended to combine style-loader with the css-loader

Then add the loader to your webpack config. For example:

style.css

```
body {
  background: green;
}
```

component.js

```
import "./style.css";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

## Security Warning

This loader is primarily meant for development. The default settings are not safe for production environments. See the recommended example configuration and the section on nonces for details.

## Options

- injectType
- attributes
- insert
- styleTagTransform
- base
- esModule

### injectType

Type:

```
type injectType =
  | "styleTag"
  | "singletonStyleTag"
  | "autoStyleTag"
  | "lazyStyleTag"
  | "lazySingletonStyleTag"
  | "lazyAutoStyleTag"
  | "linkTag";
```

Default: styleTag

Allows to setup how styles will be injected into the DOM.

Possible values:

#### styleTag

Automatically injects styles into the DOM using multiple <style></style>. It is default behaviour.

component.js

```
import "./styles.css";
```

Example with Locals (CSS Modules):

component-with-css-modules.js

```
import * as styles from "./styles.css";

const divElement = document.createElement("div");
divElement.className = styles["my-class"];
```

All local variables (class names) are exported as named exports. To achieve this behaviour you also have to setup modules option for css-loader. For more information consult with css-loader documentation.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          // The `injectType`  option can be avoided because it is default behaviour
          { loader: "style-loader", options: { injectType: "styleTag" } },
          {
            loader: "css-loader",
            // Uncomment it if you want to use CSS modules
            // options: { modules: true }
          },
        ],
      },
    ],
  },
};
```

The loader inject styles like:

```
<style>
  .foo {
    color: red;
  }
</style>
<style>
  .bar {
    color: blue;
  }
</style>
```

#### singletonStyleTag

Automatically injects styles into the DOM using one <style></style>.

[!WARNING]

Source maps do not work.

component.js

```
import "./styles.css";
```

component-with-css-modules.js

```
import * as styles from "./styles.css";

const divElement = document.createElement("div");
divElement.className = styles["my-class"];
```

All local variables (class names) are exported as named exports. To achieve this behaviour you also have to setup modules option for css-loader. For more information consult with css-loader documentation.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "singletonStyleTag" },
          },
          {
            loader: "css-loader",
            // Uncomment it if you want to use CSS modules
            // options: { modules: true }
          },
        ],
      },
    ],
  },
};
```

The loader inject styles like:

```
<style>
  .foo {
    color: red;
  }
  .bar {
    color: blue;
  }
</style>
```

#### autoStyleTag

Works the same as a styleTag, but if the code is executed in IE6-9, turns on the singletonStyleTag mode.

#### lazyStyleTag

Injects styles into the DOM using multiple <style></style> on demand. We recommend following .lazy.css naming convention for lazy styles and the .css for basic style-loader usage (similar to other file types, i.e. .lazy.less and .less). When you lazyStyleTag value the style-loader injects the styles lazily making them useable on-demand via style.use() / style.unuse().

⚠️ Behavior is undefined when unuse is called more often than use. Don't do that.

component.js

```
import styles from "./styles.lazy.css";

styles.use();
// For removing styles you can use
// styles.unuse();
```

component-with-css-modules.js

```
import styles, { "my-class" as myClass } from "./styles.lazy.css";

styles.use();

const divElement = document.createElement("div");
divElement.className = myClass;
```

All local variables (class names) are exported as named exports. To achieve this behaviour you also have to setup modules option for css-loader. For more information consult with css-loader documentation.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.lazy\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.lazy\.css$/i,
        use: [
          { loader: "style-loader", options: { injectType: "lazyStyleTag" } },
          {
            loader: "css-loader",
            // Uncomment it if you want to use CSS modules
            // options: { modules: true }
          },
        ],
      },
    ],
  },
};
```

The loader inject styles like:

```
<style>
  .foo {
    color: red;
  }
</style>
<style>
  .bar {
    color: blue;
  }
</style>
```

#### lazySingletonStyleTag

Injects styles into the DOM using one <style></style> on demand. We recommend following .lazy.css naming convention for lazy styles and the .css for basic style-loader usage (similar to other file types, i.e. .lazy.less and .less). When you lazySingletonStyleTag value the style-loader injects the styles lazily making them useable on-demand via style.use() / style.unuse().

⚠️ Source maps do not work.

⚠️ Behavior is undefined when unuse is called more often than use. Don't do that.

component.js

```
import styles from "./styles.css";

styles.use();
// For removing styles you can use
// styles.unuse();
```

component-with-css-modules.js

```
import styles, { "my-class" as myClass } from "./styles.lazy.css";

styles.use();

const divElement = document.createElement("div");
divElement.className = myClass;
```

All local variables (class names) are exported as named exports. To achieve this behaviour you also have to setup modules option for css-loader. For more information consult with css-loader documentation.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /\.lazy\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.lazy\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: { injectType: "lazySingletonStyleTag" },
          },
          {
            loader: "css-loader",
            // Uncomment it if you want to use CSS modules
            // options: { modules: true }
          },
        ],
      },
    ],
  },
};
```

The loader generate this:

```
<style>
  .foo {
    color: red;
  }
  .bar {
    color: blue;
  }
</style>
```

#### lazyAutoStyleTag

Works the same as a lazyStyleTag, but if the code is executed in IE6-9, turns on the lazySingletonStyleTag mode.

#### linkTag

Injects styles into the DOM using multiple <link rel="stylesheet" href="path/to/file.css"> .

ℹ️ The loader will dynamically insert the <link href="path/to/file.css" rel="stylesheet"> tag at runtime via JavaScript. You should use MiniCssExtractPlugin if you want to include a static <link href="path/to/file.css" rel="stylesheet">.

```
import "./styles.css";
import "./other-styles.css";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.link\.css$/i,
        use: [
          { loader: "style-loader", options: { injectType: "linkTag" } },
          { loader: "file-loader" },
        ],
      },
    ],
  },
};
```

The loader generate this:

```
<link rel="stylesheet" href="path/to/style.css" />
<link rel="stylesheet" href="path/to/other-styles.css" />
```

### attributes

Type:

```
type attributes = HTMLAttributes;
```

Default: {}

If defined, the style-loader will attach given attributes with their values on <style> / <link> element.

component.js

```
import "./file.css";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader", options: { attributes: { id: "id" } } },
          { loader: "css-loader" },
        ],
      },
    ],
  },
};
```

```
<style id="id"></style>
```

### insert

Type:

```
type insert = string;
```

Default: head

By default, the style-loader appends <style>/<link> elements to the end of the style target, which is the <head> tag of the page unless specified by insert. This will cause CSS created by the loader to take priority over CSS already present in the target. You can use other values if the standard behavior is not suitable for you, but we do not recommend doing this. If you target an iframe make sure you have sufficient access rights, the styles will be injected into the content document head.

#### Selector

Allows to setup custom query selector where styles inject into the DOM.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: "body",
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

#### Absolute path to function

Allows to setup absolute path to custom function that allows to override default behavior and insert styles at any position.

[!WARNING]

Do not forget that this code will be used in the browser and not all browsers support latest ECMA features like let, const, arrow function expression and etc. We recommend using babel-loader for support latest ECMA features.

[!WARNING]

Do not forget that some DOM methods may not be available in older browsers, we recommended use only DOM core level 2 properties, but it is depends what browsers you want to support

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: require.resolve("./path-to-insert-module"),
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

A new <style>/<link> elements will be inserted into at bottom of body tag.

Examples:

Insert styles at top of head tag:

insert-function.js

```
function insertAtTop(element) {
  var parent = document.querySelector("head");
  // eslint-disable-next-line no-underscore-dangle
  var lastInsertedElement = window._lastElementInsertedByStyleLoader;

  if (!lastInsertedElement) {
    parent.insertBefore(element, parent.firstChild);
  } else if (lastInsertedElement.nextSibling) {
    parent.insertBefore(element, lastInsertedElement.nextSibling);
  } else {
    parent.appendChild(element);
  }

  // eslint-disable-next-line no-underscore-dangle
  window._lastElementInsertedByStyleLoader = element;
}

module.exports = insertAtTop;
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: require.resolve("./insert-function"),
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

You can pass any parameters to style.use(options) and this value will be passed to insert and styleTagTransform functions.

insert-function.js

```
function insertIntoTarget(element, options) {
  var parent = options.target || document.head;

  parent.appendChild(element);
}

module.exports = insertIntoTarget;
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "lazyStyleTag",
              // Do not forget that this code will be used in the browser and
              // not all browsers support latest ECMA features like `let`, `const`, `arrow function expression` and etc,
              // we recommend use only ECMA 5 features,
              // but it depends what browsers you want to support
              insert: require.resolve("./insert-function.js"),
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

Insert styles to the provided element or to the head tag if target isn't provided. Now you can inject styles into Shadow DOM (or any other element).

custom-square.css

```
div {
  width: 50px;
  height: 50px;
  background-color: red;
}
```

custom-square.js

```
import customSquareStyles from "./custom-square.css";

class CustomSquare extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const divElement = document.createElement("div");

    divElement.textContent = "Text content.";

    this.shadowRoot.appendChild(divElement);

    customSquareStyles.use({ target: this.shadowRoot });

    // You can override injected styles
    const bgPurple = new CSSStyleSheet();
    const width = this.getAttribute("w");
    const height = this.getAttribute("h");

    bgPurple.replace(`div { width: ${width}px; height: ${height}px; }`);

    this.shadowRoot.adoptedStyleSheets = [bgPurple];

    // `divElement` will have `100px` width, `100px` height and `red` background color
  }
}

customElements.define("custom-square", CustomSquare);

export default CustomSquare;
```

### styleTagTransform

Type:

```
type styleTagTransform = string;
```

Default: undefined

#### string

Allows to setup absolute path to custom function that allows to override default behavior styleTagTransform.

[!WARNING]

Do not forget that this code will be used in the browser and not all browsers support latest ECMA features like let, const, arrow function expression and etc, we recommend use only ECMA 5 features, but it is depends what browsers you want to support

[!WARNING]

Do not forget that some DOM methods may not be available in older browsers, we recommended use only DOM core level 2 properties, but it depends what browsers you want to support

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "styleTag",
              styleTagTransform: require.resolve("style-tag-transform-code"),
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

### base

```
type base = number;
```

This setting is primarily used as a workaround for css clashes when using one or more DllPlugin's. base allows you to prevent either the app's css (or DllPlugin2's css) from overwriting DllPlugin1's css by specifying a css module id base which is greater than the range used by DllPlugin1 e.g.:

webpack.dll1.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

webpack.dll2.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader", options: { base: 1000 } },
          "css-loader",
        ],
      },
    ],
  },
};
```

webpack.app.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader", options: { base: 2000 } },
          "css-loader",
        ],
      },
    ],
  },
};
```

### esModule

Type:

```
type esModule = boolean;
```

Default: true

By default, style-loader generates JS modules that use the ES modules syntax. There are some cases in which using ES modules is beneficial, like in the case of module concatenation and tree shaking.

You can enable a CommonJS modules syntax using:

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        loader: "style-loader",
        options: {
          esModule: false,
        },
      },
    ],
  },
};
```

## Examples

### Recommend

For production builds it's recommended to extract the CSS from your bundle being able to use parallel loading of CSS/JS resources later on. This can be achieved by using the mini-css-extract-plugin, because it creates separate css files. For development mode (including webpack-dev-server) you can use style-loader, because it injects CSS into the DOM using multiple <style></style> and works faster.

[!WARNING]

Do not use together style-loader and mini-css-extract-plugin.

webpack.config.js

```
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
};
```

### Named export for CSS Modules

[!WARNING]

It is not allowed to use JavaScript reserved words in css class names.

[!WARNING]

Options esModule and modules.namedExport in css-loader should be enabled (by default for css-loader@7 it is true).

styles.css

```
.fooBaz {
  color: red;
}
.bar {
  color: blue;
}
.my-class {
  color: green;
}
```

index.js

```
import { fooBaz, bar, "my-class" as myClass } from "./styles.css";

console.log(fooBaz, bar, myClass);
```

Or:

index.js

```
import * as styles from "./styles.css";

console.log(styles.fooBaz, styles.bar, styles["my-class"]);
```

You can enable a ES module named export using:

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                namedExport: true,
              },
            },
          },
        ],
      },
    ],
  },
};
```

### Source maps

The loader automatically inject source maps when previous loader emit them. Therefore, to generate source maps, set the sourceMap option to true for the previous loader.

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
};
```

### Nonce

If you are using a Content Security Policy (CSP), the injected code will usually be blocked. A workaround is to use a nonce. Note, however, that using a nonce significantly reduces the protection provided by the CSP. You can read more about the security impact in the specification. The better solution is not to use this loader in production.

There are two ways to work with nonce:

- using the attributes option
- using the __webpack_nonce__ variable

[!WARNING]

the attributes option takes precedence over the __webpack_nonce__ variable

#### attributes

component.js

```
import "./style.css";
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              attributes: {
                nonce: "12345678",
              },
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

The loader generate:

```
<style nonce="12345678">
  .foo {
    color: red;
  }
</style>
```

#### __webpack_nonce__

create-nonce.js

```
__webpack_nonce__ = "12345678";
```

component.js

```
import "./create-nonce.js";
import "./style.css";
```

Alternative example for require:

component.js

```
__webpack_nonce__ = "12345678";

require("./style.css");
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

The loader generate:

```
<style nonce="12345678">
  .foo {
    color: red;
  }
</style>
```

#### Insert styles at top

Insert styles at top of head tag.

insert-function.js

```
function insertAtTop(element) {
  var parent = document.querySelector("head");
  var lastInsertedElement = window._lastElementInsertedByStyleLoader;

  if (!lastInsertedElement) {
    parent.insertBefore(element, parent.firstChild);
  } else if (lastInsertedElement.nextSibling) {
    parent.insertBefore(element, lastInsertedElement.nextSibling);
  } else {
    parent.appendChild(element);
  }

  window._lastElementInsertedByStyleLoader = element;
}

module.exports = insertAtTop;
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: require.resolve("./insert-function.js"),
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

#### Insert styles before target element

Inserts styles before #id element.

insert-function.js

```
function insertBeforeAt(element) {
  const parent = document.querySelector("head");
  const target = document.querySelector("#id");

  const lastInsertedElement = window._lastElementInsertedByStyleLoader;

  if (!lastInsertedElement) {
    parent.insertBefore(element, target);
  } else if (lastInsertedElement.nextSibling) {
    parent.insertBefore(element, lastInsertedElement.nextSibling);
  } else {
    parent.appendChild(element);
  }

  window._lastElementInsertedByStyleLoader = element;
}

module.exports = insertBeforeAt;
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: require.resolve("./insert-function.js"),
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

#### Custom Elements (Shadow DOM)

You can define custom target for your styles for the lazyStyleTag type.

insert-function.js

```
function insertIntoTarget(element, options) {
  var parent = options.target || document.head;

  parent.appendChild(element);
}

module.exports = insertIntoTarget;
```

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: "style-loader",
            options: {
              injectType: "lazyStyleTag",
              // Do not forget that this code will be used in the browser and
              // not all browsers support latest ECMA features like `let`, `const`, `arrow function expression` and etc,
              // we recommend use only ECMA 5 features,
              // but it is depends what browsers you want to support
              insert: require.resolve("./insert-function.js"),
            },
          },
          "css-loader",
        ],
      },
    ],
  },
};
```

Insert styles to the provided element or to the head tag if target isn't provided.

custom-square.css

```
div {
  width: 50px;
  height: 50px;
  background-color: red;
}
```

custom-square.js

```
import customSquareStyles from "./custom-square.css";

class CustomSquare extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const divElement = document.createElement("div");

    divElement.textContent = "Text content.";

    this.shadowRoot.appendChild(divElement);

    customSquareStyles.use({ target: this.shadowRoot });

    // You can override injected styles
    const bgPurple = new CSSStyleSheet();
    const width = this.getAttribute("w");
    const height = this.getAttribute("h");

    bgPurple.replace(`div { width: ${width}px; height: ${height}px; }`);

    this.shadowRoot.adoptedStyleSheets = [bgPurple];

    // `divElement` will have `100px` width, `100px` height and `red` background color
  }
}

customElements.define("custom-square", CustomSquare);

export default CustomSquare;
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/loaders/style-loader
