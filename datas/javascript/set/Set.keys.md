# Set.prototype.keys()

Source: https://devdocs.io/javascript/global_objects/set/keys

The keys() method of Set instances is an alias for the values() method.

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

The keys() method is exactly equivalent to the values() method.

```
const mySet = new Set();
mySet.add("foo");
mySet.add("bar");
mySet.add("baz");

const setIter = mySet.keys();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"
```

## Specifications

## Browser compatibility

## See also

- Set.prototype.entries()
- Set.prototype.values()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/keys
