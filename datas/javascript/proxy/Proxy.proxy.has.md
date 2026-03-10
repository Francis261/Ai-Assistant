# handler.has()

Source: https://devdocs.io/javascript/global_objects/proxy/proxy/has

The handler.has() method is a trap for the [[HasProperty]] object internal method, which is used by operations such as the in operator.

## Try it

```
const handler = {
  has(target, key) {
    if (key[0] === "_") {
      return false;
    }
    return key in target;
  },
};

const monster = {
  _secret: "easily scared",
  eyeCount: 4,
};

const proxy = new Proxy(monster, handler);
console.log("eyeCount" in proxy);
// Expected output: true

console.log("_secret" in proxy);
// Expected output: false

console.log("_secret" in monster);
// Expected output: true
```

## Syntax

```
new Proxy(target, {
  has(target, property) {
  }
})
```

### Parameters

The following parameters are passed to has() method. this is bound to the handler.

The target object.

A string or Symbol representing the property name.

### Return value

The has() method must return a Boolean indicating whether or not the property exists. Other values are coerced to booleans.

## Description

### Interceptions

This trap can intercept these operations:

- The in operator: foo in proxy
- with check: with(proxy) { (foo); }
- Reflect.has()

Or any other operation that invokes the [[HasProperty]] internal method.

### Invariants

The proxy's [[HasProperty]] internal method throws a TypeError if the handler definition violates one of the following invariants:

- A property cannot be reported as non-existent, if it exists as a non-configurable own property of the target object. That is, if Reflect.getOwnPropertyDescriptor() returns configurable: false for the property on target, the trap must return true.
- A property cannot be reported as non-existent, if it exists as an own property of the target object and the target object is not extensible. That is, if Reflect.isExtensible() returns false on target, and Reflect.getOwnPropertyDescriptor() returns a property descriptor for the property on target, the trap must return true.

## Examples

### Trapping the in operator

The following code traps the in operator.

```
const p = new Proxy(
  {},
  {
    has(target, prop) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

console.log("a" in p);
// "called: a"
// true
```

The following code violates an invariant.

```
const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## Specifications

## Browser compatibility

## See also

- Proxy
- Proxy() constructor
- in
- Reflect.has()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
