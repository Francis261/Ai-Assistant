# mysqli::change_user

Source: https://devdocs.io/php/mysqli.change-user

# mysqli_change_user

(PHP 5, PHP 7, PHP 8)

mysqli::change_user -- mysqli_change_user — Changes the user of the database connection

### Description

Object-oriented style

```
public mysqli::change_user(string $username, #[\SensitiveParameter] string $password, ?string $database): bool
```

Procedural style

```
mysqli_change_user(
 mysqli $mysql,
 string $username,
 #[\SensitiveParameter] string $password,
 ?string $database
): bool
```

Attempts to connect to the specified database using the provided credentials.

In comparison to mysqli::connect(), this method will not disconnect the current connection if the new connection cannot be opened.

In order to successfully change users a valid username and password parameters must be provided and that user must have sufficient permissions to access the desired database. If for any reason authorization fails, the current user authentication will remain.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The MySQL user name.

The MySQL password.

The database name. If null or an empty string is passed, the connection to the server will be opened with no default database.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 Resetting the connection session

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

$mysqli->query("SET @a:=1");

$mysqli->change_user("my_user", "my_password", "world");

$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database: %s\n", $row[0]);

$result = $mysqli->query("SELECT @a");
$row = $result->fetch_row();
if ($row[0] === null) {
    printf("Value of variable a is NULL\n");
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "test");

mysqli_query($link, "SET @a:=1");

mysqli_change_user($link, "my_user", "my_password", "world");

$result = mysqli_query($link, "SELECT DATABASE()");
$row = mysqli_fetch_row($result);
printf("Default database: %s\n", $row[0]);

$result = mysqli_query($link, "SELECT @a");
$row = mysqli_fetch_row($result);
if ($row[0] === null) {
    printf("Value of variable a is NULL\n");
}
```

The above examples will output:

```
Default database: world
Value of variable a is NULL
```

Example #2 If database is null the connection is opened without selecting any default database

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

$mysqli->change_user("my_user", "my_password", null);

$result = $mysqli->query("SELECT DATABASE()");
$row = $result->fetch_row();
printf("Default database: %s\n", $row[0]);
```

The above examples will output:

```
Default database:
```

### Notes

Note:

Using this command will always cause the current database connection to behave as if was a completely new database connection, regardless of if the operation was completed successfully. This reset includes performing a rollback on any active transactions, closing all temporary tables, and unlocking all locked tables.

### See Also

- mysqli_connect() - Alias of mysqli::__construct
- mysqli_select_db() - Selects the default database for database queries

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.change-user.php
