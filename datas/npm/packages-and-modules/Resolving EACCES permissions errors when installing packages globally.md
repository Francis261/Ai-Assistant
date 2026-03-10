# Resolving EACCES permissions errors when installing packages globally

Source: https://devdocs.io/npm/resolving-eacces-permissions-errors-when-installing-packages-globally

If you see an EACCES error when you try to install a package globally, you can either:

- Reinstall npm with a node version manager (recommended), or
- Manually change npm's default directory

Reinstall npm with a node version manager (recommended),

or

Manually change npm's default directory

## Reinstall npm with a node version manager

This is the best way to avoid permissions issues. To reinstall npm with a node version manager, follow the steps in "Downloading and installing Node.js and npm". You do not need to remove your current version of npm or Node.js before installing a node version manager.

## Manually change npm's default directory

Note: This section does not apply to Microsoft Windows.

To minimize the chance of permissions errors, you can configure npm to use a different directory. In this example, you will create and use hidden directory in your home directory.

1. Back up your computer.
2. On the command line, in your home directory, create a directory for global installations: mkdir ~/.npm-global
3. Configure npm to use the new directory path: npm config set prefix '~/.npm-global'
4. In your preferred text editor, open or create a ~/.profile file and add this line: export PATH=~/.npm-global/bin:$PATH
5. On the command line, update your system variables: source ~/.profile
6. To test your new configuration, install a package globally without using sudo: npm install -g jshint

Back up your computer.

On the command line, in your home directory, create a directory for global installations:

Configure npm to use the new directory path:

In your preferred text editor, open or create a ~/.profile file and add this line:

On the command line, update your system variables:

To test your new configuration, install a package globally without using sudo:

Instead of steps 3-5, you can use the corresponding ENV variable (e.g. if you don't want to modify ~/.profile):

npx: an alternative to running global commands

If you are using npm version 5.2 or greater, you may want to consider npx as an alternative way to run global commands, especially if you only need a command occasionally. For more information, see this article about npx.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
