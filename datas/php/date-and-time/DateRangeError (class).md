# The DateRangeError class

Source: https://devdocs.io/php/class.daterangeerror

## Introduction

(PHP 8 >= 8.3.0)

Thrown by DateTime::getTimestamp(), DateTimeImmutable::getTimestamp(), and date_timestamp_get(), on 32-bit platforms if the date object represents a date outside of the 32-bit signed range.

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

- DateError
- DateObjectError

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.daterangeerror.php
