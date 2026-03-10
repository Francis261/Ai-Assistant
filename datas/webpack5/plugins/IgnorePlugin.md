# IgnorePlugin

Source: https://devdocs.io/webpack~5/plugins/ignore-plugin

IgnorePlugin prevents the generation of modules for import or require calls matching the regular expressions or filter functions.

## Using regular expressions

- resourceRegExp: A RegExp to test the resource against.
- contextRegExp: (optional) A RegExp to test the context (directory) against.

```
new webpack.IgnorePlugin({ resourceRegExp, contextRegExp });
```

## Using filter functions

- checkResource (resource, context) A Filter function that receives resource and context as arguments, must return boolean.

```
new webpack.IgnorePlugin({
  checkResource(resource) {
    // do something with resource
    return true | false;
  },
});
```

## Example of ignoring Moment Locales

As of moment 2.18, all locales are bundled together with the core library (see this GitHub issue).

The resourceRegExp parameter passed to IgnorePlugin is not tested against the resolved file names or absolute module names being imported or required, but rather against the string passed to require or import within the source code where the import is taking place. For example, if you're trying to exclude node_modules/moment/locale/*.js, this won't work:

```
-new webpack.IgnorePlugin({ resourceRegExp: /moment\/locale\// });
```

Rather, because moment imports with this code:

```
require('./locale/' + name);
```

...your first regexp must match that './locale/' string. The second contextRegExp parameter is then used to select specific directories from where the import took place. The following will cause those locale files to be ignored:

```
new webpack.IgnorePlugin({
  resourceRegExp: /^\.\/locale$/,
  contextRegExp: /moment$/,
});
```

...which means "any require statement matching './locale' from any directories ending with 'moment' will be ignored.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/ignore-plugin
