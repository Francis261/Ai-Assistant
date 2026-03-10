# The Fiber class

Source: https://devdocs.io/php/class.fiber

## Introduction

(PHP 8 >= 8.1.0)

Fibers represent full-stack, interruptible functions. Fibers may be suspended from anywhere in the call-stack, pausing execution within the fiber until the fiber is resumed at a later time.

## Class synopsis

```
public start(mixed ...$args): mixed
```

```
public resume(mixed $value = null): mixed
```

```
public throw(Throwable $exception): mixed
```

```
public getReturn(): mixed
```

```
public isStarted(): bool
```

```
public isSuspended(): bool
```

```
public isRunning(): bool
```

```
public isTerminated(): bool
```

```
public static suspend(mixed $value = null): mixed
```

```
public static getCurrent(): ?Fiber
```

## See Also

Fibers overview

## Table of Contents

- Fiber::__construct — Creates a new Fiber instance
- Fiber::start — Start execution of the fiber
- Fiber::resume — Resumes execution of the fiber with a value
- Fiber::throw — Resumes execution of the fiber with an exception
- Fiber::getReturn — Gets the value returned by the Fiber
- Fiber::isStarted — Determines if the fiber has started
- Fiber::isSuspended — Determines if the fiber is suspended
- Fiber::isRunning — Determines if the fiber is running
- Fiber::isTerminated — Determines if the fiber has terminated
- Fiber::suspend — Suspends execution of the current fiber
- Fiber::getCurrent — Gets the currently executing Fiber instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.fiber.php
