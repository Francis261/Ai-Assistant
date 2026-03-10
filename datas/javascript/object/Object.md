# Object

Source: https://devdocs.io/javascript/global_objects/object

The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities. Objects can be created using the Object() constructor or the object initializer / literal syntax.

## Description

Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.prototype, although these properties may be shadowed (a.k.a. overridden). The only objects that don't inherit from Object.prototype are those with null prototype, or descended from other null prototype objects.

Changes to the Object.prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior. To make it more secure, Object.prototype is the only object in the core JavaScript language that has immutable prototype — the prototype of Object.prototype is always null and not changeable.

### Object prototype properties

You should avoid calling any of the Object.prototype methods directly from the instance, especially those that are not intended to be polymorphic (i.e., only its initial behavior makes sense and no descending object could override it in a meaningful way). All objects descending from Object.prototype may define a custom own property that has the same name, but with entirely different semantics from what you expect. Furthermore, these properties are not inherited by null-prototype objects. All modern JavaScript utilities for working with objects are static. More specifically:

- valueOf(), toString(), and toLocaleString() exist to be polymorphic and you should expect the object to define its own implementation with sensible behaviors, so you can call them as instance methods. However, valueOf() and toString() are usually implicitly called through type conversion and you don't need to call them yourself in your code.
- __defineGetter__(), __defineSetter__(), __lookupGetter__(), and __lookupSetter__() are deprecated and should not be used. Use the static alternatives Object.defineProperty() and Object.getOwnPropertyDescriptor() instead.
- The __proto__ property is deprecated and should not be used. The Object.getPrototypeOf() and Object.setPrototypeOf() alternatives are static methods.
- The propertyIsEnumerable() and hasOwnProperty() methods can be replaced with the Object.getOwnPropertyDescriptor() and Object.hasOwn() static methods, respectively.
- The isPrototypeOf() method can usually be replaced with instanceof, if you are checking the prototype property of a constructor.

In case where a semantically equivalent static method doesn't exist, or if you really want to use the Object.prototype method, you should directly call() the Object.prototype method on your target object instead, to prevent the object from having an overriding property that produces unexpected results.

```
const obj = {
  foo: 1,
  // You should not define such a method on your own object,
  // but you may not be able to prevent it from happening if
  // you are receiving the object from external input
  propertyIsEnumerable() {
    return false;
  },
};

obj.propertyIsEnumerable("foo"); // false; unexpected result
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; expected result
```

### Deleting a property from an object

There isn't any method in an Object itself to delete its own properties (such as Map.prototype.delete()). To do so, one must use the delete operator.

### null-prototype objects

Almost all objects in JavaScript ultimately inherit from Object.prototype (see inheritance and the prototype chain). However, you may create null-prototype objects using Object.create(null) or the object initializer syntax with __proto__: null (note: the __proto__ key in object literals is different from the deprecated Object.prototype.__proto__ property). You can also change the prototype of an existing object to null by calling Object.setPrototypeOf(obj, null).

```
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

An object with a null prototype can behave in unexpected ways, because it doesn't inherit any object methods from Object.prototype. This is especially true when debugging, since common object-property converting/detecting utility functions may generate errors, or lose information (especially if using silent error-traps that ignore errors).

For example, the lack of Object.prototype.toString() often makes debugging intractable:

```
const normalObj = {}; // create a normal object
const nullProtoObj = Object.create(null); // create an object with "null" prototype

console.log(`normalObj is: ${normalObj}`); // shows "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // throws error: Cannot convert object to primitive value

alert(normalObj); // shows [object Object]
alert(nullProtoObj); // throws error: Cannot convert object to primitive value
```

Other methods will fail as well.

```
normalObj.valueOf(); // shows {}
nullProtoObj.valueOf(); // throws error: nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p"); // shows "true"
nullProtoObj.hasOwnProperty("p"); // throws error: nullProtoObj.hasOwnProperty is not a function

normalObj.constructor; // shows "Object() { [native code] }"
nullProtoObj.constructor; // shows "undefined"
```

We can add the toString method back to the null-prototype object by assigning it one:

```
nullProtoObj.toString = Object.prototype.toString; // since new object lacks toString, add the original generic one back

console.log(nullProtoObj.toString()); // shows "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // shows "nullProtoObj is: [object Object]"
```

Unlike normal objects, in which toString() is on the object's prototype, the toString() method here is an own property of nullProtoObj. This is because nullProtoObj has no (null) prototype.

You can also revert a null-prototype object back to an ordinary object using Object.setPrototypeOf(nullProtoObj, Object.prototype).

In practice, objects with null prototype are usually used as a cheap substitute for maps. The presence of Object.prototype properties will cause some bugs:

```
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]
```

Using a null-prototype object removes this hazard without introducing too much complexity to the hasPerson and getAge functions:

```
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

In such case, the addition of any method should be done cautiously, as they can be confused with the other key-value pairs stored as data.

Making your object not inherit from Object.prototype also prevents prototype pollution attacks. If a malicious script adds a property to Object.prototype, it will be accessible on every object in your program, except objects that have null prototype.

```
const user = {};

// A malicious script:
Object.prototype.authenticated = true;

// Unexpectedly allowing unauthenticated user to pass through
if (user.authenticated) {
  // access confidential data
}
```

JavaScript also has built-in APIs that produce null-prototype objects, especially those that use objects as ad hoc key-value collections. For example:

