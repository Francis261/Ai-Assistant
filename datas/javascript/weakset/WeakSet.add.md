# WeakSet.prototype.add()

Source: https://devdocs.io/javascript/global_objects/weakset/add

The add() method of WeakSet instances inserts the specified value into this set, if it is not already present.

## Try it

```
const weakset = new WeakSet();
const object = {};

weakset.add(object);
console.log(weakset.has(object));
// Expected output: true

try {
  weakset.add(1);
} catch (error) {
  console.log(error);
  // Expected output (Chrome): TypeError: Invalid value used in weak set
  // Expected output (Firefox): TypeError: WeakSet value must be an object, got 1
  // Expected output (Safari): TypeError: Attempted to add a non-object key to a WeakSet
}
```

## Syntax

```
add(value)
```

### Parameters

The value to add to the WeakSet object. Must be either an object or a non-registered symbol. Objects are compared by reference, not by value.

### Return value

The WeakSet object.

### Exceptions

Thrown if value is not an object or a non-registered symbol.

## Examples

### Using add()

```
const ws = new WeakSet();

ws.add(window); // add the window object to the WeakSet

ws.has(window); // true

// WeakSet only takes objects as arguments
ws.add(1);
// results in "TypeError: Invalid value used in weak set" in Chrome
// and "TypeError: 1 is not a non-null object" in Firefox
```

## Specifications

## Browser compatibility

## See also

- WeakSet
- WeakSet.prototype.delete()
- WeakSet.prototype.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/add
