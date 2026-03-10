# fdf_set_opt

Source: https://devdocs.io/php/function.fdf-set-opt

(PHP 4 >= 4.0.2, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_opt — Sets an option of a field

### Description

```
fdf_set_opt(
 resource $fdf_document,
 string $fieldname,
 int $element,
 string $str1,
 string $str2
): bool
```

Sets options of the given field.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

Name of the FDF field, as a string.

### Return Values

Returns true on success or false on failure.

### See Also

- fdf_set_flags() - Sets a flag of a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-opt.php
