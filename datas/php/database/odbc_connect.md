# odbc_connect

Source: https://devdocs.io/php/function.odbc-connect

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_connect — Connect to a datasource

### Description

```
odbc_connect(
 string $dsn,
 ?string $user = null,
 ?string $password = null,
 int $cursor_option = SQL_CUR_USE_DRIVER
): Odbc\Connection|false
```

The connection id returned by this functions is needed by other ODBC functions. You can have multiple connections open at once as long as they either use different db or different credentials.

With some ODBC drivers, executing a complex stored procedure may fail with an error similar to: "Cannot open a cursor on a stored procedure that has anything other than a single select statement in it". Using SQL_CUR_USE_ODBC may avoid that error. Also, some drivers don't support the optional row_number parameter in odbc_fetch_row(). SQL_CUR_USE_ODBC might help in that case, too.

### Parameters

The database source name for the connection. Alternatively, a DSN-less connection string can be used.

The username. This parameter is ignored if dsn contains uid. To connect without specifying a user, use null.

The password. This parameter is ignored if dsn contains pwd. To connect without specifying a password, use null.

This sets the type of cursor to be used for this connection. This parameter is not normally needed, but can be useful for working around problems with some ODBC drivers.

- SQL_CUR_USE_IF_NEEDED
- SQL_CUR_USE_ODBC
- SQL_CUR_USE_DRIVER

### Return Values

Returns an ODBC connection, or false on failure.

### Changelog

### Examples

Example #1 DSN-less connections

```
<?php
// Microsoft SQL Server using the SQL Native Client 10.0 ODBC Driver - allows connection to SQL 7, 2000, 2005 and 2008
$connection = odbc_connect("Driver={SQL Server Native Client 10.0};Server=$server;Database=$database;", $user, $password);

// Microsoft Access
$connection = odbc_connect("Driver={Microsoft Access Driver (*.mdb)};Dbq=$mdbFilename", $user, $password);

// Microsoft Excel
$excelFile = realpath('C:/ExcelData.xls');
$excelDir = dirname($excelFile);
$connection = odbc_connect("Driver={Microsoft Excel Driver (*.xls)};DriverId=790;Dbq=$excelFile;DefaultDir=$excelDir" , '', '');
?>
```

### See Also

- For persistent connections: odbc_pconnect() - Open a persistent database connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-connect.php
