# chr

Source: https://devdocs.io/php/function.chr

(PHP 4, PHP 5, PHP 7, PHP 8)

chr — Generate a single-byte string from a number

### Description

```
chr(int $codepoint): string
```

Returns a one-character string containing the character specified by interpreting codepoint as an unsigned integer.

This can be used to create a one-character string in a single-byte encoding such as ASCII, ISO-8859, or Windows 1252, by passing the position of a desired character in the encoding's mapping table. However, note that this function is not aware of any string encoding, and in particular cannot be passed a Unicode code point value to generate a string in a multibyte encoding like UTF-8 or UTF-16.

This function complements ord().

### Parameters

An integer between 0 and 255.

Values outside the valid range (0..255) will be bitwise and'ed with 255, which is equivalent to the following algorithm:

```
while ($bytevalue < 0) {
    $bytevalue += 256;
}
$bytevalue %= 256;
```

### Return Values

A single-character string containing the specified byte.

### Changelog

### Examples

Example #1 chr() example

```
<?php
// Assumes the string will be used as ASCII or an ASCII-compatible encoding

$str = "The string ends in escape: ";
$str .= chr(27); /* add an escape character at the end of $str */
echo $str, PHP_EOL;

/* Often this is more useful */
$str = sprintf("The string ends in escape: %c", 27);
echo $str, PHP_EOL;
?>
```

Example #2 Overflow behavior

```
<?php
echo chr(-159), chr(833), PHP_EOL;
?>
```

The above example will output:

```
aA
```

Example #3 Building a UTF-8 string from individual bytes

```
<?php
$str = chr(240) . chr(159) . chr(144) . chr(152);
echo $str, PHP_EOL;
?>
```

The above example will output:

### See Also

- sprintf() - Return a formatted string with a format string of %c
- ord() - Convert the first byte of a string to a value between 0 and 255
- An » ASCII-table
- mb_chr() - Return character by Unicode code point value
- IntlChar::chr() - Return Unicode character by code point value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.chr.php
