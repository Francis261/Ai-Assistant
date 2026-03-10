# JS Projects Utilizing TypeScript

Source: https://devdocs.io/typescript/docs/handbook/intro-to-js-ts

Was this page helpful?

# JS Projects Utilizing TypeScript

The type system in TypeScript has different levels of strictness when working with a codebase:

- A type-system based only on inference with JavaScript code
- Incremental typing in JavaScript via JSDoc
- Using // @ts-check in a JavaScript file
- TypeScript code
- TypeScript with strict enabled

Each step represents a move towards a safer type-system, but not every project needs that level of verification.

## TypeScript with JavaScript

This is when you use an editor which uses TypeScript to provide tooling like auto-complete, jump to symbol and refactoring tools like rename. The homepage has a list of editors which have TypeScript plugins.

## Providing Type Hints in JS via JSDoc

In a .js file, types can often be inferred. When types can’t be inferred, they can be specified using JSDoc syntax.

JSDoc annotations that come before a declaration will be used to set the type of that declaration. For example:

```
/** @type {number} */
var x;
 
x = 0; // OK
x = false; // OK?!
```

You can find the full list of supported JSDoc patterns in JSDoc Supported Types.

## @ts-check

The last line of the previous code sample would raise an error in TypeScript, but it doesn’t by default in a JS project. To enable errors in your JavaScript files add: // @ts-check to the first line in your .js files to have TypeScript raise it as an error.

```
// @ts-check
/** @type {number} */
var x;
 
x = 0; // OK
x = false; // Not OK
```

If you have a lot of JavaScript files you want to add errors to then you can switch to using a jsconfig.json. You can skip checking some files by adding a // @ts-nocheck comment to files.

TypeScript may offer you errors which you disagree with, in those cases you can ignore errors on specific lines by adding // @ts-ignore or // @ts-expect-error on the preceding line.

```
// @ts-check
/** @type {number} */
var x;
 
x = 0; // OK
// @ts-expect-error
x = false; // Not OK
```

To learn more about how JavaScript is interpreted by TypeScript read How TS Type Checks JS

### Type Checking JavaScript Files

How to add type checking to JavaScript files using TypeScript

The TypeScript docs are an open source project. Help us improve these pages by sending a Pull Request ❤

Last updated: Sep 15, 2025

© 2012-2025 MicrosoftLicensed under the Apache License, Version 2.0.
 https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html
