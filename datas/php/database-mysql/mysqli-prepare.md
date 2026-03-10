# mysqli::prepare

Source: https://devdocs.io/php/mysqli.prepare

# mysqli_prepare

(PHP 5, PHP 7, PHP 8)

mysqli::prepare -- mysqli_prepare — Prepares an SQL statement for execution

### Description

Object-oriented style

```
public mysqli::prepare(string $query): mysqli_stmt|false
```

Procedural style

```
mysqli_prepare(mysqli $mysql, string $query): mysqli_stmt|false
```

Prepares the SQL query, and returns a statement handle to be used for further operations on the statement. The query must consist of a single SQL statement.

The statement template can contain zero or more question mark (?) parameter markers⁠—also called placeholders. The parameter markers must be bound to application variables using mysqli_stmt_bind_param() before executing the statement.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The query, as a string. It must consist of a single SQL statement.

The SQL statement may contain zero or more parameter markers represented by question mark (?) characters at the appropriate positions.

Note:

The markers are legal only in certain places in SQL statements. For example, they are permitted in the VALUES() list of an INSERT statement (to specify column values for a row), or in a comparison with a column in a WHERE clause to specify a comparison value. However, they are not permitted for identifiers (such as table or column names).

### Return Values

mysqli_prepare() returns a statement object or false if an error occurred.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 mysqli::prepare() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$city = "Amersfoort";

/* create a prepared statement */
$stmt = $mysqli->prepare("SELECT District FROM City WHERE Name=?");

/* bind parameters for markers */
$stmt->bind_param("s", $city);

/* execute query */
$stmt->execute();

/* bind result variables */
$stmt->bind_result($district);

/* fetch value */
$stmt->fetch();

printf("%s is in district %s\n", $city, $district);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$city = "Amersfoort";

/* create a prepared statement */
$stmt = mysqli_prepare($link, "SELECT District FROM City WHERE Name=?");

/* bind parameters for markers */
mysqli_stmt_bind_param($stmt, "s", $city);

/* execute query */
mysqli_stmt_execute($stmt);

/* bind result variables */
mysqli_stmt_bind_result($stmt, $district);

/* fetch value */
mysqli_stmt_fetch($stmt);

printf("%s is in district %s\n", $city, $district);
```

The above examples will output:

```
Amersfoort is in district Utrecht
```

### See Also

- mysqli_stmt_execute() - Executes a prepared statement
- mysqli_stmt_fetch() - Fetch results from a prepared statement into the bound variables
- mysqli_stmt_bind_param() - Binds variables to a prepared statement as parameters
- mysqli_stmt_bind_result() - Binds variables to a prepared statement for result storage
- mysqli_stmt_get_result() - Gets a result set from a prepared statement as a mysqli_result object
- mysqli_stmt_close() - Closes a prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.prepare.php
