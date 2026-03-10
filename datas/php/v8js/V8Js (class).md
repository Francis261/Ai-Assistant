# The V8Js class

Source: https://devdocs.io/php/class.v8js

## Introduction

(PECL v8js >= 0.1.0)

This is the core class for V8Js extension. Each instance created from this class has own context in which all JavaScript is compiled and executed.

See V8Js::__construct() for more information.

## Class synopsis

```
public executeString(string $script, string $identifier = "V8Js::executeString()", int $flags = V8Js::FLAG_NONE): mixed
```

```
public static getExtensions(): array
```

```
public getPendingException(): V8JsException
```

```
public static registerExtension(
 string $extension_name,
 string $script,
 array $dependencies = array(),
 bool $auto_enable = false
): bool
```

## Predefined Constants

The V8 Javascript Engine version.

No flags.

Forces all JS objects to be associative arrays in PHP.

## Table of Contents

- V8Js::__construct — Construct a new V8Js object
- V8Js::executeString — Execute a string as Javascript code
- V8Js::getExtensions — Return an array of registered extensions
- V8Js::getPendingException — Return pending uncaught Javascript exception
- V8Js::registerExtension — Register Javascript extensions for V8Js

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.v8js.php
