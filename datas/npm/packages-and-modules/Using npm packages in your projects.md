# Using npm packages in your projects

Source: https://devdocs.io/npm/using-npm-packages-in-your-projects

Once you have installed a package in node_modules, you can use it in your code.

## Using unscoped packages in your projects

### Node.js module

If you are creating a Node.js module, you can use a package in your module by passing it as an argument to the require function.

```
var lodash = require('lodash');

var output = lodash.without([1, 2, 3], 1);
console.log(output);
```

### package.json file

In package.json, list the package under dependencies. You can optionally include a semantic version.

```
{
  "dependencies": {
    "package_name": "^1.0.0"
  }
}
```

## Using scoped packages in your projects

To use a scoped package, simply include the scope wherever you use the package name.

### Node.js module

```
var projectName = require("@scope/package-name")
```

### package.json file

In package.json:

```
{
  "dependencies": {
    "@scope/package_name": "^1.0.0"
  }
}
```

## Resolving "Cannot find module" errors

If you have not properly installed a package, you will receive an error when you try to use it in your code. For example, if you reference the lodash package without installing it, you would see the following error:

```
module.js:340
    throw err;
          ^
Error: Cannot find module 'lodash'
```

- For scoped packages, run npm install <@scope/package_name>
- For unscoped packages, run npm install <package_name>

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/using-npm-packages-in-your-projects
