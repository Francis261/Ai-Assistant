# WeakMap.prototype.get()

Source: https://devdocs.io/javascript/global_objects/weakmap/get

The get() method of WeakMap instances returns the value corresponding to the key in this WeakMap, or undefined if there is none. Object values are returned as the same reference that was originally stored, not as a copy, so mutations to the returned object will be reflected anywhere that reference is held, including inside the WeakMap.

## Try it

```
const weakmap = new WeakMap();
const object1 = {};
const object2 = {};

weakmap.set(object1, 42);

console.log(weakmap.get(object1));
// Expected output: 42

console.log(weakmap.get(object2));
// Expected output: undefined
```

## Syntax

```
get(key)
```

### Parameters

The key of the value to return from the WeakMap object. Object keys are compared by reference, not by value.

### Return value

The value associated with the specified key in the WeakMap object. If the key can't be found, undefined is returned. Always returns undefined if key is not an object or a non-registered symbol.

## Examples

### Using get()

```
const wm = new WeakMap();
wm.set(window, "foo");

wm.get(window); // Returns "foo".
wm.get("baz"); // Returns undefined.
```

## Specifications

## Browser compatibility

## See also

- WeakMap
- WeakMap.prototype.delete()
- WeakMap.prototype.set()
- WeakMap.prototype.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get
