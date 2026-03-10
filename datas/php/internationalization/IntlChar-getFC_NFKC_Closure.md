# IntlChar::getFC_NFKC_Closure

Source: https://devdocs.io/php/intlchar.getfc-nfkc-closure

(PHP 7, PHP 8)

IntlChar::getFC_NFKC_Closure — Get the FC_NFKC_Closure property for a code point

### Description

```
public static IntlChar::getFC_NFKC_Closure(int|string $codepoint): string|false|null
```

Gets the FC_NFKC_Closure property string for a character.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the FC_NFKC_Closure property string for the codepoint, or an empty string if there is none. Returns null or false on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::getFC_NFKC_Closure("\u{2121}"));
var_dump(IntlChar::getFC_NFKC_Closure("\u{1D2D}"));
?>
```

The above example will output:

```
string(3) "tel"
string(2) "æ"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getfc-nfkc-closure.php
