# handler.setPrototypeOf()

Source: https://devdocs.io/javascript/global_objects/proxy/proxy/setprototypeof

The handler.setPrototypeOf() method is a trap for the [[SetPrototypeOf]] object internal method, which is used by operations such as Object.setPrototypeOf().

## Try it

```
const handler = {
  setPrototypeOf(monster, monsterProto) {
    monster.geneticallyModified = true;
    return false;
  },
};

const monsterProto = {};
const monster = {
  geneticallyModified: false,
};

const proxy = new Proxy(monster, handler);
// Object.setPrototypeOf(proxy, monsterProto); // Throws a TypeError

console.log(Reflect.setPrototypeOf(proxy, monsterProto));
// Expected output: false

console.log(monster.geneticallyModified);
// Expected output: true
```

## Syntax

```
new Proxy(target, {
  setPrototypeOf(target, prototype) {
  }
})
```

### Parameters

The following parameters are passed to the setPrototypeOf() method. this is bound to the handler.

The target object.

The object's new prototype or null.

### Return value

The setPrototypeOf() method must return a Boolean indicating whether or not the prototype was successfully changed. Other values are coerced to booleans.

Many operations, including Object.setPrototypeOf(), throw a TypeError if the [[SetPrototypeOf]] internal method returns false.

## Description

### Interceptions

This trap can intercept these operations:

- Object.setPrototypeOf()
- Reflect.setPrototypeOf()

Or any other operation that invokes the [[SetPrototypeOf]] internal method.

### Invariants

The proxy's [[SetPrototypeOf]] internal method throws a TypeError if the handler definition violates one of the following invariants:

- If the target object is not extensible, the prototype cannot be changed. That is, if Reflect.isExtensible() returns false on target, and prototype is not the same as the result of Reflect.getPrototypeOf(target), then the trap must return a falsy value.

## Examples

If you want to disallow setting a new prototype for your object, your handler's setPrototypeOf() method can either return false, or it can throw an exception.

### Approach 1: Returning false

This approach means that any mutating operation that throws an exception on failure to mutate, must create the exception itself.

For example, Object.setPrototypeOf() will create and throw a TypeError itself. If the mutation is performed by an operation that doesn't ordinarily throw in case of failure, such as Reflect.setPrototypeOf(), no exception will be thrown.

```
const handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false;
  },
};

const newProto = {},
  target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
```

### Approach 2: Throwing an Exception

The latter approach will cause any operation that attempts to mutate, to throw. This approach is best if you want even non-throwing operations to throw on failure, or you want to throw a custom exception value.

```
const handlerThrows = {
  setPrototypeOf(target, newProto) {
    throw new Error("custom error");
  },
};

const newProto = {},
  target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")
```

## Specifications

## Browser compatibility

## See also

- Proxy
- Proxy() constructor
- Object.setPrototypeOf()
- Reflect.setPrototypeOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
