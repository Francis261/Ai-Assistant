# Watch and WatchOptions

Source: https://devdocs.io/webpack~5/configuration/watch#troubleshooting

Webpack can watch files and recompile whenever they change. This page explains how to enable this and a couple of tweaks you can make if watching does not work properly for you.

## watch

boolean = false

Turn on watch mode. This means that after the initial build, webpack will continue to watch for changes in any of the resolved files.

webpack.config.js

```
module.exports = {
  //...
  watch: true,
};
```

## watchOptions

object

A set of options used to customize watch mode:

webpack.config.js

```
module.exports = {
  //...
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
};
```

### watchOptions.aggregateTimeout

number = 20

Add a delay before rebuilding once the first file changed. This allows webpack to aggregate any other changes made during this time period into one rebuild. Pass a value in milliseconds:

```
module.exports = {
  //...
  watchOptions: {
    aggregateTimeout: 600,
  },
};
```

### watchOptions.ignored

RegExp string [string]

For some systems, watching many files can result in a lot of CPU or memory usage. It is possible to exclude a huge folder like node_modules using a regular expression:

webpack.config.js

```
module.exports = {
  //...
  watchOptions: {
    ignored: /node_modules/,
  },
};
```

Alternatively, a glob pattern may be used:

webpack.config.js

```
module.exports = {
  //...
  watchOptions: {
    ignored: '**/node_modules',
  },
};
```

It is also possible to use multiple glob patterns:

webpack.config.js

```
module.exports = {
  //...
  watchOptions: {
    ignored: ['**/files/**/*.js', '**/node_modules'],
  },
};
```

In addition, you can specify an absolute path:

```
const path = require('path');
module.exports = {
  //...
  watchOptions: {
    ignored: [path.posix.resolve(__dirname, './ignored-dir')],
  },
};
```

When using glob patterns, we convert them to regular expressions with glob-to-regexp, so make sure to get yourself familiar with it before you use glob patterns for watchOptions.ignored.

### watchOptions.poll

boolean = false number

Turn on polling by passing true which would set the default poll interval to 5007, or specifying a poll interval in milliseconds:

webpack.config.js

```
module.exports = {
  //...
  watchOptions: {
    poll: 1000, // Check for changes every second
  },
};
```

### watchOptions.followSymlinks

Follow symbolic links while looking for a file. This is usually not needed as webpack already resolves symlinks with resolve.symlinks.

- Type: boolean
- Example: module.exports = {
 //...
 watchOptions: {
 followSymlinks: true,
 },
};

Type: boolean

Example:

```
module.exports = {
  //...
  watchOptions: {
    followSymlinks: true,
  },
};
```

### watchOptions.stdin

Stop watching when stdin stream has ended.

- Type: boolean
- Example: module.exports = {
 //...
 watchOptions: {
 stdin: true,
 },
};

Type: boolean

Example:

```
module.exports = {
  //...
  watchOptions: {
    stdin: true,
  },
};
```

## Troubleshooting

If you are experiencing any issues, please see the following notes. There are a variety of reasons why webpack might miss a file change.

### Changes Seen But Not Processed

Verify that webpack is not being notified of changes by running webpack with the --progress flag. If progress shows on save but no files are outputted, it is likely a configuration issue, not a file watching issue.

```
webpack --watch --progress
```

### Not Enough Watchers

Verify that you have enough available watchers in your system. If this value is too low, the file watcher in Webpack won't recognize the changes:

```
cat /proc/sys/fs/inotify/max_user_watches
```

Arch users, add fs.inotify.max_user_watches=524288 to /etc/sysctl.d/99-sysctl.conf and then execute sysctl --system. Ubuntu users (and possibly others), execute: echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p.

### macOS fsevents Bug

On macOS, folders can get corrupted in certain scenarios. See this article.

### Windows Paths

Because webpack expects absolute paths for many configuration options such as __dirname + '/app/folder' the Windows \ path separator can break some functionality.

Use the correct separators. I.e. path.resolve(__dirname, 'app/folder') or path.join(__dirname, 'app', 'folder').

### Vim

On some machines Vim is preconfigured with the backupcopy option set to auto. This could potentially cause problems with the system's file watching mechanism. Switching this option to yes will make sure a copy of the file is made and the original one overwritten on save.

:set backupcopy=yes

### Saving in WebStorm

When using the JetBrains WebStorm IDE, you may find that saving changed files does not trigger the watcher as you might expect. Try disabling the Back up files before saving option in the settings, which determines whether files are saved to a temporary location first before the originals are overwritten: uncheck File > {Settings|Preferences} > Appearance & Behavior > System Settings > Back up files before saving. On some versions of Webstorm, this option may be called Use "safe write" (save changes to a temporary file first).

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/configuration/watch
