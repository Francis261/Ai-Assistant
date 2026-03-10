# odbc_field_num

Source: https://devdocs.io/php/function.odbc-field-num

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_field_num — Return column number

### Description

```
odbc_field_num(Odbc\Result $statement, string $field): int|false
```

Gets the number of the column slot that corresponds to the named field in the given result object.

### Parameters

The ODBC result object.

The field name.

### Return Values

Returns the field number as a integer, or false on error. Field numbering starts at 1.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-field-num.php
