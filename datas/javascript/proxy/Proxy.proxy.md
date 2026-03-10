# Proxy() constructor

Source: https://devdocs.io/javascript/global_objects/proxy/proxy

The Proxy() constructor creates Proxy objects.

## Syntax

```
new Proxy(target, handler)
```

Note: Proxy() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A target object to wrap with Proxy. It can be any sort of object, including a native array, a function, or even another proxy.

An object whose properties are functions that define the behavior of the proxy when an operation is performed on it.

## Description

Use the Proxy() constructor to create a new Proxy object. This constructor takes two mandatory arguments:

- target is the object for which you want to create the proxy
- handler is the object that defines the custom behavior of the proxy.

An empty handler will create a proxy that behaves, in almost all respects, exactly like the target. By defining any of a set group of functions on the handler object, you can customize specific aspects of the proxy's behavior. For example, by defining get() you can provide a customized version of the target's property accessor.

### Handler functions

This section lists all the handler functions you can define. Handler functions are sometimes called traps, because they trap calls to the underlying target object.

A trap for a function call.

A trap for the new operator.

A trap for Object.defineProperty.

A trap for the delete operator.

A trap for getting property values.

A trap for Object.getOwnPropertyDescriptor.

A trap for Object.getPrototypeOf.

A trap for the in operator.

A trap for Object.isExtensible.

A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.

A trap for Object.preventExtensions.

A trap for setting property values.

A trap for Object.setPrototypeOf.

## Examples

### Selectively proxy property accessors

In this example the target has two properties, notProxied and proxied. We define a handler that returns a different value for proxied, and lets any other accesses through to the target.

```
const target = {
  notProxied: "original value",
  proxied: "original value",
};

const handler = {
  get(target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied); // "replaced value"
```

## Specifications

## Browser compatibility

## See also

- Meta programming guide
- Reflect

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
