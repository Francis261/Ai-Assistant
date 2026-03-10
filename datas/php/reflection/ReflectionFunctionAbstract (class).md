# The ReflectionFunctionAbstract class

Source: https://devdocs.io/php/class.reflectionfunctionabstract

## Introduction

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

A parent class to ReflectionFunction, read its description for details.

## Class synopsis

```
private __clone(): void
```

```
public getAttributes(?string $name = null, int $flags = 0): array
```

```
public getClosureCalledClass(): ?ReflectionClass
```

```
public getClosureScopeClass(): ?ReflectionClass
```

```
public getClosureThis(): ?object
```

```
public getClosureUsedVariables(): array
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
public getName(): string
```

```
public getNamespaceName(): string
```

```
public getNumberOfParameters(): int
```

```
public getNumberOfRequiredParameters(): int
```

```
public getParameters(): array
```

```
public getReturnType(): ?ReflectionType
```

```
public getShortName(): string
```

```
public getStartLine(): int|false
```

```
public getStaticVariables(): array
```

```
public getTentativeReturnType(): ?ReflectionType
```

```
public hasReturnType(): bool
```

```
public hasTentativeReturnType(): bool
```

```
public inNamespace(): bool
```

```
public isClosure(): bool
```

```
public isDeprecated(): bool
```

```
public isGenerator(): bool
```

```
public isInternal(): bool
```

```
public isStatic(): bool
```

```
public isUserDefined(): bool
```

```
public isVariadic(): bool
```

```
public returnsReference(): bool
```

```
abstract public __toString(): void
```

## Properties

Name of the function. Read-only, throws ReflectionException in attempt to write.

## Table of Contents

- ReflectionFunctionAbstract::__clone — Clones function
- ReflectionFunctionAbstract::getAttributes — Gets Attributes
- ReflectionFunctionAbstract::getClosureCalledClass — Returns the class corresponding to static:: inside a closure
- ReflectionFunctionAbstract::getClosureScopeClass — Returns the class corresponding to the scope inside a closure
- ReflectionFunctionAbstract::getClosureThis — Returns the object which corresponds to $this inside a closure
- ReflectionFunctionAbstract::getClosureUsedVariables — Returns an array of the used variables in the Closure
- ReflectionFunctionAbstract::getDocComment — Gets doc comment
- ReflectionFunctionAbstract::getEndLine — Gets end line number
- ReflectionFunctionAbstract::getExtension — Gets extension info
- ReflectionFunctionAbstract::getExtensionName — Gets extension name
- ReflectionFunctionAbstract::getFileName — Gets file name
- ReflectionFunctionAbstract::getName — Gets function name
- ReflectionFunctionAbstract::getNamespaceName — Gets namespace name
- ReflectionFunctionAbstract::getNumberOfParameters — Gets number of parameters
- ReflectionFunctionAbstract::getNumberOfRequiredParameters — Gets number of required parameters
- ReflectionFunctionAbstract::getParameters — Gets parameters
- ReflectionFunctionAbstract::getReturnType — Gets the specified return type of a function
- ReflectionFunctionAbstract::getShortName — Gets function short name
- ReflectionFunctionAbstract::getStartLine — Gets starting line number
- ReflectionFunctionAbstract::getStaticVariables — Gets static variables
- ReflectionFunctionAbstract::getTentativeReturnType — Returns the tentative return type associated with the function
- ReflectionFunctionAbstract::hasReturnType — Checks if the function has a specified return type
- ReflectionFunctionAbstract::hasTentativeReturnType — Returns whether the function has a tentative return type
- ReflectionFunctionAbstract::inNamespace — Checks if function in namespace
- ReflectionFunctionAbstract::isClosure — Checks if closure
- ReflectionFunctionAbstract::isDeprecated — Checks if deprecated
- ReflectionFunctionAbstract::isGenerator — Returns whether this function is a generator
- ReflectionFunctionAbstract::isInternal — Checks if is internal
- ReflectionFunctionAbstract::isStatic — Checks if the function is static
- ReflectionFunctionAbstract::isUserDefined — Checks if user defined
- ReflectionFunctionAbstract::isVariadic — Checks if the function is variadic
- ReflectionFunctionAbstract::returnsReference — Checks if returns reference
- ReflectionFunctionAbstract::__toString — Returns the string representation of the ReflectionFunctionAbstract object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionfunctionabstract.php
