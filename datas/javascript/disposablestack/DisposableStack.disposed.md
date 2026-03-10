# DisposableStack.prototype.disposed

Source: https://devdocs.io/javascript/global_objects/disposablestack/disposed

The disposed accessor property of DisposableStack instances returns a boolean indicating whether or not this DisposableStack has been disposed or moved by doing any of the following:

- Calling its dispose() method
- Calling its move() method
- Declaring it with using and letting the variable go out of scope, which automatically calls the [Symbol.dispose]() method.

## Examples

### Checking if a stack is disposed

```
const disposer = new DisposableStack();
console.log(disposer.disposed); // false
disposer.dispose();
console.log(disposer.disposed); // true
```

## Specifications

## Browser compatibility

## See also

- JavaScript resource management

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DisposableStack/disposed
