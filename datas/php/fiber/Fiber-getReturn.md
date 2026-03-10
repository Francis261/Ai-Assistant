# Fiber::getReturn

Source: https://devdocs.io/php/fiber.getreturn

(PHP 8 >= 8.1.0)

Fiber::getReturn — Gets the value returned by the Fiber

### Description

```
public Fiber::getReturn(): mixed
```

### Parameters

This function has no parameters.

### Return Values

Returns the value returned by the callable provided to Fiber::__construct(). If the fiber has not returned a value, either because it has not been started, has not terminated, or threw an exception, a FiberError will be thrown.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/fiber.getreturn.php
