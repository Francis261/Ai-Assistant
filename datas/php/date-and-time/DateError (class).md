# The DateError class

Source: https://devdocs.io/php/class.dateerror

## Introduction

(PHP 8 >= 8.3.0)

Thrown when the timezone database is not found, or contains invalid data.

This error should never occur, and is not dependent on code. There are two child-exceptions (DateObjectError and DateRangeError) which are thrown depending on programmer error or range related issues.

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

## See Also

- DateObjectError
- DateRangeError

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dateerror.php
