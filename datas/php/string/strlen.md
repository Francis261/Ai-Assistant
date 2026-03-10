# strlen

Source: https://devdocs.io/php/function.strlen

(PHP 4, PHP 5, PHP 7, PHP 8)

strlen — Get string length

### Description

```
strlen(string $string): int
```

Returns the length of the given string.

### Parameters

The string being measured for length.

### Return Values

The length of the string in bytes.

### Examples

Example #1 A strlen() example

```
<?php
$str = 'abcdef';
echo strlen($str), PHP_EOL; // 6

$str = ' ab cd ';
echo strlen($str), PHP_EOL; // 7
?>
```

### Notes

Note:

strlen() returns the number of bytes rather than the number of characters in a string.

### See Also

- count() - Counts all elements in an array or in a Countable object
- grapheme_strlen() - Get string length in grapheme units
- iconv_strlen() - Returns the character count of string
- mb_strlen() - Get string length

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strlen.php
