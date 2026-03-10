# Error.isError()

Source: https://devdocs.io/javascript/global_objects/error/iserror

The Error.isError() static method determines whether the passed value is an Error.

## Syntax

```
Error.isError(value)
```

### Parameters

The value to be checked.

### Return value

true if value is an Error; otherwise, false.

## Description

Error.isError() checks if the passed value is an Error. It does so by performing a branded check for a private field initialized by the Error() constructor. This is the same mechanism used by Array.isArray(), which is in turn similar to the mechanism used by the in operator.

It is a more robust alternative to instanceof Error because it avoids false positives and false negatives:

- Error.isError() rejects values that aren't actual Error instances, even if they have Error.prototype in their prototype chain — instanceof Error would accept these as it does check the prototype chain.
- Error.isError() accepts Error objects constructed in another realm — instanceof Error returns false for these because the identity of the Error constructor is different across realms.

Error.isError() returns true for DOMException instances. This is because, although DOMException is not specified as a real subclass of Error (the Error constructor is not the prototype of the DOMException constructor), DOMException still behaves like Error for all branded checking purposes.

## Examples

### Using Error.isError()

```
// all following calls return true
Error.isError(new Error());
Error.isError(new TypeError());
Error.isError(new DOMException());
try {
  1 + 1n;
} catch (e) {
  console.log(Error.isError(e)); // The operation threw a TypeError, so this returns true
}

// all following calls return false
Error.isError();
Error.isError({});
Error.isError(null);
Error.isError(undefined);
Error.isError(17);
Error.isError("Error");
Error.isError(true);
Error.isError(false);
// This is not an error, because the object does not have the private field
// initialized by the Error constructor
Error.isError({ __proto__: Error.prototype });
```

### instanceof vs. Error.isError()

When checking for Error instance, Error.isError() is preferred over instanceof because it works across realms.

```
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xError = window.frames[window.frames.length - 1].Error;
const error = new xError();

// Correctly checking for Error
Error.isError(error); // true
// The prototype of error is xError.prototype, which is a
// different object from Error.prototype
error instanceof Error; // false
```

### Normalizing caught errors

You can use Error.isError() to detect if the caught value is an error and normalize it to an error object.

```
try {
  throw "Oops; this is not an Error object";
} catch (e) {
  if (!Error.isError(e)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Error.isError in core-js
- es-shims polyfill of Error.isError
- Error

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/isError
