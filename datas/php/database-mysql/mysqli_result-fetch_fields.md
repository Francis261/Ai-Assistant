# mysqli_result::fetch_fields

Source: https://devdocs.io/php/mysqli-result.fetch-fields

# mysqli_fetch_fields

(PHP 5, PHP 7, PHP 8)

mysqli_result::fetch_fields -- mysqli_fetch_fields — Returns an array of objects representing the fields in a result set

### Description

Object-oriented style

```
public mysqli_result::fetch_fields(): array
```

Procedural style

```
mysqli_fetch_fields(mysqli_result $result): array
```

This function serves an identical purpose to the mysqli_fetch_field() function with the single difference that, instead of returning one object at a time for each field, the columns are returned as an array of objects.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

### Return Values

Returns an array of objects containing field definition information.

### Examples

Example #1 Object-oriented style

```
<?php
$mysqli = new mysqli("127.0.0.1", "root", "foofoo", "sakila");

/* check connection */
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_error);
    exit();
}

foreach (array('latin1', 'utf8') as $charset) {

    // Set character set, to show its impact on some values (e.g., length in bytes)
    $mysqli->set_charset($charset);

    $query = "SELECT actor_id, last_name from actor ORDER BY actor_id";

    echo "======================\n";
    echo "Character Set: $charset\n";
    echo "======================\n";
    
    if ($result = $mysqli->query($query)) {

        /* Get field information for all columns */
        $finfo = $result->fetch_fields();

        foreach ($finfo as $val) {
            printf("Name:      %s\n",   $val->name);
            printf("Table:     %s\n",   $val->table);
            printf("Max. Len:  %d\n",   $val->max_length);
            printf("Length:    %d\n",   $val->length);
            printf("charsetnr: %d\n",   $val->charsetnr);
            printf("Flags:     %d\n",   $val->flags);
            printf("Type:      %d\n\n", $val->type);
        }
        $result->free();
    }
}
$mysqli->close();
?>
```

Example #2 Procedural style

```
<?php
$link = mysqli_connect("127.0.0.1", "my_user", "my_password", "sakila");

/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

foreach (array('latin1', 'utf8') as $charset) {

    // Set character set, to show its impact on some values (e.g., length in bytes)
    mysqli_set_charset($link, $charset);

    $query = "SELECT actor_id, last_name from actor ORDER BY actor_id";

    echo "======================\n";
    echo "Character Set: $charset\n";
    echo "======================\n";

    if ($result = mysqli_query($link, $query)) {

        /* Get field information for all columns */
        $finfo = mysqli_fetch_fields($result);

        foreach ($finfo as $val) {
            printf("Name:      %s\n",   $val->name);
            printf("Table:     %s\n",   $val->table);
            printf("Max. Len:  %d\n",   $val->max_length);
            printf("Length:    %d\n",   $val->length);
            printf("charsetnr: %d\n",   $val->charsetnr);
            printf("Flags:     %d\n",   $val->flags);
            printf("Type:      %d\n\n", $val->type);
        }
        mysqli_free_result($result);
    }
}

mysqli_close($link);
?>
```

The above examples will output:

```
======================
Character Set: latin1
======================
Name:      actor_id
Table:     actor
Max. Len:  3
Length:    5
charsetnr: 63
Flags:     49699
Type:      2

Name:      last_name
Table:     actor
Max. Len:  12
Length:    45
charsetnr: 8
Flags:     20489
Type:      253

======================
Character Set: utf8
======================
Name:      actor_id
Table:     actor
Max. Len:  3
Length:    5
charsetnr: 63
Flags:     49699
Type:      2

Name:      last_name
Table:     actor
Max. Len:  12
Length:    135
charsetnr: 33
Flags:     20489
```

### See Also

- mysqli_num_fields() - Gets the number of fields in the result set
- mysqli_fetch_field_direct() - Fetch meta-data for a single field
- mysqli_fetch_field() - Returns the next field in the result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.fetch-fields.php
