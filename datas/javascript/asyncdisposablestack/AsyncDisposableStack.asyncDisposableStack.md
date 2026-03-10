# AsyncDisposableStack() constructor

Source: https://devdocs.io/javascript/global_objects/asyncdisposablestack/asyncdisposablestack

The AsyncDisposableStack() constructor creates AsyncDisposableStack objects.

## Syntax

```
new AsyncDisposableStack()
```

Note: AsyncDisposableStack() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

None.

### Return value

A new AsyncDisposableStack object.

## Examples

### Creating an AsyncDisposableStack

```
const disposer = new AsyncDisposableStack();
disposer.defer(() => console.log("Disposed!"));
await disposer.disposeAsync();
// Logs: Disposed!
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/AsyncDisposableStack
