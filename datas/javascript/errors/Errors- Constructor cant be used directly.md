# TypeError: Iterator/AsyncIterator constructor can't be used directly

Source: https://devdocs.io/javascript/errors/constructor_cant_be_used_directly

The JavaScript exception "Iterator constructor can't be used directly" or "AsyncIterator constructor can't be used directly" occurs when you try to use the Iterator() or AsyncIterator() constructors directly to create instances. These constructors are abstract classes and should only be inherited from.

## Message

```
TypeError: Abstract class Iterator not directly constructable (V8-based)
TypeError: Iterator constructor can't be used directly (Firefox)
TypeError: Iterator cannot be constructed directly (Safari)

TypeError: Abstract class AsyncIterator not directly constructable (V8-based)
TypeError: AsyncIterator constructor can't be used directly (Firefox)
TypeError: AsyncIterator cannot be constructed directly (Safari)
```

## Error type

## What went wrong?

The Iterator and AsyncIterator constructors are abstract classes and should not be used directly. They check the value of new.target and throw if it is the same as the constructor itself. The only way to use these constructors is to inherit from them in a subclass and call super() in the subclass constructor. The subclass must also define a next() method to be useful.

## Examples

### Invalid cases

```
new Iterator();
```

### Valid cases

```
class MyIterator extends Iterator {
  #step;
  #end;
  constructor(start, end) {
    // Implicitly calls new Iterator(), but with a different `new.target`
    super();
    this.#step = start;
    this.#end = end;
  }
  next() {
    if (this.#step >= this.#end) {
      return { done: true };
    }
    return { value: this.#step++, done: false };
  }
}

new MyIterator();
```

## See also

- AsyncIterator
- Iterator

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Constructor_cant_be_used_directly
