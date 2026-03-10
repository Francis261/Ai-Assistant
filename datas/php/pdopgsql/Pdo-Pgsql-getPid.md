# Pdo\Pgsql::getPid

Source: https://devdocs.io/php/pdo-pgsql.getpid

(PHP 8 >= 8.4.0)

Pdo\Pgsql::getPid — Get the PID of the backend process handling this connection

### Description

```
public Pdo\Pgsql::getPid(): int
```

Returns the PID of the backend process handling this connection. Note that the PID belongs to a process executing on the database server host, not the local host.

### Parameters

This function has no parameters.

### Return Values

Returns the PID as an int.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-pgsql.getpid.php
