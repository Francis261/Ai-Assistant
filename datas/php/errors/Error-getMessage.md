# Error::getMessage

Source: https://devdocs.io/php/error.getmessage

(PHP 7, PHP 8)

Error::getMessage — Gets the error message

### Description

```
final public Error::getMessage(): string
```

Returns the error message.

### Parameters

This function has no parameters.

### Return Values

Returns the error message as a string.

### Examples

Example #1 Error::getMessage() example

```
<?php
try {
    throw new Error("Some error message");
} catch(Error $e) {
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
 https://www.php.net/manual/en/error.getmessage.php
