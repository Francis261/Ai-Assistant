# mb_strimwidth

Source: https://devdocs.io/php/function.mb-strimwidth

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_strimwidth — Get truncated string with specified width

### Description

```
mb_strimwidth(
 string $string,
 int $start,
 int $width,
 string $trim_marker = "",
 ?string $encoding = null
): string
```

Truncates string string to specified width, where halfwidth characters count as 1, and fullwidth characters count as 2. See » http://www.unicode.org/reports/tr11/ for details regarding East Asian character widths.

### Parameters

The string being decoded.

The start position offset. Number of characters from the beginning of string (first character is 0), or if start is negative, number of characters from the end of the string.

The width of the desired trim. If negative width is specified, count from the end of the string.

Note:

Passing negative width is deprecated as of PHP 8.3.0.

A string that is added to the end of string when string is truncated.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

The truncated string. If trim_marker is set, trim_marker replaces the last chars to match the width.

### Changelog

### Examples

Example #1 mb_strimwidth() example

```
<?php
echo mb_strimwidth("Hello World", 0, 10, "...");
// output: "Hello W..."
?>
```

### See Also

- mb_strwidth() - Return width of string
- mb_internal_encoding() - Set/Get internal character encoding

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-strimwidth.php
