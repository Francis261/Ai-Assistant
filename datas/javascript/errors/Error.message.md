# Error: message

Source: https://devdocs.io/javascript/global_objects/error/message

The message data property of an Error instance is a human-readable description of the error.

## Value

A string corresponding to the value passed to the Error() constructor as the first argument.

## Description

This property contains a brief description of the error if one is available or has been set. The message property combined with the name property is used by the Error.prototype.toString() method to create a string representation of the Error.

By default, the message property is an empty string, but this behavior can be overridden for an instance by specifying a message as the first argument to the Error constructor.

## Examples

### Throwing a custom error

```
const e = new Error("Could not parse input");
// e.message is 'Could not parse input'
throw e;
```

## Specifications

## Browser compatibility

## See also

- Error.prototype.name
- Error.prototype.toString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message
