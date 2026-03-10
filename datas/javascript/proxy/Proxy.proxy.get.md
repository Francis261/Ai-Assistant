# handler.get()

Source: https://devdocs.io/javascript/global_objects/proxy/proxy/get

The handler.get() method is a trap for the [[Get]] object internal method, which is used by operations such as property accessors.

## Try it

```
const monster = {
  secret: "easily scared",
  eyeCount: 4,
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "secret") {
      return `${target.secret.substring(0, 4)} ... shhhh!`;
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(monster, handler);

console.log(proxy.eyeCount);
// Expected output: 4

console.log(proxy.secret);
// Expected output: "easi ... shhhh!"
```

## Syntax

```
new Proxy(target, {
  get(target, property, receiver) {
  }
})
```

### Parameters

The following parameters are passed to the get() method. this is bound to the handler.

The target object.

A string or Symbol representing the property name.

The this value for getters; see Reflect.get(). This is usually either the proxy itself or an object that inherits from the proxy.

### Return value

The get() method can return any value, representing the property value.

## Description

### Interceptions

This trap can intercept these operations:

- Property access: proxy[foo] and proxy.bar
- Reflect.get()

Or any other operation that invokes the [[Get]] internal method.

### Invariants

The proxy's [[Get]] internal method throws a TypeError if the handler definition violates one of the following invariants:

- The value reported for a property must be the same as the value of the corresponding target object property, if the target object property is a non-writable, non-configurable own data property. That is, if Reflect.getOwnPropertyDescriptor() returns configurable: false, writable: false for the property on target, then the trap must return the same value as the value attribute in the target's property descriptor.
- The value reported for a property must be undefined, if the corresponding target object property is a non-configurable own accessor property that has an undefined getter. That is, if Reflect.getOwnPropertyDescriptor() returns configurable: false, get: undefined for the property on target, then the trap must return undefined.

## Examples

### Trap for getting a property value

The following code traps getting a property value.

```
const p = new Proxy(
  {},
  {
    get(target, property, receiver) {
      console.log(`called: ${property}`);
      return 10;
    },
  },
);

console.log(p.a);
// "called: a"
// 10
```

The following code violates an invariant.

```
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false,
});

const p = new Proxy(obj, {
  get(target, property) {
    return 20;
  },
});

p.a; // TypeError is thrown
```

## Specifications

## Browser compatibility

## See also

- Proxy
- Proxy() constructor
- Reflect.get()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
