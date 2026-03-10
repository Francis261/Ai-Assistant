# odbc_fetch_row

Source: https://devdocs.io/php/function.odbc-fetch-row

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_fetch_row — Fetch a row

### Description

```
odbc_fetch_row(Odbc\Result $statement, ?int $row = null): bool
```

Fetches a row of the data that was returned by odbc_do() or odbc_exec(). After odbc_fetch_row() is called, the fields of that row can be accessed with odbc_result().

### Parameters

The ODBC result object.

If row is not specified, odbc_fetch_row() will try to fetch the next row in the result set. Calls to odbc_fetch_row() with and without row can be mixed.

To step through the result more than once, you can call odbc_fetch_row() with row 1, and then continue doing odbc_fetch_row() without row to review the result. If a driver doesn't support fetching rows by number, the row parameter is ignored.

### Return Values

Returns true if there was a row, false otherwise.

### Errors/Exceptions

An E_WARNING is emitted when row is equal or less than zero.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-fetch-row.php
