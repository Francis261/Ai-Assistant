# mb_str_pad

Source: https://devdocs.io/php/function.mb-str-pad

(PHP 8 >= PHP 8.3.0)

mb_str_pad — Pad a multibyte string to a certain length with another multibyte string

### Description

```
mb_str_pad(
 string $string,
 int $length,
 string $pad_string = " ",
 int $pad_type = STR_PAD_RIGHT,
 ?string $encoding = null
): string
```

This function returns the string padded on the left, the right, or both sides to the specified padding length, where the length is measured in Unicode codepoints. If the optional argument pad_string is not supplied, the string is padded with spaces, otherwise it is padded with characters from pad_string up to the limit.

### Parameters

The input string.

If the value of length is negative, less than, or equal to the length of the input string, no padding takes place, and string will be returned.

Note:

The pad_string may be truncated if the required number of padding characters can't be evenly divided by the pad_string's length.

Optional argument pad_type can be STR_PAD_RIGHT, STR_PAD_LEFT, or STR_PAD_BOTH. By default STR_PAD_RIGHT.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

Returns the padded string.

### Examples

Example #1 mb_str_pad() example

```
<?php
var_dump(mb_str_pad('▶▶', 6, '❤❓❇', STR_PAD_RIGHT)); // string(18) "▶▶❤❓❇❤"
var_dump(mb_str_pad('▶▶', 6, '❤❓❇', STR_PAD_LEFT));  // string(18) "❤❓❇❤▶▶"
var_dump(mb_str_pad('▶▶', 6, '❤❓❇', STR_PAD_BOTH));  // string(18) "❤❓▶▶❤❓"

var_dump(mb_str_pad("🎉", 3, "祝", STR_PAD_LEFT));   // string(10) "祝祝🎉"
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-str-pad.php
