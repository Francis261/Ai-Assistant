# mysqli::release_savepoint

Source: https://devdocs.io/php/mysqli.release-savepoint

# mysqli_release_savepoint

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

mysqli::release_savepoint -- mysqli_release_savepoint — Removes the named savepoint from the set of savepoints of the current transaction

### Description

Object-oriented style

```
public mysqli::release_savepoint(string $name): bool
```

Procedural style:

```
mysqli_release_savepoint(mysqli $mysql, string $name): bool
```

This function is identical to executing $mysqli->query("RELEASE SAVEPOINT `$name`");. This function does not trigger commit or rollback.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The identifier of the savepoint.

### Return Values

Returns true on success or false on failure.

### See Also

- mysqli_savepoint() - Set a named transaction savepoint

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.release-savepoint.php
