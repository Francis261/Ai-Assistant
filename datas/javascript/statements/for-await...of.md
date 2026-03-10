# for await...of

Source: https://devdocs.io/javascript/statements/for-await...of

The for await...of statement creates a loop iterating over async iterable objects as well as sync iterables. This statement can only be used in contexts where await can be used, which includes inside an async function body and in a module.

## Try it

```
async function* foo() {
  yield 1;
  yield 2;
}

(async () => {
  for await (const num of foo()) {
    console.log(num);
    // Expected output: 1

    break; // Closes iterator, triggers return
  }
})();
```

## Syntax

```
for await (variable of iterable)
  statement
```

Receives a value from the sequence on each iteration. May be either a declaration with const, let, or var, or an assignment target (e.g., a previously declared variable, an object property, or a destructuring pattern). Variables declared with var are not local to the loop, i.e., they are in the same scope the for await...of loop is in.

An async iterable or sync iterable. The source of the sequence of values on which the loop operates.

A statement to be executed on every iteration. May reference variable. You can use a block statement to execute multiple statements.

## Description

When a for await...of loop iterates over an iterable, it first gets the iterable's [Symbol.asyncIterator]() method and calls it, which returns an async iterator. If the @asyncIterator method does not exist, it then looks for a [Symbol.iterator]() method, which returns a sync iterator. The sync iterator returned is then wrapped into an async iterator by wrapping every object returned from the next(), return(), and throw() methods into a resolved or rejected promise, with the value property resolved if it's also a promise. The loop then repeatedly calls the final async iterator's next() method and awaits the returned promise, producing the sequence of values to be assigned to variable.

A for await...of loop exits when the iterator has completed (the awaited next() result is an object with done: true). Like other looping statements, you can use control flow statements inside statement:

- break stops statement execution and goes to the first statement after the loop.
- continue stops statement execution and goes to the next iteration of the loop.

If the for await...of loop exited early (e.g., a break statement is encountered or an error is thrown), the return() method of the iterator is called to perform any cleanup. The returned promise is awaited before the loop exits.

for await...of generally functions the same as the for...of loop and shares many of the same syntax and semantics. There are a few differences:

- for await...of works on both sync and async iterables, while for...of only works on sync iterables.
- for await...of can only be used in contexts where await can be used, which includes inside an async function body and in a module. Even when the iterable is sync, the loop still awaits the return value for every iteration, leading to slower execution due to repeated promise unwrapping.
- If the iterable is a sync iterable that yields promises, for await...of would produce a sequence of resolved values, while for...of would produce a sequence of promises. (However, beware of error handling and cleanup — see Iterating over sync iterables and generators)
- For for await...of, the variable can be the identifier async (e.g., for await (async of foo)); for...of forbids this case.

Like for...of, if you use a using declaration, then the variable cannot be called of:

```
for await (using of of []); // SyntaxError
```

This is to avoid syntax ambiguity with the valid code for await (using of []), before using was introduced.

## Examples

### Iterating over async iterables

You can also iterate over an object that explicitly implements async iterable protocol:

```
const LIMIT = 3;

const asyncIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next() {
        const done = i === LIMIT;
        const value = done ? undefined : i++;
        return Promise.resolve({ value, done });
      },
      return() {
        // This will be reached if the consumer called 'break' or 'return' early in the loop.
        return { done: true };
      },
    };
  },
};

(async () => {
  for await (const num of asyncIterable) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

### Iterating over async generators

Since the return values of async generator functions conform to the async iterable protocol, they can be looped using for await...of.

```
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async () => {
  for await (const num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

For a more concrete example of iterating over an async generator using for await...of, consider iterating over data from an API.

This example first creates an async iterable for a stream of data, then uses it to find the size of the response from the API.

```
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) return;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

// Fetches data from URL and calculates response size using the async generator.
async function getResponseSize(url) {
  const response = await fetch(url);
  // Will hold the size of the response, in bytes.
  let responseSize = 0;
  // The for-await-of loop. Async iterates over each portion of the response.
  for await (const chunk of streamAsyncIterable(response.body)) {
    // Incrementing the total response length.
    responseSize += chunk.length;
  }

  console.log(`Response Size: ${responseSize} bytes`); // "Response Size: 1071472"
  return responseSize;
}
getResponseSize("https://jsonplaceholder.typicode.com/photos");
```

### Iterating over sync iterables and generators

for await...of loop also consumes sync iterables and generators. In that case it internally awaits emitted values before assign them to the loop control variable.

```
function* generator() {
  yield 0;
  yield 1;
  yield Promise.resolve(2);
  yield Promise.resolve(3);
  yield 4;
}

(async () => {
  for await (const num of generator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
// 3
// 4

// compare with for-of loop:

for (const numOrPromise of generator()) {
  console.log(numOrPromise);
}
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
```

Note: Be aware of yielding rejected promises from a sync generator. In such case, for await...of throws when consuming the rejected promise and DOESN'T CALL finally blocks within that generator. This can be undesirable if you need to free some allocated resources with try/finally.

```
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.reject(new Error("failed"));
    yield 4;
    throw new Error("throws");
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    for await (const num of generatorWithRejectedPromises()) {
      console.log(num);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// 1
// 2
// caught Error: failed

// compare with for-of loop:

try {
  for (const numOrPromise of generatorWithRejectedPromises()) {
    console.log(numOrPromise);
  }
} catch (e) {
  console.log("caught", e);
}
// 0
// 1
// Promise { 2 }
// Promise { <rejected> Error: failed }
// 4
// caught Error: throws
// called finally
```

To make finally blocks of a sync generator always called, use the appropriate form of the loop — for await...of for the async generator and for...of for the sync one — and await yielded promises explicitly inside the loop.

```
(async () => {
  try {
    for (const numOrPromise of generatorWithRejectedPromises()) {
      console.log(await numOrPromise);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// 0
// 1
// 2
// caught Error: failed
// called finally
```

## Specifications

## Browser compatibility

## See also

- Symbol.asyncIterator
- for...of

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
