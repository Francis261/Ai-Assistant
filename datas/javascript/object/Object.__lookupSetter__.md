# Object.prototype.__lookupSetter__()

Source: https://devdocs.io/javascript/global_objects/object/__lookupsetter__

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Note: This feature is deprecated in favor of the Object.getOwnPropertyDescriptor() API. This method's behavior is only specified for web compatibility, and is not required to be implemented in any platform. It may not work everywhere.

The __lookupSetter__() method of Object instances returns the function bound as a setter to the specified property.

## Syntax

```
__lookupSetter__(prop)
```

### Parameters

A string containing the name of the property whose setter should be returned.

### Return value

The function bound as a setter to the specified property. Returns undefined if no such property is found, or the property is a data property.

## Description

All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the __lookupSetter__() method. If a setter has been defined for an object's property, it's not possible to reference the setter function through that property, because that property only calls the function when it's being set. __lookupSetter__() can be used to obtain a reference to the setter function.

__lookupSetter__() walks up the prototype chain to find the specified property. If any object along the prototype chain has the specified own property, the set attribute of the property descriptor for that property is returned. If that property is a data property, undefined is returned. If the property is not found along the entire prototype chain, undefined is also returned.

__lookupSetter__() is defined in the spec as "normative optional", which means no implementation is required to implement this. However, all major browsers implement it, and due to its continued usage, it's unlikely to be removed. If a browser implements __lookupSetter__(), it also needs to implement the __lookupGetter__(), __defineGetter__(), and __defineSetter__() methods.

## Examples

### Using __lookupSetter__()

```
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

obj.__lookupSetter__("foo");
// [Function: set foo]
```

### Looking up a property's setter in the standard way

You should use the Object.getOwnPropertyDescriptor() API to look up a property's setter. Compared to __lookupSetter__(), this method allows looking up symbol properties. The Object.getOwnPropertyDescriptor() method also works with null-prototype objects, which don't inherit from Object.prototype and therefore don't have the __lookupSetter__() method. If __lookupSetter__()'s behavior of walking up the prototype chain is important, you may implement it yourself with Object.getPrototypeOf().

```
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").set;
// [Function: set foo]
```

```
const obj2 = {
  __proto__: {
    set foo(value) {
      this.bar = value;
    },
  },
};

function findSetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.set;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findSetter(obj2, "foo")); // [Function: set foo]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Object.prototype.__lookupSetter__ in core-js
- Object.prototype.__lookupGetter__()
- set
- Object.getOwnPropertyDescriptor()
- Object.prototype.__defineGetter__()
- Object.prototype.__defineSetter__()
- JS Guide: Defining Getters and Setters

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
