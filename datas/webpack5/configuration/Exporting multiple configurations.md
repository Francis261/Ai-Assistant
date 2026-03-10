# Configuration Types

Source: https://devdocs.io/webpack~5/configuration/configuration-types#exporting-multiple-configurations

Besides exporting a single configuration object, there are a few more ways that cover other needs as well.

## Exporting a Function

Eventually you will find the need to disambiguate in your webpack.config.js between development and production builds. There are multiple ways to do that. One option is to export a function from your webpack configuration instead of exporting an object. The function will be invoked with two arguments:

- An environment as the first parameter. See the environment options CLI documentation for syntax examples.
- An options map (argv) as the second parameter. This describes the options passed to webpack, with keys such as output-path and mode.

```
-module.exports = {
+module.exports = function(env, argv) {
+  return {
+    mode: env.production ? 'production' : 'development',
+    devtool: env.production ? 'source-map' : 'eval',
     plugins: [
       new TerserPlugin({
         terserOptions: {
+          compress: argv.mode === 'production' // only if `--mode production` was passed
         }
       })
     ]
+  };
};
```

## Exporting a Promise

Webpack will run the function exported by the configuration file and wait for a Promise to be returned. Handy when you need to asynchronously load configuration variables.

```
module.exports = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        entry: './app.js',
        /* ... */
      });
    }, 5000);
  });
};
```

## Exporting multiple configurations

Instead of exporting a single configuration object/function, you may export multiple configurations (multiple functions are supported since webpack 3.1.0). When running webpack, all configurations are built. For instance, this is useful for bundling a library for multiple targets such as AMD and CommonJS:

```
module.exports = [
  {
    output: {
      filename: './dist-amd.js',
      libraryTarget: 'amd',
    },
    name: 'amd',
    entry: './app.js',
    mode: 'production',
  },
  {
    output: {
      filename: './dist-commonjs.js',
      libraryTarget: 'commonjs',
    },
    name: 'commonjs',
    entry: './app.js',
    mode: 'production',
  },
];
```

### dependencies

In case you have a configuration that depends on the output of another configuration, you can specify a list of dependencies using the dependencies array.

webpack.config.js

```
module.exports = [
  {
    name: 'client',
    target: 'web',
    // …
  },
  {
    name: 'server',
    target: 'node',
    dependencies: ['client'],
  },
];
```

### parallelism

In case you export multiple configurations, you can use the parallelism option on the configuration array to specify the maximum number of compilers that will compile in parallel.

- Type: number
- Available: 5.22.0+

webpack.config.js

```
module.exports = [
  {
    //config-1
  },
  {
    //config-2
  },
];
module.exports.parallelism = 1;
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/configuration-types
