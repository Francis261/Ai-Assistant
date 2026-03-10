# Throwable::getCode

Source: https://devdocs.io/php/throwable.getcode

(PHP 7, PHP 8)

Throwable::getCode — Gets the exception code

### Description

```
public Throwable::getCode(): int
```

Returns the error code associated with the thrown object.

### Parameters

This function has no parameters.

### Return Values

Returns the exception code as int in Exception but possibly as other type in Exception descendants (for example as string in PDOException).

### See Also

- Exception::getCode() - Gets the Exception code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/throwable.getcode.php
