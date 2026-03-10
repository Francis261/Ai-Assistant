# odbc_data_source

Source: https://devdocs.io/php/function.odbc-data-source

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

odbc_data_source — Returns information about available DSNs

### Description

```
odbc_data_source(Odbc\Connection $odbc, int $fetch_type): array|null|false
```

This function will return the list of available DSN (after calling it several times).

### Parameters

The ODBC connection object, see odbc_connect() for details.

The fetch_type can be one of two constant types: SQL_FETCH_FIRST, SQL_FETCH_NEXT. Use SQL_FETCH_FIRST the first time this function is called, thereafter use the SQL_FETCH_NEXT.

### Return Values

Returns false on error, an array upon success, and null after fetching the last available DSN.

### Changelog

### Examples

Example #1 List available DSNs

```
<?php
$conn = odbc_connect('dsn', 'user', 'pass');
$dsn_info = odbc_data_source($conn, SQL_FETCH_FIRST);
while ($dsn_info) {
    print_r($dsn_info);
    $dsn_info = odbc_data_source($conn, SQL_FETCH_NEXT);
}
?>
```

The above example will output something similar to:

```
Array
(
    [server] => dsn
    [description] => ODBC Driver 17 for SQL Server
)
Array
(
    [server] => other_dsn
    [description] => Microsoft Access Driver (*.mdb, *.accdb)
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-data-source.php
