# fdf_save

Source: https://devdocs.io/php/function.fdf-save

(PHP 4, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_save — Save a FDF document

### Description

```
fdf_save(resource $fdf_document, string $filename = ?): bool
```

Saves a FDF document.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

If provided, the resulting FDF will be written in this parameter. Otherwise, this function will write the FDF to the default PHP output stream.

### Return Values

Returns true on success or false on failure.

### See Also

- fdf_close() - Close an FDF document
- fdf_create() - Create a new FDF document
- fdf_save_string() - Returns the FDF document as a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-save.php
