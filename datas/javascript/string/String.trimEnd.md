# String.prototype.trimEnd()

Source: https://devdocs.io/javascript/global_objects/string/trimend

The trimEnd() method of String values removes whitespace from the end of this string and returns a new string, without modifying the original string. trimRight() is an alias of this method.

## Try it

```
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
```

## Syntax

```
trimEnd()

trimRight()
```

### Parameters

None.

### Return value

A new string representing str stripped of whitespace from its end (right side). Whitespace is defined as white space characters plus line terminators.

If the end of str has no whitespace, a new string is still returned (essentially a copy of str).

### Aliasing

After trim() was standardized, engines also implemented the non-standard method trimRight. However, for consistency with padEnd(), when the method got standardized, its name was chosen as trimEnd. For web compatibility reasons, trimRight remains as an alias to trimEnd, and they refer to the exact same function object. In some engines this means:

```
String.prototype.trimRight.name === "trimEnd";
```

## Examples

### Using trimEnd()

The following example trims whitespace from the end of str, but not from its start.

```
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.trimEnd in core-js
- es-shims polyfill of String.prototype.trimEnd
- String.prototype.trim()
- String.prototype.trimStart()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd
