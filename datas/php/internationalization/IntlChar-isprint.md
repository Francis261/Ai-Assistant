# IntlChar::isprint

Source: https://devdocs.io/php/intlchar.isprint

(PHP 7, PHP 8)

IntlChar::isprint — Check if code point is a printable character

### Description

```
public static IntlChar::isprint(int|string $codepoint): ?bool
```

Determines whether the specified code point is a printable character.

true for general categories other than "C" (controls).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a printable character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isprint("A"));
var_dump(IntlChar::isprint(" "));
var_dump(IntlChar::isprint("\n"));
var_dump(IntlChar::isprint("\u{200e}"));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
bool(false)
```

### See Also

- IntlChar::iscntrl() - Check if code point is a control character
- IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT
- ctype_print() - Check for printable character(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isprint.php
