# stristr

Source: https://devdocs.io/php/function.stristr

(PHP 4, PHP 5, PHP 7, PHP 8)

stristr — Case-insensitive strstr()

### Description

```
stristr(string $haystack, string $needle, bool $before_needle = false): string|false
```

Returns all of haystack starting from and including the first occurrence of needle to the end.

### Parameters

The string to search in

The string to search for.

Prior to PHP 8.0.0, if needle is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the needle should either be explicitly cast to string, or an explicit call to chr() should be performed.

If true, stristr() returns the part of the haystack before the first occurrence of the needle (excluding needle).

needle and haystack are examined in a case-insensitive manner.

### Return Values

Returns the matched substring. If needle is not found, returns false.

### Changelog

### Examples

Example #1 stristr() example

```
<?php
  $email = 'USER@EXAMPLE.com';
  echo stristr($email, 'e'), PHP_EOL; // outputs ER@EXAMPLE.com
  echo stristr($email, 'e', true), PHP_EOL; // outputs US
?>
```

Example #2 Testing if a string is found or not

```
<?php
  $string = 'Hello World!';
  if (stristr($string, 'earth') === FALSE) {
    echo '"earth" not found in string';
  }
// outputs: "earth" not found in string
?>
```

### Notes

Note: This function is binary-safe.

### See Also

- strstr() - Find the first occurrence of a string
- strrchr() - Find the last occurrence of a character in a string
- stripos() - Find the position of the first occurrence of a case-insensitive substring in a string
- strpbrk() - Search a string for any of a set of characters
- preg_match() - Perform a regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stristr.php
