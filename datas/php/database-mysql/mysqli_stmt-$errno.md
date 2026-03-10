# mysqli_stmt::$errno

Source: https://devdocs.io/php/mysqli-stmt.errno

# mysqli_stmt_errno

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$errno -- mysqli_stmt_errno — Returns the error code for the most recent statement call

### Description

Object-oriented style

Procedural style

```
mysqli_stmt_errno(mysqli_stmt $statement): int
```

Returns the error code for the most recently invoked statement function that can succeed or fail.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

An error code value. Zero means no error occurred.

### Examples

Example #1 Object-oriented style

```
<?php
/* Open a connection */
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$mysqli->query("CREATE TABLE myCountry LIKE Country");
$mysqli->query("INSERT INTO myCountry SELECT * FROM Country");

$query = "SELECT Name, Code FROM myCountry ORDER BY Name";
if ($stmt = $mysqli->prepare($query)) {

    /* drop table */
    $mysqli->query("DROP TABLE myCountry");

    /* execute query */
    $stmt->execute();

    printf("Error: %d.\n", $stmt->errno);

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
/* Open a connection */
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

mysqli_query($link, "CREATE TABLE myCountry LIKE Country");
mysqli_query($link, "INSERT INTO myCountry SELECT * FROM Country");

$query = "SELECT Name, Code FROM myCountry ORDER BY Name";
if ($stmt = mysqli_prepare($link, $query)) {

    /* drop table */
    mysqli_query($link, "DROP TABLE myCountry");

    /* execute query */
    mysqli_stmt_execute($stmt);

    printf("Error: %d.\n", mysqli_stmt_errno($stmt));

    /* close statement */
    mysqli_stmt_close($stmt);
}

/* close connection */
mysqli_close($link);
?>
```

The above examples will output:

```
Error: 1146.
```

### See Also

- mysqli_stmt_error() - Returns a string description for last statement error
- mysqli_stmt_sqlstate() - Returns SQLSTATE error from previous statement operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.errno.php
