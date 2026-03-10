# The ReflectionEnumBackedCase class

Source: https://devdocs.io/php/class.reflectionenumbackedcase

## Introduction

(PHP 8 >= 8.1.0)

The ReflectionEnumBackedCase class reports information about an Enum backed case, which has a scalar equivalent.

## Class synopsis

```
public getBackingValue(): int|string
```

```
public ReflectionEnumUnitCase::getEnum(): ReflectionEnum
```

```
public ReflectionEnumUnitCase::getValue(): UnitEnum
```

```
public static ReflectionClassConstant::export(mixed $class, string $name, bool $return = ?): string
```

```
public ReflectionClassConstant::getAttributes(?string $name = null, int $flags = 0): array
```

```
public ReflectionClassConstant::getDeclaringClass(): ReflectionClass
```

```
public ReflectionClassConstant::getDocComment(): string|false
```

```
public ReflectionClassConstant::getModifiers(): int
```

```
public ReflectionClassConstant::getName(): string
```

```
public ReflectionClassConstant::getType(): ?ReflectionType
```

```
public ReflectionClassConstant::getValue(): mixed
```

```
public ReflectionClassConstant::hasType(): bool
```

```
public ReflectionClassConstant::isDeprecated(): bool
```

```
public ReflectionClassConstant::isEnumCase(): bool
```

```
public ReflectionClassConstant::isFinal(): bool
```

```
public ReflectionClassConstant::isPrivate(): bool
```

```
public ReflectionClassConstant::isProtected(): bool
```

```
public ReflectionClassConstant::isPublic(): bool
```

```
public ReflectionClassConstant::__toString(): string
```

## See Also

- Enumerations
- ReflectionEnumUnitCase

## Table of Contents

- ReflectionEnumBackedCase::__construct — Instantiates a ReflectionEnumBackedCase object
- ReflectionEnumBackedCase::getBackingValue — Gets the scalar value backing this Enum case

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionenumbackedcase.php
