# CompressionWebpackPlugin

Source: https://devdocs.io/webpack~5/plugins/compression-webpack-plugin

Prepare compressed versions of assets to serve them with Content-Encoding.

## Getting Started

To begin, you'll need to install compression-webpack-plugin:

```
npm install compression-webpack-plugin --save-dev
```

or

```
yarn add -D compression-webpack-plugin
```

or

```
pnpm add -D compression-webpack-plugin
```

Then add the plugin to your webpack config. For example:

webpack.config.js

```
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  plugins: [new CompressionPlugin()],
};
```

And run webpack via your preferred method.

## Options

- test
- include
- exclude
- algorithm
- compressionOptions
- threshold
- minRatio
- filename
- deleteOriginalAssets

### test

Type:

```
type test = string | RegExp | Array<string | RegExp>;
```

Default: undefined

Include all assets that pass test assertion.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    }),
  ],
};
```

### include

Type:

```
type include = string | RegExp | Array<string | RegExp>;
```

Default: undefined

Include all assets matching any of these conditions.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      include: /\/includes/,
    }),
  ],
};
```

### exclude

Type:

```
type exclude = string | RegExp | Array<string | RegExp>;
```

Default: undefined

Exclude all assets matching any of these conditions.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      exclude: /\/excludes/,
    }),
  ],
};
```

### algorithm

Type:

```
type algorithm =
  | string
  | ((
      input: Buffer,
      options: CompressionOptions,
      callback: (
        error: Error | null | undefined,
        result:
          | string
          | ArrayBuffer
          | SharedArrayBuffer
          | Uint8Array
          | readonly number[]
          | {
              valueOf(): ArrayBuffer | SharedArrayBuffer;
            }
          | {
              valueOf(): string | Uint8Array | readonly number[];
            }
          | {
              valueOf(): string;
            }
          | {
              [Symbol.toPrimitive](hint:%20%22string%22): string;
            },
      ) => void,
    ) => any);
```

Default: gzip

The compression algorithm/function.

[!NOTE]

If you use custom function for the algorithm option, the default value of the compressionOptions option is {}.

#### string

The algorithm is taken from zlib.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
  ],
};
```

#### function

Allow to specify a custom compression function.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm(input, compressionOptions, callback) {
        return compressionFunction(input, compressionOptions, callback);
      },
    }),
  ],
};
```

### compressionOptions

Type:

```
type compressionOptions = {
  flush?: number;
  finishFlush?: number;
  chunkSize?: number;
  windowBits?: number;
  level?: number;
  memLevel?: number;
  strategy?: number;
  dictionary?: Buffer | TypedArray | DataView | ArrayBuffer;
  info?: boolean;
  maxOutputLength?: number;
};
```

Default: { level: 9 }

Compression options for algorithm.

You can find all options here zlib.

[!NOTE]

If you use custom function for the algorithm option, the default value is {}.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      compressionOptions: { level: 1 },
    }),
  ],
};
```

### threshold

Type:

```
type threshold = number;
```

Default: 0

Only assets bigger than this size are processed. In bytes.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      threshold: 8192,
    }),
  ],
};
```

### minRatio

Type:

```
type minRatio = number;
```

Default: 0.8

Only assets that compress better than this ratio are processed (minRatio = Compressed Size / Original Size). Example: you have image.png file with 1024b size, compressed version of file has 768b size, so minRatio equal 0.75. In other words assets will be processed when the Compressed Size / Original Size value less minRatio value.

You can use 1 value to process assets that are smaller than the original.

Use a value of Infinity to process all assets even if they are larger than the original size or their original size is 0 bytes (useful when you are pre-zipping all assets for AWS).

Use a value of Number.MAX_SAFE_INTEGER to process all assets even if they are larger than the original size, excluding assets with their original size is 0 bytes.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      // Compress all assets, including files with `0` bytes size
      // minRatio: Infinity

      // Compress all assets, excluding files with `0` bytes size
      // minRatio: Number.MAX_SAFE_INTEGER

      minRatio: 0.8,
    }),
  ],
};
```

### filename

Type:

```
type filename = string | ((pathdata: PathData) => string);
```

Default: "[path][base].gz"

The target asset filename.

#### string

For example we have assets/images/image.png?foo=bar#hash:

[path] is replaced with the directories to the original asset, included trailing / (assets/images/).

[file] is replaced with the path of original asset (assets/images/image.png).

[base] is replaced with the base ([name] + [ext]) of the original asset (image.png).

[name] is replaced with the name of the original asset (image).

[ext] is replaced with the extension of the original asset, included . (.png).

[query] is replaced with the query of the original asset, included ? (?foo=bar).

[fragment] is replaced with the fragment (in the concept of URL it is called hash) of the original asset (#hash).

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
    }),
  ],
};
```

#### function

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      filename(pathData) {
        // The `pathData` argument contains all placeholders - `path`/`name`/`ext`/etc
        // Available properties described above, for the `String` notation
        if (/\.svg$/.test(pathData.filename)) {
          return "assets/svg/[path][base].gz";
        }

        return "assets/js/[path][base].gz";
      },
    }),
  ],
};
```

### deleteOriginalAssets

Type:

```
type deleteOriginalAssets =
  | boolean
  | "keep-source-map"
  | ((name: string) => boolean);
```

Default: false

Whether to delete the original assets or not.

webpack.config.js

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      deleteOriginalAssets: true,
    }),
  ],
};
```

To exclude sourcemaps from compression:

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      exclude: /.map$/,
      deleteOriginalAssets: "keep-source-map",
    }),
  ],
};
```

Using a custom function:

```
module.exports = {
  plugins: [
    new CompressionPlugin({
      exclude: /.map$/,
      deleteOriginalAssets: (name) => {
        if (/\.js$/.test(name)) {
          return false;
        }

        return true;
      },
    }),
  ],
};
```

## Examples

### Using Zopfli

Prepare compressed versions of assets using zopfli library.

[!NOTE]

@gfx/zopfli require minimum 8 version of node.

To begin, you'll need to install @gfx/zopfli:

```
$ npm install @gfx/zopfli --save-dev
```

webpack.config.js

```
const zopfli = require("@gfx/zopfli");

module.exports = {
  plugins: [
    new CompressionPlugin({
      compressionOptions: {
        numiterations: 15,
      },
      algorithm(input, compressionOptions, callback) {
        return zopfli.gzip(input, compressionOptions, callback);
      },
    }),
  ],
};
```

### Using Brotli

Brotli is a compression algorithm originally developed by Google, and offers compression superior to gzip.

Node 10.16.0 and later has native support for Brotli compression in its zlib module.

We can take advantage of this built-in support for Brotli in Node 10.16.0 and later by just passing in the appropriate algorithm to the CompressionPlugin:

webpack.config.js

```
const zlib = require("zlib");

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
};
```

[!NOTE] Brotli’s BROTLI_PARAM_QUALITY option is functionally equivalent to zlib’s level option. You can find all Brotli’s options in the relevant part of the zlib module documentation.

### Multiple compressed versions of assets for different algorithm

webpack.config.js

```
const zlib = require("zlib");

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/plugins/compression-webpack-plugin
