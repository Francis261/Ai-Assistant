# PDO::beginTransaction

Source: https://devdocs.io/php/pdo.begintransaction

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::beginTransaction — Initiates a transaction

### Description

```
public PDO::beginTransaction(): bool
```

Turns off autocommit mode. While autocommit mode is turned off, changes made to the database via the PDO object instance are not committed until you end the transaction by calling PDO::commit(). Calling PDO::rollBack() will roll back all changes to the database and return the connection to autocommit mode.

Some databases, including MySQL, automatically issue an implicit COMMIT when a database definition language (DDL) statement such as DROP TABLE or CREATE TABLE is issued within a transaction. The implicit COMMIT will prevent you from rolling back any other changes within the transaction boundary.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws a PDOException if there is already a transaction started or the driver does not support transactions.

Note: An exception is raised even when the PDO::ATTR_ERRMODE attribute is not PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Roll back a transaction

The following example begins a transaction and issues two statements that modify the database before rolling back the changes. On MySQL, however, the DROP TABLE statement automatically commits the transaction so that none of the changes in the transaction are rolled back.

```
<?php
/* Begin a transaction, turning off autocommit */
$dbh->beginTransaction();

/* Change the database schema and data */
$sth = $dbh->exec("DROP TABLE fruit");
$sth = $dbh->exec("UPDATE dessert
    SET name = 'hamburger'");

/* Recognize mistake and roll back changes */
$dbh->rollBack();

/* Database connection is now back in autocommit mode */
?>
```

### See Also

- PDO::commit() - Commits a transaction
- PDO::rollBack() - Rolls back a transaction
- Transactions and auto-commit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.begintransaction.php
