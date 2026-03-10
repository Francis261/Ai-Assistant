# Downloading and installing packages locally

Source: https://devdocs.io/npm/downloading-and-installing-packages-locally

You can install a package locally if you want to depend on the package from your own module, using something like Node.js require. This is npm install's default behavior.

## Installing an unscoped package

Unscoped packages are always public, which means they can be searched for, downloaded, and installed by anyone. To install a public package, on the command line, run

This will create the node_modules directory in your current directory (if one doesn't exist yet) and will download the package to that directory.

Note: If there is no package.json file in the local directory, the latest version of the package is installed.

If there is a package.json file, npm installs the latest version that satisfies the semver rule declared in package.json.

## Installing a scoped public package

Scoped public packages can be downloaded and installed by anyone, as long as the scope name is referenced during installation:

## Installing a private package

Private packages can only be downloaded and installed by those who have been granted read access to the package. Since private packages are always scoped, you must reference the scope name during installation:

## Testing package installation

To confirm that npm install worked correctly, in your module directory, check that a node_modules directory exists and that it contains a directory for the package(s) you installed:

## Installed package version

If there is a package.json file in the directory in which npm install is run, npm installs the latest version of the package that satisfies the semantic versioning rule declared in package.json.

If there is no package.json file, the latest version of the package is installed.

## Installing a package with dist-tags

Like npm publish, npm install <package_name> will use the latest tag by default.

To override this behavior, use npm install <package_name>@<tag>. For example, to install the example-package at the version tagged with beta, you would run the following command:

## Resources

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/downloading-and-installing-packages-locally
