# Lua::assign

Source: https://devdocs.io/php/lua.assign

(PECL lua >=0.9.0)

Lua::assign — Assign a PHP variable to Lua

### Description

```
public Lua::assign(string $name, string $value): mixed
```

This function is currently not documented; only its argument list is available.

### Parameters

### Return Values

Returns $this or null on failure.

### Examples

Example #1 Lua::assign()example

```
<?php
$lua = new Lua();
$lua->assign("php_var", array(1=>1, 2, 3)); //lua table index begin with 1
$lua->eval(<<<CODE
    print(php_var);
CODE
);
?>
```

The above example will output:

```
Array
 (
     [1] => 1
     [2] => 2
     [3] => 3
 )
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/lua.assign.php
