# mb_encode_numericentity

Source: https://devdocs.io/php/function.mb-encode-numericentity

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_encode_numericentity — Encode character to HTML numeric string reference

### Description

```
mb_encode_numericentity(
 string $string,
 array $map,
 ?string $encoding = null,
 bool $hex = false
): string
```

Converts specified character codes in string string from character code to HTML numeric character reference.

### Parameters

The string being encoded.

map is array specifies code area to convert.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

Whether the returned entity reference should be in hexadecimal notation (otherwise it is in decimal notation).

### Return Values

The converted string.

### Errors/Exceptions

Throws a ValueError if map is not a list of ints.

### Changelog

### Examples

Example #1 map example

```
<?php
$convmap = array (
 int start_code1, int end_code1, int offset1, int mask1,
 int start_code2, int end_code2, int offset2, int mask2,
 ........
 int start_codeN, int end_codeN, int offsetN, int maskN );
// Specify Unicode value for start_codeN and end_codeN
// Add offsetN to value and take bit-wise 'AND' with maskN, then
// it converts value to numeric string reference.
?>
```

Example #2 mb_encode_numericentity() example

```
<?php

$str = "aAæÆあア𩸽";

/* Convert all UTF8 characters up to 4 bytes to HTML numeric character reference */
$convmap = [0, 0x1FFFFF, 0, 0x10FFFF];
var_dump(mb_encode_numericentity($str, $convmap, "utf8"));

/* Converts only 2-byte and 4-byte UTF8 characters to HTML numeric character reference */
$convmap = [
    0x80, 0x7FF, 0, 0x10FFFF,
    0x10000, 0x1FFFFF, 0, 0x10FFFF,
];
var_dump(mb_encode_numericentity($str, $convmap, "utf8"));
?>
```

The above example will output:

```
string(46) "&#97;&#65;&#230;&#198;&#12354;&#12450;&#40509;"
string(28) "aA&#230;&#198;あア&#40509;"
```

### See Also

- mb_decode_numericentity() - Decode HTML numeric string reference to character

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-encode-numericentity.php
