# Consumption

Source: https://devdocs.io/typescript/docs/handbook/declaration-files/consumption

Was this page helpful?

# Consumption

## Downloading

Getting type declarations requires no tools apart from npm.

As an example, getting the declarations for a library like lodash takes nothing more than the following command

```
npm install --save-dev @types/lodash
```

It is worth noting that if the npm package already includes its declaration file as described in Publishing, downloading the corresponding @types package is not needed.

## Consuming

From there you’ll be able to use lodash in your TypeScript code with no fuss. This works for both modules and global code.

For example, once you’ve npm install-ed your type declarations, you can use imports and write

```
import * as _ from "lodash";
_.padStart("Hello TypeScript!", 20, " ");
```

or if you’re not using modules, you can just use the global variable _.

```
_.padStart("Hello TypeScript!", 20, " ");
```

## Searching

For the most part, type declaration packages should always have the same name as the package name on npm, but prefixed with @types/, but if you need, you can use the Yarn package search to find the package for your favorite library.

Note: if the declaration file you are searching for is not present, you can always contribute one back and help out the next developer looking for it. Please see the DefinitelyTyped contribution guidelines page for details.

### Publishing

How to get your d.ts files to users

The TypeScript docs are an open source project. Help us improve these pages by sending a Pull Request ❤

Last updated: Sep 15, 2025

© 2012-2025 MicrosoftLicensed under the Apache License, Version 2.0.
 https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html
