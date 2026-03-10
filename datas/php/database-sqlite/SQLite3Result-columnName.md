# SQLite3Result::columnName

Source: https://devdocs.io/php/sqlite3result.columnname

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3Result::columnName — Returns the name of the nth column

### Description

```
public SQLite3Result::columnName(int $column): string|false
```

Returns the name of the column specified by the column. Note that the name of a result column is the value of the AS clause for that column, if there is an AS clause. If there is no AS clause then the name of the column is unspecified and may change from one release of libsqlite3 to the next.

### Parameters

The numeric zero-based index of the column.

### Return Values

Returns the string name of the column identified by column, or false if the column does not exist.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3result.columnname.php
