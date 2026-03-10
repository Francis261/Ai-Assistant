# The ReflectionMethod class

Source: https://devdocs.io/php/class.reflectionmethod

## Introduction

(PHP 5, PHP 7, PHP 8)

The ReflectionMethod class reports information about a method.

## Class synopsis

```
public static createFromMethodName(string $method): static
```

```
public static export(string $class, string $name, bool $return = false): string
```

```
public getClosure(?object $object = null): Closure
```

```
public getDeclaringClass(): ReflectionClass
```

```
public getModifiers(): int
```

```
public getPrototype(): ReflectionMethod
```

```
public hasPrototype(): bool
```

```
public invoke(?object $object, mixed ...$args): mixed
```

```
public invokeArgs(?object $object, array $args): mixed
```

```
public isAbstract(): bool
```

```
public isConstructor(): bool
```

```
public isDestructor(): bool
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
#[\Deprecated] 
 public setAccessible(bool $accessible): void
```

```
public __toString(): string
```

```
private ReflectionFunctionAbstract::__clone(): void
```

```
public ReflectionFunctionAbstract::getAttributes(?string $name = null, int $flags = 0): array
```

```
public ReflectionFunctionAbstract::getClosureCalledClass(): ?ReflectionClass
```

```
public ReflectionFunctionAbstract::getClosureScopeClass(): ?ReflectionClass
```

```
public ReflectionFunctionAbstract::getClosureThis(): ?object
```

```
public ReflectionFunctionAbstract::getClosureUsedVariables(): array
```

```
public ReflectionFunctionAbstract::getDocComment(): string|false
```

```
public ReflectionFunctionAbstract::getEndLine(): int|false
```

```
public ReflectionFunctionAbstract::getExtension(): ?ReflectionExtension
```

```
public ReflectionFunctionAbstract::getExtensionName(): string|false
```

```
public ReflectionFunctionAbstract::getFileName(): string|false
```

```
public ReflectionFunctionAbstract::getName(): string
```

```
public ReflectionFunctionAbstract::getNamespaceName(): string
```

```
public ReflectionFunctionAbstract::getNumberOfParameters(): int
```

```
public ReflectionFunctionAbstract::getNumberOfRequiredParameters(): int
```

```
public ReflectionFunctionAbstract::getParameters(): array
```

```
public ReflectionFunctionAbstract::getReturnType(): ?ReflectionType
```

```
public ReflectionFunctionAbstract::getShortName(): string
```

```
public ReflectionFunctionAbstract::getStartLine(): int|false
```

```
public ReflectionFunctionAbstract::getStaticVariables(): array
```

```
public ReflectionFunctionAbstract::getTentativeReturnType(): ?ReflectionType
```

```
public ReflectionFunctionAbstract::hasReturnType(): bool
```

```
public ReflectionFunctionAbstract::hasTentativeReturnType(): bool
```

```
public ReflectionFunctionAbstract::inNamespace(): bool
```

```
public ReflectionFunctionAbstract::isClosure(): bool
```

```
public ReflectionFunctionAbstract::isDeprecated(): bool
```

```
public ReflectionFunctionAbstract::isGenerator(): bool
```

```
public ReflectionFunctionAbstract::isInternal(): bool
```

```
public ReflectionFunctionAbstract::isStatic(): bool
```

```
public ReflectionFunctionAbstract::isUserDefined(): bool
```

```
public ReflectionFunctionAbstract::isVariadic(): bool
```

```
public ReflectionFunctionAbstract::returnsReference(): bool
```

```
abstract public ReflectionFunctionAbstract::__toString(): void
```

## Properties

Method name

Class name

## Predefined Constants

## ReflectionMethod Modifiers

Indicates that the method is static. Prior to PHP 7.4.0, the value was 1.

Indicates that the method is public. Prior to PHP 7.4.0, the value was 256.

Indicates that the method is protected. Prior to PHP 7.4.0, the value was 512.

Indicates that the method is private. Prior to PHP 7.4.0, the value was 1024.

Indicates that the method is abstract. Prior to PHP 7.4.0, the value was 2.

Indicates that the method is final. Prior to PHP 7.4.0, the value was 4.

Note:

The values of these constants may change between PHP versions. It is recommended to always use the constants and not rely on the values directly.

## Changelog

## Table of Contents

- ReflectionMethod::__construct — Constructs a ReflectionMethod
- ReflectionMethod::createFromMethodName — Creates a new ReflectionMethod
- ReflectionMethod::export — Export a reflection method
- ReflectionMethod::getClosure — Returns a dynamically created closure for the method
- ReflectionMethod::getDeclaringClass — Gets declaring class for the reflected method
- ReflectionMethod::getModifiers — Gets the method modifiers
- ReflectionMethod::getPrototype — Gets the method prototype (if there is one)
- ReflectionMethod::hasPrototype — Returns whether a method has a prototype
- ReflectionMethod::invoke — Invoke
- ReflectionMethod::invokeArgs — Invoke args
- ReflectionMethod::isAbstract — Checks if method is abstract
- ReflectionMethod::isConstructor — Checks if method is a constructor
- ReflectionMethod::isDestructor — Checks if method is a destructor
- ReflectionMethod::isFinal — Checks if method is final
- ReflectionMethod::isPrivate — Checks if method is private
- ReflectionMethod::isProtected — Checks if method is protected
- ReflectionMethod::isPublic — Checks if method is public
- ReflectionMethod::setAccessible — Set method accessibility
- ReflectionMethod::__toString — Returns the string representation of the Reflection method object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionmethod.php
