# iconv_substr

Source: https://devdocs.io/php/function.iconv-substr

(PHP 5, PHP 7, PHP 8)

iconv_substr — Cut out part of a string

### Description

```
iconv_substr(
 string $string,
 int $offset,
 ?int $length = null,
 ?string $encoding = null
): string|false
```

Cuts a portion of string specified by the offset and length parameters.

### Parameters

The original string.

If offset is non-negative, iconv_substr() cuts the portion out of string beginning at offset'th character, counting from zero.

If offset is negative, iconv_substr() cuts out the portion beginning at the position, offset characters away from the end of string.

If length is given and is positive, the return value will contain at most length characters of the portion that begins at offset (depending on the length of string).

If negative length is passed, iconv_substr() cuts the portion out of string from the offset'th character up to the character that is length characters away from the end of the string. In case offset is also negative, the start position is calculated beforehand according to the rule explained above.

If encoding parameter is omitted or null, string are assumed to be encoded in iconv.internal_encoding.

Note that offset and length parameters are always deemed to represent offsets that are calculated on the basis of the character set determined by encoding, whilst the counterpart substr() always takes these for byte offsets.

### Return Values

Returns the portion of string specified by the offset and length parameters.

If string is shorter than offset characters long, false will be returned. If string is exactly offset characters long, an empty string will be returned.

### Changelog

### See Also

- substr() - Return part of a string
- mb_substr() - Get part of string
- mb_strcut() - Get part of string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv-substr.php
