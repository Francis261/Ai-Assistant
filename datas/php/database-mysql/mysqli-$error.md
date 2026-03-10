# mysqli::$error

Source: https://devdocs.io/php/mysqli.error

# mysqli_error

(PHP 5, PHP 7, PHP 8)

mysqli::$error -- mysqli_error — Returns a string description of the last error

### Description

Object-oriented style

Procedural style

```
mysqli_error(mysqli $mysql): string
```

Returns the last error message for the most recent MySQLi function call that can succeed or fail.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

A string that describes the error. An empty string if no error occurred.

### Examples

Example #1 $mysqli->error example

Object-oriented style

```
<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

if (!$mysqli->query("SET a=1")) {
    printf("Error message: %s\n", $mysqli->error);
}

/* close connection */
$mysqli->close();
?>
```

Procedural style

```
<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if (!mysqli_query($link, "SET a=1")) {
    printf("Error message: %s\n", mysqli_error($link));
}

/* close connection */
mysqli_close($link);
?>
```

The above examples will output:

```
Error message: Unknown system variable 'a'
```

### See Also

- mysqli_connect_errno() - Returns the error code from last connect call
- mysqli_connect_error() - Returns a description of the last connection error
- mysqli_errno() - Returns the error code for the most recent function call
- mysqli_sqlstate() - Returns the SQLSTATE error from previous MySQL operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.error.php
