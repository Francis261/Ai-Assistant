# AsyncDisposableStack.prototype.defer()

Source: https://devdocs.io/javascript/global_objects/asyncdisposablestack/defer

The defer() method of AsyncDisposableStack instances takes a callback function to be called and awaited when the stack is disposed.

See DisposableStack.prototype.defer() for general information about the defer() method.

## Syntax

```
defer(onDispose)
```

### Parameters

A function that will be called when the stack is disposed. The function receives no arguments and can return a promise which gets awaited.

### Return value

None (undefined).

### Exceptions

Thrown if onDispose is not a function.

Thrown if the stack is already disposed.

## Examples

### Using defer()

One use case of defer() is to do something unrelated to resource freeing during scope exit, such as logging a message.

```
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  disposer.defer(async () => {
    await fs.writeFile("log.txt", "All resources freed successfully");
  });
  // Other code that claims and frees more data
}
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management
- AsyncDisposableStack
- AsyncDisposableStack.prototype.adopt()
- AsyncDisposableStack.prototype.use()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/defer
