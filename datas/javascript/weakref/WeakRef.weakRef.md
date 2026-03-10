# WeakRef() constructor

Source: https://devdocs.io/javascript/global_objects/weakref/weakref

The WeakRef() constructor creates WeakRef objects.

## Syntax

```
new WeakRef(target)
```

Note: WeakRef() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

The target value the WeakRef should refer to (also called the referent). Must be an object or a non-registered symbol.

### Return value

A new WeakRef object referring to the given target value.

### Exceptions

Thrown if target is not an object or a non-registered symbol.

## Examples

### Creating a new WeakRef object

See the main WeakRef page for a complete example.

```
class Counter {
  constructor(element) {
    // Remember a weak reference to a DOM element
    this.ref = new WeakRef(element);
    this.start();
  }
}
```

## Specifications

## Browser compatibility

## See also

- WeakRef

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/WeakRef
