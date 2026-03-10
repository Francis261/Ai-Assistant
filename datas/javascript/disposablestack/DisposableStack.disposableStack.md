# DisposableStack() constructor

Source: https://devdocs.io/javascript/global_objects/disposablestack/disposablestack

The DisposableStack() constructor creates DisposableStack objects.

## Syntax

```
new DisposableStack()
```

Note: DisposableStack() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

None.

### Return value

A new DisposableStack object.

## Examples

### Creating a DisposableStack

```
const disposer = new DisposableStack();
disposer.defer(() => console.log("Disposed!"));
disposer.dispose();
// Logs: Disposed!
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/DisposableStack
