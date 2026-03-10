# IntlChar::ord

Source: https://devdocs.io/php/intlchar.ord

(PHP 7, PHP 8)

IntlChar::ord — Return Unicode code point value of character

### Description

```
public static IntlChar::ord(int|string $character): ?int
```

Returns the Unicode code point value of the given character.

This function complements IntlChar::chr().

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the Unicode code point value as an integer.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::ord("A"));
var_dump(IntlChar::ord(" "));
var_dump(IntlChar::ord("\u{2603}"));
?>
```

The above example will output:

```
int(65)
int(32)
int(9731)
```

### See Also

- IntlChar::chr() - Return Unicode character by code point value
- mb_ord() - Get Unicode code point of character
- ord() - Convert the first byte of a string to a value between 0 and 255

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.ord.php
