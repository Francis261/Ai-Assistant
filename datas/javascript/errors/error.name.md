# Error.prototype.name

Source: https://devdocs.io/javascript/global_objects/error/name

The name data property of Error.prototype is shared by all Error instances. It represents the name for the type of error. For Error.prototype.name, the initial value is "Error". Subclasses like TypeError and SyntaxError provide their own name properties.

## Value

A string. For Error.prototype.name, the initial value is "Error".

## Description

By default, Error instances are given the name "Error". The name property, in addition to the message property, is used by the Error.prototype.toString() method to create a string representation of the error.

## Examples

### Throwing a custom error

```
const e = new Error("Malformed input"); // e.name is 'Error'

e.name = "ParseError";
throw e;
// e.toString() would return 'ParseError: Malformed input'
```

## Specifications

## Browser compatibility

## See also

- Error.prototype.message
- Error.prototype.toString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name
