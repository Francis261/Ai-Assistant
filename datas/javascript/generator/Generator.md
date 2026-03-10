# Generator

Source: https://devdocs.io/javascript/global_objects/generator

The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

Generator is a subclass of the hidden Iterator class.

## Constructor

There's no JavaScript entity that corresponds to the Generator constructor. Instances of Generator must be returned from generator functions:

```
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

There's only a hidden object which is the prototype object shared by all objects created by generator functions. This object is often stylized as Generator.prototype to make it look like a class, but it should be more appropriately called GeneratorFunction.prototype.prototype, because GeneratorFunction is an actual JavaScript entity. To understand the prototype chain of Generator instances, see GeneratorFunction.prototype.prototype.

## Instance properties

These properties are defined on Generator.prototype and shared by all Generator instances.

The constructor function that created the instance object. For Generator instances, the initial value is GeneratorFunction.prototype.

Note: Generator objects do not store a reference to the generator function that created them.

The initial value of the [Symbol.toStringTag] property is the string "Generator". This property is used in Object.prototype.toString().

## Instance methods

Also inherits instance methods from its parent Iterator.

Returns a value yielded by the yield expression.

Acts as if a return statement is inserted in the generator's body at the current suspended position, which finishes the generator and allows the generator to perform any cleanup tasks when combined with a try...finally block.

Acts as if a throw statement is inserted in the generator's body at the current suspended position, which informs the generator of an error condition and allows it to handle the error, or perform cleanup and close itself.

## Examples

### An infinite iterator

With a generator function, values are not evaluated until they are needed. Therefore a generator allows us to define a potentially infinite data structure.

```
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// …
```

## Specifications

## Browser compatibility

## See also

- function*
- function* expression
- GeneratorFunction
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator
