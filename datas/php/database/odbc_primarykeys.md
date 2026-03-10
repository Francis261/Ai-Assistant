# odbc_primarykeys

Source: https://devdocs.io/php/function.odbc-primarykeys

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_primarykeys — Gets the primary keys for a table

### Description

```
odbc_primarykeys(
 Odbc\Connection $odbc,
 ?string $catalog,
 string $schema,
 string $table
): Odbc\Result|false
```

Returns a result object that can be used to fetch the column names that comprise the primary key for a table.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The catalog ('qualifier' in ODBC 2 parlance).

The schema ('owner' in ODBC 2 parlance).

### Return Values

Returns an ODBC result object or false on failure.

The result set has the following columns:

- TABLE_CAT
- TABLE_SCHEM
- TABLE_NAME
- COLUMN_NAME
- KEY_SEQ
- PK_NAME

The result set is ordered by TABLE_CAT, TABLE_SCHEM, TABLE_NAME and KEY_SEQ.

### Changelog

### Examples

Example #1 List primary Keys of a Column

```
<?php
$conn = odbc_connect($dsn, $user, $pass);
$primarykeys = odbc_primarykeys($conn, 'TutorialDB', 'dbo', 'TEST');
while (($row = odbc_fetch_array($primarykeys))) {
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
    [TABLE_NAME] => TEST
    [COLUMN_NAME] => id
    [KEY_SEQ] => 1
    [PK_NAME] => PK__TEST__3213E83FE141F843
)
```

### See Also

- odbc_tables() - Get the list of table names stored in a specific data source
- odbc_foreignkeys() - Retrieves a list of foreign keys

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-primarykeys.php
