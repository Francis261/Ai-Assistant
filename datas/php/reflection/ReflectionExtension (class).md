# The ReflectionExtension class

Source: https://devdocs.io/php/class.reflectionextension

## Introduction

(PHP 5, PHP 7, PHP 8)

The ReflectionExtension class reports information about an extension.

## Class synopsis

```
private __clone(): void
```

```
public static export(string $name, string $return = false): string
```

```
public getClasses(): array
```

```
public getClassNames(): array
```

```
public getConstants(): array
```

```
public getDependencies(): array
```

```
public getFunctions(): array
```

```
public getINIEntries(): array
```

```
public getName(): string
```

```
public getVersion(): ?string
```

```
public info(): void
```

```
public isPersistent(): bool
```

```
public isTemporary(): bool
```

```
public __toString(): string
```

## Properties

Name of the extension, same as calling the ReflectionExtension::getName() method.

## Changelog

## Table of Contents

- ReflectionExtension::__clone — Clones
- ReflectionExtension::__construct — Constructs a ReflectionExtension
- ReflectionExtension::export — Export
- ReflectionExtension::getClasses — Gets classes
- ReflectionExtension::getClassNames — Gets class names
- ReflectionExtension::getConstants — Gets constants
- ReflectionExtension::getDependencies — Gets dependencies
- ReflectionExtension::getFunctions — Gets extension functions
- ReflectionExtension::getINIEntries — Gets extension ini entries
- ReflectionExtension::getName — Gets extension name
- ReflectionExtension::getVersion — Gets extension version
- ReflectionExtension::info — Print extension info
- ReflectionExtension::isPersistent — Returns whether this extension is persistent
- ReflectionExtension::isTemporary — Returns whether this extension is temporary
- ReflectionExtension::__toString — To string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionextension.php
