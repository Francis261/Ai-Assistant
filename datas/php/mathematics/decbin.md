# decbin

Source: https://devdocs.io/php/function.decbin

(PHP 4, PHP 5, PHP 7, PHP 8)

decbin — Decimal to binary

### Description

```
decbin(int $num): string
```

Returns a string containing a binary representation of the given num argument.

### Parameters

Decimal value to convert

### Return Values

Binary string representation of num

### Examples

Example #1 decbin() example

```
<?php
echo decbin(12) . "\n";
echo decbin(26);
?>
```

The above example will output:

```
1100
11010
```

### See Also

- bindec() - Binary to decimal
- decoct() - Decimal to octal
- dechex() - Decimal to hexadecimal
- base_convert() - Convert a number between arbitrary bases
- printf() - Output a formatted string, using %b, %032b or %064b as the format
- sprintf() - Return a formatted string, using %b, %032b or %064b as the format

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.decbin.php
