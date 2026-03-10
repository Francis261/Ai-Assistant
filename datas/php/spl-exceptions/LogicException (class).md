# The LogicException class

Source: https://devdocs.io/php/class.logicexception

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Exception that represents error in the program logic. This kind of exception should lead directly to a fix in your code.

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
 https://www.php.net/manual/en/class.logicexception.php
