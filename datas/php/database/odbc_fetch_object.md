# odbc_fetch_object

Source: https://devdocs.io/php/function.odbc-fetch-object

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

odbc_fetch_object — Fetch a result row as an object

### Description

```
odbc_fetch_object(Odbc\Result $statement, ?int $row = null): stdClass|false
```

Fetch an object from an ODBC query.

### Parameters

The ODBC result object from odbc_exec().

Optionally choose which row number to retrieve.

### Return Values

Returns an object that corresponds to the fetched row, or false if there are no more rows.

### Changelog

### Notes

Note: This function exists when compiled with DBMaker, IBM DB2 or UnixODBC support.

### See Also

- odbc_fetch_row() - Fetch a row
- odbc_fetch_array() - Fetch a result row as an associative array
- odbc_num_rows() - Number of rows in a result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-fetch-object.php
