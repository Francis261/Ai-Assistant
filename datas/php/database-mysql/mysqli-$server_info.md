# mysqli::$server_info

Source: https://devdocs.io/php/mysqli.get-server-info

# mysqli::get_server_info

# mysqli_get_server_info

(PHP 5, PHP 7, PHP 8)

mysqli::$server_info -- mysqli::get_server_info -- mysqli_get_server_info — Returns the version of the MySQL server

### Description

Object-oriented style

```
public mysqli::get_server_info(): string
```

Procedural style

```
mysqli_get_server_info(mysqli $mysql): string
```

Returns a string representing the version of the MySQL server that the MySQLi extension is connected to.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

A character string representing the server version.

### Examples

Example #1 $mysqli->server_info example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password");

/* print server version */
printf("Server version: %s\n", $mysqli->server_info);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password");

/* print server version */
printf("Server version: %s\n", mysqli_get_server_info($link));
```

The above examples will output something similar to:

```
Server version: 8.0.21
```

### See Also

- mysqli_get_client_info() - Get MySQL client info
- mysqli_get_client_version() - Returns the MySQL client version as an integer
- mysqli_get_server_version() - Returns the version of the MySQL server as an integer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.get-server-info.php
