# Number.parseFloat()

Source: https://devdocs.io/javascript/global_objects/number/parsefloat

The Number.parseFloat() static method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

## Try it

```
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: 0
```

## Syntax

```
Number.parseFloat(string)
```

### Parameters

The value to parse, coerced to a string. Leading whitespace in this argument is ignored.

### Return value

A floating point number parsed from the given string.

Or NaN when the first non-whitespace character cannot be converted to a number.

## Examples

### Number.parseFloat vs. parseFloat

This method has the same functionality as the global parseFloat() function:

```
Number.parseFloat === parseFloat; // true
```

Its purpose is modularization of globals.

See parseFloat() for more detail and examples.

## Specifications

## Browser compatibility

## See also

- Polyfill of Number.parseFloat in core-js
- es-shims polyfill of Number.parseFloat
- Number
- parseFloat()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
