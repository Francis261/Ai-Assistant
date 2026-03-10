# Capturing group: (...)

Source: https://devdocs.io/javascript/regular_expressions/capturing_group

A capturing group groups a subpattern, allowing you to apply a quantifier to the entire group or use disjunctions within it. It memorizes information about the subpattern match, so that you can refer back to it later with a backreference, or access the information through the match results.

If you don't need the result of the subpattern match, use a non-capturing group instead, which improves performance and avoids refactoring hazards.

## Syntax

```
(pattern)
```

### Parameters

A pattern consisting of anything you may use in a regex literal, including a disjunction.

## Description

A capturing group acts like the grouping operator in JavaScript expressions, allowing you to use a subpattern as a single atom.

Capturing groups are numbered by the order of their opening parentheses. The first capturing group is numbered 1, the second 2, and so on. Named capturing groups are also capturing groups and are numbered together with other (unnamed) capturing groups. The information of the capturing group's match can be accessed through:

- The return value (which is an array) of RegExp.prototype.exec(), String.prototype.match(), and String.prototype.matchAll()
- The pN parameters of the String.prototype.replace() and String.prototype.replaceAll() methods' replacement callback function
- Backreferences within the same pattern

Note: Even in exec()'s result array, capturing groups are accessed by numbers 1, 2, etc., because the 0 element is the entire match. \0 is not a backreference, but a character escape for the NUL character.

Capturing groups in the regex source code correspond to their results one-to-one. If a capturing group is not matched (for example, it belongs to an unmatched alternative in a disjunction), the corresponding result is undefined.

```
/(ab)|(cd)/.exec("cd"); // ['cd', undefined, 'cd']
```

Capturing groups can be quantified. In this case, the match information corresponding to this group is the last match of the group.

```
/([ab])+/.exec("abc"); // ['ab', 'b']; because "b" comes after "a", this result overwrites the previous one
```

Capturing groups can be used in lookahead and lookbehind assertions. Because lookbehind assertions match their atoms backwards, the final match corresponding to this group is the one that appears to the left end of the string. However, the indices of the match groups still correspond to their relative locations in the regex source.

```
/c(?=(ab))/.exec("cab"); // ['c', 'ab']
/(?<=(a)(b))c/.exec("abc"); // ['c', 'a', 'b']
/(?<=([ab])+)c/.exec("abc"); // ['c', 'a']; because "a" is seen by the lookbehind after the lookbehind has seen "b"
```

Capturing groups can be nested, in which case the outer group is numbered first, then the inner group, because they are ordered by their opening parentheses. If a nested group is repeated by a quantifier, then each time the group matches, the subgroups' results are all overwritten, sometimes with undefined.

```
/((a+)?(b+)?(c))*/.exec("aacbbbcac"); // ['aacbbbcac', 'ac', 'a', undefined, 'c']
```

In the example above, the outer group is matched three times:

1. Matches "aac", with subgroups "aa", undefined, and "c".
2. Matches "bbbc", with subgroups undefined, "bbb", and "c".
3. Matches "ac", with subgroups "a", undefined, and "c".

The "bbb" result from the second match is not preserved, because the third match overwrites it with undefined.

You can get the start and end indices of each capturing group in the input string by using the d flag. This creates an extra indices property on the array returned by exec().

You can optionally specify a name to a capturing group, which helps avoid pitfalls related to group positions and indexing. See Named capturing groups for more information.

Parentheses have other purposes in different regex syntaxes. For example, they also enclose lookahead and lookbehind assertions. Because these syntaxes all start with ?, and ? is a quantifier which normally cannot occur directly after (, this does not lead to ambiguities.

## Examples

### Matching date

The following example matches a date in the format YYYY-MM-DD:

```
function parseDate(input) {
  const parts = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input);
  if (!parts) {
    return null;
  }
  return parts.slice(1).map((p) => parseInt(p, 10));
}

parseDate("2019-01-01"); // [2019, 1, 1]
parseDate("2019-06-19"); // [2019, 6, 19]
```

### Pairing quotes

The following function matches the title='xxx' and title="xxx" patterns in a string. To ensure the quotes match, we use a backreference to refer to the first quote. Accessing the second capturing group ([2]) returns the string between the matching quote characters:

```
function parseTitle(metastring) {
  return metastring.match(/title=(["'])(.*?)\1/)[2];
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
- Non-capturing group: (?:...)
- Named capturing group: (?<name>...)
- Backreference: \1, \2

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group
