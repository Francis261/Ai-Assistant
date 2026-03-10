# Object.values()

Source: https://devdocs.io/javascript/global_objects/object/values

The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

## Try it

```
const object = {
  a: "some string",
  b: 42,
  c: false,
};

console.log(Object.values(object));
// Expected output: Array ["some string", 42, false]
```

## Syntax

```
Object.values(obj)
```

### Parameters

An object.

### Return value

An array containing the given object's own enumerable string-keyed property values.

## Description

Object.values() returns an array whose elements are values of enumerable string-keyed properties found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.values() is the same as that provided by a for...in loop.

If you need the property keys, use Object.keys() instead. If you need both the property keys and values, use Object.entries() instead.

## Examples

### Using Object.values()

```
const obj = { foo: "bar", baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// Array-like object
const arrayLikeObj1 = { 0: "a", 1: "b", 2: "c" };
console.log(Object.values(arrayLikeObj1)); // ['a', 'b', 'c']

// Array-like object with random key ordering
// When using numeric keys, the values are returned in the keys' numerical order
const arrayLikeObj2 = { 100: "a", 2: "b", 7: "c" };
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']

// getFoo is a non-enumerable property
const myObj = Object.create(
  {},
  {
    getFoo: {
      value() {
        return this.foo;
      },
    },
  },
);
myObj.foo = "bar";
console.log(Object.values(myObj)); // ['bar']
```

### Using Object.values() on primitives

Non-object arguments are coerced to objects. undefined and null cannot be coerced to objects and throw a TypeError upfront. Only strings may have own enumerable properties, while all other primitives return an empty array.

```
// Strings have indices as enumerable own properties
console.log(Object.values("foo")); // ['f', 'o', 'o']

// Other primitives except undefined and null have no own properties
console.log(Object.values(100)); // []
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Object.values in core-js
- es-shims polyfill of Object.values
- Enumerability and ownership of properties
- Object.keys()
- Object.entries()
- Object.prototype.propertyIsEnumerable()
- Object.create()
- Object.getOwnPropertyNames()
- Map.prototype.values()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
