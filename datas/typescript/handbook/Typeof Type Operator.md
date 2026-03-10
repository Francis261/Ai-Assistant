# Typeof Type Operator

Source: https://devdocs.io/typescript/docs/handbook/2/typeof-types

Was this page helpful?

# Typeof Type Operator

## The typeof type operator

JavaScript already has a typeof operator you can use in an expression context:

```
// Prints "string"
console.log(typeof "Hello world");
```

TypeScript adds a typeof operator you can use in a type context to refer to the type of a variable or property:

```
let s = "hello";
let n: typeof s;
```

This isn’t very useful for basic types, but combined with other type operators, you can use typeof to conveniently express many patterns. For an example, let’s start by looking at the predefined type ReturnType<T>. It takes a function type and produces its return type:

```
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
```

If we try to use ReturnType on a function name, we see an instructive error:

```
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<f>;
```

Remember that values and types aren’t the same thing. To refer to the type that the value f has, we use typeof:

```
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
```

### Limitations

TypeScript intentionally limits the sorts of expressions you can use typeof on.

Specifically, it’s only legal to use typeof on identifiers (i.e. variable names) or their properties. This helps avoid the confusing trap of writing code you think is executing, but isn’t:

```
// Meant to use = ReturnType<typeof msgbox>
let shouldContinue: typeof msgbox("Are you sure you want to continue?");
```

### Keyof Type Operator

Using the keyof operator in type contexts.

### Indexed Access Types

Using Type['a'] syntax to access a subset of a type.

The TypeScript docs are an open source project. Help us improve these pages by sending a Pull Request ❤

Last updated: Sep 15, 2025

© 2012-2025 MicrosoftLicensed under the Apache License, Version 2.0.
 https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
