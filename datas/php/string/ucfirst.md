# ucfirst

Source: https://devdocs.io/php/function.ucfirst

(PHP 4, PHP 5, PHP 7, PHP 8)

ucfirst — Make a string's first character uppercase

### Description

```
ucfirst(string $string): string
```

Returns a string with the first character of string capitalized, if that character is an ASCII character in the range from "a" (0x61) to "z" (0x7a).

### Parameters

The input string.

### Return Values

Returns the resulting string.

### Changelog

### Examples

Example #1 ucfirst() example

```
<?php
$foo = 'hello world!';
echo ucfirst($foo), PHP_EOL;             // Hello world!

$bar = 'HELLO WORLD!';
echo ucfirst($bar), PHP_EOL;             // HELLO WORLD!
echo ucfirst(strtolower($bar)), PHP_EOL; // Hello world!
?>
```

### See Also

- lcfirst() - Make a string's first character lowercase
- strtolower() - Make a string lowercase
- strtoupper() - Make a string uppercase
- ucwords() - Uppercase the first character of each word in a string
- mb_convert_case() - Perform case folding on a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ucfirst.php
