# fdf_get_value

Source: https://devdocs.io/php/function.fdf-get-value

(PHP 4, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_get_value — Get the value of a field

### Description

```
fdf_get_value(resource $fdf_document, string $fieldname, int $which = -1): mixed
```

Gets the value for the requested field.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

Name of the FDF field, as a string.

Elements of an array field can be retrieved by passing this optional parameter, starting at zero. For non-array fields, this parameter will be ignored.

### Return Values

Returns the field value.

### See Also

- fdf_set_value() - Set the value of a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-get-value.php
