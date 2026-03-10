# The ReflectionEnumUnitCase class

Source: https://devdocs.io/php/class.reflectionenumunitcase

## Introduction

(PHP 8 >= 8.1.0)

The ReflectionEnumUnitCase class reports information about an Enum unit case, which has no scalar equivalent.

## Class synopsis

```
public getEnum(): ReflectionEnum
```

```
public getValue(): UnitEnum
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
- ReflectionEnumBackedCase

## Table of Contents

- ReflectionEnumUnitCase::__construct — Instantiates a ReflectionEnumUnitCase object
- ReflectionEnumUnitCase::getEnum — Gets the reflection of the enum of this case
- ReflectionEnumUnitCase::getValue — Gets the enum case object described by this reflection object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionenumunitcase.php
