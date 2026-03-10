# PDO::__construct

Source: https://devdocs.io/php/pdo.construct

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDO::__construct — Creates a PDO instance representing a connection to a database

### Description

Creates a PDO instance to represent a connection to the requested database.

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

### Errors/Exceptions

A PDOException is thrown if the attempt to connect to the requested database fails, regardless of which PDO::ATTR_ERRMODE is currently set.

### Examples

Example #1 Create a PDO instance via driver invocation

```
<?php

$dsn = 'mysql:dbname=testdb;host=127.0.0.1';
$user = 'dbuser';
$password = 'dbpass';

$dbh = new PDO($dsn, $user, $password);

?>
```

Example #2 Create a PDO instance via URI invocation

The following example assumes that the file /usr/local/dbconnect exists with file permissions that enable PHP to read the file. The file contains the PDO DSN to connect to a DB2 database through the PDO_ODBC driver:

```
odbc:DSN=SAMPLE;UID=john;PWD=mypass
```

The PHP script can then create a database connection by simply passing the uri: parameter and pointing to the file URI:

```
<?php

$dsn = 'uri:file:///usr/local/dbconnect';
$user = '';
$password = '';

$dbh = new PDO($dsn, $user, $password);

?>
```

Example #3 Create a PDO instance using an alias

The following example assumes that php.ini contains the following entry to enable a connection to a MySQL database using only the alias mydb:

```
[PDO]
pdo.dsn.mydb="mysql:dbname=testdb;host=localhost"
```

```
<?php

$dsn = 'mydb';
$user = '';
$password = '';

$dbh = new PDO($dsn, $user, $password);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.construct.php
