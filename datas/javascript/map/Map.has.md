# Map.prototype.has()

Source: https://devdocs.io/javascript/global_objects/map/has

The has() method of Map instances returns a boolean indicating whether an entry with the specified key exists in this Map or not.

## Try it

```
const map = new Map();
map.set("bar", "foo");

console.log(map.has("bar"));
// Expected output: true

console.log(map.has("baz"));
// Expected output: false
```

## Syntax

```
has(key)
```

### Parameters

The key of the entry to test for presence in the Map object. Object keys are compared by reference, not by value.

### Return value

Returns true if an entry with the specified key exists in the Map object; otherwise false.

## Examples

### Using has()

```
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.has("bar")); // true
console.log(myMap.has("baz")); // false
```

## Specifications

## Browser compatibility

## See also

- Map
- Map.prototype.delete()
- Map.prototype.get()
- Map.prototype.set()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has
