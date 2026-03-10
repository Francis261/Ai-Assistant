# strpbrk

Source: https://devdocs.io/php/function.strpbrk

(PHP 5, PHP 7, PHP 8)

strpbrk — Search a string for any of a set of characters

### Description

```
strpbrk(string $string, string $characters): string|false
```

strpbrk() searches the string string for a characters.

### Parameters

The string where characters is looked for.

This parameter is case sensitive.

### Return Values

Returns a string starting from the character found, or false if it is not found.

### Examples

Example #1 strpbrk() example

```
<?php

$text = 'This is a Simple text.';

// this echoes "is is a Simple text." because 'i' is matched first
echo strpbrk($text, 'mi'), PHP_EOL;

// this echoes "Simple text." because chars are case sensitive
echo strpbrk($text, 'S'), PHP_EOL;
?>
```

### See Also

- strpos() - Find the position of the first occurrence of a substring in a string
- strstr() - Find the first occurrence of a string
- preg_match() - Perform a regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strpbrk.php
