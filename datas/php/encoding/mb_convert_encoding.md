# mb_convert_encoding

Source: https://devdocs.io/php/function.mb-convert-encoding

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_convert_encoding — Convert a string from one character encoding to another

### Description

```
mb_convert_encoding(array|string $string, string $to_encoding, array|string|null $from_encoding = null): array|string|false
```

Converts string from from_encoding, or the current internal encoding, to to_encoding. If string is an array, all its string values will be converted recursively.

### Parameters

The string or array to be converted.

The desired encoding of the result.

The current encoding used to interpret string. Multiple encodings may be specified as an array or comma separated list, in which case the correct encoding will be guessed using the same algorithm as mb_detect_encoding().

If from_encoding is omitted or null, the mbstring.internal_encoding setting will be used if set, otherwise the default_charset setting.

See supported encodings for valid values of to_encoding and from_encoding.

### Return Values

The encoded string or array on success, or false on failure.

### Errors/Exceptions

As of PHP 8.0.0, a ValueError is thrown if the value of to_encoding or from_encoding is an invalid encoding. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

### Changelog

### Examples

Example #1 mb_convert_encoding() example

```
<?php
/* Convert internal character encoding to SJIS */
$str = mb_convert_encoding($str, "SJIS");

/* Convert EUC-JP to UTF-7 */
$str = mb_convert_encoding($str, "UTF-7", "EUC-JP");

/* Auto detect encoding from JIS, eucjp-win, sjis-win, then convert str to UCS-2LE */
$str = mb_convert_encoding($str, "UCS-2LE", "JIS, eucjp-win, sjis-win");

/* If mbstring.language is "Japanese", "auto" is expanded to "ASCII,JIS,UTF-8,EUC-JP,SJIS" */
$str = mb_convert_encoding($str, "EUC-JP", "auto");
?>
```

### See Also

- mb_detect_order() - Set/Get character encoding detection order
- UConverter::transcode() - Convert a string from one character encoding to another
- iconv() - Convert a string from one character encoding to another

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-convert-encoding.php
