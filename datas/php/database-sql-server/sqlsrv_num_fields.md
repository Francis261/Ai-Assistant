# sqlsrv_num_fields

Source: https://devdocs.io/php/function.sqlsrv-num-fields

(No version information available, might only be in Git)

sqlsrv_num_fields — Retrieves the number of fields (columns) on a statement

### Description

```
sqlsrv_num_fields(resource $stmt): mixed
```

Retrieves the number of fields (columns) on a statement.

### Parameters

The statement for which the number of fields is returned. sqlsrv_num_fields() can be called on a statement before or after statement execution.

### Return Values

Returns the number of fields on success. Returns false otherwise.

### Examples

Example #1 sqlsrv_num_fields() example

```
<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
   die( print_r( sqlsrv_errors(), true));
}

$sql = "SELECT * FROM Table_1";
$stmt = sqlsrv_query($conn, $sql);
if( $stmt === false) {
   die( print_r( sqlsrv_errors(), true));
}

$numFields = sqlsrv_num_fields( $stmt );

while( sqlsrv_fetch( $stmt )) {
   // Iterate through the fields of each row.
   for($i = 0; $i < $numFields; $i++) { 
      echo sqlsrv_get_field($stmt, $i)." ";
   }
   echo "<br />";
}
?>
```

### See Also

- sqlsrv_field_metadata() - Retrieves metadata for the fields of a statement prepared by sqlsrv_prepare or sqlsrv_query
- sqlsrv_fetch() - Makes the next row in a result set available for reading
- sqlsrv_get_field() - Gets field data from the currently selected row

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-num-fields.php
