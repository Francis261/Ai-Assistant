# thread-loader

Source: https://devdocs.io/webpack~5/loaders/thread-loader

Runs the following loaders in a worker pool.

## Getting Started

```
npm install --save-dev thread-loader
```

or

```
yarn add -D thread-loader
```

or

```
pnpm add -D thread-loader
```

Put this loader in front of other loaders. The following loaders run in a worker pool.

Loaders running in a worker pool are limited. Examples:

- Loaders cannot emit files.
- Loaders cannot use custom loader API (i. e. by plugins).
- Loaders cannot access the webpack options.

Each worker is a separate node.js process, which has an overhead of ~600ms. There is also an overhead of inter-process communication.

Use this loader only for expensive operations!

### Examples

webpack.config.js

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: [
          'thread-loader',
          // your expensive loader (e.g babel-loader)
        ],
      },
    ],
  },
};
```

with options

```
use: [
  {
    loader: 'thread-loader',
    // loaders with equal options will share worker pools
    options: {
      // the number of spawned workers, defaults to (number of cpus - 1) or
      // fallback to 1 when require('os').cpus() is undefined
      workers: 2,

      // number of jobs a worker processes in parallel
      // defaults to 20
      workerParallelJobs: 50,

      // additional node.js arguments
      workerNodeArgs: ['--max-old-space-size=1024'],

      // Allow to respawn a dead worker pool
      // respawning slows down the entire compilation
      // and should be set to false for development
      poolRespawn: false,

      // timeout for killing the worker processes when idle
      // defaults to 500 (ms)
      // can be set to Infinity for watching builds to keep workers alive
      poolTimeout: 2000,

      // number of jobs the poll distributes to the workers
      // defaults to 200
      // decrease of less efficient but more fair distribution
      poolParallelJobs: 50,

      // name of the pool
      // can be used to create different pools with elsewise identical options
      name: 'my-pool',
    },
  },
  // your expensive loader (e.g babel-loader)
];
```

prewarming

To prevent the high delay when booting workers it possible to warmup the worker pool.

This boots the max number of workers in the pool and loads specified modules into the node.js module cache.

```
const threadLoader = require('thread-loader');

threadLoader.warmup(
  {
    // pool options, like passed to loader options
    // must match loader options to boot the correct pool
  },
  [
    // modules to load
    // can be any module, i. e.
    'babel-loader',
    'babel-preset-es2015',
    'sass-loader',
  ],
);
```

## Contributing

Please take a moment to read our contributing guidelines if you haven't yet done so.

CONTRIBUTING

## License

MIT

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/loaders/thread-loader
