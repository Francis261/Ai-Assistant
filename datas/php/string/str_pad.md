# str_pad

Source: https://devdocs.io/php/function.str-pad

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

str_pad — Pad a string to a certain length with another string

### Description

```
str_pad(
 string $string,
 int $length,
 string $pad_string = " ",
 int $pad_type = STR_PAD_RIGHT
): string
```

This function returns the string string padded on the left, the right, or both sides to the specified padding length. If the optional argument pad_string is not supplied, the string is padded with spaces, otherwise it is padded with characters from pad_string up to the limit.

### Parameters

The input string.

The desired length of the final padded string. If the value of length is negative, less than, or equal to the length of the input string, no padding takes place, and string will be returned.

Note:

The pad_string may be truncated if the required number of padding characters can't be evenly divided by the pad_string's length.

Optional argument pad_type can be STR_PAD_RIGHT, STR_PAD_LEFT, or STR_PAD_BOTH. If pad_type is not specified it is assumed to be STR_PAD_RIGHT.

### Return Values

Returns the padded string.

### Examples

Example #1 str_pad() example

```
<?php
$input = "Alien";
echo str_pad($input, 10), PHP_EOL;                      // produces "Alien     "
echo str_pad($input, 10, "-=", STR_PAD_LEFT), PHP_EOL;  // produces "-=-=-Alien"
echo str_pad($input, 10, "_", STR_PAD_BOTH), PHP_EOL;   // produces "__Alien___"
echo str_pad($input,  6, "___"), PHP_EOL;               // produces "Alien_"
echo str_pad($input,  3, "*"), PHP_EOL;                 // produces "Alien"
?>
```

### See Also

- mb_str_pad() - Pad a multibyte string to a certain length with another multibyte string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.str-pad.php
