# Exception::getTrace

Source: https://devdocs.io/php/exception.gettrace

(PHP 5, PHP 7, PHP 8)

Exception::getTrace — Gets the stack trace

### Description

```
final public Exception::getTrace(): array
```

Returns the Exception stack trace.

### Parameters

This function has no parameters.

### Return Values

Returns the Exception stack trace as an array.

### Examples

Example #1 Exception::getTrace() example

```
<?php
function test() {
 throw new Exception;
}

try {
 test();
} catch(Exception $e) {
 var_dump($e->getTrace());
}
?>
```

The above example will output something similar to:

```
array(1) {
  [0]=>
  array(4) {
    ["file"]=>
    string(22) "/home/bjori/tmp/ex.php"
    ["line"]=>
    int(7)
    ["function"]=>
    string(4) "test"
    ["args"]=>
    array(0) {
    }
  }
}
```

### See Also

- Throwable::getTrace() - Gets the stack trace

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.gettrace.php
