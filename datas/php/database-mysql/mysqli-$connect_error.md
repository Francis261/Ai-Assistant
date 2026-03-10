# mysqli::$connect_error

Source: https://devdocs.io/php/mysqli.connect-error

# mysqli_connect_error

(PHP 5, PHP 7, PHP 8)

mysqli::$connect_error -- mysqli_connect_error — Returns a description of the last connection error

### Description

Object-oriented style

Procedural style

```
mysqli_connect_error(): ?string
```

Returns the error message from the last connection attempt.

### Parameters

This function has no parameters.

### Return Values

A string that describes the error. null is returned if no error occurred.

Returns the last connection error regardless of the instance on which it is called.

### Examples

Example #1 $mysqli->connect_error example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_OFF);
/* @ is used to suppress warnings */
$mysqli = @new mysqli('localhost', 'fake_user', 'wrong_password', 'does_not_exist');
if ($mysqli->connect_error) {
    /* Use your preferred error logging method here */
    error_log('Connection error: ' . $mysqli->connect_error);
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
    error_log('Connection error: ' . mysqli_connect_error());
}
```

### See Also

- mysqli_connect() - Alias of mysqli::__construct
- mysqli_connect_errno() - Returns the error code from last connect call
- mysqli_errno() - Returns the error code for the most recent function call
- mysqli_error() - Returns a string description of the last error
- mysqli_sqlstate() - Returns the SQLSTATE error from previous MySQL operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.connect-error.php
