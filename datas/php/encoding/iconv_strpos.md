# iconv_strpos

Source: https://devdocs.io/php/function.iconv-strpos

(PHP 5, PHP 7, PHP 8)

iconv_strpos — Finds position of first occurrence of a needle within a haystack

### Description

```
iconv_strpos(
 string $haystack,
 string $needle,
 int $offset = 0,
 ?string $encoding = null
): int|false
```

Finds position of first occurrence of a needle within a haystack.

In contrast to strpos(), the return value of iconv_strpos() is the number of characters that appear before the needle, rather than the offset in bytes to the position where the needle has been found. The characters are counted on the basis of the specified character set encoding.

### Parameters

The entire string.

The searched substring.

The optional offset parameter specifies the position from which the search should be performed. If the offset is negative, it is counted from the end of the string.

If encoding parameter is omitted or null, string are assumed to be encoded in iconv.internal_encoding.

If haystack or needle is not a string, it is converted to a string and applied as the ordinal value of a character.

### Return Values

Returns the numeric position of the first occurrence of needle in haystack.

If needle is not found, iconv_strpos() will return false.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### See Also

- strpos() - Find the position of the first occurrence of a substring in a string
- iconv_strrpos() - Finds the last occurrence of a needle within a haystack
- mb_strpos() - Find position of first occurrence of string in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv-strpos.php
