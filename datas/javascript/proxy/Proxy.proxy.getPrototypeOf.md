# handler.getPrototypeOf()

Source: https://devdocs.io/javascript/global_objects/proxy/proxy/getprototypeof

The handler.getPrototypeOf() method is a trap for the [[GetPrototypeOf]] object internal method, which is used by operations such as Object.getPrototypeOf().

## Try it

```
const monster = {
  eyeCount: 4,
};

const monsterPrototype = {
  eyeCount: 2,
};

const handler = {
  getPrototypeOf(target) {
    return monsterPrototype;
  },
};

const proxy = new Proxy(monster, handler);

console.log(Object.getPrototypeOf(proxy) === monsterPrototype);
// Expected output: true

console.log(Object.getPrototypeOf(proxy).eyeCount);
// Expected output: 2
```

## Syntax

```
new Proxy(target, {
  getPrototypeOf(target) {
  }
})
```

### Parameters

The following parameter is passed to the getPrototypeOf() method. this is bound to the handler.

The target object.

### Return value

The getPrototypeOf() method must return an object or null, representing the prototype of the target object.

## Description

### Interceptions

This trap can intercept these operations:

- Object.getPrototypeOf()
- Reflect.getPrototypeOf()
- __proto__
- Object.prototype.isPrototypeOf()
- instanceof

Or any other operation that invokes the [[GetPrototypeOf]] internal method.

### Invariants

The proxy's [[GetPrototypeOf]] internal method throws a TypeError if the handler definition violates one of the following invariants:

- The result must be either an Object or null.
- If the target object is not extensible (that is, Reflect.isExtensible() returns false on target), the result must be the same as the result of Reflect.getPrototypeOf(target).

## Examples

### Basic usage

```
const obj = {};
const proto = {};
const handler = {
  getPrototypeOf(target) {
    console.log(target === obj); // true
    console.log(this === handler); // true
    return proto;
  },
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto); // true
```

### Five ways to trigger the getPrototypeOf trap

```
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return Array.prototype;
  },
});
console.log(
  Object.getPrototypeOf(p) === Array.prototype, // true
  Reflect.getPrototypeOf(p) === Array.prototype, // true
  p.__proto__ === Array.prototype, // true
  Array.prototype.isPrototypeOf(p), // true
  p instanceof Array, // true
);
```

### Two kinds of exceptions

```
const obj = {};
const p = new Proxy(obj, {
  getPrototypeOf(target) {
    return "foo";
  },
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj2 = Object.preventExtensions({});
const p2 = new Proxy(obj2, {
  getPrototypeOf(target) {
    return {};
  },
});
Object.getPrototypeOf(p2); // TypeError: expected same prototype value
```

## Specifications

## Browser compatibility

## See also

- Proxy
- Proxy() constructor
- Object.getPrototypeOf()
- Reflect.getPrototypeOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
