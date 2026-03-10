# The DateObjectError class

Source: https://devdocs.io/php/class.dateobjecterror

## Introduction

(PHP 8 >= 8.3.0)

Thrown when one of the Date/Time classes has not been correctly initialised.

Because Date/Time classes are not final, these classes can be inherit. When the parent constructor is not called, this error is thrown. This is always a programming error.

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

## See Also

- DateError
- DateRangeError

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dateobjecterror.php
