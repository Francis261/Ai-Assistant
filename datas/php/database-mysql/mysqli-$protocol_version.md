# mysqli::$protocol_version

Source: https://devdocs.io/php/mysqli.get-proto-info

# mysqli_get_proto_info

(PHP 5, PHP 7, PHP 8)

mysqli::$protocol_version -- mysqli_get_proto_info — Returns the version of the MySQL protocol used

### Description

Object-oriented style

Procedural style

```
mysqli_get_proto_info(mysqli $mysql): int
```

Returns an integer representing the MySQL protocol version used by the connection represented by the mysql parameter.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns an integer representing the protocol version.

### Examples

Example #1 $mysqli->protocol_version example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password");

/* print protocol version */
printf("Protocol version: %d\n", $mysqli->protocol_version);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password");

/* print protocol version */
printf("Protocol version: %d\n", mysqli_get_proto_info($link));
```

The above examples will output:

```
Protocol version: 10
```

### See Also

- mysqli_get_host_info() - Returns a string representing the type of connection used

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.get-proto-info.php
