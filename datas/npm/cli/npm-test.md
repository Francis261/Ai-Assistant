# npm-test

Source: https://devdocs.io/npm/cli/v10/commands/npm-test

### Synopsis

```
npm test [-- <args>]

aliases: tst, t
```

### Description

This runs a predefined command specified in the "test" property of a package's "scripts" object.

### Example

```
{
  "scripts": {
    "test": "node test.js"
  }
}
```

```
npm test
> npm@x.x.x test
> node test.js

(test.js output would be here)
```

### Configuration

#### ignore-scripts

- Default: false
- Type: Boolean

If true, npm does not run scripts specified in package.json files.

Note that commands explicitly intended to run a particular script, such as npm start, npm stop, npm restart, npm test, and npm run-script will still run their intended script if ignore-scripts is set, but they will not run any pre- or post-scripts.

#### script-shell

- Default: '/bin/sh' on POSIX systems, 'cmd.exe' on Windows
- Type: null or String

The shell to use for scripts run with the npm exec, npm run and npm init <package-spec> commands.

### See Also

- npm run-script
- npm scripts
- npm start
- npm restart
- npm stop

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/commands/npm-test
