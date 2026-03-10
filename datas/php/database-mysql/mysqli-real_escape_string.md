# mysqli::real_escape_string

Source: https://devdocs.io/php/mysqli.real-escape-string

# mysqli_real_escape_string

(PHP 5, PHP 7, PHP 8)

mysqli::real_escape_string -- mysqli_real_escape_string — Escapes special characters in a string for use in an SQL statement, taking into account the current charset of the connection

### Description

Object-oriented style

```
public mysqli::real_escape_string(string $string): string
```

Procedural style

```
mysqli_real_escape_string(mysqli $mysql, string $string): string
```

This function is used to create a legal SQL string that you can use in an SQL statement. The given string is encoded to produce an escaped SQL string, taking into account the current character set of the connection.

# Security: the default character set

The character set must be set either at the server level, or with the API function mysqli_set_charset() for it to affect mysqli_real_escape_string(). See the concepts section on character sets for more information.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The string to be escaped.

Characters encoded are NUL (ASCII 0), \n, \r, \, ', ", and CTRL+Z.

### Return Values

Returns an escaped string.

### Examples

Example #1 mysqli::real_escape_string() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$city = "'s-Hertogenbosch";

/* this query with escaped $city will work */
$query = sprintf("SELECT CountryCode FROM City WHERE name='%s'",
    $mysqli->real_escape_string($city));
$result = $mysqli->query($query);
printf("Select returned %d rows.\n", $result->num_rows);

/* this query will fail, because we didn't escape $city */
$query = sprintf("SELECT CountryCode FROM City WHERE name='%s'", $city);
$result = $mysqli->query($query);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$city = "'s-Hertogenbosch";

/* this query with escaped $city will work */
$query = sprintf("SELECT CountryCode FROM City WHERE name='%s'",
    mysqli_real_escape_string($mysqli, $city));
$result = mysqli_query($mysqli, $query);
printf("Select returned %d rows.\n", mysqli_num_rows($result));

/* this query will fail, because we didn't escape $city */
$query = sprintf("SELECT CountryCode FROM City WHERE name='%s'", $city);
$result = mysqli_query($mysqli, $query);
```

The above examples will output something similar to:

```
Select returned 1 rows.

Fatal error: Uncaught mysqli_sql_exception: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 's-Hertogenbosch'' at line 1 in...
```

### See Also

- mysqli_set_charset() - Sets the client character set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.real-escape-string.php
