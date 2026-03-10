# Logical OR assignment (||=)

Source: https://devdocs.io/javascript/operators/logical_or_assignment

The ||= operator only evaluates the right operand and assigns to the left if the left operand is falsy.

## Try it

```
const a = { duration: 50, title: "" };

a.duration ||= 10;
console.log(a.duration);
// Expected output: 50

a.title ||= "title is empty.";
console.log(a.title);
// Expected output: "title is empty."
```

## Syntax

```
x ||= y
```

## Description

Logical OR assignment short-circuits, meaning that x ||= y is equivalent to x || (x = y), except that the expression x is only evaluated once.

No assignment is performed if the left-hand side is not falsy, due to short-circuiting of the logical OR operator. For example, the following does not throw an error, despite x being const:

```
const x = 1;
x ||= 2;
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

x.value ||= 2;
```

In fact, if x is not falsy, y is not evaluated at all.

```
const x = 1;
x ||= console.log("y evaluated");
// Logs nothing
```

## Examples

### Setting default content

If the "lyrics" element is empty, display a default value:

```
document.getElementById("lyrics").textContent ||= "No lyrics.";
```

Here the short-circuit is especially beneficial, since the element will not be updated unnecessarily and won't cause unwanted side-effects such as additional parsing or rendering work, or loss of focus, etc.

Note: Pay attention to the value returned by the API you're checking against. If an empty string is returned (a falsy value), ||= must be used, so that "No lyrics." is displayed instead of a blank space. However, if the API returns null or undefined in case of blank content, ??= should be used instead.

## Specifications

## Browser compatibility

## See also

- Logical OR (||)
- Nullish coalescing operator (??)
- Bitwise OR assignment (|=)
- Truthy
- Falsy

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment
