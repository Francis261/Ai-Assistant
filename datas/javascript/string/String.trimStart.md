# String.prototype.trimStart()

Source: https://devdocs.io/javascript/global_objects/string/trimstart

The trimStart() method of String values removes whitespace from the beginning of this string and returns a new string, without modifying the original string. trimLeft() is an alias of this method.

## Try it

```
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
```

## Syntax

```
trimStart()

trimLeft()
```

### Parameters

None.

### Return value

A new string representing str stripped of whitespace from its beginning (left side). Whitespace is defined as white space characters plus line terminators.

If the beginning of str has no whitespace, a new string is still returned (essentially a copy of str).

### Aliasing

After trim() was standardized, engines also implemented the non-standard method trimLeft. However, for consistency with padStart(), when the method got standardized, its name was chosen as trimStart. For web compatibility reasons, trimLeft remains as an alias to trimStart, and they refer to the exact same function object. In some engines this means:

```
String.prototype.trimLeft.name === "trimStart";
```

## Examples

### Using trimStart()

The following example trims whitespace from the start of str, but not from its end.

```
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.trimStart in core-js
- es-shims polyfill of String.prototype.trimStart
- String.prototype.trim()
- String.prototype.trimEnd()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart
