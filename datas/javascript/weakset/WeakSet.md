# WeakSet

Source: https://devdocs.io/javascript/global_objects/weakset

A WeakSet is a collection of garbage-collectable values, including objects and non-registered symbols. A value in the WeakSet may only occur once. It is unique in the WeakSet's collection.

## Description

Values of WeakSets must be garbage-collectable. Most primitive data types can be arbitrarily created and don't have a lifetime, so they cannot be stored. Objects and non-registered symbols can be stored because they are garbage-collectable.

The main differences to the Set object are:

- WeakSets are collections of objects and symbols only. They cannot contain arbitrary values of any type, as Sets can.
- The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other references to a value stored in the WeakSet exist, those values can be garbage collected. Note: This also means that there is no list of current values stored in the collection. WeakSets are not enumerable.

WeakSets are collections of objects and symbols only. They cannot contain arbitrary values of any type, as Sets can.

The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other references to a value stored in the WeakSet exist, those values can be garbage collected.

Note: This also means that there is no list of current values stored in the collection. WeakSets are not enumerable.

### Key equality

Like regular Set, value equality is based on the SameValueZero algorithm, which is the same as the === operator because WeakSet can only hold object and symbol values. This means that for object values, equality is based on object identity. They are compared by reference, not by value.

## Constructor

Creates a new WeakSet object.

## Instance properties

These properties are defined on WeakSet.prototype and shared by all WeakSet instances.

The constructor function that created the instance object. For WeakSet instances, the initial value is the WeakSet constructor.

The initial value of the [Symbol.toStringTag] property is the string "WeakSet". This property is used in Object.prototype.toString().

## Instance methods

Inserts the specified value into this set, if it is not already present.

Removes the specified value from this set, if it is in the set.

Returns a boolean indicating whether the specified value exists in this WeakSet or not.

## Examples

### Using the WeakSet object

```
const ws = new WeakSet();
const foo = {};
const bar = {};

ws.add(foo);
ws.add(bar);

ws.has(foo); // true
ws.has(bar); // true

ws.delete(foo); // removes foo from the set
ws.has(foo); // false, foo has been removed
ws.has(bar); // true, bar is retained
```

Note that foo !== bar. While they are similar objects, they are not the same object. And so they are both added to the set.

### Detecting circular references

Functions that call themselves recursively need a way of guarding against circular data structures by tracking which objects have already been processed.

WeakSets are ideal for this purpose:

```
// Execute a callback on everything stored inside an object
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // Avoid infinite recursion
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object" && subject) {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
    _refs.delete(subject);
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // Circular reference!
execRecursively((obj) => console.log(obj), foo);
```

Here, a WeakSet is created on the first run, and passed along with every subsequent function call (using the internal _refs parameter).

The number of objects or their traversal order is immaterial, so a WeakSet is more suitable (and performant) than a Set for tracking object references, especially if a very large number of objects is involved.

## Specifications

## Browser compatibility

## See also

- Polyfill of WeakSet in core-js
- Map
- Set
- WeakMap

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet
