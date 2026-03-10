# mysqli_result::fetch_field

Source: https://devdocs.io/php/mysqli-result.fetch-field

# mysqli_fetch_field

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_field -- mysqli_fetch_field — Returns the next field in the result set

### Description

Object-oriented style

```
public mysqli_result::fetch_field(): object|false
```

Procedural style

```
mysqli_fetch_field(mysqli_result $result): object|false
```

Returns the definition of one column of a result set as an object. Call this function repeatedly to retrieve information about all columns in the result set.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

### Return Values

Returns an object which contains field definition information or false if no field information is available.

### Examples

Example #1 Object-oriented style

```
<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";

if ($result = $mysqli->query($query)) {

    /* Get field information for all columns */
    while ($finfo = $result->fetch_field()) {

        printf("Name:     %s\n", $finfo->name);
        printf("Table:    %s\n", $finfo->table);
        printf("max. Len: %d\n", $finfo->max_length);
        printf("Flags:    %d\n", $finfo->flags);
        printf("Type:     %d\n\n", $finfo->type);
    }
    $result->close();
}

/* close connection */
$mysqli->close();
?>
```

Example #2 Procedural style

```
<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$query = "SELECT Name, SurfaceArea from Country ORDER BY Code LIMIT 5";

if ($result = mysqli_query($link, $query)) {

    /* Get field information for all fields */
    while ($finfo = mysqli_fetch_field($result)) {

        printf("Name:     %s\n", $finfo->name);
        printf("Table:    %s\n", $finfo->table);
        printf("max. Len: %d\n", $finfo->max_length);
        printf("Flags:    %d\n", $finfo->flags);
        printf("Type:     %d\n\n", $finfo->type);
    }
    mysqli_free_result($result);
}

/* close connection */
mysqli_close($link);
?>
```

The above examples will output:

```
Name:     Name
Table:    Country
max. Len: 11
Flags:    1
Type:     254

Name:     SurfaceArea
Table:    Country
max. Len: 10
Flags:    32769
Type:     4
```

### See Also

- mysqli_num_fields() - Gets the number of fields in the result set
- mysqli_fetch_field_direct() - Fetch meta-data for a single field
- mysqli_fetch_fields() - Returns an array of objects representing the fields in a result set
- mysqli_field_seek() - Set result pointer to a specified field offset

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.fetch-field.php
