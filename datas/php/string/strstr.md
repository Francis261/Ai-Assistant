# strstr

Source: https://devdocs.io/php/function.strstr

(PHP 4, PHP 5, PHP 7, PHP 8)

strstr — Find the first occurrence of a string

### Description

```
strstr(string $haystack, string $needle, bool $before_needle = false): string|false
```

Returns part of haystack string starting from and including the first occurrence of needle to the end of haystack.

Note:

This function is case-sensitive. For case-insensitive searches, use stristr().

Note:

If it is only required to determine if a particular needle occurs within haystack, the faster and less memory intensive str_contains() function should be used instead.

### Parameters

The input string.

The string to search for.

Prior to PHP 8.0.0, if needle is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the needle should either be explicitly cast to string, or an explicit call to chr() should be performed.

If true, strstr() returns the part of the haystack before the first occurrence of the needle (excluding the needle).

### Return Values

Returns the portion of string, or false if needle is not found.

### Changelog

### Examples

Example #1 strstr() example

```
<?php
$email  = 'name@example.com';
$domain = strstr($email, '@');
echo $domain, PHP_EOL; // prints @example.com

$user = strstr($email, '@', true);
echo $user, PHP_EOL; // prints name
?>
```

### See Also

- stristr() - Case-insensitive strstr
- strrchr() - Find the last occurrence of a character in a string
- strpos() - Find the position of the first occurrence of a substring in a string
- strpbrk() - Search a string for any of a set of characters
- preg_match() - Perform a regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strstr.php
