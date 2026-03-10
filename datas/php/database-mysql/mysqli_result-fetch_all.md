# mysqli_result::fetch_all

Source: https://devdocs.io/php/mysqli-result.fetch-all

# mysqli_fetch_all

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

mysqli_result::fetch_all -- mysqli_fetch_all — Fetch all result rows as an associative array, a numeric array, or both

### Description

Object-oriented style

```
public mysqli_result::fetch_all(int $mode = MYSQLI_NUM): array
```

Procedural style

```
mysqli_fetch_all(mysqli_result $result, int $mode = MYSQLI_NUM): array
```

Returns a two-dimensional array of all result rows as an associative array, a numeric array, or both.

Note:

Prior to PHP 8.1.0, available only with mysqlnd.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

This optional parameter is a constant indicating what type of array should be produced from the current row data. The possible values for this parameter are the constants MYSQLI_ASSOC, MYSQLI_NUM, or MYSQLI_BOTH.

### Return Values

Returns an array of associative or numeric arrays holding result rows.

### Changelog

### Examples

Example #1 mysqli_result::fetch_all() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$result = $mysqli->query("SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3");

$rows = $result->fetch_all(MYSQLI_ASSOC);
foreach ($rows as $row) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$result = mysqli_query($mysqli, "SELECT Name, CountryCode FROM City ORDER BY ID LIMIT 3");

$rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
foreach ($rows as $row) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}
```

The above examples will output:

```
Kabul (AFG)
Qandahar (AFG)
Herat (AFG)
```

### See Also

- mysqli_fetch_array() - Fetch the next row of a result set as an associative, a numeric array, or both
- mysqli_fetch_column() - Fetch a single column from the next row of a result set
- mysqli_query() - Performs a query on the database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.fetch-all.php
