# AsyncGeneratorFunction

Source: https://devdocs.io/javascript/global_objects/asyncgeneratorfunction

The AsyncGeneratorFunction object provides methods for async generator functions. In JavaScript, every async generator function is actually an AsyncGeneratorFunction object.

Note that AsyncGeneratorFunction is not a global object. It can be obtained with the following code:

```
const AsyncGeneratorFunction = async function* () {}.constructor;
```

AsyncGeneratorFunction is a subclass of Function.

## Try it

```
const AsyncGeneratorFunction = async function* () {}.constructor;

const foo = new AsyncGeneratorFunction(`
  yield await Promise.resolve('a');
  yield await Promise.resolve('b');
  yield await Promise.resolve('c');
`);

let str = "";

async function generate() {
  for await (const val of foo()) {
    str += val;
  }
  console.log(str);
}

generate();
// Expected output: "abc"
```

## Constructor

Creates a new AsyncGeneratorFunction object.

## Instance properties

Also inherits instance properties from its parent Function.

These properties are defined on AsyncGeneratorFunction.prototype and shared by all AsyncGeneratorFunction instances.

The constructor function that created the instance object. For AsyncGeneratorFunction instances, the initial value is the AsyncGeneratorFunction constructor.

All async generator functions share the same prototype property, which is AsyncGenerator.prototype. Each async generator function created with the async function* syntax or the AsyncGeneratorFunction() constructor also has its own prototype property, whose prototype is AsyncGeneratorFunction.prototype.prototype. When the async generator function is called, its prototype property becomes the prototype of the returned async generator object.

The initial value of the [Symbol.toStringTag] property is the string "AsyncGeneratorFunction". This property is used in Object.prototype.toString().

These properties are own properties of each AsyncGeneratorFunction instance.

Used when the function is used as a constructor with the new operator. It will become the new object's prototype.

## Instance methods

Inherits instance methods from its parent Function.

## Specifications

## Browser compatibility

## See also

- async function*
- async function* expression
- Function
- AsyncFunction
- GeneratorFunction
- Functions

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction
