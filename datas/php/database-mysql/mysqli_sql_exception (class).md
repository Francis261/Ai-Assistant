# The mysqli_sql_exception class

Source: https://devdocs.io/php/class.mysqli-sql-exception

## Introduction

(PHP 5, PHP 7, PHP 8)

The mysqli exception handling class.

## Class synopsis

```
public getSqlState(): string
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

## Properties

The sql state with the error.

## Table of Contents

- mysqli_sql_exception::getSqlState — Returns the SQLSTATE error code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.mysqli-sql-exception.php
