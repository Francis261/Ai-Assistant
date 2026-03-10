# npm-ping

Source: https://devdocs.io/npm/cli/v10/commands/npm-ping

### Synopsis

```
npm ping
```

Note: This command is unaware of workspaces.

### Description

Ping the configured or given npm registry and verify authentication. If it works it will output something like:

```
npm notice PING https://registry.npmjs.org/
npm notice PONG 255ms
```

otherwise you will get an error:

```
npm notice PING http://foo.com/
npm ERR! code E404
npm ERR! 404 Not Found - GET http://www.foo.com/-/ping?write=true
```

### Configuration

#### registry

- Default: "https://registry.npmjs.org/"
- Type: URL

The base URL of the npm registry.

### See Also

- npm doctor
- npm config
- npmrc

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/commands/npm-ping
