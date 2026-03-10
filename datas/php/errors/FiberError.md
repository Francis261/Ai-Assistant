# FiberError

Source: https://devdocs.io/php/class.fibererror

## Introduction

(PHP 8 >= 8.1.0)

FiberError is thrown when an invalid operation is performed on a Fiber.

## Class synopsis

```
final public Error::getMessage(): string
```

```
final public Error::getPrevious(): ?Throwable
```

```
final public Error::getCode(): int
```

```
final public Error::getFile(): string
```

```
final public Error::getLine(): int
```

```
final public Error::getTrace(): array
```

```
final public Error::getTraceAsString(): string
```

```
public Error::__toString(): string
```

```
private Error::__clone(): void
```

## Table of Contents

- FiberError::__construct — Constructor to disallow direct instantiation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.fibererror.php
