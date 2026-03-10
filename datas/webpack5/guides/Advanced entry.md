# Advanced entry

Source: https://devdocs.io/webpack~5/guides/entry-advanced

## Multiple file types per entry

It is possible to provide different types of files when using an array of values for entry to achieve separate bundles for CSS and JavaScript (and other) files in applications that are not using import for styles in JavaScript (pre Single Page Applications or different reasons).

Let's make an example. We have a PHP application with two page types: home and account. The home page has different layout and non-sharable JavaScript with the rest of the application (account page). We want to output home.js and home.css from our application files for the home page and account.js and account.css for account page.

home.js

```
console.log('home page type');
```

home.scss

```
// home page individual styles
```

account.js

```
console.log('account page type');
```

account.scss

```
// account page individual styles
```

We will use MiniCssExtractPlugin in production mode for css as a best practice.

webpack.config.js

```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    home: ['./home.js', './home.scss'],
    account: ['./account.js', './account.scss'],
  },
  output: {
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};
```

Running webpack with above configuration will output into ./dist as we did not specify different output path. ./dist directory will now contain four files:

- home.js
- home.css
- account.js
- account.css

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/entry-advanced
