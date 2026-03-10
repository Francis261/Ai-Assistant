# Exception::getPrevious

Source: https://devdocs.io/php/exception.getprevious

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Exception::getPrevious — Returns previous Throwable

### Description

```
final public Exception::getPrevious(): ?Throwable
```

Returns previous Throwable (which had been passed as the third parameter of Exception::__construct()).

### Parameters

This function has no parameters.

### Return Values

Returns the previous Throwable if available or null otherwise.

### Examples

Example #1 Exception::getPrevious() example

Looping over, and printing out, exception trace.

```
<?php
class MyCustomException extends Exception {}

function doStuff() {
    try {
        throw new InvalidArgumentException("You are doing it wrong!", 112);
    } catch(Exception $e) {
        throw new MyCustomException("Something happened", 911, $e);
    }
}

try {
    doStuff();
} catch(Exception $e) {
    do {
        printf("%s:%d %s (%d) [%s]\n", $e->getFile(), $e->getLine(), $e->getMessage(), $e->getCode(), get_class($e));
    } while($e = $e->getPrevious());
}
?>
```

The above example will output something similar to:

```
/home/bjori/ex.php:8 Something happened (911) [MyCustomException]
/home/bjori/ex.php:6 You are doing it wrong! (112) [InvalidArgumentException]
```

### See Also

- Throwable::getPrevious() - Returns the previous Throwable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.getprevious.php
