# PDOStatement::setAttribute

Source: https://devdocs.io/php/pdostatement.setattribute

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.0)

PDOStatement::setAttribute — Set a statement attribute

### Description

```
public PDOStatement::setAttribute(int $attribute, mixed $value): bool
```

Sets an attribute on the statement. Currently, no generic attributes are set but only driver specific:

- PDO::ATTR_CURSOR_NAME (Firebird and ODBC specific): Set the name of cursor for UPDATE ... WHERE CURRENT OF.

PDO::ATTR_CURSOR_NAME (Firebird and ODBC specific): Set the name of cursor for UPDATE ... WHERE CURRENT OF.

### Parameters

The attribute to modify.

The value to set the attribute, might require a specific type depending on the attribute.

### Return Values

Returns true on success or false on failure.

### See Also

- PDO::getAttribute() - Retrieve a database connection attribute
- PDO::setAttribute() - Set an attribute
- PDOStatement::getAttribute() - Retrieve a statement attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.setattribute.php
