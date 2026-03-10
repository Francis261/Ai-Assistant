# Error::getPrevious

Source: https://devdocs.io/php/error.getprevious

(PHP 7, PHP 8)

Error::getPrevious — Returns previous Throwable

### Description

```
final public Error::getPrevious(): ?Throwable
```

Returns previous Throwable (the third parameter of Error::__construct()).

### Parameters

This function has no parameters.

### Return Values

Returns the previous Throwable if available or null otherwise.

### Examples

Example #1 Error::getPrevious() example

Looping over, and printing out, error trace.

```
<?php
class MyCustomError extends Error {}

function doStuff() {
    try {
        throw new InvalidArgumentError("You are doing it wrong!", 112);
    } catch(Error $e) {
        throw new MyCustomError("Something happened", 911, $e);
    }
}

try {
    doStuff();
} catch(Error $e) {
    do {
        printf("%s:%d %s (%d) [%s]\n", $e->getFile(), $e->getLine(), $e->getMessage(), $e->getCode(), get_class($e));
    } while($e = $e->getPrevious());
}
?>
```

The above example will output something similar to:

```
/home/bjori/ex.php:8 Something happened (911) [MyCustomError]
/home/bjori/ex.php:6 You are doing it wrong! (112) [InvalidArgumentError]
```

### See Also

- Throwable::getPrevious() - Returns the previous Throwable

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/error.getprevious.php
