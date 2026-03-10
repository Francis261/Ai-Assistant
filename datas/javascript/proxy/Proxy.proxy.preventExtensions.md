# handler.preventExtensions()

Source: https://devdocs.io/javascript/global_objects/proxy/proxy/preventextensions

The handler.preventExtensions() method is a trap for the [[PreventExtensions]] object internal method, which is used by operations such as Object.preventExtensions().

## Try it

```
const monster = {
  canEvolve: true,
};

const handler = {
  preventExtensions(target) {
    target.canEvolve = false;
    Object.preventExtensions(target);
    return true;
  },
};

const proxy = new Proxy(monster, handler);

console.log(monster.canEvolve);
// Expected output: true

Object.preventExtensions(proxy);

console.log(monster.canEvolve);
// Expected output: false
```

## Syntax

```
new Proxy(target, {
  preventExtensions(target) {
  }
})
```

### Parameters

The following parameter is passed to the preventExtensions() method. this is bound to the handler.

The target object.

### Return value

The preventExtensions() method must return a Boolean indicating whether or not the operation was successful. Other values are coerced to booleans.

Many operations, including Object.preventExtensions(), throw a TypeError if the [[PreventExtensions]] internal method returns false.

## Description

### Interceptions

This trap can intercept these operations:

- Object.preventExtensions()
- Reflect.preventExtensions()
- Object.seal()
- Object.freeze()

Or any other operation that invokes the [[PreventExtensions]] internal method.

### Invariants

The proxy's [[PreventExtensions]] internal method throws a TypeError if the handler definition violates one of the following invariants:

- The result is only true if Reflect.isExtensible() on the target object returns false after calling handler.preventExtensions().

## Examples

### Trapping of preventExtensions

The following code traps Object.preventExtensions().

```
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      console.log("called");
      Object.preventExtensions(target);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p));
// "called"
// false
```

The following code violates the invariant.

```
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      return true;
    },
  },
);

Object.preventExtensions(p); // TypeError is thrown
```

## Specifications

## Browser compatibility

## See also

- Proxy
- Proxy() constructor
- Object.preventExtensions()
- Reflect.preventExtensions()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
