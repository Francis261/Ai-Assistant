# SQLite3::exec

Source: https://devdocs.io/php/sqlite3.exec

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::exec — Executes a result-less query against a given database

### Description

```
public SQLite3::exec(string $query): bool
```

Executes a result-less query against a given database.

Note: SQLite3 may need to create » temporary files during the execution of queries, so the respective directories may have to be writable.

### Parameters

The SQL query to execute (typically an INSERT, UPDATE, or DELETE query).

### Return Values

Returns true if the query succeeded, false on failure.

### Examples

Example #1 SQLite3::exec() example

```
<?php
$db = new SQLite3('mysqlitedb.db');

$db->exec('CREATE TABLE bar (bar TEXT)');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.exec.php
