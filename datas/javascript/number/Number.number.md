# Number() constructor

Source: https://devdocs.io/javascript/global_objects/number/number

The Number() constructor creates Number objects. When called as a function, it returns primitive values of type Number.

## Syntax

```
new Number(value)
Number(value)
```

Note: Number() can be called with or without new, but with different effects. See Return value.

### Parameters

The numeric value of the object being created.

### Return value

When Number() is called as a function (without new), it returns value coerced to a number primitive. Specially, BigInts values are converted to numbers instead of throwing. If value is absent, it becomes 0.

When Number() is called as a constructor (with new), it uses the coercion process above and returns a wrapping Number object, which is not a primitive.

Warning: You should rarely find yourself using Number as a constructor.

## Examples

### Creating Number objects

```
const a = new Number("123"); // a === 123 is false
const b = Number("123"); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
typeof a; // "object"
typeof b; // "number"
```

### Using Number() to convert a BigInt to a number

Number() is the only case where a BigInt can be converted to a number without throwing, because it's very explicit.

```
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

```
Number(1n); // 1
```

Note that this may result in loss of precision, if the BigInt is too large to be safely represented.

```
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```

## Specifications

## Browser compatibility

## See also

- Polyfill of modern Number behavior (with support binary and octal literals) in core-js
- NaN
- Math
- BigInt

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/Number
