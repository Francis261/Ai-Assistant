# stomp_connect_error

Source: https://devdocs.io/php/function.stomp-connect-error

(PECL stomp >= 0.3.0)

stomp_connect_error — Returns a string description of the last connect error

### Description

```
stomp_connect_error(): string
```

Returns a string description of the last connect error.

### Parameters

This function has no parameters.

### Return Values

A string that describes the error, or null if no error occurred.

### Examples

Example #1 stomp_connect_error() example

```
<?php
$link = stomp_connect('http://localhost:61613');

if(!$link) {
    die('Connection failed: ' . stomp_connect_error());
}
?>
```

The above example will output something similar to:

```
Connection failed: Invalid Broker URI scheme
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stomp-connect-error.php
