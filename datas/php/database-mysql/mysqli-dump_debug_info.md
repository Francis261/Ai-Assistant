# mysqli::dump_debug_info

Source: https://devdocs.io/php/mysqli.dump-debug-info

# mysqli_dump_debug_info

(PHP 5, PHP 7, PHP 8)

mysqli::dump_debug_info -- mysqli_dump_debug_info — Dump debugging information into the log

### Description

Object-oriented style

```
public mysqli::dump_debug_info(): bool
```

Procedural style

```
mysqli_dump_debug_info(mysqli $mysql): bool
```

This function is designed to be executed by an user with the SUPER privilege and is used to dump debugging information into the log for the MySQL Server relating to the connection.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns true on success or false on failure.

### See Also

- mysqli_debug() - Performs debugging operations

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.dump-debug-info.php
