# mysqli::stat

Source: https://devdocs.io/php/mysqli.stat

# mysqli_stat

(PHP 5, PHP 7, PHP 8)

mysqli::stat -- mysqli_stat — Gets the current system status

### Description

Object-oriented style

```
public mysqli::stat(): string|false
```

Procedural style

```
mysqli_stat(mysqli $mysql): string|false
```

mysqli_stat() returns a string containing information similar to that provided by the 'mysqladmin status' command. This includes uptime in seconds and the number of running threads, questions, reloads, and open tables.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

A string describing the server status. false if an error occurred.

### Examples

Example #1 mysqli::stat() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

printf("System status: %s\n", $mysqli->stat());
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

printf("System status: %s\n", mysqli_stat($link));
```

The above examples will output:

```
System status: Uptime: 272  Threads: 1  Questions: 5340  Slow queries: 0
Opens: 13  Flush tables: 1  Open tables: 0  Queries per second avg: 19.632
Memory in use: 8496K  Max memory used: 8560K
```

### See Also

- mysqli_get_server_info() - Returns the version of the MySQL server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.stat.php
