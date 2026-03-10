# Exception::__toString

Source: https://devdocs.io/php/exception.tostring

(PHP 5, PHP 7, PHP 8)

Exception::__toString — String representation of the exception

### Description

```
public Exception::__toString(): string
```

Returns the string representation of the exception.

### Parameters

This function has no parameters.

### Return Values

Returns the string representation of the exception.

### Examples

Example #1 Exception::__toString() example

```
<?php
try {
    throw new Exception("Some error message");
} catch(Exception $e) {
    echo $e;
}
?>
```

The above example will output something similar to:

```
exception 'Exception' with message 'Some error message' in /home/bjori/tmp/ex.php:3
Stack trace:
#0 {main}
```

### See Also

- Throwable::__toString() - Gets a string representation of the thrown object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.tostring.php
