# The DOMException / Dom\Exception class

Source: https://devdocs.io/php/class.domexception

## Introduction

(PHP 5, PHP 7, PHP 8)

DOM operations raise exceptions under particular circumstances, i.e., when an operation is impossible to perform for logical reasons.

This class is aliased as Dom\Exception in the Dom namespace.

See also Exceptions.

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

## Properties

An integer indicating the type of error generated

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domexception.php
