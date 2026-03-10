# mb_str_split

Source: https://devdocs.io/php/function.mb-str-split

(PHP 7 >= 7.4.0, PHP 8)

mb_str_split — Given a multibyte string, return an array of its characters

### Description

```
mb_str_split(string $string, int $length = 1, ?string $encoding = null): array
```

This function will return an array of strings, it is a version of str_split() with support for encodings of variable character size as well as fixed-size encodings of 1,2 or 4 byte characters. If the length parameter is specified, the string is broken down into chunks of the specified length in characters (not bytes). The encoding parameter can be optionally specified and it is good practice to do so.

### Parameters

The string to split into characters or chunks.

If specified, each element of the returned array will be composed of multiple characters instead of a single character.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

A string specifying one of the supported encodings.

### Return Values

mb_str_split() returns an array of strings.

### Changelog

### See Also

- str_split() - Convert a string to an array
- grapheme_str_split() - Split a string into an array
- explode() - Split a string by a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-str-split.php
