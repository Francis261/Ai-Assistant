# Reflect.set()

Source: https://devdocs.io/javascript/global_objects/reflect/set

The Reflect.set() static method is like the property accessor and assignment syntax, but as a function.

## Try it

```
const object = {};
Reflect.set(object, "foo", 42);

console.log(object.foo);
// Expected output: 42

const array = ["duck", "duck", "duck"];
Reflect.set(array, 2, "goose");

console.log(array[2]);
// Expected output: "goose"
```

## Syntax

```
Reflect.set(target, propertyKey, value)
Reflect.set(target, propertyKey, value, receiver)
```

### Parameters

The target object on which to set the property.

The name of the property to set.

The value to set.

The value of this provided for the call to the setter for propertyKey on target. If provided and target does not have a setter for propertyKey, the property will be set on receiver instead.

### Return value

A Boolean indicating whether or not setting the property was successful.

### Exceptions

Thrown if target is not an object.

## Description

Reflect.set() provides the reflective semantic of a property access. That is, Reflect.set(target, propertyKey, value, receiver) is semantically equivalent to:

```
target[propertyKey] = value;
```

Note that in a normal property access, target and receiver would observably be the same object.

Reflect.set() invokes the [[Set]] object internal method of target.

## Examples

### Using Reflect.set()

```
// Object
const obj = {};
Reflect.set(obj, "prop", "value"); // true
obj.prop; // "value"

// Array
const arr = ["duck", "duck", "duck"];
Reflect.set(arr, 2, "goose"); // true
arr[2]; // "goose"

// It can truncate an array.
Reflect.set(arr, "length", 1); // true
arr; // ["duck"]

// With just one argument, propertyKey and value are "undefined".
Reflect.set(obj); // true
Reflect.getOwnPropertyDescriptor(obj, "undefined");
// { value: undefined, writable: true, enumerable: true, configurable: true }
```

### Different target and receiver

When the target and receiver are different, Reflect.set will use the property descriptor of target (to find the setter or determine if the property is writable), but set the property on receiver.

```
const target = {};
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target is {}; receiver is { a: 2 }

const target = { a: 1 };
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target is { a: 1 }; receiver is { a: 2 }

const target = {
  set a(v) {
    this.b = v;
  },
};
const receiver = {};
Reflect.set(target, "a", 2, receiver); // true
// target is { a: [Setter] }; receiver is { b: 2 }
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Reflect.set in core-js
- Reflect
- Property accessors
- handler.set()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set
