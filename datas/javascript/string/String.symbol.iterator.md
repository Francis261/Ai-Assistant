# String.prototype[Symbol.iterator]()

Source: https://devdocs.io/javascript/global_objects/string/symbol.iterator

The [Symbol.iterator]() method of String values implements the iterable protocol and allows strings to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns a string iterator object that yields the Unicode code points of the string value as individual strings.

## Try it

```
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== " ") {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}
```

## Syntax

```
string[Symbol.iterator]()
```

### Parameters

None.

### Return value

A new iterable iterator object that yields the Unicode code points of the string value as individual strings.

## Description

Strings are iterated by Unicode code points. This means grapheme clusters will be split, but surrogate pairs will be preserved.

```
// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ
```

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the [Symbol.iterator]() method makes strings iterable, and iterating syntaxes like the for...of loop automatically call this method to obtain the iterator to loop over.

```
const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (const v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

### Manually hand-rolling the iterator

You may still manually call the next() method of the returned iterator object to achieve maximum control over the iteration process.

```
const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype[Symbol.iterator] in core-js
- Numbers and strings guide
- Symbol.iterator
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
