# mysqli_stmt::result_metadata

Source: https://devdocs.io/php/mysqli-stmt.result-metadata

# mysqli_stmt_result_metadata

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::result_metadata -- mysqli_stmt_result_metadata — Returns result set metadata from a prepared statement

### Description

Object-oriented style

```
public mysqli_stmt::result_metadata(): mysqli_result|false
```

Procedural style

```
mysqli_stmt_result_metadata(mysqli_stmt $statement): mysqli_result|false
```

If a statement passed to mysqli_prepare() is one that produces a result set, mysqli_stmt_result_metadata() returns the result object that can be used to process the meta information such as total number of fields and individual field information.

This function returns an empty mysqli_result object which can be used to access metadata information from the prepared statement without having to fetch the actual rows of data. There is no need to use this function when using mysqli_stmt_get_result() to retrieve the entire result set from a prepared statement as a result object.

Note:

This result set object can be passed as an argument only to the field-based functions that process result set metadata, such as:

- mysqli_num_fields()
- mysqli_fetch_field()
- mysqli_fetch_field_direct()
- mysqli_fetch_fields()
- mysqli_field_count()
- mysqli_field_seek()
- mysqli_field_tell()
- mysqli_free_result()

mysqli_num_fields()

mysqli_fetch_field()

mysqli_fetch_field_direct()

mysqli_fetch_fields()

mysqli_field_count()

mysqli_field_seek()

mysqli_field_tell()

mysqli_free_result()

Note: The result set returned by mysqli_stmt_result_metadata() contains only metadata. It does not contain any row results. The rows are obtained by calling mysqli_stmt_get_result() on the statement handle or with mysqli_stmt_fetch().

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

Returns a result object or false if an error occurred. If the statement does not produce a result set, false is returned as well.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 Object-oriented style

```
<?php
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

$mysqli->query("DROP TABLE IF EXISTS friends");
$mysqli->query("CREATE TABLE friends (id int, name varchar(20))");

$mysqli->query("INSERT INTO friends VALUES (1,'Hartmut'), (2, 'Ulf')");

$stmt = $mysqli->prepare("SELECT id, name FROM friends");
$stmt->execute();

/* get resultset for metadata */
$result = $stmt->result_metadata();

/* retrieve field information from metadata result set */
$field = $result->fetch_field();

printf("Fieldname: %s\n", $field->name);
?>
```

Example #2 Procedural style

```
<?php
$link = mysqli_connect("localhost", "my_user", "my_password", "test");

mysqli_query($link, "DROP TABLE IF EXISTS friends");
mysqli_query($link, "CREATE TABLE friends (id int, name varchar(20))");

mysqli_query($link, "INSERT INTO friends VALUES (1,'Hartmut'), (2, 'Ulf')");

$stmt = mysqli_prepare($link, "SELECT id, name FROM friends");
mysqli_stmt_execute($stmt);

/* get resultset for metadata */
$result = mysqli_stmt_result_metadata($stmt);

/* retrieve field information from metadata result set */
$field = mysqli_fetch_field($result);

printf("Fieldname: %s\n", $field->name);
?>
```

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_free_result() - Frees the memory associated with a result
- mysqli_stmt_get_result() - Gets a result set from a prepared statement as a mysqli_result object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.result-metadata.php
