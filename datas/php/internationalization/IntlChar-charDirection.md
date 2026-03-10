# IntlChar::charDirection

Source: https://devdocs.io/php/intlchar.chardirection

(PHP 7, PHP 8)

IntlChar::charDirection — Get bidirectional category value for a code point

### Description

```
public static IntlChar::charDirection(int|string $codepoint): ?int
```

Returns the bidirectional category value for the code point, which is used in the » Unicode bidirectional algorithm (UAX #9).

Note:

Some unassigned code points have bidi values of R or AL because they are in blocks that are reserved for Right-To-Left scripts.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

The bidirectional category value; one of the following constants:

- IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT
- IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT
- IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER
- IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_SEPARATOR
- IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_TERMINATOR
- IntlChar::CHAR_DIRECTION_ARABIC_NUMBER
- IntlChar::CHAR_DIRECTION_COMMON_NUMBER_SEPARATOR
- IntlChar::CHAR_DIRECTION_BLOCK_SEPARATOR
- IntlChar::CHAR_DIRECTION_SEGMENT_SEPARATOR
- IntlChar::CHAR_DIRECTION_WHITE_SPACE_NEUTRAL
- IntlChar::CHAR_DIRECTION_OTHER_NEUTRAL
- IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_EMBEDDING
- IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_OVERRIDE
- IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_ARABIC
- IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_EMBEDDING
- IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_OVERRIDE
- IntlChar::CHAR_DIRECTION_POP_DIRECTIONAL_FORMAT
- IntlChar::CHAR_DIRECTION_DIR_NON_SPACING_MARK
- IntlChar::CHAR_DIRECTION_BOUNDARY_NEUTRAL
- IntlChar::CHAR_DIRECTION_FIRST_STRONG_ISOLATE
- IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT_ISOLATE
- IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT_ISOLATE
- IntlChar::CHAR_DIRECTION_POP_DIRECTIONAL_ISOLATE
- IntlChar::CHAR_DIRECTION_CHAR_DIRECTION_COUNT

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::charDirection("A") === IntlChar::CHAR_DIRECTION_LEFT_TO_RIGHT);
var_dump(IntlChar::charDirection("\u{05E9}") === IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT);
var_dump(IntlChar::charDirection("+") === IntlChar::CHAR_DIRECTION_EUROPEAN_NUMBER_SEPARATOR);
var_dump(IntlChar::charDirection(".") === IntlChar::CHAR_DIRECTION_COMMON_NUMBER_SEPARATOR);
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(true)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.chardirection.php
