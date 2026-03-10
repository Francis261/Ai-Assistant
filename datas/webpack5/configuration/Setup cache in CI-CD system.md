# Cache

Source: https://devdocs.io/webpack~5/configuration/cache#setup-cache-in-cicd-system

## cache

boolean object

Cache the generated webpack modules and chunks to improve build speed. cache is set to type: 'memory' in development mode and disabled in production mode. cache: true is an alias to cache: { type: 'memory' }. To disable caching pass false:

webpack.config.js

```
module.exports = {
  //...
  cache: false,
};
```

While setting cache.type to 'filesystem' opens up more options for configuration.

### cache.allowCollectingMemory

Collect unused memory allocated during deserialization, only available when cache.type is set to 'filesystem'. This requires copying data into smaller buffers and has a performance cost.

- Type: boolean
  - It defaults to false in production mode and true in development mode.
- 5.35.0+

- It defaults to false in production mode and true in development mode.

webpack.config.js

```
module.exports = {
  cache: {
    type: 'filesystem',
    allowCollectingMemory: true,
  },
};
```

### cache.buildDependencies

object

cache.buildDependencies is an object of arrays of additional code dependencies for the build. Webpack will use a hash of each of these items and all dependencies to invalidate the filesystem cache.

Defaults to webpack/lib to get all dependencies of webpack.

webpack.config.js

```
module.exports = {
  cache: {
    buildDependencies: {
      // This makes all dependencies of this file - build dependencies
      config: [__filename],
      // By default webpack and loaders are build dependencies
    },
  },
};
```

### cache.cacheDirectory

string

Base directory for the cache. Defaults to node_modules/.cache/webpack.

cache.cacheDirectory option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.temp_cache'),
  },
};
```

### cache.cacheLocation

string

Locations for the cache. Defaults to path.resolve(cache.cacheDirectory, cache.name).

webpack.config.js

```
const path = require('path');

module.exports = {
  //...
  cache: {
    type: 'filesystem',
    cacheLocation: path.resolve(__dirname, '.test_cache'),
  },
};
```

### cache.cacheUnaffected

Cache computation of modules which are unchanged and reference only unchanged modules. It can only be used along with cache.type of 'memory', besides, experiments.cacheUnaffected must be enabled to use it.

- Type: boolean
- v5.54.0+

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'memory',
    cacheUnaffected: true,
  },
};
```

### cache.compression

false | 'gzip' | 'brotli'

Compression type used for the cache files. By default it is false.

cache.compression option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    compression: 'gzip',
  },
};
```

### cache.hashAlgorithm

string

Algorithm used the hash generation. See Node.js crypto for more details. Defaults to md4.

cache.hashAlgorithm option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    hashAlgorithm: 'md4',
  },
};
```

### cache.idleTimeout

number = 60000

Time in milliseconds. cache.idleTimeout denotes the time period after which the cache storing should happen.

cache.idleTimeout option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  //..
  cache: {
    type: 'filesystem',
    idleTimeout: 60000,
  },
};
```

### cache.idleTimeoutAfterLargeChanges

number = 1000

Time in milliseconds. cache.idleTimeoutAfterLargeChanges is the time period after which the cache storing should happen when larger changes have been detected.

cache.idleTimeoutAfterLargeChanges option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  //..
  cache: {
    type: 'filesystem',
    idleTimeoutAfterLargeChanges: 1000,
  },
};
```

### cache.idleTimeoutForInitialStore

number = 5000

Time in milliseconds. cache.idleTimeoutForInitialStore is the time period after which the initial cache storing should happen.

cache.idleTimeoutForInitialStore option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  //..
  cache: {
    type: 'filesystem',
    idleTimeoutForInitialStore: 0,
  },
};
```

### cache.managedPaths

[string] = ['./node_modules']

cache.managedPaths is an array of package-manager only managed paths. Webpack will avoid hashing and timestamping them, assume the version is unique and will use it as a snapshot (for both memory and filesystem cache).

### cache.maxAge

number = 5184000000

The amount of time in milliseconds that unused cache entries are allowed to stay in the filesystem cache; defaults to one month.

cache.maxAge option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  // ...
  cache: {
    type: 'filesystem',
    maxAge: 5184000000,
  },
};
```

### cache.maxGenerations

number

Define the lifespan of unused cache entries in the memory cache.

- cache.maxGenerations: 1: Cache entries are removed after being unused for a single compilation.
- cache.maxGenerations: Infinity: Cache entries are kept forever.

cache.maxGenerations: 1: Cache entries are removed after being unused for a single compilation.

