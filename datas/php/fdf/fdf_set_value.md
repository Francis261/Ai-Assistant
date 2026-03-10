# fdf_set_value

Source: https://devdocs.io/php/function.fdf-set-value

(PHP 4, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_value — Set the value of a field

### Description

```
fdf_set_value(
 resource $fdf_document,
 string $fieldname,
 mixed $value,
 int $isName = ?
): bool
```

Sets the value for the given field.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

Name of the FDF field, as a string.

This parameter will be stored as a string unless it is an array. In this case all array elements will be stored as a value array.

Note:

In older versions of the FDF toolkit last parameter determined if the field value was to be converted to a PDF Name (= 1) or set to a PDF String (= 0).

The value is no longer used in the current toolkit version 5.0. For compatibility reasons it is still supported as an optional parameter, but ignored internally.

### Return Values

Returns true on success or false on failure.

### See Also

- fdf_get_value() - Get the value of a field
- fdf_remove_item() - Sets target frame for form

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-value.php
