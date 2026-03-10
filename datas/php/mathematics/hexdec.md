# hexdec

Source: https://devdocs.io/php/function.hexdec

(PHP 4, PHP 5, PHP 7, PHP 8)

hexdec — Hexadecimal to decimal

### Description

```
hexdec(string $hex_string): int|float
```

Returns the decimal equivalent of the hexadecimal number represented by the hex_string argument. hexdec() converts a hexadecimal string to a decimal number.

hexdec() will ignore any non-hexadecimal characters it encounters. As of PHP 7.4.0 supplying any invalid characters is deprecated.

### Parameters

The hexadecimal string to convert

### Return Values

The decimal representation of hex_string

### Changelog

### Examples

Example #1 hexdec() example

```
<?php
var_dump(hexdec("ee")); // prints "int(238)"
var_dump(hexdec("a0")); // prints "int(160)"
?>
```

Example #2 hexdec() with Invalid Characters

```
<?php
var_dump(hexdec("See"));  // print "int(238)"
var_dump(hexdec("that")); // print "int(10)"
?>
```

### Notes

Note:

The function can convert numbers that are too large to fit into the platforms int type, larger values are returned as float in that case.

### See Also

- dechex() - Decimal to hexadecimal
- bindec() - Binary to decimal
- octdec() - Octal to decimal
- base_convert() - Convert a number between arbitrary bases

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.hexdec.php
