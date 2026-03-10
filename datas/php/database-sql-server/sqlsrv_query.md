# sqlsrv_query

Source: https://devdocs.io/php/function.sqlsrv-query

(No version information available, might only be in Git)

sqlsrv_query — Prepares and executes a query

### Description

```
sqlsrv_query(
 resource $conn,
 string $sql,
 array $params = ?,
 array $options = ?
): mixed
```

Prepares and executes a query.

### Parameters

A connection resource returned by sqlsrv_connect().

The string that defines the query to be prepared and executed.

An array specifying parameter information when executing a parameterized query. Array elements can be any of the following:

- A literal value
- A PHP variable
- An array with this structure: array($value [, $direction [, $phpType [, $sqlType]]])

An array specifying query property options. The supported keys are described in the following table:

### Return Values

Returns a statement resource on success and false if an error occurred.

### Examples

Example #1 sqlsrv_query() example

```
<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password" );
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$sql = "INSERT INTO Table_1 (id, data) VALUES (?, ?)";
$params = array(1, "some data");

$stmt = sqlsrv_query( $conn, $sql, $params);
if( $stmt === false ) {
     die( print_r( sqlsrv_errors(), true));
}
?>
```

### Notes

For statements that you plan to execute only once, use sqlsrv_query(). If you intend to re-execute a statement with different parameter values, use the combination of sqlsrv_prepare() and sqlsrv_execute().

### See Also

- sqlsrv_prepare() - Prepares a query for execution
- sqlsrv_execute() - Executes a statement prepared with sqlsrv_prepare

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-query.php
