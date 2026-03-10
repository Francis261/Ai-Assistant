# IntlChar::totitle

Source: https://devdocs.io/php/intlchar.totitle

(PHP 7, PHP 8)

IntlChar::totitle — Make Unicode character titlecase

### Description

```
public static IntlChar::totitle(int|string $codepoint): int|string|null
```

The given character is mapped to its titlecase equivalent. If the character has no titlecase equivalent, the original character itself is returned.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the Simple_Titlecase_Mapping of the code point, if any; otherwise the code point itself. Returns null on failure.

The return type is int unless the code point was passed as a UTF-8 string, in which case a string is returned. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::totitle("Ǆ"));
var_dump(IntlChar::totitle("ǆ"));
var_dump(IntlChar::totitle("Φ"));
var_dump(IntlChar::totitle("φ"));
var_dump(IntlChar::totitle("1"));
var_dump(IntlChar::totitle("ᾳ"));
var_dump(IntlChar::totitle(ord("A")));
?>
```

The above example will output:

```
string(1) "ǅ"
string(1) "ǅ"
string(2) "Φ"
string(2) "φ"
string(1) "1"
string(1) "ᾼ"
int(65)
```

### See Also

- IntlChar::tolower() - Make Unicode character lowercase
- IntlChar::toupper() - Make Unicode character uppercase
- IntlChar::istitle() - Check if code point is a titlecase letter
- mb_convert_case() - Perform case folding on a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.totitle.php
