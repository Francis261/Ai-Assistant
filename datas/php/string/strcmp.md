# strcmp

Source: https://devdocs.io/php/function.strcmp

(PHP 4, PHP 5, PHP 7, PHP 8)

strcmp — Binary safe string comparison

### Description

```
strcmp(string $string1, string $string2): int
```

Note that this comparison is case sensitive. For case-insensitive comparison, see strcasecmp().

Note that this comparison is not locale aware. For locale aware comparison see strcoll() or Collator::compare()

### Parameters

The first string.

The second string.

### Return Values

Returns a value less than 0 if string1 is less than string2; a value greater than 0 if string1 is greater than string2, and 0 if they are equal. No particular meaning can be reliably inferred from the value aside from its sign.

### Changelog

### Examples

Example #1 strcmp() example

```
<?php
$var1 = "Hello";
$var2 = "hello";
if (strcmp($var1, $var2) !== 0) {
    echo '$var1 is not equal to $var2 in a case sensitive string comparison';
}
?>
```

### See Also

- Full string comparison
  - strcasecmp() - Binary safe case-insensitive string comparison
  - Collator::compare() - Compare two Unicode strings
  - strcoll() - Locale based string comparison
- Partial string comparison
  - substr_compare() - Binary safe comparison of two strings from an offset, up to length characters
  - strncmp() - Binary safe string comparison of the first n characters
  - strstr() - Find the first occurrence of a string
- Similar / other string comparison
  - preg_match() - Perform a regular expression match
  - levenshtein() - Calculate Levenshtein distance between two strings
  - metaphone() - Calculate the metaphone key of a string
  - similar_text() - Calculate the similarity between two strings
  - soundex() - Calculate the soundex key of a string

- strcasecmp() - Binary safe case-insensitive string comparison
- Collator::compare() - Compare two Unicode strings
- strcoll() - Locale based string comparison

- substr_compare() - Binary safe comparison of two strings from an offset, up to length characters
- strncmp() - Binary safe string comparison of the first n characters
- strstr() - Find the first occurrence of a string

- preg_match() - Perform a regular expression match
- levenshtein() - Calculate Levenshtein distance between two strings
- metaphone() - Calculate the metaphone key of a string
- similar_text() - Calculate the similarity between two strings
- soundex() - Calculate the soundex key of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strcmp.php
