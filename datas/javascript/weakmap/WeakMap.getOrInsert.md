# WeakMap.prototype.getOrInsert()

Source: https://devdocs.io/javascript/global_objects/weakmap/getorinsert

The getOrInsert() method of WeakMap instances returns the value corresponding to the specified key in this WeakMap. If the key is not present, it inserts a new entry with the key and a given default value, and returns the inserted value.

If the computation of the default value is expensive, consider using WeakMap.prototype.getOrInsertComputed() instead, which takes a callback to compute the default value only if it's actually needed.

## Try it

```
const map = new WeakMap([[window, "foo"]]);
console.log(map.getOrInsert(window, "default"));
// Expected output: "foo"

console.log(map.getOrInsert({}, "default"));
// Expected output: "default"
```

## Syntax

```
getOrInsert(key, defaultValue)
```

### Parameters

The key of the value to return from the WeakMap object. Must be either an object or a non-registered symbol. Object keys are compared by reference, not by value.

The value to insert and return if the key is not already present in the WeakMap object.

### Return value

The value associated with the specified key in the WeakMap object. If the key can't be found, undefined is returned.

### Exceptions

Thrown if key is not an object or a non-registered symbol.

## Examples

### Using getOrInsert()

```
const wm = new WeakMap();
const obj = {};

console.log(wm.get(obj)); // undefined
console.log(wm.getOrInsert(obj, "default")); // "default"
console.log(wm.get(obj)); // "default"
console.log(wm.getOrInsert(obj, "another default")); // "default"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of WeakMap.prototype.getOrInsert in core-js
- es-shims polyfill of WeakMap.prototype.getOrInsert
- WeakMap
- WeakMap.prototype.get()
- WeakMap.prototype.set()
- WeakMap.prototype.has()
- WeakMap.prototype.getOrInsertComputed()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/getOrInsert
