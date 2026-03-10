# mysqli::init

Source: https://devdocs.io/php/mysqli.init

# mysqli_init

(PHP 5, PHP 7, PHP 8)

mysqli::init -- mysqli_init — Initializes MySQLi and returns an object for use with mysqli_real_connect()

### Description

Object-oriented style

```
#[\Deprecated] 
 public mysqli::init(): ?bool
```

Procedural style

```
mysqli_init(): mysqli|false
```

Allocates or initializes a MYSQL object suitable for mysqli_options() and mysqli_real_connect().

Note:

Any subsequent calls to any mysqli function (except mysqli_options() and mysqli_ssl_set()) will fail until mysqli_real_connect() was called.

### Parameters

This function has no parameters.

### Return Values

mysqli::init() returns null on success, or false on failure. mysqli_init() returns an object on success, or false on failure.

### Changelog

### Examples

See mysqli_real_connect().

### See Also

- mysqli_options() - Set options
- mysqli_close() - Closes a previously opened database connection
- mysqli_real_connect() - Opens a connection to a mysql server
- mysqli_connect() - Alias of mysqli::__construct

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.init.php
