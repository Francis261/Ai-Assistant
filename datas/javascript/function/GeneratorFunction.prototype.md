# GeneratorFunction.prototype.prototype

Source: https://devdocs.io/javascript/global_objects/generatorfunction/prototype

The prototype property of GeneratorFunction.prototype is shared by all generator functions. Its value is Generator.prototype. Each generator function created with the function* syntax or the GeneratorFunction() constructor also has its own prototype property, whose prototype is GeneratorFunction.prototype.prototype. When the generator function is called, its prototype property becomes the prototype of the returned generator object.

## Value

The same object as Generator.prototype. GeneratorFunction.prototype.prototype is the technically more accurate name, but Generator.prototype appeals to the intuition that it's the prototype of generator objects.

The prototype property of each GeneratorFunction instance is an empty object with no properties, whose prototype is GeneratorFunction.prototype.prototype. It has the following property attributes:

## Description

A generator function instance has two prototype properties. The first one is its own prototype property. The second one is the prototype property on its prototype, which is GeneratorFunction.prototype. (Remember that every generator function is an instance of GeneratorFunction, so it has GeneratorFunction.prototype as its prototype.)

```
function* genFunc() {}
const GeneratorFunctionPrototype = Object.getPrototypeOf(genFunc);
console.log(Object.hasOwn(genFunc, "prototype")); // true
console.log(Object.hasOwn(GeneratorFunctionPrototype, "prototype")); // true
```

When a generator function is called, the generator function's prototype property becomes the prototype of the returned generator object.

```
const gen = genFunc();
const proto = Object.getPrototypeOf;
console.log(proto(gen) === genFunc.prototype); // true
console.log(proto(proto(gen)) === GeneratorFunctionPrototype.prototype); // true
```

The following diagram illustrates the prototype chain of a generator function and its instances. Each hollow arrow indicates an inheritance relationship (i.e., a prototype link), and each solid arrow indicates a property relationship. Note that there's no way to access genFunc from gen — they only have an instanceof relationship.

## Specifications

## See also

- function*
- function* expression
- AsyncGeneratorFunction
- GeneratorFunction
- Inheritance and the prototype chain
- Iterators and generators

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype
