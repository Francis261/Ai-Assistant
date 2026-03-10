# Throwable

Source: https://devdocs.io/php/class.throwable

## Introduction

(PHP 7, PHP 8)

Throwable is the base interface for any object that can be thrown via a throw statement, including Error and Exception.

Note:

PHP classes cannot implement the Throwable interface directly, and must instead extend Exception.

## Interface synopsis

```
public getMessage(): string
```

```
public getCode(): int
```

```
public getFile(): string
```

```
public getLine(): int
```

```
public getTrace(): array
```

```
public getTraceAsString(): string
```

```
public getPrevious(): ?Throwable
```

```
public __toString(): string
```

```
public Stringable::__toString(): string
```

## Changelog

## Table of Contents

- Throwable::getMessage — Gets the message
- Throwable::getCode — Gets the exception code
- Throwable::getFile — Gets the file in which the object was created
- Throwable::getLine — Gets the line on which the object was instantiated
- Throwable::getTrace — Gets the stack trace
- Throwable::getTraceAsString — Gets the stack trace as a string
- Throwable::getPrevious — Returns the previous Throwable
- Throwable::__toString — Gets a string representation of the thrown object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.throwable.php
