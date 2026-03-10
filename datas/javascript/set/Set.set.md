# Set() constructor

Source: https://devdocs.io/javascript/global_objects/set/set

The Set() constructor creates Set objects.

## Try it

```
const set = new Set([1, 2, 3, 4, 5]);

console.log(set.has(1));
// Expected output: true

console.log(set.has(5));
// Expected output: true

console.log(set.has(6));
// Expected output: false
```

## Syntax

```
new Set()
new Set(iterable)
```

Note: Set() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

If an iterable object (such as an array) is passed, all of its elements will be added to the new Set. If you don't specify this parameter, or its value is null or undefined, the new Set is empty.

### Return value

A new Set object.

## Examples

### Using the Set object

```
const mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, 'some text' ]
const o = { a: 1, b: 2 };
mySet.add(o);
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Set in core-js
- es-shims polyfill of Set
- Set

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/Set
