# fnmatch

Source: https://devdocs.io/php/function.fnmatch

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

fnmatch — Match filename against a pattern

### Description

```
fnmatch(string $pattern, string $filename, int $flags = 0): bool
```

fnmatch() checks if the passed filename would match the given shell wildcard pattern.

### Parameters

The pattern to match against. Usually, the pattern will contain wildcards like '?' and '*'.

The tested string. This function is especially useful for filenames, but may also be used on regular strings.

The average user may be used to shell patterns or at least in their simplest form to '?' and '*' wildcards so using fnmatch() instead of preg_match() for frontend search expression input may be way more convenient for non-programming users.

The value of flags can be any combination of the following flags, joined with the binary OR (|) operator.

### Return Values

Returns true if there is a match, false otherwise.

### Examples

Example #1 Checking a color name against a shell wildcard pattern

```
<?php
if (fnmatch("*gr[ae]y", $color)) {
  echo "some form of gray ...";
}
?>
```

### Notes

For now, this function is not available on non-POSIX compliant systems except Windows.

### See Also

- glob() - Find pathnames matching a pattern
- preg_match() - Perform a regular expression match
- sscanf() - Parses input from a string according to a format
- printf() - Output a formatted string
- sprintf() - Return a formatted string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fnmatch.php
