# mysqli::savepoint

Source: https://devdocs.io/php/mysqli.savepoint

# mysqli_savepoint

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

mysqli::savepoint -- mysqli_savepoint — Set a named transaction savepoint

### Description

Object-oriented style

```
public mysqli::savepoint(string $name): bool
```

Procedural style:

```
mysqli_savepoint(mysqli $mysql, string $name): bool
```

This function is identical to executing $mysqli->query("SAVEPOINT `$name`");

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The identifier of the savepoint.

### Return Values

Returns true on success or false on failure.

### See Also

- mysqli_release_savepoint() - Removes the named savepoint from the set of savepoints of the current transaction

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.savepoint.php
