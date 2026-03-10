# Error::__toString

Source: https://devdocs.io/php/error.tostring

(PHP 7, PHP 8)

Error::__toString — String representation of the error

### Description

```
public Error::__toString(): string
```

Returns the string representation of the error.

### Parameters

This function has no parameters.

### Return Values

Returns the string representation of the error.

### Examples

Example #1 Error::__toString() example

```
<?php
try {
    throw new Error("Some error message");
} catch(Error $e) {
    echo $e;
}
?>
```

The above example will output something similar to:

```
Error: Some error message in /home/bjori/tmp/ex.php:3
Stack trace:
#0 {main}
```

### See Also

- Throwable::__toString() - Gets a string representation of the thrown object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/error.tostring.php
