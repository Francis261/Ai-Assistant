# Map.prototype.values()

Source: https://devdocs.io/javascript/global_objects/map/values

The values() method of Map instances returns a new map iterator object that contains the values for each element in this map in insertion order.

## Try it

```
const map = new Map();

map.set("0", "foo");
map.set(1, "bar");

const iterator = map.values();

console.log(iterator.next().value);
// Expected output: "foo"

console.log(iterator.next().value);
// Expected output: "bar"
```

## Syntax

```
values()
```

### Parameters

None.

### Return value

A new iterable iterator object.

## Examples

### Using values()

```
const myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

const mapIter = myMap.values();

console.log(mapIter.next().value); // "foo"
console.log(mapIter.next().value); // "bar"
console.log(mapIter.next().value); // "baz"
```

## Specifications

## Browser compatibility

## See also

- Map.prototype.entries()
- Map.prototype.keys()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/values
