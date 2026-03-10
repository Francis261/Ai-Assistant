# fdf_set_status

Source: https://devdocs.io/php/function.fdf-set-status

(PHP 4, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_status — Set the value of the /STATUS key

### Description

```
fdf_set_status(resource $fdf_document, string $status): bool
```

Sets the value of the /STATUS key. When a client receives a FDF with a status set it will present the value in an alert box.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

### Return Values

Returns true on success or false on failure.

### See Also

- fdf_get_status() - Get the value of the /STATUS key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-status.php
