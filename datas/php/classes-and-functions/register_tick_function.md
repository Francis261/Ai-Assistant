# register_tick_function

Source: https://devdocs.io/php/function.register-tick-function

(PHP 4 >= 4.0.3, PHP 5, PHP 7, PHP 8)

register_tick_function — Register a function for execution on each tick

### Description

```
register_tick_function(callable $callback, mixed ...$args): bool
```

Registers the given callback to be executed when a tick is called.

### Parameters

The function to register.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 register_tick_function() example

```
<?php
declare(ticks=1);

function my_tick_function($param) {
    echo "Tick callback function called with param: $param\n";
}

register_tick_function('my_tick_function', true);
?>
```

### See Also

- declare
- unregister_tick_function() - De-register a function for execution on each tick

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.register-tick-function.php
