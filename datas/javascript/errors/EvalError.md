# EvalError

Source: https://devdocs.io/javascript/global_objects/evalerror

The EvalError object indicates an error regarding the global eval() function. This exception is not thrown by JavaScript anymore, however the EvalError object remains for compatibility.

EvalError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

EvalError is a subclass of Error.

## Constructor

Creates a new EvalError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on EvalError.prototype and shared by all EvalError instances.

The constructor function that created the instance object. For EvalError instances, the initial value is the EvalError constructor.

Represents the name for the type of error. For EvalError.prototype.name, the initial value is "EvalError".

## Instance methods

Inherits instance methods from its parent Error.

## Examples

### Creating an EvalError

```
try {
  throw new EvalError("Hello");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- Error
- eval()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError
