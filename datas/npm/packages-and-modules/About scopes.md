# About scopes

Source: https://devdocs.io/npm/about-scopes

Note: You must be using npm version 2 or greater to use scopes. To upgrade to the latest version of npm, on the command line, run npm install npm@latest -g

When you sign up for an npm user account or create an organization, you are granted a scope that matches your user or organization name. You can use this scope as a namespace for related packages.

A scope allows you to create a package with the same name as a package created by another user or organization without conflict.

When listed as a dependent in a package.json file, scoped packages are preceded by their scope name. The scope name is everything between the @ and the slash:

- "npm" scope:

- "npmcorp" scope:

To create and publish public scoped packages, see "Creating and publishing scoped public packages".

To create and publish private scoped packages, see "Creating and publishing private packages".

## Scopes and package visibility

- Unscoped packages are always public.
- Private packages are always scoped.
- Scoped packages are private by default; you must pass a command-line flag when publishing to make them public.

For more information on package scope and visibility, see "Package scope, access level, and visibility".

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/about-scopes
