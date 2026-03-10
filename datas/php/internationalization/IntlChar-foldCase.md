# IntlChar::foldCase

Source: https://devdocs.io/php/intlchar.foldcase

(PHP 7, PHP 8)

IntlChar::foldCase — Perform case folding on a code point

### Description

```
public static IntlChar::foldCase(int|string $codepoint, int $options = IntlChar::FOLD_CASE_DEFAULT): int|string|null
```

The given character is mapped to its case folding equivalent; if the character has no case folding equivalent, the character itself is returned.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

Either IntlChar::FOLD_CASE_DEFAULT (default) or IntlChar::FOLD_CASE_EXCLUDE_SPECIAL_I.

### Return Values

Returns the Simple_Case_Folding of the code point, if any; otherwise the code point itself on success, or null on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.foldcase.php
