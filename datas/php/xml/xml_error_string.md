# xml_error_string

Source: https://devdocs.io/php/function.xml-error-string

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_error_string — Get XML parser error string

### Description

```
xml_error_string(int $error_code): ?string
```

Gets the XML parser error string associated with the given error_code.

### Parameters

An error code from xml_get_error_code().

### Return Values

Returns a string with a textual description of the error error_code, or null or "Unknown" if no description was found.

### See Also

- xml_get_error_code() - Get XML parser error code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xml-error-string.php
