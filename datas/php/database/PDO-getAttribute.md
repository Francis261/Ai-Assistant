# PDO::getAttribute

Source: https://devdocs.io/php/pdo.getattribute

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.0)

PDO::getAttribute — Retrieve a database connection attribute

### Description

```
public PDO::getAttribute(int $attribute): mixed
```

This function returns the value of a database connection attribute. To retrieve PDOStatement attributes, refer to PDOStatement::getAttribute().

Note that some database/driver combinations may not support all of the database connection attributes.

### Parameters

One of the PDO::ATTR_* constants. The generic attributes that apply to database connections are as follows:

- PDO::ATTR_AUTOCOMMIT
- PDO::ATTR_CASE
- PDO::ATTR_CLIENT_VERSION
- PDO::ATTR_CONNECTION_STATUS
- PDO::ATTR_DRIVER_NAME
- PDO::ATTR_ERRMODE
- PDO::ATTR_ORACLE_NULLS
- PDO::ATTR_PERSISTENT
- PDO::ATTR_PREFETCH
- PDO::ATTR_SERVER_INFO
- PDO::ATTR_SERVER_VERSION
- PDO::ATTR_TIMEOUT

### Return Values

A successful call returns the value of the requested PDO attribute. An unsuccessful call returns null.

### Errors/Exceptions

PDO::getAttribute() may throw a PDOException when the underlying driver does not support the requested attribute.

### Examples

Example #1 Retrieving database connection attributes

```
<?php
$conn = new PDO('odbc:sample', 'db2inst1', 'ibmdb2');
$attributes = array(
    "AUTOCOMMIT", "ERRMODE", "CASE", "CLIENT_VERSION", "CONNECTION_STATUS",
    "ORACLE_NULLS", "PERSISTENT", "PREFETCH", "SERVER_INFO", "SERVER_VERSION",
    "TIMEOUT"
);

foreach ($attributes as $val) {
    echo "PDO::ATTR_$val: ";
    echo $conn->getAttribute(constant("PDO::ATTR_$val")) . "\n";
}
?>
```

### See Also

- PDO::setAttribute() - Set an attribute
- PDOStatement::getAttribute() - Retrieve a statement attribute
- PDOStatement::setAttribute() - Set a statement attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.getattribute.php
