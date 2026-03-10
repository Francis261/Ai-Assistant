# Number.isSafeInteger()

Source: https://devdocs.io/javascript/global_objects/number/issafeinteger

The Number.isSafeInteger() static method determines whether the provided value is a number that is a safe integer.

## Try it

```
function warn(x) {
  if (Number.isSafeInteger(x)) {
    return "Precision safe.";
  }
  return "Precision may be lost!";
}

console.log(warn(2 ** 53));
// Expected output: "Precision may be lost!"

console.log(warn(2 ** 53 - 1));
// Expected output: "Precision safe."
```

## Syntax

```
Number.isSafeInteger(testValue)
```

### Parameters

The value to be tested for being a safe integer.

### Return value

The boolean value true if the given value is a number that is a safe integer. Otherwise false.

## Description

The safe integers consist of all integers from -(253 - 1) to 253 - 1, inclusive (±9,007,199,254,740,991). A safe integer is an integer that:

- can be exactly represented as an IEEE-754 double precision number, and
- whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.

For example, 253 - 1 is a safe integer: it can be exactly represented, and no other integer rounds to it under any IEEE-754 rounding mode. In contrast, 253 is not a safe integer: it can be exactly represented in IEEE-754, but the integer 253 + 1 can't be directly represented in IEEE-754 but instead rounds to 253 under round-to-nearest and round-to-zero rounding.

Handling values larger or smaller than ~9 quadrillion with full precision requires using an arbitrary precision arithmetic library. See What Every Programmer Needs to Know about Floating Point Arithmetic for more information on floating point representations of numbers.

For larger integers, consider using the BigInt type.

## Examples

### Using isSafeInteger()

```
Number.isSafeInteger(3); // true
Number.isSafeInteger(2 ** 53); // false
Number.isSafeInteger(2 ** 53 - 1); // true
Number.isSafeInteger(NaN); // false
Number.isSafeInteger(Infinity); // false
Number.isSafeInteger("3"); // false
Number.isSafeInteger(3.1); // false
Number.isSafeInteger(3.0); // true
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Number.isSafeInteger in core-js
- es-shims polyfill of Number.isSafeInteger
- Number
- Number.MIN_SAFE_INTEGER
- Number.MAX_SAFE_INTEGER
- BigInt

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger
