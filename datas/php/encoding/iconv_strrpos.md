# iconv_strrpos

Source: https://devdocs.io/php/function.iconv-strrpos

(PHP 5, PHP 7, PHP 8)

iconv_strrpos — Finds the last occurrence of a needle within a haystack

### Description

```
iconv_strrpos(string $haystack, string $needle, ?string $encoding = null): int|false
```

Finds the last occurrence of a needle within a haystack.

In contrast to strrpos(), the return value of iconv_strrpos() is the number of characters that appear before the needle, rather than the offset in bytes to the position where the needle has been found. The characters are counted on the basis of the specified character set encoding.

### Parameters

The entire string.

The searched substring.

If encoding parameter is omitted or null, string are assumed to be encoded in iconv.internal_encoding.

If haystack or needle is not a string, it is converted to a string and applied as the ordinal value of a character.

### Return Values

Returns the numeric position of the last occurrence of needle in haystack.

If needle is not found, iconv_strrpos() will return false.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### See Also

- strrpos() - Find the position of the last occurrence of a substring in a string
- iconv_strpos() - Finds position of first occurrence of a needle within a haystack
- mb_strrpos() - Find position of last occurrence of a string in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv-strrpos.php
