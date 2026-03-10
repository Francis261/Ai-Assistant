# Exception

Source: https://devdocs.io/php/class.exception

## Introduction

(PHP 5, PHP 7, PHP 8)

Exception is the base class for all user exceptions.

## Class synopsis

```
final public getMessage(): string
```

```
final public getPrevious(): ?Throwable
```

```
final public getCode(): int
```

```
final public getFile(): string
```

```
final public getLine(): int
```

```
final public getTrace(): array
```

```
final public getTraceAsString(): string
```

```
public __toString(): string
```

```
private __clone(): void
```

## Properties

The exception message

The exception code

The filename where the exception was created

The line where the exception was created

The previously thrown exception

The string representation of the stack trace

The stack trace as an array

## Table of Contents

- Exception::__construct — Construct the exception
- Exception::getMessage — Gets the Exception message
- Exception::getPrevious — Returns previous Throwable
- Exception::getCode — Gets the Exception code
- Exception::getFile — Gets the file in which the exception was created
- Exception::getLine — Gets the line in which the exception was created
- Exception::getTrace — Gets the stack trace
- Exception::getTraceAsString — Gets the stack trace as a string
- Exception::__toString — String representation of the exception
- Exception::__clone — Clone the exception

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.exception.php
