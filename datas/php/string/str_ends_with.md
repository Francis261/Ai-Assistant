# str_ends_with

Source: https://devdocs.io/php/function.str-ends-with

(PHP 8)

str_ends_with — Checks if a string ends with a given substring

### Description

```
str_ends_with(string $haystack, string $needle): bool
```

Performs a case-sensitive check indicating if haystack ends with needle.

### Parameters

The string to search in.

The substring to search for in the haystack.

### Return Values

Returns true if haystack ends with needle, false otherwise.

### Examples

Example #1 Using the empty string ''

```
<?php
if (str_ends_with('abc', '')) {
    echo "All strings end with the empty string";
}
?>
```

The above example will output:

```
All strings end with the empty string
```

Example #2 Showing case-sensitivity

```
<?php
$string = 'The lazy fox jumped over the fence';

if (str_ends_with($string, 'fence')) {
    echo "The string ends with 'fence'\n";
}

if (str_ends_with($string, 'Fence')) {
    echo 'The string ends with "Fence"';
} else {
    echo '"Fence" was not found because the case does not match';
}

?>
```

The above example will output:

```
The string ends with 'fence'
"Fence" was not found because the case does not match
```

### Notes

Note: This function is binary-safe.

### See Also

- str_contains() - Determine if a string contains a given substring
- str_starts_with() - Checks if a string starts with a given substring
- stripos() - Find the position of the first occurrence of a case-insensitive substring in a string
- strrpos() - Find the position of the last occurrence of a substring in a string
- strripos() - Find the position of the last occurrence of a case-insensitive substring in a string
- strstr() - Find the first occurrence of a string
- strpbrk() - Search a string for any of a set of characters
- substr() - Return part of a string
- preg_match() - Perform a regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.str-ends-with.php
