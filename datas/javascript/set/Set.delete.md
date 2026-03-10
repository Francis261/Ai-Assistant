# Set.prototype.delete()

Source: https://devdocs.io/javascript/global_objects/set/delete

The delete() method of Set instances removes the specified value from this set, if it is in the set.

## Try it

```
const set = new Set();
set.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });

// Delete any point with `x > 10`.
set.forEach((point) => {
  if (point.x > 10) {
    set.delete(point);
  }
});

console.log(set.size);
// Expected output: 1
```

## Syntax

```
setInstance.delete(value)
```

### Parameters

The value to remove from the Set object. Objects are compared by reference, not by value.

### Return value

true if a value in the Set object has been removed successfully. false if the value is not found in the Set.

## Examples

### Using delete()

```
const mySet = new Set();
mySet.add("foo");

console.log(mySet.delete("bar")); // false; no "bar" element found to be deleted.
console.log(mySet.delete("foo")); // true; successfully removed.

console.log(mySet.has("foo")); // false; the "foo" element is no longer present.
```

### Deleting an object from a set

Because objects are compared by reference, you have to delete them by checking individual properties if you don't have a reference to the original object.

```
const setObj = new Set(); // Create a new set.

setObj.add({ x: 10, y: 20 }); // Add object in the set.

setObj.add({ x: 20, y: 30 }); // Add object in the set.

// Delete any point with `x > 10`.
setObj.forEach((point) => {
  if (point.x > 10) {
    setObj.delete(point);
  }
});
```

## Specifications

## Browser compatibility

## See also

- Set
- Set.prototype.add()
- Set.prototype.clear()
- Set.prototype.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete
