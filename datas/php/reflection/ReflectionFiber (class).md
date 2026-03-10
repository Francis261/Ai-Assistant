# The ReflectionFiber class

Source: https://devdocs.io/php/class.reflectionfiber

## Introduction

(PHP 8 >= 8.1.0)

## Class synopsis

```
public getCallable(): callable
```

```
public getExecutingFile(): ?string
```

```
public getExecutingLine(): ?int
```

```
public getFiber(): Fiber
```

```
public getTrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT): array
```

## Table of Contents

- ReflectionFiber::__construct — Constructs a ReflectionFiber object
- ReflectionFiber::getCallable — Gets the callable used to create the Fiber
- ReflectionFiber::getExecutingFile — Get the file name of the current execution point
- ReflectionFiber::getExecutingLine — Get the line number of the current execution point
- ReflectionFiber::getFiber — Get the reflected Fiber instance
- ReflectionFiber::getTrace — Get the backtrace of the current execution point

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.reflectionfiber.php
