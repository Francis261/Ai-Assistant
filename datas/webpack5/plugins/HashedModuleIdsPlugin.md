# HashedModuleIdsPlugin

Source: https://devdocs.io/webpack~5/plugins/hashed-module-ids-plugin

This plugin will cause hashes to be based on the relative path of the module, generating a four character string as the module id. Suggested for use in production.

```
new webpack.ids.HashedModuleIdsPlugin({
  // Options...
});
```

## Options

This plugin supports the following options:

- context: The context directory (absolute path) for creating names.
- hashFunction: The hashing algorithm to use, defaults to 'md4'. All functions from Node.JS' crypto.createHash are supported.
- hashDigest: The encoding to use when generating the hash, defaults to 'base64'. All encodings from Node.JS' hash.digest are supported.
- hashDigestLength: The prefix length of the hash digest to use, defaults to 4. Note that some generated ids might be longer than specified here, to avoid module id collisions.

## Usage

Here's an example of how this plugin might be used:

```
new webpack.ids.HashedModuleIdsPlugin({
  context: __dirname,
  hashFunction: 'sha256',
  hashDigest: 'hex',
  hashDigestLength: 20,
});
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/hashed-module-ids-plugin
