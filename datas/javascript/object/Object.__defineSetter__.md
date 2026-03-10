# Object.prototype.__defineSetter__()

Source: https://devdocs.io/javascript/global_objects/object/__definesetter__

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Note: This feature is deprecated in favor of defining setters using the object initializer syntax or the Object.defineProperty() API. This method's behavior is only specified for web compatibility, and is not required to be implemented in any platform. It may not work everywhere.

The __defineSetter__() method of Object instances binds an object's property to a function to be called when an attempt is made to set that property.

## Syntax

```
__defineSetter__(prop, func)
```

### Parameters

A string containing the name of the property that the setter func is bound to.

A function to be called when there is an attempt to set the specified property. This function receives the following parameter:

The value attempted to be assigned to prop.

### Return value

None (undefined).

### Exceptions

Thrown if func is not a function.

## Description

All objects that inherit from Object.prototype (that is, all except null-prototype objects) inherit the __defineSetter__() method. This method allows a setter to be defined on a pre-existing object. This is equivalent to Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true }), which means the property is enumerable and configurable, and any existing getter, if present, is preserved.

__defineSetter__() is defined in the spec as "normative optional", which means no implementation is required to implement this. However, all major browsers implement it, and due to its continued usage, it's unlikely to be removed. If a browser implements __defineSetter__(), it also needs to implement the __lookupGetter__(), __lookupSetter__(), and __defineGetter__() methods.

## Examples

### Using __defineSetter__()

```
const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### Defining a setter property in standard ways

You can use the set syntax to define a setter when the object is first initialized.

```
const o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

You may also use Object.defineProperty() to define a setter on an object after it's been created. Compared to __defineSetter__(), this method allows you to control the setter's enumerability and configurability, as well as defining symbol properties. The Object.defineProperty() method also works with null-prototype objects, which don't inherit from Object.prototype and therefore don't have the __defineSetter__() method.

```
const o = {};
Object.defineProperty(o, "value", {
  set(val) {
    this.anotherValue = val;
  },
  configurable: true,
  enumerable: true,
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Object.prototype.__defineSetter__ in core-js
- Object.prototype.__defineGetter__()
- set
- Object.defineProperty()
- Object.prototype.__lookupGetter__()
- Object.prototype.__lookupSetter__()
- JS Guide: Defining Getters and Setters
- Firefox bug 647423

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
