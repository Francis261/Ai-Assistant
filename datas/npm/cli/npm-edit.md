# npm-edit

Source: https://devdocs.io/npm/cli/v10/commands/npm-edit

### Synopsis

```
npm edit <pkg>[/<subpkg>...]
```

Note: This command is unaware of workspaces.

### Description

Selects a dependency in the current project and opens the package folder in the default editor (or whatever you've configured as the npm editor config -- see npm-config.)

After it has been edited, the package is rebuilt so as to pick up any changes in compiled packages.

For instance, you can do npm install connect to install connect into your package, and then npm edit connect to make a few changes to your locally installed copy.

### Configuration

#### editor

- Default: The EDITOR or VISUAL environment variables, or '%SYSTEMROOT%\notepad.exe' on Windows, or 'vi' on Unix systems
- Type: String

The command to run for npm edit and npm config edit.

### See Also

- npm folders
- npm explore
- npm install
- npm config
- npmrc

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/commands/npm-edit
