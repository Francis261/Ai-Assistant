# mysqli_result::fetch_row

Source: https://devdocs.io/php/mysqli-result.fetch-row

# mysqli_fetch_row

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_row -- mysqli_fetch_row — Fetch the next row of a result set as an enumerated array

### Description

Object-oriented style

```
public mysqli_result::fetch_row(): array|null|false
```

Procedural style

```
mysqli_fetch_row(mysqli_result $result): array|null|false
```

Fetches one row of data from the result set and returns it as an enumerated array, where each column is stored in an array offset starting from 0 (zero). Each subsequent call to this function will return the next row within the result set, or null if there are no more rows.

Note: This function sets NULL fields to the PHP null value.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

### Return Values

Returns an enumerated array representing the fetched row, null if there are no more rows in the result set, or false on failure.

### Examples

Example #1 mysqli_result::fetch_row() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = $mysqli->query($query);

/* fetch object array */
while ($row = $result->fetch_row()) {
    printf("%s (%s)\n", $row[0], $row[1]);
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = mysqli_query($mysqli, $query);

/* fetch associative array */
while ($row = mysqli_fetch_row($result)) {
    printf("%s (%s)\n", $row[0], $row[1]);
}
```

The above examples will output something similar to:

```
Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Santa Clara (USA)
```

### See Also

- mysqli_fetch_array() - Fetch the next row of a result set as an associative, a numeric array, or both
- mysqli_fetch_assoc() - Fetch the next row of a result set as an associative array
- mysqli_fetch_column() - Fetch a single column from the next row of a result set
- mysqli_fetch_object() - Fetch the next row of a result set as an object
- mysqli_query() - Performs a query on the database
- mysqli_data_seek() - Adjusts the result pointer to an arbitrary row in the result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.fetch-row.php
