# The Closure class

Source: https://devdocs.io/php/class.closure

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Class used to represent anonymous functions.

Anonymous functions yield objects of this type. This class has methods that allow further control of the anonymous function after it has been created.

Besides the methods listed here, this class also has an __invoke method. This is for consistency with other classes that implement calling magic, as this method is not used for calling the function.

## Class synopsis

```
public static bind(Closure $closure, ?object $newThis, object|string|null $newScope = "static"): ?Closure
```

```
public bindTo(?object $newThis, object|string|null $newScope = "static"): ?Closure
```

```
public call(object $newThis, mixed ...$args): mixed
```

```
public static fromCallable(callable $callback): Closure
```

## Changelog

## Table of Contents

- Closure::__construct — Constructor that disallows instantiation
- Closure::bind — Duplicates a closure with a specific bound object and class scope
- Closure::bindTo — Duplicates the closure with a new bound object and class scope
- Closure::call — Binds and calls the closure
- Closure::fromCallable — Converts a callable into a closure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.closure.php
