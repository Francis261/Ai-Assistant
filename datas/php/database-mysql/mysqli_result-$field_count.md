# mysqli_result::$field_count

Source: https://devdocs.io/php/mysqli-result.field-count

# mysqli_num_fields

(PHP 5, PHP 7, PHP 8)

mysqli_result::$field_count -- mysqli_num_fields — Gets the number of fields in the result set

### Description

Object-oriented style

Procedural style

```
mysqli_num_fields(mysqli_result $result): int
```

Returns the number of fields in the result set.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

### Return Values

An int representing the number of fields.

### Examples

Example #1 Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$result = $mysqli->query("SELECT Name, CountryCode, District, Population FROM City ORDER BY ID LIMIT 1");

/* Get the number of fields in the result set */
$field_cnt = $result->field_count;

printf("Result set has %d fields.\n", $field_cnt);
```

Example #2 Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$result = mysqli_query($link, "SELECT Name, CountryCode, District, Population FROM City ORDER BY ID LIMIT 1");

/* Get the number of fields in the result set */
$field_cnt = mysqli_num_fields($result);

printf("Result set has %d fields.\n", $field_cnt);
```

The above examples will output:

```
Result set has 4 fields.
```

### See Also

- mysqli_fetch_field() - Returns the next field in the result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.field-count.php
