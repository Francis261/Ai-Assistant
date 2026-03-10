# Named backreference: \k<name>

Source: https://devdocs.io/javascript/regular_expressions/named_backreference

A named backreference refers to the submatch of a previous named capturing group and matches the same text as that group. For unnamed capturing groups, you need to use the normal backreference syntax.

## Syntax

```
\k<name>
```

### Parameters

The name of the group. Must be a valid identifier and refer to an existent named capturing group.

## Description

Named backreferences are very similar to normal backreferences: it refers to the text matched by a capturing group and matches the same text. The difference is that you refer to the capturing group by name instead of by number. This makes the regular expression more readable and easier to refactor and maintain.

In Unicode-unaware mode, the sequence \k only starts a named backreference if the regex contains at least one named capturing group. Otherwise, it is an identity escape and is the same as the literal character k. This is a deprecated syntax for web compatibility, and you should not rely on it.

```
/\k/.test("k"); // true
```

## Examples

### Pairing quotes

The following function matches the title='xxx' and title="xxx" patterns in a string. To ensure the quotes match, we use a backreference to refer to the first quote. Accessing the second capturing group ([2]) returns the string between the matching quote characters:

```
function parseTitle(metastring) {
  return metastring.match(/title=(?<quote>["'])(.*?)\k<quote>/)[2];
}

parseTitle('title="foo"'); // 'foo'
parseTitle("title='foo' lang='en'"); // 'foo'
parseTitle('title="Named capturing groups\' advantages"'); // "Named capturing groups' advantages"
```

## Specifications

## Browser compatibility

## See also

- Groups and backreferences guide
- Regular expressions
- Capturing group: (...)
- Named capturing group: (?<name>...)
- Backreference: \1, \2

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference
