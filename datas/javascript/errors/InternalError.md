# InternalError

Source: https://devdocs.io/javascript/global_objects/internalerror

Non-standard: This feature is not standardized. We do not recommend using non-standard features in production, as they have limited browser support, and may change or be removed. However, they can be a suitable alternative in specific cases where no standard option exists.

The InternalError object indicates an error that occurred internally in the JavaScript engine.

Example cases are mostly when something is too large, e.g.:

- "too many switch cases",
- "too many parentheses in regular expression",
- "array initializer too large",
- "too much recursion".

InternalError is a subclass of Error.

## Constructor

Creates a new InternalError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on InternalError.prototype and shared by all InternalError instances.

The constructor function that created the instance object. For InternalError instances, the initial value is the InternalError constructor.

Represents the name for the type of error. For InternalError.prototype.name, the initial value is "InternalError".

## Instance methods

Inherits instance methods from its parent Error.

## Examples

### Too much recursion

This recursive function runs 10 times, as per the exit condition.

```
function loop(x) {
  // "x >= 10" is the exit condition
  if (x >= 10) return;

  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```

Setting this condition to an extremely high value, may not work:

```
function loop(x) {
  if (x >= 1000000000000) return;

  // do stuff
  loop(x + 1);
}
loop(0);

// InternalError: too much recursion
```

For more information, see InternalError: too much recursion.

## Specifications

Not part of any standard.

## Browser compatibility

## See also

- Error
- InternalError: too much recursion

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError
