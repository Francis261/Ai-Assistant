# mysqli::$client_version

Source: https://devdocs.io/php/mysqli.get-client-version

# mysqli_get_client_version

(PHP 5, PHP 7, PHP 8)

mysqli::$client_version -- mysqli_get_client_version — Returns the MySQL client version as an integer

### Description

Object-oriented style

Procedural style

```
mysqli_get_client_version(): int
```

Returns client version number as an integer.

### Parameters

This function has no parameters.

### Return Values

A number that represents the MySQL client library version in format: main_version*10000 + minor_version *100 + sub_version. For example, 4.1.0 is returned as 40100.

This is useful to quickly determine the version of the client library to know if some capability exists.

### Examples

Example #1 mysqli_get_client_version

```
<?php

/* We don't need a connection to determine
   the version of mysql client library */

printf("Client library version: %d\n", mysqli_get_client_version());
?>
```

### See Also

- mysqli_get_client_info() - Get MySQL client info
- mysqli_get_server_info() - Returns the version of the MySQL server
- mysqli_get_server_version() - Returns the version of the MySQL server as an integer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.get-client-version.php
