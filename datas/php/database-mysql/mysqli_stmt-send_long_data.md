# mysqli_stmt::send_long_data

Source: https://devdocs.io/php/mysqli-stmt.send-long-data

# mysqli_stmt_send_long_data

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::send_long_data -- mysqli_stmt_send_long_data — Send data in blocks

### Description

Object-oriented style

```
public mysqli_stmt::send_long_data(int $param_num, string $data): bool
```

Procedural style

```
mysqli_stmt_send_long_data(mysqli_stmt $statement, int $param_num, string $data): bool
```

Allows to send parameter data to the server in pieces (or chunks), e.g. if the size of a blob exceeds the size of max_allowed_packet. This function can be called multiple times to send the parts of a character or binary data value for a column, which must be one of the TEXT or BLOB datatypes.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

Indicates which parameter to associate the data with. Parameters are numbered beginning with 0.

A string containing data to be sent.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Object-oriented style

```
<?php
$stmt = $mysqli->prepare("INSERT INTO messages (message) VALUES (?)");
$null = NULL;
$stmt->bind_param("b", $null);
$fp = fopen("messages.txt", "r");
while (!feof($fp)) {
    $stmt->send_long_data(0, fread($fp, 8192));
}
fclose($fp);
$stmt->execute();
?>
```

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_bind_param() - Binds variables to a prepared statement as parameters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.send-long-data.php
