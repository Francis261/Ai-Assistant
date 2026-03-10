# AsyncDisposableStack.prototype[Symbol.asyncDispose]()

Source: https://devdocs.io/javascript/global_objects/asyncdisposablestack/symbol.asyncdispose

The [Symbol.asyncDispose]() method of AsyncDisposableStack instances implements the async disposable protocol and allows it to be disposed when used with await using. It is an alias for the disposeAsync() method.

## Syntax

```
asyncDisposableStack[Symbol.asyncDispose]()
```

### Parameters

None.

### Return value

None (undefined).

## Examples

### Declaring a stack with await using

The Symbol.asyncDispose method is intended to be automatically called in an await using declaration.

```
async function doSomething() {
  await using disposer = new AsyncDisposableStack();
  const resource = disposer.use(new Resource());
  resource.doSomething();
  // disposer is disposed here immediately before the function exits
  // which causes the resource to be disposed
}
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management
- AsyncDisposableStack
- AsyncDisposableStack.prototype.disposeAsync()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/Symbol.asyncDispose
