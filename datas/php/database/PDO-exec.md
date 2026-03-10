# PDO::exec

Source: https://devdocs.io/php/pdo.exec

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::exec — Execute an SQL statement and return the number of affected rows

### Description

```
public PDO::exec(string $statement): int|false
```

PDO::exec() executes an SQL statement in a single function call, returning the number of rows affected by the statement.

PDO::exec() does not return results from a SELECT statement. For a SELECT statement that you only need to issue once during your program, consider issuing PDO::query(). For a statement that you need to issue multiple times, prepare a PDOStatement object with PDO::prepare() and issue the statement with PDOStatement::execute().

### Parameters

The SQL statement to prepare and execute.

Data inside the query should be properly escaped.

### Return Values

PDO::exec() returns the number of rows that were modified or deleted by the SQL statement you issued. If no rows were affected, PDO::exec() returns 0.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

The following example incorrectly relies on the return value of PDO::exec(), wherein a statement that affected 0 rows results in a call to die():

```
<?php
$db->exec() or die(print_r($db->errorInfo(), true)); // incorrect
?>
```

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Issuing a DELETE statement

Count the number of rows deleted by a DELETE statement with no WHERE clause.

```
<?php
$dbh = new PDO('odbc:sample', 'db2inst1', 'ibmdb2');

/* Delete all rows from the FRUIT table */
$count = $dbh->exec("DELETE FROM fruit");

/* Return number of rows that were deleted */
print "Deleted $count rows.\n";
?>
```

The above example will output:

```
Deleted 1 rows.
```

### See Also

- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDO::query() - Prepares and executes an SQL statement without placeholders
- PDOStatement::execute() - Executes a prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.exec.php
