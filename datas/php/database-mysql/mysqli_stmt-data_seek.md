# mysqli_stmt::data_seek

Source: https://devdocs.io/php/mysqli-stmt.data-seek

# mysqli_stmt_data_seek

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::data_seek -- mysqli_stmt_data_seek — Adjusts the result pointer to an arbitrary row in the buffered result

### Description

Object-oriented style

```
public mysqli_stmt::data_seek(int $offset): void
```

Procedural style

```
mysqli_stmt_data_seek(mysqli_stmt $statement, int $offset): void
```

This function moves the result set pointer of the buffered result set to an arbitrary row specified by the offset parameter.

This function works only on the buffered internal result set. mysqli_stmt_store_result() must be called prior to mysqli_stmt_data_seek().

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

Must be between zero and the total number of rows minus one (0.. mysqli_stmt_num_rows() - 1).

### Return Values

No value is returned.

### Examples

Example #1 Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name";
$stmt = $mysqli->prepare($query);
$stmt->execute();

$stmt->bind_result($name, $code);

$stmt->store_result();

/* seek to row no. 400 */
$stmt->data_seek(399);

$stmt->fetch();

printf("City: %s  Countrycode: %s\n", $name, $code);
```

Example #2 Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name";
$stmt = mysqli_prepare($link, $query);

mysqli_stmt_execute($stmt);

mysqli_stmt_bind_result($stmt, $name, $code);

mysqli_stmt_store_result($stmt);

/* seek to row no. 400 */
mysqli_stmt_data_seek($stmt, 399);

mysqli_stmt_fetch($stmt);

printf("City: %s  Countrycode: %s\n", $name, $code);
```

The above examples will output:

```
City: Benin City  Countrycode: NGA
```

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_store_result() - Stores a result set in an internal buffer
- mysqli_stmt_num_rows() - Returns the number of rows fetched from the server
- mysqli_data_seek() - Adjusts the result pointer to an arbitrary row in the result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.data-seek.php
