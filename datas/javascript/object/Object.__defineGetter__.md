# Object.prototype.__defineGetter__()

Source: https://devdocs.io/javascript/global_objects/object/__definegetter__

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Note: This feature is deprecated in favor of defining getters using the object initializer syntax or the Object.defineProperty() API. This method's behavior is only specified for web compatibility, and is not required to be implemented in any platform. It may not work everywhere.

The __defineGetter__() method of Object instances binds an object's property to a function to be called when that property is looked up.

## Syntax

```
__defineGetter__(prop, func)
```

### Parameters

A string containing the name of the property that the getter func is bound to.

A function to be bound to a lookup of the specified property.

### Return value

None (undefined).

### Exceptions

Thrown if func is not a function.

## Description

All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the __defineGetter__() method. This method allows a getter to be defined on a pre-existing object. This is equivalent to Object.defineProperty(obj, prop, { get: func, configurable: true, enumerable: true }), which means the property is enumerable and configurable, and any existing setter, if present, is preserved.

__defineGetter__() is defined in the spec as "normative optional", which means no implementation is required to implement this. However, all major browsers implement it, and due to its continued usage, it's unlikely to be removed. If a browser implements __defineGetter__(), it also needs to implement the __lookupGetter__(), __lookupSetter__(), and __defineSetter__() methods.

## Examples

### Using __defineGetter__()

```
const o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5
```

### Defining a getter property in standard ways

You can use the get syntax to define a getter when the object is first initialized.

```
const o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5
```

You may also use Object.defineProperty() to define a getter on an object after it's been created. Compared to __defineGetter__(), this method allows you to control the getter's enumerability and configurability, as well as defining symbol properties. The Object.defineProperty() method also works with null-prototype objects, which don't inherit from Object.prototype and therefore don't have the __defineGetter__() method.

```
const o = {};
Object.defineProperty(o, "gimmeFive", {
  get() {
    return 5;
  },
  configurable: true,
  enumerable: true,
});
console.log(o.gimmeFive); // 5
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Object.prototype.__defineGetter__ in core-js
- Object.prototype.__defineSetter__()
- get
- Object.defineProperty()
- Object.prototype.__lookupGetter__()
- Object.prototype.__lookupSetter__()
- JS Guide: Defining Getters and Setters
- Firefox bug 647423

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
