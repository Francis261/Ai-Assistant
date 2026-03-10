# fdf_next_field_name

Source: https://devdocs.io/php/function.fdf-next-field-name

(PHP 4, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_next_field_name — Get the next field name

### Description

```
fdf_next_field_name(resource $fdf_document, string $fieldname = ?): string
```

Gets the name of the field after the given field. This name can be used with several functions.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

Name of the FDF field, as a string. If not given, the first field will be assumed.

### Return Values

Returns the field name as a string.

### Examples

Example #1 Detecting all fieldnames in a FDF

```
<?php
$fdf = fdf_open($HTTP_FDF_DATA);
for ($field = fdf_next_field_name($fdf);
    $field != "";
    $field = fdf_next_field_name($fdf, $field)) {
    echo "field: $field\n";
}
?>
```

### See Also

- fdf_get_value() - Get the value of a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-next-field-name.php
