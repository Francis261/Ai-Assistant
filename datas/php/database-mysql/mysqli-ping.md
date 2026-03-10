# mysqli::ping

Source: https://devdocs.io/php/mysqli.ping

# mysqli_ping

(PHP 5, PHP 7, PHP 8)

mysqli::ping -- mysqli_ping — Pings a server connection, or tries to reconnect if the connection has gone down

This function has been DEPRECATED as of PHP 8.4.0. Relying on this function is highly discouraged.

### Description

Object-oriented style

```
#[\Deprecated] 
 public mysqli::ping(): bool
```

Procedural style

```
#[\Deprecated] 
 mysqli_ping(mysqli $mysql): bool
```

Checks whether the connection to the server is working. If it has gone down and global option mysqli.reconnect is enabled, an automatic reconnection is attempted.

Note: The php.ini setting mysqli.reconnect is ignored by the mysqlnd driver, so automatic reconnection is never attempted.

This function can be used by clients that remain idle for a long while, to check whether the server has closed the connection and reconnect if necessary.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Changelog

### Examples

Example #1 mysqli::ping() example

Object-oriented style

```
<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

/* check if server is alive */
if ($mysqli->ping()) {
    printf ("Our connection is ok!\n");
} else {
    printf ("Error: %s\n", $mysqli->error);
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

/* check if server is alive */
if (mysqli_ping($link)) {
    printf ("Our connection is ok!\n");
} else {
    printf ("Error: %s\n", mysqli_error($link));
}

/* close connection */
mysqli_close($link);
?>
```

The above examples will output:

```
Our connection is ok!
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.ping.php
