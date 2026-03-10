# Fiber::isRunning

Source: https://devdocs.io/php/fiber.isrunning

(PHP 8 >= 8.1.0)

Fiber::isRunning — Determines if the fiber is running

### Description

```
public Fiber::isRunning(): bool
```

### Parameters

This function has no parameters.

### Return Values

Returns true only if the fiber is running. A fiber is considered running after a call to Fiber::start(), Fiber::resume(), or Fiber::throw() that has not yet returned. Return false if the fiber is not running.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/fiber.isrunning.php
