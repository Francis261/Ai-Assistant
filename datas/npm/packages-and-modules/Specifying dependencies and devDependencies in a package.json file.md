# Specifying dependencies and devDependencies in a package.json file

Source: https://devdocs.io/npm/specifying-dependencies-and-devdependencies-in-a-package-json-file

To specify the packages your project depends on, you must list them as "dependencies" or "devDependencies" in your package's package.json file. When you (or another user) run npm install, npm will download dependencies and devDependencies that are listed in package.json that meet the semantic version requirements listed for each. To see which versions of a package will be installed, use the semver calculator.

- "dependencies": Packages required by your application in production.
- "devDependencies": Packages that are only needed for local development and testing.

## Adding dependencies to a package.json file

You can add dependencies to a package.json file from the command line or by manually editing the package.json file.

### Adding dependencies to a package.json file from the command line

To add dependencies and devDependencies to a package.json file from the command line, you can install them in the root directory of your package using the --save-prod flag for dependencies (the default behavior of npm install) or the --save-dev flag for devDependencies.

To add an entry to the "dependencies" attribute of a package.json file, on the command line, run the following command:

To add an entry to the "devDependencies" attribute of a package.json file, on the command line, run the following command:

### Manually editing the package.json file

To add dependencies to a package.json file, in a text editor, add an attribute called "dependencies" that references the name and semantic version of each dependency:

```
{
  "name": "my_package",
  "version": "1.0.0",
  "dependencies": {
    "my_dep": "^1.0.0",
    "another_dep": "~2.2.0"
  }
}
```

To add devDependencies to a package.json file, in a text editor, add an attribute called "devDependencies" that references the name and semantic version of each devDependency:

```
"name": "my_package",
"version": "1.0.0",
"dependencies": {
  "my_dep": "^1.0.0",
  "another_dep": "~2.2.0"
},
"devDependencies" : {
  "my_test_framework": "^3.1.0",
  "another_dev_dep": "1.0.0 - 1.2.0"
}
```

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file
