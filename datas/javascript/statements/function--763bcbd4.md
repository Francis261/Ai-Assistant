# function*

Source: https://devdocs.io/javascript/statements/function*

The function* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.

You can also define generator functions using the function* expression.

## Try it

```
function* generator(i) {
  yield i;
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value);
// Expected output: 10

console.log(gen.next().value);
// Expected output: 20
```

## Syntax

```
function* name(param0) {
  statements
}
function* name(param0, param1) {
  statements
}
function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

Note: Generator functions do not have arrow function counterparts.

Note: function and * are separate tokens, so they can be separated by whitespace or line terminators.

### Parameters

The function name.

The name of a formal parameter for the function. For the parameters' syntax, see the Functions reference.

The statements comprising the body of the function.

## Description

A function* declaration creates a GeneratorFunction object. Each time a generator function is called, it returns a new Generator object, which conforms to the iterator protocol. The generator function's execution is suspended at some place, which is initially at the very beginning of the function body. The generator function can be called multiple times to create multiple generators simultaneously; every generator maintains its own execution context of the generator function and can be stepped independently.

The generator allows bidirectional control flow: control flow can transfer between the generator function (callee) and its caller as many times as both parties wish to. Control flow can go from the caller to the callee by calling the generator's methods: next(), throw(), and return(). Control flow can go from the callee to the caller by exiting the function as normal using return or throw or execution all statements, or by using the yield and yield* expressions.

When the generator's next() method is called, the generator function's body is executed until one of the following:

- A yield expression. In this case, the next() method returns an object with a value property containing the yielded value and a done property that is always false. The next time next() is called, the yield expression evaluates to the value passed to next().
- A yield*, delegating to another iterator. In this case, this call and any future calls to next() on the generator is the same as calling next() on the delegated iterator, until the delegated iterator is finished.
- A return statement (that is not intercepted by a try...catch...finally), or the end of the control flow which implicitly means return undefined. In this case, the generator is finished, and the next() method returns an object with a value property containing the returned value and a done property that is always true. Any further next() calls have no effect and always return { value: undefined, done: true }.
- An error thrown inside the function, either via a throw statement or an unhandled exception. The next() method throws that error, and the generator is finished. Any further next() calls have no effect and always return { value: undefined, done: true }.

When the generator's throw() method is called, it acts as if a throw statement is inserted in the generator's body at the current suspended position. Similarly, when the generator's return() method is called, it acts as if a return statement is inserted in the generator's body at the current suspended position. Both methods usually finish the generator, unless the generator function catches the completion via try...catch...finally.

Generators used to be a paradigm for asynchronous programming, avoiding Callback Hell by achieving Inversion of Control. Nowadays, this use case is solved with the simpler async functions model and the Promise object. However, generators are still useful for many other tasks, such as defining iterators in a straightforward way.

function* declarations behave similar to function declarations — they are hoisted to the top of their scope and can be called anywhere in their scope, and they can be redeclared only in certain contexts.

## Examples

### Basic example

```
function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// …
```

### Example with yield*

```
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

const gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

### Passing arguments into Generators

```
function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

const gen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
gen.next(); // 0
gen.next("pretzel"); // 1 pretzel
gen.next("california"); // 2 california
gen.next("mayonnaise"); // 3 mayonnaise
```

### Return statement in a generator

```
function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "unreachable";
}

const gen = yieldAndReturn();
console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator as an object property

```
const someObj = {
  *generator() {
    yield "a";
    yield "b";
  },
};

const gen = someObj.generator();

console.log(gen.next()); // { value: 'a', done: false }
console.log(gen.next()); // { value: 'b', done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator as an object method

```
class Foo {
  *generator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const f = new Foo();
const gen = f.generator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Generator as a computed property

```
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
  }
}

const SomeObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(Array.from(new Foo())); // [ 1, 2 ]
console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
```

### Generators are not constructable

```
function* f() {}
const obj = new f(); // throws "TypeError: f is not a constructor
```

### Generator example

```
function* powers(n) {
  // Endless loop to generate
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {
  // Controlling generator
  if (power > 32) {
    break;
  }
  console.log(power);
  // 2
  // 4
  // 8
  // 16
  // 32
}
```

## Specifications

## Browser compatibility

## See also

- Functions guide
- Iterators and generators guide
- Functions
- GeneratorFunction
- function* expression
- function
- async function
- async function*
- Iteration protocols
- yield
- yield*
- Generator
- Regenerator on GitHub
- Promises and Generators: control flow utopia presentation by Forbes Lindesay at JSConf (2013)
- Task.js on GitHub
- You Don't Know JS: Async & Performance, Ch.4: Generators by Kyle Simpson

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
