# Reflect.deleteProperty()

Source: https://devdocs.io/javascript/global_objects/reflect/deleteproperty

The Reflect.deleteProperty() static method is like the delete operator, but as a function. It deletes a property from an object.

## Try it

```
const object = {
  foo: 42,
};

Reflect.deleteProperty(object, "foo");

console.log(object.foo);
// Expected output: undefined

const array = [1, 2, 3, 4, 5];
Reflect.deleteProperty(array, "3");

console.log(array);
// Expected output: Array [1, 2, 3, <1 empty slot>, 5]
```

## Syntax

```
Reflect.deleteProperty(target, propertyKey)
```

### Parameters

The target object on which to delete the property.

The name of the property to be deleted.

### Return value

A boolean indicating whether or not the property was successfully deleted.

### Exceptions

Thrown if target is not an object.

## Description

Reflect.deleteProperty() provides the reflective semantic of the delete operator. That is, Reflect.deleteProperty(target, propertyKey) is semantically equivalent to:

```
delete target.propertyKey;
```

At the very low level, deleting a property returns a boolean (as is the case with the proxy handler). Reflect.deleteProperty() directly returns the status, while delete would throw a TypeError in strict mode if the status is false. In non-strict mode, delete and Reflect.deleteProperty() have the same behavior.

Reflect.deleteProperty() invokes the [[Delete]] object internal method of target.

## Examples

### Using Reflect.deleteProperty()

```
const obj = { x: 1, y: 2 };
Reflect.deleteProperty(obj, "x"); // true
console.log(obj); // { y: 2 }

const arr = [1, 2, 3, 4, 5];
Reflect.deleteProperty(arr, "3"); // true
console.log(arr); // [1, 2, 3, <1 empty slot>, 5]

// Returns true if no such property exists
Reflect.deleteProperty({}, "foo"); // true

// Returns false if a property is unconfigurable
Reflect.deleteProperty(Object.freeze({ foo: 1 }), "foo"); // false
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Reflect.deleteProperty in core-js
- Reflect
- delete
- handler.deleteProperty()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
