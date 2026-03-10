# odbc_field_name

Source: https://devdocs.io/php/function.odbc-field-name

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_field_name — Get the columnname

### Description

```
odbc_field_name(Odbc\Result $statement, int $field): string|false
```

Gets the name of the field occupying the given column number in the given result object.

### Parameters

The ODBC result object.

The field number. Field numbering starts at 1.

### Return Values

Returns the field name as a string, or false on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-field-name.php
