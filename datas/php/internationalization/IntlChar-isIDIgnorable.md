# IntlChar::isIDIgnorable

Source: https://devdocs.io/php/intlchar.isidignorable

(PHP 7, PHP 8)

IntlChar::isIDIgnorable — Check if code point is an ignorable character

### Description

```
public static IntlChar::isIDIgnorable(int|string $codepoint): ?bool
```

Determines if the specified character should be regarded as an ignorable character in an identifier.

true for characters with general category "Cf" (format controls) as well as non-whitespace ISO controls (U+0000..U+0008, U+000E..U+001B, U+007F..U+009F).

Note:

Note that Unicode just recommends to ignore Cf (format controls).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is ignorable in identifiers, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::isIDIgnorable("A"));
var_dump(IntlChar::isIDIgnorable(" "));
var_dump(IntlChar::isIDIgnorable("\u{007F}"));
?>
```

The above example will output:

```
bool(false)
bool(false)
bool(true)
```

### See Also

- IntlChar::isIDStart() - Check if code point is permissible as the first character in an identifier
- IntlChar::isIDPart() - Check if code point is permissible in an identifier
- IntlChar::PROPERTY_DEFAULT_IGNORABLE_CODE_POINT

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.isidignorable.php
