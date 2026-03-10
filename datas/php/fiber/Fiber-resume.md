# Fiber::resume

Source: https://devdocs.io/php/fiber.resume

(PHP 8 >= 8.1.0)

Fiber::resume — Resumes execution of the fiber with a value

### Description

```
public Fiber::resume(mixed $value = null): mixed
```

Resumes the fiber using the given value as the result of the current Fiber::suspend() call.

If the fiber is not suspended when this method is called, a FiberError will be thrown.

### Parameters

The value to resume the fiber. This value will be the return value of the current Fiber::suspend() call.

### Return Values

The value provided to the next call to Fiber::suspend() or null if the fiber returns. If the fiber throws an exception before suspending, it will be thrown from the call to this method.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/fiber.resume.php
