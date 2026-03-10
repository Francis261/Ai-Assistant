# mysqli::poll

Source: https://devdocs.io/php/mysqli.poll

# mysqli_poll

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

mysqli::poll -- mysqli_poll — Poll connections

### Description

Object-oriented style

```
public static mysqli::poll(
 ?array &$read,
 ?array &$error,
 array &$reject,
 int $seconds,
 int $microseconds = 0
): int|false
```

Procedural style

```
mysqli_poll(
 ?array &$read,
 ?array &$error,
 array &$reject,
 int $seconds,
 int $microseconds = 0
): int|false
```

Poll connections. The method can be used as static.

Note:

Available only with mysqlnd.

### Parameters

List of connections to check for outstanding results that can be read.

List of connections on which an error occurred, for example, query failure or lost connection.

List of connections rejected because no asynchronous query has been run on for which the function could poll results.

Maximum number of seconds to wait, must be non-negative.

Maximum number of microseconds to wait, must be non-negative.

### Return Values

Returns number of ready connections upon success, false otherwise.

### Errors/Exceptions

A ValueError is thrown when neither the read nor error arguments are passed.

### Changelog

### Examples

Example #1 A mysqli_poll() example

```
<?php
$link1 = mysqli_connect();
$link1->query("SELECT 'test'", MYSQLI_ASYNC);
$all_links = array($link1);
$processed = 0;
do {
    $links = $errors = $reject = array();
    foreach ($all_links as $link) {
        $links[] = $errors[] = $reject[] = $link;
    }
    if (!mysqli_poll($links, $errors, $reject, 1)) {
        continue;
    }
    foreach ($links as $link) {
        if ($result = $link->reap_async_query()) {
            print_r($result->fetch_row());
            if (is_object($result))
                mysqli_free_result($result);
        } else die(sprintf("MySQLi Error: %s", mysqli_error($link)));
        $processed++;
    }
} while ($processed < count($all_links));
?>
```

The above example will output:

```
Array
(
    [0] => test
)
```

### See Also

- mysqli_query() - Performs a query on the database
- mysqli_reap_async_query() - Get result from async query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.poll.php
