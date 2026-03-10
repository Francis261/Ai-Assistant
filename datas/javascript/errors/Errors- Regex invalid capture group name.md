# SyntaxError: invalid capture group name in regular expression

Source: https://devdocs.io/javascript/errors/regex_invalid_capture_group_name

The JavaScript exception "invalid capture group name in regular expression" occurs when a named capturing group or named backreference contains an invalid identifier.

## Message

```
SyntaxError: Invalid regular expression: /(?<1>)/: Invalid capture group name (V8-based)
SyntaxError: invalid capture group name in regular expression (Firefox)
SyntaxError: Invalid regular expression: invalid group specifier name (Safari)
```

## Error type

## What went wrong?

Each named capturing group must have a name that is a valid identifier. You cannot use arbitrary strings as the group identifier.

## Examples

### Invalid cases

```
/(?<1>\d+) (?<2>\d+)/;
```

Or you might be building the regex dynamically:

```
const tokenTypes = {
  "number literal": /\d+/,
  "string literal": /".+?"/,
  identifier: /[a-zA-Z_]\w*/,
};

const tokenPattern = new RegExp(
  Object.entries(tokenTypes)
    .map(([name, pattern]) => `(?<${name}>${pattern.source})`)
    .join("|"),
);
```

### Valid cases

```
/(?<group1>\d+) (?<group2>\d+)/;
```

If the regex is built dynamically, make sure the names are all valid identifiers. For example:

```
const tokenTypes = {
  numberLiteral: /\d+/,
  stringLiteral: /".+?"/,
  identifier: /[a-zA-Z_]\w*/,
};

const tokenPattern = new RegExp(
  Object.entries(tokenTypes)
    .map(([name, pattern]) => `(?<${name}>${pattern.source})`)
    .join("|"),
);
```

## See also

- Regular expressions
- Named capturing group: (?<name>...)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_invalid_capture_group_name
