# Math.sign()

Source: https://devdocs.io/javascript/global_objects/math/sign

The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument. If the input is 0 or -0, it will be returned as-is.

## Try it

```
console.log(Math.sign(3));
// Expected output: 1

console.log(Math.sign(-3));
// Expected output: -1

console.log(Math.sign(0));
// Expected output: 0

console.log(Math.sign("-3"));
// Expected output: -1
```

## Syntax

```
Math.sign(x)
```

### Parameters

A number.

### Return value

A number representing the sign of x:

- If x is positive, returns 1.
- If x is negative, returns -1.
- If x is positive zero, returns 0.
- If x is negative zero, returns -0.
- Otherwise, returns NaN.

## Description

Because sign() is a static method of Math, you always use it as Math.sign(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.sign()

```
Math.sign(3); // 1
Math.sign(-3); // -1
Math.sign("-3"); // -1
Math.sign(0); // 0
Math.sign(-0); // -0
Math.sign(NaN); // NaN
Math.sign("foo"); // NaN
Math.sign(); // NaN
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.sign in core-js
- es-shims polyfill of Math.sign
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.round()
- Math.trunc()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
