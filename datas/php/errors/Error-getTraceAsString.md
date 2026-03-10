# Error::getTraceAsString

Source: https://devdocs.io/php/error.gettraceasstring

(PHP 7, PHP 8)

Error::getTraceAsString — Gets the stack trace as a string

### Description

```
final public Error::getTraceAsString(): string
```

Returns the stack trace as a string.

### Parameters

This function has no parameters.

### Return Values

Returns the stack trace as a string.

### Examples

Example #1 Error::getTraceAsString() example

```
<?php
function test() {
    throw new Error;
}

try {
    test();
} catch(Error $e) {
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
 https://www.php.net/manual/en/error.gettraceasstring.php
