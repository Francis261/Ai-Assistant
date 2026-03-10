# AsyncFunction

Source: https://devdocs.io/javascript/global_objects/asyncfunction

The AsyncFunction object provides methods for async functions. In JavaScript, every async function is actually an AsyncFunction object.

Note that AsyncFunction is not a global object. It can be obtained with the following code:

```
const AsyncFunction = async function () {}.constructor;
```

AsyncFunction is a subclass of Function.

## Constructor

Creates a new AsyncFunction object.

## Instance properties

Also inherits instance properties from its parent Function.

These properties are defined on AsyncFunction.prototype and shared by all AsyncFunction instances.

The constructor function that created the instance object. For AsyncFunction instances, the initial value is the AsyncFunction constructor.

The initial value of the [Symbol.toStringTag] property is the string "AsyncFunction". This property is used in Object.prototype.toString().

Note: AsyncFunction instances do not have the prototype property.

## Instance methods

Inherits instance methods from its parent Function.

## Specifications

## Browser compatibility

## See also

- async function
- async function expression
- Function
- AsyncGeneratorFunction
- GeneratorFunction
- Functions

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction
