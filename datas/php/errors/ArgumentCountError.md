# ArgumentCountError

Source: https://devdocs.io/php/class.argumentcounterror

## Introduction

(PHP 7 >= PHP 7.1.0, PHP 8)

ArgumentCountError is thrown when too few arguments are passed to a user-defined function or method.

This error is also thrown when too many arguments are passed to a non-variadic built-in function.

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
 https://www.php.net/manual/en/class.argumentcounterror.php
