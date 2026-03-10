# SQLite3Stmt::getSQL

Source: https://devdocs.io/php/sqlite3stmt.getsql

(PHP 7 >= 7.4.0, PHP 8)

SQLite3Stmt::getSQL — Get the SQL of the statement

### Description

```
public SQLite3Stmt::getSQL(bool $expand = false): string|false
```

Retrieves the SQL of the prepared statement. If expand is false, the unmodified SQL is retrieved. If expand is true, all query parameters are replaced with their bound values, or with an SQL NULL, if not already bound.

### Parameters

Whether to retrieve the expanded SQL. Passing true is only supported as of libsqlite 3.14.

### Return Values

Returns the SQL of the prepared statement, or false on failure.

### Errors/Exceptions

If expand is true, but the libsqlite version is less than 3.14, an error of level E_WARNING or an Exception is issued, according to SQLite3::enableExceptions().

### Examples

Example #1 Inspecting the expanded SQL

```
<?php
$db = new SQLite3(':memory:');
$stmt = $db->prepare("SELECT :a, ?, :c");
$stmt->bindValue(':a', 'foo');
$answer = 42;
$stmt->bindParam(2, $answer);
var_dump($stmt->getSQL(true));
?>
```

The above example will output something similar to:

```
string(24) "SELECT 'foo', '42', NULL"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3stmt.getsql.php
