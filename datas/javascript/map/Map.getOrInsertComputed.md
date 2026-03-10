# Map.prototype.getOrInsertComputed()

Source: https://devdocs.io/javascript/global_objects/map/getorinsertcomputed

The getOrInsertComputed() method of Map instances returns the value corresponding to the specified key in this Map. If the key is not present, it inserts a new entry with the key and a default value computed from a given callback, and returns the inserted value.

Use this method instead of Map.prototype.getOrInsert() when the default value is expensive to compute, and you want to avoid computing it unless it's actually needed.

## Try it

```
const map = new Map([["bar", "foo"]]);
const defaultCreator = (key) => `default for ${key}`;

console.log(map.getOrInsertComputed("bar", defaultCreator));
// Expected output: "foo"

console.log(map.getOrInsertComputed("baz", defaultCreator));
// Expected output: "default for baz"
```

## Syntax

```
getOrInsertComputed(key, callback)
```

### Parameters

The key of the element to return from the Map object. Object keys are compared by reference, not by value.

A function that returns the value to insert and return if the key is not already present in the Map object. The function is called with the following argument:

The same key that was passed to getOrInsertComputed().

### Return value

The value associated with the specified key in the Map object. If the key can't be found, the result of callback(key) is inserted and returned.

## Examples

### Avoiding unnecessary default computation

When using Map.prototype.getOrInsert(), the default value is computed every time, even if it is not needed. With getOrInsertComputed(), the default value is only computed when necessary.

```
const map = new Map([["bar", "foo"]]);
const defaultCreator = (key) => {
  console.log(`Creating default for ${key}`);
  return `default for ${key}`;
};

map.getOrInsert("bar", defaultCreator("bar")); // Logs "Creating default for bar"
map.getOrInsertComputed("bar", defaultCreator); // No log
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Map.prototype.getOrInsertComputed in core-js
- es-shims polyfill of Map.prototype.getOrInsertComputed
- Map
- Map.prototype.get()
- Map.prototype.set()
- Map.prototype.has()
- Map.prototype.getOrInsert()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/getOrInsertComputed
