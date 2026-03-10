# mysqli_result::data_seek

Source: https://devdocs.io/php/mysqli-result.data-seek

# mysqli_data_seek

(PHP 5, PHP 7, PHP 8)

mysqli_result::data_seek -- mysqli_data_seek — Adjusts the result pointer to an arbitrary row in the result

### Description

Object-oriented style

```
public mysqli_result::data_seek(int $offset): bool
```

Procedural style

```
mysqli_data_seek(mysqli_result $result, int $offset): bool
```

The mysqli_data_seek() function seeks to an arbitrary result pointer specified by the offset in the result set.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

The row offset. Must be between zero and the total number of rows minus one (0..mysqli_num_rows() - 1).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 mysqli::data_seek() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name";
$result = $mysqli->query($query);

/* Seek to row no. 401 */
$result->data_seek(400);

/* Fetch single row */
$row = $result->fetch_row();

printf("City: %s  Countrycode: %s\n", $row[0], $row[1]);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name";

$result = mysqli_query($link, $query);

/* Seek to row no. 401 */
mysqli_data_seek($result, 400);

/* Fetch single row */
$row = mysqli_fetch_row($result);

printf ("City: %s  Countrycode: %s\n", $row[0], $row[1]);
```

The above examples will output:

```
City: Benin City  Countrycode: NGA
```

Example #2 Adjusting the result pointer when iterating

This function can be useful when iterating over the result set to impose a custom order or rewind the result set when iterating multiple times.

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY Name LIMIT 15,4";
$result = $mysqli->query($query);

/* Iterate the result set in reverse order */
for ($row_no = $result->num_rows - 1; $row_no >= 0; $row_no--) {
    $result->data_seek($row_no);

    /* Fetch single row */
    $row = $result->fetch_row();

    printf("City: %s  Countrycode: %s\n", $row[0], $row[1]);
}

/* Reset pointer to the beginning of the result set */
$result->data_seek(0);

print "\n";

/* Iterate the same result set again */
while ($row = $result->fetch_row()) {
    printf("City: %s  Countrycode: %s\n", $row[0], $row[1]);
}
```

The above examples will output:

```
City: Acmbaro  Countrycode: MEX
City: Abuja  Countrycode: NGA
City: Abu Dhabi  Countrycode: ARE
City: Abottabad  Countrycode: PAK

City: Abottabad  Countrycode: PAK
City: Abu Dhabi  Countrycode: ARE
City: Abuja  Countrycode: NGA
City: Acmbaro  Countrycode: MEX
```

### Notes

Note:

This function can only be used with buffered results attained from the use of the mysqli_store_result(), mysqli_query() or mysqli_stmt_get_result() functions.

### See Also

- mysqli_store_result() - Transfers a result set from the last query
- mysqli_fetch_row() - Fetch the next row of a result set as an enumerated array
- mysqli_fetch_array() - Fetch the next row of a result set as an associative, a numeric array, or both
- mysqli_fetch_assoc() - Fetch the next row of a result set as an associative array
- mysqli_fetch_object() - Fetch the next row of a result set as an object
- mysqli_query() - Performs a query on the database
- mysqli_num_rows() - Gets the number of rows in the result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.data-seek.php
