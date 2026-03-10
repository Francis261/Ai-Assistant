# SQLite3Stmt::readOnly

Source: https://devdocs.io/php/sqlite3stmt.readonly

(PHP 5 >= 5.3.6, PHP 7, PHP 8)

SQLite3Stmt::readOnly — Returns whether a statement is definitely read only

### Description

```
public SQLite3Stmt::readOnly(): bool
```

Returns whether a statement is definitely read only. A statement is considered read only, if it makes no direct changes to the content of the database file. Note that user defined SQL functions might change the database indirectly as a side effect.

### Parameters

This function has no parameters.

### Return Values

Returns true if a statement is definitely read only, false otherwise.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3stmt.readonly.php
