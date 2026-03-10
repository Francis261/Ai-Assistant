# The ReflectionEnum class

Source: https://devdocs.io/php/class.reflectionenum

## Introduction

(PHP 8 >= 8.1.0)

The ReflectionEnum class reports information about an Enum.

## Class synopsis

```
public getBackingType(): ?ReflectionNamedType
```

```
public getCase(string $name): ReflectionEnumUnitCase
```

```
public getCases(): array
```

```
public hasCase(string $name): bool
```

```
public isBacked(): bool
```

```
public static ReflectionClass::export(mixed $argument, bool $return = false): string
```

```
public ReflectionClass::getAttributes(?string $name = null, int $flags = 0): array
```

```
public ReflectionClass::getConstant(string $name): mixed
```

```
public ReflectionClass::getConstants(?int $filter = null): array
```

```
public ReflectionClass::getConstructor(): ?ReflectionMethod
```

```
public ReflectionClass::getDefaultProperties(): array
```

```
public ReflectionClass::getDocComment(): string|false
```

```
public ReflectionClass::getEndLine(): int|false
```

```
public ReflectionClass::getExtension(): ?ReflectionExtension
```

```
public ReflectionClass::getExtensionName(): string|false
```

```
public ReflectionClass::getFileName(): string|false
```

```
public ReflectionClass::getInterfaceNames(): array
```

```
public ReflectionClass::getInterfaces(): array
```

```
public ReflectionClass::getLazyInitializer(object $object): ?callable
```

```
public ReflectionClass::getMethod(string $name): ReflectionMethod
```

```
public ReflectionClass::getMethods(?int $filter = null): array
```

```
public ReflectionClass::getModifiers(): int
```

```
public ReflectionClass::getName(): string
```

```
public ReflectionClass::getNamespaceName(): string
```

```
public ReflectionClass::getParentClass(): ReflectionClass|false
```

```
public ReflectionClass::getProperties(?int $filter = null): array
```

```
public ReflectionClass::getProperty(string $name): ReflectionProperty
```

```
public ReflectionClass::getReflectionConstant(string $name): ReflectionClassConstant|false
```

```
public ReflectionClass::getReflectionConstants(?int $filter = null): array
```

```
public ReflectionClass::getShortName(): string
```

```
public ReflectionClass::getStartLine(): int|false
```

```
public ReflectionClass::getStaticProperties(): array
```

```
public ReflectionClass::getStaticPropertyValue(string $name, mixed &$def_value = ?): mixed
```

```
public ReflectionClass::getTraitAliases(): array
```

```
public ReflectionClass::getTraitNames(): array
```

```
public ReflectionClass::getTraits(): array
```

```
public ReflectionClass::hasConstant(string $name): bool
```

```
public ReflectionClass::hasMethod(string $name): bool
```

```
public ReflectionClass::hasProperty(string $name): bool
```

```
public ReflectionClass::implementsInterface(ReflectionClass|string $interface): bool
```

```
public ReflectionClass::initializeLazyObject(object $object): object
```

```
public ReflectionClass::inNamespace(): bool
```

```
public ReflectionClass::isAbstract(): bool
```

```
public ReflectionClass::isAnonymous(): bool
```

```
public ReflectionClass::isCloneable(): bool
```

```
public ReflectionClass::isEnum(): bool
```

```
public ReflectionClass::isFinal(): bool
```

```
public ReflectionClass::isInstance(object $object): bool
```

```
public ReflectionClass::isInstantiable(): bool
```

```
public ReflectionClass::isInterface(): bool
```

```
public ReflectionClass::isInternal(): bool
```

```
public ReflectionClass::isIterable(): bool
```

```
public ReflectionClass::isReadOnly(): bool
```

```
public ReflectionClass::isSubclassOf(ReflectionClass|string $class): bool
```

```
public ReflectionClass::isTrait(): bool
```

```
public ReflectionClass::isUninitializedLazyObject(object $object): bool
```

```
public ReflectionClass::isUserDefined(): bool
```

```
public ReflectionClass::markLazyObjectAsInitialized(object $object): object
```

```
public ReflectionClass::newInstance(mixed ...$args): object
```

```
public ReflectionClass::newInstanceArgs(array $args = []): ?object
```

```
public ReflectionClass::newInstanceWithoutConstructor(): object
```

```
public ReflectionClass::newLazyGhost(callable $initializer, int $options = 0): object
```

```
public ReflectionClass::newLazyProxy(callable $factory, int $options = 0): object
```

```
public ReflectionClass::resetAsLazyGhost(object $object, callable $initializer, int $options = 0): void
```

```
public ReflectionClass::resetAsLazyProxy(object $object, callable $factory, int $options = 0): void
```

```
public ReflectionClass::setStaticPropertyValue(string $name, mixed $value): void
```

```
public ReflectionClass::__toString(): string
```

## See Also

- Enumerations

## Table of Contents

- ReflectionEnum::__construct — Instantiates a ReflectionEnum object
- ReflectionEnum::getBackingType — Gets the backing type of an Enum, if any
- ReflectionEnum::getCase — Returns a specific case of an Enum
- ReflectionEnum::getCases — Returns a list of all cases on an Enum
- ReflectionEnum::hasCase — Checks for a case on an Enum
- ReflectionEnum::isBacked — Determines if an Enum is a Backed Enum

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionenum.php
