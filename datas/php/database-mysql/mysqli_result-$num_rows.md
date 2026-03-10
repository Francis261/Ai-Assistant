# mysqli_result::$num_rows

Source: https://devdocs.io/php/mysqli-result.num-rows

# mysqli_num_rows

(PHP 5, PHP 7, PHP 8)

mysqli_result::$num_rows -- mysqli_num_rows — Gets the number of rows in the result set

### Description

Object-oriented style

Procedural style

```
mysqli_num_rows(mysqli_result $result): int|string
```

Returns the number of rows in the result set.

The behaviour of mysqli_num_rows() depends on whether buffered or unbuffered result sets are being used. This function returns 0 for unbuffered result sets unless all rows have been fetched from the server.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

### Return Values

An int representing the number of fetched rows. Returns 0 in unbuffered mode unless all rows have been fetched from the server.

Note:

If the number of rows is greater than PHP_INT_MAX, the number will be returned as a string.

### Examples

Example #1 Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$result = $mysqli->query("SELECT Code, Name FROM Country ORDER BY Name");

/* Get the number of rows in the result set */
$row_cnt = $result->num_rows;

printf("Result set has %d rows.\n", $row_cnt);
```

Example #2 Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$result = mysqli_query($link, "SELECT Code, Name FROM Country ORDER BY Name");

/* Get the number of rows in the result set */
$row_cnt = mysqli_num_rows($result);

printf("Result set has %d rows.\n", $row_cnt);
```

The above examples will output:

```
Result set has 239 rows.
```

### Notes

Note:

In contrast to the mysqli_stmt_num_rows() function, this function doesn't have object-oriented method variant. In the object-oriented style, use the getter property.

### See Also

- mysqli_affected_rows() - Gets the number of affected rows in a previous MySQL operation
- mysqli_store_result() - Transfers a result set from the last query
- mysqli_use_result() - Initiate a result set retrieval
- mysqli_query() - Performs a query on the database
- mysqli_stmt_num_rows() - Returns the number of rows fetched from the server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.num-rows.php
