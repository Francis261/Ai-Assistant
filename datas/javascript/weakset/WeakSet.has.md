# WeakSet.prototype.has()

Source: https://devdocs.io/javascript/global_objects/weakset/has

The has() method of WeakSet instances returns a boolean indicating whether the specified value exists in this WeakSet or not.

## Try it

```
const weakset = new WeakSet();
const object1 = {};
const object2 = {};

weakset.add(object1);

console.log(weakset.has(object1));
// Expected output: true

console.log(weakset.has(object2));
// Expected output: false
```

## Syntax

```
has(value)
```

### Parameters

The value to test for presence in the WeakSet object. Objects are compared by reference, not by value.

### Return value

Returns true if the specified value exists in the WeakSet object; otherwise false. Always returns false if value is not an object or a non-registered symbol.

## Examples

### Using has()

```
const ws = new WeakSet();
const obj = {};
ws.add(window);

ws.has(window); // returns true
ws.has(obj); // returns false

// Storing a non-registered symbol
const sym = Symbol("foo");
ws.add(sym);
ws.add(Symbol.iterator);
```

## Specifications

## Browser compatibility

## See also

- WeakSet
- WeakSet.prototype.add()
- WeakSet.prototype.delete()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet/has
