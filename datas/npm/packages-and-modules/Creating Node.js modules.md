# Creating Node.js modules

Source: https://devdocs.io/npm/creating-node-js-modules

Node.js modules are a type of package that can be published to npm.

## Overview

1. Create a package.json file
2. Create the file that will be loaded when your module is required by another application
3. Test your module

## Create a package.json file

1. To create a package.json file, on the command line, in the root directory of your Node.js module, run npm init:
  - For scoped modules, run npm init --scope=@scope-name
  - For unscoped modules, run npm init
2. Provide responses for the required fields (name and version), as well as the main field:
  - name: The name of your module.
  - version: The initial module version. We recommend following semantic versioning guidelines and starting with 1.0.0.

- For scoped modules, run npm init --scope=@scope-name
- For unscoped modules, run npm init

- name: The name of your module.
- version: The initial module version. We recommend following semantic versioning guidelines and starting with 1.0.0.

For more information on package.json files, see "Creating a package.json file".

## Create the file that will be loaded when your module is required by another application

In the file, add a function as a property of the exports object. This will make the function available to other code:

```
exports.printMsg = function() {
  console.log("This is a message from the demo package");
}
```

## Test your module

1. Publish your package to npm:
  - For private packages and unscoped packages, use npm publish.
  - For scoped public packages, use npm publish --access public
2. On the command line, create a new test directory outside of your project directory. mkdir test-directory
3. Switch to the new directory: cd /path/to/test-directory
4. In the test directory, install your module: npm install <your-module-name>
5. In the test directory, create a test.js file which requires your module and calls your module as a method.
6. On the command line, run node test.js. The message sent to the console.log should appear.

Publish your package to npm:

- For private packages and unscoped packages, use npm publish.
- For scoped public packages, use npm publish --access public

On the command line, create a new test directory outside of your project directory.

Switch to the new directory:

In the test directory, install your module:

In the test directory, create a test.js file which requires your module and calls your module as a method.

On the command line, run node test.js. The message sent to the console.log should appear.

## Resources

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/creating-node-js-modules
