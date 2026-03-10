# mysqli::select_db

Source: https://devdocs.io/php/mysqli.select-db

# mysqli_select_db

(PHP 5, PHP 7, PHP 8)

mysqli::select_db -- mysqli_select_db — Selects the default database for database queries

### Description

Object-oriented style

```
public mysqli::select_db(string $database): bool
```

Procedural style

```
mysqli_select_db(mysqli $mysql, string $database): bool
```

Selects the default database to be used when performing queries against the database connection.

Note:

This function should only be used to change the default database for the connection. You can select the default database with 4th parameter in mysqli_connect().

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The database name.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 mysqli::select_db() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

/* get the name of the current default database */
$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database is %s.\n", $row[0]);

/* change default database to "world" */
$mysqli->select_db("world");

/* get the name of the current default database */
$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database is %s.\n", $row[0]);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "test");

/* get the name of the current default database */
$result = mysqli_query($link, "SELECT DATABASE()");
$row = mysqli_fetch_row($result);
printf("Default database is %s.\n", $row[0]);

/* change default database to "world" */
mysqli_select_db($link, "world");

/* get the name of the current default database */
$result = mysqli_query($link, "SELECT DATABASE()");
$row = mysqli_fetch_row($result);
printf("Default database is %s.\n", $row[0]);
```

The above examples will output:

```
Default database is test.
Default database is world.
```

### See Also

- mysqli_connect() - Alias of mysqli::__construct
- mysqli_real_connect() - Opens a connection to a mysql server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.select-db.php
