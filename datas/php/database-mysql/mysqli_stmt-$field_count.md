# mysqli_stmt::$field_count

Source: https://devdocs.io/php/mysqli-stmt.field-count

# mysqli_stmt_field_count

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::$field_count -- mysqli_stmt_field_count — Returns the number of columns in the given statement

### Description

Object-oriented style

Procedural style

```
mysqli_stmt_field_count(mysqli_stmt $statement): int
```

Returns the number of columns in the prepared statement.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

Returns an integer representing the number of columns.

### Examples

Example #1 Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$code = 'FR';

$stmt = $mysqli->prepare("SELECT Name FROM Country WHERE Code=?");
$stmt->bind_param('s', $code);
$stmt->execute();
$row = $stmt->get_result()->fetch_row();
for ($i = 0; $i < $stmt->field_count; $i++) {
    printf("Value of column number %d is %s", $i, $row[$i]);
}
```

Example #2 Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

$code = 'FR';

$stmt = mysqli_prepare($mysqli, "SELECT Name FROM Country WHERE Code=?");
mysqli_stmt_bind_param($stmt, 's', $code);
mysqli_stmt_execute($stmt);
$result = mysqli_stmt_get_result($stmt);
$row = mysqli_fetch_row($result);
for ($i = 0; $i < mysqli_stmt_field_count($stmt); $i++) {
    printf("Value of column number %d is %s", $i, $row[$i]);
}
```

The above examples will output something similar to:

```
Value of column number 0 is France
```

### See Also

- mysqli_stmt_num_rows() - Returns the number of rows fetched from the server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.field-count.php
