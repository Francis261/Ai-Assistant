# Reflect.get()

Source: https://devdocs.io/javascript/global_objects/reflect/get

The Reflect.get() static method is like the property accessor syntax, but as a function.

## Try it

```
const object = {
  x: 1,
  y: 2,
};

console.log(Reflect.get(object, "x"));
// Expected output: 1

const array = ["zero", "one"];

console.log(Reflect.get(array, 1));
// Expected output: "one"
```

## Syntax

```
Reflect.get(target, propertyKey)
Reflect.get(target, propertyKey, receiver)
```

### Parameters

The target object on which to get the property.

The name of the property to get.

The value of this provided for the call to target if a getter is encountered.

### Return value

The value of the property.

### Exceptions

Thrown if target is not an object.

## Description

Reflect.get() provides the reflective semantic of a property access. That is, Reflect.get(target, propertyKey, receiver) is semantically equivalent to:

```
target[propertyKey];
```

Note that in a normal property access, target and receiver would observably be the same object.

Reflect.get() invokes the [[Get]] object internal method of target.

## Examples

### Using Reflect.get()

```
// Object
const obj1 = { x: 1, y: 2 };
Reflect.get(obj1, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1); // "one"

// Proxy with a get handler
const obj2 = new Proxy(
  { p: 1 },
  {
    get(t, k, r) {
      return `${k}bar`;
    },
  },
);
Reflect.get(obj2, "foo"); // "foobar"

// Proxy with get handler and receiver
const obj3 = new Proxy(
  { p: 1, foo: 2 },
  {
    get(t, prop, receiver) {
      return `${receiver[prop]}bar`;
    },
  },
);
Reflect.get(obj3, "foo", { foo: 3 }); // "3bar"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Reflect.get in core-js
- Reflect
- Property accessors
- handler.get()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get
