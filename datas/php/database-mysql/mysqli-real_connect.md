# mysqli::real_connect

Source: https://devdocs.io/php/mysqli.real-connect

# mysqli_real_connect

(PHP 5, PHP 7, PHP 8)

mysqli::real_connect -- mysqli_real_connect — Opens a connection to a mysql server

### Description

Object-oriented style

```
public mysqli::real_connect(
 ?string $hostname = null,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?string $database = null,
 ?int $port = null,
 ?string $socket = null,
 int $flags = 0
): bool
```

Procedural style

```
mysqli_real_connect(
 mysqli $mysql,
 ?string $hostname = null,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?string $database = null,
 ?int $port = null,
 ?string $socket = null,
 int $flags = 0
): bool
```

Establish a connection to a MySQL database engine.

This function differs from mysqli_connect():

- mysqli_real_connect() needs a valid object which has to be created by function mysqli_init().
- With the mysqli_options() function you can set various options for connection.
- There is a flags parameter.

mysqli_real_connect() needs a valid object which has to be created by function mysqli_init().

With the mysqli_options() function you can set various options for connection.

There is a flags parameter.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

Can be either a host name or an IP address. When passing null, the value is retrieved from mysqli.default_host. When possible, pipes will be used instead of the TCP/IP protocol. The TCP/IP protocol is used if a host name and port number are provided together e.g. localhost:3308.

The MySQL username or null to assume the username based on the mysqli.default_user ini option.

The MySQL password or null to assume the password based on the mysqli.default_pw ini option.

The default database to be used when performing queries or null.

The port number to attempt to connect to the MySQL server or null to assume the port based on the mysqli.default_port ini option.

The socket or named pipe that should be used or null to assume the socket based on the mysqli.default_socket ini option.

Note:

Specifying the socket parameter will not explicitly determine the type of connection to be used when connecting to the MySQL server. How the connection is made to the MySQL database is determined by the hostname parameter.

With the parameter flags you can set different connection options:

Note:

For security reasons the MULTI_STATEMENT flag is not supported in PHP. If you want to execute multiple queries use the mysqli_multi_query() function.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Changelog

### Examples

Example #1 mysqli::real_connect() example

Object-oriented style

```
<?php

$mysqli = mysqli_init();
if (!$mysqli) {
    die('mysqli_init failed');
}

if (!$mysqli->options(MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT = 0')) {
    die('Setting MYSQLI_INIT_COMMAND failed');
}

if (!$mysqli->options(MYSQLI_OPT_CONNECT_TIMEOUT, 5)) {
    die('Setting MYSQLI_OPT_CONNECT_TIMEOUT failed');
}

if (!$mysqli->real_connect('localhost', 'my_user', 'my_password', 'my_db')) {
    die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
}

echo 'Success... ' . $mysqli->host_info . "\n";

$mysqli->close();
?>
```

Object-oriented style when extending mysqli class

```
<?php

class foo_mysqli extends mysqli {
    public function __construct($host, $user, $pass, $db) {
        parent::__construct();

        if (!parent::options(MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT = 0')) {
            die('Setting MYSQLI_INIT_COMMAND failed');
        }

        if (!parent::options(MYSQLI_OPT_CONNECT_TIMEOUT, 5)) {
            die('Setting MYSQLI_OPT_CONNECT_TIMEOUT failed');
        }

        if (!parent::real_connect($host, $user, $pass, $db)) {
            die('Connect Error (' . mysqli_connect_errno() . ') '
                    . mysqli_connect_error());
        }
    }
}

$db = new foo_mysqli('localhost', 'my_user', 'my_password', 'my_db');

echo 'Success... ' . $db->host_info . "\n";

$db->close();
?>
```

Procedural style

```
<?php

$link = mysqli_init();
if (!$link) {
    die('mysqli_init failed');
}

if (!mysqli_options($link, MYSQLI_INIT_COMMAND, 'SET AUTOCOMMIT = 0')) {
    die('Setting MYSQLI_INIT_COMMAND failed');
}

if (!mysqli_options($link, MYSQLI_OPT_CONNECT_TIMEOUT, 5)) {
    die('Setting MYSQLI_OPT_CONNECT_TIMEOUT failed');
}

if (!mysqli_real_connect($link, 'localhost', 'my_user', 'my_password', 'my_db')) {
    die('Connect Error (' . mysqli_connect_errno() . ') '
            . mysqli_connect_error());
}

echo 'Success... ' . mysqli_get_host_info($link) . "\n";

mysqli_close($link);
?>
```

The above examples will output:

```
Success... MySQL host info: localhost via TCP/IP
```

### Notes

Note:

MySQLnd always assumes the server default charset. This charset is sent during connection hand-shake/authentication, which mysqlnd will use.

Libmysqlclient uses the default charset set in the my.cnf or by an explicit call to mysqli_options() prior to calling mysqli_real_connect(), but after mysqli_init().

### See Also

- mysqli_connect() - Alias of mysqli::__construct
- mysqli_init() - Initializes MySQLi and returns an object for use with mysqli_real_connect()
- mysqli_options() - Set options
- mysqli_ssl_set() - Used for establishing secure connections using SSL
- mysqli_close() - Closes a previously opened database connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.real-connect.php
