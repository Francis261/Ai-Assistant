# Fiber::suspend

Source: https://devdocs.io/php/fiber.suspend

(PHP 8 >= 8.1.0)

Fiber::suspend — Suspends execution of the current fiber

### Description

```
public static Fiber::suspend(mixed $value = null): mixed
```

Suspends execution of the current fiber. The value provided to this method will be returned from the call to Fiber::start(), Fiber::resume(), or Fiber::throw() that switched execution into the current fiber.

When the fiber is resumed, this method returns the value provided to Fiber::resume(). If the fiber is resumed using Fiber::throw(), the exception given to that method will be thrown from the call to this method.

If this method is called from outside a fiber, a FiberError will be thrown.

### Parameters

The value to return from the call to Fiber::start(), Fiber::resume(), or Fiber::throw() that switched execution into the current fiber.

### Return Values

The value provided to Fiber::resume().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/fiber.suspend.php
