# WeakSet.prototype.delete()

Source: https://devdocs.io/javascript/global_objects/weakset/delete

The delete() method of WeakSet instances removes the specified value from this set, if it is in the set.

## Try it

```
const weakset = new WeakSet();
const object = {};

weakset.add(object);

console.log(weakset.has(object));
// Expected output: true

weakset.delete(object);

console.log(weakset.has(object));
// Expected output: false
```

## Syntax

```
weakSetInstance.delete(value)
```

### Parameters

The value to remove from the WeakSet object. Objects are compared by reference, not by value.

### Return value

true if a value in the WeakSet object has been removed successfully. false if the value is not found in the WeakSet. Always returns false if value is not an object or a non-registered symbol.

## Examples

### Using delete()

```
const ws = new WeakSet();
const obj = {};

ws.add(window);

ws.delete(obj); // Returns false. No obj found to be deleted.
ws.delete(window); // Returns true. Successfully removed.

ws.has(window); // Returns false. The window is no longer present in the WeakSet.
```

## Specifications

## Browser compatibility

## See also

- WeakSet
- WeakSet.prototype.add()
- WeakSet.prototype.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/delete
