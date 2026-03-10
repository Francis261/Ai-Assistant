# The UConverter class

Source: https://devdocs.io/php/class.uconverter

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

## Class synopsis

```
public convert(string $str, bool $reverse = false): string|false
```

```
public fromUCallback(
 int $reason,
 array $source,
 int $codePoint,
 int &$error
): string|int|array|null
```

```
public static getAliases(string $name): array|false|null
```

```
public static getAvailable(): array
```

```
public getDestinationEncoding(): string|false|null
```

```
public getDestinationType(): int|false|null
```

```
public getErrorCode(): int
```

```
public getErrorMessage(): ?string
```

```
public getSourceEncoding(): string|false|null
```

```
public getSourceType(): int|false|null
```

```
public static getStandards(): ?array
```

```
public getSubstChars(): string|false|null
```

```
public static reasonText(int $reason): string
```

```
public setDestinationEncoding(string $encoding): bool
```

```
public setSourceEncoding(string $encoding): bool
```

```
public setSubstChars(string $chars): bool
```

```
public toUCallback(
 int $reason,
 string $source,
 string $codeUnits,
 int &$error
): string|int|array|null
```

```
public static transcode(
 string $str,
 string $toEncoding,
 string $fromEncoding,
 ?array $options = null
): string|false
```

## Predefined Constants

## Changelog

## Table of Contents

- UConverter::__construct — Create UConverter object
- UConverter::convert — Convert string from one charset to another
- UConverter::fromUCallback — Default "from" callback function
- UConverter::getAliases — Get the aliases of the given name
- UConverter::getAvailable — Get the available canonical converter names
- UConverter::getDestinationEncoding — Get the destination encoding
- UConverter::getDestinationType — Get the destination converter type
- UConverter::getErrorCode — Get last error code on the object
- UConverter::getErrorMessage — Get last error message on the object
- UConverter::getSourceEncoding — Get the source encoding
- UConverter::getSourceType — Get the source converter type
- UConverter::getStandards — Get standards associated to converter names
- UConverter::getSubstChars — Get substitution chars
- UConverter::reasonText — Get string representation of the callback reason
- UConverter::setDestinationEncoding — Set the destination encoding
- UConverter::setSourceEncoding — Set the source encoding
- UConverter::setSubstChars — Set the substitution chars
- UConverter::toUCallback — Default "to" callback function
- UConverter::transcode — Convert a string from one character encoding to another

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.uconverter.php
