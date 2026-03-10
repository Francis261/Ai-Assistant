# Pdo\Pgsql::getNotify

Source: https://devdocs.io/php/pdo-pgsql.getnotify

(PHP 8 >= 8.4.0)

Pdo\Pgsql::getNotify — Get asynchronous notification

### Description

```
public Pdo\Pgsql::getNotify(int $fetchMode = PDO::FETCH_DEFAULT, int $timeoutMilliseconds = 0): array|false
```

Returns a result set representing a pending asynchronous notification.

### Parameters

The format the result set should be returned as, one of the following constants:

- PDO::FETCH_DEFAULT
- PDO::FETCH_BOTH
- PDO::FETCH_ASSOC
- PDO::FETCH_NUM

### Return Values

If one or more notifications is pending, returns a single row, with fields message and pid, otherwise returns false.

### Errors/Exceptions

A ValueError is thrown if fetchMode is not one of the valid PDO::FETCH_* constants.

A ValueError is thrown if timeoutMilliseconds is less than 0.

A E_WARNING is raised when timeoutMilliseconds is greater than the value that can be contained in a signed 32-bit integer, in which case it will be the maximum value of a signed 32-bit integer.

### See Also

- PDO::query() - Prepares and executes an SQL statement without placeholders
- PDOStatement::fetch() - Fetches the next row from a result set
- PDOStatement::fetchAll() - Fetches the remaining rows from a result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-pgsql.getnotify.php
