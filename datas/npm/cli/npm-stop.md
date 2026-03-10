# npm-stop

Source: https://devdocs.io/npm/cli/v10/commands/npm-stop

### Synopsis

```
npm stop [-- <args>]
```

### Description

This runs a predefined command specified in the "stop" property of a package's "scripts" object.

Unlike with npm start, there is no default script that will run if the "stop" property is not defined.

### Example

```
{
  "scripts": {
    "stop": "node bar.js"
  }
}
```

```
npm stop

> npm@x.x.x stop
> node bar.js

(bar.js output would be here)
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
- npm test
- npm start
- npm restart

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/commands/npm-stop
