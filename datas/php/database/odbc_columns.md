# odbc_columns

Source: https://devdocs.io/php/function.odbc-columns

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_columns — Lists the column names in specified tables

### Description

```
odbc_columns(
 Odbc\Connection $odbc,
 ?string $catalog = null,
 ?string $schema = null,
 ?string $table = null,
 ?string $column = null
): Odbc\Result|false
```

Lists all columns in the requested range.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The catalog ('qualifier' in ODBC 2 parlance).

The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

The table name. This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

The column name. This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

### Return Values

Returns an ODBC result object or false on failure.

The result set has the following columns:

- TABLE_CAT
- TABLE_SCHEM
- TABLE_NAME
- COLUMN_NAME
- DATA_TYPE
- TYPE_NAME
- COLUMN_SIZE
- BUFFER_LENGTH
- DECIMAL_DIGITS
- NUM_PREC_RADIX
- NULLABLE
- REMARKS
- COLUMN_DEF
- SQL_DATA_TYPE
- SQL_DATETIME_SUB
- CHAR_OCTET_LENGTH
- ORDINAL_POSITION
- IS_NULLABLE

The result set is ordered by TABLE_CAT, TABLE_SCHEM, TABLE_NAME and ORDINAL_POSITION.

### Changelog

### Examples

Example #1 List Columns of a Table

```
<?php
$conn = odbc_connect($dsn, $user, $pass);
$columns = odbc_columns($conn, 'TutorialDB', 'dbo', 'test', '%');
while (($row = odbc_fetch_array($columns))) {
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
    [DATA_TYPE] => 4
    [TYPE_NAME] => int
    [COLUMN_SIZE] => 10
    [BUFFER_LENGTH] => 4
    [DECIMAL_DIGITS] => 0
    [NUM_PREC_RADIX] => 10
    [NULLABLE] => 0
    [REMARKS] =>
    [COLUMN_DEF] =>
    [SQL_DATA_TYPE] => 4
    [SQL_DATETIME_SUB] =>
    [CHAR_OCTET_LENGTH] =>
    [ORDINAL_POSITION] => 1
    [IS_NULLABLE] => NO
)
```

### See Also

- odbc_columnprivileges() - Lists columns and associated privileges for the given table
- odbc_procedurecolumns() - Retrieve information about parameters to procedures

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-columns.php
