# The ReflectionClass class

Source: https://devdocs.io/php/class.reflectionclass

## Introduction

(PHP 5, PHP 7, PHP 8)

The ReflectionClass class reports information about a class.

## Class synopsis

```
public static export(mixed $argument, bool $return = false): string
```

```
public getAttributes(?string $name = null, int $flags = 0): array
```

```
public getConstant(string $name): mixed
```

```
public getConstants(?int $filter = null): array
```

```
public getConstructor(): ?ReflectionMethod
```

```
public getDefaultProperties(): array
```

```
public getDocComment(): string|false
```

```
public getEndLine(): int|false
```

```
public getExtension(): ?ReflectionExtension
```

```
public getExtensionName(): string|false
```

```
public getFileName(): string|false
```

```
public getInterfaceNames(): array
```

```
public getInterfaces(): array
```

```
public getLazyInitializer(object $object): ?callable
```

```
public getMethod(string $name): ReflectionMethod
```

```
public getMethods(?int $filter = null): array
```

```
public getModifiers(): int
```

```
public getName(): string
```

```
public getNamespaceName(): string
```

```
public getParentClass(): ReflectionClass|false
```

```
public getProperties(?int $filter = null): array
```

```
public getProperty(string $name): ReflectionProperty
```

```
public getReflectionConstant(string $name): ReflectionClassConstant|false
```

```
public getReflectionConstants(?int $filter = null): array
```

```
public getShortName(): string
```

```
public getStartLine(): int|false
```

```
public getStaticProperties(): array
```

```
public getStaticPropertyValue(string $name, mixed &$def_value = ?): mixed
```

```
public getTraitAliases(): array
```

```
public getTraitNames(): array
```

```
public getTraits(): array
```

```
public hasConstant(string $name): bool
```

```
public hasMethod(string $name): bool
```

```
public hasProperty(string $name): bool
```

```
public implementsInterface(ReflectionClass|string $interface): bool
```

```
public initializeLazyObject(object $object): object
```

```
public inNamespace(): bool
```

```
public isAbstract(): bool
```

```
public isAnonymous(): bool
```

```
public isCloneable(): bool
```

```
public isEnum(): bool
```

```
public isFinal(): bool
```

```
public isInstance(object $object): bool
```

```
public isInstantiable(): bool
```

```
public isInterface(): bool
```

```
public isInternal(): bool
```

```
public isIterable(): bool
```

```
public isReadOnly(): bool
```

```
public isSubclassOf(ReflectionClass|string $class): bool
```

```
public isTrait(): bool
```

```
public isUninitializedLazyObject(object $object): bool
```

```
public isUserDefined(): bool
```

```
public markLazyObjectAsInitialized(object $object): object
```

```
public newInstance(mixed ...$args): object
```

```
public newInstanceArgs(array $args = []): ?object
```

```
public newInstanceWithoutConstructor(): object
```

```
public newLazyGhost(callable $initializer, int $options = 0): object
```

```
public newLazyProxy(callable $factory, int $options = 0): object
```

```
public resetAsLazyGhost(object $object, callable $initializer, int $options = 0): void
```

```
public resetAsLazyProxy(object $object, callable $factory, int $options = 0): void
```

```
public setStaticPropertyValue(string $name, mixed $value): void
```

```
public __toString(): string
```

## Properties

Name of the class. Read-only, throws ReflectionException in attempt to write.

## Predefined Constants

## ReflectionClass Modifiers

Indicates the class is abstract because it has some abstract methods.

Indicates the class is abstract because of its definition.

Indicates the class is final.

Indicates the class is readonly.

## Changelog

## Table of Contents