- The return value of Object.groupBy()
- The groups and indices.groups properties of the result of RegExp.prototype.exec()
- Array.prototype[Symbol.unscopables] (all [Symbol.unscopables] objects should have null-prototype)
- import.meta
- Module namespace objects, obtained through import * as ns from "module"; or import()

The term "null-prototype object" often also includes any object without Object.prototype in its prototype chain. Such objects can be created with extends null when using classes.

### Object coercion

Many built-in operations that expect objects first coerce their arguments to objects. The operation can be summarized as follows:

- Objects are returned as-is.
- undefined and null throw a TypeError.
- Number, String, Boolean, Symbol, BigInt primitives are wrapped into their corresponding object wrappers.

There are two ways to achieve nearly the same effect in JavaScript.

- Object.prototype.valueOf(): Object.prototype.valueOf.call(x) does exactly the object coercion steps explained above to convert x.
- The Object() function: Object(x) uses the same algorithm to convert x, except that undefined and null don't throw a TypeError, but return a plain object.

Places that use object coercion include:

- The object parameter of for...in loops.
- The this value of Array methods.
- Parameters of Object methods such as Object.keys().
- Auto-boxing when a property is accessed on a primitive value, since primitives do not have properties.
- The this value when calling a non-strict function. Primitives are boxed while null and undefined are replaced with the global object.

Unlike conversion to primitives, the object coercion process itself is not observable in any way, since it doesn't invoke custom code like toString or valueOf methods.

## Constructor

Turns the input into an object.

## Static methods

Copies the values of all enumerable own properties from one or more source objects to a target object.

Creates a new object with the specified prototype object and properties.

Adds the named properties described by the given descriptors to an object.

Adds the named property described by a given descriptor to an object.

Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.

Freezes an object. Other code cannot delete or change its properties.

Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).

Returns a property descriptor for a named property on an object.

Returns an object containing all own property descriptors for an object.

Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.

Returns an array of all symbol properties found directly upon a given object.

Returns the prototype (internal [[Prototype]] property) of the specified object.

Groups the elements of a given iterable according to the string values returned by a provided callback function. The returned object has separate properties for each group, containing arrays with the elements in the group.

Returns true if the specified object has the indicated property as its own property, or false if the property is inherited or does not exist.

Compares if two values are the same value. Equates all NaN values (which differs from both IsLooselyEqual used by == and IsStrictlyEqual used by ===).

Determines if extending of an object is allowed.

Determines if an object was frozen.

Determines if an object is sealed.

Returns an array containing the names of all of the given object's own enumerable string properties.

Prevents any extensions of an object.

Prevents other code from deleting properties of an object.

Sets the object's prototype (its internal [[Prototype]] property).

Returns an array containing the values that correspond to all of a given object's own enumerable string properties.

## Instance properties

These properties are defined on Object.prototype and shared by all Object instances.

Points to the object which was used as prototype when the object was instantiated.

The constructor function that created the instance object. For plain Object instances, the initial value is the Object constructor. Instances of other constructors each inherit the constructor property from their respective Constructor.prototype object.

## Instance methods

Associates a function with a property that, when accessed, executes that function and returns its return value.

Associates a function with a property that, when set, executes that function which modifies the property.

Returns the function bound as a getter to the specified property.

Returns the function bound as a setter to the specified property.

Returns a boolean indicating whether an object contains the specified property as a direct property of that object and not inherited through the prototype chain.

Returns a boolean indicating whether the object this method is called upon is in the prototype chain of the specified object.

Returns a boolean indicating whether the specified property is the object's enumerable own property.

Calls toString().

Returns a string representation of the object.

Returns the primitive value of the specified object.

## Examples

### Constructing empty objects

The following example creates empty objects using the new keyword with different arguments:

```
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Using Object() constructor to turn primitives into an Object of their respective type

You can use the Object() constructor to create an object wrapper of a primitive value.

The following examples create variables o1 and o2 which are objects storing Boolean and BigInt values:

```
// Equivalent to const o1 = new Boolean(true)
const o1 = new Object(true);

// No equivalent because BigInt() can't be called as a constructor,
// and calling it as a regular function won't create an object
const o2 = new Object(1n);
```

### Object prototypes

When altering the behavior of existing Object.prototype methods, consider injecting code by wrapping your extension before or after the existing logic. For example, this (untested) code will pre-conditionally execute custom logic before the built-in logic or someone else's extension is executed.

When modifying prototypes with hooks, pass this and the arguments (the call state) to the current behavior by calling apply() on the function. This pattern can be used for any prototype, such as Node.prototype, Function.prototype, etc.

```
const current = Object.prototype.valueOf;

// Since my property "-prop-value" is cross-cutting and isn't always
// on the same prototype chain, I want to modify Object.prototype:
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  }
  // It doesn't look like one of my objects, so let's fall back on
  // the default behavior by reproducing the current behavior as best we can.
  // The apply behaves like "super" in some other languages.
  // Even though valueOf() doesn't take arguments, some other hook may.
  return current.apply(this, args);
};
```

Warning: Modifying the prototype property of any built-in constructor is considered a bad practice and risks forward compatibility.

You can read more about prototypes in Inheritance and the prototype chain.

## Specifications

## Browser compatibility

## See also

- Object initializer
- Prototype pollution attack

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
