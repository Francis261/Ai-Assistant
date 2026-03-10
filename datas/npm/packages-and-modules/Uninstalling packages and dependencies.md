# Uninstalling packages and dependencies

Source: https://devdocs.io/npm/uninstalling-packages-and-dependencies

If you no longer need to use a package in your code, we recommend uninstalling it and removing it from your project's dependencies.

## Uninstalling local packages

### Removing a local package from your node_modules directory

To remove a package from your node_modules directory, on the command line, use the uninstall command. Include the scope if the package is scoped.

This uninstalls a package, completely removing everything npm installed on its behalf.

It also removes the package from the dependencies, devDependencies, optionalDependencies, and peerDependencies objects in your package.json.

Further, if you have an npm-shrinkwrap.json or package-lock.json, npm will update those files as well.

#### Unscoped package

#### Scoped package

### Example

### Removing a local package without removing it from package.json

Using the --no-save will tell npm not to remove the package from your package.json, npm-shrinkwrap.json, or package-lock.json files.

### Example

--save or -S will tell npm to remove the package from your package.json, npm-shrinkwrap.json, and package-lock.json files. This is the default, but you may need to use this if you have for instance save=false in your .npmrc file.

### Confirming local package uninstallation

To confirm that npm uninstall worked correctly, check that the node_modules directory no longer contains a directory for the uninstalled package(s).

- Unix system (such as OSX): ls node_modules
- Windows systems: dir node_modules

## Uninstalling global packages

To uninstall an unscoped global package, on the command line, use the uninstall command with the -g flag. Include the scope if the package is scoped.

### Unscoped package

### Scoped package

### Example

For example, to uninstall a package called jshint, run:

## Resources

### Uninstalling local packages

### Uninstalling global packages

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/uninstalling-packages-and-dependencies
