# mysqli_stmt::get_result

Source: https://devdocs.io/php/mysqli-stmt.get-result

# mysqli_stmt_get_result

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

mysqli_stmt::get_result -- mysqli_stmt_get_result — Gets a result set from a prepared statement as a mysqli_result object

### Description

Object-oriented style

```
public mysqli_stmt::get_result(): mysqli_result|false
```

Procedural style

```
mysqli_stmt_get_result(mysqli_stmt $statement): mysqli_result|false
```

Retrieves a result set from a prepared statement as a mysqli_result object. The data will be fetched from the MySQL server to PHP. This method should be called only for queries which produce a result set.

Note:

Available only with mysqlnd.

Note:

This function cannot be used together with mysqli_stmt_store_result(). Both of these functions retrieve the full result set from the MySQL server.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

Returns false on failure. For successful queries which produce a result set, such as SELECT, SHOW, DESCRIBE or EXPLAIN, mysqli_stmt_get_result() will return a mysqli_result object. For other successful queries, mysqli_stmt_get_result() will return false. The mysqli_stmt_errno() function can be used to distinguish between the two reasons for false; due to a bug, prior to PHP 7.4.13, mysqli_errno() had to be used for this purpose.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, Population, Continent FROM Country WHERE Continent=? ORDER BY Name LIMIT 1";

$stmt = $mysqli->prepare($query);
$stmt->bind_param("s", $continent);

$continentList = array('Europe', 'Africa', 'Asia', 'North America');

foreach ($continentList as $continent) {
    $stmt->execute();
    $result = $stmt->get_result();
    while ($row = $result->fetch_array(MYSQLI_NUM)) {
        foreach ($row as $r) {
            print "$r ";
        }
        print "\n";
    }
}
```

Example #2 Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, Population, Continent FROM Country WHERE Continent=? ORDER BY Name LIMIT 1";

$stmt = mysqli_prepare($link, $query);
mysqli_stmt_bind_param($stmt, "s", $continent);

$continentList= array('Europe', 'Africa', 'Asia', 'North America');

foreach ($continentList as $continent) {
    mysqli_stmt_execute($stmt);
    $result = mysqli_stmt_get_result($stmt);
    while ($row = mysqli_fetch_array($result, MYSQLI_NUM)) {
        foreach ($row as $r) {
            print "$r ";
        }
        print "\n";
    }
}
```

The above examples will output something similar to:

```
Albania 3401200 Europe 
Algeria 31471000 Africa 
Afghanistan 22720000 Asia 
Anguilla 8000 North America
```

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_result_metadata() - Returns result set metadata from a prepared statement
- mysqli_stmt_fetch() - Fetch results from a prepared statement into the bound variables
- mysqli_fetch_array() - Fetch the next row of a result set as an associative, a numeric array, or both
- mysqli_stmt_store_result() - Stores a result set in an internal buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.get-result.php
