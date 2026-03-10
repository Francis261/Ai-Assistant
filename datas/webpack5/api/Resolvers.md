# Resolvers

Source: https://devdocs.io/webpack~5/api/resolvers

Resolvers are created using the enhanced-resolve package. The Resolver class extends the tapable class and uses tapable to provide a few hooks. The enhanced-resolve package can be used directly to create new resolvers, however any compiler instance has a few resolver instances that can be tapped into.

Before reading on, make sure to have a look at the enhanced-resolve and tapable documentation.

## Types

There are three types of built-in resolvers available on the compiler class:

- normal: Resolves a module via an absolute or relative path.
- context: Resolves a module within a given context.
- loader: Resolves a webpack loader.

Depending on need, any one of these built-in resolvers, that are used by the compiler, can be customized via plugins:

```
compiler.resolverFactory.hooks.resolver
  .for('[type]')
  .tap('name', (resolver) => {
    // you can tap into resolver.hooks now
    resolver.hooks.result.tap('MyPlugin', (result) => {
      return result;
    });
  });
```

Where [type] is one of the three resolvers mentioned above.

See the enhanced-resolve documentation for a full list of hooks and their description.

## Configuration Options

The resolvers mentioned above can also be customized via a configuration file with the resolve or resolveLoader options. These options allow users to change the resolving behavior through a variety of options including through resolve plugins.

The resolver plugins, e.g. DirectoryNamedPlugin, can be included directly in resolve.plugins rather than using directly in plugins configuration option.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/api/resolvers
