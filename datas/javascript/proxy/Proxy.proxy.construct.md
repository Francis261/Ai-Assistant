# handler.construct()

Source: https://devdocs.io/javascript/global_objects/proxy/proxy/construct

The handler.construct() method is a trap for the [[Construct]] object internal method, which is used by operations such as the new operator. In order for the new operation to be valid on the resulting Proxy object, the target used to initialize the proxy must itself be a valid constructor.

## Try it

```
function Monster(disposition) {
  this.disposition = disposition;
}

const handler = {
  construct(target, args) {
    console.log(`Creating a ${target.name}`);
    // Expected output: "Creating a monster"

    return new target(...args);
  },
};

const ProxiedMonster = new Proxy(Monster, handler);

console.log(new ProxiedMonster("fierce").disposition);
// Expected output: "fierce"
```

## Syntax

```
new Proxy(target, {
  construct(target, argumentsList, newTarget) {
  }
})
```

### Parameters

The following parameters are passed to the construct() method. this is bound to the handler.

The target constructor object.

An Array containing the arguments passed to the constructor.

The constructor that was originally called.

### Return value

The construct() method must return an object, representing the newly created object.

## Description

### Interceptions

This trap can intercept these operations:

- The new operator: new myFunction(...args)
- Reflect.construct()

Or any other operation that invokes the [[Construct]] internal method.

### Invariants

The proxy's [[Construct]] internal method throws a TypeError if the handler definition violates one of the following invariants:

- The target must be a constructor itself.
- The result must be an Object.

## Examples

### Trapping the new operator

The following code traps the new operator.

```
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    console.log(`called: ${argumentsList}`);
    return { value: argumentsList[0] * 10 };
  },
});

console.log(new p(1).value); // "called: 1"
// 10
```

The following code violates the invariant.

```
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    return 1;
  },
});

new p(); // TypeError is thrown
```

The following code improperly initializes the proxy. The target in Proxy initialization must itself be a valid constructor for the new operator.

```
const p = new Proxy(
  {},
  {
    construct(target, argumentsList, newTarget) {
      return {};
    },
  },
);

new p(); // TypeError is thrown, "p" is not a constructor
```

## Specifications

## Browser compatibility

## See also

- Proxy
- Proxy() constructor
- new
- Reflect.construct()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
