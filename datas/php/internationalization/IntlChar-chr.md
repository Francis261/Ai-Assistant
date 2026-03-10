# IntlChar::chr

Source: https://devdocs.io/php/intlchar.chr

(PHP 7, PHP 8)

IntlChar::chr — Return Unicode character by code point value

### Description

```
public static IntlChar::chr(int|string $codepoint): ?string
```

Returns a string containing the character specified by the Unicode code point value.

This method complements IntlChar::ord().

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

A string containing the single character specified by the Unicode code point value, or null on failure.

### Examples

Example #1 Testing different code points

```
<?php
$values = ["A", 63, 123, 9731];
foreach ($values as $value) {
    var_dump(IntlChar::chr($value));
}
?>
```

The above example will output:

```
string(1) "A"
string(1) "?"
string(1) "{"
string(3) "☃"
```

### See Also

- IntlChar::ord() - Return Unicode code point value of character
- mb_chr() - Return character by Unicode code point value
- chr() - Generate a single-byte string from a number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.chr.php
