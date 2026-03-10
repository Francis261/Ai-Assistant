# Map.prototype.size

Source: https://devdocs.io/javascript/global_objects/map/size

The size accessor property of Map instances returns the number of elements in this map.

## Try it

```
const map = new Map();

map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gamma");

console.log(map.size);
// Expected output: 3
```

## Description

The value of size is an integer representing how many entries the Map object has. A set accessor function for size is undefined; you can not change this property.

## Examples

### Using size

```
const myMap = new Map();
myMap.set("a", "alpha");
myMap.set("b", "beta");
myMap.set("g", "gamma");

console.log(myMap.size); // 3
```

## Specifications

## Browser compatibility

## See also

- Map

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size
