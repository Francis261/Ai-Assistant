# sqlsrv_close

Source: https://devdocs.io/php/function.sqlsrv-close

(No version information available, might only be in Git)

sqlsrv_close — Closes an open connection and releases resourses associated with the connection

### Description

```
sqlsrv_close(resource $conn): bool
```

Closes an open connection and releases resourses associated with the connection.

### Parameters

The connection to be closed.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 sqlsrv_close() example

```
<?php
$serverName = "serverName\sqlexpres";
$connOptions = array("UID"=>"username", "PWD"=>"password", "Database"=>"dbname");
$conn = sqlsrv_connect( $serverName, $connOptions );
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

//-------------------------------------
// Perform database operations here.
//-------------------------------------

// Close the connection.
sqlsrv_close( $conn );
?>
```

### See Also

- sqlsrv_connect() - Opens a connection to a Microsoft SQL Server database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-close.php
