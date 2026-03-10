# SyntaxError: incomplete quantifier in regular expression

Source: https://devdocs.io/javascript/errors/regex_incomplete_quantifier

The JavaScript exception "incomplete quantifier in regular expression" occurs when a regular expression pattern contains a {, but it does not start a valid quantifier.

## Message

```
SyntaxError: Invalid regular expression: /1{/u: Incomplete quantifier (V8-based)
SyntaxError: incomplete quantifier in regular expression (Firefox)
SyntaxError: Invalid regular expression: incomplete {} quantifier for Unicode pattern (Safari)
```

## Error type

## What went wrong?

A { character in a regular expression pattern starts a quantifier. A valid quantifier is in the form {n}, {n,}, or {n,m}, where n and m are non-negative integers and m is not less than n. If the { character does not start a valid quantifier, a SyntaxError occurs.

In Unicode-unaware mode, this syntax causes the { to become a literal character instead of generating an error, but this is a deprecated syntax and you should not rely on it.

## Examples

### Invalid cases

```
/1{/u;
/1{a}/u;
/1{}/u;
/1{1,2,3}/u;
/1{1, 2}/u;
```

### Valid cases

```
/1{1}/u;
/1{1,}/u;
/1{1,2}/u;
```

## See also

- Regular expressions
- Quantifier: *, +, ?, {n}, {n,}, {n,m}

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_incomplete_quantifier
