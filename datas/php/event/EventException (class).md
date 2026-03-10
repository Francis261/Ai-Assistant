# The EventException class

Source: https://devdocs.io/php/class.eventexception

## Introduction

(No version information available, might only be in Git)

A EventException is thrown when the Event extension methods encounter invalid user input or identify an unrecoverable error. This exception serves as a signal for developers to handle exceptional situations gracefully.

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

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventexception.php
