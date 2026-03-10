# Fiber::start

Source: https://devdocs.io/php/fiber.start

(PHP 8 >= 8.1.0)

Fiber::start — Start execution of the fiber

### Description

```
public Fiber::start(mixed ...$args): mixed
```

A variadic list of arguments to provide to the callable used when constructing the fiber.

If the fiber has already been started when this method is called, a FiberError will be thrown.

### Parameters

The arguments to use when invoking the callable given to the fiber constructor.

### Return Values

The value provided to the first call to Fiber::suspend() or null if the fiber returns. If the fiber throws an exception before suspending, it will be thrown from the call to this method.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/fiber.start.php
