# Creating .d.ts Files from .js files

Source: https://devdocs.io/typescript/docs/handbook/declaration-files/dts-from-js

Was this page helpful?

# Creating .d.ts Files from .js files

With TypeScript 3.7, TypeScript added support for generating .d.ts files from JavaScript using JSDoc syntax.

This set up means you can own the editor experience of TypeScript-powered editors without porting your project to TypeScript, or having to maintain .d.ts files in your codebase. TypeScript supports most JSDoc tags, you can find the reference here.

## Setting up your Project to emit .d.ts files

To add creation of .d.ts files in your project, you will need to do up-to four steps:

- Add TypeScript to your dev dependencies
- Add a tsconfig.json to configure TypeScript
- Run the TypeScript compiler to generate the corresponding d.ts files for JS files
- (optional) Edit your package.json to reference the types

### Adding TypeScript

You can learn how to do this in our installation page.

### TSConfig

The TSConfig is a jsonc file which configures both your compiler flags, and declare where to find files. In this case, you will want a file like the following:

```
{
  // Change this to match your project
  "include": ["src/**/*"],

  "compilerOptions": {
    // Tells TypeScript to read JS files, as
    // normally they are ignored as source files
    "allowJs": true,
    // Generate d.ts files
    "declaration": true,
    // This compiler run should
    // only output d.ts files
    "emitDeclarationOnly": true,
    // Types should go into this directory.
    // Removing this would place the .d.ts files
    // next to the .js files
    "outDir": "dist",
    // go to js file when using IDE functions like
    // "Go to Definition" in VSCode
    "declarationMap": true
  }
}
```

You can learn more about the options in the tsconfig reference. An alternative to using a TSConfig file is the CLI, this is the same behavior as a CLI command.

```
npx -p typescript tsc src/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir types
```

## Run the compiler

You can learn how to do this in our installation page. You want to make sure these files are included in your package if you have the files in your project’s .gitignore.

## Editing the package.json

TypeScript replicates the node resolution for modules in a package.json, with an additional step for finding .d.ts files. Roughly, the resolution will first check the optional types field, then the "main" field, and finally will try index.d.ts in the root.

If absent, then “main” is used

## Tips

If you’d like to write tests for your .d.ts files, try tsd or TSTyche.

### JSDoc Reference

What JSDoc does TypeScript-powered JavaScript support?

The TypeScript docs are an open source project. Help us improve these pages by sending a Pull Request ❤

Last updated: Sep 15, 2025

© 2012-2025 MicrosoftLicensed under the Apache License, Version 2.0.
 https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html
