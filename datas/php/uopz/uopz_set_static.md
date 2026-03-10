# uopz_set_static

Source: https://devdocs.io/php/function.uopz-set-static

(PECL uopz 5, PECL uopz , PECL uopz 7)

uopz_set_static — Sets the static variables in function or method scope

### Description

```
uopz_set_static(string $function, array $static): void
```

```
uopz_set_static(string $class, string $function, array $static): void
```

Sets the static variables in function or method scope.

### Parameters

The name of the class.

The name of the function or method.

The associative array of variable names mapped to their values.

### Return Values

No value is returned.

### Examples

Example #1 Basic uopz_set_static() Usage

```
<?php
function foo() {
    static $bar = 'baz';
    var_dump($bar);
}
uopz_set_static('foo', ['bar' => 'qux']);
foo();
?>
```

The above example will output:

```
string(3) "qux"
```

### See Also

- uopz_get_static() - Gets the static variables from function or method scope

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-set-static.php
