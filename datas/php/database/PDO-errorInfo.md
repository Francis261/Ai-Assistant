# PDO::errorInfo

Source: https://devdocs.io/php/pdo.errorinfo

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::errorInfo — Fetch extended error information associated with the last operation on the database handle

### Description

```
public PDO::errorInfo(): array
```

### Parameters

This function has no parameters.

### Return Values

PDO::errorInfo() returns an array of error information about the last operation performed by this database handle. The array consists of at least the following fields:

Note:

If the SQLSTATE error code is not set or there is no driver-specific error, the elements following element 0 will be set to null.

PDO::errorInfo() only retrieves error information for operations performed directly on the database handle. If you create a PDOStatement object through PDO::prepare() or PDO::query() and invoke an error on the statement handle, PDO::errorInfo() will not reflect the error from the statement handle. You must call PDOStatement::errorInfo() to return the error information for an operation performed on a particular statement handle.

### Examples

Example #1 Displaying errorInfo() fields for a PDO_ODBC connection to a DB2 database

```
<?php
/* Provoke an error -- bogus SQL syntax */
$stmt = $dbh->prepare('bogus sql');
if (!$stmt) {
    echo "\nPDO::errorInfo():\n";
    print_r($dbh->errorInfo());
}
?>
```

The above example will output:

```
PDO::errorInfo():
Array
(
    [0] => HY000
    [1] => 1
    [2] => near "bogus": syntax error
)
```

### See Also

- PDO::errorCode() - Fetch the SQLSTATE associated with the last operation on the database handle
- PDOStatement::errorCode() - Fetch the SQLSTATE associated with the last operation on the statement handle
- PDOStatement::errorInfo() - Fetch extended error information associated with the last operation on the statement handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.errorinfo.php
