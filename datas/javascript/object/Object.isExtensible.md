# Object.isExtensible()

Source: https://devdocs.io/javascript/global_objects/object/isextensible

The Object.isExtensible() static method determines if an object is extensible (whether it can have new properties added to it).

## Try it

```
const object = {};

console.log(Object.isExtensible(object));
// Expected output: true

Object.preventExtensions(object);

console.log(Object.isExtensible(object));
// Expected output: false
```

## Syntax

```
Object.isExtensible(obj)
```

### Parameters

The object which should be checked.

### Return value

A Boolean indicating whether or not the given object is extensible.

## Description

Objects are extensible by default: they can have new properties added to them, and their [[Prototype]] can be re-assigned. An object can be marked as non-extensible using one of Object.preventExtensions(), Object.seal(), Object.freeze(), or Reflect.preventExtensions().

## Examples

### Using Object.isExtensible

```
// New objects are extensible.
const empty = {};
Object.isExtensible(empty); // true

// They can be made un-extensible
Object.preventExtensions(empty);
Object.isExtensible(empty); // false

// Sealed objects are by definition non-extensible.
const sealed = Object.seal({});
Object.isExtensible(sealed); // false

// Frozen objects are also by definition non-extensible.
const frozen = Object.freeze({});
Object.isExtensible(frozen); // false
```

### Non-object argument

In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError. In ES2015, it will return false without any errors if a non-object argument is passed, since primitives are, by definition, immutable.

```
Object.isExtensible(1);
// TypeError: 1 is not an object (ES5 code)

Object.isExtensible(1);
// false                         (ES2015 code)
```

## Specifications

## Browser compatibility

## See also

- Object.preventExtensions()
- Object.seal()
- Object.isSealed()
- Object.freeze()
- Object.isFrozen()
- Reflect.isExtensible()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
