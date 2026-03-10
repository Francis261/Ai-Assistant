# Symbol() constructor

Source: https://devdocs.io/javascript/global_objects/symbol/symbol

The Symbol() function returns primitive values of type Symbol.

## Try it

```
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log(typeof symbol1);
// Expected output: "symbol"

console.log(symbol2 === 42);
// Expected output: false

console.log(symbol3.toString());
// Expected output: "Symbol(foo)"

console.log(Symbol("foo") === Symbol("foo"));
// Expected output: false
```

## Syntax

```
Symbol()
Symbol(description)
```

Note: Symbol() can only be called without new. Attempting to construct it with new throws a TypeError.

### Parameters

A string. A description of the symbol which can be used for debugging but not to access the symbol itself.

## Examples

### Creating symbols

To create a new primitive symbol, you write Symbol() with an optional string as its description:

```
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

The above code creates three new symbols. Note that Symbol("foo") does not coerce the string "foo" into a symbol. It creates a new symbol each time:

```
Symbol("foo") === Symbol("foo"); // false
```

### new Symbol()

The following syntax with the new operator will throw a TypeError:

```
const sym = new Symbol(); // TypeError
```

This prevents authors from creating an explicit Symbol wrapper object instead of a new symbol value and might be surprising as creating explicit wrapper objects around primitive data types is generally possible (for example, new Boolean, new String and new Number).

If you really want to create a Symbol wrapper object, you can use the Object() function:

```
const sym = Symbol("foo");
const symObj = Object(sym);
typeof sym; // "symbol"
typeof symObj; // "object"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Symbol in core-js

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol
