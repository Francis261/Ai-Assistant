# strnatcasecmp

Source: https://devdocs.io/php/function.strnatcasecmp

(PHP 4, PHP 5, PHP 7, PHP 8)

strnatcasecmp — Case insensitive string comparisons using a "natural order" algorithm

### Description

```
strnatcasecmp(string $string1, string $string2): int
```

This function implements a comparison algorithm that orders alphanumeric strings in the way a human being would. The behaviour of this function is similar to strnatcmp(), except that the comparison is not case sensitive. For more information see: Martin Pool's » Natural Order String Comparison page.

### Parameters

The first string.

The second string.

### Return Values

Returns a value less than 0 if string1 is less than string2; a value greater than 0 if string1 is greater than string2, and 0 if they are equal. No particular meaning can be reliably inferred from the value aside from its sign.

### Changelog

### Examples

Example #1 strnatcasecmp() example

```
<?php

var_dump(strnatcasecmp('Apple', 'Banana'));
var_dump(strnatcasecmp('Banana', 'Apple'));
var_dump(strnatcasecmp('apple', 'Apple'));
?>
```

The above example will output:

```
int(-1)
int(1)
int(0)
```

### See Also

- preg_match() - Perform a regular expression match
- strcmp() - Binary safe string comparison
- strcasecmp() - Binary safe case-insensitive string comparison
- substr() - Return part of a string
- stristr() - Case-insensitive strstr
- strncasecmp() - Binary safe case-insensitive string comparison of the first n characters
- strncmp() - Binary safe string comparison of the first n characters
- strstr() - Find the first occurrence of a string
- setlocale() - Set locale information

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strnatcasecmp.php
