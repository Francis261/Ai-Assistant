# SQLite3Result::columnType

Source: https://devdocs.io/php/sqlite3result.columntype

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3Result::columnType — Returns the type of the nth column

### Description

```
public SQLite3Result::columnType(int $column): int|false
```

Returns the type of the column identified by column.

### Parameters

The numeric zero-based index of the column.

### Return Values

Returns the data type index of the column identified by column (one of SQLITE3_INTEGER, SQLITE3_FLOAT, SQLITE3_TEXT, SQLITE3_BLOB, or SQLITE3_NULL), or false if the column does not exist.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3result.columntype.php
