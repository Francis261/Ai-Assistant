# PDOStatement::getAttribute

Source: https://devdocs.io/php/pdostatement.getattribute

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.0)

PDOStatement::getAttribute — Retrieve a statement attribute

### Description

```
public PDOStatement::getAttribute(int $name): mixed
```

Gets an attribute of the statement. Currently, no generic attributes exist but only driver specific:

- PDO::ATTR_CURSOR_NAME (Firebird and ODBC specific): Get the name of cursor for UPDATE ... WHERE CURRENT OF.

PDO::ATTR_CURSOR_NAME (Firebird and ODBC specific): Get the name of cursor for UPDATE ... WHERE CURRENT OF.

### Parameters

The attribute to query.

### Return Values

Returns the attribute value.

### See Also

- PDO::getAttribute() - Retrieve a database connection attribute
- PDO::setAttribute() - Set an attribute
- PDOStatement::setAttribute() - Set a statement attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.getattribute.php
