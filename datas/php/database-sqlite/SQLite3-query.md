# SQLite3::query

Source: https://devdocs.io/php/sqlite3.query

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::query — Executes an SQL query

### Description

```
public SQLite3::query(string $query): SQLite3Result|false
```

Executes an SQL query, returning an SQLite3Result object. If the query does not yield a result (such as DML statements) the returned SQLite3Result object is not really usable. Use SQLite3::exec() for such queries instead.

### Parameters

The SQL query to execute.

### Return Values

Returns an SQLite3Result object, or false on failure.

### Examples

Example #1 SQLite3::query() example

```
<?php
$db = new SQLite3('mysqlitedb.db');

$results = $db->query('SELECT bar FROM foo');
while ($row = $results->fetchArray()) {
    var_dump($row);
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.query.php
