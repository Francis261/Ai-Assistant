# Number.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/number/valueof

The valueOf() method of Number values returns the value of this number.

## Try it

```
const numObj = new Number(42);
console.log(typeof numObj);
// Expected output: "object"

const num = numObj.valueOf();
console.log(num);
// Expected output: 42

console.log(typeof num);
// Expected output: "number"
```

## Syntax

```
valueOf()
```

### Parameters

None.

### Return value

A number representing the primitive value of the specified Number object.

## Description

This method is usually called internally by JavaScript and not explicitly in web code.

## Examples

### Using valueOf

```
const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Specifications

## Browser compatibility

## See also

- Object.prototype.valueOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/valueOf
