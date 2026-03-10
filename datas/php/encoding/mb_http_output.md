# mb_http_output

Source: https://devdocs.io/php/function.mb-http-output

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_http_output — Set/Get HTTP output character encoding

### Description

```
mb_http_output(?string $encoding = null): string|bool
```

Set/Get the HTTP output character encoding. Output after this function is called will be converted from the set internal encoding to encoding.

### Parameters

If encoding is set, mb_http_output() sets the HTTP output character encoding to encoding.

If encoding is omitted, mb_http_output() returns the current HTTP output character encoding.

### Return Values

If encoding is omitted, mb_http_output() returns the current HTTP output character encoding. Otherwise, Returns true on success or false on failure.

### Errors/Exceptions

Throws a ValueError if encoding contains null bytes.

### Changelog

### See Also

- mb_internal_encoding() - Set/Get internal character encoding
- mb_http_input() - Detect HTTP input character encoding
- mb_detect_order() - Set/Get character encoding detection order

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-http-output.php
