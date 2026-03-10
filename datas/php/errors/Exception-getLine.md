# Exception::getLine

Source: https://devdocs.io/php/exception.getline

(PHP 5, PHP 7, PHP 8)

Exception::getLine — Gets the line in which the exception was created

### Description

```
final public Exception::getLine(): int
```

Get line number where the exception was created.

### Parameters

This function has no parameters.

### Return Values

Returns the line number where the exception was created.

### Examples

Example #1 Exception::getLine() example

```
<?php
try {
    throw new Exception("Some error message");
} catch(Exception $e) {
    echo "The exception was created on line: " . $e->getLine();
}
?>
```

The above example will output something similar to:

```
The exception was created on line: 3
```

### See Also

- Throwable::getLine() - Gets the line on which the object was instantiated

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.getline.php
