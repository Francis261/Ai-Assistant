# mb_internal_encoding

Source: https://devdocs.io/php/function.mb-internal-encoding

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_internal_encoding — Set/Get internal character encoding

### Description

```
mb_internal_encoding(?string $encoding = null): string|bool
```

Set/Get the internal character encoding

### Parameters

encoding is the character encoding name used for the HTTP input character encoding conversion, HTTP output character encoding conversion, and the default character encoding for string functions defined by the mbstring module. You should notice that the internal encoding is totally different from the one for multibyte regex.

### Return Values

If encoding is set, then Returns true on success or false on failure. In this case, the character encoding for multibyte regex is NOT changed. If encoding is omitted, then the current character encoding name is returned.

### Errors/Exceptions

As of PHP 8.0.0, a ValueError is thrown if the value of encoding is an invalid encoding. Prior to PHP 8.0.0, a E_WARNING was emitted instead.

### Changelog

### Examples

Example #1 mb_internal_encoding() example

```
<?php
/* Set internal character encoding to UTF-8 */
mb_internal_encoding("UTF-8");

/* Display current internal character encoding */
echo mb_internal_encoding();
?>
```

### See Also

- mb_http_input() - Detect HTTP input character encoding
- mb_http_output() - Set/Get HTTP output character encoding
- mb_detect_order() - Set/Get character encoding detection order
- mb_regex_encoding() - Set/Get character encoding for multibyte regex

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-internal-encoding.php
