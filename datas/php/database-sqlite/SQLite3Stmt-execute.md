# SQLite3Stmt::execute

Source: https://devdocs.io/php/sqlite3stmt.execute

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::execute — Executes a prepared statement and returns a result set object

### Description

```
public SQLite3Stmt::execute(): SQLite3Result|false
```

Executes a prepared statement and returns a result set object.

Result set objects retrieved by calling this method on the same statement object are not independent, but rather share the same underlying structure. Therefore it is recommended to call SQLite3Result::finalize(), before calling SQLite3Stmt::execute() on the same statement object again.

### Parameters

This function has no parameters.

### Return Values

Returns an SQLite3Result object on successful execution of the prepared statement, false on failure.

### See Also

- SQLite3::prepare() - Prepares an SQL statement for execution
- SQLite3Stmt::bindValue() - Binds the value of a parameter to a statement variable
- SQLite3Stmt::bindParam() - Binds a parameter to a statement variable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3stmt.execute.php
