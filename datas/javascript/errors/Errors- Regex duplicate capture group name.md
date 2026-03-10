# SyntaxError: duplicate capture group name in regular expression

Source: https://devdocs.io/javascript/errors/regex_duplicate_capture_group_name

The JavaScript exception "duplicate capture group name in regular expression" occurs when a regular expression pattern contains two or more named capturing groups with the same name, and these capture groups could be matched at the same time.

## Message

```
SyntaxError: Invalid regular expression: /(?<a>)(?<a>)/: Duplicate capture group name (V8-based)
SyntaxError: duplicate capture group name in regular expression (Firefox)
SyntaxError: Invalid regular expression: duplicate group specifier name (Safari)
```

## Error type

## What went wrong?

All named capturing groups in a regular expression pattern must have unique names. A more recent feature allows named capturing groups to share names, as long as they belong to different disjunction alternatives and cannot be matched at the same time (see browser compatibility for this). However, it is still an error if the named capturing groups with the same name could be matched at the same time, as that would make other features, such as named backreferences, ambiguous.

## Examples

### Invalid cases

```
/(?<name>\w+) (?<name>\w+)/;
```

### Valid cases

```
/(?<firstName>\w+) (?<lastName>\w+)/;
/(?<year>\d{4})-\d{2}|\d{2}-(?<year>\d{4})/;
```

## See also

- Regular expressions
- Named capturing group: (?<name>...)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Regex_duplicate_capture_group_name
