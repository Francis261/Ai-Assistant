# preg_grep

Source: https://devdocs.io/php/function.preg-grep

(PHP 4, PHP 5, PHP 7, PHP 8)

preg_grep — Return array entries that match the pattern

### Description

```
preg_grep(string $pattern, array $array, int $flags = 0): array|false
```

Returns the array consisting of the elements of the array array that match the given pattern.

### Parameters

The pattern to search for, as a string.

The input array.

If set to PREG_GREP_INVERT, this function returns the elements of the input array that do not match the given pattern.

### Return Values

Returns an array indexed using the keys from the array array, or false on failure.

### Errors/Exceptions

If the regex pattern passed does not compile to a valid regex, an E_WARNING is emitted.

### Examples

Example #1 preg_grep() example

```
<?php
$array = [ "4", M_PI, "2.74", 42 ];

// return all array elements containing floating point numbers
$fl_array = preg_grep("/^(\d+)?\.\d+$/", $array);

var_dump($fl_array);
?>
```

### See Also

- PCRE Patterns
- preg_quote() - Quote regular expression characters
- preg_match_all() - Perform a global regular expression match
- preg_filter() - Perform a regular expression search and replace
- preg_last_error() - Returns the error code of the last PCRE regex execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.preg-grep.php
