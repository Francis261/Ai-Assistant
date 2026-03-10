# set

Source: https://devdocs.io/javascript/functions/set

The set syntax binds an object property to a function to be called when there is an attempt to set that property. It can also be used in classes.

## Try it

```
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
language.current = "FA";

console.log(language.log);
// Expected output: Array ["EN", "FA"]
```

## Syntax

```
{ set prop(val) { /* … */ } }
{ set [expression](val) { /* … */ } }
```

There are some additional syntax restrictions:

- A setter must have exactly one parameter.

### Parameters

The name of the property to bind to the given function. In the same way as other properties in object initializers, it can be a string literal, a number literal, or an identifier.

An alias for the variable that holds the value attempted to be assigned to prop.

You can also use expressions for a computed property name to bind to the given function.

## Description

In JavaScript, a setter can be used to execute a function whenever an attempt is made to change a property's value. Setters are most often used in conjunction with getters.

An object property is either a data property or an accessor property, but it cannot simultaneously be both. Read Object.defineProperty() for more information. The setter syntax allows you to specify the setter function in an object initializer.

```
const obj = {
  set prop() {
    // setter, the code executed when setting obj.prop
  },
}
```

Properties defined using this syntax are own properties of the created object, and they are configurable and enumerable.

## Examples

### Defining a setter on new objects in object initializers

The following example defines a pseudo-property current of object language. When current is assigned a value, it updates log with that value:

```
const language = {
  set current(name) {
    this.log.push(name);
  },
  log: [],
};

language.current = "EN";
console.log(language.log); // ['EN']

language.current = "FA";
console.log(language.log); // ['EN', 'FA']
```

Note that current is not defined, and any attempts to access it will result in undefined.

### Using setters in classes

You can use the exact same syntax to define public instance setters that are available on class instances. In classes, you don't need the comma separator between methods.

```
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg); // "hello world"

instance.msg = "cake";
console.log(instance.msg); // "hello cake"
```

Setter properties are defined on the prototype property of the class and are thus shared by all instances of the class. Unlike setter properties in object literals, setter properties in classes are not enumerable.

Static setters and private setters use similar syntaxes, which are described in the static and private elements pages.

### Removing a setter with the delete operator

If you want to remove the setter, you can just delete it:

```
delete language.current;
```

### Defining a setter on existing objects using defineProperty

To append a setter to an existing object, use Object.defineProperty().

```
const o = { a: 0 };

Object.defineProperty(o, "b", {
  set(x) {
    this.a = x / 2;
  },
});

o.b = 10;
// Runs the setter, which assigns 10 / 2 (5) to the 'a' property

console.log(o.a); // 5
```

### Using a computed property name

```
const expr = "foo";

const obj = {
  baz: "bar",
  set [expr](v) {
    this.baz = v;
  },
};

console.log(obj.baz); // "bar"

obj.foo = "baz";
// Run the setter

console.log(obj.baz); // "baz"
```

## Specifications

## Browser compatibility

## See also

- Working with objects guide
- Functions
- get
- Object.defineProperty()
- Object initializer
- class
- Property accessors
- Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments by Jeff Walden (2010)
- More SpiderMonkey changes: ancient, esoteric, very rarely used syntax for creating getters and setters is being removed by Jeff Walden (2010)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
