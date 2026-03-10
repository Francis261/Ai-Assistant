# strcasecmp

Source: https://devdocs.io/php/function.strcasecmp

(PHP 4, PHP 5, PHP 7, PHP 8)

strcasecmp — Binary safe case-insensitive string comparison

### Description

```
strcasecmp(string $string1, string $string2): int
```

Binary safe case-insensitive string comparison. The comparison is not locale aware; only ASCII letters are compared in a case-insensitive way.

### Parameters

The first string

The second string

### Return Values

Returns a value less than 0 if string1 is less than string2; a value greater than 0 if string1 is greater than string2, and 0 if they are equal. No particular meaning can be reliably inferred from the value aside from its sign.

### Changelog

### Examples

Example #1 strcasecmp() example

```
<?php
$var1 = "Hello";
$var2 = "hello";
if (strcasecmp($var1, $var2) == 0) {
    echo '$var1 is equal to $var2 in a case-insensitive string comparison';
}
?>
```

### See Also

- strcmp() - Binary safe string comparison
- preg_match() - Perform a regular expression match
- substr_compare() - Binary safe comparison of two strings from an offset, up to length characters
- strncasecmp() - Binary safe case-insensitive string comparison of the first n characters
- stristr() - Case-insensitive strstr
- substr() - Return part of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strcasecmp.php
