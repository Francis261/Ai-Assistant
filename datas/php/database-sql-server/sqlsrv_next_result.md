# sqlsrv_next_result

Source: https://devdocs.io/php/function.sqlsrv-next-result

(No version information available, might only be in Git)

sqlsrv_next_result — Makes the next result of the specified statement active

### Description

```
sqlsrv_next_result(resource $stmt): mixed
```

Makes the next result of the specified statement active. Results include result sets, row counts, and output parameters.

### Parameters

The statement on which the next result is being called.

### Return Values

Returns true if the next result was successfully retrieved, false if an error occurred, and null if there are no more results to retrieve.

### Examples

Example #1 sqlsrv_next_result() example

The following example executes a batch query that inserts into a table and then selects from the table. This produces two results on the statement: one for the rows affected by the INSERT and one for the rows returned by the SELECT. To get to the rows returned by the SELECT, sqlsrv_next_result() must be called to move past the first result.

```
<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array("Database"=>"dbName", "UID"=>"userName", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);

$query = "INSERT INTO Table_1 (id, data) VALUES (?,?); SELECT * FROM TABLE_1;";
$params = array(1, "some data");
$stmt = sqlsrv_query($conn, $query, $params);

// Consume the first result (rows affected by INSERT) without calling sqlsrv_next_result.
echo "Rows affected: ".sqlsrv_rows_affected($stmt)."<br />";

// Move to the next result and display results.
$next_result = sqlsrv_next_result($stmt);
if( $next_result ) {
   while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_ASSOC)){
      echo $row['id'].": ".$row['data']."<br />"; 
   }
} elseif( is_null($next_result)) {
     echo "No more results.<br />";
} else {
     die(print_r(sqlsrv_errors(), true));
}
?>
```

### See Also

- sqlsrv_query() - Prepares and executes a query
- sqlsrv_fetch_array() - Returns a row as an array
- sqlsrv_rows_affected() - Returns the number of rows modified by the last INSERT, UPDATE, or DELETE query executed

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-next-result.php
