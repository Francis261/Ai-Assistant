# mysqli::refresh

Source: https://devdocs.io/php/mysqli.refresh

# mysqli_refresh

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

mysqli::refresh -- mysqli_refresh — Refreshes

This function has been DEPRECATED as of PHP 8.4.0. Relying on this function is highly discouraged.

### Description

Object-oriented style

```
#[\Deprecated] 
 public mysqli::refresh(int $flags): bool
```

Procedural style

```
#[\Deprecated] 
 mysqli_refresh(mysqli $mysql, int $flags): bool
```

Flushes tables or caches, or resets the replication server information.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The options to refresh, using the MYSQLI_REFRESH_* constants as documented within the MySQLi constants documentation.

See also the official » MySQL Refresh documentation.

### Return Values

true if the refresh was a success, otherwise false

### Changelog

### See Also

- mysqli_poll() - Poll connections

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.refresh.php
