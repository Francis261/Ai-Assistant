# sqlsrv_client_info

Source: https://devdocs.io/php/function.sqlsrv-client-info

(No version information available, might only be in Git)

sqlsrv_client_info — Returns information about the client and specified connection

### Description

```
sqlsrv_client_info(resource $conn): array
```

Returns information about the client and specified connection

### Parameters

The connection about which information is returned.

### Return Values

Returns an associative array with keys described in the table below. Returns false otherwise.

### Examples

Example #1 sqlsrv_client_info() example

```
<?php
$serverName = "serverName\sqlexpress";
$connOptions = array("UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connOptions );

if( $conn === false ) {
    die( print_r( sqlsrv_errors(), true));
}

if( $client_info = sqlsrv_client_info( $conn)) {
    foreach( $client_info as $key => $value) {
        echo $key.": ".$value."<br />";
    }
} else {
    echo "Error in retrieving client info.<br />";
}
?>
```

### See Also

- sqlsrv_server_info() - Returns information about the server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-client-info.php
