# mysqli_stmt::store_result

Source: https://devdocs.io/php/mysqli-stmt.store-result

# mysqli_stmt_store_result

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::store_result -- mysqli_stmt_store_result — Stores a result set in an internal buffer

### Description

Object-oriented style

```
public mysqli_stmt::store_result(): bool
```

Procedural style

```
mysqli_stmt_store_result(mysqli_stmt $statement): bool
```

This function should be called for queries that successfully produce a result set (e.g. SELECT, SHOW, DESCRIBE, EXPLAIN) only if the complete result set needs to be buffered in PHP. Each subsequent mysqli_stmt_fetch() call will return buffered data.

Note:

It is unnecessary to call mysqli_stmt_store_result() for other queries, but if you do, it will not harm or cause any notable performance loss in all cases. You can detect whether the query produced a result set by checking if mysqli_stmt_result_metadata() returns false.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name LIMIT 20";
$stmt = $mysqli->prepare($query);
$stmt->execute();

/* store the result in an internal buffer */
$stmt->store_result();

printf("Number of rows: %d.\n", $stmt->num_rows);
```

Example #2 Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name LIMIT 20";
$stmt = mysqli_prepare($link, $query);
mysqli_stmt_execute($stmt);

/* store the result in an internal buffer */
mysqli_stmt_store_result($stmt);

printf("Number of rows: %d.\n", mysqli_stmt_num_rows($stmt));
```

The above examples will output:

```
Number of rows: 20.
```

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_result_metadata() - Returns result set metadata from a prepared statement
- mysqli_stmt_fetch() - Fetch results from a prepared statement into the bound variables

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.store-result.php
