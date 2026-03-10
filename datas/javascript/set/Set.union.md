# Set.prototype.union()

Source: https://devdocs.io/javascript/global_objects/set/union

The union() method of Set instances takes a set and returns a new set containing elements which are in either or both of this set and the given set.

## Syntax

```
union(other)
```

### Parameters

A Set object, or set-like object.

### Return value

A new Set object containing elements which are in either or both of this set and the other set.

## Description

In mathematical notation, union is defined as:

And using Venn diagram:

union() accepts set-like objects as the other parameter. It requires this to be an actual Set instance, because it directly retrieves the underlying data stored in this without invoking any user code. Then, it iterates over other by calling its keys() method, and constructs a new set with all elements in this, followed by all elements in other that are not present in this.

The order of elements in the returned set is first those in this followed by those in other.

## Examples

### Using union()

The following example computes the union between the set of even numbers (<10) and the set of perfect squares (<10). The result is the set of numbers that are either even or a perfect square, or both.

```
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.union(squares)); // Set(6) { 2, 4, 6, 8, 1, 9 }
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Set.prototype.union in core-js
- es-shims polyfill of Set.prototype.union
- Set.prototype.difference()
- Set.prototype.intersection()
- Set.prototype.isDisjointFrom()
- Set.prototype.isSubsetOf()
- Set.prototype.isSupersetOf()
- Set.prototype.symmetricDifference()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/union
