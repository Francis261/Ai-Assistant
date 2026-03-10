# The Componere\Patch class

Source: https://devdocs.io/php/class.componere-patch

## Introduction

(Componere 2 >= 2.1.0)

The Patch class allows the programmer to change the type of an instance at runtime without registering a new Definition

When a Patch is destroyed it is reverted, so that instances that were patched during the lifetime of the Patch are restored to their formal type.

## Class synopsis

```
public apply(): void
```

```
public revert(): void
```

```
public isApplied(): bool
```

```
public derive(object $instance): Patch
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

- Componere\Patch::__construct — Patch Construction
- Componere\Patch::apply — Application
- Componere\Patch::revert — Reversal
- Componere\Patch::isApplied — State Detection
- Componere\Patch::derive — Patch Derivation
- Componere\Patch::getClosure — Get Closure
- Componere\Patch::getClosures — Get Closures

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.componere-patch.php
