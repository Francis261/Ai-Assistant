# stream_get_filters

Source: https://devdocs.io/php/function.stream-get-filters

(PHP 5, PHP 7, PHP 8)

stream_get_filters — Retrieve list of registered filters

### Description

```
stream_get_filters(): array
```

Retrieve the list of registered filters on the running system.

### Parameters

This function has no parameters.

### Return Values

Returns an indexed array containing the name of all stream filters available.

### Examples

Example #1 Using stream_get_filters()

```
<?php
$streamlist = stream_get_filters();
print_r($streamlist);
?>
```

The above example will output something similar to:

```
Array (
  [0] => string.rot13
  [1] => string.toupper
  [2] => string.tolower
  [3] => string.base64
  [4] => string.quoted-printable
)
```

### See Also

- stream_filter_register() - Register a user defined stream filter
- stream_get_wrappers() - Retrieve list of registered streams

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-get-filters.php
