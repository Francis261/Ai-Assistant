# The ReflectionAttribute class

Source: https://devdocs.io/php/class.reflectionattribute

## Introduction

(PHP 8)

The ReflectionAttribute class provides information about an Attribute.

## Class synopsis

```
public getArguments(): array
```

```
public getName(): string
```

```
public getTarget(): int
```

```
public isRepeated(): bool
```

```
public newInstance(): object
```

## Properties

## Predefined Constants

## ReflectionAttribute Flags

Retrieve attributes using an instanceof check.

Note:

The values of these constants may change between PHP versions. It is recommended to always use the constants and not rely on the values directly.

## Changelog

## Table of Contents

- ReflectionAttribute::__construct — Private constructor to disallow direct instantiation
- ReflectionAttribute::getArguments — Gets arguments passed to attribute
- ReflectionAttribute::getName — Gets attribute name
- ReflectionAttribute::getTarget — Returns the target of the attribute as bitmask
- ReflectionAttribute::isRepeated — Returns whether the attribute of this name has been repeated on a code element
- ReflectionAttribute::newInstance — Instantiates the attribute class represented by this ReflectionAttribute class and arguments

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionattribute.php
