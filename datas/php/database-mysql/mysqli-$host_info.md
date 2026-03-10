# mysqli::$host_info

Source: https://devdocs.io/php/mysqli.get-host-info

# mysqli_get_host_info

(PHP 5, PHP 7, PHP 8)

mysqli::$host_info -- mysqli_get_host_info — Returns a string representing the type of connection used

### Description

Object-oriented style

Procedural style

```
mysqli_get_host_info(mysqli $mysql): string
```

Returns a string describing the connection represented by the mysql parameter (including the server host name).

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

A character string representing the server hostname and the connection type.

### Examples

Example #1 $mysqli->host_info example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* print host information */
printf("Host info: %s\n", $mysqli->host_info);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* print host information */
printf("Host info: %s\n", mysqli_get_host_info($link));
```

The above examples will output:

```
Host info: Localhost via UNIX socket
```

### See Also

- mysqli_get_proto_info() - Returns the version of the MySQL protocol used

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.get-host-info.php
