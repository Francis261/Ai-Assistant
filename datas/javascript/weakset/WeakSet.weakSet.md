# WeakSet() constructor

Source: https://devdocs.io/javascript/global_objects/weakset/weakset

The WeakSet() constructor creates WeakSet objects.

## Syntax

```
new WeakSet()
new WeakSet(iterable)
```

Note: WeakSet() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

If an iterable object is passed, all of its elements will be added to the new WeakSet. null is treated as undefined.

## Examples

### Using the WeakSet object

```
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
```

Note that foo !== bar. While they are similar objects, they are not the same object. And so they are both added to the set.

## Specifications

## Browser compatibility

## See also

- Polyfill of WeakSet in core-js
- WeakSet

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/WeakSet
