# SyntaxError() constructor

Source: https://devdocs.io/javascript/global_objects/syntaxerror/syntaxerror

The SyntaxError() constructor creates SyntaxError objects.

## Syntax

```
new SyntaxError()
new SyntaxError(message)
new SyntaxError(message, options)
new SyntaxError(message, fileName)
new SyntaxError(message, fileName, lineNumber)

SyntaxError()
SyntaxError(message)
SyntaxError(message, options)
SyntaxError(message, fileName)
SyntaxError(message, fileName, lineNumber)
```

Note: SyntaxError() can be called with or without new. Both create a new SyntaxError instance.

### Parameters

Human-readable description of the error

An object that has the following properties:

A property indicating the specific cause of the error. When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.

The name of the file containing the code that caused the exception

The line number of the code that caused the exception

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
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError/SyntaxError
