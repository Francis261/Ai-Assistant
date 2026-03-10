# PDO::rollBack

Source: https://devdocs.io/php/pdo.rollback

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::rollBack — Rolls back a transaction

### Description

```
public PDO::rollBack(): bool
```

Rolls back the current transaction, as initiated by PDO::beginTransaction().

If the database was set to autocommit mode, this function will restore autocommit mode after it has rolled back the transaction.

Some databases, including MySQL, automatically issue an implicit COMMIT when a database definition language (DDL) statement such as DROP TABLE or CREATE TABLE is issued within a transaction. The implicit COMMIT will prevent you from rolling back any other changes within the transaction boundary.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws a PDOException if there is no active transaction.

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

- PDO::beginTransaction() - Initiates a transaction
- PDO::commit() - Commits a transaction
- Transactions and auto-commit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.rollback.php
