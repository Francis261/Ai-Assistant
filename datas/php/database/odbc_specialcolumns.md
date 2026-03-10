# odbc_specialcolumns

Source: https://devdocs.io/php/function.odbc-specialcolumns

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_specialcolumns — Retrieves special columns

### Description

```
odbc_specialcolumns(
 Odbc\Connection $odbc,
 int $type,
 ?string $catalog,
 string $schema,
 string $table,
 int $scope,
 int $nullable
): Odbc\Result|false
```

Retrieves either the optimal set of columns that uniquely identifies a row in the table, or columns that are automatically updated when any value in the row is updated by a transaction.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The catalog ('qualifier' in ODBC 2 parlance).

The schema ('owner' in ODBC 2 parlance).

The table.

The scope, which orders the result set. One of SQL_SCOPE_CURROW, SQL_SCOPE_TRANSACTION or SQL_SCOPE_SESSION.

Determines whether to return special columns that can have a NULL value. One of SQL_NO_NULLS or SQL_NULLABLE.

### Return Values

Returns an ODBC result object or false on failure.

The result set has the following columns:

- SCOPE
- COLUMN_NAME
- DATA_TYPE
- TYPE_NAME
- COLUMN_SIZE
- BUFFER_LENGTH
- DECIMAL_DIGITS
- PSEUDO_COLUMN

The result set is ordered by SCOPE.

### Changelog

### See Also

- odbc_tables() - Get the list of table names stored in a specific data source

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-specialcolumns.php
