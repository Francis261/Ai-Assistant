# odbc_num_rows

Source: https://devdocs.io/php/function.odbc-num-rows

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_num_rows — Number of rows in a result

### Description

```
odbc_num_rows(Odbc\Result $statement): int
```

Gets the number of rows in a result. For INSERT, UPDATE and DELETE statements odbc_num_rows() returns the number of rows affected. For a SELECT clause this can be the number of rows available.

### Parameters

The ODBC result object returned by odbc_exec().

### Return Values

Returns the number of rows in an ODBC result. This function will return -1 on error.

### Changelog

### Notes

Note:

Using odbc_num_rows() to determine the number of rows available after a SELECT will return -1 with many drivers.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-num-rows.php
