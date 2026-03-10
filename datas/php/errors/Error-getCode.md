# Error::getCode

Source: https://devdocs.io/php/error.getcode

(PHP 7, PHP 8)

Error::getCode — Gets the error code

### Description

```
final public Error::getCode(): int
```

Returns the error code.

### Parameters

This function has no parameters.

### Return Values

Returns the error code as int

### Examples

Example #1 Error::getCode() example

```
<?php
try {
    throw new Error("Some error message", 30);
} catch(Error $e) {
    echo "The Error code is: " . $e->getCode();
}
?>
```

The above example will output something similar to:

```
The Error code is: 30
```

### See Also

- Throwable::getCode() - Gets the exception code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/error.getcode.php
