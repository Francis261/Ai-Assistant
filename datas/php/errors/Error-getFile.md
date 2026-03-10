# Error::getFile

Source: https://devdocs.io/php/error.getfile

(PHP 7, PHP 8)

Error::getFile — Gets the file in which the error occurred

### Description

```
final public Error::getFile(): string
```

Get the name of the file the error occurred.

### Parameters

This function has no parameters.

### Return Values

Returns the filename in which the error occurred.

### Examples

Example #1 Error::getFile() example

```
<?php
try {
    throw new Error;
} catch(Error $e) {
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
 https://www.php.net/manual/en/error.getfile.php
