# mysqli_stmt::bind_param

Source: https://devdocs.io/php/mysqli-stmt.bind-param

# mysqli_stmt_bind_param

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::bind_param -- mysqli_stmt_bind_param — Binds variables to a prepared statement as parameters

### Description

Object-oriented style

```
public mysqli_stmt::bind_param(string $types, mixed &$var, mixed &...$vars): bool
```

Procedural style

```
mysqli_stmt_bind_param(
 mysqli_stmt $statement,
 string $types,
 mixed &$var,
 mixed &...$vars
): bool
```

Bind variables for the parameter markers in the SQL statement prepared by mysqli_prepare() or mysqli_stmt_prepare().

Note:

If data size of a variable exceeds max. allowed packet size (max_allowed_packet), you have to specify b in types and use mysqli_stmt_send_long_data() to send the data in packets.

Note:

Care must be taken when using mysqli_stmt_bind_param() in conjunction with call_user_func_array(). Note that mysqli_stmt_bind_param() requires parameters to be passed by reference, whereas call_user_func_array() can accept as a parameter a list of variables that can represent references or values.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

A string that contains one or more characters which specify the types for the corresponding bind variables:

The number of variables and length of string types must match the parameters in the statement.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 mysqli_stmt::bind_param() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'world');

$stmt = $mysqli->prepare("INSERT INTO CountryLanguage VALUES (?, ?, ?, ?)");
$stmt->bind_param('sssd', $code, $language, $official, $percent);

$code = 'DEU';
$language = 'Bavarian';
$official = "F";
$percent = 11.2;

$stmt->execute();

printf("%d row inserted.\n", $stmt->affected_rows);

/* Clean up table CountryLanguage */
$mysqli->query("DELETE FROM CountryLanguage WHERE Language='Bavarian'");
printf("%d row deleted.\n", $mysqli->affected_rows);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect('localhost', 'my_user', 'my_password', 'world');

$stmt = mysqli_prepare($link, "INSERT INTO CountryLanguage VALUES (?, ?, ?, ?)");
mysqli_stmt_bind_param($stmt, 'sssd', $code, $language, $official, $percent);

$code = 'DEU';
$language = 'Bavarian';
$official = "F";
$percent = 11.2;

mysqli_stmt_execute($stmt);

printf("%d row inserted.\n", mysqli_stmt_affected_rows($stmt));

/* Clean up table CountryLanguage */
mysqli_query($link, "DELETE FROM CountryLanguage WHERE Language='Bavarian'");
printf("%d row deleted.\n", mysqli_affected_rows($link));
```

The above examples will output:

```
1 row inserted.
1 row deleted.
```

Example #2 Using ... to provide arguments

The ... operator can be used to provide variable-length argument list, e.g. in a WHERE IN clause.

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'world');

$stmt = $mysqli->prepare("SELECT Language FROM CountryLanguage WHERE CountryCode IN (?, ?)");
/* Using ... to provide arguments */
$stmt->bind_param('ss', ...['DEU', 'POL']);
$stmt->execute();
$stmt->store_result();

printf("%d rows found.\n", $stmt->num_rows());
```

The above examples will output:

```
10 rows found.
```

### See Also

- mysqli_stmt_bind_result() - Binds variables to a prepared statement for result storage
- mysqli_stmt_execute() - Executes a prepared statement
- mysqli_stmt_fetch() - Fetch results from a prepared statement into the bound variables
- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_send_long_data() - Send data in blocks
- mysqli_stmt_errno() - Returns the error code for the most recent statement call
- mysqli_stmt_error() - Returns a string description for last statement error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.bind-param.php
