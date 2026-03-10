# mysqli_result::fetch_object

Source: https://devdocs.io/php/mysqli-result.fetch-object

# mysqli_fetch_object

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_object -- mysqli_fetch_object — Fetch the next row of a result set as an object

### Description

Object-oriented style

```
public mysqli_result::fetch_object(string $class = "stdClass", array $constructor_args = []): object|null|false
```

Procedural style

```
mysqli_fetch_object(mysqli_result $result, string $class = "stdClass", array $constructor_args = []): object|null|false
```

Fetches one row of data from the result set and returns it as an object, where each property represents the name of the result set's column. Each subsequent call to this function will return the next row within the result set, or null if there are no more rows.

If two or more columns of the result have the same name, the last column will take precedence and overwrite any previous data. To access multiple columns with the same name, mysqli_fetch_row() may be used to fetch the numerically indexed array, or aliases may be used in the SQL query select list to give columns different names.

Note: This function sets the properties of the object before calling the object constructor.

Note: Field names returned by this function are case-sensitive.

Note: This function sets NULL fields to the PHP null value.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

The name of the class to instantiate, set the properties of and return. If not specified, a stdClass object is returned.

An optional array of parameters to pass to the constructor for class objects.

### Return Values

Returns an object representing the fetched row, where each property represents the name of the result set's column, null if there are no more rows in the result set, or false on failure.

### Errors/Exceptions

A ValueError is thrown when the constructor_args is non-empty with the class not having constructor.

### Changelog

### Examples

Example #1 mysqli_result::fetch_object() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");
 
$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = $mysqli->query($query);

while ($obj = $result->fetch_object()) {
    printf("%s (%s)\n", $obj->Name, $obj->CountryCode);
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT Name, CountryCode FROM City ORDER BY ID DESC";

$result = mysqli_query($link, $query);

while ($obj = mysqli_fetch_object($result)) {
    printf("%s (%s)\n", $obj->Name, $obj->CountryCode);
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
- mysqli_fetch_row() - Fetch the next row of a result set as an enumerated array
- mysqli_query() - Performs a query on the database
- mysqli_data_seek() - Adjusts the result pointer to an arbitrary row in the result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.fetch-object.php
