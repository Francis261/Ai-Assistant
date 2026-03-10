# odbc_columnprivileges

Source: https://devdocs.io/php/function.odbc-columnprivileges

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_columnprivileges — Lists columns and associated privileges for the given table

### Description

```
odbc_columnprivileges(
 Odbc\Connection $odbc,
 ?string $catalog,
 string $schema,
 string $table,
 string $column
): Odbc\Result|false
```

Lists columns and associated privileges for the given table.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The catalog ('qualifier' in ODBC 2 parlance).

The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

The table name. This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

The column name. This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

### Return Values

Returns an ODBC result object or false on failure. This result object can be used to fetch a list of columns and associated privileges.

The result set has the following columns:

- TABLE_CAT
- TABLE_SCHEM
- TABLE_NAME
- COLUMN_NAME
- GRANTOR
- GRANTEE
- PRIVILEGE
- IS_GRANTABLE

The result set is ordered by TABLE_CAT, TABLE_SCHEM, TABLE_NAME, COLUMN_NAME and PRIVILEGE.

### Changelog

### Examples

Example #1 List Privileges for a Column

```
<?php
$conn = odbc_connect($dsn, $user, $pass);
$privileges = odbc_columnprivileges($conn, 'TutorialDB', 'dbo', 'test', 'id');
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
    [TABLE_CAT] => TutorialDB
    [TABLE_SCHEM] => dbo
    [TABLE_NAME] => test
    [COLUMN_NAME] => id
    [GRANTOR] => dbo
    [GRANTEE] => dbo
    [PRIVILEGE] => INSERT
    [IS_GRANTABLE] => YES
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-columnprivileges.php
