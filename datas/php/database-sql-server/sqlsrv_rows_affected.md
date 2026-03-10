# sqlsrv_rows_affected

Source: https://devdocs.io/php/function.sqlsrv-rows-affected

(No version information available, might only be in Git)

sqlsrv_rows_affected — Returns the number of rows modified by the last INSERT, UPDATE, or DELETE query executed

### Description

```
sqlsrv_rows_affected(resource $stmt): int|false
```

Returns the number of rows modified by the last INSERT, UPDATE, or DELETE query executed. For information about the number of rows returned by a SELECT query, see sqlsrv_num_rows().

### Parameters

The executed statement resource for which the number of affected rows is returned.

### Return Values

Returns the number of rows affected by the last INSERT, UPDATE, or DELETE query. If no rows were affected, 0 is returned. If the number of affected rows cannot be determined, -1 is returned. If an error occurred, false is returned.

### Examples

Example #1 sqlsrv_rows_affected() example

```
<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password" );
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

$sql = "UPDATE Table_1 SET data = ? WHERE id = ?";

$params = array("updated data", 1);

$stmt = sqlsrv_query( $conn, $sql, $params);

$rows_affected = sqlsrv_rows_affected( $stmt);
if( $rows_affected === false) {
     die( print_r( sqlsrv_errors(), true));
} elseif( $rows_affected == -1) {
      echo "No information available.<br />";
} else {
      echo $rows_affected." rows were updated.<br />";
}
?>
```

### See Also

- sqlsrv_num_rows() - Retrieves the number of rows in a result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-rows-affected.php
