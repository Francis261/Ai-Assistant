# mysqli::character_set_name

Source: https://devdocs.io/php/mysqli.character-set-name

# mysqli_character_set_name

(PHP 5, PHP 7, PHP 8)

mysqli::character_set_name -- mysqli_character_set_name — Returns the current character set of the database connection

### Description

Object-oriented style

```
public mysqli::character_set_name(): string
```

Procedural style

```
mysqli_character_set_name(mysqli $mysql): string
```

Returns the current character set of the database connection.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

The current character set of the connection

### Examples

Example #1 mysqli::character_set_name() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* Set the default character set */
$mysqli->set_charset('utf8mb4');

/* Print current character set */
$charset = $mysqli->character_set_name();
printf("Current character set is %s\n", $charset);
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

/* Set the default character set */
mysqli_set_charset($mysqli, 'utf8mb4');

/* Print current character set */
$charset = mysqli_character_set_name($mysqli);
printf("Current character set is %s\n", $charset);
```

The above examples will output:

```
Current character set is utf8mb4
```

### See Also

- mysqli_set_charset() - Sets the client character set
- mysqli_real_escape_string() - Escapes special characters in a string for use in an SQL statement, taking into account the current charset of the connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.character-set-name.php
