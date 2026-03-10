# The ReflectionFunction class

Source: https://devdocs.io/php/class.reflectionfunction

## Introduction

(PHP 5, PHP 7, PHP 8)

The ReflectionFunction class reports information about a function.

## Class synopsis

```
public static export(string $name, string $return = ?): string
```

```
public getClosure(): Closure
```

```
public invoke(mixed ...$args): mixed
```

```
public invokeArgs(array $args): mixed
```

```
public isAnonymous(): bool
```

```
#[\Deprecated] 
 public isDisabled(): bool
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

## Predefined Constants

## ReflectionFunction Modifiers

Indicates deprecated functions.

## Changelog

## Table of Contents

- ReflectionFunction::__construct — Constructs a ReflectionFunction object
- ReflectionFunction::export — Exports function
- ReflectionFunction::getClosure — Returns a dynamically created closure for the function
- ReflectionFunction::invoke — Invokes function
- ReflectionFunction::invokeArgs — Invokes function args
- ReflectionFunction::isAnonymous — Checks if a function is anonymous
- ReflectionFunction::isDisabled — Checks if function is disabled
- ReflectionFunction::__toString — Returns the string representation of the ReflectionFunction object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionfunction.php
