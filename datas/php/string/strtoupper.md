# strtoupper

Source: https://devdocs.io/php/function.strtoupper

(PHP 4, PHP 5, PHP 7, PHP 8)

strtoupper — Make a string uppercase

### Description

```
strtoupper(string $string): string
```

Returns string with all ASCII alphabetic characters converted to uppercase.

Bytes in the range "a" (0x61) to "z" (0x7a) will be converted to the corresponding uppercase letter by subtracting 32 from each byte value.

This can be used to convert ASCII characters within strings encoded with UTF-8, since multibyte UTF-8 characters will be ignored. To convert multibyte non-ASCII characters, use mb_strtoupper().

### Parameters

The input string.

### Return Values

Returns the uppercased string.

### Changelog

### Examples

Example #1 strtoupper() example

```
<?php
$str = "Mary Had A Little Lamb and She LOVED It So";
$str = strtoupper($str);
echo $str; // Prints MARY HAD A LITTLE LAMB AND SHE LOVED IT SO
?>
```

### Notes

Note: This function is binary-safe.

### See Also

- strtolower() - Make a string lowercase
- ucfirst() - Make a string's first character uppercase
- ucwords() - Uppercase the first character of each word in a string
- mb_strtoupper() - Make a string uppercase

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strtoupper.php
