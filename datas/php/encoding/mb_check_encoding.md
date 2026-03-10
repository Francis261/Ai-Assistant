# mb_check_encoding

Source: https://devdocs.io/php/function.mb-check-encoding

(PHP 4 >= 4.4.3, PHP 5 >= 5.1.3, PHP 7, PHP 8)

mb_check_encoding — Check if strings are valid for the specified encoding

### Description

```
mb_check_encoding(array|string|null $value = null, ?string $encoding = null): bool
```

Checks if the specified byte stream is valid for the specified encoding. If value is of type array, all keys and values are validated recursively. It is useful to prevent so-called "Invalid Encoding Attack".

### Parameters

The byte stream or array to check. If it is omitted, this function checks all the input from the beginning of the request.

As of PHP 8.1.0, omitting this parameter or passing null is deprecated.

The expected encoding.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-check-encoding.php
