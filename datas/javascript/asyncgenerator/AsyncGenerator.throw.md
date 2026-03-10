# AsyncGenerator.prototype.throw()

Source: https://devdocs.io/javascript/global_objects/asyncgenerator/throw

The throw() method of AsyncGenerator instances acts as if a throw statement is inserted in the generator's body at the current suspended position, which informs the generator of an error condition and allows it to handle the error, or perform cleanup and close itself.

## Syntax

```
asyncGeneratorInstance.throw(exception)
```

### Parameters

The exception to throw. For debugging purposes, it is useful to make it an instanceof Error.

### Return value

If the thrown error is not caught, it will return a Promise which rejects with the exception passed in.

If the exception is caught by a try...catch and the generator resumes to yield more values, it will return a Promise which resolves with an Object with two properties:

A boolean value:

- true if the generator function's control flow has reached the end.
- false if the generator function is able to produce more values.

The value yielded from the next yield expression.

## Examples

### Using throw()

The following example shows a generator and an error that is thrown using the throw method. An error can be caught by a try...catch block as usual.

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
    try {
      await sleep(500);
      yield 42;
    } catch (e) {
      console.error(e);
    }
  }
}

const asyncGen = createAsyncGenerator();
asyncGen.next(1).then((res) => console.log(res)); // { value: 42, done: false }
asyncGen
  .throw(new Error("Something went wrong")) // Error: Something went wrong
  .then((res) => console.log(res)); // { value: 42, done: false }
```

## Specifications

## Browser compatibility

## See also

- async function*
- Iterators and generators guide

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator/throw
