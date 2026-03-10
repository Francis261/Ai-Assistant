# IntlChar::charType

Source: https://devdocs.io/php/intlchar.chartype

(PHP 7, PHP 8)

IntlChar::charType — Get the general category value for a code point

### Description

```
public static IntlChar::charType(int|string $codepoint): ?int
```

Returns the general category value for the code point.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the general category type, which may be one of the following constants:

- IntlChar::CHAR_CATEGORY_UNASSIGNED
- IntlChar::CHAR_CATEGORY_GENERAL_OTHER_TYPES
- IntlChar::CHAR_CATEGORY_UPPERCASE_LETTER
- IntlChar::CHAR_CATEGORY_LOWERCASE_LETTER
- IntlChar::CHAR_CATEGORY_TITLECASE_LETTER
- IntlChar::CHAR_CATEGORY_MODIFIER_LETTER
- IntlChar::CHAR_CATEGORY_OTHER_LETTER
- IntlChar::CHAR_CATEGORY_NON_SPACING_MARK
- IntlChar::CHAR_CATEGORY_ENCLOSING_MARK
- IntlChar::CHAR_CATEGORY_COMBINING_SPACING_MARK
- IntlChar::CHAR_CATEGORY_DECIMAL_DIGIT_NUMBER
- IntlChar::CHAR_CATEGORY_LETTER_NUMBER
- IntlChar::CHAR_CATEGORY_OTHER_NUMBER
- IntlChar::CHAR_CATEGORY_SPACE_SEPARATOR
- IntlChar::CHAR_CATEGORY_LINE_SEPARATOR
- IntlChar::CHAR_CATEGORY_PARAGRAPH_SEPARATOR
- IntlChar::CHAR_CATEGORY_CONTROL_CHAR
- IntlChar::CHAR_CATEGORY_FORMAT_CHAR
- IntlChar::CHAR_CATEGORY_PRIVATE_USE_CHAR
- IntlChar::CHAR_CATEGORY_SURROGATE
- IntlChar::CHAR_CATEGORY_DASH_PUNCTUATION
- IntlChar::CHAR_CATEGORY_START_PUNCTUATION
- IntlChar::CHAR_CATEGORY_END_PUNCTUATION
- IntlChar::CHAR_CATEGORY_CONNECTOR_PUNCTUATION
- IntlChar::CHAR_CATEGORY_OTHER_PUNCTUATION
- IntlChar::CHAR_CATEGORY_MATH_SYMBOL
- IntlChar::CHAR_CATEGORY_CURRENCY_SYMBOL
- IntlChar::CHAR_CATEGORY_MODIFIER_SYMBOL
- IntlChar::CHAR_CATEGORY_OTHER_SYMBOL
- IntlChar::CHAR_CATEGORY_INITIAL_PUNCTUATION
- IntlChar::CHAR_CATEGORY_FINAL_PUNCTUATION
- IntlChar::CHAR_CATEGORY_CHAR_CATEGORY_COUNT

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::charType("A") === IntlChar::CHAR_CATEGORY_UPPERCASE_LETTER);
var_dump(IntlChar::charType(".") === IntlChar::CHAR_CATEGORY_OTHER_PUNCTUATION);
var_dump(IntlChar::charType("\t") === IntlChar::CHAR_CATEGORY_CONTROL_CHAR);
var_dump(IntlChar::charType("\u{2603}") === IntlChar::CHAR_CATEGORY_OTHER_SYMBOL);
var_dump(IntlChar::charType("multiple chars") === null);
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(true)
bool(true)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.chartype.php
