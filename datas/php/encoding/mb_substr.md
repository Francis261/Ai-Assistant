# mb_substr

Source: https://devdocs.io/php/function.mb-substr

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_substr — Get part of string

### Description

```
mb_substr(
 string $string,
 int $start,
 ?int $length = null,
 ?string $encoding = null
): string
```

Performs a multi-byte safe substr() operation based on number of characters. Position is counted from the beginning of string. First character's position is 0. Second character position is 1, and so on.

### Parameters

The string to extract the substring from.

If start is non-negative, the returned string will start at the start'th position in string, counting from zero. For instance, in the string 'abcdef', the character at position 0 is 'a', the character at position 2 is 'c', and so forth.

If start is negative, the returned string will start at the start'th character from the end of string.

Maximum number of characters to use from string. If omitted or NULL is passed, extract all characters to the end of the string.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

mb_substr() returns the portion of string specified by the start and length parameters.

### Changelog

### See Also

- mb_strcut() - Get part of string
- mb_internal_encoding() - Set/Get internal character encoding

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-substr.php
