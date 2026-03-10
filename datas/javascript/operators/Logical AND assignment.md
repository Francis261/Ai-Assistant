# Logical AND assignment (&&=)

Source: https://devdocs.io/javascript/operators/logical_and_assignment

The &&= operator only evaluates the right operand and assigns to the left if the left operand is truthy.

## Try it

```
let a = 1;
let b = 0;

a &&= 2;
console.log(a);
// Expected output: 2

b &&= 2;
console.log(b);
// Expected output: 0
```

## Syntax

```
x &&= y
```

## Description

Logical AND assignment short-circuits, meaning that x &&= y is equivalent to x && (x = y), except that the expression x is only evaluated once.

No assignment is performed if the left-hand side is not truthy, due to short-circuiting of the logical AND operator. For example, the following does not throw an error, despite x being const:

```
const x = 0;
x &&= 2;
```

Neither would the following trigger the setter:

```
const x = {
  get value() {
    return 0;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value &&= 2;
```

In fact, if x is not truthy, y is not evaluated at all.

```
const x = 0;
x &&= console.log("y evaluated");
// Logs nothing
```

## Examples

### Using logical AND assignment

```
let x = 0;
let y = 1;

x &&= 0; // 0
x &&= 1; // 0
y &&= 1; // 1
y &&= 0; // 0
```

## Specifications

## Browser compatibility

## See also

- Logical AND (&&)
- Nullish coalescing operator (??)
- Bitwise AND assignment (&=)
- Truthy
- Falsy

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment
