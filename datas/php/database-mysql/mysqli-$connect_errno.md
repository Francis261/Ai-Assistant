# mysqli::$connect_errno

Source: https://devdocs.io/php/mysqli.connect-errno

# mysqli_connect_errno

(PHP 5, PHP 7, PHP 8)

mysqli::$connect_errno -- mysqli_connect_errno — Returns the error code from last connect call

### Description

Object-oriented style

Procedural style

```
mysqli_connect_errno(): int
```

Returns the error code from the last connection attempt.

### Parameters

This function has no parameters.

### Return Values

An error code for the last connection attempt, if it failed. Zero means no error occurred.

Returns the last connection error code regardless of the instance on which it is called.

### Examples

Example #1 $mysqli->connect_errno example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_OFF);
/* @ is used to suppress warnings */
$mysqli = @new mysqli('localhost', 'fake_user', 'wrong_password', 'does_not_exist');
if ($mysqli->connect_errno) {
    /* Use your preferred error logging method here */
    error_log('Connection error: ' . $mysqli->connect_errno);
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_OFF);
/* @ is used to suppress warnings */
$link = @mysqli_connect('localhost', 'fake_user', 'wrong_password', 'does_not_exist');
if (!$link) {
    /* Use your preferred error logging method here */
    error_log('Connection error: ' . mysqli_connect_errno());
}
```

### See Also

- mysqli_connect() - Alias of mysqli::__construct
- mysqli_connect_error() - Returns a description of the last connection error
- mysqli_errno() - Returns the error code for the most recent function call
- mysqli_error() - Returns a string description of the last error
- mysqli_sqlstate() - Returns the SQLSTATE error from previous MySQL operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.connect-errno.php
