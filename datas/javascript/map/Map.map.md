# Map() constructor

Source: https://devdocs.io/javascript/global_objects/map/map

The Map() constructor creates Map objects.

## Syntax

```
new Map()
new Map(iterable)
```

Note: Map() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

If an iterable object (such as an array) is passed, all of its elements will be added to the new Map. Each element must be an object with two properties: 0 and 1, which correspond to the key and value (for example, [[1, "one"],[2, "two"]]). If you don't specify this parameter, or its value is null or undefined, the new Map is empty.

## Examples

### Creating a new Map

```
const myMap = new Map([
  [1, "one"],
  [2, "two"],
  [3, "three"],
]);
```

## Specifications

## Browser compatibility

## See also

- Polyfill for Map in core-js
- es-shims polyfill of Map
- Set
- WeakMap
- WeakSet

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/Map
