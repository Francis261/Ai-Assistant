# URIError

Source: https://devdocs.io/javascript/global_objects/urierror

The URIError object represents an error when a global URI handling function was used in a wrong way.

URIError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

URIError is a subclass of Error.

## Constructor

Creates a new URIError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on URIError.prototype and shared by all URIError instances.

The constructor function that created the instance object. For URIError instances, the initial value is the URIError constructor.

Represents the name for the type of error. For URIError.prototype.name, the initial value is "URIError".

## Instance methods

Inherits instance methods from its parent Error.

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
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError
