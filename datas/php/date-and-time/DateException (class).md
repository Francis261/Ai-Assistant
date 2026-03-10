# The DateException class

Source: https://devdocs.io/php/class.dateexception

## Introduction

(PHP 8 >= 8.3.0)

Parent class of Date/Time exceptions, for issues that come to light due to user input, or free form text arguments that need to be parsed.

The following child exceptions are thrown by the extension:

- DateInvalidOperationException
- DateInvalidTimezoneException
- DateMalformedIntervalStringException
- DateMalformedPeriodStringException
- DateMalformedStringException

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
 https://www.php.net/manual/en/class.dateexception.php
