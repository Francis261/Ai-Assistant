# The ReflectionClassConstant class

Source: https://devdocs.io/php/class.reflectionclassconstant

## Introduction

(PHP 7 >= 7.1.0, PHP 8)

The ReflectionClassConstant class reports information about a class constant.

## Class synopsis

```
public static export(mixed $class, string $name, bool $return = ?): string
```

```
public getAttributes(?string $name = null, int $flags = 0): array
```

```
public getDeclaringClass(): ReflectionClass
```

```
public getDocComment(): string|false
```

```
public getModifiers(): int
```

```
public getName(): string
```

```
public getType(): ?ReflectionType
```

```
public getValue(): mixed
```

```
public hasType(): bool
```

```
public isDeprecated(): bool
```

```
public isEnumCase(): bool
```

```
public isFinal(): bool
```

```
public isPrivate(): bool
```

```
public isProtected(): bool
```

```
public isPublic(): bool
```

```
public __toString(): string
```

## Properties

Name of the class constant. Read-only, throws ReflectionException in attempt to write.

Name of the class where the class constant is defined. Read-only, throws ReflectionException in attempt to write.

## Predefined Constants

## ReflectionClassConstant Modifiers

Indicates public constants. Prior to PHP 7.4.0, the value was 256.

Indicates protected constants. Prior to PHP 7.4.0, the value was 512.

Indicates private constants. Prior to PHP 7.4.0, the value was 1024.

Indicates final constants. Available as of PHP 8.1.0.

Note:

The values of these constants may change between PHP versions. It is recommended to always use the constants and not rely on the values directly.

## Changelog

## Table of Contents

- ReflectionClassConstant::__construct — Constructs a ReflectionClassConstant
- ReflectionClassConstant::export — Export
- ReflectionClassConstant::getAttributes — Gets Attributes
- ReflectionClassConstant::getDeclaringClass — Gets declaring class
- ReflectionClassConstant::getDocComment — Gets doc comments
- ReflectionClassConstant::getModifiers — Gets the class constant modifiers
- ReflectionClassConstant::getName — Get name of the constant
- ReflectionClassConstant::getType — Gets a class constant's type
- ReflectionClassConstant::getValue — Gets value
- ReflectionClassConstant::hasType — Checks if class constant has a type
- ReflectionClassConstant::isDeprecated — Checks if deprecated
- ReflectionClassConstant::isEnumCase — Checks if class constant is an Enum case
- ReflectionClassConstant::isFinal — Checks if class constant is final
- ReflectionClassConstant::isPrivate — Checks if class constant is private
- ReflectionClassConstant::isProtected — Checks if class constant is protected
- ReflectionClassConstant::isPublic — Checks if class constant is public
- ReflectionClassConstant::__toString — Returns the string representation of the ReflectionClassConstant object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionclassconstant.php
