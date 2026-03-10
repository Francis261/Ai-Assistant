# ParseError

Source: https://devdocs.io/php/class.parseerror

## Introduction

(PHP 7, PHP 8)

ParseError is thrown when an error occurs while parsing PHP code, such as when eval() is called.

Note: ParseError extends CompileError as of PHP 7.3.0. Formerly, it extended Error.

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
 https://www.php.net/manual/en/class.parseerror.php
