# Number.isFinite()

Source: https://devdocs.io/javascript/global_objects/number/isfinite

The Number.isFinite() static method determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive Infinity, negative Infinity, nor NaN.

## Try it

```
console.log(Number.isFinite(1 / 0));
// Expected output: false

console.log(Number.isFinite(10 / 5));
// Expected output: true

console.log(Number.isFinite(0 / 0));
// Expected output: false
```

## Syntax

```
Number.isFinite(value)
```

### Parameters

The value to be tested for finiteness.

### Return value

The boolean value true if the given value is a finite number. Otherwise false.

## Examples

### Using isFinite()

```
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true
```

### Difference between Number.isFinite() and global isFinite()

In comparison to the global isFinite() function, this method doesn't first convert the parameter to a number. This means only values of the type number and are finite return true, and non-numbers always return false.

```
isFinite("0"); // true; coerced to number 0
Number.isFinite("0"); // false
isFinite(null); // true; coerced to number 0
Number.isFinite(null); // false
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Number.isFinite in core-js
- es-shims polyfill of Number.isFinite
- Number
- isFinite()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
