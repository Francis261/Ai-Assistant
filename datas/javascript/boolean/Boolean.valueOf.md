# Boolean.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/boolean/valueof

The valueOf() method of Boolean values returns the primitive value of a Boolean object.

## Try it

```
const x = new Boolean();

console.log(x.valueOf());
// Expected output: false

const y = new Boolean("Mozilla");

console.log(y.valueOf());
// Expected output: true
```

## Syntax

```
valueOf()
```

### Parameters

None.

### Return value

The primitive value of the given Boolean object.

## Description

The valueOf() method of Boolean returns the primitive value of a Boolean object or literal Boolean as a Boolean data type.

This method is usually called internally by JavaScript and not explicitly in code.

## Examples

### Using valueOf()

```
const x = new Boolean();
const myVar = x.valueOf(); // assigns false to myVar
```

## Specifications

## Browser compatibility

## See also

- Object.prototype.valueOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
