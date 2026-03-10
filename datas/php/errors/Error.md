# Error

Source: https://devdocs.io/php/class.error

## Introduction

(PHP 7, PHP 8)

Error is the base class for all internal PHP errors.

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

The error message

The error code

The filename where the error happened

The line where the error happened

The previously thrown exception

The string representation of the stack trace

The stack trace as an array

## Table of Contents

- Error::__construct — Construct the error object
- Error::getMessage — Gets the error message
- Error::getPrevious — Returns previous Throwable
- Error::getCode — Gets the error code
- Error::getFile — Gets the file in which the error occurred
- Error::getLine — Gets the line in which the error occurred
- Error::getTrace — Gets the stack trace
- Error::getTraceAsString — Gets the stack trace as a string
- Error::__toString — String representation of the error
- Error::__clone — Clone the error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.error.php
