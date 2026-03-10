# handler.apply()

Source: https://devdocs.io/javascript/global_objects/proxy/proxy/apply

The handler.apply() method is a trap for the [[Call]] object internal method, which is used by operations such as function calls.

## Try it

```
function sum(a, b) {
  return a + b;
}

const handler = {
  apply(target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // Expected output: "Calculate sum: 1,2"

    return target(argumentsList[0], argumentsList[1]) * 10;
  },
};

const proxy = new Proxy(sum, handler);

console.log(sum(1, 2));
// Expected output: 3
console.log(proxy(1, 2));
// Expected output: 30
```

## Syntax

```
new Proxy(target, {
  apply(target, thisArg, argumentsList) {
  }
})
```

### Parameters

The following parameters are passed to the apply() method. this is bound to the handler.

The target callable object.

The this argument for the call.

An Array containing the arguments passed to the function.

### Return value

The apply() method can return any value, representing the return value of the function call.

## Description

### Interceptions

This trap can intercept these operations:

- Function call: proxy(...args)
- Function.prototype.apply() and Function.prototype.call()
- Reflect.apply()

Or any other operation that invokes the [[Call]] internal method.

### Invariants

The proxy's [[Call]] internal method throws a TypeError if the handler definition violates one of the following invariants:

- The target must be a callable itself. That is, it must be a function object.

## Examples

### Trapping a function call

The following code traps a function call.

```
const p = new Proxy(function () {}, {
  apply(target, thisArg, argumentsList) {
    console.log(`called: ${argumentsList}`);
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  },
});

console.log(p(1, 2, 3)); // "called: 1,2,3"
// 6
```

## Specifications

## Browser compatibility

## See also

- Proxy
- Proxy() constructor
- Function.prototype.apply()
- Function.prototype.call()
- Reflect.apply()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
