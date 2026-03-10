# SyntaxError: nothing to repeat

Source: https://devdocs.io/javascript/errors/regex_nothing_to_repeat

The JavaScript exception "nothing to repeat" or "invalid quantifier in regular expression" occurs when a quantifier in a regular expression is applied to nothing or applied to an assertion.

## Message

```
SyntaxError: Invalid regular expression: /\b+/: Nothing to repeat (V8-based)
SyntaxError: Invalid regular expression: /(?=)+/u: Invalid quantifier (V8-based)
SyntaxError: nothing to repeat (Firefox)
SyntaxError: invalid quantifier in regular expression (Firefox)
SyntaxError: Invalid regular expression: nothing to repeat (Safari)
```

## Error type

## What went wrong?

Quantifiers are used to specify how many times a character or group of characters can appear in a regular expression. For example, a{3} matches the character a exactly three times. Therefore, if the thing preceding the quantifier is not something that matches characters, the quantifier is invalid. For example: quantifiers at the start of a capturing group, at the start of a disjunction alternative, etc., cannot repeat anything. Assertions don't consume characters, so it also doesn't make sense to repeat them.

In Unicode-unaware mode, there's a deprecated syntax that allows the lookahead assertions to be quantified. This is a deprecated syntax and you should not rely on it.

## Examples

### Invalid cases

```
/\b+/; // \b is a word boundary assertion, it doesn't consume characters
/(*hello*)/;
```

### Valid cases

```
/b+/; // b is a character, it can be repeated
/(\*hello\*)/; // Escape the asterisks to match them literally
```

## See also

- Regular expressions
- Quantifier: *, +, ?, {n}, {n,}, {n,m}

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_nothing_to_repeat
