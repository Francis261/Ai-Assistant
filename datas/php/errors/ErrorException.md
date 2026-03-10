# ErrorException

Source: https://devdocs.io/php/class.errorexception

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

An Error Exception.

## Class synopsis

```
final public getSeverity(): int
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

The severity of the exception

## Examples

Example #1 Use set_error_handler() to change error messages into ErrorException

```
<?php

set_error_handler(function (int $errno, string $errstr, string $errfile, int $errline) {
    if (!(error_reporting() & $errno)) {
        // This error code is not included in error_reporting.
        return;
    }

    if ($errno === E_DEPRECATED || $errno === E_USER_DEPRECATED) {
        // Do not throw an Exception for deprecation warnings as new or unexpected
        // deprecations would break the application.
        return;
    }

    throw new \ErrorException($errstr, 0, $errno, $errfile, $errline);
});

// Unserializing broken data triggers a warning which will be turned into an
// ErrorException by the error handler.
unserialize('broken data');

?>
```

The above example will output something similar to:

```
Fatal error: Uncaught ErrorException: unserialize(): Error at offset 0 of 11 bytes in test.php:16
Stack trace:
#0 [internal function]: {closure}(2, 'unserialize(): ...', 'test.php', 16)
#1 test.php(16): unserialize('broken data')
#2 {main}
  thrown in test.php on line 16
```

## Table of Contents

- ErrorException::__construct — Constructs the exception
- ErrorException::getSeverity — Gets the exception severity

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.errorexception.php
