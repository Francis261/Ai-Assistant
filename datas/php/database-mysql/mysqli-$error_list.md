# mysqli::$error_list

Source: https://devdocs.io/php/mysqli.error-list

# mysqli_error_list

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

mysqli::$error_list -- mysqli_error_list — Returns a list of errors from the last command executed

### Description

Object-oriented style

Procedural style

```
mysqli_error_list(mysqli $mysql): array
```

Returns a array of errors for the most recent MySQLi function call that can succeed or fail.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

A list of errors, each as an associative array containing the errno, error, and sqlstate.

### Examples

Example #1 $mysqli->error_list example

Object-oriented style

```
<?php
$mysqli = new mysqli("localhost", "nobody", "");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if (!$mysqli->query("SET a=1")) {
    print_r($mysqli->error_list);
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
    print_r(mysqli_error_list($link));
}

/* close connection */
mysqli_close($link);
?>
```

The above examples will output:

```
Array
(
    [0] => Array
        (
            [errno] => 1193
            [sqlstate] => HY000
            [error] => Unknown system variable 'a'
        )

)
```

### See Also

- mysqli_connect_errno() - Returns the error code from last connect call
- mysqli_connect_error() - Returns a description of the last connection error
- mysqli_error() - Returns a string description of the last error
- mysqli_sqlstate() - Returns the SQLSTATE error from previous MySQL operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.error-list.php
