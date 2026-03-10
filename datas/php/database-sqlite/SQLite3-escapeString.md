# SQLite3::escapeString

Source: https://devdocs.io/php/sqlite3.escapestring

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::escapeString — Returns a string that has been properly escaped

### Description

```
public static SQLite3::escapeString(string $string): string
```

Returns a string that has been properly escaped for safe inclusion in an SQL statement.

This function is not (yet) binary safe!

To properly handle BLOB fields which may contain NUL characters, use SQLite3Stmt::bindParam() instead.

### Parameters

The string to be escaped.

### Return Values

Returns a properly escaped string that may be used safely in an SQL statement.

### Notes

addslashes() should NOT be used to quote your strings for SQLite queries; it will lead to strange results when retrieving your data.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.escapestring.php
