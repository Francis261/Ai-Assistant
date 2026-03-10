# strripos

Source: https://devdocs.io/php/function.strripos

(PHP 5, PHP 7, PHP 8)

strripos — Find the position of the last occurrence of a case-insensitive substring in a string

### Description

```
strripos(string $haystack, string $needle, int $offset = 0): int|false
```

Find the numeric position of the last occurrence of needle in the haystack string.

Unlike the strrpos(), strripos() is case-insensitive.

### Parameters

The string to search in.

The string to search for.

Prior to PHP 8.0.0, if needle is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the needle should either be explicitly cast to string, or an explicit call to chr() should be performed.

If zero or positive, the search is performed left to right skipping the first offset bytes of the haystack.

If negative, the search is performed right to left skipping the last offset bytes of the haystack and searching for the first occurrence of needle.

Note:

This is effectively looking for the last occurrence of needle before the last offset bytes.

### Return Values

Returns the position where the needle exists relative to the beginning of the haystack string (independent of search direction or offset).

Note: String positions start at 0, and not 1.

Returns false if the needle was not found.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Errors/Exceptions

- If offset is greater than the length of haystack, a ValueError will be thrown.

### Changelog

### Examples

Example #1 A simple strripos() example

```
<?php

$haystack = 'ababcd';
$needle   = 'aB';

$pos      = strripos($haystack, $needle);

if ($pos === false) {
    echo "Sorry, we did not find `$needle` in `$haystack`";
} else {
    echo "Congratulations!\n";
    echo "We found the last `$needle` in `$haystack` at position `$pos`";
}

?>
```

The above example will output:

```
Congratulations!
We found the last `aB` in `ababcd` at position `2`
```

### See Also

- strpos() - Find the position of the first occurrence of a substring in a string
- stripos() - Find the position of the first occurrence of a case-insensitive substring in a string
- strrpos() - Find the position of the last occurrence of a substring in a string
- strrchr() - Find the last occurrence of a character in a string
- stristr() - Case-insensitive strstr
- substr() - Return part of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strripos.php
