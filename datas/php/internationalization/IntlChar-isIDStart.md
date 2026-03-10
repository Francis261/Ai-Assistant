# IntlChar::isIDStart

Source: https://devdocs.io/php/intlchar.isidstart

(PHP 7, PHP 8)

IntlChar::isIDStart — Check if code point is permissible as the first character in an identifier

### Description

```
public static IntlChar::isIDStart(int|string $codepoint): ?bool
```

Determines if the specified character is permissible as the first character in an identifier according to Unicode (The Unicode Standard, Version 3.0, chapter 5.16 Identifiers).

true for characters with general categories "L" (letters) and "Nl" (letter numbers).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint may start an identifier, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isIDStart("A"));
var_dump(IntlChar::isIDStart("$"));
var_dump(IntlChar::isIDStart("\n"));
var_dump(IntlChar::isIDStart("\u{2603}"));
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(false)
bool(false)
```

### See Also

- IntlChar::isalpha() - Check if code point is a letter character
- IntlChar::isIDPart() - Check if code point is permissible in an identifier
- IntlChar::PROPERTY_ID_START

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isidstart.php
