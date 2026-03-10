# octdec

Source: https://devdocs.io/php/function.octdec

(PHP 4, PHP 5, PHP 7, PHP 8)

octdec — Octal to decimal

### Description

```
octdec(string $octal_string): int|float
```

Returns the decimal equivalent of the octal number represented by the octal_string argument.

### Parameters

The octal string to convert. Any invalid characters in octal_string are silently ignored. As of PHP 7.4.0 supplying any invalid characters is deprecated.

### Return Values

The decimal representation of octal_string

### Changelog

### Examples

Example #1 octdec() example

```
<?php
echo octdec('77') . "\n";
echo octdec(decoct(45));
?>
```

The above example will output:

```
63
45
```

### Notes

Note:

The function can convert numbers that are too large to fit into the platforms int type, larger values are returned as float in that case.

### See Also

- decoct() - Decimal to octal
- bindec() - Binary to decimal
- hexdec() - Hexadecimal to decimal
- base_convert() - Convert a number between arbitrary bases

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.octdec.php
