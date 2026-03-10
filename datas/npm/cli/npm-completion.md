# npm-completion

Source: https://devdocs.io/npm/cli/v10/commands/npm-completion

### Synopsis

```
npm completion
```

Note: This command is unaware of workspaces.

### Description

Enables tab-completion in all npm commands.

The synopsis above loads the completions into your current shell. Adding it to your ~/.bashrc or ~/.zshrc will make the completions available everywhere:

```
npm completion >> ~/.bashrc
npm completion >> ~/.zshrc
```

You may of course also pipe the output of npm completion to a file such as /usr/local/etc/bash_completion.d/npm or /etc/bash_completion.d/npm if you have a system that will read that file for you.

When COMP_CWORD, COMP_LINE, and COMP_POINT are defined in the environment, npm completion acts in "plumbing mode", and outputs completions based on the arguments.

### See Also

- npm developers
- npm

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/commands/npm-completion
