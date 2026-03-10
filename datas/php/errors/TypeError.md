# TypeError

Source: https://devdocs.io/php/class.typeerror

## Introduction

(PHP 7, PHP 8)

A TypeError may be thrown when:

- The value being set for a class property does not match the property's corresponding declared type.
- The argument type being passed to a function does not match its corresponding declared parameter type.
- A value being returned from a function does not match the declared function return type.

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

## Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.typeerror.php
