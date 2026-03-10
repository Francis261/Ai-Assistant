# The Lua class

Source: https://devdocs.io/php/class.lua

## Introduction

(PECL lua >=0.9.0)

## Class synopsis

```
public assign(string $name, string $value): mixed
```

```
public call(callable $lua_func, array $args = ?, int $use_self = 0): mixed
```

```
public __call(callable $lua_func, array $args = ?, int $use_self = 0): mixed
```

```
public __construct(string $lua_script_file = NULL)
```

```
public eval(string $statements): mixed
```

```
public getVersion(): string
```

```
public include(string $file): mixed
```

```
public registerCallback(string $name, callable $function): mixed
```

## Predefined Constants

## Table of Contents

- Lua::assign — Assign a PHP variable to Lua
- Lua::call — Call Lua functions
- Lua::__construct — Lua constructor
- Lua::eval — Evaluate a string as Lua code
- Lua::getVersion — The getversion purpose
- Lua::include — Parse a Lua script file
- Lua::registerCallback — Register a PHP function to Lua

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.lua.php
