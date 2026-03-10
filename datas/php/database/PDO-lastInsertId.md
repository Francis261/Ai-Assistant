# PDO::lastInsertId

Source: https://devdocs.io/php/pdo.lastinsertid

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::lastInsertId — Returns the ID of the last inserted row or sequence value

### Description

```
public PDO::lastInsertId(?string $name = null): string|false
```

Returns the ID of the last inserted row, or the last value from a sequence object, depending on the underlying driver. For example, PDO_PGSQL allows the name of any sequence object to be specified for the name parameter.

Note:

This method may not return a meaningful or consistent result across different PDO drivers, because the underlying database may not even support the notion of auto-increment fields or sequences.

### Parameters

Name of the sequence object from which the ID should be returned.

### Return Values

If a sequence name was not specified for the name parameter, PDO::lastInsertId() returns a string representing the row ID of the last row that was inserted into the database.

If a sequence name was specified for the name parameter, PDO::lastInsertId() returns a string representing the last value retrieved from the specified sequence object.

If the PDO driver does not support this capability, PDO::lastInsertId() triggers an IM001 SQLSTATE.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.lastinsertid.php
