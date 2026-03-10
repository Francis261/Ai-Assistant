# IntlChar::getBlockCode

Source: https://devdocs.io/php/intlchar.getblockcode

(PHP 7, PHP 8)

IntlChar::getBlockCode — Get the Unicode allocation block containing a code point

### Description

```
public static IntlChar::getBlockCode(int|string $codepoint): ?int
```

Returns the Unicode allocation block that contains the character.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

### Return Values

Returns the block value for codepoint. See the IntlChar::BLOCK_CODE_* constants for possible return values. Returns null on failure.

### Examples

Example #1 Testing different code points

```
<?php
var_dump(IntlChar::getBlockCode("A") === IntlChar::BLOCK_CODE_BASIC_LATIN);
var_dump(IntlChar::getBlockCode("Φ") === IntlChar::BLOCK_CODE_GREEK);
var_dump(IntlChar::getBlockCode("\u{2603}") === IntlChar::BLOCK_CODE_MISCELLANEOUS_SYMBOLS);
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getblockcode.php
