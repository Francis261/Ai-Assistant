# Compiler Options in MSBuild

Source: https://devdocs.io/typescript/docs/handbook/compiler-options-in-msbuild

Was this page helpful?

# Compiler Options in MSBuild

## Overview

When you have an MSBuild based project which utilizes TypeScript such as an ASP.NET Core project, you can configure TypeScript in two ways. Either via a tsconfig.json or via the project settings.

## Using a tsconfig.json

We recommend using a tsconfig.json for your project when possible. To add one to an existing project, add a new item to your project which is called a “TypeScript JSON Configuration File” in modern versions of Visual Studio.

The new tsconfig.json will then be used as the source of truth for TypeScript-specific build information like files and configuration. You can learn about how TSConfigs works here and there is a comprehensive reference here.

## Using Project Settings

You can also define the configuration for TypeScript inside you project’s settings. This is done by editing the XML in your .csproj to define PropertyGroups which describe how the build can work:

```
<PropertyGroup>
  <TypeScriptNoEmitOnError>true</TypeScriptNoEmitOnError>
  <TypeScriptNoImplicitReturns>true</TypeScriptNoImplicitReturns>
</PropertyGroup>
```

There is a series of mappings for common TypeScript settings, these are settings which map directly to TypeScript cli options and are used to help you write a more understandable project file. You can use the TSConfig reference to get more information on what values and defaults are for each mapping.

### CLI Mappings

Allow JavaScript files to be a part of your program. Use the checkJS option to get errors from these files.

Disable emitting comments.

Enable error reporting for expressions and declarations with an implied any type..

Generate .d.ts files from TypeScript and JavaScript files in your project.

Specify what module code is generated.

Specify what JSX code is generated.

Specify an output folder for all emitted files.

Create source map files for emitted JavaScript files.

Set the JavaScript language version for emitted JavaScript and include compatible library declarations.

Disallow imports, requires or <reference>s from expanding the number of files TypeScript should add to a project.

Specify the location where debugger should locate map files instead of generated locations.

Specify the root path for debuggers to find the reference source code.

No longer supported. In early versions, manually set the text encoding for reading files.

Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.

Disable including any library files, including the default lib.d.ts.

Disable erasing const enum declarations in generated code.

Suppress noImplicitAny errors when indexing objects that lack index signatures.

Disable generating custom helper functions like __extends in compiled output.

Include sourcemap files inside the emitted JavaScript.

Include source code in the sourcemaps inside the emitted JavaScript.

Set the newline character for emitting files.

Ensure that each file can be safely transpiled without relying on other imports.

Emit design-type metadata for decorated declarations in source files.

Specify the root folder within your source files.

Enable experimental support for TC39 stage 2 draft decorators.

Specify how TypeScript looks up a file from a given module specifier.

Disable reporting of excess property errors during the creation of object literals.

Specify the object invoked for createElement. This only applies when targeting react JSX emit.

Skip type checking .d.ts files that are included with TypeScript.

Disable error reporting for unused labels.

Enable error reporting for codepaths that do not explicitly return in a function.

Enable error reporting for fallthrough cases in switch statements.

Disable error reporting for unreachable code.

Ensure that casing is correct in imports.

Allow 'import x from y' when a module doesn't have a default export.

Disable adding 'use strict' directives in emitted JavaScript files.

Specify a set of bundled library declaration files that describe the target runtime environment.

Specify the base directory to resolve bare specifier module names.

Specify the output directory for generated declaration files.

Enable error reporting when this is given the type any.

Skip type checking all .d.ts files.

When type checking, take into account null and undefined.

Enable error reporting when a local variables aren't read.

Raise an error when a function parameter isn't read

Ensure 'use strict' is always emitted.

Allow importing helper functions from tslib once per project, instead of including them per-file.

Specify the JSX factory function used when targeting React JSX emit, e.g. 'React.createElement' or 'h'

Disable emitting declarations that have @internal in their JSDoc comments.

Enable error reporting in type-checked JavaScript files.

Emit more compliant, but verbose and less performant JavaScript for iteration.

Enable all strict type checking options.

Disable strict checking of generic signatures in function types.

Disable resolving symlinks to their realpath. This correlates to the same flag in node.

When assigning functions, check to ensure parameters and the return values are subtype-compatible.

Check for class properties that are declared but not set in the constructor.

Emit additional JavaScript to ease support for importing CommonJS modules. This enables allowSyntheticDefaultImports for type compatibility.

Only output d.ts files and not JavaScript files.

Make keyof only return strings instead of string, numbers or symbols. Legacy option.

Emit ECMAScript-standard-compliant class fields.

Create sourcemaps for d.ts files.

Enable importing .json files

Check that the arguments for bind, call, and apply methods match the original function.

Disable emitting files if any type checking errors are reported.

### Additional Flags

Because the MSBuild system passes arguments directly to the TypeScript CLI, you can use the option TypeScriptAdditionalFlags to provide specific flags which don’t have a mapping above.

For example, this would turn on noPropertyAccessFromIndexSignature:

```
<TypeScriptAdditionalFlags> $(TypeScriptAdditionalFlags) --noPropertyAccessFromIndexSignature</TypeScriptAdditionalFlags>
```

### Debug and Release Builds

You can use PropertyGroup conditions to define different sets of configurations. For example, a common task is stripping comments and sourcemaps in production. In this example, we define a debug and release property group which have different TypeScript configurations:

```
<PropertyGroup Condition="'$(Configuration)' == 'Debug'">
  <TypeScriptRemoveComments>false</TypeScriptRemoveComments>
  <TypeScriptSourceMap>true</TypeScriptSourceMap>
</PropertyGroup>

<PropertyGroup Condition="'$(Configuration)' == 'Release'">
  <TypeScriptRemoveComments>true</TypeScriptRemoveComments>
  <TypeScriptSourceMap>false</TypeScriptSourceMap>
</PropertyGroup>

<Import
    Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets"
    Condition="Exists('$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets')" />
```

### ToolsVersion

The value of <TypeScriptToolsVersion>1.7</TypeScriptToolsVersion> property in the project file identifies the compiler version to use to build (1.7 in this example). This allows a project to build against the same versions of the compiler on different machines.

If TypeScriptToolsVersion is not specified, the latest compiler version installed on the machine will be used to build.

Users using newer versions of TS, will see a prompt to upgrade their project on first load.

### TypeScriptCompileBlocked

If you are using a different build tool to build your project (e.g. gulp, grunt , etc.) and VS for the development and debugging experience, set <TypeScriptCompileBlocked>true</TypeScriptCompileBlocked> in your project. This should give you all the editing support, but not the build when you hit F5.

### TypeScriptEnableIncrementalMSBuild (TypeScript 4.2 Beta and later)

By default, MSBuild will attempt to only run the TypeScript compiler when the project’s source files have been updated since the last compilation. However, if this behavior is causing issues, such as when TypeScript’s incremental option is enabled, set <TypeScriptEnableIncrementalMSBuild>false</TypeScriptEnableIncrementalMSBuild> to ensure the TypeScript compiler is invoked with every run of MSBuild.

The TypeScript docs are an open source project. Help us improve these pages by sending a Pull Request ❤

Last updated: Sep 15, 2025

© 2012-2025 MicrosoftLicensed under the Apache License, Version 2.0.
 https://www.typescriptlang.org/docs/handbook/compiler-options-in-msbuild.html
