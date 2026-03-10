# Reflect.getOwnPropertyDescriptor()

Source: https://devdocs.io/javascript/global_objects/reflect/getownpropertydescriptor

The Reflect.getOwnPropertyDescriptor() static method is like Object.getOwnPropertyDescriptor(). It returns a property descriptor of the given property if it exists on the object, undefined otherwise.

## Try it

```
const object = {
  property1: 42,
};

console.log(Reflect.getOwnPropertyDescriptor(object, "property1").value);
// Expected output: 42

console.log(Reflect.getOwnPropertyDescriptor(object, "property2"));
// Expected output: undefined

console.log(Reflect.getOwnPropertyDescriptor(object, "property1").writable);
// Expected output: true
```

## Syntax

```
Reflect.getOwnPropertyDescriptor(target, propertyKey)
```

### Parameters

The target object in which to look for the property.

The name of the property to get an own property descriptor for.

### Return value

A property descriptor object if the property exists as an own property of target; otherwise, undefined.

### Exceptions

Thrown if target is not an object.

## Description

Reflect.getOwnPropertyDescriptor() provides the reflective semantic of retrieving the property descriptor of an object. The only difference with Object.getOwnPropertyDescriptor() is how non-object targets are handled. Reflect.getOwnPropertyDescriptor() throws a TypeError if the target is not an object, while Object.getOwnPropertyDescriptor() coerces it to an object.

Reflect.getOwnPropertyDescriptor() invokes the [[GetOwnProperty]] object internal method of target.

## Examples

### Using Reflect.getOwnPropertyDescriptor()

```
Reflect.getOwnPropertyDescriptor({ x: "hello" }, "x");
// {value: "hello", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "hello" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### Difference with Object.getOwnPropertyDescriptor()

If the target argument to this method is not an object (a primitive), then it will cause a TypeError. With Object.getOwnPropertyDescriptor, a non-object first argument will be coerced to an object at first.

```
Reflect.getOwnPropertyDescriptor("foo", 0);
// TypeError: "foo" is not non-null object

Object.getOwnPropertyDescriptor("foo", 0);
// { value: "f", writable: false, enumerable: true, configurable: false }
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Reflect.getOwnPropertyDescriptor in core-js
- Reflect
- Object.getOwnPropertyDescriptor()
- handler.getOwnPropertyDescriptor()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
