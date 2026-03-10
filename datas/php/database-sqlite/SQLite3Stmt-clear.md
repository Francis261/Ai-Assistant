# SQLite3Stmt::clear

Source: https://devdocs.io/php/sqlite3stmt.clear

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::clear — Clears all current bound parameters

### Description

```
public SQLite3Stmt::clear(): bool
```

Clears all current bound parameters (sets them to null).

This method needs to be used with SQLite3Stmt::reset(). If used alone, any call to SQLite3Stmt::bindValue() or SQLite3Stmt::bindParam() will be of no effect and all bound parameters will have the null value.

### Parameters

This function has no parameters.

### Return Values

Returns true on successful clearing of bound parameters, false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3stmt.clear.php
