# The JsonException class

Source: https://devdocs.io/php/class.jsonexception

## Introduction

(PHP 7 >= 7.3.0, PHP 8)

Exception thrown if JSON_THROW_ON_ERROR option is set for json_encode() or json_decode(). code contains the error type, for possible values see json_last_error().

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
 https://www.php.net/manual/en/class.jsonexception.php
