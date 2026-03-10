# PDOStatement::rowCount

Source: https://devdocs.io/php/pdostatement.rowcount

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDOStatement::rowCount — Returns the number of rows affected by the last SQL statement

### Description

```
public PDOStatement::rowCount(): int
```

PDOStatement::rowCount() returns the number of rows affected by the last DELETE, INSERT, or UPDATE statement executed by the corresponding PDOStatement object.

For statements that produce result sets, such as SELECT, the behavior is undefined and can be different for each driver. Some databases may return the number of rows produced by that statement (e.g. MySQL in buffered mode), but this behaviour is not guaranteed for all databases and should not be relied on for portable applications.

Note:

This method returns "0" (zero) with PostgreSQL driver when setting the PDO::ATTR_CURSOR statement attribute to PDO::CURSOR_SCROLL.

### Parameters

This function has no parameters.

### Return Values

Returns the number of rows.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Return the number of deleted rows

PDOStatement::rowCount() returns the number of rows affected by a DELETE, INSERT, or UPDATE statement.

```
<?php
/* Delete all rows from the FRUIT table */
$del = $dbh->prepare('DELETE FROM fruit');
$del->execute();

/* Return number of rows that were deleted */
print "Return number of rows that were deleted:\n";
$count = $del->rowCount();
print "Deleted $count rows.\n";
?>
```

The above example will output something similar to:

```
Return number of rows that were deleted:
Deleted 9 rows.
```

Example #2 Counting rows returned by a SELECT statement

For most databases, PDOStatement::rowCount() does not return the number of rows affected by a SELECT statement. Instead, use PDO::query() to issue a SELECT COUNT(*) statement with the same predicates as your intended SELECT statement, then use PDOStatement::fetchColumn() to retrieve the number of matching rows.

```
<?php
$sql = "SELECT COUNT(*) FROM fruit WHERE calories > 100";
$res = $conn->query($sql);
$count = $res->fetchColumn();

print "There are " .  $count . " matching records.";
```

The above example will output something similar to:

```
There are 2 matching records.
```

### See Also

- PDOStatement::columnCount() - Returns the number of columns in the result set
- PDOStatement::fetchColumn() - Returns a single column from the next row of a result set
- PDO::query() - Prepares and executes an SQL statement without placeholders

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.rowcount.php
