# Reflect.has()

Source: https://devdocs.io/javascript/global_objects/reflect/has

The Reflect.has() static method is like the in operator, but as a function.

## Try it

```
const object = {
  property1: 42,
};

console.log(Reflect.has(object, "property1"));
// Expected output: true

console.log(Reflect.has(object, "property2"));
// Expected output: false

console.log(Reflect.has(object, "toString"));
// Expected output: true
```

## Syntax

```
Reflect.has(target, propertyKey)
```

### Parameters

The target object in which to look for the property.

The name of the property to check.

### Return value

A Boolean indicating whether or not the target has the property.

### Exceptions

Thrown if target is not an object.

## Description

Reflect.has() provides the reflective semantic of checking if a property is in an object. That is, Reflect.has(target, propertyKey) is semantically equivalent to:

```
propertyKey in target;
```

Reflect.has() invokes the [[HasProperty]] object internal method of target.

## Examples

### Using Reflect.has()

```
Reflect.has({ x: 0 }, "x"); // true
Reflect.has({ x: 0 }, "y"); // false

// returns true for properties in the prototype chain
Reflect.has({ x: 0 }, "toString");

// Proxy with .has() handler method
obj = new Proxy(
  {},
  {
    has(t, k) {
      return k.startsWith("door");
    },
  },
);
Reflect.has(obj, "doorbell"); // true
Reflect.has(obj, "dormitory"); // false
```

Reflect.has returns true for any inherited properties, like the in operator:

```
const a = { foo: 123 };
const b = { __proto__: a };
const c = { __proto__: b };
// The prototype chain is: c -> b -> a
Reflect.has(c, "foo"); // true
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Reflect.has in core-js
- Reflect
- in
- handler.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has
