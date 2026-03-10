# npm-help-search

Source: https://devdocs.io/npm/cli/v10/commands/npm-help-search

### Synopsis

```
npm help-search <text>
```

Note: This command is unaware of workspaces.

### Description

This command will search the npm markdown documentation files for the terms provided, and then list the results, sorted by relevance.

If only one result is found, then it will show that help topic.

If the argument to npm help is not a known help topic, then it will call help-search. It is rarely if ever necessary to call this command directly.

### Configuration

#### long

- Default: false
- Type: Boolean

Show extended information in ls, search, and help-search.

### See Also

- npm
- npm help

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/commands/npm-help-search
