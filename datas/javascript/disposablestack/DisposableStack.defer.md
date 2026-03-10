# DisposableStack.prototype.defer()

Source: https://devdocs.io/javascript/global_objects/disposablestack/defer

The defer() method of DisposableStack instances takes a callback function to be called when the stack is disposed.

## Syntax

```
defer(onDispose)
```

### Parameters

A function that will be called when the stack is disposed. The function receives no arguments.

### Return value

None (undefined).

### Exceptions

Thrown if onDispose is not a function.

Thrown if the stack is already disposed.

## Description

The primary purpose of defer() is to register a cleanup callback that's not specific to the disposal of a particular resource. If the callback is specific to a resource, you should use use() or adopt() instead. You can also use defer when the resource is not claimed within your code:

```
function consumeReader(reader) {
  using disposer = new DisposableStack();
  disposer.defer(() => reader.releaseLock());
  // Do something with reader
}
```

## Examples

### Using defer()

This function sets a simple lock to prevent multiple async operations from running at the same time. The lock is released when the function completes.

```
let isLocked = false;

async function requestWithLock(url, options) {
  if (isLocked) {
    return undefined;
  }
  using disposer = new DisposableStack();
  isLocked = true;
  disposer.defer(() => (isLocked = false));
  const data = await fetch(url, options).then((res) => res.json());
  return data;
}
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management
- DisposableStack
- DisposableStack.prototype.adopt()
- DisposableStack.prototype.use()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/defer
