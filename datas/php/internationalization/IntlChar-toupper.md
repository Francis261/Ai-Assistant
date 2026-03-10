# IntlChar::toupper

Source: https://devdocs.io/php/intlchar.toupper

(PHP 7, PHP 8)

IntlChar::toupper — Make Unicode character uppercase

### Description

```
public static IntlChar::toupper(int|string $codepoint): int|string|null
```

The given character is mapped to its uppercase equivalent. If the character has no uppercase equivalent, the character itself is returned.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the Simple_Uppercase_Mapping of the code point, if any; otherwise the code point itself.

The return type is int unless the code point was passed as a UTF-8 string, in which case a string is returned. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::toupper("A"));
var_dump(IntlChar::toupper("a"));
var_dump(IntlChar::toupper("Φ"));
var_dump(IntlChar::toupper("φ"));
var_dump(IntlChar::toupper("1"));
var_dump(IntlChar::toupper(ord("A")));
var_dump(IntlChar::toupper(ord("a")));
?>
```

The above example will output:

```
string(1) "A"
string(1) "A"
string(2) "Φ"
string(2) "Φ"
string(1) "1"
int(65)
int(65)
```

### See Also

- IntlChar::tolower() - Make Unicode character lowercase
- IntlChar::totitle() - Make Unicode character titlecase
- mb_strtoupper() - Make a string uppercase

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.toupper.php
