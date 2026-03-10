# TypeError: derived class constructor returned invalid value x

Source: https://devdocs.io/javascript/errors/invalid_derived_return

The JavaScript exception "derived class constructor returned invalid value x" occurs when a derived class constructor returns a value that is not an object or undefined.

## Message

```
TypeError: Derived constructors may only return object or undefined (V8-based)
TypeError: derived class constructor returned invalid value 1 (Firefox)
TypeError: Cannot return a non-object type in the constructor of a derived class. (Safari)
```

## Error type

## What went wrong?

Typically, a constructor does not need to return anything—the value of this is automatically returned when the class is constructed. A constructor can also return an object, and this object will override this as the newly constructed instance. However, returning something that's neither an object nor undefined is usually a mistake, because that value is ignored. In base classes and function constructors (using the function syntax), returning such a value is silently ignored, while in derived classes, it throws an error.

## Examples

### Invalid cases

```
class Base {
  constructor() {}
}

class Derived extends Base {
  constructor() {
    return 2;
  }
}

new Derived(); // TypeError: derived class constructor returned invalid value 2
```

### Valid cases

```
class Base {
  constructor() {}
}

class Derived extends Base {
  constructor() {
    return { x: 1 };
  }
}

new Derived(); // { x: 1 }
```

## See also

- Classes
- extends
- new

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_derived_return
