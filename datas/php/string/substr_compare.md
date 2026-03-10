# substr_compare

Source: https://devdocs.io/php/function.substr-compare

(PHP 5, PHP 7, PHP 8)

substr_compare — Binary safe comparison of two strings from an offset, up to length characters

### Description

```
substr_compare(
 string $haystack,
 string $needle,
 int $offset,
 ?int $length = null,
 bool $case_insensitive = false
): int
```

substr_compare() compares haystack from position offset with needle up to length characters.

### Parameters

The main string being compared.

The secondary string being compared.

The start position for the comparison. If negative, it starts counting from the end of the string.

The length of the comparison. The default value is the largest of the length of the needle compared to the length of haystack minus the offset.

If case_insensitive is true, comparison is case insensitive.

### Return Values

Returns a value less than 0 if string1 is less than string2; a value greater than 0 if string1 is greater than string2, and 0 if they are equal. No particular meaning can be reliably inferred from the value aside from its sign.

If offset is equal to (prior to PHP 7.2.18, 7.3.5) or greater than the length of haystack, or the length is set and is less than 0, substr_compare() prints a warning and returns false.

### Changelog

### Examples

Example #1 A substr_compare() example

```
<?php
echo substr_compare("abcde", "bc", 1, 2), PHP_EOL; // 0
echo substr_compare("abcde", "de", -2, 2), PHP_EOL; // 0
echo substr_compare("abcde", "bcg", 1, 2), PHP_EOL; // 0
echo substr_compare("abcde", "BC", 1, 2, true), PHP_EOL; // 0
echo substr_compare("abcde", "bc", 1, 3), PHP_EOL; // 1
echo substr_compare("abcde", "cd", 1, 2), PHP_EOL; // -1
echo substr_compare("abcde", "abc", 5, 1), PHP_EOL; // -1
?>
```

### See Also

- strncmp() - Binary safe string comparison of the first n characters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.substr-compare.php
