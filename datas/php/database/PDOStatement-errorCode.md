# PDOStatement::errorCode

Source: https://devdocs.io/php/pdostatement.errorcode

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDOStatement::errorCode — Fetch the SQLSTATE associated with the last operation on the statement handle

### Description

```
public PDOStatement::errorCode(): ?string
```

### Parameters

This function has no parameters.

### Return Values

Identical to PDO::errorCode(), except that PDOStatement::errorCode() only retrieves error codes for operations performed with PDOStatement objects.

### Examples

Example #1 Retrieving an SQLSTATE code

```
<?php
/* Provoke an error -- the BONES table does not exist */
$err = $dbh->prepare('SELECT skull FROM bones');
$err->execute();

echo "\nPDOStatement::errorCode(): ";
print $err->errorCode();
?>
```

The above example will output:

```
PDOStatement::errorCode(): 42S02
```

### See Also

- PDO::errorCode() - Fetch the SQLSTATE associated with the last operation on the database handle
- PDO::errorInfo() - Fetch extended error information associated with the last operation on the database handle
- PDOStatement::errorInfo() - Fetch extended error information associated with the last operation on the statement handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.errorcode.php
