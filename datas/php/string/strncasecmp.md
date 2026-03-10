# strncasecmp

Source: https://devdocs.io/php/function.strncasecmp

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

strncasecmp — Binary safe case-insensitive string comparison of the first n characters

### Description

```
strncasecmp(string $string1, string $string2, int $length): int
```

This function is similar to strcasecmp(), with the difference that you can specify the (upper limit of the) number of characters from each string to be used in the comparison.

### Parameters

The first string.

The second string.

The length of strings to be used in the comparison.

### Return Values

Returns a value less than 0 if string1 is less than string2; a value greater than 0 if string1 is greater than string2, and 0 if they are equal. No particular meaning can be reliably inferred from the value aside from its sign.

### Changelog

### Examples

Example #1 strncasecmp() example

```
<?php

$var1 = 'Hello John';
$var2 = 'hello Doe';
if (strncasecmp($var1, $var2, 5) === 0) {
    echo 'First 5 characters of $var1 and $var2 are equals in a case-insensitive string comparison';
}
?>
```

### See Also

- strncmp() - Binary safe string comparison of the first n characters
- preg_match() - Perform a regular expression match
- substr_compare() - Binary safe comparison of two strings from an offset, up to length characters
- strcasecmp() - Binary safe case-insensitive string comparison
- stristr() - Case-insensitive strstr
- substr() - Return part of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strncasecmp.php