cache.maxGenerations: Infinity: Cache entries are kept forever.

cache.maxGenerations option is only available when cache.type is set to 'memory'.

webpack.config.js

```
module.exports = {
  // ...
  cache: {
    type: 'memory',
    maxGenerations: Infinity,
  },
};
```

### cache.maxMemoryGenerations

number

Define the lifespan of unused cache entries in the memory cache.

- cache.maxMemoryGenerations: 0: Persistent cache will not use an additional memory cache. It will only cache items in memory until they are serialized to disk. Once serialized the next read will deserialize them from the disk again. This mode will minimize memory usage but introduce a performance cost.
- cache.maxMemoryGenerations: 1: This will purge items from the memory cache once they are serialized and unused for at least one compilation. When they are used again they will be deserialized from the disk. This mode will minimize memory usage while still keeping active items in the memory cache.
- cache.maxMemoryGenerations: small numbers > 0 will have a performance cost for the GC operation. It gets lower as the number increases.
- cache.maxMemoryGenerations: defaults to 10 in development mode and to Infinity in production mode.

cache.maxMemoryGenerations: 0: Persistent cache will not use an additional memory cache. It will only cache items in memory until they are serialized to disk. Once serialized the next read will deserialize them from the disk again. This mode will minimize memory usage but introduce a performance cost.

cache.maxMemoryGenerations: 1: This will purge items from the memory cache once they are serialized and unused for at least one compilation. When they are used again they will be deserialized from the disk. This mode will minimize memory usage while still keeping active items in the memory cache.

cache.maxMemoryGenerations: small numbers > 0 will have a performance cost for the GC operation. It gets lower as the number increases.

cache.maxMemoryGenerations: defaults to 10 in development mode and to Infinity in production mode.

cache.maxMemoryGenerations option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  // ...
  cache: {
    type: 'filesystem',
    maxMemoryGenerations: Infinity,
  },
};
```

### cache.memoryCacheUnaffected

Cache computation of modules which are unchanged and reference only unchanged modules in memory. It can only be used along with cache.type of 'filesystem', besides, experiments.cacheUnaffected must be enabled to use it.

- Type: boolean
- v5.54.0+

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    memoryCacheUnaffected: true,
  },
};
```

### cache.name

string

Name for the cache. Different names will lead to different coexisting caches. Defaults to ${config.name}-${config.mode}. Using cache.name makes sense when you have multiple configurations which should have independent caches.

cache.name option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    name: 'AppBuildCache',
  },
};
```

### cache.profile

boolean = false

Track and log detailed timing information for individual cache items of type 'filesystem'.

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    profile: true,
  },
};
```

### cache.readonly

boolean 5.85.0

Prevent webpack from storing cache into file system. Only available when cache.type === "filesystem" and cache.store === 'pack'.

```
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    store: 'pack',
    readonly: true,
  },
};
```

### cache.store

string = 'pack': 'pack'

cache.store tells webpack when to store data on the file system.

- 'pack': Store data when compiler is idle in a single file for all cached items

cache.store option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    store: 'pack',
  },
};
```

### cache.type

string: 'memory' | 'filesystem'

Sets the cache type to either in memory or on the file system. The memory option is straightforward, it tells webpack to store cache in memory and doesn't allow additional configuration:

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'memory',
  },
};
```

### cache.version

string = ''

Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when configuration changed in a way which doesn't allow to reuse cache. This will invalidate the cache.

cache.version option is only available when cache.type is set to 'filesystem'.

webpack.config.js

```
module.exports = {
  //...
  cache: {
    type: 'filesystem',
    version: 'your_version',
  },
};
```

## Setup cache in CI/CD system

Filesystem cache allows to share cache between builds in CI. To setup cache:

- CI should have an option to share cache between builds.
- CI should run job in the same absolute path. This is important since webpack cache files store absolute paths.

### GitLab CI/CD

Common config could looks like

```
variables:
  # fallback to use "main" branch cache, requires GitLab Runner 13.4
  CACHE_FALLBACK_KEY: main

# this is webpack build job
build-job:
  cache:
    key: '$CI_COMMIT_REF_SLUG' # branch/tag name
    paths:
      # cache directory
      # make sure that you don't run "npm ci" in this job or change default cache directory
      # otherwise "npm ci" will prune cache files
      - node_modules/.cache/webpack/
```

### Github actions

```
- uses: actions/cache@v3
  with:
    # cache directory
    path: node_modules/.cache/webpack/
    key: ${{ GITHUB_REF_NAME }}-webpack-build
    # fallback to use "main" branch cache
    restore-keys: |
      main-webpack-build
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/cache
