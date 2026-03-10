# Map.prototype.entries()

Source: https://devdocs.io/javascript/global_objects/map/entries

The entries() method of Map instances returns a new map iterator object that contains the [key, value] pairs for each element in this map in insertion order.

## Try it

```
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.entries();

console.log(iterator.next().value);
// Expected output: Array ["0", "foo"]

console.log(iterator.next().value);
// Expected output: Array [1, "bar"]
```

## Syntax

```
entries()
```

### Parameters

None.

### Return value

A new iterable iterator object.

## Examples

### Using entries()

```
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.entries();

console.log(mapIter.next().value); // ["0", "foo"]
console.log(mapIter.next().value); // [1, "bar"]
console.log(mapIter.next().value); // [Object, "baz"]
```

## Specifications

## Browser compatibility

## See also

- Map.prototype.keys()
- Map.prototype.values()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/entries
