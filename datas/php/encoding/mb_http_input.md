# mb_http_input

Source: https://devdocs.io/php/function.mb-http-input

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_http_input — Detect HTTP input character encoding

### Description

```
mb_http_input(?string $type = null): array|string|false
```

Detects the HTTP input character encoding.

### Parameters

Input string specifies the input type. "G" for GET, "P" for POST, "C" for COOKIE, "S" for string, "L" for list, and "I" for the whole list (will return array). If type is omitted, it returns the last input type processed.

### Return Values

The character encoding name, as per the type, or an array of character encoding names, if type is "I". If mb_http_input() does not process specified HTTP input, it returns false.

### Errors/Exceptions

Throws a ValueError if type is invalid.

### Changelog

### See Also

- mb_internal_encoding() - Set/Get internal character encoding
- mb_http_output() - Set/Get HTTP output character encoding
- mb_detect_order() - Set/Get character encoding detection order

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-http-input.php
