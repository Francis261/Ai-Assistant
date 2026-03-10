# Fiber::throw

Source: https://devdocs.io/php/fiber.throw

(PHP 8 >= 8.1.0)

Fiber::throw — Resumes execution of the fiber with an exception

### Description

```
public Fiber::throw(Throwable $exception): mixed
```

Resumes the fiber by throwing the given exception from the current Fiber::suspend() call.

If the fiber is not suspended when this method is called, a FiberError will be thrown.

### Parameters

The exception to throw into the fiber from the current Fiber::suspend() call.

### Return Values

The value provided to the next call to Fiber::suspend() or null if the fiber returns. If the fiber throws an exception before suspending, it will be thrown from the call to this method.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/fiber.throw.php
