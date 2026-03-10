# mysqli::options

Source: https://devdocs.io/php/mysqli.options

# mysqli_options

(PHP 5, PHP 7, PHP 8)

mysqli::options -- mysqli_options — Set options

### Description

Object-oriented style

```
public mysqli::options(int $option, string|int $value): bool
```

Procedural style

```
mysqli_options(mysqli $mysql, int $option, string|int $value): bool
```

Used to set extra connect options and affect behavior for a connection.

This function may be called multiple times to set several options.

mysqli_options() should be called after mysqli_init() and before mysqli_real_connect().

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The option that you want to set. It can be one of the following values:

The value for the option.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

See mysqli_real_connect().

### Notes

Note:

MySQLnd always assumes the server default charset. This charset is sent during connection hand-shake/authentication, which mysqlnd will use.

Libmysqlclient uses the default charset set in the my.cnf or by an explicit call to mysqli_options() prior to calling mysqli_real_connect(), but after mysqli_init().

### See Also

- mysqli_init() - Initializes MySQLi and returns an object for use with mysqli_real_connect()
- mysqli_real_connect() - Opens a connection to a mysql server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.options.php
