# Exception::getMessage

Source: https://devdocs.io/php/exception.getmessage

(PHP 5, PHP 7, PHP 8)

Exception::getMessage — Gets the Exception message

### Description

```
final public Exception::getMessage(): string
```

Returns the Exception message.

### Parameters

This function has no parameters.

### Return Values

Returns the Exception message as a string.

### Examples

Example #1 Exception::getMessage() example

```
<?php
try {
    throw new Exception("Some error message");
} catch(Exception $e) {
    echo $e->getMessage();
}
?>
```

The above example will output something similar to:

```
Some error message
```

### See Also

- Throwable::getMessage() - Gets the message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.getmessage.php
