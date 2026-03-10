# mysqli_stmt::bind_result

Source: https://devdocs.io/php/mysqli-stmt.bind-result

# mysqli_stmt_bind_result

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::bind_result -- mysqli_stmt_bind_result — Binds variables to a prepared statement for result storage

### Description

Object-oriented style

```
public mysqli_stmt::bind_result(mixed &$var, mixed &...$vars): bool
```

Procedural style

```
mysqli_stmt_bind_result(mysqli_stmt $statement, mixed &$var, mixed &...$vars): bool
```

Binds columns in the result set to variables.

When mysqli_stmt_fetch() is called to fetch data, the MySQL client/server protocol places the data for the bound columns into the specified variables var/vars.

A column can be bound or rebound at any time, even after a result set has been partially retrieved. The new binding takes effect the next time mysqli_stmt_fetch() is called.

Note:

All columns must be bound after mysqli_stmt_execute() and prior to calling mysqli_stmt_fetch().

Note:

Depending on column types bound variables can silently change to the corresponding PHP type.

This function is useful for simple results. To retrieve iterable result set, or fetch each row as an array or object, use mysqli_stmt_get_result().

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

The first variable to be bound.

Further variables to be bound.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* prepare statement */
$stmt = $mysqli->prepare("SELECT Code, Name FROM Country ORDER BY Name LIMIT 5");
$stmt->execute();

/* bind variables to prepared statement */
$stmt->bind_result($col1, $col2);

/* fetch values */
while ($stmt->fetch()) {
    printf("%s %s\n", $col1, $col2);
}
```

Example #2 Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* prepare statement */
$stmt = mysqli_prepare($link, "SELECT Code, Name FROM Country ORDER BY Name LIMIT 5");
mysqli_stmt_execute($stmt);

/* bind variables to prepared statement */
mysqli_stmt_bind_result($stmt, $col1, $col2);

/* fetch values */
while (mysqli_stmt_fetch($stmt)) {
    printf("%s %s\n", $col1, $col2);
}
```

The above examples will output something similar to:

```
AFG Afghanistan
ALB Albania
DZA Algeria
ASM American Samoa
AND Andorra
```

### See Also

- mysqli_stmt_get_result() - Gets a result set from a prepared statement as a mysqli_result object
- mysqli_stmt_bind_param() - Binds variables to a prepared statement as parameters
- mysqli_stmt_execute() - Executes a prepared statement
- mysqli_stmt_fetch() - Fetch results from a prepared statement into the bound variables
- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_prepare() - Prepares an SQL statement for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.bind-result.php
