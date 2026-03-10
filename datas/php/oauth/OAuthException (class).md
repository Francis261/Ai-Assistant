# OAuthException class

Source: https://devdocs.io/php/class.oauthexception

## Introduction

(PECL OAuth >= 0.99.1)

This exception is thrown when exceptional errors occur while using the OAuth extension and contains useful debugging information.

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

## Properties

The response of the exception which occurred, if any

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.oauthexception.php
