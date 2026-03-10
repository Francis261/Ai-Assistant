# lcfirst

Source: https://devdocs.io/php/function.lcfirst

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

lcfirst — Make a string's first character lowercase

### Description

```
lcfirst(string $string): string
```

Returns a string with the first character of string lowercased if that character is an ASCII character in the range "A" (0x41) to "Z" (0x5a).

### Parameters

The input string.

### Return Values

Returns the resulting string.

### Changelog

### Examples

Example #1 lcfirst() example

```
<?php
$foo = 'HelloWorld';
echo lcfirst($foo), PHP_EOL;             // helloWorld

$bar = 'HELLO WORLD!';
echo lcfirst($bar), PHP_EOL;             // hELLO WORLD!
echo lcfirst(strtoupper($bar)), PHP_EOL; // hELLO WORLD!
?>
```

### See Also

- ucfirst() - Make a string's first character uppercase
- strtolower() - Make a string lowercase
- strtoupper() - Make a string uppercase
- ucwords() - Uppercase the first character of each word in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.lcfirst.php
