# SQLite3::lastInsertRowID

Source: https://devdocs.io/php/sqlite3.lastinsertrowid

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::lastInsertRowID — Returns the row ID of the most recent INSERT into the database

### Description

```
public SQLite3::lastInsertRowID(): int
```

Returns the row ID of the most recent INSERT into the database.

### Parameters

This function has no parameters.

### Return Values

Returns the row ID of the most recent INSERT into the database. If no successful INSERTs into rowid tables have ever occurred on this database connection, then SQLite3::lastInsertRowID() returns 0.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.lastinsertrowid.php
