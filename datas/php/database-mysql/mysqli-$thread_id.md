# mysqli::$thread_id

Source: https://devdocs.io/php/mysqli.thread-id

# mysqli_thread_id

(PHP 5, PHP 7, PHP 8)

mysqli::$thread_id -- mysqli_thread_id — Returns the thread ID for the current connection

### Description

Object-oriented style

Procedural style

```
mysqli_thread_id(mysqli $mysql): int
```

The mysqli_thread_id() function returns the thread ID for the current connection which can then be killed using the mysqli_kill() function. If the connection is lost and you reconnect with mysqli_ping(), the thread ID will be different. Therefore you should get the thread ID only when you need it.

Note:

The thread ID is assigned on a connection-by-connection basis. Hence, if the connection is broken and then re-established a new thread ID will be assigned.

To kill a running query you can use the SQL command KILL QUERY processid.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns the Thread ID for the current connection.

### Examples

Example #1 $mysqli->thread_id example

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

- mysqli_kill() - Asks the server to kill a MySQL thread

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.thread-id.php
