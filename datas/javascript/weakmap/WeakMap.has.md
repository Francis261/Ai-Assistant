# WeakMap.prototype.has()

Source: https://devdocs.io/javascript/global_objects/weakmap/has

The has() method of WeakMap instances returns a boolean indicating whether an entry with the specified key exists in this WeakMap or not.

## Try it

```
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, "foo");

console.log(weakmap.has(object1));
// Expected output: true

console.log(weakmap.has(object2));
// Expected output: false
```

## Syntax

```
has(key)
```

### Parameters

The key of the entry to test for presence in the WeakMap object. Object keys are compared by reference, not by value.

### Return value

Returns true if an entry with the specified key exists in the WeakMap object; otherwise false. Always returns false if key is not an object or a non-registered symbol.

## Examples

### Using has()

```
const wm = new WeakMap();
wm.set(window, "foo");

wm.has(window); // returns true
wm.has("baz"); // returns false
```

## Specifications

## Browser compatibility

## See also

- WeakMap
- WeakMap.prototype.delete()
- WeakMap.prototype.get()
- WeakMap.prototype.set()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has
