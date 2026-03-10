# strtolower

Source: https://devdocs.io/php/function.strtolower

(PHP 4, PHP 5, PHP 7, PHP 8)

strtolower — Make a string lowercase

### Description

```
strtolower(string $string): string
```

Returns string with all ASCII alphabetic characters converted to lowercase.

Bytes in the range "A" (0x41) to "Z" (0x5a) will be converted to the corresponding lowercase letter by adding 32 to each byte value.

This can be used to convert ASCII characters within strings encoded with UTF-8, since multibyte UTF-8 characters will be ignored. To convert multibyte non-ASCII characters, use mb_strtolower().

### Parameters

The input string.

### Return Values

Returns the lowercased string.

### Changelog

### Examples

Example #1 strtolower() example

```
<?php
$str = "Mary Had A Little Lamb and She LOVED It So";
$str = strtolower($str);
echo $str; // Prints mary had a little lamb and she loved it so
?>
```

### Notes

Note: This function is binary-safe.

### See Also

- strtoupper() - Make a string uppercase
- ucfirst() - Make a string's first character uppercase
- ucwords() - Uppercase the first character of each word in a string
- mb_strtolower() - Make a string lowercase

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strtolower.php
