# GeneratorFunction

Source: https://devdocs.io/javascript/global_objects/generatorfunction

The GeneratorFunction object provides methods for generator functions. In JavaScript, every generator function is actually a GeneratorFunction object.

Note that GeneratorFunction is not a global object. It can be obtained with the following code:

```
const GeneratorFunction = function* () {}.constructor;
```

GeneratorFunction is a subclass of Function.

## Try it

```
const GeneratorFunction = function* () {}.constructor;

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);
// Expected output: "abc"
```

## Constructor

Creates a new GeneratorFunction object.

## Instance properties

Also inherits instance properties from its parent Function.

These properties are defined on GeneratorFunction.prototype and shared by all GeneratorFunction instances.

The constructor function that created the instance object. For GeneratorFunction instances, the initial value is the GeneratorFunction constructor.

All generator functions share the same prototype property, which is Generator.prototype. Each generator function created with the function* syntax or the GeneratorFunction() constructor also has its own prototype property, whose prototype is GeneratorFunction.prototype.prototype. When the generator function is called, its prototype property becomes the prototype of the returned generator object.

The initial value of the [Symbol.toStringTag] property is the string "GeneratorFunction". This property is used in Object.prototype.toString().

These properties are own properties of each GeneratorFunction instance.

Used when the function is used as a constructor with the new operator. It will become the new object's prototype.

## Instance methods

Inherits instance methods from its parent Function.

## Specifications

## Browser compatibility

## See also

- function*
- function* expression
- Function
- AsyncFunction
- AsyncGeneratorFunction
- Functions

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction
