# Object.entries()

Source: https://devdocs.io/javascript/global_objects/object/entries

The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

## Try it

```
const object = {
  a: "some string",
  b: 42,
};

for (const [key, value] of Object.entries(object)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: some string"
// "b: 42"
```

## Syntax

```
Object.entries(obj)
```

### Parameters

An object.

### Return value

An array of the given object's own enumerable string-keyed property key-value pairs. Each key-value pair is an array with two elements: the first element is the property key (which is always a string), and the second element is the property value.

## Description

Object.entries() returns an array whose elements are arrays corresponding to the enumerable string-keyed property key-value pairs found directly upon object. This is the same as iterating with a for...in loop, except that a for...in loop enumerates properties in the prototype chain as well. The order of the array returned by Object.entries() is the same as that provided by a for...in loop.

If you only need the property keys, use Object.keys() instead. If you only need the property values, use Object.values() instead.

## Examples

### Using Object.entries()

```
const obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const arrayLike = { 0: "a", 1: "b", 2: "c" };
console.log(Object.entries(arrayLike)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const randomKeyOrder = { 100: "a", 2: "b", 7: "c" };
console.log(Object.entries(randomKeyOrder)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

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
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]
```

### Using Object.entries() on primitives

Non-object arguments are coerced to objects. undefined and null cannot be coerced to objects and throw a TypeError upfront. Only strings may have own enumerable properties, while all other primitives return an empty array.

```
// Strings have indices as enumerable own properties
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// Other primitives except undefined and null have no own properties
console.log(Object.entries(100)); // []
```

### Converting an Object to a Map

The Map() constructor accepts an iterable of entries. With Object.entries, you can easily convert from Object to Map:

```
const obj = { foo: "bar", baz: 42 };
const map = new Map(Object.entries(obj));
console.log(map); // Map(2) {"foo" => "bar", "baz" => 42}
```

### Iterating through an Object

Using array destructuring, you can iterate through objects easily.

```
// Using for...of loop
const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

// Using array methods
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
});
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Object.entries in core-js
- es-shims polyfill of Object.entries
- Enumerability and ownership of properties
- Object.keys()
- Object.values()
- Object.prototype.propertyIsEnumerable()
- Object.create()
- Object.fromEntries()
- Object.getOwnPropertyNames()
- Map.prototype.entries()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
