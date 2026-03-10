# mysqli_result::fetch_assoc

Source: https://devdocs.io/php/mysqli-result.fetch-assoc

# mysqli_fetch_assoc

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_assoc -- mysqli_fetch_assoc — Fetch the next row of a result set as an associative array

### Description

Object-oriented style

```
public mysqli_result::fetch_assoc(): array|null|false
```

Procedural style

```
mysqli_fetch_assoc(mysqli_result $result): array|null|false
```

Fetches one row of data from the result set and returns it as an associative array. Each subsequent call to this function will return the next row within the result set, or null if there are no more rows.

If two or more columns of the result have the same name, the last column will take precedence and overwrite any previous data. To access multiple columns with the same name, mysqli_fetch_row() may be used to fetch the numerically indexed array, or aliases may be used in the SQL query select list to give columns different names.

Note: Field names returned by this function are case-sensitive.

Note: This function sets NULL fields to the PHP null value.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

### Return Values

Returns an associative array representing the fetched row, where each key in the array represents the name of one of the result set's columns, null if there are no more rows in the result set, or false on failure.

### Examples

Example #1 mysqli_result::fetch_assoc() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = $mysqli->query($query);

/* fetch associative array */
while ($row = $result->fetch_assoc()) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
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
while ($row = mysqli_fetch_assoc($result)) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
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

Example #2 Comparison of mysqli_result iterator and mysqli_result::fetch_assoc() usage

mysqli_result can be iterated using foreach. The result set will always be iterated from the first row, regardless of the current position.

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = 'SELECT Name, CountryCode FROM City ORDER BY ID DESC';

// Using iterators
$result = $mysqli->query($query);
foreach ($result as $row) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}

echo "\n==================\n";

// Not using iterators
$result = $mysqli->query($query);
while ($row = $result->fetch_assoc()) {
    printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
}
```

The above example will output something similar to:

```
Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Santa Clara (USA)

==================
Pueblo (USA)
Arvada (USA)
Cape Coral (USA)
Green Bay (USA)
Santa Clara (USA)
```

### See Also

- mysqli_fetch_array() - Fetch the next row of a result set as an associative, a numeric array, or both
- mysqli_fetch_column() - Fetch a single column from the next row of a result set
- mysqli_fetch_row() - Fetch the next row of a result set as an enumerated array
- mysqli_fetch_object() - Fetch the next row of a result set as an object
- mysqli_query() - Performs a query on the database
- mysqli_data_seek() - Adjusts the result pointer to an arbitrary row in the result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.fetch-assoc.php
