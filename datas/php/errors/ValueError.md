# ValueError

Source: https://devdocs.io/php/class.valueerror

## Introduction

(PHP 8)

A ValueError is thrown when the type of an argument is correct but the value of it is incorrect. For example, passing a negative integer when the function expects a positive one, or passing an empty string/array when the function expects it to not be empty.

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
 https://www.php.net/manual/en/class.valueerror.php
