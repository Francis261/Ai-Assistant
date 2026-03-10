# uopz_set_hook

Source: https://devdocs.io/php/function.uopz-set-hook

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_set_hook — Sets hook to execute when entering a function or method

### Description

```
uopz_set_hook(string $function, Closure $hook): bool
```

```
uopz_set_hook(string $class, string $function, Closure $hook): bool
```

Sets a hook to execute when entering a function or method.

### Parameters

The name of the class.

The name of the function or method.

A closure to execute when entering the function or method.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Basic uopz_set_hook() Usage

```
<?php
function foo() {
    echo 'foo';
}
uopz_set_hook('foo', function () {echo 'bar';});
foo();
?>
```

The above example will output:

```
barfoo
```

### See Also

- uopz_get_hook() - Gets previously set hook on function or method
- uopz_unset_hook() - Removes previously set hook on function or method

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-set-hook.php