- ReflectionClass::__construct — Constructs a ReflectionClass
- ReflectionClass::export — Exports a class
- ReflectionClass::getAttributes — Gets Attributes
- ReflectionClass::getConstant — Gets defined constant
- ReflectionClass::getConstants — Gets constants
- ReflectionClass::getConstructor — Gets the constructor of the class
- ReflectionClass::getDefaultProperties — Gets default properties
- ReflectionClass::getDocComment — Gets doc comments
- ReflectionClass::getEndLine — Gets end line
- ReflectionClass::getExtension — Gets a ReflectionExtension object for the extension which defined the class
- ReflectionClass::getExtensionName — Gets the name of the extension which defined the class
- ReflectionClass::getFileName — Gets the filename of the file in which the class has been defined
- ReflectionClass::getInterfaceNames — Gets the interface names
- ReflectionClass::getInterfaces — Gets the interfaces
- ReflectionClass::getLazyInitializer — Gets lazy initializer
- ReflectionClass::getMethod — Gets a ReflectionMethod for a class method
- ReflectionClass::getMethods — Gets an array of methods
- ReflectionClass::getModifiers — Gets the class modifiers
- ReflectionClass::getName — Gets class name
- ReflectionClass::getNamespaceName — Gets namespace name
- ReflectionClass::getParentClass — Gets parent class
- ReflectionClass::getProperties — Gets properties
- ReflectionClass::getProperty — Gets a ReflectionProperty for a class's property
- ReflectionClass::getReflectionConstant — Gets a ReflectionClassConstant for a class's constant
- ReflectionClass::getReflectionConstants — Gets class constants
- ReflectionClass::getShortName — Gets short name
- ReflectionClass::getStartLine — Gets starting line number
- ReflectionClass::getStaticProperties — Gets static properties
- ReflectionClass::getStaticPropertyValue — Gets static property value
- ReflectionClass::getTraitAliases — Returns an array of trait aliases
- ReflectionClass::getTraitNames — Returns an array of names of traits used by this class
- ReflectionClass::getTraits — Returns an array of traits used by this class
- ReflectionClass::hasConstant — Checks if constant is defined
- ReflectionClass::hasMethod — Checks if method is defined
- ReflectionClass::hasProperty — Checks if property is defined
- ReflectionClass::implementsInterface — Implements interface
- ReflectionClass::initializeLazyObject — Forces initialization of a lazy object
- ReflectionClass::inNamespace — Checks if in namespace
- ReflectionClass::isAbstract — Checks if class is abstract
- ReflectionClass::isAnonymous — Checks if class is anonymous
- ReflectionClass::isCloneable — Returns whether this class is cloneable
- ReflectionClass::isEnum — Returns whether this is an enum
- ReflectionClass::isFinal — Checks if class is final
- ReflectionClass::isInstance — Checks class for instance
- ReflectionClass::isInstantiable — Checks if the class is instantiable
- ReflectionClass::isInterface — Checks if the class is an interface
- ReflectionClass::isInternal — Checks if class is defined internally by an extension, or the core
- ReflectionClass::isIterable — Check whether this class is iterable
- ReflectionClass::isIterateable — Alias of ReflectionClass::isIterable
- ReflectionClass::isReadOnly — Checks if class is readonly
- ReflectionClass::isSubclassOf — Checks if a subclass
- ReflectionClass::isTrait — Returns whether this is a trait
- ReflectionClass::isUninitializedLazyObject — Checks if an object is lazy and uninitialized
- ReflectionClass::isUserDefined — Checks if user defined
- ReflectionClass::markLazyObjectAsInitialized — Marks a lazy object as initialized without calling the initializer or factory
- ReflectionClass::newInstance — Creates a new class instance from given arguments
- ReflectionClass::newInstanceArgs — Creates a new class instance from given arguments
- ReflectionClass::newInstanceWithoutConstructor — Creates a new class instance without invoking the constructor
- ReflectionClass::newLazyGhost — Creates a new lazy ghost instance
- ReflectionClass::newLazyProxy — Creates a new lazy proxy instance
- ReflectionClass::resetAsLazyGhost — Resets an object and marks it as lazy
- ReflectionClass::resetAsLazyProxy — Resets an object and marks it as lazy
- ReflectionClass::setStaticPropertyValue — Sets public static property value
- ReflectionClass::__toString — Returns the string representation of the ReflectionClass object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionclass.php
