# Reflect.getPrototypeOf()

Source: https://devdocs.io/javascript/global_objects/reflect/getprototypeof

The Reflect.getPrototypeOf() static method is like Object.getPrototypeOf(). It returns the prototype of the specified object.

## Try it

```
const object = {
  foo: 42,
};

const proto = Reflect.getPrototypeOf(object);

console.log(proto);
// Expected output: Object {  }

console.log(Reflect.getPrototypeOf(proto));
// Expected output: null
```

## Syntax

```
Reflect.getPrototypeOf(target)
```

### Parameters

The target object of which to get the prototype.

### Return value

The prototype of the given object, which may be an object or null.

### Exceptions

Thrown if target is not an object.

## Description

Reflect.getPrototypeOf() provides the reflective semantic of retrieving the prototype of an object. The only difference with Object.getPrototypeOf() is how non-object targets are handled. Reflect.getPrototypeOf() throws a TypeError if the target is not an object, while Object.getPrototypeOf() coerces it to an object.

Reflect.getPrototypeOf() invokes the [[GetPrototypeOf]] object internal method of target.

## Examples

### Using Reflect.getPrototypeOf()

```
Reflect.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf(Object.prototype); // null
Reflect.getPrototypeOf(Object.create(null)); // null
```

### Difference with Object.getPrototypeOf()

```
// Same result for Objects
Object.getPrototypeOf({}); // Object.prototype
Reflect.getPrototypeOf({}); // Object.prototype

// Both throw in ES5 for non-Objects
Object.getPrototypeOf("foo"); // Throws TypeError
Reflect.getPrototypeOf("foo"); // Throws TypeError

// In ES2015 only Reflect throws, Object coerces non-Objects
Object.getPrototypeOf("foo"); // String.prototype
Reflect.getPrototypeOf("foo"); // Throws TypeError

// To mimic the Object ES2015 behavior you need to coerce
Reflect.getPrototypeOf(Object("foo")); // String.prototype
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Reflect.getPrototypeOf in core-js
- es-shims polyfill of Reflect.getPrototypeOf
- Reflect
- Object.getPrototypeOf()
- handler.getPrototypeOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
