# AsyncDisposableStack

Source: https://devdocs.io/javascript/global_objects/asyncdisposablestack

The AsyncDisposableStack object represents a stack of async disposers to run when the stack itself is disposed. Disposer functions are executed in reverse order of registration, with strong error handling guarantees. Calling its move() method will transfer responsibility for calling the current registered disposers to a new AsyncDisposableStack and prevent registering any additional disposers.

See DisposableStack for general information about using disposable stacks.

## Constructor

Creates a new AsyncDisposableStack object.

## Instance properties

These properties are defined on AsyncDisposableStack.prototype and shared by all AsyncDisposableStack instances.

The constructor function that created the instance object. For AsyncDisposableStack instances, the initial value is the AsyncDisposableStack constructor.

Read-only. Returns true if the AsyncDisposableStack has been disposed, or false if not.

The initial value of the [Symbol.toStringTag] property is the string "AsyncDisposableStack". This property is used in Object.prototype.toString().

## Instance methods

Registers a value that doesn't implement the async disposable protocol to the stack by providing a custom disposer function.

Disposes this stack by calling all disposers registered to it in reverse order of registration.

Takes a callback function to be called when the stack is disposed.

Creates a new AsyncDisposableStack instance that contains the same disposers as this stack, and then marks this stack as disposed, without calling any disposers.

Registers a value that implements the async disposable protocol to the stack.

An alias for the disposeAsync() method.

## Specifications

## Browser compatibility

## See also

- Polyfill of AsyncDisposableStack in core-js
- JavaScript resource management
- Symbol.asyncDispose
- await using
- DisposableStack

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack
