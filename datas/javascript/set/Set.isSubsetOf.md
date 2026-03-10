# Set.prototype.isSubsetOf()

Source: https://devdocs.io/javascript/global_objects/set/issubsetof

The isSubsetOf() method of Set instances takes a set and returns a boolean indicating if all elements of this set are in the given set.

## Syntax

```
isSubsetOf(other)
```

### Parameters

A Set object, or set-like object.

### Return value

true if all elements in this set are also in the other set, and false otherwise.

## Description

In mathematical notation, subset is defined as:

And using Venn diagram:

Note: The subset relationship is not proper subset, which means isSubsetOf() returns true if this and other contain the same elements.

isSubsetOf() accepts set-like objects as the other parameter. It requires this to be an actual Set instance, because it directly retrieves the underlying data stored in this without invoking any user code. Then, its behavior depends on the sizes of this and other:

- If there are more elements in this than other.size, then it directly returns false.
- Otherwise, it iterates over the elements in this, and returns false if any element e in this causes other.has(e) to return a falsy value. Otherwise, it returns true.

## Examples

### Using isSubsetOf()

The set of multiples of 4 (<20) is a subset of even numbers (<20):

```
const fours = new Set([4, 8, 12, 16]);
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
console.log(fours.isSubsetOf(evens)); // true
```

The set of prime numbers (<20) is not a subset of all odd numbers (<20), because 2 is prime but not odd:

```
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(primes.isSubsetOf(odds)); // false
```

Equivalent sets are subsets of each other:

```
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSubsetOf(set2)); // true
console.log(set2.isSubsetOf(set1)); // true
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Set.prototype.isSubsetOf in core-js
- es-shims polyfill of Set.prototype.isSubsetOf
- Set.prototype.difference()
- Set.prototype.intersection()
- Set.prototype.isDisjointFrom()
- Set.prototype.isSupersetOf()
- Set.prototype.symmetricDifference()
- Set.prototype.union()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSubsetOf
