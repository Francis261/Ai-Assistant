# IntlChar::isIDPart

Source: https://devdocs.io/php/intlchar.isidpart

(PHP 7, PHP 8)

IntlChar::isIDPart — Check if code point is permissible in an identifier

### Description

```
public static IntlChar::isIDPart(int|string $codepoint): ?bool
```

Determines if the specified character is permissible in an identifier.

true for characters with general categories "L" (letters), "Nl" (letter numbers), "Nd" (decimal digits), "Mc" and "Mn" (combining marks), "Pc" (connecting punctuation), and u_isIDIgnorable(c).

Note:

This is almost the same as Unicode's ID_Continue (IntlChar::PROPERTY_ID_CONTINUE) except that Unicode recommends to ignore Cf which is less than IntlChar::isIDIgnorable().

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is the code point may occur in an identifier, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isIDPart("A"));
var_dump(IntlChar::isIDPart("$"));
var_dump(IntlChar::isIDPart("\n"));
var_dump(IntlChar::isIDPart("\u{2603}"));
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

- IntlChar::isIDIgnorable() - Check if code point is an ignorable character
- IntlChar::isIDStart() - Check if code point is permissible as the first character in an identifier
- IntlChar::PROPERTY_ID_CONTINUE

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isidpart.php
