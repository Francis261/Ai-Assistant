# Lua::call

Source: https://devdocs.io/php/lua.call

# Lua::__call

(PECL lua >=0.9.0)

Lua::call -- Lua::__call — Call Lua functions

### Description

```
public Lua::call(callable $lua_func, array $args = ?, int $use_self = 0): mixed
```

```
public Lua::__call(callable $lua_func, array $args = ?, int $use_self = 0): mixed
```

This function is currently not documented; only its argument list is available.

### Parameters

Function name in lua

Arguments passed to the Lua function

Whether to use self

### Return Values

Returns result of the called function, null for wrong arguments or false on other failure.

### Examples

Example #1 Lua::call()example

```
<?php
$lua = new Lua();
$lua->eval(<<<CODE
    function dummy(foo, bar)
        print(foo, ",", bar)
    end
CODE
);
$lua->call("dummy", array("Lua", "geiliable\n"));
$lua->dummy("Lua", "geiliable"); // __call()
var_dump($lua->call(array("table", "concat"), array(array(1=>1, 2=>2, 3=>3), "-")));
?>
```

The above example will output:

```
Lua,geiliable
Lua,geiliable
string(5) "1-2-3"
```

### See Also

- __call()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/lua.call.php
