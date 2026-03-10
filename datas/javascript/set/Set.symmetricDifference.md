# Set.prototype.symmetricDifference()

Source: https://devdocs.io/javascript/global_objects/set/symmetricdifference

The symmetricDifference() method of Set instances takes a set and returns a new set containing elements which are in either this set or the given set, but not in both.

## Syntax

```
symmetricDifference(other)
```

### Parameters

A Set object, or set-like object.

### Return value

A new Set object containing elements which are in either this set or the other set, but not in both.

## Description

In mathematical notation, symmetric difference is defined as:

And using Venn diagram:

symmetricDifference() accepts set-like objects as the other parameter. It requires this to be an actual Set instance, because it directly retrieves the underlying data stored in this without invoking any user code. Then, it iterates over other by calling its keys() method, and constructs a new set with all elements in this that are not seen in other, and all elements in other that are not seen in this.

The order of elements in the returned set is first those in this followed by those in other.

## Examples

### Using symmetricDifference()

The following example computes the symmetric difference between the set of even numbers (<10) and the set of perfect squares (<10). The result is the set of numbers that are either even or a perfect square, but not both.

```
const evens = new Set([2, 4, 6, 8]);
const squares = new Set([1, 4, 9]);
console.log(evens.symmetricDifference(squares)); // Set(5) { 2, 6, 8, 1, 9 }
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Set.prototype.symmetricDifference in core-js
- es-shims polyfill of Set.prototype.symmetricDifference
- Set.prototype.difference()
- Set.prototype.intersection()
- Set.prototype.isDisjointFrom()
- Set.prototype.isSubsetOf()
- Set.prototype.isSupersetOf()
- Set.prototype.union()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/symmetricDifference
