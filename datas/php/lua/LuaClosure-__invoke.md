# LuaClosure::__invoke

Source: https://devdocs.io/php/luaclosure.invoke

(PECL lua >=0.9.0)

LuaClosure::__invoke — Invoke luaclosure

### Description

```
public LuaClosure::__invoke(mixed ...$args): void
```

This function is currently not documented; only its argument list is available.

### Parameters

### Return Values

### Examples

Example #1 LuaClosure::__invoke()example

```
<?php
$lua = new Lua();
$closure = $lua->eval(<<<CODE
    return (function ()
        print("hello world")
    end)
CODE
);

$lua->call($closure);
$closure();
?>
```

The above example will output:

```
hello worldhello world
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/luaclosure.invoke.php
