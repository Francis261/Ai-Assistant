# mysqli_stmt::$num_rows

Source: https://devdocs.io/php/mysqli-stmt.num-rows

# mysqli_stmt::num_rows

# mysqli_stmt_num_rows

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$num_rows -- mysqli_stmt::num_rows -- mysqli_stmt_num_rows — Returns the number of rows fetched from the server

### Description

Object-oriented style

```
public mysqli_stmt::num_rows(): int|string
```

Procedural style

```
mysqli_stmt_num_rows(mysqli_stmt $statement): int|string
```

Returns the number of rows buffered in the statement. This function will only work after mysqli_stmt_store_result() is called to buffer the entire result set in the statement handle.

This function returns 0 unless all rows have been fetched from the server.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

An int representing the number of buffered rows. Returns 0 in unbuffered mode unless all rows have been fetched from the server.

Note:

If the number of rows is greater than PHP_INT_MAX, the number will be returned as a string.

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

- mysqli_stmt_store_result() - Stores a result set in an internal buffer
- mysqli_stmt_affected_rows() - Returns the total number of rows changed, deleted, inserted, or matched by the last statement executed
- mysqli_prepare() - Prepares an SQL statement for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.num-rows.php
