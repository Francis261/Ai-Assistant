# String.prototype.toUpperCase()

Source: https://devdocs.io/javascript/global_objects/string/touppercase

The toUpperCase() method of String values returns this string converted to uppercase.

## Try it

```
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

## Syntax

```
toUpperCase()
```

### Parameters

None.

### Return value

A new string representing the calling string converted to upper case.

## Description

The toUpperCase() method returns the value of the string converted to uppercase. This method does not affect the value of the string itself since JavaScript strings are immutable.

## Examples

### Basic usage

```
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Conversion of non-string this values to strings

This method will convert any non-string value to a string, when you set its this to a value that is not a string:

```
const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
```

## Specifications

## Browser compatibility

## See also

- String.prototype.toLocaleLowerCase()
- String.prototype.toLocaleUpperCase()
- String.prototype.toLowerCase()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
