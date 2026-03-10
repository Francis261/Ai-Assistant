# mysqli_stmt::reset

Source: https://devdocs.io/php/mysqli-stmt.reset

# mysqli_stmt_reset

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::reset -- mysqli_stmt_reset — Resets a prepared statement

### Description

Object-oriented style

```
public mysqli_stmt::reset(): bool
```

Procedural style

```
mysqli_stmt_reset(mysqli_stmt $statement): bool
```

Resets a prepared statement on client and server to state after prepare.

It resets the statement on the server, data sent using mysqli_stmt_send_long_data(), unbuffered result sets and current errors. It does not clear bindings or stored result sets. Stored result sets will be cleared when executing the prepared statement (or closing it).

To prepare a statement with another query use function mysqli_stmt_prepare().

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

Returns true on success or false on failure.

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.reset.php
