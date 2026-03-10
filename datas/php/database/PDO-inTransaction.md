# PDO::inTransaction

Source: https://devdocs.io/php/pdo.intransaction

(PHP 5 >= 5.3.3, Bundled pdo_pgsql, PHP 7, PHP 8)

PDO::inTransaction — Checks if inside a transaction

### Description

```
public PDO::inTransaction(): bool
```

Checks if a transaction is currently active within the driver. This method only works for database drivers that support transactions.

### Parameters

This function has no parameters.

### Return Values

Returns true if a transaction is currently active, and false if not.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.intransaction.php
