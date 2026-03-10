# Symbol.prototype.valueOf()

Source: https://devdocs.io/javascript/global_objects/symbol/valueof

The valueOf() method of Symbol values returns this symbol value.

## Try it

```
const symbol = Symbol("foo");

console.log(typeof Object(symbol));
// Expected output: "object"

console.log(typeof Object(symbol).valueOf());
// Expected output: "symbol"
```

## Syntax

```
valueOf()
```

### Parameters

None.

### Return value

The primitive value of the specified Symbol object.

## Description

The valueOf() method of Symbol returns the primitive value of a Symbol object as a Symbol data type.

JavaScript calls the valueOf() method to convert an object to a primitive value. You rarely need to invoke the valueOf() method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

## Examples

### Using valueOf()

```
const sym = Symbol("example");
sym === sym.valueOf(); // true
```

## Specifications

## Browser compatibility

## See also

- Object.prototype.valueOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/valueOf
