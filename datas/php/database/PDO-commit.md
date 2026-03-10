# PDO::commit

Source: https://devdocs.io/php/pdo.commit

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::commit — Commits a transaction

### Description

```
public PDO::commit(): bool
```

Commits a transaction, returning the database connection to autocommit mode until the next call to PDO::beginTransaction() starts a new transaction.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Throws a PDOException if there is no active transaction.

Note: An exception is raised even when the PDO::ATTR_ERRMODE attribute is not PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Committing a basic transaction

```
<?php
/* Begin a transaction, turning off autocommit */
$dbh->beginTransaction();

/* Insert multiple records on an all-or-nothing basis */
$sql = 'INSERT INTO fruit
    (name, colour, calories)
    VALUES (?, ?, ?)';

$sth = $dbh->prepare($sql);

foreach ($fruits as $fruit) {
    $sth->execute(array(
        $fruit->name,
        $fruit->colour,
        $fruit->calories,
    ));
}

/* Commit the changes */
$dbh->commit();

/* Database connection is now back in autocommit mode */
?>
```

Example #2 Committing a DDL transaction

```
<?php
/* Begin a transaction, turning off autocommit */
$dbh->beginTransaction();

/* Change the database schema */
$sth = $dbh->exec("DROP TABLE fruit");

/* Commit the changes */
$dbh->commit();

/* Database connection is now back in autocommit mode */
?>
```

Note: Not all databases will allow transactions to operate on DDL statements: some will generate errors, whereas others (including MySQL) will automatically commit the transaction after the first DDL statement has been encountered.

### See Also

- PDO::beginTransaction() - Initiates a transaction
- PDO::rollBack() - Rolls back a transaction
- Transactions and auto-commit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.commit.php
