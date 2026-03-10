# ReflectionFiber::getExecutingFile

Source: https://devdocs.io/php/reflectionfiber.getexecutingfile

(PHP 8 >= 8.1.0)

ReflectionFiber::getExecutingFile — Get the file name of the current execution point

### Description

```
public ReflectionFiber::getExecutingFile(): ?string
```

Returns the full path and file name of the current execution point in the reflected Fiber. If the fiber has not been started or has terminated, an Error is thrown.

### Parameters

This function has no parameters.

### Return Values

The full path and file name of the reflected fiber. If the reflected fiber is used outside a user-defined function, null is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfiber.getexecutingfile.php
