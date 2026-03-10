# WeakMap.prototype.set()

Source: https://devdocs.io/javascript/global_objects/weakmap/set

The set() method of WeakMap instances adds a new entry with a specified key and value to this WeakMap, or updates an existing entry if the key already exists.

## Try it

```
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, "foo");
weakmap.set(object2, "bar");

console.log(weakmap.get(object1));
// Expected output: "foo"

console.log(weakmap.get(object2));
// Expected output: "bar"
```

## Syntax

```
set(key, value)
```

### Parameters

The key of the entry to add to or modify within the WeakMap object. Must be either an object or a non-registered symbol. Object keys are compared by reference, not by value.

The value of the entry to add to or modify within the WeakMap object. Can be any value.

### Return value

The WeakMap object.

### Exceptions

Thrown if key is not an object or a non-registered symbol.

## Examples

### Using set()

```
const wm = new WeakMap();
const obj = {};

// Add new elements to the WeakMap
wm.set(obj, "foo").set(window, "bar"); // chainable

// Update an element in the WeakMap
wm.set(obj, "baz");

// Using a non-registered symbol as key
const sym = Symbol("foo");
wm.set(sym, "baz");
wm.set(Symbol.iterator, "qux");
```

## Specifications

## Browser compatibility

## See also

- WeakMap
- WeakMap.prototype.delete()
- WeakMap.prototype.get()
- WeakMap.prototype.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set
