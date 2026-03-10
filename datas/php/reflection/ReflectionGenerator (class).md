# The ReflectionGenerator class

Source: https://devdocs.io/php/class.reflectiongenerator

## Introduction

(PHP 7, PHP 8)

The ReflectionGenerator class reports information about a generator.

## Class synopsis

```
public getExecutingFile(): string
```

```
public getExecutingGenerator(): Generator
```

```
public getExecutingLine(): int
```

```
public getFunction(): ReflectionFunctionAbstract
```

```
public getThis(): ?object
```

```
public getTrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT): array
```

```
public isClosed(): bool
```

## Changelog

## Table of Contents

- ReflectionGenerator::__construct — Constructs a ReflectionGenerator object
- ReflectionGenerator::getExecutingFile — Gets the file name of the currently executing generator
- ReflectionGenerator::getExecutingGenerator — Gets the executing Generator object
- ReflectionGenerator::getExecutingLine — Gets the currently executing line of the generator
- ReflectionGenerator::getFunction — Gets the function name of the generator
- ReflectionGenerator::getThis — Gets the $this value of the generator
- ReflectionGenerator::getTrace — Gets the trace of the executing generator
- ReflectionGenerator::isClosed — Checks if execution finished

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectiongenerator.php
