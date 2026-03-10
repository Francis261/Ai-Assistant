# mysqli::__construct

Source: https://devdocs.io/php/mysqli.construct

# mysqli::connect

# mysqli_connect

(PHP 5, PHP 7, PHP 8)

mysqli::__construct -- mysqli::connect -- mysqli_connect — Open a new connection to the MySQL server

### Description

Object-oriented style

```
public mysqli::connect(
 ?string $hostname = null,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?string $database = null,
 ?int $port = null,
 ?string $socket = null
): bool
```

Procedural style

```
mysqli_connect(
 ?string $hostname = null,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?string $database = null,
 ?int $port = null,
 ?string $socket = null
): mysqli|false
```

Opens a connection to the MySQL Server.

### Parameters

Can be either a host name or an IP address. When passing null, the value is retrieved from mysqli.default_host. When possible, pipes will be used instead of the TCP/IP protocol. The TCP/IP protocol is used if a host name and port number are provided together e.g. localhost:3308.

Prepending host by p: opens a persistent connection. mysqli_change_user() is automatically called on connections opened from the connection pool.

The MySQL username or null to assume the username based on the mysqli.default_user ini option.

The MySQL password or null to assume the password based on the mysqli.default_pw ini option.

The default database to be used when performing queries or null.

The port number to attempt to connect to the MySQL server or null to assume the port based on the mysqli.default_port ini option.

The socket or named pipe that should be used or null to assume the socket based on the mysqli.default_socket ini option.

Note:

Specifying the socket parameter will not explicitly determine the type of connection to be used when connecting to the MySQL server. How the connection is made to the MySQL database is determined by the hostname parameter.

### Return Values

mysqli::__construct() always returns an object which represents the connection to a MySQL Server, regardless of it being successful or not.

mysqli_connect() returns an object which represents the connection to a MySQL Server, or false on failure.

mysqli::connect() returns true on success or false on failure. Prior to PHP 8.1.0, returns null on success.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Changelog

### Examples

Example #1 mysqli::__construct() example

Object-oriented style

```
<?php

/* You should enable error reporting for mysqli before attempting to make a connection */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'my_db');

/* Set the desired charset after establishing a connection */
$mysqli->set_charset('utf8mb4');

printf("Success... %s\n", $mysqli->host_info);
```

Procedural style

```
<?php

/* You should enable error reporting for mysqli before attempting to make a connection */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = mysqli_connect('localhost', 'my_user', 'my_password', 'my_db');

/* Set the desired charset after establishing a connection */
mysqli_set_charset($mysqli, 'utf8mb4');

printf("Success... %s\n", mysqli_get_host_info($mysqli));
```

The above examples will output something similar to:

```
Success... localhost via TCP/IP
```

Example #2 Extending mysqli class

```
<?php

class FooMysqli extends mysqli {
    public function __construct($host, $user, $pass, $db, $port, $socket, $charset) {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        parent::__construct($host, $user, $pass, $db, $port, $socket);
        $this->set_charset($charset);
    }
}

$db = new FooMysqli('localhost', 'my_user', 'my_password', 'my_db', 3306, null, 'utf8mb4');
```

Example #3 Manual error handling

If error reporting is disabled, the developer is responsible for checking and handling failures

Object-oriented style

```
<?php

error_reporting(0);
mysqli_report(MYSQLI_REPORT_OFF);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'my_db');
if ($mysqli->connect_errno) {
    throw new RuntimeException('mysqli connection error: ' . $mysqli->connect_error);
}

/* Set the desired charset after establishing a connection */
$mysqli->set_charset('utf8mb4');
if ($mysqli->errno) {
    throw new RuntimeException('mysqli error: ' . $mysqli->error);
}
```

Procedural style

```
<?php

error_reporting(0);
mysqli_report(MYSQLI_REPORT_OFF);
$mysqli = mysqli_connect('localhost', 'my_user', 'my_password', 'my_db');
if (mysqli_connect_errno()) {
    throw new RuntimeException('mysqli connection error: ' . mysqli_connect_error());
}

/* Set the desired charset after establishing a connection */
mysqli_set_charset($mysqli, 'utf8mb4');
if (mysqli_errno($mysqli)) {
    throw new RuntimeException('mysqli error: ' . mysqli_error($mysqli));
}
```

### Notes

Note:

MySQLnd always assumes the server default charset. This charset is sent during connection hand-shake/authentication, which mysqlnd will use.

Libmysqlclient uses the default charset set in the my.cnf or by an explicit call to mysqli_options() prior to calling mysqli_real_connect(), but after mysqli_init().

Note:

Object-oriented style only: If the connection fails, an object is still returned. To check whether the connection failed, use either the mysqli_connect_error() function or the mysqli->connect_error property as in the preceding examples.

Note:

If it is necessary to set options, such as the connection timeout, mysqli_real_connect() must be used instead.

Note:

Calling the constructor with no parameters is the same as calling mysqli_init().

Note:

Error "Can't create TCP/IP socket (10106)" usually means that the variables_order configure directive doesn't contain character E. On Windows, if the environment is not copied the SYSTEMROOT environment variable won't be available and PHP will have problems loading Winsock.

### See Also

- mysqli_real_connect() - Opens a connection to a mysql server
- mysqli_options() - Set options
- mysqli_connect_errno() - Returns the error code from last connect call
- mysqli_connect_error() - Returns a description of the last connection error
- mysqli_close() - Closes a previously opened database connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.construct.php
