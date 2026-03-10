# The Componere\Definition class

Source: https://devdocs.io/php/class.componere-definition

## Introduction

(Componere 2 >= 2.1.0)

The Definition class allows the programmer to build and register a type at runtime.

Should a Definition replace an existing class, the existing class will be restored when the Definition is destroyed.

## Class synopsis

```
public addConstant(string $name, Componere\Value $value): Definition
```

```
public addProperty(string $name, Componere\Value $value): Definition
```

```
public register(): void
```

```
public isRegistered(): bool
```

```
public getClosure(string $name): Closure
```

```
public getClosures(): array
```

```
public Componere\Abstract\Definition::addInterface(string $interface): Definition
```

```
public Componere\Abstract\Definition::addMethod(string $name, Componere\Method $method): Definition
```

```
public Componere\Abstract\Definition::addTrait(string $trait): Definition
```

```
public Componere\Abstract\Definition::getReflector(): ReflectionClass
```

## Table of Contents

- Componere\Definition::__construct — Definition Construction
- Componere\Definition::addConstant — Add Constant
- Componere\Definition::addProperty — Add Property
- Componere\Definition::register — Registration
- Componere\Definition::isRegistered — State Detection
- Componere\Definition::getClosure — Get Closure
- Componere\Definition::getClosures — Get Closures

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.componere-definition.php
