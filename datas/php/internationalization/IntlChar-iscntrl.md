# IntlChar::iscntrl

Source: https://devdocs.io/php/intlchar.iscntrl

(PHP 7, PHP 8)

IntlChar::iscntrl — Check if code point is a control character

### Description

```
public static IntlChar::iscntrl(int|string $codepoint): ?bool
```

Determines whether the specified code point is a control character.

A control character is one of the following:

- ISO 8-bit control character (U+0000..U+001f and U+007f..U+009f)
- IntlChar::CHAR_CATEGORY_CONTROL_CHAR (Cc)
- IntlChar::CHAR_CATEGORY_FORMAT_CHAR (Cf)
- IntlChar::CHAR_CATEGORY_LINE_SEPARATOR (Zl)
- IntlChar::CHAR_CATEGORY_PARAGRAPH_SEPARATOR (Zp)

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a control character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::iscntrl("A"));
var_dump(IntlChar::iscntrl(" "));
var_dump(IntlChar::iscntrl("\n"));
var_dump(IntlChar::iscntrl("\u{200e}"));
?>
```

The above example will output:

```
bool(false)
bool(false)
bool(true)
bool(true)
```

### See Also

- IntlChar::isprint() - Check if code point is a printable character
- IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT
- ctype_cntrl() - Check for control character(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.iscntrl.php
