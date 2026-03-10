# mysqli::set_charset

Source: https://devdocs.io/php/mysqli.set-charset

# mysqli_set_charset

(PHP 5 >= 5.0.5, PHP 7, PHP 8)

mysqli::set_charset -- mysqli_set_charset — Sets the client character set

### Description

Object-oriented style

```
public mysqli::set_charset(string $charset): bool
```

Procedural style

```
mysqli_set_charset(mysqli $mysql, string $charset): bool
```

Sets the character set to be used when sending data from and to the database server.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The desired character set.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 mysqli::set_charset() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "test");

printf("Initial character set: %s\n", $mysqli->character_set_name());

/* change character set to utf8mb4 */
$mysqli->set_charset("utf8mb4");

printf("Current character set: %s\n", $mysqli->character_set_name());
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect('localhost', 'my_user', 'my_password', 'test');

printf("Initial character set: %s\n", mysqli_character_set_name($link));

/* change character set to utf8mb4 */
mysqli_set_charset($link, "utf8mb4");

printf("Current character set: %s\n", mysqli_character_set_name($link));
```

The above examples will output something similar to:

```
Initial character set: latin1
Current character set: utf8mb4
```

### Notes

Note:

This is the preferred way to change the charset. Using mysqli_query() to set it (such as SET NAMES utf8) is not recommended. See the MySQL character set concepts section for more information.

### See Also

- mysqli_character_set_name() - Returns the current character set of the database connection
- mysqli_real_escape_string() - Escapes special characters in a string for use in an SQL statement, taking into account the current charset of the connection
- MySQL character set concepts
- » List of character sets that MySQL supports

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.set-charset.php
