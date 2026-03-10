# Exception::getCode

Source: https://devdocs.io/php/exception.getcode

(PHP 5, PHP 7, PHP 8)

Exception::getCode — Gets the Exception code

### Description

```
final public Exception::getCode(): int
```

Returns the Exception code.

### Parameters

This function has no parameters.

### Return Values

Returns the exception code as int in Exception but possibly as other type in Exception descendants (for example as string in PDOException).

### Examples

Example #1 Exception::getCode() example

```
<?php
try {
    throw new Exception("Some error message", 30);
} catch(Exception $e) {
    echo "The exception code is: " . $e->getCode();
}
?>
```

The above example will output something similar to:

```
The exception code is: 30
```

### See Also

- Throwable::getCode() - Gets the exception code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.getcode.php
