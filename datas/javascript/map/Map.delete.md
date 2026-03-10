# Map.prototype.delete()

Source: https://devdocs.io/javascript/global_objects/map/delete

The delete() method of Map instances removes the entry specified by the key from this Map.

## Try it

```
const map = new Map();
map.set("bar", "foo");

console.log(map.delete("bar"));
// Expected result: true
// True indicates successful removal

console.log(map.has("bar"));
// Expected result: false
```

## Syntax

```
mapInstance.delete(key)
```

### Parameters

The key of the entry to remove from the Map object. Object keys are compared by reference, not by value.

### Return value

true if an entry in the Map object has been removed successfully. false if the key is not found in the Map.

## Examples

### Using delete()

```
const myMap = new Map();
myMap.set("bar", "foo");

console.log(myMap.delete("bar")); // Returns true. Successfully removed.
console.log(myMap.has("bar")); // Returns false. The "bar" element is no longer present.
```

## Specifications

## Browser compatibility

## See also

- Map
- Map.prototype.clear()
- Map.prototype.get()
- Map.prototype.set()
- Map.prototype.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/delete
