# mysqli_result::fetch_column

Source: https://devdocs.io/php/mysqli-result.fetch-column

# mysqli_fetch_column

(PHP 8 >= 8.1.0)

mysqli_result::fetch_column -- mysqli_fetch_column — Fetch a single column from the next row of a result set

### Description

Object-oriented style

```
public mysqli_result::fetch_column(int $column = 0): null|int|float|string|false
```

Procedural style

```
mysqli_fetch_column(mysqli_result $result, int $column = 0): null|int|float|string|false
```

Fetches one row of data from the result set and returns the 0-indexed column. Each subsequent call to this function will return the value from the next row within the result set, or false if there are no more rows.

Note: This function sets NULL fields to the PHP null value.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

0-indexed number of the column you wish to retrieve from the row. If no value is supplied, the first column will be returned.

### Return Values

Returns a single column from the next row of a result set or false if there are no more rows.

There is no way to return another column from the same row if you use this function to retrieve data.

### Examples

Example #1 mysqli_result::fetch_column() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT CountryCode, Name FROM City ORDER BY ID DESC LIMIT 5";

$result = $mysqli->query($query);

/* fetch a single value from the second column */
while ($Name = $result->fetch_column(1)) {
    printf("%s\n", $Name);
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT CountryCode, Name FROM City ORDER BY ID DESC LIMIT 5";

$result = mysqli_query($mysqli, $query);

/* fetch a single value from the second column */
while ($Name = mysqli_fetch_column($result, 1)) {
    printf("%s\n", $Name);
}
```

The above examples will output something similar to:

```
Rafah
Nablus
Jabaliya
Hebron
Khan Yunis
```

### See Also

- mysqli_fetch_all() - Fetch all result rows as an associative array, a numeric array, or both
- mysqli_fetch_array() - Fetch the next row of a result set as an associative, a numeric array, or both
- mysqli_fetch_assoc() - Fetch the next row of a result set as an associative array
- mysqli_fetch_object() - Fetch the next row of a result set as an object
- mysqli_fetch_row() - Fetch the next row of a result set as an enumerated array
- mysqli_data_seek() - Adjusts the result pointer to an arbitrary row in the result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.fetch-column.php
