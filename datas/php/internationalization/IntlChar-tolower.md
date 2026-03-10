# IntlChar::tolower

Source: https://devdocs.io/php/intlchar.tolower

(PHP 7, PHP 8)

IntlChar::tolower — Make Unicode character lowercase

### Description

```
public static IntlChar::tolower(int|string $codepoint): int|string|null
```

The given character is mapped to its lowercase equivalent. If the character has no lowercase equivalent, the original character itself is returned.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the Simple_Lowercase_Mapping of the code point, if any; otherwise the code point itself. Returns null on failure.

The return type is int unless the code point was passed as a UTF-8 string, in which case a string is returned. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::tolower("A"));
var_dump(IntlChar::tolower("a"));
var_dump(IntlChar::tolower("Φ"));
var_dump(IntlChar::tolower("φ"));
var_dump(IntlChar::tolower("1"));
var_dump(IntlChar::tolower(ord("A")));
var_dump(IntlChar::tolower(ord("a")));
?>
```

The above example will output:

```
string(1) "a"
string(1) "a"
string(2) "φ"
string(2) "φ"
string(1) "1"
int(97)
int(97)
```

### See Also

- IntlChar::totitle() - Make Unicode character titlecase
- IntlChar::toupper() - Make Unicode character uppercase
- mb_strtolower() - Make a string lowercase

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.tolower.php
