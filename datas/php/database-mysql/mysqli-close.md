# mysqli::close

Source: https://devdocs.io/php/mysqli.close

# mysqli_close

(PHP 5, PHP 7, PHP 8)

mysqli::close -- mysqli_close — Closes a previously opened database connection

### Description

Object-oriented style

```
public mysqli::close(): true
```

Procedural style

```
mysqli_close(mysqli $mysql): true
```

Closes a previously opened database connection.

Open non-persistent MySQL connections and result sets are automatically closed when their objects are destroyed. Explicitly closing open connections and freeing result sets is optional. However, it's a good idea to close the connection as soon as the script finishes performing all of its database operations, if it still has a lot of processing to do after getting the results.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 mysqli::close() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$result = $mysqli->query("SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3");

/* Close the connection as soon as it's no longer needed */
$mysqli->close();

foreach ($result as $row) {
    /* Processing of the data retrieved from the database */
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$result = mysqli_query($mysqli, "SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3");

/* Close the connection as soon as it's no longer needed */
mysqli_close($mysqli);

foreach ($result as $row) {
    /* Processing of the data retrieved from the database */
}
```

### Notes

Note:

mysqli_close() will not close persistent connections. For additional details, see the manual page on persistent connections.

### See Also

- mysqli::__construct() - Open a new connection to the MySQL server
- mysqli_init() - Initializes MySQLi and returns an object for use with mysqli_real_connect()
- mysqli_real_connect() - Opens a connection to a mysql server
- mysqli_free_result() - Frees the memory associated with a result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.close.php
