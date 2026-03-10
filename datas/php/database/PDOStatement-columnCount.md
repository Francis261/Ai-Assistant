# PDOStatement::columnCount

Source: https://devdocs.io/php/pdostatement.columncount

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.0)

PDOStatement::columnCount — Returns the number of columns in the result set

### Description

```
public PDOStatement::columnCount(): int
```

Use PDOStatement::columnCount() to return the number of columns in the result set represented by the PDOStatement object.

If the PDOStatement object was returned from PDO::query(), the column count is immediately available.

If the PDOStatement object was returned from PDO::prepare(), an accurate column count will not be available until you invoke PDOStatement::execute().

### Parameters

This function has no parameters.

### Return Values

Returns the number of columns in the result set represented by the PDOStatement object, even if the result set is empty. If there is no result set, PDOStatement::columnCount() returns 0.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Counting columns

This example demonstrates how PDOStatement::columnCount() operates with and without a result set.

```
<?php
$dbh = new PDO('odbc:sample', 'db2inst1', 'ibmdb2');

$sth = $dbh->prepare("SELECT name, colour FROM fruit");

/* Count the number of columns in the (non-existent) result set */
$colcount = $sth->columnCount();
print "Before execute(), result set has $colcount columns (should be 0)\n";

$sth->execute();

/* Count the number of columns in the result set */
$colcount = $sth->columnCount();
print "After execute(), result set has $colcount columns (should be 2)\n";

?>
```

The above example will output:

```
Before execute(), result set has 0 columns (should be 0)
After execute(), result set has 2 columns (should be 2)
```

### See Also

- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::execute() - Executes a prepared statement
- PDOStatement::rowCount() - Returns the number of rows affected by the last SQL statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.columncount.php
