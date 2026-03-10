# Nullish coalescing assignment (??=)

Source: https://devdocs.io/javascript/operators/nullish_coalescing_assignment

The ??= operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).

## Try it

```
const a = { duration: 50 };

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50
```

## Syntax

```
x ??= y
```

## Description

Nullish coalescing assignment short-circuits, meaning that x ??= y is equivalent to x ?? (x = y), except that the expression x is only evaluated once.

No assignment is performed if the left-hand side is not nullish, due to short-circuiting of the nullish coalescing operator. For example, the following does not throw an error, despite x being const:

```
const x = 1;
x ??= 2;
```

Neither would the following trigger the setter:

```
const x = {
  get value() {
    return 1;
  },
  set value(v) {
    console.log("Setter called");
  },
};

x.value ??= 2;
```

In fact, if x is not nullish, y is not evaluated at all.

```
const x = 1;
x ??= console.log("y evaluated");
// Logs nothing
```

## Examples

### Using nullish coalescing assignment

You can use the nullish coalescing assignment operator to apply default values to object properties. Compared to using destructuring and default values, ??= also applies the default value if the property has value null.

```
function config(options) {
  options.duration ??= 100;
  options.speed ??= 25;
  return options;
}

config({ duration: 125 }); // { duration: 125, speed: 25 }
config({}); // { duration: 100, speed: 25 }
```

## Specifications

## Browser compatibility

## See also

- Nullish coalescing operator (??)
- Nullish
- Truthy
- Falsy

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_assignment
