# Lookbehind assertion: (?<=...), (?<!...)

Source: https://devdocs.io/javascript/regular_expressions/lookbehind_assertion

A lookbehind assertion "looks behind": it attempts to match the previous input with the given pattern, but it does not consume any of the input — if the match is successful, the current position in the input stays the same. It matches each atom in its pattern in the reverse order.

## Syntax

```
(?<=pattern)
(?<!pattern)
```

### Parameters

A pattern consisting of anything you may use in a regex literal, including a disjunction.

## Description

A regular expression generally matches from left to right. This is why lookahead and lookbehind assertions are called as such — lookahead asserts what's on the right, and lookbehind asserts what's on the left.

In order for a (?<=pattern) assertion to succeed, the pattern must match the input immediately to the left of the current position, but the current position is not changed before matching the subsequent input. The (?<!pattern) form negates the assertion — it succeeds if the pattern does not match the input immediately to the left of the current position.

Lookbehind generally has the same semantics as lookahead — however, within a lookbehind assertion, the regular expression matches backwards. For example,

```
/(?<=([ab]+)([bc]+))$/.exec("abc"); // ['', 'a', 'bc']
// Not ['', 'ab', 'c']
```

If the lookbehind matches from left to right, it should first greedily match [ab]+, which makes the first group capture "ab", and the remaining "c" is captured by [bc]+. However, because [bc]+ is matched first, it greedily grabs "bc", leaving only "a" for [ab]+.

This behavior is reasonable — the matcher does not know where to start the match (because the lookbehind may not be fixed-length), but it does know where to end (at the current position). Therefore, it starts from the current position and works backwards. (Regexes in some other languages forbid non-fixed-length lookbehind to avoid this issue.)

For quantified capturing groups inside the lookbehind, the match furthest to the left of the input string — instead of the one on the right — is captured because of backward matching. See the capturing groups page for more information. Backreferences inside the lookbehind must appear on the left of the group it's referring to, also due to backward matching. However, disjunctions are still attempted left-to-right.

## Examples

### Matching strings without consuming them

Similar to lookaheads, lookbehinds can be used to match strings without consuming them so that only useful information is extracted. For example, the following regex matches the number in a price label:

```
function getPrice(label) {
  return /(?<=\$)\d+(?:\.\d*)?/.exec(label)?.[0];
}

getPrice("$10.53"); // "10.53"
getPrice("10.53"); // undefined
```

A similar effect can be achieved by capturing the submatch you are interested in.

## Specifications

## Browser compatibility

## See also

- Assertions guide
- Regular expressions
- Input boundary assertion: ^, $
- Word boundary assertion: \b, \B
- Lookahead assertion: (?=...), (?!...)
- Capturing group: (...)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion
