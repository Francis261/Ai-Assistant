# Exception class for intl errors

Source: https://devdocs.io/php/class.intlexception

## Introduction

(PHP 5 > 5.5.0, PHP 7, PHP 8, PECL intl > 3.0.0a1)

This class is used for generating exceptions when errors occur inside intl functions. Such exceptions are only generated when intl.use_exceptions is enabled.

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
 https://www.php.net/manual/en/class.intlexception.php
