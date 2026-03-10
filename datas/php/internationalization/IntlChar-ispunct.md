# IntlChar::ispunct

Source: https://devdocs.io/php/intlchar.ispunct

(PHP 7, PHP 8)

IntlChar::ispunct — Check if code point is punctuation character

### Description

```
public static IntlChar::ispunct(int|string $codepoint): ?bool
```

Determines whether the specified code point is a punctuation character.

true for characters with general categories "P" (punctuation).

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns true if codepoint is a punctuation character, false if not. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::ispunct("."));
var_dump(IntlChar::ispunct(","));
var_dump(IntlChar::ispunct("\n"));
var_dump(IntlChar::ispunct("$"));
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
bool(false)
```

### See Also

- ctype_punct() - Check for any printable character which is not whitespace or an alphanumeric character

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.ispunct.php
