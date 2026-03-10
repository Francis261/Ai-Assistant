# TypeError: "x" is not a constructor

Source: https://devdocs.io/javascript/errors/not_a_constructor

The JavaScript exception "is not a constructor" occurs when there was an attempt to use an object or a variable as a constructor, but that object or variable is not a constructor.

## Message

```
TypeError: x is not a constructor (V8-based & Firefox & Safari)
```

## Error type

## What went wrong?

There was an attempt to use an object or a variable as a constructor, but that object or variable is not a constructor. See constructor or the new operator for more information on what a constructor is.

There are many global objects, like String or Array, which are constructable using new. However, some global objects are not and their properties and methods are static. The following JavaScript standard built-in objects are not a constructor: Math, JSON, Symbol, Reflect, Intl, Atomics.

Generator functions cannot be used as constructors either.

## Examples

### Invalid cases

```
const Car = 1;
new Car();
// TypeError: Car is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {}
const obj = new f();
// TypeError: f is not a constructor
```

### A car constructor

Suppose you want to create an object type for cars. You want this type of object to be called Car, and you want it to have properties for make, model, and year. To do this, you would write the following function:

```
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

Now you can create an object called myCar as follows:

```
const myCar = new Car("Eagle", "Talon TSi", 1993);
```

### In Promises

When returning an immediately-resolved or immediately-rejected Promise, you do not need to create a new Promise(...) and act on it. Instead, use the Promise.resolve() or Promise.reject() static methods.

This is not legal (the Promise constructor is not being called correctly) and will throw a TypeError: this is not a constructor exception:

```
function fn() {
  return new Promise.resolve(true);
}
```

This is legal, but unnecessarily long:

```
function fn() {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
}
```

Instead, return the static method:

```
function resolveAlways() {
  return Promise.resolve(true);
}

function rejectAlways() {
  return Promise.reject(new Error());
}
```

## See also

- constructor
- new

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_constructor
