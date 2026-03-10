# odbc_tableprivileges

Source: https://devdocs.io/php/function.odbc-tableprivileges

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_tableprivileges — Lists tables and the privileges associated with each table

### Description

```
odbc_tableprivileges(
 Odbc\Connection $odbc,
 ?string $catalog,
 string $schema,
 string $table
): Odbc\Result|false
```

Lists tables in the requested range and the privileges associated with each table.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The catalog ('qualifier' in ODBC 2 parlance).

The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

The name. This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

### Return Values

Returns an ODBC result object or false on failure.

The result set has the following columns:

- TABLE_CAT
- TABLE_SCHEM
- TABLE_NAME
- GRANTOR
- GRANTEE
- PRIVILEGE
- IS_GRANTABLE

The result set is ordered by TABLE_CAT, TABLE_SCHEM, TABLE_NAME, PRIVILEGE and GRANTEE.

### Changelog

### Examples

Example #1 List Privileges of a Table

```
<?php
$conn = odbc_connect($dsn, $user, $pass);
$privileges = odbc_tableprivileges($conn, 'SalesOrders', 'dbo', 'Orders');
while (($row = odbc_fetch_array($privileges))) {
    print_r($row);
    break; // further rows omitted for brevity
}
?>
```

The above example will output something similar to:

```
Array
(
    [TABLE_CAT] => SalesOrders
    [TABLE_SCHEM] => dbo
    [TABLE_NAME] => Orders
    [GRANTOR] => dbo
    [GRANTEE] => dbo
    [PRIVILEGE] => DELETE
    [IS_GRANTABLE] => YES
)
```

### See Also

- odbc_tables() - Get the list of table names stored in a specific data source

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-tableprivileges.php
