# PDOStatement::errorInfo

Source: https://devdocs.io/php/pdostatement.errorinfo

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDOStatement::errorInfo — Fetch extended error information associated with the last operation on the statement handle

### Description

```
public PDOStatement::errorInfo(): array
```

### Parameters

This function has no parameters.

### Return Values

PDOStatement::errorInfo() returns an array of error information about the last operation performed by this statement handle. The array consists of at least the following fields:

### Examples

Example #1 Displaying errorInfo() fields for a PDO_ODBC connection to a DB2 database

```
<?php
/* Provoke an error -- the BONES table does not exist */
$sth = $dbh->prepare('SELECT skull FROM bones');
$sth->execute();

echo "\nPDOStatement::errorInfo():\n";
$arr = $sth->errorInfo();
print_r($arr);
?>
```

The above example will output:

```
PDOStatement::errorInfo():
Array
(
    [0] => 42S02
    [1] => -204
    [2] => [IBM][CLI Driver][DB2/LINUX] SQL0204N  "DANIELS.BONES" is an undefined name.  SQLSTATE=42704
)
```

### See Also

- PDO::errorCode() - Fetch the SQLSTATE associated with the last operation on the database handle
- PDO::errorInfo() - Fetch extended error information associated with the last operation on the database handle
- PDOStatement::errorCode() - Fetch the SQLSTATE associated with the last operation on the statement handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.errorinfo.php
