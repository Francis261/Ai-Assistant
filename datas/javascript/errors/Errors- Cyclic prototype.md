# TypeError: can't set prototype: it would cause a prototype chain cycle

Source: https://devdocs.io/javascript/errors/cyclic_prototype

The JavaScript exception "TypeError: can't set prototype: it would cause a prototype chain cycle" occurs when an object's prototype is set to an object such that the prototype chain becomes circular (a and b both have each other in their prototype chains).

## Message

```
TypeError: Cyclic __proto__ value (V8-based)
TypeError: can't set prototype: it would cause a prototype chain cycle (Firefox)
TypeError: cyclic __proto__ value (Safari)
```

## Error type

## What went wrong?

A loop, also called a cycle, was introduced in a prototype chain. That means that when walking this prototype chain, the same place would be accessed over and over again, instead of eventually reaching null.

This error is thrown at the time of setting the prototype. In an operation like Object.setPrototypeOf(a, b), if a already exists in the prototype chain of b, this error will be thrown.

## Examples

```
const a = {};
Object.setPrototypeOf(a, a);
// TypeError: can't set prototype: it would cause a prototype chain cycle
```

```
const a = {};
const b = {};
const c = {};
Object.setPrototypeOf(a, b);
Object.setPrototypeOf(b, c);
Object.setPrototypeOf(c, a);
// TypeError: can't set prototype: it would cause a prototype chain cycle
```

## See also

- Object Prototypes
- Inheritance and the prototype chain

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_prototype
