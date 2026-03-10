# npm-explore

Source: https://devdocs.io/npm/cli/v10/commands/npm-explore

### Synopsis

```
npm explore <pkg> [ -- <command>]
```

Note: This command is unaware of workspaces.

### Description

Spawn a subshell in the directory of the installed package specified.

If a command is specified, then it is run in the subshell, which then immediately terminates.

This is particularly handy in the case of git submodules in the node_modules folder:

```
npm explore some-dependency -- git pull origin master
```

Note that the package is not automatically rebuilt afterwards, so be sure to use npm rebuild <pkg> if you make any changes.

### Configuration

#### shell

- Default: SHELL environment variable, or "bash" on Posix, or "cmd.exe" on Windows
- Type: String

The shell to run for the npm explore command.

### See Also

- npm folders
- npm edit
- npm rebuild
- npm install

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/commands/npm-explore
