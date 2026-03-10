# Set.prototype.add()

Source: https://devdocs.io/javascript/global_objects/set/add

The add() method of Set instances inserts the specified value into this set, if it is not already present.

## Try it

```
const set = new Set();

set.add(42);
set.add(42);
set.add(13);

for (const item of set) {
  console.log(item);
  // Expected output: 42
  // Expected output: 13
}
```

## Syntax

```
add(value)
```

### Parameters

The value to add to the Set object. Objects are compared by reference, not by value.

### Return value

The Set object.

## Examples

### Using add()

```
const mySet = new Set();

mySet.add(1);
mySet.add(5).add("some text"); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
```

## Specifications

## Browser compatibility

## See also

- Set
- Set.prototype.delete()
- Set.prototype.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
