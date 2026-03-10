# ErrorException::getSeverity

Source: https://devdocs.io/php/errorexception.getseverity

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

ErrorException::getSeverity — Gets the exception severity

### Description

```
final public ErrorException::getSeverity(): int
```

Returns the severity of the exception.

### Parameters

This function has no parameters.

### Return Values

Returns the severity level of the exception.

### Examples

Example #1 ErrorException::getSeverity() example

```
<?php
try {
    throw new ErrorException("Exception message", 0, E_USER_ERROR);
} catch(ErrorException $e) {
    echo "This exception severity is: " . $e->getSeverity();
    var_dump($e->getSeverity() === E_USER_ERROR);
}
?>
```

The above example will output something similar to:

```
This exception severity is: 256
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/errorexception.getseverity.php
