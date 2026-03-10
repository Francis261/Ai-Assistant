# sqlsrv_rollback

Source: https://devdocs.io/php/function.sqlsrv-rollback

(No version information available, might only be in Git)

sqlsrv_rollback — Rolls back a transaction that was begun with sqlsrv_begin_transaction()

### Description

```
sqlsrv_rollback(resource $conn): bool
```

Rolls back a transaction that was begun with sqlsrv_begin_transaction() and returns the connection to auto-commit mode.

### Parameters

The connection resource returned by a call to sqlsrv_connect().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 sqlsrv_rollback() example

The following example demonstrates how to use sqlsrv_begin_transaction() together with sqlsrv_commit() and sqlsrv_rollback().

```
<?php
$serverName = "serverName\sqlexpress";
$connectionInfo = array( "Database"=>"dbName", "UID"=>"userName", "PWD"=>"password");
$conn = sqlsrv_connect( $serverName, $connectionInfo);
if( $conn === false ) {
    die( print_r( sqlsrv_errors(), true ));
}

/* Begin the transaction. */
if ( sqlsrv_begin_transaction( $conn ) === false ) {
     die( print_r( sqlsrv_errors(), true ));
}

/* Initialize parameter values. */
$orderId = 1; $qty = 10; $productId = 100;

/* Set up and execute the first query. */
$sql1 = "INSERT INTO OrdersTable (ID, Quantity, ProductID)
         VALUES (?, ?, ?)";
$params1 = array( $orderId, $qty, $productId );
$stmt1 = sqlsrv_query( $conn, $sql1, $params1 );

/* Set up and execute the second query. */
$sql2 = "UPDATE InventoryTable 
         SET Quantity = (Quantity - ?) 
         WHERE ProductID = ?";
$params2 = array($qty, $productId);
$stmt2 = sqlsrv_query( $conn, $sql2, $params2 );

/* If both queries were successful, commit the transaction. */
/* Otherwise, rollback the transaction. */
if( $stmt1 && $stmt2 ) {
     sqlsrv_commit( $conn );
     echo "Transaction committed.<br />";
} else {
     sqlsrv_rollback( $conn );
     echo "Transaction rolled back.<br />";
}
?>
```

### See Also

- sqlsrv_begin_transaction() - Begins a database transaction
- sqlsrv_commit() - Commits a transaction that was begun with sqlsrv_begin_transaction

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sqlsrv-rollback.php
