# mysqli::kill

Source: https://devdocs.io/php/mysqli.kill

# mysqli_kill

(PHP 5, PHP 7, PHP 8)

mysqli::kill -- mysqli_kill — Asks the server to kill a MySQL thread

This function has been DEPRECATED as of PHP 8.4.0. Relying on this function is highly discouraged.

### Description

Object-oriented style

```
#[\Deprecated] 
 public mysqli::kill(int $process_id): bool
```

Procedural style

```
#[\Deprecated] 
 mysqli_kill(mysqli $mysql, int $process_id): bool
```

This function is used to ask the server to kill a MySQL thread specified by the process_id parameter. This value must be retrieved by calling the mysqli_thread_id() function.

To stop a running query you should use the SQL command KILL QUERY processid.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Changelog

### Examples

Example #1 mysqli::kill() example

Object-oriented style

```
<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

/* determine our thread id */
$thread_id = $mysqli->thread_id;

/* Kill connection */
$mysqli->kill($thread_id);

/* This should produce an error */
if (!$mysqli->query("CREATE TABLE myCity LIKE City")) {
    printf("Error: %s\n", $mysqli->error);
    exit;
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

/* determine our thread id */
$thread_id = mysqli_thread_id($link);

/* Kill connection */
mysqli_kill($link, $thread_id);

/* This should produce an error */
if (!mysqli_query($link, "CREATE TABLE myCity LIKE City")) {
    printf("Error: %s\n", mysqli_error($link));
    exit;
}

/* close connection */
mysqli_close($link);
?>
```

The above examples will output:

```
Error: MySQL server has gone away
```

### See Also

- mysqli_thread_id() - Returns the thread ID for the current connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.kill.php
