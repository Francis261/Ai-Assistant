# The ReflectionParameter class

Source: https://devdocs.io/php/class.reflectionparameter

## Introduction

(PHP 5, PHP 7, PHP 8)

The ReflectionParameter class retrieves information about function's or method's parameters.

To introspect function parameters, first create an instance of the ReflectionFunction or ReflectionMethod classes and then use their ReflectionFunctionAbstract::getParameters() method to retrieve an array of parameters.

## Class synopsis

```
public allowsNull(): bool
```

```
public canBePassedByValue(): bool
```

```
private __clone(): void
```

```
public static export(string $function, string $parameter, bool $return = ?): string
```

```
public getAttributes(?string $name = null, int $flags = 0): array
```

```
#[\Deprecated] 
 public getClass(): ?ReflectionClass
```

```
public getDeclaringClass(): ?ReflectionClass
```

```
public getDeclaringFunction(): ReflectionFunctionAbstract
```

```
public getDefaultValue(): mixed
```

```
public getDefaultValueConstantName(): ?string
```

```
public getName(): string
```

```
public getPosition(): int
```

```
public getType(): ?ReflectionType
```

```
public hasType(): bool
```

```
#[\Deprecated] 
 public isArray(): bool
```

```
#[\Deprecated] 
 public isCallable(): bool
```

```
public isDefaultValueAvailable(): bool
```

```
public isDefaultValueConstant(): bool
```

```
public isOptional(): bool
```

```
public isPassedByReference(): bool
```

```
public isPromoted(): bool
```

```
public isVariadic(): bool
```

```
public __toString(): string
```

## Properties

Name of the parameter. Read-only, throws ReflectionException in attempt to write.

## Changelog

## Table of Contents

- ReflectionParameter::allowsNull — Checks if null is allowed
- ReflectionParameter::canBePassedByValue — Returns whether this parameter can be passed by value
- ReflectionParameter::__clone — Clone
- ReflectionParameter::__construct — Construct
- ReflectionParameter::export — Exports
- ReflectionParameter::getAttributes — Gets Attributes
- ReflectionParameter::getClass — Get a ReflectionClass object for the parameter being reflected or null
- ReflectionParameter::getDeclaringClass — Gets declaring class
- ReflectionParameter::getDeclaringFunction — Gets declaring function
- ReflectionParameter::getDefaultValue — Gets default parameter value
- ReflectionParameter::getDefaultValueConstantName — Returns the default value's constant name if default value is constant or null
- ReflectionParameter::getName — Gets parameter name
- ReflectionParameter::getPosition — Gets parameter position
- ReflectionParameter::getType — Gets a parameter's type
- ReflectionParameter::hasType — Checks if parameter has a type
- ReflectionParameter::isArray — Checks if parameter expects an array
- ReflectionParameter::isCallable — Returns whether parameter MUST be callable
- ReflectionParameter::isDefaultValueAvailable — Checks if a default value is available
- ReflectionParameter::isDefaultValueConstant — Returns whether the default value of this parameter is a constant
- ReflectionParameter::isOptional — Checks if optional
- ReflectionParameter::isPassedByReference — Checks if passed by reference
- ReflectionParameter::isPromoted — Checks if a parameter is promoted to a property
- ReflectionParameter::isVariadic — Checks if the parameter is variadic
- ReflectionParameter::__toString — To string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionparameter.php
