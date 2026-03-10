# IntlChar::isbase

Source: https://devdocs.io/php/intlchar.isbase

(PHP 7, PHP 8)

IntlChar::isbase — Check if code point is a base character

### Description

```
public static IntlChar::isbase(int|string $codepoint): ?bool
```

Determines whether the specified code point is a base character. true for general categories "L" (letters), "N" (numbers), "Mc" (spacing combining marks), and "Me" (enclosing marks).

Note:

This is different from the Unicode definition in chapter 3.5, conformance clause D13, which defines base characters to be all characters (not Cn) that do not graphically combine with preceding characters (M) and that are neither control (Cc) or format (Cf) characters.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a base character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isbase("A"));
var_dump(IntlChar::isbase("1"));
var_dump(IntlChar::isbase("\u{2603}"));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
```

### See Also

- IntlChar::isalpha() - Check if code point is a letter character
- IntlChar::isdigit() - Check if code point is a digit character

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isbase.php
