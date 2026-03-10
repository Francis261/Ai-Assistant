# ContextReplacementPlugin

Source: https://devdocs.io/webpack~5/plugins/context-replacement-plugin

Context refers to a require with an expression such as require('./locale/' + name + '.json'). When encountering such an expression, webpack infers the directory ('./locale/') and a regular expression (/^.*\.json$/). Since the name is not known at compile time, webpack includes every file as module in the bundle.

The ContextReplacementPlugin allows you to override the inferred information. There are various ways to configure the plugin:

## Usage

```
new webpack.ContextReplacementPlugin(
  resourceRegExp: RegExp,
  newContentResource?: string,
  newContentRecursive?: boolean,
  newContentRegExp?: RegExp
)
```

If the resource (directory) matches resourceRegExp, the plugin replaces the default resource, recursive flag or generated regular expression with newContentResource, newContentRecursive or newContextRegExp respectively. If newContentResource is relative, it is resolved relative to the previous resource.

Here's a small example to restrict module usage:

```
new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /de|fr|hu/);
```

The moment/locale context is restricted to files matching /de|fr|hu/. Thus only those locales are included (see this issue for more information).

## Content Callback

```
new webpack.ContextReplacementPlugin(
  resourceRegExp: RegExp,
  newContentCallback: (data) => void
);
```

The newContentCallback function is given a data object of the ContextModuleFactory and is expected to overwrite the request attribute of the supplied object.

Using this callback we can dynamically redirect requests to a new location:

```
new webpack.ContextReplacementPlugin(/^\.\/locale$/, (context) => {
  if (!/\/moment\//.test(context.context)) return;

  Object.assign(context, {
    regExp: /^\.\/\w+/,
    request: '../../locale', // resolved relatively
  });
});
```

## Other Options

The newContentResource and newContentCreateContextMap parameters are also available:

```
new webpack.ContextReplacementPlugin(
  resourceRegExp: RegExp,
  newContentResource: string,
  newContentCreateContextMap: object // mapping runtime-request (userRequest) to compile-time-request (request)
);
```

These two parameters can be used together to redirect requests in a more targeted way. The newContentCreateContextMap allows you to map runtime requests to compile requests in the form of an object:

```
new ContextReplacementPlugin(/selector/, './folder', {
  './request': './request',
  './other-request': './new-request',
});
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/context-replacement-plugin
