# PDO::setAttribute

Source: https://devdocs.io/php/pdo.setattribute

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::setAttribute — Set an attribute

### Description

```
public PDO::setAttribute(int $attribute, mixed $value): bool
```

Sets an attribute on the database handle. Some available generic attributes are listed below; some drivers may make use of additional driver specific attributes. Note that driver specific attributes must not be used with other drivers.

Force column names to a specific case. Can take one of the following values:

Error reporting mode of PDO. Can take one of the following values:

Note: This attribute is available with all drivers, not just Oracle.

Determines if and how null and empty strings should be converted. Can take one of the following values:

Controls whether fetched values (except null) are converted to strings. Takes a value of type bool: true to enable and false to disable (default). null values remain unchanged unless PDO::ATTR_ORACLE_NULLS is set to PDO::NULL_TO_STRING.

Set user-supplied statement class derived from PDOStatement. Requires array(string classname, array(mixed constructor_args)).

Cannot be used with persistent PDO instances.

Specifies the timeout duration in seconds. Takes a value of type int.

Note:

Not all drivers support this option, and its meaning may differ from driver to driver. For example, SQLite will wait for up to this time value before giving up on obtaining a writable lock, but other drivers may interpret this as a connection or a read timeout interval.

Note: Only available for the OCI, Firebird, and MySQL drivers.

Whether to autocommit every single statement. Takes a value of type bool: true to enable and false to disable. By default, true.

Note: Only available for the OCI, Firebird, and MySQL drivers.

Whether enable or disable emulation of prepared statements. Some drivers do not support prepared statements natively or have limited support for them. If set to true PDO will always emulate prepared statements, otherwise PDO will attempt to use native prepared statements. In case the driver cannot successfully prepare the current query, PDO will always fall back to emulating the prepared statement.

Note: Only available for the MySQL driver.

Whether to use buffered queries. Takes a value of type bool: true to enable and false to disable. By default, true.

Set the default fetch mode. A description of the modes and how to use them is available in the PDOStatement::fetch() documentation.

### Parameters

The attribute to modify.

The value to set the attribute, might require a specific type depending on the attribute.

### Return Values

Returns true on success or false on failure.

### See Also

- PDO::getAttribute() - Retrieve a database connection attribute
- PDOStatement::getAttribute() - Retrieve a statement attribute
- PDOStatement::setAttribute() - Set a statement attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.setattribute.php
