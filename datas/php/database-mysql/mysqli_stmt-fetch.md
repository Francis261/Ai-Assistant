# mysqli_stmt::fetch

Source: https://devdocs.io/php/mysqli-stmt.fetch

# mysqli_stmt_fetch

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::fetch -- mysqli_stmt_fetch — Fetch results from a prepared statement into the bound variables

### Description

Object-oriented style

```
public mysqli_stmt::fetch(): ?bool
```

Procedural style

```
mysqli_stmt_fetch(mysqli_stmt $statement): ?bool
```

Fetch the result from a prepared statement into the variables bound by mysqli_stmt_bind_result().

Note:

Note that all columns must be bound by the application before calling mysqli_stmt_fetch().

Note:

Data is transferred unbuffered without calling mysqli_stmt_store_result() which can decrease performance (but reduces memory cost).

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 Object-oriented style

```
<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT Name, CountryCode FROM City ORDER by ID DESC LIMIT 150,5";

if ($stmt = $mysqli->prepare($query)) {

    /* execute statement */
    $stmt->execute();

    /* bind result variables */
    $stmt->bind_result($name, $code);

    /* fetch values */
    while ($stmt->fetch()) {
        printf ("%s (%s)\n", $name, $code);
    }

    /* close statement */
    $stmt->close();
}

/* close connection */
$mysqli->close();
?>
```

Example #2 Procedural style

```
<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT Name, CountryCode FROM City ORDER by ID DESC LIMIT 150,5";

if ($stmt = mysqli_prepare($link, $query)) {

    /* execute statement */
    mysqli_stmt_execute($stmt);

    /* bind result variables */
    mysqli_stmt_bind_result($stmt, $name, $code);

    /* fetch values */
    while (mysqli_stmt_fetch($stmt)) {
        printf ("%s (%s)\n", $name, $code);
    }

    /* close statement */
    mysqli_stmt_close($stmt);
}

/* close connection */
mysqli_close($link);
?>
```

The above examples will output:

```
Rockford (USA)
Tallahassee (USA)
Salinas (USA)
Santa Clarita (USA)
Springfield (USA)
```

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_errno() - Returns the error code for the most recent statement call
- mysqli_stmt_error() - Returns a string description for last statement error
- mysqli_stmt_bind_result() - Binds variables to a prepared statement for result storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.fetch.php
