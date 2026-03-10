# Symbol.prototype[Symbol.toPrimitive]()

Source: https://devdocs.io/javascript/global_objects/symbol/symbol.toprimitive

The [Symbol.toPrimitive]() method of Symbol values returns this symbol value.

## Syntax

```
symbolValue[Symbol.toPrimitive](hint)
```

### Parameters

A string value indicating the primitive value to return. The value is ignored.

### Return value

The primitive value of the specified Symbol object.

## Description

The [Symbol.toPrimitive]() method of Symbol returns the primitive value of a Symbol object as a Symbol data type. The hint argument is not used.

JavaScript calls the [Symbol.toPrimitive]() method to convert an object to a primitive value. You rarely need to invoke the [Symbol.toPrimitive]() method yourself; JavaScript automatically invokes it when encountering an object where a primitive value is expected.

## Examples

### Using [Symbol.toPrimitive]()

```
const sym = Symbol("example");
sym === sym[Symbol.toPrimitive](); // true
```

## Specifications

## Browser compatibility

## See also

- Symbol.toPrimitive

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive
