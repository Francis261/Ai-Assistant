# SQLite3Stmt::close

Source: https://devdocs.io/php/sqlite3stmt.close

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::close — Closes the prepared statement

### Description

```
public SQLite3Stmt::close(): true
```

Closes the prepared statement.

Note: Note that all SQLite3Results that have been retrieved by executing this statement will be invalidated when the statement is closed.

### Parameters

This function has no parameters.

### Return Values

Always returns true.

### Errors/Exceptions

An Error is thrown if the method is called on an uninitialized object.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3stmt.close.php
