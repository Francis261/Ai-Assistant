# String.prototype.replaceAll()

Source: https://devdocs.io/javascript/global_objects/string/replaceall

The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

## Try it

```
const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replaceAll("dog", "monkey"));
// Expected output: "I think Ruth's monkey is cuter than your monkey!"

// Global flag required when calling replaceAll with regex
const regex = /dog/gi;
console.log(paragraph.replaceAll(regex, "ferret"));
// Expected output: "I think Ruth's ferret is cuter than your ferret!"
```

## Syntax

```
replaceAll(pattern, replacement)
```

### Parameters

Can be a string or an object with a Symbol.replace method — the typical example being a regular expression. Any value that doesn't have the Symbol.replace method will be coerced to a string.

If pattern is a regex, then it must have the global (g) flag set, or a TypeError is thrown.

Can be a string or a function. The replacement has the same semantics as that of String.prototype.replace().

### Return value

A new string, with all matches of a pattern replaced by a replacement.

### Exceptions

Thrown if the pattern is a regex that does not have the global (g) flag set (its flags property does not contain "g").

## Description

This method does not mutate the string value it's called on. It returns a new string.

Unlike replace(), this method replaces all occurrences of a string, not just the first one. While it is also possible to use replace() with a global regex dynamically constructed with RegExp() to replace all instances of a string, this can have unintended consequences if the string contains special characters that have meaning in regular expressions (which might happen if the replacement string comes from user input). While you can mitigate this case using RegExp.escape() to make the regular expression string into a literal pattern, it is simpler to pass the string to replaceAll() directly, without converting it to a regex.

```
function unsafeRedactName(text, name) {
  return text.replace(new RegExp(name, "g"), "[REDACTED]");
}
function semiSafeRedactName(text, name) {
  return text.replaceAll(name, "[REDACTED]");
}
function superSafeRedactName(text, name) {
  // only match at word boundaries
  return text.replaceAll(
    new RegExp(`\\b${RegExp.escape(name)}\\b`, "g"),
    "[REDACTED]",
  );
}

let report =
  "A hacker called ha.*er used special characters in their name to breach the system.";

console.log(unsafeRedactName(report, "ha.*er")); // "A [REDACTED]s in their name to breach the system."
console.log(semiSafeRedactName(report, "ha.*er")); // "A hacker called [REDACTED] used special characters in their name to breach the system."

report = "A hacker called acke breached the system.";

console.log(semiSafeRedactName(report, "acke")); // "A h[REDACTED]r called [REDACTED] breached the system."
console.log(superSafeRedactName(report, "acke")); // "A hacker called [REDACTED] breached the system."
```

If pattern is an object with a Symbol.replace method (including RegExp objects), that method is called with the target string and replacement as arguments. Its return value becomes the return value of replaceAll(). In this case the behavior of replaceAll() is entirely encoded by the [Symbol.replace]() method, and therefore will have the same result as replace() (apart from the extra input validation that the regex is global).

If the pattern is an empty string, the replacement will be inserted in between every UTF-16 code unit, similar to split() behavior.

```
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

For more information about how regex properties (especially the sticky flag) interact with replaceAll(), see RegExp.prototype[Symbol.replace]().

## Examples

### Using replaceAll()

```
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Non-global regex throws

When using a regular expression search value, it must be global. This won't work:

```
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

This will work:

```
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.replaceAll in core-js
- es-shims polyfill of String.prototype.replaceAll
- Regular expressions guide
- String.prototype.replace()
- String.prototype.match()
- RegExp.prototype.exec()
- RegExp.prototype.test()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
