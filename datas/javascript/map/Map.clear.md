# Map.prototype.clear()

Source: https://devdocs.io/javascript/global_objects/map/clear

The clear() method of Map instances removes all elements from this map.

## Try it

```
const map = new Map();

map.set("bar", "baz");
map.set(1, "foo");

console.log(map.size);
// Expected output: 2

map.clear();

console.log(map.size);
// Expected output: 0
```

## Syntax

```
clear()
```

### Parameters

None.

### Return value

None (undefined).

## Examples

### Using clear()

```
const myMap = new Map();
myMap.set("bar", "baz");
myMap.set(1, "foo");

console.log(myMap.size); // 2
console.log(myMap.has("bar")); // true

myMap.clear();

console.log(myMap.size); // 0
console.log(myMap.has("bar")); // false
```

## Specifications

## Browser compatibility

## See also

- Map

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/clear
