# odbc_procedurecolumns

Source: https://devdocs.io/php/function.odbc-procedurecolumns

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_procedurecolumns — Retrieve information about parameters to procedures

### Description

```
odbc_procedurecolumns(
 Odbc\Connection $odbc,
 ?string $catalog = null,
 ?string $schema = null,
 ?string $procedure = null,
 ?string $column = null
): Odbc\Result|false
```

Retrieve information about parameters to procedures.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The catalog ('qualifier' in ODBC 2 parlance).

The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

The proc. This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

The column. This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

### Return Values

Returns the list of input and output parameters, as well as the columns that make up the result set for the specified procedures. Returns an ODBC result object or false on failure.

The result set has the following columns:

- PROCEDURE_CAT
- PROCEDURE_SCHEM
- PROCEDURE_NAME
- COLUMN_NAME
- COLUMN_TYPE
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

The result set is ordered by PROCEDURE_CAT, PROCEDURE_SCHEM, PROCEDURE_NAME and COLUMN_TYPE.

### Changelog

### Examples

Example #1 List Columns of a stored Procedure

```
<?php
$conn = odbc_connect($dsn, $user, $pass);
$columns = odbc_procedurecolumns($conn, 'TutorialDB', 'dbo', 'GetEmployeeSalesYTD;1', '%');
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
    [PROCEDURE_CAT] => TutorialDB
    [PROCEDURE_SCHEM] => dbo
    [PROCEDURE_NAME] => GetEmployeeSalesYTD;1
    [COLUMN_NAME] => @SalesPerson
    [COLUMN_TYPE] => 1
    [DATA_TYPE] => -9
    [TYPE_NAME] => nvarchar
    [COLUMN_SIZE] => 50
    [BUFFER_LENGTH] => 100
    [DECIMAL_DIGITS] =>
    [NUM_PREC_RADIX] =>
    [NULLABLE] => 1
    [REMARKS] =>
    [COLUMN_DEF] =>
    [SQL_DATA_TYPE] => -9
    [SQL_DATETIME_SUB] =>
    [CHAR_OCTET_LENGTH] => 100
    [ORDINAL_POSITION] => 1
    [IS_NULLABLE] => YES
)
```

### See Also

- odbc_columns() - Lists the column names in specified tables

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-procedurecolumns.php
