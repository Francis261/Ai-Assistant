# mysqli::$sqlstate

Source: https://devdocs.io/php/mysqli.sqlstate

# mysqli_sqlstate

(PHP 5, PHP 7, PHP 8)

mysqli::$sqlstate -- mysqli_sqlstate — Returns the SQLSTATE error from previous MySQL operation

### Description

Object-oriented style

Procedural style

```
mysqli_sqlstate(mysqli $mysql): string
```

Returns a string containing the SQLSTATE error code for the last error. The error code consists of five characters. '00000' means no error. The values are specified by ANSI SQL and ODBC. For a list of possible values, see » http://dev.mysql.com/doc/mysql/en/error-handling.html.

Note:

Note that not all MySQL errors are yet mapped to SQLSTATE's. The value HY000 (general error) is used for unmapped errors.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns a string containing the SQLSTATE error code for the last error. The error code consists of five characters. '00000' means no error.

### Examples

Example #1 $mysqli->sqlstate example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* Table City already exists, so we should get an error */
try {
    $mysqli->query("CREATE TABLE City (ID INT, Name VARCHAR(30))");
} catch (mysqli_sql_exception) {
    printf("Error - SQLSTATE %s.\n", $mysqli->sqlstate);
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* Table City already exists, so we should get an error */
try {
    mysqli_query($link, "CREATE TABLE City (ID INT, Name VARCHAR(30))");
} catch (mysqli_sql_exception) {
    printf("Error - SQLSTATE %s.\n", mysqli_sqlstate($link));
}
```

The above examples will output:

```
Error - SQLSTATE 42S01.
```

### See Also

- mysqli_errno() - Returns the error code for the most recent function call
- mysqli_error() - Returns a string description of the last error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.sqlstate.php
