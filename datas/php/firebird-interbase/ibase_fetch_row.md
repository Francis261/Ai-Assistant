# ibase_fetch_row

Source: https://devdocs.io/php/function.ibase-fetch-row

(PHP 5, PHP 7 < 7.4.0)

ibase_fetch_row — Fetch a row from an InterBase database

### Description

```
ibase_fetch_row(resource $result_identifier, int $fetch_flag = 0): array
```

ibase_fetch_row() fetches one row of data from the given result set.

Subsequent calls to ibase_fetch_row() return the next row in the result set, or false if there are no more rows.

### Parameters

An InterBase result identifier.

fetch_flag is a combination of the constants IBASE_TEXT and IBASE_UNIXTIME ORed together. Passing IBASE_TEXT will cause this function to return BLOB contents instead of BLOB ids. Passing IBASE_UNIXTIME will cause this function to return date/time values as Unix timestamps instead of as formatted strings.

### Return Values

Returns an array that corresponds to the fetched row, or false if there are no more rows. Each result column is stored in an array offset, starting at offset 0.

### See Also

- ibase_fetch_assoc() - Fetch a result row from a query as an associative array
- ibase_fetch_object() - Get an object from a InterBase database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-fetch-row.php
