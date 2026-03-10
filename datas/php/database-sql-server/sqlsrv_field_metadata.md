# sqlsrv_field_metadata

Source: https://devdocs.io/php/function.sqlsrv-field-metadata

(No version information available, might only be in Git)

sqlsrv_field_metadata — Retrieves metadata for the fields of a statement prepared by sqlsrv_prepare() or sqlsrv_query()

### Description

```
sqlsrv_field_metadata(resource $stmt): mixed
```

Retrieves metadata for the fields of a statement prepared by sqlsrv_prepare() or sqlsrv_query(). sqlsrv_field_metadata() can be called on a statement before or after statement execution.

### Parameters

The statement resource for which metadata is returned.

### Return Values

Returns an array of arrays on success. Otherwise, false is returned. Each returned array is described by the following table:

### Examples

Example #1 sqlsrv_field_metadata() example

```
<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"AdventureWorks", "UID"=>"username", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
   die( print_r( sqlsrv_errors(), true));
}

$sql = "SELECT * FROM Table_1";
$stmt = sqlsrv_prepare( $conn, $sql );

foreach( sqlsrv_field_metadata( $stmt ) as $fieldMetadata ) {
    foreach( $fieldMetadata as $name => $value) {
       echo "$name: $value<br />";
    }
      echo "<br />";
}
?>
```

### See Also

- sqlsrv_client_info() - Returns information about the client and specified connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-field-metadata.php
