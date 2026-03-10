# AsyncGeneratorFunction.prototype.prototype

Source: https://devdocs.io/javascript/global_objects/asyncgeneratorfunction/prototype

The prototype property of AsyncGeneratorFunction.prototype is shared by all async generator functions. Its value is AsyncGenerator.prototype. Each async generator function created with the async function* syntax or the AsyncGeneratorFunction() constructor also has its own prototype property, whose prototype is AsyncGeneratorFunction.prototype.prototype. When the async generator function is called, its prototype property becomes the prototype of the returned async generator object.

## Value

The same object as AsyncGenerator.prototype. AsyncGeneratorFunction.prototype.prototype is the technically more accurate name, but AsyncGenerator.prototype appeals to the intuition that it's the prototype of async generator objects.

The prototype property of each AsyncGeneratorFunction instance is an empty object with no properties, whose prototype is AsyncGeneratorFunction.prototype.prototype. It has the following property attributes:

## Description

An async generator function instance has two prototype properties. The first one is its own prototype property. The second one is the prototype property on its prototype, which is AsyncGeneratorFunction.prototype. (Remember that every async generator function is an instance of AsyncGeneratorFunction, so it has AsyncGeneratorFunction.prototype as its prototype.)

```
async function* genFunc() {}
const AsyncGeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(AsyncGeneratorFunctionPrototype, "prototype")); // true
```

When an async generator function is called, the async generator function's prototype property becomes the prototype of the returned async generator object.

```
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === AsyncGeneratorFunctionPrototype.prototype); // true
```

The following diagram illustrates the prototype chain of an async generator function and its instances. Each hollow arrow indicates an inheritance relationship (i.e., a prototype link), and each solid arrow indicates a property relationship. Note that there's no way to access genFunc from gen — they only have an instanceof relationship.

## Specifications

## See also

- async function*
- async function* expression
- AsyncGeneratorFunction
- GeneratorFunction
- Inheritance and the prototype chain
- Iterators and generators

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/prototype
