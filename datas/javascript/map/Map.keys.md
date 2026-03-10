# Map.prototype.keys()

Source: https://devdocs.io/javascript/global_objects/map/keys

The keys() method of Map instances returns a new map iterator object that contains the keys for each element in this map in insertion order.

## Try it

```
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.keys();

console.log(iterator.next().value);
// Expected output: "0"

console.log(iterator.next().value);
// Expected output: 1
```

## Syntax

```
keys()
```

### Parameters

None.

### Return value

A new iterable iterator object.

## Examples

### Using keys()

```
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.keys();

console.log(mapIter.next().value); // "0"
console.log(mapIter.next().value); // 1
console.log(mapIter.next().value); // {}
```

## Specifications

## Browser compatibility

## See also

- Map.prototype.entries()
- Map.prototype.values()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/keys
