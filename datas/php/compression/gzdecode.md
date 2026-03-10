# gzdecode

Source: https://devdocs.io/php/function.gzdecode

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

gzdecode — Decodes a gzip compressed string

### Description

```
gzdecode(string $data, int $max_length = 0): string|false
```

This function returns a decoded version of the input data.

### Parameters

The data to decode, encoded by gzencode().

The maximum length of data to decode.

### Return Values

The decoded string, or or false on failure.

### Errors/Exceptions

In case of failure, an E_WARNING level error is issued.

### See Also

- gzencode() - Create a gzip compressed string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzdecode.php
