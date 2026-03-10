# odbc_procedures

Source: https://devdocs.io/php/function.odbc-procedures

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_procedures — Get the list of procedures stored in a specific data source

### Description

```
odbc_procedures(
 Odbc\Connection $odbc,
 ?string $catalog = null,
 ?string $schema = null,
 ?string $procedure = null
): Odbc\Result|false
```

Lists all procedures in the requested range.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The catalog ('qualifier' in ODBC 2 parlance).

The schema ('owner' in ODBC 2 parlance). This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

The name. This parameter accepts the following search patterns: % to match zero or more characters, and _ to match a single character.

### Return Values

Returns an ODBC result object containing the information or false on failure.

The result set has the following columns:

- PROCEDURE_CAT
- PROCEDURE_SCHEM
- PROCEDURE_NAME
- NUM_INPUT_PARAMS
- NUM_OUTPUT_PARAMS
- NUM_RESULT_SETS
- REMARKS
- PROCEDURE_TYPE

The result set is ordered by PROCEDURE_CAT, PROCEDURE_SCHEMA and PROCEDURE_NAME.

### Changelog

### Examples

Example #1 List stored Procedures of a Database

```
<?php
$conn = odbc_connect($dsn, $user, $pass);
$procedures = odbc_procedures($conn, $catalog, $schema, '%');
while (($row = odbc_fetch_array($procedures))) {
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
    [NUM_INPUT_PARAMS] => -1
    [NUM_OUTPUT_PARAMS] => -1
    [NUM_RESULT_SETS] => -1
    [REMARKS] =>
    [PROCEDURE_TYPE] => 2
)
```

### See Also

- odbc_procedurecolumns() - Retrieve information about parameters to procedures
- odbc_tables() - Get the list of table names stored in a specific data source

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-procedures.php
