# fdf_set_version

Source: https://devdocs.io/php/function.fdf-set-version

(PHP 4 >= 4.3.0, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_version — Sets version number for a FDF file

### Description

```
fdf_set_version(resource $fdf_document, string $version): bool
```

Sets the FDF version for the given document.

Some features supported by this extension are only available in newer FDF versions.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

The version number. For the current FDF toolkit 5.0, this may be either 1.2, 1.3 or 1.4.

### Return Values

Returns true on success or false on failure.

### See Also

- fdf_get_version() - Gets version number for FDF API or file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-version.php
