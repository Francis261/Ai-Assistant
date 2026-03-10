# ReflectionFiber::getExecutingLine

Source: https://devdocs.io/php/reflectionfiber.getexecutingline

(PHP 8 >= 8.1.0)

ReflectionFiber::getExecutingLine — Get the line number of the current execution point

### Description

```
public ReflectionFiber::getExecutingLine(): ?int
```

Returns the line number of the current execution point in the reflected Fiber. If the reflected fiber is used outside a user-defined function, null is returned. If the fiber has not been started or has terminated, an Error is thrown.

### Parameters

This function has no parameters.

### Return Values

The line number of the current execution point in the fiber.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfiber.getexecutingline.php
