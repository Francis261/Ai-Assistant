# Word boundary assertion: \b, \B

Source: https://devdocs.io/javascript/regular_expressions/word_boundary_assertion

A word boundary assertion checks if the current position in the string is a word boundary. A word boundary is where the next character is a word character and the previous character is not a word character, or vice versa.

## Syntax

```
\b
\B
```

## Description

\b asserts that the current position in the string is a word boundary. \B negates the assertion: it asserts that the current position is not a word boundary. Both are assertions, so unlike other character escapes or character class escapes, \b and \B don't consume any characters.

A word character includes the following:

- Letters (A–Z, a–z), numbers (0–9), and underscore (_).
- If the regex is Unicode-aware and the i flag is set, other Unicode characters that get canonicalized to one of the characters above through case folding.

Word characters are also matched by the \w character class escape.

Out-of-bounds input positions are considered non-word characters. For example, the following are successful matches:

```
/\ba/.exec("abc");
/c\b/.exec("abc");

/\B /.exec(" abc");
/ \B/.exec("abc ");
```

## Examples

### Detecting words

The following example detects if a string contains the word "thanks" or "thank you":

```
function hasThanks(str) {
  return /\b(thanks|thank you)\b/i.test(str);
}

hasThanks("Thanks! You helped me a lot."); // true
hasThanks("Just want to say thank you for all your work."); // true
hasThanks("Thanksgiving is around the corner."); // false
```

Warning: Not all languages have clearly defined word boundaries. If you are working with languages like Chinese or Thai, where there are no whitespace separators, use a more advanced library like Intl.Segmenter to search for words instead.

## Specifications

## Browser compatibility

## See also

- Assertions guide
- Regular expressions
- Input boundary assertion: ^, $
- Lookahead assertion: (?=...), (?!...)
- Lookbehind assertion: (?<=...), (?<!...)
- Character escape: \n, \u{...}

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion
