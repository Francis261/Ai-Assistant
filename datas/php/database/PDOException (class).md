# The PDOException class

Source: https://devdocs.io/php/class.pdoexception

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Represents an error raised by PDO. You should not throw a PDOException from your own code. See Exceptions for more information about Exceptions in PHP.

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

Corresponds to PDO::errorInfo() or PDOStatement::errorInfo()

SQLSTATE error code. Use Exception::getCode() to access it.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pdoexception.php
