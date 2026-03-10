# WeakRef.prototype.deref()

Source: https://devdocs.io/javascript/global_objects/weakref/deref

The deref() method of WeakRef instances returns this WeakRef's target value, or undefined if the target value has been garbage-collected.

## Syntax

```
deref()
```

### Parameters

None.

### Return value

The target value of the WeakRef, which is either an object or a non-registered symbol. Returns undefined if the value has been garbage-collected.

## Description

See the Notes on WeakRefs section of the WeakRef page for some important notes.

## Examples

### Using deref()

See the Examples section of the WeakRef page for the complete example.

```
const tick = () => {
  // Get the element from the weak reference, if it still exists
  const element = this.ref.deref();
  if (element) {
    element.textContent = ++this.count;
  } else {
    // The element doesn't exist anymore
    console.log("The element is gone.");
    this.stop();
    this.ref = null;
  }
};
```

## Specifications

## Browser compatibility

## See also

- WeakRef

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakRef/deref
