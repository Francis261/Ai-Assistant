# AsyncDisposableStack.prototype.disposeAsync()

Source: https://devdocs.io/javascript/global_objects/asyncdisposablestack/disposeasync

The disposeAsync() method of AsyncDisposableStack instances disposes this stack by calling all disposers registered to it in reverse order of registration, awaiting for each one's completion before calling the next one. If the stack is already disposed, this method does nothing.

It performs the same action as await using disposer = new AsyncDisposableStack() at scope exit. It can be used if you need to clean up at a point other than scope exit.

## Syntax

```
disposeAsync()
```

### Parameters

None.

### Return value

A new Promise that resolves with undefined when all registered disposers have completed in sequence.

### Exceptions

disposeAsync() never synchronously throws an error. The returned promise may reject with one of the following errors:

Thrown if multiple disposers in the stack threw an error. If only one error is thrown, it is rethrown as-is. Otherwise, for each additional error, a new SuppressedError is created, with the original error as the suppressed property, and the new error as the error property.

## Examples

### Disposing a stack

Here we push three disposers to the stack, using the use(), adopt(), and defer() methods. When disposeAsync() is called, the disposers are called in reverse order of registration.

Note that usually you don't need to call disposeAsync() manually. Declare the stack with await using, and its [Symbol.asyncDispose]() method will be automatically called when the stack goes out of scope.

```
class Resource {
  #doDisposal() {
    // Imagine more meaningful disposal logic here
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  async dispose() {
    await this.#doDisposal();
    console.log("Resource disposed");
  }
  async [Symbol.asyncDispose]() {
    await this.#doDisposal();
    console.log("Resource disposed via Symbol.asyncDispose");
  }
}

async function doSomething() {
  const disposer = new AsyncDisposableStack();
  const resource = disposer.use(new Resource());
  const resource2 = disposer.adopt(new Resource(), (resource) =>
    resource.dispose(),
  );
  disposer.defer(() => console.log("Deferred disposer"));
  disposer.disposeAsync();
  // Logs in order:
  // Deferred disposer
  // Resource disposed
  // Resource disposed via Symbol.dispose
}

doSomething();
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management
- AsyncDisposableStack
- AsyncDisposableStack.prototype.adopt()
- AsyncDisposableStack.prototype.defer()
- AsyncDisposableStack.prototype.use()
- AsyncDisposableStack.prototype[Symbol.asyncDispose]()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/disposeAsync
