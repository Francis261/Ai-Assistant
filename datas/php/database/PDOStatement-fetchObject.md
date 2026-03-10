# PDOStatement::fetchObject

Source: https://devdocs.io/php/pdostatement.fetchobject

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.4)

PDOStatement::fetchObject — Fetches the next row and returns it as an object

### Description

```
public PDOStatement::fetchObject(?string $class = "stdClass", array $constructorArgs = []): object|false
```

Fetches the next row and returns it as an object. This function is an alternative to PDOStatement::fetch() with PDO::FETCH_CLASS or PDO::FETCH_OBJ style.

When an object is fetched, its properties are assigned from respective column values, and afterwards its constructor is invoked.

### Parameters

Name of the created class.

Elements of this array are passed to the constructor.

### Return Values

Returns an instance of the required class with property names that correspond to the column names or false on failure.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### See Also

- PDOStatement::fetch() - Fetches the next row from a result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.fetchobject.php
