# RangeError

Source: https://devdocs.io/javascript/global_objects/rangeerror

The RangeError object indicates an error when a value is not in the set or range of allowed values.

## Description

A RangeError is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value.

This can be encountered when:

- passing a value that is not one of the allowed string values to String.prototype.normalize(), or
- when attempting to create an array of an illegal length with the Array constructor, or
- when passing bad values to the numeric methods Number.prototype.toExponential(), Number.prototype.toFixed() or Number.prototype.toPrecision().

RangeError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

RangeError is a subclass of Error.

## Constructor

Creates a new RangeError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on RangeError.prototype and shared by all RangeError instances.

The constructor function that created the instance object. For RangeError instances, the initial value is the RangeError constructor.

Represents the name for the type of error. For RangeError.prototype.name, the initial value is "RangeError".

## Instance methods

Inherits instance methods from its parent Error.

## Examples

### Using RangeError (for numeric values)

```
function check(n) {
  if (!(n >= -500 && n <= 500)) {
    throw new RangeError("The argument must be between -500 and 500.");
  }
}

try {
  check(2000);
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

### Using RangeError (for non-numeric values)

```
function check(value) {
  if (!["apple", "banana", "carrot"].includes(value)) {
    throw new RangeError(
      'The argument must be an "apple", "banana", or "carrot".',
    );
  }
}

try {
  check("cabbage");
} catch (error) {
  if (error instanceof RangeError) {
    // Handle the error
  }
}
```

## Specifications

## Browser compatibility

## See also

- Error
- Array
- Number.prototype.toExponential()
- Number.prototype.toFixed()
- Number.prototype.toPrecision()
- String.prototype.normalize()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
