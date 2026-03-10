# mysqli::$client_info

Source: https://devdocs.io/php/mysqli.get-client-info

# mysqli::get_client_info

# mysqli_get_client_info

(PHP 5, PHP 7, PHP 8)

mysqli::$client_info -- mysqli::get_client_info -- mysqli_get_client_info — Get MySQL client info

### Description

Object-oriented style

```
#[\Deprecated] 
 public mysqli::get_client_info(): string
```

Procedural style

```
mysqli_get_client_info(?mysqli $mysql = null): string
```

Returns a string that represents the MySQL client library version.

### Parameters

This function has no parameters.

### Return Values

A string that represents the MySQL client library version.

### Changelog

### Examples

Example #1 mysqli_get_client_info

```
<?php

/* We don't need a connection to determine
   the version of mysql client library */

printf("Client library version: %s\n", mysqli_get_client_info());
?>
```

### See Also

- mysqli_get_client_version() - Returns the MySQL client version as an integer
- mysqli_get_server_info() - Returns the version of the MySQL server
- mysqli_get_server_version() - Returns the version of the MySQL server as an integer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.get-client-info.php
