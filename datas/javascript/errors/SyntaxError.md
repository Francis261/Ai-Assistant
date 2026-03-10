# SyntaxError

Source: https://devdocs.io/javascript/global_objects/syntaxerror

The SyntaxError object represents an error when trying to interpret syntactically invalid code. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.

SyntaxError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

SyntaxError is a subclass of Error.

## Constructor

Creates a new SyntaxError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on SyntaxError.prototype and shared by all SyntaxError instances.

The constructor function that created the instance object. For SyntaxError instances, the initial value is the SyntaxError constructor.

Represents the name for the type of error. For SyntaxError.prototype.name, the initial value is "SyntaxError".

## Instance methods

Inherits instance methods from its parent Error.

## Examples

### Catching a SyntaxError

```
try {
  eval("hoo bar");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message);
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a SyntaxError

```
try {
  throw new SyntaxError("Hello");
} catch (e) {
  console.log(e instanceof SyntaxError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SyntaxError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- Error

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
