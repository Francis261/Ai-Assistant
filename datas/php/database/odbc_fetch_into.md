# odbc_fetch_into

Source: https://devdocs.io/php/function.odbc-fetch-into

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_fetch_into — Fetch one result row into array

### Description

```
odbc_fetch_into(Odbc\Result $statement, array &$array, ?int $row = null): int|false
```

Fetch one result row into array.

### Parameters

The ODBC result object.

The result array that can be of any type since it will be converted to type array. The array will contain the column values starting at array index 0.

The row number.

### Return Values

Returns the number of columns in the result; false on error.

### Changelog

### Examples

Example #1 odbc_fetch_into() examples

```
<?php
$rc = odbc_fetch_into($res_id, $my_array);
?>
```

or

```
<?php
$rc = odbc_fetch_into($res_id, $my_array, 2);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-fetch-into.php
