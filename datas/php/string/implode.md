# implode

Source: https://devdocs.io/php/function.implode

(PHP 4, PHP 5, PHP 7, PHP 8)

implode — Join array elements with a string

### Description

```
implode(string $separator, array $array): string
```

Alternative signature (not supported with named arguments):

```
implode(array $array): string
```

Legacy signature (deprecated as of PHP 7.4.0, removed as of PHP 8.0.0):

```
implode(array $array, string $separator): string
```

Join array elements with a separator string.

### Parameters

Optional. Defaults to an empty string.

The array of strings to implode.

### Return Values

Returns a string containing a string representation of all the array elements in the same order, with the separator string between each element.

### Changelog

### Examples

Example #1 implode() example

```
<?php

$array = ['lastname', 'email', 'phone'];
var_dump(implode(",", $array)); // string(20) "lastname,email,phone"

// Empty string when using an empty array:
var_dump(implode('hello', [])); // string(0) ""

// The separator is optional:
var_dump(implode(['a', 'b', 'c'])); // string(3) "abc"

?>
```

### Notes

Note: This function is binary-safe.

### See Also

- explode() - Split a string by a string
- preg_split() - Split string by a regular expression
- http_build_query() - Generate URL-encoded query string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.implode.php
