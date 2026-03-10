# IntlChar::getCombiningClass

Source: https://devdocs.io/php/intlchar.getcombiningclass

(PHP 7, PHP 8)

IntlChar::getCombiningClass — Get the combining class of a code point

### Description

```
public static IntlChar::getCombiningClass(int|string $codepoint): ?int
```

Returns the combining class of the code point.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the combining class of the character. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::getCombiningClass("A"));
var_dump(IntlChar::getCombiningClass("\u{0334}"));
var_dump(IntlChar::getCombiningClass("\u{0358}"));
?>
```

The above example will output:

```
int(0)
int(1)
int(232)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getcombiningclass.php
