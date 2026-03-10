# AsyncDisposableStack.prototype.use()

Source: https://devdocs.io/javascript/global_objects/asyncdisposablestack/use

The use() method of AsyncDisposableStack instances registers a value that implements the async disposable protocol to the stack.

See DisposableStack.prototype.use() for general information about the use() method.

## Syntax

```
use(value)
```

### Parameters

The value to register to the stack. Must either contain a [Symbol.asyncDispose]() or [Symbol.dispose]() method, or be null or undefined.

### Return value

The same value that was passed in.

### Exceptions

Thrown if value is not null or undefined, and does not contain a [Symbol.asyncDispose]() or [Symbol.dispose]() method.

Thrown if the stack is already disposed.

## Examples

### Using use()

This function reads a file (as a Node.js FileHandle) and returns its contents. The file handle is automatically closed when the function completes, given that the FileHandle class implements a [Symbol.asyncDispose]() method that asynchronously closes the file.

```
async function readFileContents(path) {
  await using disposer = new AsyncDisposableStack();
  const handle = disposer.use(await fs.open(path));
  const data = await handle.read();
  return data;
  // The disposer is disposed here, which causes handle to be closed too
}
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management
- AsyncDisposableStack
- AsyncDisposableStack.prototype.adopt()
- AsyncDisposableStack.prototype.defer()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/use
