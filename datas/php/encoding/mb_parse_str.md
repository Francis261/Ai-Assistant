# mb_parse_str

Source: https://devdocs.io/php/function.mb-parse-str

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_parse_str — Parse GET/POST/COOKIE data and set global variable

### Description

```
mb_parse_str(string $string, array &$result): bool
```

Parses GET/POST/COOKIE data and sets global variables. Since PHP does not provide raw POST/COOKIE data, it can only be used for GET data for now. It parses URL encoded data, detects encoding, converts coding to internal encoding and set values to the result array or global variables.

### Parameters

The URL encoded data.

An array containing decoded and character encoded converted values.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- mb_detect_order() - Set/Get character encoding detection order
- mb_internal_encoding() - Set/Get internal character encoding

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-parse-str.php
