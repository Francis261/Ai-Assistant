# Function.prototype[Symbol.hasInstance]()

Source: https://devdocs.io/javascript/global_objects/function/symbol.hasinstance

The [Symbol.hasInstance]() method of Function instances specifies the default procedure for determining if a constructor function recognizes an object as one of the constructor's instances. It is called by the instanceof operator.

## Syntax

```
func[Symbol.hasInstance](value)
```

### Parameters

The object to test. Primitive values always return false.

### Return value

true if func.prototype is in the prototype chain of value; otherwise, false. Always returns false if value is not an object or this is not a function. If this is a bound function, returns the result of an instanceof test on value and the underlying target function.

### Exceptions

Thrown if this is not a bound function and this.prototype is not an object.

## Description

The instanceof operator calls the [Symbol.hasInstance]() method of the right-hand side whenever such a method exists. Because all functions inherit from Function.prototype by default, they would all have the [Symbol.hasInstance]() method, so most of the time, the Function.prototype[Symbol.hasInstance]() method specifies the behavior of instanceof when the right-hand side is a function. This method implements the default behavior of the instanceof operator (the same algorithm when constructor has no [Symbol.hasInstance]() method).

Unlike most methods, the Function.prototype[Symbol.hasInstance]() property is non-configurable and non-writable. This is a security feature to prevent the underlying target function of a bound function from being obtainable. See this Stack Overflow answer for an example.

## Examples

### Reverting to default instanceof behavior

You would rarely need to call this method directly. Instead, this method is called by the instanceof operator. You should expect the two results to usually be equivalent.

```
class Foo {}
const foo = new Foo();
console.log(foo instanceof Foo === Foo[Symbol.hasInstance](foo)); // true
```

You may want to use this method if you want to invoke the default instanceof behavior, but you don't know if a constructor has an overridden [Symbol.hasInstance]() method.

```
class Foo {
  static [Symbol.hasInstance](value) {
    // A custom implementation
    return false;
  }
}

const foo = new Foo();
console.log(foo instanceof Foo); // false
console.log(Function.prototype[Symbol.hasInstance].call(Foo, foo)); // true
```

## Specifications

## Browser compatibility

## See also

- instanceof
- Symbol.hasInstance

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Symbol.hasInstance
