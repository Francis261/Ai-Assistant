# PDOStatement::fetchColumn

Source: https://devdocs.io/php/pdostatement.fetchcolumn

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.9.0)

PDOStatement::fetchColumn — Returns a single column from the next row of a result set

### Description

```
public PDOStatement::fetchColumn(int $column = 0): mixed
```

Returns a single column from the next row of a result set or false if there are no more rows.

Note:

PDOStatement::fetchColumn() should not be used to retrieve boolean columns, as it is impossible to distinguish a value of false from there being no more rows to retrieve. Use PDOStatement::fetch() instead.

### Parameters

0-indexed number of the column you wish to retrieve from the row. If no value is supplied, PDOStatement::fetchColumn() fetches the first column.

### Return Values

PDOStatement::fetchColumn() returns a single column from the next row of a result set or false if there are no more rows.

There is no way to return another column from the same row if you use PDOStatement::fetchColumn() to retrieve data.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Return first column of the next row

```
<?php
$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

print "Fetch the first column from the first row in the result set:\n";
$result = $sth->fetchColumn();
print "name = $result\n";

print "Fetch the second column from the second row in the result set:\n";
$result = $sth->fetchColumn(1);
print "colour = $result\n";
?>
```

The above example will output:

```
Fetch the first column from the first row in the result set:
name = lemon
Fetch the second column from the second row in the result set:
colour = red
```

### See Also

- PDO::query() - Prepares and executes an SQL statement without placeholders
- PDOStatement::fetch() - Fetches the next row from a result set
- PDOStatement::fetchAll() - Fetches the remaining rows from a result set
- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::setFetchMode() - Set the default fetch mode for this statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.fetchcolumn.php
