# isFinite()

Source: https://devdocs.io/javascript/global_objects/isfinite

The isFinite() function determines whether a value is finite, first converting the value to a number if necessary. A finite number is one that's not NaN or ±Infinity. Because coercion inside the isFinite() function can be surprising, you may prefer to use Number.isFinite().

## Try it

```
function div(x) {
  if (isFinite(1000 / x)) {
    return "Number is NOT Infinity.";
  }
  return "Number is Infinity!";
}

console.log(div(0));
// Expected output: "Number is Infinity!""

console.log(div(1));
// Expected output: "Number is NOT Infinity."
```

## Syntax

```
isFinite(value)
```

### Parameters

The value to be tested.

### Return value

false if the given value is NaN, Infinity, or -Infinity after being converted to a number; otherwise, true.

## Description

isFinite() is a function property of the global object.

When the argument to the isFinite() function is not of type Number, the value is first coerced to a number, and the resulting value is then compared against NaN and ±Infinity. This is as confusing as the behavior of isNaN — for example, isFinite("1") is true.

Number.isFinite() is a more reliable way to test whether a value is a finite number value, because it returns false for any non-number input.

## Examples

### Using isFinite()

```
isFinite(Infinity); // false
isFinite(NaN); // false
isFinite(-Infinity); // false

isFinite(0); // true
isFinite(2e64); // true
isFinite(910); // true

// Would've been false with the more robust Number.isFinite():
isFinite(null); // true
isFinite("0"); // true
```

## Specifications

## Browser compatibility

## See also

- Number.isFinite()
- Number.NaN
- Number.POSITIVE_INFINITY
- Number.NEGATIVE_INFINITY

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite
