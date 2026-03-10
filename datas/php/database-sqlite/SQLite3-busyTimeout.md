# SQLite3::busyTimeout

Source: https://devdocs.io/php/sqlite3.busytimeout

(PHP 5 >= 5.3.3, PHP 7, PHP 8)

SQLite3::busyTimeout — Sets the busy connection handler

### Description

```
public SQLite3::busyTimeout(int $milliseconds): bool
```

Sets a busy handler that will sleep until the database is not locked or the timeout is reached.

### Parameters

The milliseconds to sleep. Setting this value to a value less than or equal to zero, will turn off an already set timeout handler.

### Return Values

Returns true on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.busytimeout.php
