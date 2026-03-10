# TypeError: already executing generator

Source: https://devdocs.io/javascript/errors/already_executing_generator

The JavaScript exception "TypeError: already executing generator" occurs when a generator is continued using one of its methods (such as next()) while executing the generator function's body itself.

## Message

```
TypeError: Generator is already running (V8-based)
TypeError: already executing generator (Firefox)
TypeError: Generator is executing (Safari)
```

## Error type

## What went wrong?

The generator's methods, next(), return(), and throw(), are meant to continue the execution of a generator function when it's paused after a yield expression or before the first statement. If a call to one of these methods is made while executing the generator function, the error is thrown. If you want to return or throw within the generator function, use the return statement or the throw statement, respectively.

## Examples

```
let it;
function* getNumbers(times) {
  if (times <= 0) {
    it.throw(new Error("times must be greater than 0"));
  }
  for (let i = 0; i < times; i++) {
    yield i;
  }
}
it = getNumbers(3);
it.next();
```

```
let it;
function* getNumbers(times) {
  if (times <= 0) {
    throw new Error("times must be greater than 0");
  }
  for (let i = 0; i < times; i++) {
    yield i;
  }
}
it = getNumbers(3);
it.next(); // { value: 0, done: false }
```

## See also

- Iterators and generators
- Iteration protocols
- function*
- Generator

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Already_executing_generator
