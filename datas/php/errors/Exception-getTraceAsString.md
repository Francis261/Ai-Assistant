# Exception::getTraceAsString

Source: https://devdocs.io/php/exception.gettraceasstring

(PHP 5, PHP 7, PHP 8)

Exception::getTraceAsString — Gets the stack trace as a string

### Description

```
final public Exception::getTraceAsString(): string
```

Returns the Exception stack trace as a string.

### Parameters

This function has no parameters.

### Return Values

Returns the Exception stack trace as a string.

### Examples

Example #1 Exception::getTraceAsString() example

```
<?php
function test() {
    throw new Exception;
}

try {
    test();
} catch(Exception $e) {
    echo $e->getTraceAsString();
}
?>
```

The above example will output something similar to:

```
#0 /home/bjori/tmp/ex.php(7): test()
#1 {main}
```

### See Also

- Throwable::getTraceAsString() - Gets the stack trace as a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.gettraceasstring.php
