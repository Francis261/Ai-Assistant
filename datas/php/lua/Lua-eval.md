# Lua::eval

Source: https://devdocs.io/php/lua.eval

(PECL lua >=0.9.0)

Lua::eval — Evaluate a string as Lua code

### Description

```
public Lua::eval(string $statements): mixed
```

This function is currently not documented; only its argument list is available.

### Parameters

### Return Values

Returns result of evaled code, null for wrong arguments or false on other failure.

### Examples

Example #1 Lua::eval()example

```
<?php
$lua = new Lua();
$lua->eval(<<<CODE
    print(2);
CODE
);
?>
```

The above example will output:

```
2
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/lua.eval.php
