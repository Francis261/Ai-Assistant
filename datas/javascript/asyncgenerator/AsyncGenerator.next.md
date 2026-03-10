# AsyncGenerator.prototype.next()

Source: https://devdocs.io/javascript/global_objects/asyncgenerator/next

The next() method of AsyncGenerator instances returns the next value in the sequence.

## Syntax

```
next()
next(value)
```

### Parameters

An optional value used to modify the internal state of the generator. A value passed to the next() method will be received by yield

### Return value

A Promise which when resolved returns an Object with two properties:

A boolean value:

- true if the generator is past the end of its control flow. In this case value specifies the return value of the generator (which may be undefined).
- false if the generator is able to produce more values.

Any JavaScript value yielded or returned by the generator.

## Examples

### Using next()

The following example shows a generator and the object that the next method returns:

```
// An async task. Pretend it's doing something more useful
// in practice.
function delayedValue(time, value) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* createAsyncGenerator() {
  yield delayedValue(500, 1);
  yield delayedValue(500, 2);
  yield delayedValue(500, 3);
}

const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res)); // { value: 1, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 2, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: 3, done: false }
asyncGen.next().then((res) => console.log(res)); // { value: undefined, done: true }
```

### Sending values to the generator

In this example, next is called with a value.

Note: The first call does not log anything, because the generator was not yielding anything initially.

```
// An async task. Pretend it's doing something more useful
// in practice.
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

async function* createAsyncGenerator() {
  while (true) {
    await sleep(500);
    const value = yield;
    console.log(value);
  }
}

async function main() {
  const asyncGen = createAsyncGenerator();
  // No log at this step: the first value sent through `next` is lost
  console.log(await asyncGen.next(1)); // { value: undefined, done: false }
  // Logs 2: the value sent through `next`
  console.log(await asyncGen.next(2)); // { value: undefined, done: false }
}

main();
```

## Specifications

## Browser compatibility

## See also

- async function*
- Iterators and generators guide

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/next
