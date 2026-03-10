# The BackedEnum interface

Source: https://devdocs.io/php/class.backedenum

## Introduction

(PHP 8 >= 8.1.0)

The BackedEnum interface is automatically applied to backed enumerations by the engine. It may not be implemented by user-defined classes. Enumerations may not override its methods, as default implementations are provided by the engine. It is available only for type checks.

## Interface synopsis

```
public static from(int|string $value): static
```

```
public static tryFrom(int|string $value): ?static
```

```
public static UnitEnum::cases(): array
```

## Table of Contents

- BackedEnum::from — Maps a scalar to an enum instance
- BackedEnum::tryFrom — Maps a scalar to an enum instance or null

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.backedenum.php
