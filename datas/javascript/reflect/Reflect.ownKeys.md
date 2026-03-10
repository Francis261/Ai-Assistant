# Reflect.ownKeys()

Source: https://devdocs.io/javascript/global_objects/reflect/ownkeys

The Reflect.ownKeys() static method returns an array of the target object's own property keys.

## Try it

```
const object = {
  property1: 42,
  property2: 13,
};

const array = [];

console.log(Reflect.ownKeys(object));
// Expected output: Array ["property1", "property2"]

console.log(Reflect.ownKeys(array));
// Expected output: Array ["length"]
```

## Syntax

```
Reflect.ownKeys(target)
```

### Parameters

The target object from which to get the own keys.

### Return value

An Array of the target object's own property keys, including strings and symbols. For most objects, the array will be in the order of:

1. Non-negative integer indexes in increasing numeric order (but as strings)
2. Other string keys in the order of property creation
3. Symbol keys in the order of property creation.

### Exceptions

Thrown if target is not an object.

## Description

Reflect.ownKeys() provides the reflective semantic of retrieving all property keys of an object. It is the only way to get all own properties – enumerable and not enumerable, strings and symbols — in one call, without extra filtering logic. For example, Object.getOwnPropertyNames() takes the return value of Reflect.ownKeys() and filters to only string values, while Object.getOwnPropertySymbols() filters to only symbol values. Because normal objects implement [[OwnPropertyKeys]] to return all string keys before symbol keys, Reflect.ownKeys(target) is usually equivalent to Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target)). However, if the object has a custom [[OwnPropertyKeys]] method (such as through a proxy's ownKeys handler), the order of the keys may be different.

Reflect.ownKeys() invokes the [[OwnPropertyKeys]] object internal method of target.

## Examples

### Using Reflect.ownKeys()

```
Reflect.ownKeys({ z: 3, y: 2, x: 1 }); // [ "z", "y", "x" ]
Reflect.ownKeys([]); // ["length"]

const sym = Symbol.for("comet");
const sym2 = Symbol.for("meteor");
const obj = {
  [sym]: 0,
  str: 0,
  773: 0,
  0: 0,
  [sym2]: 0,
  "-1": 0,
  8: 0,
  "second str": 0,
};
Reflect.ownKeys(obj);
// [ "0", "8", "773", "str", "-1", "second str", Symbol(comet), Symbol(meteor) ]
// Indexes in numeric order,
// strings in insertion order,
// symbols in insertion order
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Reflect.ownKeys in core-js
- es-shims polyfill of Reflect.ownKeys
- Reflect
- Object.getOwnPropertyNames()
- Object.getOwnPropertySymbols()
- handler.ownKeys()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
