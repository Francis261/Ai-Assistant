# BigInt.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/bigint/valueof

The valueOf() method of BigInt values returns the wrapped primitive value of a BigInt object.

## Try it

```
console.log(typeof Object(1n));
// Expected output: "object"

console.log(typeof Object(1n).valueOf());
// Expected output: "bigint"
```

## Syntax

```
valueOf()
```

### Parameters

None.

### Return value

A BigInt representing the primitive value of the specified BigInt object.

## Examples

### Using valueOf

```
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Specifications

## Browser compatibility

## See also

- BigInt.prototype.toString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
