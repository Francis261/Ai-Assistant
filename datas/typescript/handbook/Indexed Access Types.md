# Indexed Access Types

Source: https://devdocs.io/typescript/docs/handbook/2/indexed-access-types

Was this page helpful?

# Indexed Access Types

We can use an indexed access type to look up a specific property on another type:

```
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
```

The indexing type is itself a type, so we can use unions, keyof, or other types entirely:

```
type I1 = Person["age" | "name"];
 
type I2 = Person[keyof Person];
 
type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
```

You’ll even see an error if you try to index a property that doesn’t exist:

```
type I1 = Person["alve"];
```

Another example of indexing with an arbitrary type is using number to get the type of an array’s elements. We can combine this with typeof to conveniently capture the element type of an array literal:

```
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person = typeof MyArray[number];
type Age = typeof MyArray[number]["age"];
// Or
type Age2 = Person["age"];
```

You can only use types when indexing, meaning you can’t use a const to make a variable reference:

```
const key = "age";
type Age = Person[key];
```

However, you can use a type alias for a similar style of refactor:

```
type key = "age";
type Age = Person[key];
```

### Typeof Type Operator

Using the typeof operator in type contexts.

### Conditional Types

Create types which act like if statements in the type system.

The TypeScript docs are an open source project. Help us improve these pages by sending a Pull Request ❤

Last updated: Sep 15, 2025

© 2012-2025 MicrosoftLicensed under the Apache License, Version 2.0.
 https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
