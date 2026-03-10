# Reflect

Source: https://devdocs.io/javascript/global_objects/reflect

The Reflect namespace object contains static methods for invoking interceptable JavaScript object internal methods. The methods are the same as those of proxy handlers.

## Description

Unlike most global objects, Reflect is not a constructor. You cannot use it with the new operator or invoke the Reflect object as a function. All properties and methods of Reflect are static (just like the Math object).

The Reflect object provides a collection of static functions which have the same names as the proxy handler methods.

The major use case of Reflect is to provide default forwarding behavior in Proxy handler traps. A trap is used to intercept an operation on an object — it provides a custom implementation for an object internal method. The Reflect API is used to invoke the corresponding internal method. For example, the code below creates a proxy p with a deleteProperty trap that intercepts the [[Delete]] internal method. Reflect.deleteProperty() is used to invoke the default [[Delete]] behavior on targetObject directly. You can replace it with delete, but using Reflect saves you from having to remember the syntax that each internal method corresponds to.

```
const p = new Proxy(
  {},
  {
    deleteProperty(targetObject, property) {
      // Custom functionality: log the deletion
      console.log("Deleting property:", property);

      // Execute the default introspection behavior
      return Reflect.deleteProperty(targetObject, property);
    },
  },
);
```

The Reflect methods also allow finer control of how the internal method is invoked. For example, Reflect.construct() is the only way to construct a target function with a specific new.target value. If you use the new operator to invoke a function, the new.target value is always the function itself. This has important effects with subclassing. For another example, Reflect.get() allows you to run a getter with a custom this value, while property accessors always use the current object as the this value.

Nearly every Reflect method's behavior can be done with some other syntax or method. Some of these methods have corresponding static methods of the same name on Object, although they do have some subtle differences. For the exact differences, see the description for each Reflect method.

## Static properties

The initial value of the [Symbol.toStringTag] property is the string "Reflect". This property is used in Object.prototype.toString().

## Static methods

Calls a target function with arguments as specified by the argumentsList parameter. See also Function.prototype.apply().

The new operator as a function. Equivalent to calling new target(...argumentsList). Also provides the option to specify a different prototype.

Similar to Object.defineProperty(). Returns a boolean that is true if the property was successfully defined.

The delete operator as a function. Equivalent to calling delete target[propertyKey].

Returns the value of the property. Works like getting a property from an object (target[propertyKey]) as a function.

Similar to Object.getOwnPropertyDescriptor(). Returns a property descriptor of the given property if it exists on the object, undefined otherwise.

Same as Object.getPrototypeOf().

Returns a boolean indicating whether the target has the property. Either as own or inherited. Works like the in operator as a function.

Same as Object.isExtensible(). Returns a boolean that is true if the target is extensible.

Returns an array of the target object's own (not inherited) property keys.

Similar to Object.preventExtensions(). Returns a boolean that is true if the update was successful.

A function that assigns values to properties. Returns a boolean that is true if the update was successful.

A function that sets the prototype of an object. Returns a boolean that is true if the update was successful.

## Examples

### Detecting whether an object contains certain properties

```
const duck = {
  name: "Maurice",
  color: "white",
  greeting() {
    console.log(`Quaaaack! My name is ${this.name}`);
  },
};

Reflect.has(duck, "color");
// true
Reflect.has(duck, "haircut");
// false
```

### Returning the object's own keys

```
Reflect.ownKeys(duck);
// [ "name", "color", "greeting" ]
```

### Adding a new property to the object

```
Reflect.set(duck, "eyes", "black");
// returns "true" if successful
// "duck" now contains the property "eyes: 'black'"
```

## Specifications

## Browser compatibility

## See also

- Proxy

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
