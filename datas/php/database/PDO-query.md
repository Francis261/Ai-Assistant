# PDO::query

Source: https://devdocs.io/php/pdo.query

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.0)

PDO::query — Prepares and executes an SQL statement without placeholders

### Description

```
public PDO::query(string $query, ?int $fetchMode = null): PDOStatement|false
```

```
public PDO::query(string $query, ?int $fetchMode = PDO::FETCH_COLUMN, int $colno): PDOStatement|false
```

```
public PDO::query(
 string $query,
 ?int $fetchMode = PDO::FETCH_CLASS,
 string $classname,
 array $constructorArgs
): PDOStatement|false
```

```
public PDO::query(string $query, ?int $fetchMode = PDO::FETCH_INTO, object $object): PDOStatement|false
```

PDO::query() prepares and executes an SQL statement in a single function call, returning the statement as a PDOStatement object.

For a query that you need to issue multiple times, you will realize better performance if you prepare a PDOStatement object using PDO::prepare() and issue the statement with multiple calls to PDOStatement::execute().

If you do not fetch all of the data in a result set before issuing your next call to PDO::query(), your call may fail. Call PDOStatement::closeCursor() to release the database resources associated with the PDOStatement object before issuing your next call to PDO::query().

Note:

If the query contains placeholders, the statement must be prepared and executed separately using PDO::prepare() and PDOStatement::execute() methods.

### Parameters

The SQL statement to prepare and execute.

If the SQL contains placeholders, PDO::prepare() and PDOStatement::execute() must be used instead. Alternatively, the SQL can be prepared manually before calling PDO::query(), with the data properly formatted using PDO::quote() if the driver supports it.

The default fetch mode for the returned PDOStatement. It must be one of the PDO::FETCH_* constants.

If this argument is passed to the function, the remaining arguments will be treated as though PDOStatement::setFetchMode() was called on the resultant statement object. The subsequent arguments vary depending on the selected fetch mode.

### Return Values

Returns a PDOStatement object or false on failure.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 SQL with no placeholders can be executed using PDO::query()

```
<?php
$sql = 'SELECT name, color, calories FROM fruit ORDER BY name';
foreach ($conn->query($sql) as $row) {
    print $row['name'] . "\t";
    print $row['color'] . "\t";
    print $row['calories'] . "\n";
}
?>
```

The above example will output:

```
apple   red     150
banana  yellow  250
kiwi    brown   75
lemon   yellow  25
orange  orange  300
pear    green   150
watermelon      pink    90
```

### See Also

- PDO::exec() - Execute an SQL statement and return the number of affected rows
- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::execute() - Executes a prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.query.php
