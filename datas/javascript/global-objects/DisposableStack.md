# DisposableStack

Source: https://devdocs.io/javascript/global_objects/disposablestack

The DisposableStack object represents a stack of disposers to run when the stack itself is disposed. Disposer functions are executed in reverse order of registration, with strong error handling guarantees. Calling its move() method will transfer responsibility for calling the current registered disposers to a new DisposableStack and prevent registering any additional disposers.

## Description

A DisposableStack is not exactly a "stack" in terms of its interface. It has several methods for pushing disposers to it, but it has no way to pop one disposer off. Rather, all disposers are popped and executed one-by-one when the stack is disposed.

You register disposable resources to the DisposableStack using its use(), adopt(), or defer() methods.

```
using disposer = new DisposableStack();
const reader = disposer.use(stream.getReader());
```

Then, when the disposer goes out of scope, all resources registered to it are disposed in reverse order of registration, unless they have been moved out with move().

It is good practice to not extract the resource acquisition expression to a separate statement, no matter how long the expression is. You should always wrap the use() or adopt() call around the resource acquisition expression to ensure that the resource is registered to the stack immediately.

```
using disposer = new DisposableStack();
const reader = stream.getReader();
disposer.use(reader);
```

Functionally, these two code snippets are equivalent. However, the first one is less error-prone because the resource is declared and registered in a single line. If someone puts more code between the second and third lines of the second snippet, an error could occur, causing the resource to leak.

## Constructor

Creates a new DisposableStack object.

## Instance properties

These properties are defined on DisposableStack.prototype and shared by all DisposableStack instances.

The constructor function that created the instance object. For DisposableStack instances, the initial value is the DisposableStack constructor.

Read-only. Returns true if the DisposableStack has been disposed, or false if not.

The initial value of the [Symbol.toStringTag] property is the string "DisposableStack". This property is used in Object.prototype.toString().

## Instance methods

Registers a value that doesn't implement the disposable protocol to the stack by providing a custom disposer function.

Takes a callback function to be called when the stack is disposed.

Disposes this stack by calling all disposers registered to it in reverse order of registration.

Creates a new DisposableStack instance that contains the same disposers as this stack, and then marks this stack as disposed, without calling any disposers.

Registers a value that implements the disposable protocol to the stack.

An alias for the dispose() method.

## Specifications

## Browser compatibility

## See also

- Polyfill of DisposableStack in core-js
- JavaScript resource management
- Symbol.dispose
- using
- AsyncDisposableStack

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack
