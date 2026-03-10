# Error::getLine

Source: https://devdocs.io/php/error.getline

(PHP 7, PHP 8)

Error::getLine — Gets the line in which the error occurred

### Description

```
final public Error::getLine(): int
```

Get line number where the error occurred.

### Parameters

This function has no parameters.

### Return Values

Returns the line number where the error occurred.

### Examples

Example #1 Error::getLine() example

```
<?php
try {
    throw new Error("Some error message");
} catch(Error $e) {
    echo "The error was created on line: " . $e->getLine();
}
?>
```

The above example will output something similar to:

```
The error was created on line: 3
```

### See Also

- Throwable::getLine() - Gets the line on which the object was instantiated

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/error.getline.php
