# mysqli_stmt::$affected_rows

Source: https://devdocs.io/php/mysqli-stmt.affected-rows

# mysqli_stmt_affected_rows

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$affected_rows -- mysqli_stmt_affected_rows — Returns the total number of rows changed, deleted, inserted, or matched by the last statement executed

### Description

Object-oriented style

Procedural style

```
mysqli_stmt_affected_rows(mysqli_stmt $statement): int|string
```

Returns the number of rows affected by INSERT, UPDATE, or DELETE query. Works like mysqli_stmt_num_rows() for SELECT statements.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

An integer greater than zero indicates the number of rows affected or retrieved. Zero indicates that no records were updated for an UPDATE statement, no rows matched the WHERE clause in the query or that no query has yet been executed. -1 indicates that the query returned an error or that, for a SELECT query, mysqli_stmt_affected_rows() was called prior to calling mysqli_stmt_store_result().

Note:

If the number of affected rows is greater than maximum PHP int value, the number of affected rows will be returned as a string value.

### Examples

Example #1 mysqli_stmt_affected_rows() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* create temp table */
$mysqli->query("CREATE TEMPORARY TABLE myCountry LIKE Country");

$query = "INSERT INTO myCountry SELECT * FROM Country WHERE Code LIKE ?";

/* prepare statement */
$stmt = $mysqli->prepare($query);

/* Bind variable for placeholder */
$code = 'A%';
$stmt->bind_param("s", $code);

/* execute statement */
$stmt->execute();

printf("Rows inserted: %d\n", $stmt->affected_rows);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* create temp table */
mysqli_query($link, "CREATE TEMPORARY TABLE myCountry LIKE Country");

$query = "INSERT INTO myCountry SELECT * FROM Country WHERE Code LIKE ?";

/* prepare statement */
$stmt = mysqli_prepare($link, $query);

/* Bind variable for placeholder */
$code = 'A%';
mysqli_stmt_bind_param($stmt, "s", $code);

/* execute statement */
mysqli_stmt_execute($stmt);

printf("Rows inserted: %d\n", mysqli_stmt_affected_rows($stmt));
```

The above examples will output:

```
Rows inserted: 17
```

### See Also

- mysqli_stmt_num_rows() - Returns the number of rows fetched from the server
- mysqli_stmt_store_result() - Stores a result set in an internal buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.affected-rows.php
