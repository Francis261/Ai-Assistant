# The RarException class

Source: https://devdocs.io/php/class.rarexception

## Introduction

(PECL rar >= 2.0.0)

This class serves two purposes: it is the type of the exceptions thrown by the RAR extension functions and methods and it allows, through static methods to query and define the error behaviour of the extension, i.e., whether exceptions are thrown or only warnings are emitted.

The following error codes are used:

- -1 - error outside UnRAR library
- 11 - insufficient memory
- 12 - bad data
- 13 - bad archive
- 14 - unknown format
- 15 - file open error
- 16 - file create error
- 17 - file close error
- 18 - read error
- 19 - write error
- 20 - buffer too small
- 21 - unknown RAR error
- 22 - password required but not given

## Class synopsis

```
public static isUsingExceptions(): bool
```

```
public static setUsingExceptions(bool $using_exceptions): void
```

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

## Table of Contents

- RarException::isUsingExceptions — Check whether error handling with exceptions is in use
- RarException::setUsingExceptions — Activate and deactivate error handling with exceptions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.rarexception.php
