# odbc_field_len

Source: https://devdocs.io/php/function.odbc-field-len

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_field_len — Get the length (precision) of a field

### Description

```
odbc_field_len(Odbc\Result $statement, int $field): int|false
```

Gets the length of the field referenced by number in the given result identifier.

### Parameters

The ODBC result object.

The field number. Field numbering starts at 1.

### Return Values

Returns the field length, or false on error.

### Changelog

### See Also

- odbc_field_scale() - Get the scale of a field to get the scale of a floating point number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-field-len.php
