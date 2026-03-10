# String.prototype.trim()

Source: https://devdocs.io/javascript/global_objects/string/trim

The trim() method of String values removes whitespace from both ends of this string and returns a new string, without modifying the original string.

To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

## Try it

```
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
```

## Syntax

```
trim()
```

### Parameters

None.

### Return value

A new string representing str stripped of whitespace from both its beginning and end. Whitespace is defined as white space characters plus line terminators.

If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str).

## Examples

### Using trim()

The following example trims whitespace from both ends of str.

```
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## Specifications

## Browser compatibility

## See also

- String.prototype.trimStart()
- String.prototype.trimEnd()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
