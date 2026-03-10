# mb_substr_count

Source: https://devdocs.io/php/function.mb-substr-count

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

mb_substr_count — Count the number of substring occurrences

### Description

```
mb_substr_count(string $haystack, string $needle, ?string $encoding = null): int
```

Counts the number of times the needle substring occurs in the haystack string.

### Parameters

The string being checked.

The string being found.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

The number of times the needle substring occurs in the haystack string.

### Changelog

### Examples

Example #1 mb_substr_count() example

```
<?php
echo mb_substr_count("This is a test", "is"); // prints out 2
?>
```

### See Also

- mb_strpos() - Find position of first occurrence of string in a string
- mb_substr() - Get part of string
- substr_count() - Count the number of substring occurrences

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-substr-count.php
