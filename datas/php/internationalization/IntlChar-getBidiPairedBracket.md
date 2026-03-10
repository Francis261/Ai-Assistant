# IntlChar::getBidiPairedBracket

Source: https://devdocs.io/php/intlchar.getbidipairedbracket

(PHP 7, PHP 8)

IntlChar::getBidiPairedBracket — Get the paired bracket character for a code point

### Description

```
public static IntlChar::getBidiPairedBracket(int|string $codepoint): int|string|null
```

Maps the specified character to its paired bracket character.

For IntlChar::PROPERTY_BIDI_PAIRED_BRACKET_TYPE !== IntlChar::BPT_NONE, this is the same as IntlChar::charMirror(). Otherwise codepoint itself is returned.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the paired bracket code point, or codepoint itself if there is no such mapping. Returns null on failure.

The return type is int unless the code point was passed as a UTF-8 string, in which case a string is returned. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::getBidiPairedBracket(91));
var_dump(IntlChar::getBidiPairedBracket('['));
?>
```

The above example will output:

```
int(93)
string(1) "]"
```

### Notes

Note:

This method is available as of ICU version 52.

### See Also

- IntlChar::charMirror() - Get the "mirror-image" character for a code point
- IntlChar::PROPERTY_BIDI_PAIRED_BRACKET
- IntlChar::PROPERTY_BIDI_PAIRED_BRACKET_TYPE

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getbidipairedbracket.php
