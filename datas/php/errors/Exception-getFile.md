# Exception::getFile

Source: https://devdocs.io/php/exception.getfile

(PHP 5, PHP 7, PHP 8)

Exception::getFile — Gets the file in which the exception was created

### Description

```
final public Exception::getFile(): string
```

Get the name of the file in which the exception was created.

### Parameters

This function has no parameters.

### Return Values

Returns the filename in which the exception was created.

### Examples

Example #1 Exception::getFile() example

```
<?php
try {
    throw new Exception;
} catch(Exception $e) {
    echo $e->getFile();
}
?>
```

The above example will output something similar to:

```
/home/bjori/tmp/ex.php
```

### See Also

- Throwable::getFile() - Gets the file in which the object was created

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/exception.getfile.php
