# sqlsrv_errors

Source: https://devdocs.io/php/function.sqlsrv-errors

(No version information available, might only be in Git)

sqlsrv_errors — Returns error and warning information about the last SQLSRV operation performed

### Description

```
sqlsrv_errors(int $errorsOrWarnings = ?): mixed
```

Returns error and warning information about the last SQLSRV operation performed.

### Parameters

Determines whether error information, warning information, or both are returned. If this parameter is not supplied, both error information and warning information are returned. The following are the supported values for this parameter: SQLSRV_ERR_ALL, SQLSRV_ERR_ERRORS, SQLSRV_ERR_WARNINGS.

### Return Values

If errors and/or warnings occurred on the last sqlsrv operation, an array of arrays containing error information is returned. If no errors and/or warnings occurred on the last sqlsrv operation, null is returned. The following table describes the structure of the returned arrays:

### Examples

Example #1 functionname() example

```
<?php
$serverName = "serverName/sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
     die( print_r( sqlsrv_errors(), true));
}

/* Set up a query to select an invalid column name. */
$sql = "SELECT BadColumnName FROM Table_1";

/* Execution of the query will fail because of the bad column name. */
$stmt = sqlsrv_query( $conn, $sql );
if( $stmt === false ) {
    if( ($errors = sqlsrv_errors() ) != null) {
        foreach( $errors as $error ) {
            echo "SQLSTATE: ".$error[ 'SQLSTATE']."<br />";
            echo "code: ".$error[ 'code']."<br />";
            echo "message: ".$error[ 'message']."<br />";
        }
    }
}
?>
```

### Notes

By default, warnings generated on a call to any SQLSRV function are treated as errors. This means that if a warning occurs on a call to a SQLSRV function, the function returns false. However, warnings that correspond to SQLSTATE values 01000, 01001, 01003, and 01S02 are never treated as errors. For information about changing this behavior, see sqlsrv_configure() and the WarningsReturnAsErrors setting.

### See Also

- sqlsrv_configure() - Changes the driver error handling and logging configurations

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-errors.php
