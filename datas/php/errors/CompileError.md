# CompileError

Source: https://devdocs.io/php/class.compileerror

## Introduction

(PHP 7 > 7.3.0, PHP 8)

CompileError is thrown for some compilation errors, which formerly issued a fatal error.

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
 https://www.php.net/manual/en/class.compileerror.php
