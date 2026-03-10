# DisposableStack.prototype[Symbol.dispose]()

Source: https://devdocs.io/javascript/global_objects/disposablestack/symbol.dispose

The [Symbol.dispose]() method of DisposableStack instances implements the disposable protocol and allows it to be disposed when used with using or await using. It is an alias for the dispose() method.

## Syntax

```
disposableStack[Symbol.dispose]()
```

### Parameters

None.

### Return value

None (undefined).

## Examples

### Declaring a stack with using

The Symbol.dispose method is intended to be automatically called in a using declaration.

```
{
  using disposer = new DisposableStack();
  const resource = disposer.use(new Resource());
  resource.doSomething();
  // stack is disposed here immediately before the function exits
  // which causes the resource to be disposed
}
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management
- DisposableStack
- DisposableStack.prototype.dispose()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/Symbol.dispose
