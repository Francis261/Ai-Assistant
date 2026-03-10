# Object.getOwnPropertySymbols()

Source: https://devdocs.io/javascript/global_objects/object/getownpropertysymbols

The Object.getOwnPropertySymbols() static method returns an array of all symbol properties found directly upon a given object.

## Try it

```
const object = {};
const a = Symbol("a");
const b = Symbol.for("b");

object[a] = "localSymbol";
object[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(object);

console.log(objectSymbols.length);
// Expected output: 2
```

## Syntax

```
Object.getOwnPropertySymbols(obj)
```

### Parameters

The object whose symbol properties are to be returned.

### Return value

An array of all symbol properties found directly upon the given object.

## Description

Similar to Object.getOwnPropertyNames(), you can get all symbol properties of a given object as an array of symbols. Note that Object.getOwnPropertyNames() itself does not contain the symbol properties of an object and only the string properties.

As all objects have no own symbol properties initially, Object.getOwnPropertySymbols() returns an empty array unless you have set symbol properties on your object.

## Examples

### Using Object.getOwnPropertySymbols()

```
const obj = {};
const a = Symbol("a");
const b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols); // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]); // Symbol(a)
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Object.getOwnPropertySymbols in core-js
- Object.getOwnPropertyNames()
- Symbol

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
