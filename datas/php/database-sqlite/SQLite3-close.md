# SQLite3::close

Source: https://devdocs.io/php/sqlite3.close

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::close — Closes the database connection

### Description

```
public SQLite3::close(): bool
```

Closes the database connection.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SQLite3::close() example

```
<?php
$db = new SQLite3('mysqlitedb.db');
$db->close();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.close.php
