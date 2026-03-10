# PDO::connect

Source: https://devdocs.io/php/pdo.connect

(PHP 8 >= 8.4.0)

PDO::connect — Connect to a database and return a PDO subclass for drivers that support it

### Description

```
public static PDO::connect(
 string $dsn,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?array $options = null
): static
```

Creates an instance of a PDO subclass for the database being connection if it exists, otherwise return a generic PDO instance.

### Parameters

The Data Source Name, or DSN, contains the information required to connect to the database.

In general, a DSN consists of the PDO driver name, followed by a colon, followed by the PDO driver-specific connection syntax. Further information is available from the PDO driver-specific documentation.

The dsn parameter supports three different methods of specifying the arguments required to create a database connection:

dsn contains the full DSN.

dsn consists of uri: followed by a URI that defines the location of a file containing the DSN string. The URI can specify a local file or a remote URL.

uri:file:///path/to/dsnfile

dsn consists of a name name that maps to pdo.dsn.name in php.ini defining the DSN string.

Note:

The alias must be defined in php.ini, and not .htaccess or httpd.conf

The user name for the DSN string. This parameter is optional for some PDO drivers.

The password for the DSN string. This parameter is optional for some PDO drivers.

A key=>value array of driver-specific connection options.

### Return Values

Returns an instance of a PDO subclass for the corresponding PDO driver if it exists, or a generic PDO instance.

### Errors/Exceptions

A PDOException is thrown if the attempt to connect to the requested database fails, regardless of which PDO::ATTR_ERRMODE is currently set.

### See Also

- Pdo\Dblib
- Pdo\Firebird
- Pdo\Mysql
- Pdo\Odbc
- Pdo\Pgsql
- Pdo\Sqlite
- PDO::__construct() - Creates a PDO instance representing a connection to a database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.connect.php
