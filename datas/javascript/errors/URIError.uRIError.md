# URIError() constructor

Source: https://devdocs.io/javascript/global_objects/urierror/urierror

The URIError() constructor creates URIError objects.

## Syntax

```
new URIError()
new URIError(message)
new URIError(message, options)
new URIError(message, fileName)
new URIError(message, fileName, lineNumber)

URIError()
URIError(message)
URIError(message, options)
URIError(message, fileName)
URIError(message, fileName, lineNumber)
```

Note: URIError() can be called with or without new. Both create a new URIError instance.

### Parameters

Human-readable description of the error.

An object that has the following properties:

A property indicating the specific cause of the error. When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.

The name of the file containing the code that caused the exception.

The line number of the code that caused the exception.

## Examples

### Catching a URIError

```
try {
  decodeURIComponent("%");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "malformed URI sequence"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a URIError

```
try {
  throw new URIError("Hello");
} catch (e) {
  console.log(e instanceof URIError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "URIError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- Error
- decodeURI()
- decodeURIComponent()
- encodeURI()
- encodeURIComponent()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError/URIError
