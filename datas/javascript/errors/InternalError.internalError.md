# InternalError() constructor

Source: https://devdocs.io/javascript/global_objects/internalerror/internalerror

Non-standard: This feature is not standardized. We do not recommend using non-standard features in production, as they have limited browser support, and may change or be removed. However, they can be a suitable alternative in specific cases where no standard option exists.

The InternalError() constructor creates InternalError objects.

## Syntax

```
new InternalError()
new InternalError(message)
new InternalError(message, options)
new InternalError(message, fileName)
new InternalError(message, fileName, lineNumber)

InternalError()
InternalError(message)
InternalError(message, options)
InternalError(message, fileName)
InternalError(message, fileName, lineNumber)
```

Note: InternalError() can be called with or without new. Both create a new InternalError instance.

### Parameters

Human-readable description of the error.

An object that has the following properties:

A property indicating the specific cause of the error. When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.

The name of the file containing the code that caused the exception

The line number of the code that caused the exception

## Examples

### Creating a new InternalError

```
new InternalError("Engine failure");
```

## Specifications

Not part of any standard.

## Browser compatibility

## See also

- Error

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/InternalError/InternalError
