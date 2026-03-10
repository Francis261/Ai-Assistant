# RegExp.prototype.global

Source: https://devdocs.io/javascript/global_objects/regexp/global

The global accessor property of RegExp instances returns whether or not the g flag is used with this regular expression.

## Try it

```
const regex1 = /foo/g;

console.log(regex1.global);
// Expected output: true

const regex2 = /bar/i;

console.log(regex2.global);
// Expected output: false
```

## Description

RegExp.prototype.global has the value true if the g flag was used; otherwise, false. The g flag indicates that the regular expression should be tested against all possible matches in a string. Each call to exec() will update its lastIndex property, so that the next call to exec() will start at the next character.

Some methods, such as String.prototype.matchAll() and String.prototype.replaceAll(), will validate that, if the parameter is a regex, it is global. The regex's [Symbol.match]() and [Symbol.replace]() methods (called by String.prototype.match() and String.prototype.replace()) would also have different behaviors when the regex is global.

The set accessor of global is undefined. You cannot change this property directly.

## Examples

### Using global

```
const globalRegex = /foo/g;

const str = "fooexamplefoo";
console.log(str.replace(globalRegex, "")); // example

const nonGlobalRegex = /foo/;
console.log(str.replace(nonGlobalRegex, "")); // examplefoo
```

## Specifications

## Browser compatibility

## See also

- RegExp.prototype.lastIndex
- RegExp.prototype.dotAll
- RegExp.prototype.hasIndices
- RegExp.prototype.ignoreCase
- RegExp.prototype.multiline
- RegExp.prototype.source
- RegExp.prototype.sticky
- RegExp.prototype.unicode

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global
