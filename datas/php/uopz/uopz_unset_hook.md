# uopz_unset_hook

Source: https://devdocs.io/php/function.uopz-unset-hook

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_unset_hook — Removes previously set hook on function or method

### Description

```
uopz_unset_hook(string $function): bool
```

```
uopz_unset_hook(string $class, string $function): bool
```

Removes the previously set hook on a function or method.

### Parameters

The name of the class.

The name of the function or method.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Basic uopz_unset_hook() Usage

```
<?php
function foo() {
    echo 'foo';
}
uopz_set_hook('foo', function () {echo 'bar';});
foo();
echo PHP_EOL;
uopz_unset_hook('foo');
foo();
?>
```

The above example will output:

```
barfoo
foo
```

### See Also

- uopz_set_hook() - Sets hook to execute when entering a function or method
- uopz_get_hook() - Gets previously set hook on function or method

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-unset-hook.php
