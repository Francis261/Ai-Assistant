# Math.ceil()

Source: https://devdocs.io/javascript/global_objects/math/ceil

The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.

## Try it

```
console.log(Math.ceil(0.95));
// Expected output: 1

console.log(Math.ceil(4));
// Expected output: 4

console.log(Math.ceil(7.004));
// Expected output: 8

console.log(Math.ceil(-7.004));
// Expected output: -7
```

## Syntax

```
Math.ceil(x)
```

### Parameters

A number.

### Return value

The smallest integer greater than or equal to x. It's the same value as -Math.floor(-x).

## Description

Because ceil() is a static method of Math, you always use it as Math.ceil(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.ceil()

```
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Math.abs()
- Math.floor()
- Math.round()
- Math.sign()
- Math.trunc()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
