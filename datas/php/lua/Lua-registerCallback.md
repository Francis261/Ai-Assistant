# Lua::registerCallback

Source: https://devdocs.io/php/lua.registercallback

(No version information available, might only be in Git)

Lua::registerCallback — Register a PHP function to Lua

### Description

```
public Lua::registerCallback(string $name, callable $function): mixed
```

Register a PHP function to Lua as a function named "$name"

### Parameters

A valid PHP function callback

### Return Values

Returns $this, null for wrong arguments or false on other failure.

### Examples

Example #1 Lua::registerCallback()example

```
<?php
$lua = new Lua();
$lua->registerCallback("echo", "var_dump");
$lua->eval(<<<CODE
    echo({1, 2, 3});
CODE
);
?>
```

The above example will output:

```
array(3) {
  [1]=>
  float(1)
  [2]=>
  float(2)
  [3]=>
  float(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/lua.registercallback.php
