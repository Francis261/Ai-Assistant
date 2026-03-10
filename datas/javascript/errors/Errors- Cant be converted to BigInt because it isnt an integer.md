# RangeError: x can't be converted to BigInt because it isn't an integer

Source: https://devdocs.io/javascript/errors/cant_be_converted_to_bigint_because_it_isnt_an_integer

The JavaScript exception "x can't be converted to BigInt because it isn't an integer" occurs when the BigInt() function is used on a number that isn't an integer.

## Message

```
RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer (V8-based & Firefox)
RangeError: Not an integer (Safari)
```

## Error type

RangeError.

## What went wrong?

When using the BigInt() function to convert a number to a BigInt, the number must be an integer (such that Number.isInteger returns true).

## Examples

### Invalid cases

```
const a = BigInt(1.5);
// RangeError: The number 1.5 cannot be converted to a BigInt because it is not an integer
const b = BigInt(NaN);
// RangeError: NaN cannot be converted to a BigInt because it is not an integer
```

### Valid cases

```
const a = BigInt(1);
```

## See also

- BigInt() constructor
- Number.isInteger()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_be_converted_to_BigInt_because_it_isnt_an_integer
