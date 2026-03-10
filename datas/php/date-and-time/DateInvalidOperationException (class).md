# The DateInvalidOperationException class

Source: https://devdocs.io/php/class.dateinvalidoperationexception

## Introduction

(PHP 8 >= 8.3.0)

Thrown by DateTimeImmutable::sub() and DateTime::sub() when an unsupported operation is attempted.

An example of such an unsupported operation is using a DateInterval object representing relative time specifications such as next weekday, as no logical reversed statement can be constructed.

## Class synopsis

```
final public Exception::getMessage(): string
```

```
final public Exception::getPrevious(): ?Throwable
```

```
final public Exception::getCode(): int
```

```
final public Exception::getFile(): string
```

```
final public Exception::getLine(): int
```

```
final public Exception::getTrace(): array
```

```
final public Exception::getTraceAsString(): string
```

```
public Exception::__toString(): string
```

```
private Exception::__clone(): void
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dateinvalidoperationexception.php
