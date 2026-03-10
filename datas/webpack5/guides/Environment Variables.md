# Environment Variables

Source: https://devdocs.io/webpack~5/guides/environment-variables

To disambiguate in your webpack.config.js between development and production builds you may use environment variables.

The webpack command line environment option --env allows you to pass in as many environment variables as you like. Environment variables will be made accessible in your webpack.config.js. For example, --env production or --env goal=local.

```
npx webpack --env goal=local --env production --progress
```

There is one change that you will have to make to your webpack config. Typically, module.exports points to the configuration object. To use the env variable, you must convert module.exports to a function:

webpack.config.js

```
const path = require('path');

module.exports = (env) => {
  // Use env.<YOUR VARIABLE> here:
  console.log('Goal: ', env.goal); // 'local'
  console.log('Production: ', env.production); // true

  return {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/environment-variables
