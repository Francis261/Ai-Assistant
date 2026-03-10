# AsyncGenerator

Source: https://devdocs.io/javascript/global_objects/asyncgenerator

The AsyncGenerator object is returned by an async generator function and it conforms to both the async iterable protocol and the async iterator protocol.

Async generator methods always yield Promise objects.

AsyncGenerator is a subclass of the hidden AsyncIterator class.

## Constructor

There's no JavaScript entity that corresponds to the AsyncGenerator constructor. Instances of AsyncGenerator must be returned from async generator functions:

```
async function* createAsyncGenerator() {
  yield Promise.resolve(1);
  yield await Promise.resolve(2);
  yield 3;
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res.value)); // 1
asyncGen.next().then((res) => console.log(res.value)); // 2
asyncGen.next().then((res) => console.log(res.value)); // 3
```

There's only a hidden object which is the prototype object shared by all objects created by async generator functions. This object is often stylized as AsyncGenerator.prototype to make it look like a class, but it should be more appropriately called AsyncGeneratorFunction.prototype.prototype, because AsyncGeneratorFunction is an actual JavaScript entity. To understand the prototype chain of AsyncGenerator instances, see AsyncGeneratorFunction.prototype.prototype.

## Instance properties

These properties are defined on AsyncGenerator.prototype and shared by all AsyncGenerator instances.

The constructor function that created the instance object. For AsyncGenerator instances, the initial value is AsyncGeneratorFunction.prototype.

Note: AsyncGenerator objects do not store a reference to the async generator function that created them.

The initial value of the [Symbol.toStringTag] property is the string "AsyncGenerator". This property is used in Object.prototype.toString().

## Instance methods

Also inherits instance methods from its parent AsyncIterator.

Returns a Promise which will be resolved with the given value yielded by the yield expression.

Acts as if a return statement is inserted in the generator's body at the current suspended position, which finishes the generator and allows the generator to perform any cleanup tasks when combined with a try...finally block.

Acts as if a throw statement is inserted in the generator's body at the current suspended position, which informs the generator of an error condition and allows it to handle the error, or perform cleanup and close itself.

## Examples

### Async generator iteration

The following example iterates over an async generator, logging values 1–6 to the console at decreasing time intervals. Notice how each time a Promise is yielded, but it's automatically resolved within the for await...of loop.

```
// An async task. Pretend it's doing something more useful
// in practice.
function delayedValue(time, value) {
  return new Promise((resolve /*, reject */) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* generate() {
  yield delayedValue(2000, 1);
  yield delayedValue(1000, 2);
  yield delayedValue(500, 3);
  yield delayedValue(250, 4);
  yield delayedValue(125, 5);
  yield delayedValue(50, 6);
  console.log("All done!");
}

async function main() {
  for await (const value of generate()) {
    console.log("value", value);
  }
}

main().catch((e) => console.error(e));
```

## Specifications

## Browser compatibility

## See also

- function*
- async function*
- function* expression
- Generator Function
- Async Generator Function
- Iterators and generators guide

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator
