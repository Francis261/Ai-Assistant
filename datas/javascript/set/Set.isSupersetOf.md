# Set.prototype.isSupersetOf()

Source: https://devdocs.io/javascript/global_objects/set/issupersetof

The isSupersetOf() method of Set instances takes a set and returns a boolean indicating if all elements of the given set are in this set.

## Syntax

```
isSupersetOf(other)
```

### Parameters

A Set object, or set-like object.

### Return value

true if all elements in the other set are also in this set, and false otherwise.

## Description

In mathematical notation, superset is defined as:

And using Venn diagram:

Note: The superset relationship is not proper superset, which means isSupersetOf() returns true if this and other contain the same elements.

isSupersetOf() accepts set-like objects as the other parameter. It requires this to be an actual Set instance, because it directly retrieves the underlying data stored in this without invoking any user code. Then, its behavior depends on the sizes of this and other:

- If there are fewer elements in this than other.size, then it directly returns false.
- Otherwise, it iterates over other by calling its keys() method, and if any element in other is not present in this, it returns false (and closes the keys() iterator by calling its return() method). Otherwise, it returns true.

## Examples

### Using isSupersetOf()

The set of even numbers (<20) is a superset of multiples of 4 (<20):

```
const evens = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18]);
const fours = new Set([4, 8, 12, 16]);
console.log(evens.isSupersetOf(fours)); // true
```

The set of all odd numbers (<20) is not a superset of prime numbers (<20), because 2 is prime but not odd:

```
const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
const odds = new Set([3, 5, 7, 9, 11, 13, 15, 17, 19]);
console.log(odds.isSupersetOf(primes)); // false
```

Equivalent sets are supersets of each other:

```
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1, 2, 3]);
console.log(set1.isSupersetOf(set2)); // true
console.log(set2.isSupersetOf(set1)); // true
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Set.prototype.isSupersetOf in core-js
- es-shims polyfill of Set.prototype.isSupersetOf
- Set.prototype.difference()
- Set.prototype.intersection()
- Set.prototype.isDisjointFrom()
- Set.prototype.isSubsetOf()
- Set.prototype.symmetricDifference()
- Set.prototype.union()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/isSupersetOf
