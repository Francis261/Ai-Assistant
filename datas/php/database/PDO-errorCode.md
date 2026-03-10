# PDO::errorCode

Source: https://devdocs.io/php/pdo.errorcode

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::errorCode — Fetch the SQLSTATE associated with the last operation on the database handle

### Description

```
public PDO::errorCode(): ?string
```

### Parameters

This function has no parameters.

### Return Values

Returns an SQLSTATE, a five characters alphanumeric identifier defined in the ANSI SQL-92 standard. Briefly, an SQLSTATE consists of a two characters class value followed by a three characters subclass value. A class value of 01 indicates a warning and is accompanied by a return code of SQL_SUCCESS_WITH_INFO. Class values other than '01', except for the class 'IM', indicate an error. The class 'IM' is specific to warnings and errors that derive from the implementation of PDO (or perhaps ODBC, if you're using the ODBC driver) itself. The subclass value '000' in any class indicates that there is no subclass for that SQLSTATE.

PDO::errorCode() only retrieves error codes for operations performed directly on the database handle. If you create a PDOStatement object through PDO::prepare() or PDO::query() and invoke an error on the statement handle, PDO::errorCode() will not reflect that error. You must call PDOStatement::errorCode() to return the error code for an operation performed on a particular statement handle.

Returns null if no operation has been run on the database handle.

### Examples

Example #1 Retrieving an SQLSTATE code

```
<?php
/* Provoke an error -- the BONES table does not exist */
$dbh->exec("INSERT INTO bones(skull) VALUES ('lucy')");

echo "\nPDO::errorCode(): ", $dbh->errorCode();
?>
```

The above example will output:

```
PDO::errorCode(): 42S02
```

### See Also

- PDO::errorInfo() - Fetch extended error information associated with the last operation on the database handle
- PDOStatement::errorCode() - Fetch the SQLSTATE associated with the last operation on the statement handle
- PDOStatement::errorInfo() - Fetch extended error information associated with the last operation on the statement handle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.errorcode.php
