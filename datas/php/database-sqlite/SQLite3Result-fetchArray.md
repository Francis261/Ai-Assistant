# SQLite3Result::fetchArray

Source: https://devdocs.io/php/sqlite3result.fetcharray

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3Result::fetchArray — Fetches a result row as an associative or numerically indexed array or both

### Description

```
public SQLite3Result::fetchArray(int $mode = SQLITE3_BOTH): array|false
```

Fetches a result row as an associative or numerically indexed array or both. By default, fetches as both.

### Parameters

Controls how the next row will be returned to the caller. This value must be one of either SQLITE3_ASSOC, SQLITE3_NUM, or SQLITE3_BOTH.

- SQLITE3_ASSOC: returns an array indexed by column name as returned in the corresponding result set
- SQLITE3_NUM: returns an array indexed by column number as returned in the corresponding result set, starting at column 0
- SQLITE3_BOTH: returns an array indexed by both column name and number as returned in the corresponding result set, starting at column 0

SQLITE3_ASSOC: returns an array indexed by column name as returned in the corresponding result set

SQLITE3_NUM: returns an array indexed by column number as returned in the corresponding result set, starting at column 0

SQLITE3_BOTH: returns an array indexed by both column name and number as returned in the corresponding result set, starting at column 0

### Return Values

Returns a result row as an associatively or numerically indexed array or both. Alternately will return false if there are no more rows.

The types of the values of the returned array are mapped from SQLite3 types as follows: integers are mapped to int if they fit into the range PHP_INT_MIN..PHP_INT_MAX, and to string otherwise. Floats are mapped to float, NULL values are mapped to null, and strings and blobs are mapped to string.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3result.fetcharray.php
