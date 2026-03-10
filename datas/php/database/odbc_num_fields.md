# odbc_num_fields

Source: https://devdocs.io/php/function.odbc-num-fields

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_num_fields — Number of columns in a result

### Description

```
odbc_num_fields(Odbc\Result $statement): int
```

Gets the number of fields (columns) in an ODBC result.

### Parameters

The ODBC result object returned by odbc_exec().

### Return Values

Returns the number of fields, or -1 on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-num-fields.php
