# NormalModuleReplacementPlugin

Source: https://devdocs.io/webpack~5/plugins/normal-module-replacement-plugin

The NormalModuleReplacementPlugin allows you to replace resources that match resourceRegExp with newResource. If newResource is relative, it is resolved relative to the previous resource. If newResource is a function, it is expected to overwrite the request attribute of the supplied resource.

This can be useful for allowing different behaviour between builds.

```
new webpack.NormalModuleReplacementPlugin(resourceRegExp, newResource);
```

Note that the resourceRegExp is tested against the request you write in your code, not the resolved resource. For instance, './sum' will be used to test instead of './sum.js' when you have code import sum from './sum'.

Also please note that when using Windows, you have to accomodate for the different folder separator symbol. E.g. /src\/environments\/environment\.ts/ won't work on Windows, you have to use /src[\\/]environments[\\/]environment\.ts/, instead.

## Basic Example

Replace a specific module when building for a development environment.

Say you have a configuration file some/path/config.development.module.js and a special version for production in some/path/config.production.module.js

Add the following plugin when building for production:

```
new webpack.NormalModuleReplacementPlugin(
  /some\/path\/config\.development\.js/,
  './config.production.js'
);
```

## Advanced Example

Conditional build depending on an specified environment.

Say you want a configuration with specific values for different build targets.

```
module.exports = function (env) {
  var appTarget = env.APP_TARGET || 'VERSION_A';
  return {
    plugins: [
      new webpack.NormalModuleReplacementPlugin(/-APP_TARGET$/, function (
        resource
      ) {
        resource.request = resource.request.replace(
          /-APP_TARGET/,
          `-${appTarget}`
        );

        if (resource.createData) {
          resource.createData.request = resource.request;
        }
      }),
    ],
  };
};
```

Create the two configuration files:

app/config-VERSION_A.js

```
export default {
  title: 'I am version A',
};
```

app/config-VERSION_B.js

```
export default {
  title: 'I am version B',
};
```

Then import that configuration using the keyword you're looking for in the regexp:

```
import config from 'app/config-APP_TARGET';
console.log(config.title);
```

And now you get the right configuration imported depending on which target you're building for:

```
npx webpack --env APP_TARGET=VERSION_A
=> 'I am version A'

npx webpack --env APP_TARGET=VERSION_B
=> 'I am version B'
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/normal-module-replacement-plugin
