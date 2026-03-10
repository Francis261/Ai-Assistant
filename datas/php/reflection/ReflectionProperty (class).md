# The ReflectionProperty class

Source: https://devdocs.io/php/class.reflectionproperty

## Introduction

(PHP 5, PHP 7, PHP 8)

The ReflectionProperty class reports information about class properties.

## Class synopsis

```
private __clone(): void
```

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
public getDefaultValue(): mixed
```

```
public getDocComment(): string|false
```

```
public getHook(PropertyHookType $type): ?ReflectionMethod
```

```
public getHooks(): array
```

```
public getModifiers(): int
```

```
public getName(): string
```

```
public getRawValue(object $object): mixed
```

```
public getSettableType(): ?ReflectionType
```

```
public getType(): ?ReflectionType
```

```
public getValue(?object $object = null): mixed
```

```
public hasDefaultValue(): bool
```

```
public hasHook(PropertyHookType $type): bool
```

```
public hasHooks(): bool
```

```
public hasType(): bool
```

```
public isAbstract(): bool
```

```
public isDefault(): bool
```

```
public isDynamic(): bool
```

```
public isFinal(): bool
```

```
public isInitialized(?object $object = null): bool
```

```
public isLazy(object $object): bool
```

```
public isPrivate(): bool
```

```
public isPrivateSet(): bool
```

```
public isPromoted(): bool
```

```
public isProtected(): bool
```

```
public isProtectedSet(): bool
```

```
public isPublic(): bool
```

```
public isReadOnly(): bool
```

```
public isStatic(): bool
```

```
public isVirtual(): bool
```

```
#[\Deprecated] 
 public setAccessible(bool $accessible): void
```

```
public setRawValue(object $object, mixed $value): void
```

```
public setRawValueWithoutLazyInitialization(object $object, mixed $value): void
```

```
public setValue(?object $object, mixed $value): void
```

```
public skipLazyInitialization(object $object): void
```

```
public __toString(): string
```

## Properties

Name of the property. Read-only, throws ReflectionException in attempt to write.

Name of the class where the property is defined. Read-only, throws ReflectionException in attempt to write.

## Predefined Constants

## ReflectionProperty Modifiers

Indicates static properties. Prior to PHP 7.4.0, the value was 1.

Indicates readonly properties. Available as of PHP 8.1.0.

Indicates public properties. Prior to PHP 7.4.0, the value was 256.

Indicates protected properties. Prior to PHP 7.4.0, the value was 512.

Indicates private properties. Prior to PHP 7.4.0, the value was 1024.

Note:

The values of these constants may change between PHP versions. It is recommended to always use the constants and not rely on the values directly.

## Changelog

## Table of Contents

- ReflectionProperty::__clone — Clone
- ReflectionProperty::__construct — Construct a ReflectionProperty object
- ReflectionProperty::export — Export
- ReflectionProperty::getAttributes — Gets Attributes
- ReflectionProperty::getDeclaringClass — Gets declaring class
- ReflectionProperty::getDefaultValue — Returns the default value declared for a property
- ReflectionProperty::getDocComment — Gets the property doc comment
- ReflectionProperty::getHook — Returns a reflection object for a specified hook
- ReflectionProperty::getHooks — Returns an array of all hooks on this property
- ReflectionProperty::getModifiers — Gets the property modifiers
- ReflectionProperty::getName — Gets property name
- ReflectionProperty::getRawValue — Returns the value of a property, bypassing a get hook if defined
- ReflectionProperty::getSettableType — Returns the parameter type of a setter hook
- ReflectionProperty::getType — Gets a property's type
- ReflectionProperty::getValue — Gets value
- ReflectionProperty::hasDefaultValue — Checks if property has a default value declared
- ReflectionProperty::hasHook — Returns whether the property has a given hook defined
- ReflectionProperty::hasHooks — Returns whether the property has any hooks defined
- ReflectionProperty::hasType — Checks if property has a type
- ReflectionProperty::isAbstract — Determines if a property is abstract
- ReflectionProperty::isDefault — Checks if property is a default property
- ReflectionProperty::isDynamic — Checks if property is a dynamic property
- ReflectionProperty::isFinal — Determines if this property is final or not
- ReflectionProperty::isInitialized — Checks whether a property is initialized
- ReflectionProperty::isLazy — Checks whether a property is lazy
- ReflectionProperty::isPrivate — Checks if property is private
- ReflectionProperty::isPrivateSet — Checks if property is private for writing
- ReflectionProperty::isPromoted — Checks if property is promoted
- ReflectionProperty::isProtected — Checks if property is protected
- ReflectionProperty::isProtectedSet — Checks whether the property is protected for writing
- ReflectionProperty::isPublic — Checks if property is public
- ReflectionProperty::isReadOnly — Checks if property is readonly
- ReflectionProperty::isStatic — Checks if property is static
- ReflectionProperty::isVirtual — Determines if a property is virtual
- ReflectionProperty::setAccessible — Set property accessibility
- ReflectionProperty::setRawValue — Sets the value of a property, bypassing a set hook if defined
- ReflectionProperty::setRawValueWithoutLazyInitialization — Set raw property value without triggering lazy initialization
- ReflectionProperty::setValue — Set property value
- ReflectionProperty::skipLazyInitialization — Marks property as non-lazy
- ReflectionProperty::__toString — To string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionproperty.php
