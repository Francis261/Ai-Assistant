# SyntaxError: invalid range in character class

Source: https://devdocs.io/javascript/errors/regex_invalid_range_in_character_class

The JavaScript exception "invalid range in character class" occurs when a character class in a regular expression uses a range, but the start of the range is greater than the end.

## Message

```
SyntaxError: Invalid regular expression: /[2-1]/: Range out of order in character class (V8-based)
SyntaxError: invalid range in character class (Firefox)
SyntaxError: Invalid regular expression: range out of order in character class (Safari)
```

## Error type

## What went wrong?

In character classes, you can join two characters with a hyphen - to represent an inclusive interval of characters based on their Unicode code points. For example, [a-z] matches any lowercase letter. However, if the end of the range is less than the start, the range cannot match anything and is likely a mistake.

## Examples

### Invalid cases

```
/[9-1]/; // The range is out of order
/[_-=]/; // _ has value 95, = has value 61
```

### Valid cases

```
/[1-9]/; // Swap the range
/[_\-=]/; // Escape the hyphen so it matches the literal character
```

## See also

- Regular expressions
- Character class: [...], [^...]

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_range_in_character_class
