# RarException::isUsingExceptions

Source: https://devdocs.io/php/rarexception.isusingexceptions

(PECL rar >= 2.0.0)

RarException::isUsingExceptions — Check whether error handling with exceptions is in use

### Description

```
public static RarException::isUsingExceptions(): bool
```

Checks whether the RAR functions will emit warnings and return error values or whether they will throw exceptions in most of the circumstances (does not include some programmatic errors such as passing the wrong type of arguments).

### Parameters

This function has no parameters.

### Return Values

Returns true if exceptions are being used, false otherwise.

### Examples

Example #1 RarException::isUsingExceptions() example

```
<?php
//The default is not to use exceptions
var_dump(RarException::isUsingExceptions());
?>
```

The above example will output something similar to:

```
bool(false)
```

### See Also

- RarException::setUsingExceptions() - Activate and deactivate error handling with exceptions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarexception.isusingexceptions.php
