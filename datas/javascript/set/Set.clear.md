# Set.prototype.clear()

Source: https://devdocs.io/javascript/global_objects/set/clear

The clear() method of Set instances removes all elements from this set.

## Try it

```
const set = new Set();
set.add(1);
set.add("foo");

console.log(set.size);
// Expected output: 2

set.clear();

console.log(set.size);
// Expected output: 0
```

## Syntax

```
clear()
```

### Parameters

None.

### Return value

None (undefined).

## Examples

### Using the clear() method

```
const mySet = new Set();
mySet.add(1);
mySet.add("foo");

console.log(mySet.size); // 2
console.log(mySet.has("foo")); // true

mySet.clear();

console.log(mySet.size); // 0
console.log(mySet.has("foo")); // false
```

## Specifications

## Browser compatibility

## See also

- Set
- Set.prototype.delete()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/clear
