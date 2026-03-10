# PDOStatement::closeCursor

Source: https://devdocs.io/php/pdostatement.closecursor

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.9.0)

PDOStatement::closeCursor — Closes the cursor, enabling the statement to be executed again

### Description

```
public PDOStatement::closeCursor(): bool
```

PDOStatement::closeCursor() frees up the connection to the server so that other SQL statements may be issued, but leaves the statement in a state that enables it to be executed again.

This method is useful for database drivers that do not support executing a PDOStatement object when a previously executed PDOStatement object still has unfetched rows. If your database driver suffers from this limitation, the problem may manifest itself in an out-of-sequence error.

PDOStatement::closeCursor() is implemented either as an optional driver specific method (allowing for maximum efficiency), or as the generic PDO fallback if no driver specific function is installed. The PDO generic fallback is semantically the same as writing the following code in your PHP script:

```
<?php
do {
    while ($stmt->fetch())
        ;
    if (!$stmt->nextRowset())
        break;
} while (true);
?>
```

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 A PDOStatement::closeCursor() example

In the following example, the $stmt PDOStatement object returns multiple rows but the application fetches only the first row, leaving the PDOStatement object in a state of having unfetched rows. To ensure that the application will work with all database drivers, the author inserts a call to PDOStatement::closeCursor() on $stmt before executing the $otherStmt PDOStatement object.

```
<?php
/* Create a PDOStatement object */
$stmt = $dbh->prepare('SELECT foo FROM bar');

/* Create a second PDOStatement object */
$otherStmt = $dbh->prepare('SELECT foobaz FROM foobar');

/* Execute the first statement */
$stmt->execute();

/* Fetch only the first row from the results */
$stmt->fetch();

/* The following call to closeCursor() may be required by some drivers */
$stmt->closeCursor();

/* Now we can execute the second statement */
$otherStmt->execute();
?>
```

### See Also

- PDOStatement::execute() - Executes a prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.closecursor.php
