# ucwords

Source: https://devdocs.io/php/function.ucwords

(PHP 4, PHP 5, PHP 7, PHP 8)

ucwords — Uppercase the first character of each word in a string

### Description

```
ucwords(string $string, string $separators = " \t\r\n\f\v"): string
```

Returns a string with the first character of each word in string capitalized, if that character is an ASCII character between "a" (0x61) and "z" (0x7a).

For this function, a word is a string of characters that are not listed in the separators parameter. By default, these are: space, horizontal tab, carriage return, newline, form-feed and vertical tab.

To do a similar conversion on multibyte strings, use mb_convert_case() with the MB_CASE_TITLE mode.

### Parameters

The input string.

The optional separators contains the word separator characters.

### Return Values

Returns the modified string.

### Changelog

### Examples

Example #1 ucwords() example

```
<?php
$foo = 'hello world!';
echo ucwords($foo), PHP_EOL;             // Hello World!

$bar = 'HELLO WORLD!';
echo ucwords($bar), PHP_EOL;             // HELLO WORLD!
echo ucwords(strtolower($bar)), PHP_EOL; // Hello World!
?>
```

Example #2 ucwords() example with custom delimiter

```
<?php
$foo = 'hello|world!';
echo ucwords($foo), PHP_EOL;             // Hello|world!

echo ucwords($foo, "|"), PHP_EOL;        // Hello|World!
?>
```

Example #3 ucwords() example with additional delimiters

```
<?php
$foo = "mike o'hara";
echo ucwords($foo), PHP_EOL;                 // Mike O'hara

echo ucwords($foo, " \t\r\n\f\v'"), PHP_EOL; // Mike O'Hara
?>
```

### Notes

Note: This function is binary-safe.

### See Also

- strtoupper() - Make a string uppercase
- strtolower() - Make a string lowercase
- ucfirst() - Make a string's first character uppercase
- mb_convert_case() - Perform case folding on a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ucwords.php
