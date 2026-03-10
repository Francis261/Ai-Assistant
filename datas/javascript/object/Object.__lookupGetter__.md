# Object.prototype.__lookupGetter__()

Source: https://devdocs.io/javascript/global_objects/object/__lookupgetter__

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Note: This feature is deprecated in favor of the Object.getOwnPropertyDescriptor() API. This method's behavior is only specified for web compatibility, and is not required to be implemented in any platform. It may not work everywhere.

The __lookupGetter__() method of Object instances returns the function bound as a getter to the specified property.

## Syntax

```
__lookupGetter__(prop)
```

### Parameters

A string containing the name of the property whose getter should be returned.

### Return value

The function bound as a getter to the specified property. Returns undefined if no such property is found, or the property is a data property.

## Description

All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the __lookupGetter__() method. If a getter has been defined for an object's property, it's not possible to reference the getter function through that property, because that property refers to the return value of that function. __lookupGetter__() can be used to obtain a reference to the getter function.

__lookupGetter__() walks up the prototype chain to find the specified property. If any object along the prototype chain has the specified own property, the get attribute of the property descriptor for that property is returned. If that property is a data property, undefined is returned. If the property is not found along the entire prototype chain, undefined is also returned.

__lookupGetter__() is defined in the spec as "normative optional", which means no implementation is required to implement this. However, all major browsers implement it, and due to its continued usage, it's unlikely to be removed. If a browser implements __lookupGetter__(), it also needs to implement the __lookupSetter__(), __defineGetter__(), and __defineSetter__() methods.

## Examples

### Using __lookupGetter__()

```
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

obj.__lookupGetter__("foo");
// [Function: get foo]
```

### Looking up a property's getter in the standard way

You should use the Object.getOwnPropertyDescriptor() API to look up a property's getter. Compared to __lookupGetter__(), this method allows looking up symbol properties. The Object.getOwnPropertyDescriptor() method also works with null-prototype objects, which don't inherit from Object.prototype and therefore don't have the __lookupGetter__() method. If __lookupGetter__()'s behavior of walking up the prototype chain is important, you may implement it yourself with Object.getPrototypeOf().

```
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").get;
// [Function: get foo]
```

```
const obj2 = {
  __proto__: {
    get foo() {
      return Math.random() > 0.5 ? "foo" : "bar";
    },
  },
};

function findGetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.get;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findGetter(obj2, "foo")); // [Function: get foo]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Object.prototype.__lookupGetter__ in core-js
- Object.prototype.__lookupSetter__()
- get
- Object.getOwnPropertyDescriptor()
- Object.prototype.__defineGetter__()
- Object.prototype.__defineSetter__()
- JS Guide: Defining Getters and Setters

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
