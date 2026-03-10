# Reflect.defineProperty()

Source: https://devdocs.io/javascript/global_objects/reflect/defineproperty

The Reflect.defineProperty() static method is like Object.defineProperty() but returns a Boolean.

## Try it

```
const object = {};

if (Reflect.defineProperty(object, "foo", { value: 42 })) {
  console.log("foo created!");
  // Expected output: "foo created!"
} else {
  console.log("problem creating foo");
}

console.log(object.foo);
// Expected output: 42
```

## Syntax

```
Reflect.defineProperty(target, propertyKey, attributes)
```

### Parameters

The target object on which to define the property.

The name of the property to be defined or modified.

The attributes for the property being defined or modified.

### Return value

A boolean indicating whether or not the property was successfully defined.

### Exceptions

Thrown if target or attributes is not an object.

## Description

Reflect.defineProperty() provides the reflective semantic of defining an own property on an object. At the very low level, defining a property returns a boolean (as is the case with the proxy handler). Object.defineProperty() provides nearly the same semantic, but it throws a TypeError if the status is false (the operation was unsuccessful), while Reflect.defineProperty() directly returns the status.

Many built-in operations would also define own properties on objects. The most significant difference between defining properties and setting them is that setters aren't invoked. For example, class fields directly define properties on the instance without invoking setters.

```
class B extends class A {
  set a(v) {
    console.log("Setter called");
  }
} {
  a = 1; // Nothing logged
}
```

Reflect.defineProperty() invokes the [[DefineOwnProperty]] object internal method of target.

## Examples

### Using Reflect.defineProperty()

```
const obj = {};
Reflect.defineProperty(obj, "x", { value: 7 }); // true
console.log(obj.x); // 7
```

### Checking if property definition has been successful

With Object.defineProperty(), which returns an object if successful, or throws a TypeError otherwise, you would use a try...catch block to catch any error that occurred while defining a property.

Because Reflect.defineProperty() returns a Boolean success status, you can just use an if...else block here:

```
if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Reflect.defineProperty in core-js
- Reflect
- Object.defineProperty()
- handler.defineProperty()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
