# mysqli::stmt_init

Source: https://devdocs.io/php/mysqli.stmt-init

# mysqli_stmt_init

(PHP 5, PHP 7, PHP 8)

mysqli::stmt_init -- mysqli_stmt_init — Initializes a statement and returns an object for use with mysqli_stmt_prepare

### Description

Object-oriented style

```
public mysqli::stmt_init(): mysqli_stmt|false
```

Procedural style

```
mysqli_stmt_init(mysqli $mysql): mysqli_stmt|false
```

Allocates and initializes a statement object suitable for mysqli_stmt_prepare().

Note:

Any subsequent calls to any mysqli_stmt function will fail until mysqli_stmt_prepare() was called.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns an object.

### See Also

- mysqli_stmt_prepare() - Prepares an SQL statement for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.stmt-init.php
