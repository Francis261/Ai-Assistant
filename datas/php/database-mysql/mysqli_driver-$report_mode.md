# mysqli_driver::$report_mode

Source: https://devdocs.io/php/mysqli-driver.report-mode

# mysqli_report

(PHP 5, PHP 7, PHP 8)

mysqli_driver::$report_mode -- mysqli_report — Sets mysqli error reporting mode

### Description

Object-oriented style

Procedural style

```
mysqli_report(int $flags): true
```

Depending on the flags, it sets mysqli error reporting mode to exception, warning or none. When set to MYSQLI_REPORT_ALL or MYSQLI_REPORT_INDEX it will also inform about queries that don't use an index (or use a bad index).

As of PHP 8.1.0, the default setting is MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT. Previously, it was MYSQLI_REPORT_OFF.

### Parameters

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 Object-oriented style

```
<?php

/* activate reporting */
$driver = new mysqli_driver();
$driver->report_mode = MYSQLI_REPORT_ALL;

try {
    /* if the connection fails, a mysqli_sql_exception will be thrown */
    $mysqli = new mysqli("localhost", "my_user", "my_password", "my_db");

    /* this query should report an error */
    $result = $mysqli->query("SELECT Name FROM Nonexistingtable WHERE population > 50000");

    /* this query should report a bad index if the column population doesn't have an index */
    $result = $mysqli->query("SELECT Name FROM City WHERE population > 50000");
} catch (mysqli_sql_exception $e) {
    error_log($e->__toString());
}
```

Example #2 Procedural style

```
<?php

/* activate reporting */
mysqli_report(MYSQLI_REPORT_ALL);

try {
    /* if the connection fails, a mysqli_sql_exception will be thrown */
    $link = mysqli_connect("localhost", "my_user", "my_password", "my_db");

    /* this query should report an error */
    $result = mysqli_query($link, "SELECT Name FROM Nonexistingtable WHERE population > 50000");

    /* this query should report a bad index if the column population doesn't have an index */
    $result = mysqli_query($link, "SELECT Name FROM City WHERE population > 50000");
} catch (mysqli_sql_exception $e) {
    error_log($e->__toString());
}
```

Example #3 Error reporting except bad index errors

```
<?php

/* activate reporting */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    /* if the connection fails, a mysqli_sql_exception will be thrown */
    $mysqli = new mysqli("localhost", "my_user", "my_password", "my_db");

    /* this query should report an error */
    $result = $mysqli->query("SELECT Name FROM Nonexistingtable WHERE population > 50000");

    /* this WILL NOT report any errors even if index is not available */
    $result = $mysqli->query("SELECT Name FROM City WHERE population > 50000");
} catch (mysqli_sql_exception $e) {
    error_log($e->__toString());
}
```

### See Also

- mysqli_sql_exception
- set_exception_handler() - Sets a user-defined exception handler function
- error_reporting() - Sets which PHP errors are reported

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-driver.report-mode.php
