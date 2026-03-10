# SQLite3::prepare

Source: https://devdocs.io/php/sqlite3.prepare

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::prepare — Prepares an SQL statement for execution

### Description

```
public SQLite3::prepare(string $query): SQLite3Stmt|false
```

Prepares an SQL statement for execution and returns an SQLite3Stmt object.

### Parameters

The SQL query to prepare.

### Return Values

Returns an SQLite3Stmt object on success or false on failure.

### Examples

Example #1 SQLite3::prepare() example

```
<?php
unlink('mysqlitedb.db');
$db = new SQLite3('mysqlitedb.db');

$db->exec('CREATE TABLE foo (id INTEGER, bar STRING)');
$db->exec("INSERT INTO foo (id, bar) VALUES (1, 'This is a test')");

$stmt = $db->prepare('SELECT bar FROM foo WHERE id=:id');
$stmt->bindValue(':id', 1, SQLITE3_INTEGER);

$result = $stmt->execute();
var_dump($result->fetchArray());
?>
```

### See Also

- SQLite3Stmt::paramCount() - Returns the number of parameters within the prepared statement
- SQLite3Stmt::bindValue() - Binds the value of a parameter to a statement variable
- SQLite3Stmt::bindParam() - Binds a parameter to a statement variable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.prepare.php
